# 如何調試插件？

> HBuilderX 3.2.11+, 支持調試插件。

## 開啓調試

左側視圖，選中要調試的插件，點擊工具欄運行圖標，即可打開運行調試列表。

<img src="/static/snapshots/Plug-in-development/debug/start_debug.png" class="hd-img" />

點擊【調試插件】，即可打開[調試視圖](#DebugView)

## 關於node-debug插件

HBuilderX插件開發依賴node-debug插件，如果調試時，彈窗提示安裝【node-debug】插件，請務必點擊安裝，否則無法調試插件。

<img src="/static/snapshots/Plug-in-development/debug/node-debug.png" class="hd-img" />

## 添加/刪除斷點

打開要調試的文件，在行號上，鼠標右擊。

<img src="/static/snapshots/Plug-in-development/debug/add_breakpoint.png" class="hd-img" />

## 調試視圖@DebugView

開啓調試後，即可在HBuilderX左側視圖，看到調試視圖，具體如下：

**調試視圖分爲5部分：**
- [調試工具欄](#DebugActions)
- 變量窗口 (`複製值`、`複製表達式`、`添加到監視`)
- 監視窗口（包含`添加`/`編輯`/`刪除`表達式，以及`複製值`）
- 調用堆棧窗口
- 斷點窗口（包含`刪除`/`啓用`/`禁用`斷點）

<img src="/static/snapshots/Plug-in-development/debug/debug_view.png" class="hd-img" />

## 調試操作@DebugActions

<img src="/static/snapshots/Plug-in-development/debug/debug_toolbar.png" class="hd-img" />

- [繼續](#Continue) `F8`
- 下一步 `F10`
- 進入 `F11`
- 返回 `Shift+F11`

### 繼續@Continue

繼續(F8)：點擊後，運行直到下一個斷點。

<img src="/static/snapshots/Plug-in-development/debug/continue.png" class="hd-img" />

## 數據檢查和查看變量

### 添加到監視

在【變量窗口】，選中變量，右鍵菜單，即可將變量添加到監視窗口。

<img src="/static/snapshots/Plug-in-development/debug/add_to_monitor.png" class="hd-img" />

### 懸停顯示

斷點調試過程中，將鼠標懸停在要查看的變量上，即可打開懸停窗口。

<img src="/static/snapshots/Plug-in-development/debug/hovering_window.png" class="hd-img" />

