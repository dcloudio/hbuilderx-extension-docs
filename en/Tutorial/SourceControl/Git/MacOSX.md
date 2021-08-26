# MacOSX Git

## Introduce

In HBuilderX, to use Git, you need to install the Git plug-in first. 

HBuilderX Top menu, 【Tool】-> 【plug-in installation】. Open the plug-in installation window, Find Git, Click【Install】.

<img src="/static/snapshots/tutorial/source_control/plugin_macosx_en.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 20px;"/>

## clone and import

- Top Menu, 【File】-> 【Import】-> 【Import From Git】
- HBuilderX Project manager, Right click menu【Import】-> 【Import From Git】

<img src="/static/snapshots/tutorial/source_control/git_macosx_clone_en.jpg" style="zoom:40%;border: 1px solid #eee;" />

## Operation menu

In the project manager, select the project and right-click the menu to see the git related operation menu.

<img src="/static/snapshots/tutorial/source_control/git-new-show.png" style="zoom:50%; border: 1px solid #eee;" />

## Pull

> git-pull - Fetch from and integrate with another repository or a local branch

Project, right-click menu 【Git pull】

<img src="/static/snapshots/tutorial/source_control/git-new-pull-en.png" style="zoom:50%; border: 1px solid #eee;" />

## Push

> git-push - Update remote refs along with associated objects

Project, right-click menu 【Git Push】

<img src="/static/snapshots/tutorial/source_control/git-new-push-en.png" style="zoom:50%; border: 1px solid #eee;" />


## Commit

> git-commit - Record changes to the repository

1. On the file, directory, or project to be submitted, right-click the menu and click [commit]
2. In the pop-up window, enter the `commit Message` and click the [Submit] button.

<img src="/static/snapshots/tutorial/source_control/git_macosx_ac_en.jpg" style="zoom:40%; border: 1px solid #eee;" />

## Show Log

Selected Project，right-click menu 【Git】->【show log】

<img src="/static/snapshots/tutorial/source_control/git_macosx_log_en.png" style="zoom:45%; border: 1px solid #eee;border-radius: 20px;" />

## Branch: Switch

Selected Project, right-click menu【Git】-> 【Switch Branch-Checkout】
 
<img src="/static/snapshots/tutorial/source_control/git-switch-branch-en.png" style="zoom:45%; border: 1px solid #eee;" />

## Branch: New

- create branch：Selected Project, right-click menu【Git】-> 【Git New Branch】

<img src="/static/snapshots/tutorial/source_control/git_macosx_branch_en.jpg" style="zoom:60%; border: 1px solid #eee;border-radius: 20px;" />

## Branch: Other operating


- delete branch：Selected Project, right-click menu【Git】-> 【Git delete branch】
- merge branch：Selected Project, right-click menu【Git】-> 【Git merge branch】 

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