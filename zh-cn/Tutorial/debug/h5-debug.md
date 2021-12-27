# uni-app H5 Chrome調試@h5-debug

> HBuilderX 3.3.4+版本，uni-app 運行h5，支持Chrome調試

## 簡介@introduction

- 目前，uni-app 僅支持運行到`chrome`、`內置瀏覽器`進行調試。支持uni-app和uni-app cli項目。
- 調試需要本機安裝chrome瀏覽器
- 調試支持的文件類型：`vue`文件、`nvue`文件、`ts`文件、`js`文件，請勿在vue文件template、style節點添加斷點。

<img src="/static/snapshots/app/h5-debug/overview.png" class="hd-img" />

## 開啓調試@start-debug

項目管理器，選中任意uni-app項目，運行到Chrome。控制檯右上角，點擊紅色的debug圖標，即可打開調試。如下圖：

<img src="/static/snapshots/app/h5-debug/open-debug.png" class="hd-img" />

uni-app H5調試，依賴`chrome-debug`插件，彈窗提示安裝【node-debug】插件，請務必點擊安裝，否則無法調試插件。如下圖：

<img src="/static/snapshots/app/h5-debug/install-chrome-debug.png" class="hd-img" />

## 添加/刪除斷點@add-breakpoint

打開要調試的文件，在行號上，鼠標右擊。

<img src="/static/snapshots/app/h5-debug/add_breakpoint.png" class="hd-img" />

備註：調試支持的文件類型：`vue`文件、`nvue`文件、`ts`文件、`js`文件，請勿在vue文件template節點添加斷點。

## 調試視圖@DebugView

開啓調試後，即可在HBuilderX左側視圖，看到調試視圖，具體如下：

**調試視圖分爲5部分：**
- [調試工具欄](#DebugActions)
- 變量窗口 (`複製值`、`複製表達式`、`添加到監視`)
- 監視窗口（包含`添加`/`編輯`/`刪除`表達式，以及`複製值`）
- 調用堆棧窗口
- 斷點窗口（包含`刪除`/`啓用`/`禁用`斷點）

<img src="/static/snapshots/app/h5-debug/debug_view.png" class="hd-img" />

## 調試操作@DebugActions

<img src="/static/snapshots/app/h5-debug/debug_toolbar.png" class="hd-img" />

- [繼續](#Continue) `F8`
- 下一步 `F10`
- 進入 `F11`
- 返回 `Shift+F11`

### 繼續@Continue

繼續(F8)：點擊後，運行直到下一個斷點。

<img src="/static/snapshots/app/h5-debug/continue.png" class="hd-img" />

## 數據檢查和查看變量@data

### 添加到監視@add-to-watch

在【變量窗口】，選中變量，右鍵菜單，即可將變量添加到監視窗口。

<img src="/static/snapshots/app/h5-debug/add_to_monitor.png" class="hd-img" />

### 懸停顯示@hover

斷點調試過程中，將鼠標懸停在要查看的變量上，即可打開懸停窗口。

<img src="/static/snapshots/app/h5-debug/hovering_window.png" class="hd-img" />
