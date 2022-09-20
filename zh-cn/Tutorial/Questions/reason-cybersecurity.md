# 关于HBuilderX Node扩展插件启动失败的解决方案

某些Windows 10 电脑，HBuilderX启动后，没有代码提示，uni-app无法正常运行到手机。

点击菜单【帮助】【查看运行日志】，如果日志中出现`无法成功完成操作，因为文件包含病毒或潜在的垃圾软件`，且电脑安装了`reason cybersecurity`, 请将`reason cybersecurity`删除。

**原因：** 这是因为电脑上安装的`reason cybersecurity`拦截了`Node.exe`，导致HBuilderX Node扩展插件无法启动。

#### 如何判断电脑是否安装了reason cybersecurity？

打开Windows安全中心，如下图所示，标红部分，则是reason cybersecurity。

<img src="/static/snapshots/tutorial/question/reason.jpeg" style="zoom: 50%;" />

#### 卸载reason cybersecurity

打开电脑C盘，进入`C:\Program Files\RAVAntivirus`目录，找到`Uninstall.exe`程序进行卸载。
