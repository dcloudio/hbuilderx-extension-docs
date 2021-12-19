# How to debug the extension?

> HBuilderX 3.2.11+, supports debugging extensions.

## Start debugging

In the left view, select the extension to be debugged, and click the run icon in the toolbar to open the run debug list.

<img src="/static/snapshots/Plug-in-development/debug/start_debug.png" class="hd-img" />

Click [Debug Extension] to open [Debug View](#DebugView)

## About node-debug extension

HBuilderX extension development relies on the node-debug extension. If the pop-up window prompts to install the [node-debug] extension during debugging, be sure to click install, otherwise the extension cannot be debugged.

<img src="/static/snapshots/Plug-in-development/debug/node-debug.png" class="hd-img" />

## d

打开要调试的文件，在行号上，鼠标右击。

<img src="/static/snapshots/Plug-in-development/debug/add_breakpoint.png" class="hd-img" />

## 调试视图@DebugView

开启调试后，即可在HBuilderX左侧视图，看到调试视图，具体如下：

**调试视图分为5部分：**
- [调试工具栏](#DebugActions)
- 变量窗口 (`复制值`、`复制表达式`、`添加到监视`)
- 监视窗口（包含`添加`/`编辑`/`删除`表达式，以及`复制值`）
- 调用堆栈窗口
- 断点窗口（包含`删除`/`启用`/`禁用`断点）

<img src="/static/snapshots/Plug-in-development/debug/debug_view.png" class="hd-img" />

## 调试操作@DebugActions

<img src="/static/snapshots/Plug-in-development/debug/debug_toolbar.png" class="hd-img" />

- [继续](#Continue) `F8`
- 下一步 `F10`
- 进入 `F11`
- 返回 `Shift+F11`

### 继续@Continue

继续(F8)：点击后，运行直到下一个断点。

<img src="/static/snapshots/Plug-in-development/debug/continue.png" class="hd-img" />

## 数据检查和查看变量

### 添加到监视

在【变量窗口】，选中变量，右键菜单，即可将变量添加到监视窗口。

<img src="/static/snapshots/Plug-in-development/debug/add_to_monitor.png" class="hd-img" />

### 悬停显示

断点调试过程中，将鼠标悬停在要查看的变量上，即可打开悬停窗口。

<img src="/static/snapshots/Plug-in-development/debug/hovering_window.png" class="hd-img" />

