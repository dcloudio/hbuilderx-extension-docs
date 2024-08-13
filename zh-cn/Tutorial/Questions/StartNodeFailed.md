# 启动node失败问题排查
此文档用于解决某些机器无法正常启动node导致语言服务导致无法使用代码提示功能和打包功能。

#### 目前已知的引发node启动失败的原因（仅适用于Windows平台）：
#### 1.某些windows 7系统无法启动node

<img src="/static/snapshots/tutorial/question/nodeerror.png" style="zoom:60%;" />

> **解决方法：**需要下载 [KB3080149的系统补丁](https://www.microsoft.com/zh-CN/download/confirmation.aspx?id=48636)，安装成功后重启电脑，再打开HBuilderX