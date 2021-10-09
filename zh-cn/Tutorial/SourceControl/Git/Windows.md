# Windows Git使用手册

## 前言

在HBuilderX内，使用Git，需要先安装Git插件，Git插件调用的是`外部Git工具`，因此也需要安装`TortoiseGit`。


## 安装TortoiseGit

[TortoiseGit下载地址](https://tortoisegit.org/download/), 下载后，双击打开exe，按照提示完成安装。

注意：TortoiseGit 有32和64之分，请根据自己的电脑来决定下载。

下载TortoiseGit后，双击打开进行安装。

<img src="/static/snapshots/tutorial/source_control/TortoiseGit1.png" style="zoom:90%; border: 1px solid #eee;" />

<img src="/static/snapshots/tutorial/source_control/TortoiseGit2.png" style="zoom:90%; border: 1px solid #eee;"/>

安装完成后，操作系统资源管理器，右键菜单会出现TortoiseGit相关菜单，如下图：

<img src="/static/snapshots/tutorial/source_control/TortoiseGit3.png" style="zoom:50%;border: 1px solid #eee;" />

## 安装 HBuilderX Git插件

HBuilderX顶部菜单，【工具】-> 【插件安装】，即可打开插件安装窗口，如下图所示，找到Git插件，点击【安装】即可。

<img src="/static/snapshots/tutorial/source_control/plugin_window.png" style="zoom:70%" />

## 克隆或导入项目

- 顶部菜单【文件】-> 【导入】-> 【从Git导入】，即可打开导入窗口
- 或从项目管理器，空白处，右键菜单【导入】-> 【从Git导入】

<img src="/static/snapshots/tutorial/source_control/git_windows_clone.png" style="zoom:70%" />

## Git操作菜单

项目管理器，选中项目，右键菜单，即可看到git相关操作菜单，点击相关菜单，即可调起TortoiseGit。

> 备注：HBuilderX Git插件，都是调用TortoiseGit，因此本文不再详细描述TortoiseGit操作教程。

<img src="/static/snapshots/tutorial/source_control/git-new-show.png" style="zoom:50%; border: 1px solid #eee;" />

## Pull拉取

项目管理器，选中项目，右键菜单 【Git pull】

<img src="/static/snapshots/tutorial/source_control/git-new-pull.png" style="zoom:50%; border: 1px solid #eee;" />

## Push推送

项目管理器，选中项目，右键菜单 【Git Push】

<img src="/static/snapshots/tutorial/source_control/git-new-push.png" style="zoom:50%; border: 1px solid #eee;" />

**备注**：git push --force: 表示将目前自己本机的代码库推送到远端，并覆盖。请谨慎使用。

## 快捷键配置

1. 点击菜单【工具】-->【自定义快捷键】
2. 文档左侧底部可看到所有git命令

```
//git拉取(pull)  
//{"key":"","command":"ExternalCommand:GIT_PULL"},  
//git提交  
//{"key":"","command":"ExternalCommand:GIT_COMMIT"},  
//git推送  
//{"key":"","command":"ExternalCommand:GIT_PUSH"},  
//git删除当前文件(单个文件)  
//{"key":"","command":"ExternalCommand:GIT_REMOVE"},  
//git增加文件(单个文件)  
//{"key":"","command":"ExternalCommand:GIT_ADD"},  
//git切换分支  
//{"key":"","command":"ExternalCommand:GIT_CHECKOUT_BRANCH"},  
//git文件状态  
//{"key":"","command":"ExternalCommand:GIT_STATUS"},  
//git还原(reset)  
//{"key":"","command":"ExternalCommand:GIT_RESET"}
```

挑选需要的命令复制到右侧，配置上自己的快捷键
如：
```
[  
  {"key":"command+alt+u","command":"ExternalCommand:GIT_PULL"},  
  {"key":"command+i","command":"ExternalCommand:GIT_COMMIT"}  
]
```