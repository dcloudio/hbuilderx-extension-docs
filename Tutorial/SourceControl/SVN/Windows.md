# Windows SVN使用手册

## 前言

在HBuilderX内，使用SVN，需要先安装SVN插件，SVN插件调用的是`外部SVN工具`，因此也需要安装`TortoiseSVN`。

[TortoiseSVN下载地址](https://tortoisesvn.net/downloads.html), 下载后，双击打开exe，按照提示完成安装。

## 安装 HBuilderX SVN插件

HBuilderX顶部菜单，【工具】-> 【插件安装】，即可打开插件安装窗口，如下图所示，找到SVN插件，点击【安装】即可。

<img src="/static/snapshots/tutorial/source_control/plugin_window.png" style="zoom:70%" />

## SVN操作菜单

项目管理器，选中项目，右键菜单，即可看到SVN相关操作菜单，点击相关菜单，即可调起TortoiseSVN。

> 备注：HBuilderX SVN插件，都是调用TortoiseSVN，因此本文不再详细描述TortoiseSVN操作教程。

<img src="/static/snapshots/tutorial/source_control/svn_windows_menu.png" style="border-radius: 5px;border: 1px solid #eee;" />

## 快捷键配置

1. 点击菜单【工具】-->【自定义快捷键】
2. 文档左侧底部可看到所有SVN命令

```
//svn更新//{"key":"","command":"ExternalCommand:SVN_UPDATE"},//svn提交//{"key":"","command":"ExternalCommand:SVN_COMMIT"},//svn检查修改内容//{"key":"","command":"ExternalCommand:SVN_REPOSTATUS"},//svn查看日志//{"key":"","command":"ExternalCommand:SVN_LOG"},//svn删除当前文件(单个文件)//{"key":"","command":"ExternalCommand:SVN_REMOVE"},//svn增加文件(单个文件)//{"key":"","command":"ExternalCommand:SVN_ADD"},//svn还原(revert)//{"key":"","command":"ExternalCommand:SVN_REVERT"}
```

挑选需要的命令复制到右侧，配置上自己的快捷键
如：
```
[  
  {"key":"command+alt+u","command":"ExternalCommand:SVN_UPDATE"}
]
```