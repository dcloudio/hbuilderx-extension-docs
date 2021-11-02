# HBuilderX Windows startup troubleshooting guide

## Summary

This document is `windows` platform solution，Mac please refer to：[mac solution](http://hx.dcloud.net.cn/Tutorial/install/macosx?id=启动问题)
  
The `zip` package of `windows` takes a long time to decompress, please do not interrupt! If the decompression is interrupted, please decompress again.

** Windows HBuilderX cannot startup, maybe two reasons：**

- New installation，please see `Chapter 1`.
- If HBuilderX can startup before, but it can’t startup later，the configuration file should be damaged，please see `Chapter 4.1`.


## 1.  The latest downloaded HBuilderX cannot be startuped
-------------------------------

> The latest downloaded HBuilderX could not be startuped on the windows system after being decompressed, it did not respond evenif you click it, and the xxx.dll error was reported when it startuped.

`Note：HBuilderX requires the minimum Windows to be win7, and does not support xp`.

Note：If your computer has an AMD graphics card, please see Chapter 6.

### 1.0 Wrong way for open

Some one download zip package from `DCloud.io`，double click `HBuilderX.exe` directly from compress software.

`zip package needs to be decompressed before it can be used`.

<img src="/static/snapshots/tutorial/windows_error_open.min.png" style="zoom:80%" />

<img src="/static/snapshots/tutorial/install_windows.png" />


### 1.1 Shortcuts problems

In Windows, clicking exe file cannot be startuped if you drag `HBuilderX.exe` to desktop from decompressed zip folder.

How to setup `Desktop shortcut`: 

1. Select `HBuilderX.exe`, click the right mouse button, and a menu appears
2. Click on the menu item: `Send to`
3. Click on `Desktop Shortcut`


### 1.2. Nothing happens

- After unzipping, click HBuilderX.exe, nothing happens
- After decompression, click HBuilderX.exe, the HBuilderX process starts and then closes immediately

**Try the following solutions**

1. After closing all the `anti-virus software`, try again
2. Use `super administrator` role to try again
3. Follow solution 1 to try again
4. Select `HBuilderX.exe`, right-click and click Properties. Operate as shown in the figure below:

<img src="/static/snapshots/tutorial/windows_install/1.png" style="zoom:80%;border: 1px solid #eee;" />

> Note： If above method does not solve your problem, please see the error in the [Event Viewer]。[Event Viewer](/Tutorial/Question/WindowsStart.md)

### 1.3 Memory cannot be read

> If you encounter the problem of `memory cannot be read`, please search related methods on google


## 2. Problems caused by Qt
-------------------------------

> You may encounter the following problems if you installed Qt application in your computer.

### 2.1 Problem 1：qt* library is missing

- After decompression, click HBuilderX.exe, it prompts that `qt5*.dll` library is missing
- After decompression, click HBuilderX.exe, it prompts `Cannot locate xxxxxxx on library xxx.dll`

<img src="/static/snapshots/tutorial/windows_install/qt_error_1.png" style="border: 1px solid #eee;"/>


**Solution**

Method 1：After decompression, enter the bin directory of HBuilderX, cut all `dll files beginning without api` to the upper level directory. Note that it is `cut`, not `copy`.

Method 2：Enter `bin` directory of `HBuilderX` and copy all `dll` files to `System32` or `SysWOW64` folder.

Method 3：Check if `qt` is installed on your computer, please remove qt environment variables if it has been installed before.

### 2.2 Problem 2

As shown below：

<img src="/static/snapshots/tutorial/windows_install/qt_error_2.png" style="zoom: 80%;border: 1px solid #eee; padding: 10px;"/>

Solution：Check if `qt` is installed on your computer, please remove qt environment variables if it has been installed before.

<img src="/static/snapshots/tutorial/windows_install/env.png" style="zoom: 80%;border: 1px solid #eee;"/>


## 3. Troubleshoot issues with Event Viewer
-------------------------------

### 3.1 Event viewer

If none of the above solutions solve your problems, we can troubleshoot through the event viewer.

Method： Click “Start→Run”，enter eventvwr，Click "Confirm" and open "Event Viewer". 

<img src="/static/snapshots/tutorial/windows_install/eventvwr_1.png" style="zoom: 90%;border: 1px solid #eee;"/>

As shown below: Click[Windows Log]--[Application]，find these records of "error" level，try to fix the problems through these records.

<img src="/static/snapshots/tutorial/windows_install/eventvwr_2.png" style="zoom: 80%; border: 1px solid #eee;"/>

Note：If the record of event viewer displays `unKnown`, please download [opengl32sw.dll patch](https://update.dcloud.net.cn/hbuilderx/patch/opengl32sw.dll), and put it to the root directory of HBuilderX, then try again.

Listed below, the errors that may be encountered in the [Event Viewer]


### 3.2 Graphics card error：ig9icd32.dll

** `ig9icd32.dll error` solution **

<img src="/static/snapshots/tutorial/windows_install/eventvwr_3.png" style="zoom: 80%;" />

Method 1：Upgrade graphics driver

Method 2：Download [opengl32sw.dll patch](https://update.dcloud.net.cn/hbuilderx/patch/opengl32sw.dll), put it to the root directory of HBuilderX


### 3.3 Graphics card error：dbgcore.dll

** `dbgcore.dll error` solution**

Downlnoad [dbgcore.dll patch](https://update.dcloud.net.cn/hbuilderx/patch/dbgcore.dll), put it to the root directory of HBuilderX

> Note：Please refer to Chapter 4 if the configuration file of HBuilderX is damaged.


### 3.4 AMD graphics card error： atioglxx.dll

If your computer is equipped with AMD graphics card abd you encounter startup problems ( atioglxx.dll error in event viewer), atioglxx.dll is a file required by the ati graphics card driver.

Solution：

1. Start menu，search【Computer Management】
2. Click【Device Management】--> 【Display adapter】
3. Diabled AMD graphic card if you have two graphic cards. Please don't disable it if you have one graphic card only.

<img src="/static/snapshots/tutorial/windows_install/amd.png" />

### 3.5 【Device Management】An exclamation mark appears on the graphics card

Some types of graphics cards may be due to

1. Start menu，search【Computer Management】
2. Click【Device Management】--> 【Display adapter】
3. If there is exclamation mark on graphic card, please upgrade to latest version


### 3.6 Problems occurred after updating the graphics card driver

如果您更新过`显卡驱动`， 更新驱动之后，启动不了。那就是显卡驱动的问题。请还原显卡驱动，或升级驱动到最新版、或最新稳定版本。


## 4. 配置文件损坏
--------------

> 还有小伙伴反应，昨天还用的好好的，今天启动不了，怎么回事呢？

> 新下载的小伙伴，也有可能遇到这个问题。

有可能是配置文件损坏了，导致无法启动。

### 4.1 方案1：删除.lock文件

在操作系统资源管理器地址栏输入`%appdata%`回车； 在此目录下，找到HBuilder X目录，打开。

进入后，如发现存在`.lock`文件，删除此文件，然后尝试启动HBuilderX。

<img src="/static/snapshots/tutorial/lock.png" />

### 4.2 方案2：重置配置文件目录

1. 先点击一下安装目录下的`reset.bat`文件
2. 还不行，再尝试如下方案， 如下图所示，在地址栏输入`%appdata%`回车； 在此目录下，找到HBuilder X目录，注意：将此目录随便重命名一下，也可以删除掉

<img src="/static/snapshots/tutorial/windows_install/appdata.png" style="border: 1px solid #eee;"/>


## 5. win:启动后，顶部工具栏显示不全
-----------------

> 部分用户反馈，启动后，部分笔记本顶部工具栏显示不全

原因：在部分笔记本电脑上，因为分辨率或缩放的原因，HBuilderX启动顶部菜单显示不全。

解决方法：

1. 快捷键 `alt + 空格 + x`, 最大化HBuilderX
2. 桌面，点击右键菜单【显示设置】，调整下分辨率和缩放。


## 6. 备注

### 6.1 联系方式

如果以上都尝试了，还未解决，请联系官方：

1. Email: ide@dcloud.io
2. QQ: 搜群，群关键字：HBuilderX ,加入群后，找群管理员帮您解决。
3. 去论坛发帖。论坛地址：http://ask.dcloud.net.cn

### 6.2 如何提问？

如果您遇到启动问题，发邮件、或添加qq寻求帮助时，请您提供下列信息，这样可以得到更快帮助！

需要提供的信息：

- 操作系统信息，（windows 还是 Mac）
- 是首次下载，无法启动？还是以前可以打开，现在无法打开？
- windows电脑：如果遇到界面显示问题，请提供分辨率、缩放。（桌面，右键菜单【显示设置】
