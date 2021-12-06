# MacOSX安装HBuilderX@install

<!--
keyword:安装,安装HBuilderX,下载
-->

## 下载@download

HBuilderX下载地址: [下载地址](https://www.dcloud.io/hbuilderx.html)

## 安装@install

如图，将HBuilderX`拖`到Applications，才是正确的安装姿势。

<img src="/static/snapshots/tutorial/install_mac.jpeg" />

> MacOSX，软件必须安装到`/Applications`目录，如未安装到此目录，可能会出现插件安装失败、项目创建失败等问题。

如果启动遇到下列问题，请到【系统设置】中解决。

<img src="/static/snapshots/tutorial/mac_download1.min.jpg" style="zoom: 40%; border: 1px solid #eee;border-radius: 10px;"/>

<img src="/static/snapshots/tutorial/mac_download2.min.jpg" style="zoom: 40%; border: 1px solid #eee;border-radius: 10px;"/>


## 配置文件目录@config

配置文件目录，如下：
- `$HOME/Library/Application\ Support/HBuilder\ X`
- `$HOME/Library/Caches/HBuilder\ X`

**请注意：** mac上，如果路径包含空格，需要`\`进行转义


## 启动问题@question

某些情况下，MacOSX HBuilderX无法启动，解决方法如下：

- 重启电脑
- 配置文件目录下的.lock文件问题 [解决方案](#deleteLockFile)
- 配置文件损坏，导致HBuilderX无法启动，重置配置文件即可。[解决方案](#resetConfig)

#### 删除.lock文件@deleteLockFile

打开操作系统终端，输入如下命令： 

```
rm -f $HOME/Library/Application\ Support/HBuilder\ X/.lock
```

如删除.lock文件还无法解决启动问题，请尝试删除配置文件目录, [详见](#resetConfig)。


#### 重置配置文件目录@resetConfig

> 如在HBuilderX内，曾设置过快捷键、代码块、以及其它设置项，如需保存，删除前，建议备份。
> 目录：$HOME/Library/Application\ Support/HBuilder\ X/user

```shell
# 备份配置文件，如不需要，请略过
cp -r $HOME/Library/Application\ Support/HBuilder\ X   $HOME/Desktop/HX

# 直接删除配置文件目录
rm -r $HOME/Library/Application\ Support/HBuilder\ X
rm -r $HOME/Library/Caches/HBuilder\ X
```