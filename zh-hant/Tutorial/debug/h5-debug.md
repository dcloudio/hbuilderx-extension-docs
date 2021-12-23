# uni-app H5 Chrome调试@h5-debug

> HBuilderX 3.3.3+版本，uni-app 运行h5，支持Chrome调试

## 简介@introduction

- 目前，uni-app 仅支持运行到`chrome`、`内置浏览器`进行调试。支持uni-app和uni-app cli项目。
- 调试需要本机安装chrome浏览器
- 调试支持的文件类型：`vue`文件、`nvue`文件、`ts`文件、`js`文件，请勿在vue文件template、style节点添加断点。

<img src="/static/snapshots/app/h5-debug/overview.png" class="hd-img" />

## 开启调试@start-debug

项目管理器，选中任意uni-app项目，运行到Chrome。控制台右上角，点击红色的debug图标，即可打开调试。如下图：

<img src="/static/snapshots/app/h5-debug/open-debug.png" class="hd-img" />

uni-app H5调试，依赖`chrome-debug`插件，弹窗提示安装【node-debug】插件，请务必点击安装，否则无法调试插件。如下图：

<img src="/static/snapshots/app/h5-debug/install-chrome-debug.png" class="hd-img" />

## 添加/删除断点@add-breakpoint

打开要调试的文件，在行号上，鼠标右击。

<img src="/static/snapshots/app/h5-debug/add_breakpoint.png" class="hd-img" />

备注：调试支持的文件类型：`vue`文件、`nvue`文件、`ts`文件、`js`文件，请勿在vue文件template节点添加断点。

## 调试视图@DebugView

开启调试后，即可在HBuilderX左侧视图，看到调试视图，具体如下：

**调试视图分为5部分：**
- [调试工具栏](#DebugActions)
- 变量窗口 (`复制值`、`复制表达式`、`添加到监视`)
- 监视窗口（包含`添加`/`编辑`/`删除`表达式，以及`复制值`）
- 调用堆栈窗口
- 断点窗口（包含`删除`/`启用`/`禁用`断点）

<img src="/static/snapshots/app/h5-debug/debug_view.png" class="hd-img" />

## 调试操作@DebugActions

<img src="/static/snapshots/app/h5-debug/debug_toolbar.png" class="hd-img" />

- [继续](#Continue) `F8`
- 下一步 `F10`
- 进入 `F11`
- 返回 `Shift+F11`

### 继续@Continue

继续(F8)：点击后，运行直到下一个断点。

<img src="/static/snapshots/app/h5-debug/continue.png" class="hd-img" />

## 数据检查和查看变量@data

### 添加到监视@add-to-watch

在【变量窗口】，选中变量，右键菜单，即可将变量添加到监视窗口。

<img src="/static/snapshots/app/h5-debug/add_to_monitor.png" class="hd-img" />

### 悬停显示@hover

断点调试过程中，将鼠标悬停在要查看的变量上，即可打开悬停窗口。

<img src="/static/snapshots/app/h5-debug/hovering_window.png" class="hd-img" />
