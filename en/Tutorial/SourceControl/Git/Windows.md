# Windows Git

## Introduce

In HBuilderX, to use Git, you need to install the Git plug-in first. 

The Git plug-in calls the `external Git command line tool`, So need to install`TortoiseGit`。

[TortoiseGit DownLoad](https://tortoisegit.org/download/)

## Plug-in Install

HBuilderX Top menu, 【Tool】-> 【plug-in installation】. Open the plug-in installation window, Find Git, Click【Install】.

<img src="/static/snapshots/tutorial/source_control/plugin_window.png" style="zoom:70%" />

## clone and import

- Top Menu, 【File】-> 【Import】-> 【Import From Git】
- HBuilderX Project manager, Right click menu【Import】-> 【Import From Git】

<img src="/static/snapshots/tutorial/source_control/git_windows_clone_en.png" style="zoom:70%;border: 1px solid #eee;" />

## Operation menu

In the project manager, select the project and right-click the menu to see the git related operation menu. 

Click the related menu to bring up TortoiseGit.

> Note: HBuilderX Git plug-in all calls TortoiseGit, so this article will not describe the TortoiseGit operation tutorial in detail.

<img src="/static/snapshots/tutorial/source_control/git-new-show.png" style="zoom:50%; border: 1px solid #eee;" />

## Pull

> git-pull - Fetch from and integrate with another repository or a local branch

Project, right-click menu 【Git pull】

<img src="/static/snapshots/tutorial/source_control/git-new-pull-en.png" style="zoom:50%; border: 1px solid #eee;" />

## Push

> git-push - Update remote refs along with associated objects

Project, right-click menu 【Git Push】

<img src="/static/snapshots/tutorial/source_control/git-new-push-en.png" style="zoom:50%; border: 1px solid #eee;" />

**备注**：git push --force: 表示将目前自己本机的代码库推送到远端，并覆盖。请谨慎使用。

## Shortcut key configuration

1. toop menu, 【tool】-->【custom keybindings】
2. All Git command configurations can be seen at the bottom of the left side of the document

```
//git pull 
//{"key":"","command":"ExternalCommand:GIT_PULL"},  

//git commit 
//{"key":"","command":"ExternalCommand:GIT_COMMIT"},  

//git push  
//{"key":"","command":"ExternalCommand:GIT_PUSH"},  

//git rm file  
//{"key":"","command":"ExternalCommand:GIT_REMOVE"},  

//git add filename 
//{"key":"","command":"ExternalCommand:GIT_ADD"},  

//git switch branch  
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
  {"key":"command+alt+u","command":"ExternalCommand:GIT_PULL"},  
  {"key":"command+i","command":"ExternalCommand:GIT_COMMIT"}  
]
```