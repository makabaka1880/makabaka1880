# PNG 图片加载类型
## 0x00 序言
最近在做学校项目，发现一个几万年前star过的一个很看好的库[slidev](https://sli.dev)更新到0.5 Beta了，感觉想试试

![效果也确实不错](/assets/CS/PNGInterlacing/1.png)

但唯一的问题就是Deploy之后由于是在Github Pages做的托管所以网很差，assets加载很慢

因此就出现了这种问题：

![啊啊啊啊破网啊啊啊啊](/assets/CS/PNGInterlacing/2.png)

![诶 出来一点](/assets/CS/PNGInterlacing/3.png)

![咋只出来一半啊！！！](/assets/CS/PNGInterlacing/4.png)

但我们在网上看到的很多都是这样的：

这是为啥啊？

## 0x01 PNG加载型
众所周知，PNG这么一个文件直接下载到本地然后加载几乎是不可能的，因此出现了加载型这种概念：

::: tip PNG加载型
**PNG加载型 (PNG Loading Types)** 指的是在加载PNG图片时常用的两种方式：**逐步加载 (Progressive)** 和 **交错加载 (Interlaced)**。  
逐步加载方式是按顺序从上到下加载图像，适合网络速度较快时使用，因为用户会先看到完整但模糊的图片，随后逐步清晰。  
交错加载方式则将图片分成多个扫描线组，先加载整体的低分辨率版本，再逐步补充细节，适合慢速网络环境，让用户快速预览到完整的图片轮廓。
:::

### 逐步加载 Progressive
这种形式就是我刚刚展示的一行行扫描的加载方式：

![逐步加载的PNG](/assets/CS/PNGInterlacing/Prog.png)

- **优势** 加载出来就是最佳的图像
- **缺点** 没法一次性就加载出来整个图像

### 交叉加载 Interlaced
这种形式就是我刚刚展示的一行行扫描的加载方式：

![交叉加载的PNG](/assets/CS/PNGInterlacing/Inter.png)

- **优势** 可以将整个图像快速加载出来
- **缺点** 质量逐步增加，没法一次到位

## 0x02 如何转换

我这里要使用一个叫`pillow`的库

::: important
一下内容默认读者使用`conda`做环境管理。若无，以下zsh操作只需要这样：
```zsh
pip3 install pillow
```
:::

我们先新建环境
```zsh
conda create -n "PNGConvert"
```