# Git Blame

HBuilderX 4.0+ 支持 Git Blame 功能，在安装 Git 插件后默认开启，Git插件调用的是`外部Git工具`，因此需要安装[Git](https://git-scm.com/)的命令行工具。

Git Blame 功能提供了便捷的方式，让用户能够快速查看 Git 项目中某一行代码的最后一次提交时间、作者、邮箱以及提交信息，同时还可以进行版本对比。
### 基本用法
光标置于编辑器的某一行，该行最后一次提交的信息将自动显示在该行行尾处。
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame1.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

### Hover 弹窗
当鼠标悬停在文字上时，会弹出浮动视窗，显示更详细的信息。
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame2.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

### 发邮件
当鼠标悬停在第一行的名字上时，可以查看该行代码的作者邮箱，点击它可以给作者发邮件。
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame3.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

### 版本比较
点击浮动视窗最下方的文字，会打开版本对比页面，查看该次提交对文件的具体改动。
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame4.png" style="border:1px solid #eee; border-radius: 5px;"/>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame5.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

### 设置
入口：
* Windows：顶部菜单栏->工具->设置->插件配置->Git
* macOS：左上角 HbuilderX->偏好设置->插件配置->Git

<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame6.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

目前支持三种设置：
1. 仅光标所在行显示（默认）
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame7.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

2. 选中行显示
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame8.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>

3. 不显示（禁用该功能）
<div>
  <img src="https://web-ext-storage.dcloud.net.cn/hx/gitextension_branch_blame9.png" style="border:1px solid #eee; border-radius: 5px;"/>
</div>