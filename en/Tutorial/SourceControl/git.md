# Git major update

HBuilderX 3.1.23+ supports some quick operations on Git projects in project management.

The current branch of the Git repository is displayed after the Git project name, and the style is as shown in the figure:

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch.png" style="border:1px solid #eee; border-radius: 5px;"/>

Note: In HBuilderX, to use Git, you need to install the Git plug-in first. The Git plug-in calls the `external Git command tool`, so you need to install the Git command line tool; at the same time, Windows also needs to install [TortoiseGit](https://tortoisegit.org/download/)。

### Git shortcut menu

The label can be clicked to open the Git shortcut operation menu, and the menu list is configured in the "scm/file/branchlabel" extension point in the Git plugin. This feature is turned on by default.

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch_menu.png" style="border:1px solid #eee; border-radius: 5px;"/>

At the same time, the following commands of the old version of the Git plugin have been upgraded:

### Switch change（checkout）

Click the "Switch Branch" menu to pop up the branch selection list, select the local branch or the remote branch to checkout:

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_checkout.png" style="border:1px solid #eee; border-radius: 5px;"/>

The status will be displayed in the status bar when checking out:

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_checkout_tips.png" style="border:1px solid #eee; border-radius: 5px;"/>

### Fetch

Click the "Fetch" menu and execute the git fetch command in the current project.

### Checkout

Click the "Switch Branch" menu to pop up the branch selection list, select the local branch or the remote branch to checkout:

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_pull.png" style="border:1px solid #eee; border-radius: 5px;"/>

```
# the diff between git pull和git pull --rebase
git pull = git fetch + git merge
git pull --rebase = git fetch + git rebase
```

### Push

Click the "Push" menu, several push options are provided by default (currently cannot be customized). When the "force" option is selected, a second confirmation will be made whether to continue execution:

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_push.png" style="border:1px solid #eee; border-radius: 5px;"/>

Remark：`git push --force`: It means to push the current code library of your own computer to the remote server and overwrite it. Please use it with caution.
