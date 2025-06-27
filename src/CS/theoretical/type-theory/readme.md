---
sticky: true
---
# 程序语言理论 - 类型系统
::: info 写在前面
作为一名软件开发者，或多或少会遇到过各种各样的类型系统。虽然说当今的编程语言大多已经十分完善且安全，但每个语言还是有自己的不足，需要学习类型理论来进行特定类型的实现。同时，类型理论的额学习也可以帮助软件开发者更好的写出更加优雅、稳定、且安全的代码，利人利己。我个人认为PLT是计算机科学里面最美的分支了可以用各种神奇的模型来描绘一些我们从来没法想到过的模型，来完成一下完全想不到的壮举。本系列就是为了方便初学者来快速入门类型论、程序语言理论、多范式编程、及范畴论等在传统软件工程领域被严重忽视的理论计算科学。

欢迎大佬帮忙指出错误，我也在学习，大家一起进步～
:::

## 序言

::: tip 本节术语 | Glossary
- [**安全性 (safety)**](#safety) 指程序在运行时避免未定义行为和错误的能力，包括程序的可验证性、鲁棒性以及对异常情况的安全处理。
- [**MCU (Micro Computing Unit)**](#mcu) 嵌入式设备的核心处理器，成本低廉功能单一
:::

::: info 目录
- [第0章 - 类型系统](type-systems)
    - [第0节 - 弱类型系统与强类型系统](strong-and-weak-systems)
    - [第1节 - 动态和静态类型语言](static-and-dynamic-systems)
    - [第2节 - STLC、System-F与Hindley-Milner类型系统 (函数类型)](functional-systems)
:::

凌晨2:17。显示器冷光刺破黑暗，键盘的敲击声是房间里唯一的声响。

你按下保存，`git push`，看着CD / CI管线丝滑的运行着，你十分满意。

就在这时...

```diff
- ❌ Production deployment failed: Undefined behavior at 0xFFFF0004
```
没有堆栈跟踪，没有错误上下文。日志里只有一行冰冷的十六进制地址，像黑夜中突然熄灭的灯塔。

这不是恐怖片情节，而是程序安全性缺失的日常噩梦。

一个程序不安全可能有很多原因。

我们先来看看一个日常的例子吧。在我们身边，有无数的<Anchor id="mcu">MCU (Micro Computing Unit)</Anchor>。它们和外界沟通可以通过串口，UART，I<sup>2</sup>C等方式沟通，还有一个：中断。由于生产环境中的中断类型较多，我们可以用向量来表示他们。如下：

例如在LPC2214中，VIC(Vector Interruption Controller)采用了多选一的位域设计。
比如说，这是理论理论上来说`VICVectCntl`寄存器中只可以有一位是1，但是这种设计很难保证在中途不会因为资源竞争(data race)等原因导致未发现的位反转。例如以下情况会使中断系统进入不可预测的状态：

```c
VICVectCntl0_Type VICVectCntl0;
VICVectCntl0.enable = 1;
VICVectCntl0.priority = 3;
VICVectCntl0.vector = (uint32_t)Handler0;

VICVectCntl0_Type VICVectCntl1;
VICVectCntl1.enable = 1;
VICVectCntl1.priority = 2;
VICVectCntl1.vector = (uint32_t)Handler1;
```

类似的情况还出现在高级语言中。

![JS的类型系统真的累心](/assets/CS/CS-Type-0.webp)

JS的隐式转换那是臭名昭著的乱七八糟，写出来的变量天知道下一秒会以什么神奇的方式变成什么样子。但又因为其普及型，让它成为了前端开发必不可少的工具。
这些代码写出来时，开发者内心的OS通常是：

<Anchor id="safety">这语言太不安全了！</Anchor> 运行效果全靠玄学，调试过程宛如开盲盒！

经过数百年的研究之后，计算机科学家们发现这些看似五花八门的安全漏洞，追根溯源都指向同一个核心问题：类型系统的缺失或不完备。

本文将带您深入程序语言理论的基石——类型系统，揭示计算机科学家们如何用数十年智慧结晶，为代码世界构筑起坚实的安全长城。从C的脆弱到Rust的坚不可摧，从JS的混乱到TypeScript的秩序，让我们一同探索类型如何成为程序世界的"免疫系统"。