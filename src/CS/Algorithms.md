# 常见算法
## 0x00 引言
在设计程序的时候，我们经常会需要对程序进行优化。

不然
给自己写的话 电脑可能会骂人 给别人写的话 客户可能会骂人

那具体怎么优化呢？优化什么呢？优化完有啥好处吗？

## 0x01 啥是算法？
::: tip Wikipedia
算法(algorithms), 在数学[...]和计算机科学之中, 指一个被定义好的、计算机可施行其指示的有限步骤或次序, 常用于计算、数据处理和自动推理。算法可以使用条件语句通过各种途径转移代码执行(称为自动决策, 并推导出有效的推论), 最终实现自动化。 
:::

简单来说，算法就是程序的逻辑、它是一套通用的指令。

下面展示的就是一个简单的$\mathcal{O}(n)$的查找算法。
::: tip
**$\mathcal{O}(n)$算法** 指的是对于大小为$n$的输入，需要走$an, a\in\mathbb N$步的算法。最简单的例子就是接受一个列表的输入并挨个打印的算法。
:::

```flow:vue

io=>inputoutput: Input: an array
op=>operation: SET VAR i = 0
add=>operation: SET VAR i = i + 1
lookup=>operation: Lookup for element in input at index i 
set=>operation: SET VAR n = the element found
cond=>condition: Is n what we are looking for?
checkthrow=>condition: n >= len(input)?
end=>end: return n
throw=>subroutine: Throw error 
e=>end: End
io(right)->op->add->lookup->set(right)->cond
cond(yes)->end
cond(no)->checkthrow(up)
checkthrow(yes)->throw
checkthrow(no)->add

```
人话就是在列表里一个一个找 找到了返回 找到列表末尾了还没找到那就报错

## 0x02 时间复杂度与空间复杂度
在实现某功能时，我们第一个能想到的判断一个算法是否高效的方法就是分别看它的runtime和占用的内存。在理论计算机科学里，有两个与之对应的概念：时间复杂度与空间复杂度。
::: tip 大O表示法
大$\mathcal O$表示法描述函数的渐进上限，考虑最坏情况。例如对于多项式$f$<br/>
**正式定义** $\exists c, n, n_0, \forall n > n_0, c\times f(x) \geq T(x) \geq 0$.<br/>
**例子** 对于函数$f(x) = 2x^2 + 3x - 4$, $f(x) = O(x^2)$.
:::

### 时间复杂度
我们也可以用大$\mathcal O$表示法来分类算法。


<Vssue/>