# MacOSX HBuilderX项目管理器项目点击没有反应的解决方案@Privacy

## 问题@question

近期，有些用户升级后，出现HBuilderX项目管理器项目点击`没有反应`、`无法展开文件列表`的问题。

## 原因@reason

MacOSX，某些系统，访问`Document`、`DownLoad`、`Desktop`等目录，需要授权后才能访问。

备注：当操作系统弹窗，询问是否运行HBuilderX访问某些文件夹时，请务必点击允许。

<img src="/static/snapshots/tutorial/other/mac_privacy_ask.jpg" class="hd-img" style="border-radius: 25px;"/>

## 解决方案@solution

方法1：HBuilderX，项目管理，选中项目，右键菜单【移除项目】，然后重新将项目拖入到HBuilderX

方法2：如下图，打开操作系统设置 -> 安全性和隐私 -> 隐私 -> 文件和文件夹，找到HBuilderX，然后勾选。

<img src="/static/snapshots/tutorial/other/mac_privacy.jpg" class="hd-img" style="border-radius: 25px;"/>

方法3：

HBuilderX 正式版:先关闭HBuilderX 正式版, 然后在命令行中输入并回车:
```shell
tccutil reset All io.dcloud.HBuilderX
```

HBuilderX Alpha版:先关闭HBuilderX Alpha版, 然后在命令行中输入并回车:
```shell
tccutil reset All io.dcloud.HBuilderXAlpha
```
再次打开HBuilder是将会可能会弹出系统询问框,此时请点击允许进行授权

<img src="/static/snapshots/tutorial/other/mac_privacy_ask.jpg" class="hd-img" style="border-radius: 25px;"/>

方法3适用于 macOS 13.0.1 以前版本
