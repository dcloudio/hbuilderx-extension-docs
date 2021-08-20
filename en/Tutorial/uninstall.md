# 如何卸载HBuilderX

## Windows卸载HBuilderX

1. 删除数据目录和及注册表，进入HBuilderX安装目录，找到`reset.bat`，点击运行。此操作可以删除HBuilderX数据目录及注册表。
2. 删除程序目录。windows, HBuilderX安装包是zip包，直接将解压的文件夹删除即可。
3. 如桌面有HBuilderX快捷方式，直接删除桌面快捷方式即可

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
