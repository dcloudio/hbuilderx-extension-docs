# 菜单异常问题

### 问题@question

某些用户，升级后，出现异常异常，即菜单显示%xxx%。

<img src="/static/snapshots/other/menu_error.png" class="hd-img" />

### 方法1：清除配置文件

#### MacOSX

1. 在命令行，进入`$HOME/Library/Application\ Support/HBuilder\ X`目录，删除`prefs`文件
2. 在命令行，删除`$HOME/Library/Caches/HBuilder\ X`目录。

请注意： mac上，如果路径包含`空格`，需要`\`进行转义

#### Windows

1. 操作系统资源管理器，输入`%appdata%`回车，找到`HBuilder X`目录并进入，删除`prefs`文件
2. 如果还存在问题，接着输入`%localAppdata%`回车，找到`HBuilder X`目录并删除。

### 方法2：重新安装

进入[HBuilderX官网](https://www.dcloud.io/hbuilderx.html)，重新下载安装HBuilderX。
