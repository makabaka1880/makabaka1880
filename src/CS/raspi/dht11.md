# Raspi 4B读取DHT11的神奇方法

前两天搞到一个树莓派，性质冲冲的开始玩

搭建了个家庭服务器：

![Raspberrypi 4B 8GB](/assets/CS/raspi/hero.webp)

然后开始研究GPIO引脚

我有好多个之前做项目剩下的DHT11:

![最惨的一个 热风枪测试的时候烧糊了555](/assets/CS/raspi/dht11/burnt.webp)

然后就开始研究能不能搞一个监控机房温湿度的东西

我的服务器上大概是这样的：
- **前端** [Node.js](nodejs.org) PORT 80 项目中有index.html及其他web页面的源代码
- **后端** [Node.js](nodejs.org) PORT 80 接管最简单的API，比如文件上传POST或者通告GET
- **嵌入式后端** Flask.py PORT 3000 用来广播/控制GPIO

## 0x00 Adafruit的DHT库

这种方法是最常见的一种, 配置起来很简单

首先先搭建一个虚拟环境

::: tip 虚拟环境
**虚拟环境 Virtual Environment(venv)** 是一个方便版本管理的方案。每一个venv中的解释器/编译器版本不一样，安装的库也不一样。
:::

```zsh
cd backend  # working dir
python -m venv dht11  # create venv
source ./dht11/bin/activate  # activate venv
```

然后开始安装

```zsh
python3 -m pip install adafruit-circuitpython-dht # Installation
```

然后就可以用啦

```python
import 
```