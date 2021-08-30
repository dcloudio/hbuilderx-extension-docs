# HBuilderX Windows 启动问题排查指南

## 前言

此帖子为`windows`解决方案，mac请参考：[mac解决方案](http://hx.dcloud.net.cn/Tutorial/install/macosx?id=启动问题)
  
`windows`的`zip`包，解压时间比较长，请勿中断！  如中断了解压，请重新解压

** Windows HBuilderX起不来，主要有两种：**

- 新下载的起不来，请参考`第一章`
- 以前可以启动，后来起不来，应该是配置文件损坏了，请`直接看4.1章节` 


## 1.  重点：新下载的HBuilderX无法启动
-------------------------------

> 近来，部分小伙伴，反馈在windows系统上，新下载的HBuilderX，解压后，无法启动、点击无反应、启动报xxx.dll错误。

`特别备注：HBuilderX，要求系统最低是win7，不支持xp`

特别说明： 如果您的电脑AMD显卡，请直接看第6章节

### 1.0 打开方式不对

有的小伙伴，从`DCloud.io`下载zip包，双击后，在`压缩软件`里，点击`HBuilderX.exe`

这种是不对的，`zip包需要解压才能使用`

<img src="/static/snapshots/tutorial/windows_error_open.min.png" style="zoom:80%" />

<img src="/static/snapshots/tutorial/install_windows.png" />


### 1.1 快捷方式引发的问题

windows, 部分小伙伴，解压zip后，为了创建快捷方式，把`HBuilderX.exe`直接拖动到桌面了，点击exe启动不了。

创建`桌面快捷方式`的正确姿势：

1.  选中`HBuilderX.exe`， 点击鼠标右键，出现菜单
2. 点击菜单项：`发送到`
3. 点击`桌面快捷方式`


### 1.2. 问题现象2： 没有任何反应

- 解压后，点击HBuilderX.exe,  没有任何反应
- 解压后，点击HBuilderX.exe, HBuilderX进程启动，又马上关闭

**尝试以下解决方案**

1. 关闭所有的`杀毒软件`后，启动试试
2. 使用`超级管理员`启动试试
3. 按照现象1的方案尝试一下
4. 在`HBuilderX.exe`上，鼠标右键，点击属性。如下图所示操作：

<img src="/static/snapshots/tutorial/windows_install/1.png" style="zoom:80%;border: 1px solid #eee;" />

> 备注： 如果此方法，没有解决您的问题，请看下【事件查看器】中的错误。[事件查看器](/Tutorial/Question/WindowsStart?id=_3-通过-事件查看器-排查问题)

### 1.3 内存不能read

> 如遇到`内存不能read`的问题，请自行百度搜索相关方法


## 2. Qt引发的问题
-------------------------------

> 如果您的电脑安装过qt程序，可能会遇到下列问题

### 2.1 问题现象1：缺少qt*库

- 解压后，点击HBuilderX.exe,  提示缺少`qt5*.dll`库
- 解压后，点击HBuilderX.exe,  提示`无法定位输入点xxxxxxx于动态链接库xxx.dll上`

<img src="/static/snapshots/tutorial/windows_install/qt_error_1.png" style="border: 1px solid #eee;"/>


** 解决方案**

方法1： 解压后，进入HBuilderX目录，进入bin目录，将bin目录下，所有`除了api开头的dll文件`，就是`非api开头的dll文件`，`剪切`到上一级目录。注意是`剪切`，不是`复制`。

方法2：进入`HBuilderX`目录下`bin`目录，找到弹框里面提到的`dll`文件，然后拷贝到`System32`或者`SysWOW64`文件夹

方法3：检查一下本机是否安装了`qt`，如以前安装过，进入`环境变量`，将qt相关的环境变量删除

### 2.2 问题现象2

如下图：

<img src="/static/snapshots/tutorial/windows_install/qt_error_2.png" style="zoom: 80%;border: 1px solid #eee; padding: 10px;"/>

解决方案：检查一下本机是否安装了`qt`，如以前安装过，进入`环境变量`，将qt相关的环境变量删除

<img src="/static/snapshots/tutorial/windows_install/env.png" style="zoom: 80%;border: 1px solid #eee;"/>


## 3. 通过 事件查看器 排查问题
-------------------------------

### 3.1 使用事件查看器

如果以上的方案都没有解决您的问题，那就需要仔细查找原因了。

某些错误，会记录在【事件查看器】中。

打开事件查看器的方法： 点击“开始→运行”，输入eventvwr，点击“确定”，就可以打开事件查看器。

<img src="/static/snapshots/tutorial/windows_install/eventvwr_1.png" style="zoom: 90%;border: 1px solid #eee;"/>

如下图： 点击【Windows 日志】--【应用程序】，找到级别为`错误`的记录，如是`HBuilderX`的`记录`，根据`记录`，解决问题

<img src="/static/snapshots/tutorial/windows_install/eventvwr_2.png" style="zoom: 80%; border: 1px solid #eee;"/>

特别说明：如果事件查看器错误显示`unKnow`, 那就下载此 [opengl32sw.dll文件补丁](https://update.dcloud.net.cn/hbuilderx/patch/opengl32sw.dll)，放到HBuilderX根目录试试

下面罗列，【事件查看器】中可能会遇到的错误


### 3.2 显卡错误：ig9icd32.dll错误

** 在`事件查看器`中，可能遇到`ig9icd32.dll错误`的解决办法**

<img src="/static/snapshots/tutorial/windows_install/eventvwr_3.png" style="zoom: 80%;" />

方法1：升级显卡驱动

方法2：下载此 [opengl32sw.dll文件补丁](https://update.dcloud.net.cn/hbuilderx/patch/opengl32sw.dll), 下载后，将此`dll`文件，放到HBuilderX安装目录的根目录


### 3.3 显卡错误：dbgcore.dll错误

** 在`事件查看器`中，可能遇到`dbgcore.dll错误`的解决办法**

下载补丁文件 [dbgcore.dll下载地址](https://update.dcloud.net.cn/hbuilderx/patch/dbgcore.dll), 下载后，将此`dll`文件，放到HBuilderX安装目录的根目录

> 注意：也有可能是配置文件损坏了。参考4章节。


### 3.4 AMD显卡错误： atioglxx.dll错误

如果您的电脑配置了AMD显卡，如遇到启动问题（事件查看器atioglxx.dll错误），atioglxx.dll是ati显卡驱动所需要的一个文件。

解决办法：

1. 开始菜单，搜索【计算机管理】
2. 点击【设备管理器】--> 【显示适配器】
3. 如果有两块显卡，且其中一块为AMD，选中amd显卡，右键菜单，`禁用`。如果只有一块AMD显卡，就别禁用了。

<img src="/static/snapshots/tutorial/windows_install/amd.png" />

### 3.5 【设备管理器】显卡上面出现叹号

部分类型的显卡，可能因为

1. 开始菜单，搜索【计算机管理】
2. 点击【设备管理器】--> 【显示适配器】
3. 如果上面显示`叹号`， 更新到最新版本。


### 3.6 更新显卡驱动后出现问题

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