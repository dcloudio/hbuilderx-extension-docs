# 如何卸载HBuilderX

## Windows卸载HBuilderX

1. 删除程序目录。windows, HBuilderX安装包是zip包，直接将解压的文件夹删除即可。
2. 如桌面有HBuilderX快捷方式，直接删除桌面快捷方式即可
3. 删除数据目录。操作系统资源管理器地址栏，输入`%Appdata%`，回车，找到`HBuilder X`目录，直接删除目录。
<img src="/static/snapshots/tutorial/windows_install/appdata.png" style="margin-top: 20px;border:1px solid #eee;border-radius: 5px;"/>

4. 删除注册表。

> 开始菜单输入`regedit.exe`，打开，按下`ctrl+f`，输入搜索内容，比如搜索`HBuilder`，删除搜索结果。

|	名称|key	|
|--	|--	|
|文件右键菜单Open with HBuilder X	|HKEY_CURRENT_USER/SOFTWARE/Classes/*/shell/HBuilderX	|
|文件夹右键菜单Open with HBuilder X	|HKEY_CURRENT_USER/SOFTWARE/Classes/Directory/shell/HBuilderX	|


## MacOSX删除HBuilderX

#### 1. 删除应用程序

> 如下图。MacOSX，打开`访达`，左侧点击`应用程序`，进入应用程序窗口，找到HBuilderX，右键菜单，点击`移到废纸篓`

<img src="/static/snapshots/mac_uninstall.png" style="zoom: 50%; border:1px solid #eee; border-radius: 20px;" />

#### 2. 删除数据目录

打开操作系统终端，输入如下命令：

```
open $HOME/Library/Application\ Support/
```

此时会打开`访达`, 在访达窗口，找到`HBuilderX`目录，右键菜单，点击删除。
