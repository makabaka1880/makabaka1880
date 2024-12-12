# 如何手搓一个渲染器
不知道为啥就是突然想要从头开始自己实现一个简单的渲染器
就是那种从像素层面来渲染的那种算法

话不多说 直接开始

## 0x00 环境配置

```bash
conda create -n BasicRenderer
conda activate BasicRenderer
```

毕竟这是一个渲染器 所以还需要Pillow

```bash
conda install Pillow
```

再来个numpy方便科学计算

```bash
conda install numpy
```

## 0x01 第一张图片

新建一个文件夹

```bash
cd ~
mkdir BasicRenderer && cd BasicRenderer
touch main.py
touch run.py
mkdir output
```

现在的项目长这样:
```
BasicRenderer
|
| - main.py
| - run.py
| - output
```

然后在`main.py`里面写

```python
from PIL import Image
import numpy as np

def render(array):
    return array

def exportImage(array, name = "render.png"):
    im = Image.fromarray(array)
    im = im.convert("L")
    im.save("output/"+name)
    im.show()
```

`run.py`里面写
```python
from Main import *

arr = np.zeros((128, 128)) # 创建一个128x128的numpy矩阵并用矩阵来填充
arr = render(arr)
exportImage(arr, "render1-1.png")
```

运行`run.py`
这样我们就得到了一张这样的图片:

![Render 1-1](/static/CS/cg-render-output/render1-1.png)

芜湖! 这是我们渲染出的第一张图片


## 0x02 绘制直线


接下来会涉及到一些数学的内容.

现在, 我要绘制一条从$(x_0, y_0)$到$(x_1, y_1)$的直线
怎么画呢?

使用我们在中学学过的$线性函数的两点式$
::: tip
对于线性函数$f: \mathbb R \mapsto \mathbb R$, 若$f(x_0) = y_0$且$f(x_1) = y_1$, 则
$$\frac{f(x)-y_1}{y_0-y_1} = \frac{x-x_1}{x_0-x_1}$$
:::
可以得到
$$ \frac{y-y_1}{y_0-y_1} = \frac{x-x_1}{x_0-x_1} $$
$$ y = (y_0-y_1)\frac{x-x_1}{x_0-x_1}+y_1 $$
我们现在定义$\Delta y = y_0 - y_1$, $\Delta x = x_0 - x_1$, 则
$$ y = \frac{\Delta y}{\Delta x} (x - x_1) + y_1 $$
$$ 0 = \frac{\Delta y}{\Delta x} (x - x_1) + y_1 - y $$

我们定义 $f(x, y) = \frac{\Delta y}{\Delta x} (x - x_1) + y_1 - y$, 这样的话我们就可以通过判断f是不是0来确定一个点是不是在f上喽

我们新创建一个py文件`LineRenderer.py`
然后写
```python
def renderLine(img, start = (0, 0), end = (1, 1)):
    for i in range(0, 128):
        assert len(img) == len(img[i]) == 128
    for x in range(0, 128):
        for y in range(0, 128):
            if isOnLine(start, end, (x, y)):
                img[y][x] = 256
                print(x, y)
    return img

def isOnLine(start = (0, 0), end = (1, 1), point = (0, 0)):
    x0, y0 = start
    x1, y1 = end
    deltaX = start[0] - end[0]
    deltaY = start[1] - end[1]
    x, y = point
    return (deltaY / deltaX) * (x - x1) + y1 - y == 0
```

把main里的render()更新一下：

```python
def render(array):
    array = LineRenderer.renderLine(array, (0, 0), (1, 1))
    return array
```

我们就得到了

![Render 2-1](/static/CS/cg-render-output/render2-1.png)

看上去效果不错, 但是有一个问题: 它的y坐标反了
这也很好解释, 比较算法是从左往右, 从上到下扫描的那个矩阵。这个问题也很好解决，直接用flip：

在run.py里面改一下
```py
arr = np.zeros((128, 128))
arr = render(arr)
arr = np.flip(arr, axis=0)
print(arr)
exportImage(arr, "render2-2.png")
```

![Render 2-2](/static/CS/cg-render-output/render2-2.png)

这下对劲了

还有一个问题，那就是我们只能绘制斜率`k \in (0, \infty)`的线段。对判断函数少做修改就可以巧妙的绕过这个问题：

```
def isOnLine(start=(0, 0), end=(1, 1), point=(0, 0)):
    x0, y0 = start
    x1, y1 = end
    x, y = point
    # 处理斜率为无穷大的情况
    if x1 - x0 == 0:
        return x == x0
    # 处理斜率为0的情况
    if y1 - y0 == 0:
        return y == y0
    # 计算线段的斜率
    slope = (y1 - y0) / (x1 - x0)
    # 计算点到线段的距离
    distance = abs((y - y0) - slope * (x - x0)) / ((slope ** 2 + 1) ** 0.5)
    # 如果距离非常小，则认为点在线段上
    return distance < 0.5
```
![Render 2-3](/static/CS/cg-render-output/render2-3.png)


如果想要绘制线段的话可以调整一下代码，判断点是点是否在$\text{Rectangle}((x_0, y_0), (x_1, y_0), (x_0, y_1), (x_1, y_1))$当中。

```py
import Utils
def renderSegment(img, start = (0, 0), end = (1, 1)):
    for i in range(0, 128):
        assert len(img) == len(img[i]) == 128
    for x in range(0, 128):
        for y in range(0, 128):
            if isOnLine(start, end, (x, y)) and isInRect(start, end, (x, y)):
                img[y][x] = 256
                print(x, y, "inrect")
    return img
```

这里兴建一个叫Utils的python文件，可以在里面写一些有用的工具。我的isInRect就是在里面定义的：

```py
def isInRect(Vec1=(0, 0), Vec2=(1, 1), p=(0,0)):
    return (Vec1[0] <= p[0] <= Vec2[0] or Vec1[0] >= p[0] >= Vec2[0]) and (Vec1[1] <= p[1] <= Vec2[1] or Vec1[1] >= p[1] >= Vec2[1])
```

我们可以画出来一些有意思的东西:

```py
def render(array):
    array = LineRenderer.renderSegment(array, (50, 100), (100, 50))
    print("rendered segment 1")
    array = LineRenderer.renderSegment(array, (100, 50), (50, 50))
    print("rendered segment 2")
    array = LineRenderer.renderSegment(array, (50, 50), (50, 100))
    print("rendered segment 3")
    return array
```

![Render 2-4](/static/CS/cg-render-output/render2-4.png)

## 0x03 绘制有宽度的直线

现在出现了一个问题 如果我想绘制一条斜率为$\pi$的线怎么办？

![Render 3-1](/static/CS/cg-render-output/render3-1.png)

出现了一个大问题
因为我们的算法只考虑了在整数格点上的线条，所以没法绘制无理斜率的线条。同样，我们也没法画出有宽度的线条。

现在，我们引入一个新的算法：Bresenham算法。

Bresenham算法的本质就是判断在像素$(x_i, y_i)$接下来的一个像素要不要改变$y$坐标。
还是考虑上一次使用的判断函数法$f(x, y)$。对于像素$(x, y)$ 定义判断因子$d = f(x+1, y+\frac{1}{2})$，那么$d$的正负就决定了y是否要+1.

值得注意的是，这个方法也只对第一象限有用。

