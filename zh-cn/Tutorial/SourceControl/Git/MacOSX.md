# MacOSX Git使用手册

## 前言

在HBuilderX内，使用Git，需要先安装HBuilderX Git插件。

HBuilderX顶部菜单，【工具】-> 【插件安装】，即可打开插件安装窗口，如下图所示，找到Git插件，点击【安装】即可。

<img src="/static/snapshots/tutorial/plugins_install_1.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## 克隆或导入项目

- 顶部菜单【文件】-> 【导入】-> 【从Git导入】，即可打开导入窗口
- 或从项目管理器，空白处，右键菜单【导入】-> 【从Git导入】

<img src="/static/snapshots/tutorial/source_control/git_macosx_clone.jpg" style="zoom:45%" />

## Git操作菜单

项目管理器，选中项目，右键菜单，即可看到git相关操作菜单。

<img src="/static/snapshots/tutorial/source_control/git-new-show.png" style="zoom:50%; border: 1px solid #eee;" />

## Pull拉取

项目管理器，选中项目，右键菜单 【Git pull】

<img src="/static/snapshots/tutorial/source_control/git-new-pull.png" style="zoom:50%; border: 1px solid #eee;" />

## Push推送

项目管理器，选中项目，右键菜单 【Git Push】

<img src="/static/snapshots/tutorial/source_control/git-new-push.png" style="zoom:50%; border: 1px solid #eee;" />

## 提交

1. 在要提交的文件、或目录、或项目上，右键菜单，点击【提交】
2. 在弹窗中，输入提交内容，点击【提交】按钮。

<img src="/static/snapshots/tutorial/source_control/git_macosx_ac.jpg" style="zoom:45%; border: 1px solid #eee;" />

## 查看日志

项目上，右键菜单 【Git】->【查看日志】

<img src="/static/snapshots/tutorial/source_control/git_macosx_log.jpg" style="zoom:45%; border: 1px solid #eee;border-radius: 20px;" />

## 分支操作

- 新建分支：选中项目，右键菜单【Git】-> 【新建分支】
- 切换分支：选中项目，右键菜单【Git】-> 【切换分支】
- 删除分支：选中项目，右键菜单【Git】-> 【删除分支】
- 合并分支：选中项目，右键菜单【Git】-> 【合并分支】 

<img src="/static/snapshots/tutorial/source_control/git_macosx_branch.jpg" style="zoom:60%; border: 1px solid #eee;border-radius: 20px;" />

## 快捷键配置

1. 点击菜单【工具】-->【自定义快捷键】
2. 文档左侧底部可看到所有git命令

```
//git拉取(pull)
//{"key":"","command":"ExternalCommand:GIT_PULL"},
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
  {"key":"command+alt+u","command":"ExternalCommand:GIT_PULL"} 
]
```

## 问题：git xcrun错误

使用git时遇到的错误
```
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```

解决方案, 打开终端输入如下命令：

```
xcode-select --install
```