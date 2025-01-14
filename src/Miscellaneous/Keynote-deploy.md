# 部署PPT/Keynote到云端
在日常作业中，经常会遇到需要在不支持Keynote的机器上展示幻灯片的情况。这时候我们就需要动用一下技术力了
[[toc]]
## 0x00 导出文档
![Image](/assets/Miscellaneous/Keynote-deploy/1.webp)
即可导出一个文件夹
![Image](/assets/Miscellaneous/Keynote-deploy/2.webp)
## 0x01 配置部署的网站
这里我们选用<a href="https://pages.github.com">GitHub Pages</a>

首先现在GitHub上新建一个Repository 
![Image](/assets/Miscellaneous/Keynote-deploy/3.webp)
然后
![Image](/assets/Miscellaneous/Keynote-deploy/4.webp)
会到这个界面：
![Image](/assets/Miscellaneous/Keynote-deploy/5.webp)
本地git cli配置好的同学这一步在命令行切到导出的文件夹下
```bash
git init
git remote add origin <那一坨ssh>
git add -A
git commit -m "Upload Files"
git branch -m "main"
git push --set-upstream origin main
```
没有的同学可以按这个Upload files
![Image](/assets/Miscellaneous/Keynote-deploy/6.webp)
然后适量拆分一下文件 不然github受不了
![Image](/assets/Miscellaneous/Keynote-deploy/7.webp)

## 0x02 搭建网站

点击右上角Settings > 侧边栏Pages
![Image](/assets/Miscellaneous/Keynote-deploy/8.webp)
把branch改成main
![Image](/assets/Miscellaneous/Keynote-deploy/9.webp)
save
![Image](/assets/Miscellaneous/Keynote-deploy/10.webp)


## 0x03 然后就好了

然后就好啦！访问 https://<你的GitHub账户名>.github.io/<你的repository名>

比如你的repository如果是johnnyappleseed/HomeworkPresentation

那你就访问https://johnnyappleseed.github.io/HomeworkPresentation

你想要的话也可以自定义域名 这里就不多讲了

<Vssue/>