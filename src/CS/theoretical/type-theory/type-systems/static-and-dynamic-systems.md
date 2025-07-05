# 0x01 动态类型语言与静态类型语言

::: tip 本节术语 | Glossary
- [**动态类型语言(Dynamically typed languages)**](#dynamic-type) - 代码语义中不要求规定对象类型的
- [**静态类型语言(Statically typed languages)**](#static-type) - 代码语义中要求使命对象类型的
:::

我们再来看一个例子:

```python
def double(x):
    return x + x;
```

乍一看是不是会返回两倍一个数字？

```python
In  [2]: double(2)
Out [2]: 4
```

但是一旦穿进去一个字符:

```python
In  [3]: double('2')
Out [3]: '22'
```

就乱套啦！

仔细分析一下代码，我们就会发现一件事情：**我们的函数只应该作用于数字上面**。

然而，现在这个函数其实是对支持“加法操作”的对象有效，而不是专门针对数字设计的。

之所以会有这种问题，是因为python是一个<Anchor id="dynamic-type">动态类型语言 (dynamically typed languages)</Anchor>。在Python中，函数的输入与返回类型只会在运行时被确定，没有要求在代码中写明。这就导致了我们无法在写代码的时候就规定传入的一定是数字。也就是说，这是一个是十分不安全的函数定义。

::: warning 不安全的定义
在此处，我们对于不安全的定义不是会报错。相反，我们在此处担心的情况是在不报错的前提下，程序输出一些无意义的内容，例如对于无意义的输入进行对于数据类型所定义的翻倍。
在大多数情况中，我们反而需要跑出错误，这样可以在软件的其他调用场景中保证不合理输入被拒绝。

| 情景                | 行为             | 安全性评估       |
|---------------------|------------------|----------------|
| 输入 `"2"` → 输出 `"22"` | 静默执行         | ❌ **最危险**  |
| 输入 `"2"` → 抛出 `TypeError` | 明确拒绝         | ✅ **较安全**  |
| 输入 `"2"` → 输出 `4`    | 自动类型转换     | ⚠️ **有风险** |

当然在实际软件工程中，我们一般会捕获TypeError等系统跑出的错误，然后跑出自己定义的错误。这并不是无用功，因为在大项目中，若不加以捕获的话，在大型系统中，不同模块的`TypeError`可能代表完全不同的语义

```python
# Module A: For user
def calculate_age(birthdate):
    if not isinstance(birthdate, datetime):
        # Primitive solution: raise standard error
        # raise TypeError("birthdate必须是datetime对象") 
        
        # Engineering Implementation: refractor custom error for module A
        raise InvalidUserDataError("出生日期格式非法")

# Module B: Currency
def process_payment(amount):
    if not isinstance(amount, Decimal):
        # Primitive solution: raise the same standard error
        # raise TypeError("amount必须是Decimal")
        
        # Engineering Implementation: refractor custom error for module B
        raise PaymentProcessingError("金额类型错误")

# Some function call that might lead to calling both methods:
try:
    some_higher_level_function()
except InvalidUserDataError:
    print('Invalid user data')      # Ensures easier identification of different exceptions
except PaymentProcessingError:
    print('Payment detail error')
```
:::

因此，我们需要在函数之前进行类型检察：
```python
# Suppose a variable 'a' has been actualized
def double(x):
    return x + x;

try:
    a = float(a)
except TypeError, ValueError:
    print('a is not a real number')
    raise NotRealNumberError('a is not a real number' + str(a))
except Exception as e:
    print('Unknwon error:' + str(e))
    raise ModuleUndefinedBehavior('Unknwon error:' + str(e))
```

下比之下，<Anchor id="static-type">静态类型语言 (statically typed languages)</Anchor>在运行前就可以保证输入代码的合理性及安全性：

```swift
func double(_ n: Int) -> Int {
    return n + n;
}

double(4) // returns 8
double(4.0) // compile time error: cannot convert value of type 'Double' to expected argument type 'Int'
```

```cpp
int doubleNumber(int n) {
    return n + n;
}

doubleNumber(4) // returns 8
```

::: tip 冷知识
大多数情况下，动态类型语言都是解释性语言，而强类型语言都是编译性的，因为强类型语言唯一组织用户运行的就是编译器，如果像解释性语言一样没有了这层保证照样不安全。
当然，反过来，我们利用LSP server、linter与type hints对于Python / JS等代码进行检察，也可以达到这种效果。Python的type hints(`typing`)库也可以支持基础的sum types、product types等类型，做一些简单的ADT(Algebriac Data Type, 后面会讲是啥)建模也是完全足够的。下面是个对于Untyped Lambda Calculus的建模，完整项目可以到[GitHub:makabaka1880/pylambda](https://github.com/makabaka1880/pylambda)上来看看

::: details 代码在此（省略了一些helper function）：
```python
from models.exceptions import *
from typing import Callable

class Term:
    def eval(self):
        raise NotImplementedError("`eval` method not yet implemented for class `Term`")
    
    def substitute(self, target: str, replacement: "Term") -> "Term":
        raise NotImplementedError("Substitute method not implemented.")
    
    def alpha_conversion(self, name: str) -> "Term":
        raise NotImplementedError("Alpha conversion method not implemented.")
    
    def beta_reduce_step(self) -> "Term":
        raise NotImplementedError("Beta reduction step not implemented.")
    
    def is_normal_form(self) -> bool:
        raise NotImplementedError("Normal form detection not implemented.")

    def literal(self) -> str:
        raise NotImplementedError("Literal representation not implemented.")

class Variable(Term):
    def __init__(self, name: str):
        super().__init__()
        self.name = name

    def __repr__(self) -> str:
        return self.name
    
    def is_normal_form(self) -> bool:
        return True
    
    def alpha_conversion(self, name: str) -> "Variable":
        return self
    
    def substitute(self, target: str, replacement: Term) -> Term:
        return replacement if self.name == target else self

    def beta_reduce_step(self) -> "Variable":
        raise ReductionOnNormalForm(term=self)
    
    def literal(self) -> str:
        return f'{self.name}'
    
    def has_free(self, name: str) -> bool:
        return self.name == name

class Abstraction(Term):
    def __init__(self, var: Variable, body: Term):
        super().__init__()
        self.var = var
        self.body = body

    def __repr__(self) -> str:
        return f"(λ{self.var}. {self.body})"
    
    def is_normal_form(self) -> bool:
        return self.body.is_normal_form()

    def alpha_conversion(self, new_name: str) -> "Abstraction":
        new_var = Variable(new_name)
        new_body = self.body.substitute(self.var.name, new_var)
        return Abstraction(new_var, new_body)

    def substitute(self, target: str, replacement: Term) -> Term:
        if self.var.name == target:
            return self  # Bound variable shadows target
        
        if replacement.has_free(self.var.name):
            new_name = fresh_variable(self.var.name, replacement.has_free)
            return self.alpha_conversion(new_name).substitute(target, replacement)
            
        return Abstraction(self.var, self.body.substitute(target, replacement))

    def beta_reduce_step(self) -> "Abstraction":
        if self.is_normal_form():
            raise ReductionOnNormalForm(term=self)
        return Abstraction(self.var, self.body.beta_reduce_step())

    def literal(self) -> str:
        return rf"(\{self.var.literal()}. {self.body.literal()})"

    def has_free(self, name: str) -> bool:
        return self.var.name != name and self.body.has_free(name)

class Application(Term):
    def __init__(self, function: Term, value: Term):
        super().__init__()
        self.function = function
        self.value = value

    def __repr__(self) -> str:
        return f"({self.function} {self.value})"

    def is_normal_form(self) -> bool:
        return (
            not isinstance(self.function, Abstraction) and 
            self.function.is_normal_form() and 
            self.value.is_normal_form()
        )
    
    def alpha_conversion(self, name: str) -> "Application":
        return Application(
            self.function.alpha_conversion(name),
            self.value.alpha_conversion(name)
        )

    def substitute(self, target: str, replacement: Term) -> "Application":
        return Application(
            self.function.substitute(target, replacement),
            self.value.substitute(target, replacement)
        )

    def beta_reduce_step(self) -> Term:
        if isinstance(self.function, Abstraction):
            return self.function.body.substitute(
                self.function.var.name, 
                self.value
            )
        
        try:
            return Application(self.function.beta_reduce_step(), self.value)
        except ReductionOnNormalForm:
            return Application(self.function, self.value.beta_reduce_step())

    def literal(self) -> str:
        return f"{self.function.literal()} ({self.value.literal()})"

    def has_free(self, name: str) -> bool:
        return self.function.has_free(name) or self.value.has_free(name)
```
:::

| 语言 | 类型系统 | 
|------|----------|
| C | 静态弱类型 |
| C++ | 静态弱类型 |
| Java | 静态强类型 |
| C# | 静态强类型 |
| Go | 静态强类型 |
| Rust | 静态强类型 |
| Swift | 静态强类型 |
| Kotlin | 静态强类型 |
| TypeScript | 静态强类型 |
| Haskell | 静态强类型 |
| Lean | 静态强类型 |
| Python | 动态强类型 |
| Ruby | 动态强类型 |
| JavaScript | 动态弱类型 |
| PHP | 动态弱类型 |


<NextPage title="简单类型Lambda演算系统 - 关于函数类型系统" href="functional-systems"/>