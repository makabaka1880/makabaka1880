# 搭建茶屿后端

::: 申明
本文不是关于密码学的，仅仅是关于应用各种最佳应用安全API的指南
:::

## 引入
作为一个无聊至极的准高中生，中考过后的暑假总感觉有点无聊；遂决定去黑客松欺负小朋友（bushi

简而言之我们的项目后端需要一个用户系统，但我没写过 :(

于是在奋战了一周之后算是学懂了各种诸如 JWT、OAuth2、Session 等认证授权的知识，也对如何设计一个用户系统有了一定的了解。

接下来就是动手实现了。

## 数据库

我们采用了PostgresSQL作为后端数据库，主要是因为它的性能优越、功能强大，并且有着良好的社区支持。同时，PostgresSQL 也提供了丰富的数据类型和扩展功能，能够满足我们项目的需求。HTTP Server-Side我们就用了Server-Side Swift（老苹果了（悲 并配上了Vapor框架与Fluent做ORM

首先就是用户系统最基本的部分了，一个**用户表**。

```sql
CREATE EXTENSION IF NOT EXISTS pscrypto;

CREATE TABLE users (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
);
```

接下来就是一些用户一般会有的属性了

```sql
CREATE EXTENSION IF NOT EXISTS pscrypto;

CREATE TABLE users (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,  -- Username
    email TEXT NOT NULL UNIQUE,  -- Email
);
```

然后就是很重要的一点了，用户的**验证**

我们一般都会用一个**密码 Password**来验证用户的身份，最自然而然能想到的方法就是直接存在数据库了

```sql
CREATE EXTENSION IF NOT EXISTS pscrypto;

CREATE TABLE users (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL, -- here
);
```

但是现在有个问题：密码是明文存在数据库里的，如果泄漏了后果不堪设想，特别是管理员的密码；怎么办呢？

```sql
CREATE EXTENSION IF NOT EXISTS pscrypto;

CREATE TABLE users (
    id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_encrypted TEXT NOT NULL,
);
```

我们回看一下密码验证的过程：
1. 用户输入密码
2. 前端把需要比对的密码发回来
3. 后端判断是否是本来的密码

我们会发现一件事情：密码只需要满足一个验证条件而已，但事实上这不一定需要*本来的密码等于前端发来的密码*！

那怎么利用这个优势呢？我们翻开密码学教材可以看到一个很重要的概念：哈希算法。

哈希算法（Hashing）是确保密码安全存储和验证的核心。它是一种单向函数，将输入（如密码）转换为固定长度的输出（哈希值）。最重要的是，哈希过程是不可逆的，这意味着无法从哈希值中恢复出原始密码。因此，我们可以通过哈希来确保即使数据库被泄露，攻击者也无法获取用户的明文密码。

- **用户输入密码:** 用户在登录时输入密码。
- **前端发送密码哈希:** 前端将密码哈希值发送给后端，而不是发送明文密码。前端可以先用客户端的哈希算法对密码进行处理，确保网络传输时不会暴露密码明文。
- **后端验证密码:** 后端在接收到密码哈希后，将用户输入的哈希值与数据库中存储的哈希值进行比较。哈希值匹配，则表示密码正确，认证通过。

那我们密码这一关就过啦

```sql
-- 加点别的
CREATE TYPE status AS ENUM ('ok', 'banned', 'down');
CREATE TYPE user_role AS ENUM ('user', 'admin', 'moderator');

CREATE OR REPLACE FUNCTION gen_identifier(
    prefix TEXT DEFAULT 'user_',
    table_name TEXT DEFAULT 'users',
    column_name TEXT DEFAULT 'username'
)
RETURNS TEXT AS $$
DECLARE
    chars TEXT[] := ARRAY['0','1','2','3','4','5','6','7','8','9',
                          'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                          'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    base TEXT := '';
    new_identifier TEXT;
    identifier_exists BOOLEAN;
    query TEXT;
    i INTEGER;
BEGIN
    LOOP
        -- Reset base for each attempt
        base := '';
        -- Generate an 11-character random string
        FOR i IN 0..10 LOOP
            base := base || chars[1 + FLOOR(RANDOM() * array_length(chars, 1))::INTEGER];
        END LOOP;

        new_identifier := prefix || base;

        -- Check for uniqueness using dynamic SQL
        query := format('SELECT EXISTS(SELECT 1 FROM %I WHERE %I = %L)', table_name, column_name, new_identifier);
        EXECUTE query INTO identifier_exists;

        IF NOT identifier_exists THEN
            RETURN new_identifier;
        END IF;
    END LOOP;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE DEFAULT gen_identifier('user_', 'users', 'username'),
    pass_hask TEXT NOT NULL,
    user_role user_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status status NOT NULL DEFAULT 'ok',
    avatar_url TEXT
);
```


## 实现

我们的引用层用的是Swift Vapor。首先我们先来大概写一个ORM吧：

```swift

import Vapor
import Fluent

final class User: Model, Content, @unchecked Sendable {
    static let schema = "users"

    // Fields
    @ID(key: .id)
    var id: UUID?

    @Field(key: "email")
    var email: String

    @Field(key: "username")
    var username: String

    @Field(key: "pass_hask")
    var passHash: String

    @Enum(key: "user_role")
    var userRole: UserRole

    @Enum(key: "user_status")
    var userStatus: UserStatus

    @Field(key: "created_at")
    var createdAt: Date

    @Field(key: "avatar_url")
    var avatarUrl: String?

    @OptionalChild(for: \.$user)
    var userData: UserData?

    init() {}

    init(
        id: UUID? = nil, 
        email: String, 
        username: String, 
        passHash: String, 
        userRole: UserRole = .user, 
        userStatus: UserStatus = .ok, 
        createdAt: Date = Date(), 
        avatarUrl: String? = nil
    ) {
        self.id = id
        self.email = email
        self.username = username
        self.passHash = passHash
        self.userRole = userRole
        self.userStatus = userStatus
        self.createdAt = createdAt
        self.avatarUrl = avatarUrl
    }
}
```

然后我们来implement比对机制吧，我们选择Bcrypt算法

```swift
import Vapor

class EncryptionManager {
    static func hashPassword(_ pass: String) throws -> String {
        return try Bcrypt.hash(pass)
    }

    static func verifyPassword(_ plaintext: String, hash: String) throws -> Bool {
        return try Bcrypt.verify(plaintext, created: hash)
    }
}
```

## 