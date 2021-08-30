# MacOSX SVN使用手册

在HBuilderX内，使用SVN，需要先安装SVN插件，SVN插件调用的是`外部SVN命令行工具`，因此也需要安装svn命令工具。

## SVN命令行工具

打开`操作系统终端`，输入如下命令, 如未安装brew，请先安装[Homebrew](https://brew.sh/index_zh-cn)
```
brew install subversion

# 安装完成后，输入如下命令，测试是否安装成功。
which svn
```

## HBuilderX SVN插件

HBuilderX顶部菜单，【工具】-> 【插件安装】，即可打开插件安装窗口，如下图所示，找到SVN插件，点击【安装】即可。

<img src="/static/snapshots/tutorial/source_control/plugin_macosx.jpg" style="zoom:40%; border-radius: 20px;border: 1px solid #eee;" />

## SVN操作菜单

项目管理器，选中项目，右键菜单，即可看到SVN相关操作菜单。

<img src="/static/snapshots/tutorial/source_control/svn_macosx_menu.png" style="zoom:50%;border-radius: 5px;border: 1px solid #eee;" />

## SVN 提交

1. 在要提交的文件、或目录、或项目上，右键菜单，点击【SVN 提交】
2. 在弹窗中，输入提交内容，点击【SVN 提交】按钮。

<img src="/static/snapshots/tutorial/source_control/svn_macosx_ci.jpg" style="zoom:45%; border: 1px solid #eee;" />

## SVN 查看日志

项目上，右键菜单 【SVN】->【查看日志】

<img src="/static/snapshots/tutorial/source_control/svn_macosx_log.jpg" style="zoom:50%; border: 1px solid #eee;border-radius: 20px;" />

## SVN 快捷键配置

1. 点击菜单【工具】-->【自定义快捷键】
2. 文档左侧底部可看到所有SVN命令

```
//svn更新
//{"key":"","command":"ExternalCommand:SVN_UPDATE"},
//svn增加文件(单个文件)
//{"key":"","command":"ExternalCommand:SVN_ADD"},
//svn删除当前文件(单个文件)
//{"key":"","command":"ExternalCommand:SVN_REMOVE"},
//svn还原(revert)
//{"key":"","command":"ExternalCommand:SVN_REVERT"}
```

挑选需要的命令复制到右侧，配置上自己的快捷键
如：
```
[  
  {"key":"command+alt+u","command":"ExternalCommand:SVN_UPDATE"}
]
```