新版HBuilderX支持了在项目管理上对Git项目进行一些快捷操作。

该功能依赖Git插件，在Git项目名称后面显示该Git仓库的当前分支，样式如图所示：

![git分支标签](/static/snapshots/gitextension_branch.png)

该标签可以点击，打开Git快捷操作菜单，在Git插件里“scm/file/branchlabel”扩展点配置了该菜单列表。该功能默认开启：

![git分支标签菜单](/static/snapshots/gitextension_branch_menu.png)

同时，对旧版本的Git插件以下命令做了升级：

1. 切换分支（checkout）

    点击“切换分支”菜单，弹出分支选择列表，选择本地分支或远程分支执行签出：

    ![git切换分支](/static/snapshots/gitextension_checkout.png)

    执行签出时会在状态栏提示状态：

    ![git切换分支提示](/static/snapshots/gitextension_checkout_tips.png)

2. 获取（fetch）

    点击“获取”菜单，在当前项目执行git fetch命令

3. 拉取（pull）

    点击“拉取”菜单，默认提供了几个拉取选项（目前不能自定义）：

    ![git切换拉取](/static/snapshots/gitextension_pull.png)


4. 推送（push）

    点击“推送”菜单，默认提供了几个推送选项（目前不能自定义），当选择“force”选项是，会进行二次确认是否继续执行：

    ![git切换推送](/static/snapshots/gitextension_push.png)