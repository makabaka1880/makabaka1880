# 0x00 弱类型系统与强类型系统

::: tip 本节术语
- [**隐式类型转换 (implicit type casting)**](#implicit-type-casting) - 存在于弱类型语言中的特性
- [**显式类型转换 (explicit type casting)**](#explicit-type-casting) - 用户进行的类型转换
- [**强制类型转换 (type coercion)**](#type-coercion) - 符合逻辑下的隐式类型转换
- [**类型提升 (type promotion)**](#type-promotion) - 一种特殊的强制类型转换
:::

JS的类型系统之所以“累心”，根本原因在于它是弱类型系统，类型检查大多发生在程序运行时，而不是编译时。这意味着变量的类型可以随时变化，导致代码行为难以预测，容易出错。

弱类型语言有一个特点：那就是会进行<Anchor id="implicit-type-casting">隐式类型转换（implicit type casting）</Anchor>：

```javascript
2 + '2' // '22', int to string conversion then performing string concatenation
2 - '2' // 0, string to int conversion then performing subtraction
```

乍一看很方便，但这会让代码很不可靠。比如我们可以把加法改成减法，从而实现一些奇怪的东西：

![数学老师哭晕在厕所](/assets/CS/CS-Type-1.webp)

相比之下，python就不会这样:

```python
2 + '2' # TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

刚刚那些诡异的事情也不会发生

![一点脸也不给](/assets/CS/CS-Type-2.webp)

我们也可以暂且称python为一个强类型语言。当然，并不是所有类型转换都发生在弱类型语言中。

当然，不同语言各自有一套逻辑体系，毕竟类型之间并非完全不可转换。比如在数学上，float、double 和 int 之间是可以相互转换的，而且各种数据类型也可以用文字描述。用户一般也会使用这种功能，叫做。
```python
int("32") # "32" intepreted as integer 32
```

::: tip 一个小细节
在 C++ 中，如果执行以下代码：

```cpp
char a = 'a';
(int) a; // 会返回 0x61
```

很多人可能会觉得这种转换不够“安全”或者“不合理”，甚至认为它应该报错。但实际上，类型转换并不一定要严格遵循高层语义的合理性；在这里，'a' 本质上是 ASCII 表中的第 97 个字符（十六进制为 0x61），因此被转换成对应的整数值是顺理成章的。这种转换更多是底层对内存表示的重新解释，而不是语义层面的“合理”映射。
:::

在合乎这套逻辑的情况下，强类型语言也会进行一种类似的操作。它有区别于弱类型语言的隐式转换，叫<Anchor id="type-coercion">强制类型转换 (type coercion)</Anchor> 的操作:

```python
print(True) # True (bool) coerced into "True" (str), prints "True" at stdout
2 + 2.1 # 2 (int) coerced into 2.0 (float), returns 4.1
```

再比如在Java中，
```Java
"2" + 2 // 2 (int) coerced into "2" (String), returns "22"
```
也是成立的。与JS不同的是，这种转换是合乎逻辑的：

![只有拼接有效](/assets/CS/CS-Type-3.webp)

因为在有字符串出现的时候，java就默认是在做字符串拼接，不会像js一样随机应变，因此也可以看作是合理的强制转换。

这种从一个类型转化到另一类型的情况叫做<Anchor id="type-promotion">类型提升 (type promotion)</Anchor>。我们分析刚刚提到的2 + 2.1:

![从`int`到`double`的类型提升](/assets/CS/CS-Type-4.webp)

逻辑上，`double`（或 `float`）类型可以看作是实数集 $\mathbb{R}$，而 `int` 类型则对应整数集 $\mathbb{Z}$。学过基础数论的同学都知道，整数集是实数集的子集，也就是说 $\mathbb{Z} \subset \mathbb{R}$。因此，我们可以把将 `int` 转换为 double 看作是一个从 $\mathbb{Z}$ 到 $\mathbb{R}$ 的映射。

::: warning 提示
需要注意的是，尽管在数学上整数和对应的实数值是等价的，但在编程语言的类型系统中，`int` 并不是 `double` 的子类型（子集），而是两种不同的类型。类型提升就是把一个较小“集合”（离散整数）映射到更大“集合”（连续实数）的过程，从而保证操作的正确性和一致性。
:::

有些语言当中根本就不存在coercion, 例如Haskell。

```haskell
let a :: Int = 2;
let b :: Double = 2.0;
a + b;      -- Couldn't match expected type ‘Int’ with actual type ‘Double’
```

作为一门完全基于Dependent Type Theory的形式证明语言，Lean需要严格的类型范围限制：

![lean严格到爆的类型，自然数和非负数都不能直接转换，还得证明](/assets/CS/CS-Type-5.webp)

总体来说，这是大多数的语言类型系统的强弱：

|语言|类型系统|特点|
|---|-------|---|
|C|弱类型|可隐式转换，易出错|
|C++|弱类型|支持隐式/显式转换|
|Java|强类型|
|C#|强类型|
|Go|强类型|
|Rust|强类型|
|Swift|强类型|
|Kotlin|强类型|
|TypeScript|强类型|
|Python|强类型|运行时检查，支持type hint|
|Ruby|强类型|Duck |
|JavaScript|弱类型|隐式转换多，易出错|
|PHP|弱类型|类型灵活，易出错|
|Haskell|强类型|类型推断，极严格|
|Lean|强类型||

<NextPage title="动态类型语言与静态类型语言" href="static-and-dynamic-systems"/>