# NeoVim
> 感谢[Tim同学](https://github.com/BIGGASSS)的contribution

[[toc]]
这就是我们熟悉的是`vim`.
![Installation](/static/GoodLibs/nvim/vim.png)
可以看得出, 这十分之简陋. 对于简单的编辑一下commit message或者随手在IDE中记个笔记还行, 但作为笔记本还是太逊了.

再来看看别人用的`vim`(图源[@ayamir](https://www.zhihu.com/people/MiraculousMoon)):
![Installation](/static/GoodLibs/nvim/nvim-preview.png)

这其实是我们今天要说的neovim

## 0x00 Why?

那么为什么同样是`vim`，neovim就比vim强大很多呢？

其实是因为`neovim`能安装很多基于`lua`的插件

## 0x01 安装步骤 

MacOS用户可以使用`Homebrew`来安装
```bash
brew install nvim
```
没有安装过`Homebrew`的可以使用下方命令安装
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
![Installation](/static/GoodLibs/nvim/install.png)

~~Linux用户就不用教了()~~

## 0x02 `lazy-vim`的安装

首先我推荐先安装一个插件管理器`lazy-nvim`

我们可以使用下方的脚本来自动安装`lazy-nvim`，只要把它放在`~/.config/nvim/init.lua`里(需要先创建一个)，并用`neovim`打开此文件，使用`:source %`后，就会自动安装`lazy-nvim`，并且自动加载`lazy-nvim`，安装脚本只会在没有安装`lazy-nvim`时运行
```bash
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not (vim.uv or vim.loop).fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable", -- latest stable release
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

local plugins = {}
local opts = {}

require("lazy").setup(plugins, opts)
```

## 0x03 插件的安装

以`catppuccin`插件为例，在`init.lua`中的`plugins`中添加
```bash
{ "catppuccin/nvim", name = "catppuccin", priority = 1000 }
```
然后再在文件中添加如下内容就安装好了
```bash
require("catppuccin").setup()
```
重新进入`neovim`，`lazy-nvim`会自动安装插件

因为`catppuccin`是一个colorscheme插件，所以还需要在`init.lua`中添加
```bash
vim.cmd.colorscheme "catppuccin"
```
此时再进入`neovim`，就可以了

如图，这应该是完成后配置文件的样子
![Image](https://pic.imgdb.cn/item/662159810ea9cb1403f7f424.png)

其他插件可以自行在他们的README里寻找安装方法

<Vssue/>