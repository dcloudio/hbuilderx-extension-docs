# MacOSX Git Manual

## Summary

In HBuilderX, you have to install the Git plug-in before you can use Git. 

HBuilderX Top menu, [Tool]-> [plug-in installation]. Open the plug-in installation window, Find Git, Click [Install].

<img src="/static/snapshots/tutorial/source_control/plugin_macosx_en.png" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## clone and import project

- Top Menu, [File]-> [Import]-> [Import From Git]
- HBuilderX Project manager, Right click menu [Import]-> [Import From Git]

<img src="/static/snapshots/tutorial/source_control/git_macosx_clone_en.jpg" style="zoom:40%;border: 1px solid #eee;" />

## Git menu

In the project manager, select the project and right-click the menu to see the git related operation menu.

<img src="/static/snapshots/tutorial/source_control/git-new-show.png" style="zoom:50%; border: 1px solid #eee;" />

## Pull

> git-pull - In explorer, select a project and right-click mouse, then click [Git
>  pull] from menus.

<img src="/static/snapshots/tutorial/source_control/git-new-pull-en.png" style="zoom:50%; border: 1px solid #eee;" />

## Push

> git-push - In explorer, select a project and right-click mouse, then click [Git
>  push] from menus.

<img src="/static/snapshots/tutorial/source_control/git-new-push-en.png" style="zoom:50%; border: 1px solid #eee;" />

**Remark**：git push --force: It means to push the current code library of your own computer to the remote server and overwrite it. Please use it with caution.

## Commit

1. Select the file or the directory or the project to be submitted, right-click the menu and click [commit]
2. In the pop-up window, enter the `commit message` and click the [Submit] button.

<img src="/static/snapshots/tutorial/source_control/git_macosx_ac_en.jpg" style="zoom:40%; border: 1px solid #eee;" />

## View Log

Selected Project，right-click menu [Git]->[View Log]

<img src="/static/snapshots/tutorial/source_control/git_macosx_log_en.png" style="zoom:45%; border: 1px solid #eee;border-radius: 20px;" />

## Branch
- New Branch: Selected Project, right-click menu【Git】-> 【Git New Branch】 
- Switch Branch：Selected Project, right-click menu【Git】-> 【Git Switch Branch-Checkoutf】
- Delete Branch：Selected Project, right-click menu【Git】-> 【Git Delete Branch】
- Merge Bbranch：Selected Project, right-click menu【Git】-> 【Git Merge Branch】 

<img src="/static/snapshots/tutorial/source_control/git_macosx_branch_en.jpg" style="zoom:60%; border: 1px solid #eee;border-radius: 20px;" />

## Shortcut Configuration

1. top menu, 【Tool】-->【Custom Keybindings】
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
