# Git重大更新

HBuilderX 3.1.23+ 支持在项目管理上对Git项目进行一些快捷操作。

在Git项目名称后面显示该Git仓库的当前分支，样式如图所示：

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch.png" style="border:1px solid #eee; border-radius: 5px;"/>

备注：在HBuilderX内，使用Git，需要先安装Git插件，Git插件调用的是`外部Git工具`，因此需要安装的Git命令行工具；同时windows也需要安装[TortoiseGit](https://tortoisegit.org/download/)。

### Git快捷操作菜单

该标签可以点击，打开Git快捷操作菜单，在Git插件里“scm/file/branchlabel”扩展点配置了该菜单列表。该功能默认开启：

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch_menu.png" style="border:1px solid #eee; border-radius: 5px;"/>

同时，对旧版本的Git插件以下命令做了升级：

### 切换分支（checkout）

点击“切换分支”菜单，弹出分支选择列表，选择本地分支或远程分支执行签出：

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_checkout.png" style="border:1px solid #eee; border-radius: 5px;"/>

执行签出时会在状态栏提示状态：

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_checkout_tips.png" style="border:1px solid #eee; border-radius: 5px;"/>

### 获取（fetch）

点击“获取”菜单，在当前项目执行git fetch命令

### 拉取（pull）

点击“拉取”菜单，默认提供了几个拉取选项（目前不能自定义）：

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_pull.png" style="border:1px solid #eee; border-radius: 5px;"/>

```
# git pull和git pull --rebase的区别
git pull = git fetch + git merge
git pull --rebase = git fetch + git rebase
```

### 推送（push）

点击“推送”菜单，默认提供了几个推送选项（目前不能自定义），当选择“force”选项是，会进行二次确认是否继续执行：

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_push.png" style="border:1px solid #eee; border-radius: 5px;"/>

特别说明： `git push --force` 强制推送，会覆盖远端内容，请谨慎操作。