# Windows Git

## Summary

In HBuilderX, you have to install the Git plug-in before you can use Git. 

The Git plug-in calls the `external Git command line tool`, you need to install`TortoiseGit`。

[TortoiseGit DownLoad](https://tortoisegit.org/download/)

## Install TortoiseGit

[TortoiseGit Download](https://tortoisegit.org/download/), double click exe file after download and then follow the instructions to complete the installation.

Note：TortoiseGit is available in 32-bit and 64-bit, please download according to your computer OS.

After downloaded TortoiseGit, double-click to open it to install it.

<img src="/static/snapshots/tutorial/source_control/TortoiseGit1.png" style="zoom:90%; border: 1px solid #eee;" />

<img src="/static/snapshots/tutorial/source_control/TortoiseGit2.png" style="zoom:90%; border: 1px solid #eee;"/>

After the installation is complete, right-click the mouse and the TortoiseGit menu will appear, as shown below:

<img src="/static/snapshots/tutorial/source_control/TortoiseGit3.png" style="zoom:50%;border: 1px solid #eee;" />

## Install Git Plugin

HBuilderX Top menu, [Tool]-> [plug-in installation]. Open the plug-in installation window, Find Git, Click [Install].

<img src="/static/snapshots/tutorial/source_control/plugin_window_en.png" style="zoom:70%" />

## Clone or Import

- Top Menu, [File]-> [Import]-> [Import From Git]
- HBuilderX Project manager, Right click menu [Import]-> [Import From Git]

<img src="/static/snapshots/tutorial/source_control/git_windows_clone_en.png" style="zoom:70%;border: 1px solid #eee;" />

## Git menu

In the project manager, select the project and right-click the menu to see the git related operation menu. Click the related menu to bring up TortoiseGit.

> Note: HBuilderX Git plug-in calls TortoiseGit for all git operation, please search TortoiseGit manual for more details.

<img src="/static/snapshots/tutorial/source_control/git-new-show.png" style="zoom:50%; border: 1px solid #eee;" />

## Pull

> git-pull - In explorer, select a project and right-click mouse, then click [Git
>  Pull] from menus.

<img src="/static/snapshots/tutorial/source_control/git-new-pull-en.png" style="zoom:50%; border: 1px solid #eee;" />

## Push

> git-push - In explorer, select a project and right-click mouse, then click [Git
>  Push] from menus.

<img src="/static/snapshots/tutorial/source_control/git-new-push-en.png" style="zoom:50%; border: 1px solid #eee;" />

**Remark**：git push --force: It means to push the current code library of your own computer to the remote server and overwrite it. Please use it with caution.

## Shortcut Configuration

1. Top menu, 【Tool】-->【Custom Keybindings】
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
