# 启动语言服务失败问题排查
此文档用于解决某些机器无法正常启动语言服务导致无法使用代码提示功能和打包功能。

#### 目前已知的引发语言服务启动失败的原因有以下几条（仅适用于Windows平台）：
#### 1.Java环境不兼容导致

> **解决方法：**需要到[Oracle下载页面](https://www.oracle.com/java/technologies/javase/javase7-archive-downloads.html)找到Windows x86，下载新的jdk安装包。安装到本地后,找到Java的安装目录默认为`C:\Program Files (x86)\Java`然后将`jre7`目录整个拷贝到HBuilderX的安装目录下的`plugins`目录下并重命名为`jre`（需将plugins目录下原来的jre删除），然后重启HBuilderX即可。

#### 2.内存不足导致
> **解决方法：**找到HBuilderX安装目录下的`plugins/ls/ls.ini`文件，将内容替换如下：

```ini
-Xverify:none-Xnoclassgc-Dfile.encoding=utf-8-Djna.nosys=true-Xmx512m-Xms256m-Xmn128m-XX:PermSize=64m-XX:MaxPermSize=128m-XX:+DisableExplicitGC-XX:+UseConcMarkSweepGC-XX:+UseParNewGC-XX:CMSInitiatingOccupancyFraction=85
```
> 替换完成后重启HBuilderX。