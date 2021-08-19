# MacOSX Git

## Introduce

In HBuilderX, to use Git, you need to install the Git plug-in first. 

HBuilderX Top menu, 【Tool】-> 【plug-in installation】. Open the plug-in installation window, Find Git, Click【Install】.

<img src="/static/snapshots/tutorial/plugins_install_1.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## clone and import

- Top Menu, 【File】-> 【Import】-> 【Import From Git】
- HBuilderX Project manager, Right click menu【Import】-> 【Import From Git】

<img src="/static/snapshots/tutorial/source_control/git_macosx_clone.jpg" style="zoom:45%" />

## Operation menu

In the project manager, select the project and right-click the menu to see the git related operation menu.

<img src="/static/snapshots/tutorial/source_control/git_macosx_menu.png" style="zoom:50%; border: 1px solid #eee;" />

## Pull

项目上，右键菜单 【Git拉取】，即可从服务器拉取最新代码。

<img src="/static/snapshots/tutorial/source_control/git_macosx_pull.jpg" style="zoom:50%; border: 1px solid #eee;" />

## Commit

1. 在要提交的文件、或目录、或项目上，右键菜单，点击【提交】
2. 在弹窗中，输入提交内容，点击【提交】按钮。

<img src="/static/snapshots/tutorial/source_control/git_macosx_ac.jpg" style="zoom:45%; border: 1px solid #eee;" />

## Show Log

项目上，右键菜单 【Git】->【查看日志】

<img src="/static/snapshots/tutorial/source_control/git_macosx_log.jpg" style="zoom:45%; border: 1px solid #eee;border-radius: 20px;" />

## Branch

- 新建分支：选中项目，右键菜单【Git】-> 【新建分支】
- 切换分支：选中项目，右键菜单【Git】-> 【切换分支】
- 删除分支：选中项目，右键菜单【Git】-> 【删除分支】
- 合并分支：选中项目，右键菜单【Git】-> 【合并分支】 

<img src="/static/snapshots/tutorial/source_control/git_macosx_branch.jpg" style="zoom:60%; border: 1px solid #eee;border-radius: 20px;" />

## Shortcut key configuration

1. toop menu, 【tool】-->【custom keybindings】
2. All Git command configurations can be seen at the bottom of the left side of the document

```
//git pull
//{"key":"","command":"ExternalCommand:GIT_PULL"},

//git push
//{"key":"","command":"ExternalCommand:GIT_PUSH"},

//git rm file
//{"key":"","command":"ExternalCommand:GIT_REMOVE"},

//git add File
//{"key":"","command":"ExternalCommand:GIT_ADD"},

//git Switch branch
//{"key":"","command":"ExternalCommand:GIT_CHECKOUT_BRANCH"},

//git status
//{"key":"","command":"ExternalCommand:GIT_STATUS"},

//git reset
//{"key":"","command":"ExternalCommand:GIT_RESET"}
```

Select the required command and copy it to the right, configure your own shortcut keys

Example：

```
[  
  {"key":"command+alt+u","command":"ExternalCommand:GIT_PULL"} 
]
```

## Q：git xcrun error

Error encountered when using git:

```
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```

Solution, open the terminal and enter the following command:

```
xcode-select --install
```