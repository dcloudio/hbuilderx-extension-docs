# Git Blame

 Git Blame 功能提供了便捷的方式，让用户能够快速查看 Git 项目中某行代码的最后一次提交的时间、作者、邮箱以及提交信息，并且还能够进行版本对比。

 该功能不依赖TortoiseGit，安装git插件后默认开启。

1. 基本用法

    光标置于编辑器某行，自动在该行行尾处显示该行最后一次提交信息。

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch_blame1.png" style="border:1px solid #eee; border-radius: 5px;"/>

2. 鼠标悬浮到文字上，会弹出弹框，展示更加详细的信息

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch_blame2.png" style="border:1px solid #eee; border-radius: 5px;"/>

3. 发邮件

    鼠标悬浮在第一行的名字上，可以查看该行代码的作者邮箱

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch_blame3.png" style="border:1px solid #eee; border-radius: 5px;"/>

    点击它可以给作者发邮件

4. 版本对比

    点击弹框最下方文字，会打开版本对比页面，查看此次提交该文件的具体改动。

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch_blame4.png" style="border:1px solid #eee; border-radius: 5px;"/>

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch_blame5.png" style="border:1px solid #eee; border-radius: 5px;"/>

5. 功能开关

功能开关入口
* window：上方菜单栏->工具->设置->插件配置->Git
* mac：左上角HbuilderX->偏好设置->插件配置->Git

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch_blame6.png" style="border:1px solid #eee; border-radius: 5px;"/>

目前支持三种设置
1. 仅光标所在行显示（默认）

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch_blame7.png" style="border:1px solid #eee; border-radius: 5px;"/>

2. 选中行显示

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch_blame8.png" style="border:1px solid #eee; border-radius: 5px;"/>

3. 不显示（禁用该功能）

<img src="/static/snapshots/tutorial/source_control/git_update/gitextension_branch_blame9.png" style="border:1px solid #eee; border-radius: 5px;"/>
