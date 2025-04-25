# HBuilderX Windows 啓動問題排查指南

## 前言

此帖子爲`windows`解決方案，mac請參考：[mac解決方案](http://hx.dcloud.net.cn/Tutorial/install/macosx?id=啓動問題)
  
`windows`的`zip`包，解壓時間比較長，請勿中斷！  如中斷了解壓，請重新解壓

** Windows HBuilderX起不來，主要有兩種：**

- 新下載的起不來，請參考`第一章`
- 以前可以啓動，後來起不來，應該是配置文件損壞了，請`直接看4.1章節` 


## 1.  重點：新下載的HBuilderX無法啓動
-------------------------------

> 近來，部分小夥伴，反饋在windows系統上，新下載的HBuilderX，解壓後，無法啓動、點擊無反應、啓動報xxx.dll錯誤。

`特別備註：HBuilderX，要求系統最低是win7，不支持xp`

特別說明： 如果您的電腦AMD顯卡，請直接看第6章節

### 1.0 打開方式不對

有的小夥伴，從`DCloud.io`下載zip包，雙擊後，在`壓縮軟件`裏，點擊`HBuilderX.exe`

這種是不對的，`zip包需要解壓才能使用`

<img src="/static/snapshots/tutorial/install_windows/windows_error_open.min.png" style="zoom:80%" />

<img src="/static/snapshots/tutorial/install_windows/install_windows.png" />


### 1.1 快捷方式引發的問題

windows, 部分小夥伴，解壓zip後，爲了創建快捷方式，把`HBuilderX.exe`直接拖動到桌面了，點擊exe啓動不了。

創建`桌面快捷方式`的正確姿勢：

1.  選中`HBuilderX.exe`， 點擊鼠標右鍵，出現菜單
2. 點擊菜單項：`發送到`
3. 點擊`桌面快捷方式`


### 1.2. 問題現象2： 沒有任何反應

- 解壓後，點擊HBuilderX.exe,  沒有任何反應
- 解壓後，點擊HBuilderX.exe, HBuilderX進程啓動，又馬上關閉

**嘗試以下解決方案**

1. 關閉所有的`殺毒軟件`後，啓動試試
2. 使用`超級管理員`啓動試試
3. 按照現象1的方案嘗試一下
4. 在`HBuilderX.exe`上，鼠標右鍵，點擊屬性。如下圖所示操作：

<img src="/static/snapshots/tutorial/install_windows_error/1.png" style="zoom:80%;border: 1px solid #eee;" />

> 備註： 如果此方法，沒有解決您的問題，請看下【事件查看器】中的錯誤。[关于事件查看器，请查看章节3](#EventViewer)

### 1.3 內存不能read

> 如遇到`內存不能read`的問題，請自行百度搜索相關方法


## 2. Qt引發的問題
-------------------------------

> 如果您的電腦安裝過qt程序，可能會遇到下列問題

### 2.1 問題現象1：缺少qt*庫

- 解壓後，點擊HBuilderX.exe,  提示缺少`qt5*.dll`庫
- 解壓後，點擊HBuilderX.exe,  提示`無法定位輸入點xxxxxxx於動態鏈接庫xxx.dll上`

<img src="/static/snapshots/tutorial/install_windows_error/qt_error_1.png" style="border: 1px solid #eee;"/>


** 解決方案**

方法1： 解壓後，進入HBuilderX目錄，進入bin目錄，將bin目錄下，所有`除了api開頭的dll文件`，就是`非api開頭的dll文件`，`剪切`到上一級目錄。注意是`剪切`，不是`複製`。

方法2：進入`HBuilderX`目錄下`bin`目錄，找到彈框裏面提到的`dll`文件，然後拷貝到`System32`或者`SysWOW64`文件夾

方法3：檢查一下本機是否安裝了`qt`，如以前安裝過，進入`環境變量`，將qt相關的環境變量刪除

### 2.2 問題現象2

如下圖：

<img src="/static/snapshots/tutorial/install_windows_error/qt_error_2.png" style="zoom: 80%;border: 1px solid #eee; padding: 10px;"/>

解決方案：檢查一下本機是否安裝了`qt`，如以前安裝過，進入`環境變量`，將qt相關的環境變量刪除

<img src="/static/snapshots/tutorial/install_windows_error/env.png" style="zoom: 80%;border: 1px solid #eee;"/>


## 3. 通過 事件查看器 排查問題@EventViewer
-------------------------------

### 3.1 使用事件查看器

如果以上的方案都沒有解決您的問題，那就需要仔細查找原因了。

某些錯誤，會記錄在【事件查看器】中。

打開事件查看器的方法： 點擊“開始→運行”，輸入eventvwr，點擊“確定”，就可以打開事件查看器。

<img src="/static/snapshots/tutorial/install_windows_error/eventvwr_1.png" style="zoom: 90%;border: 1px solid #eee;"/>

如下圖： 點擊【Windows 日誌】--【應用程序】，找到級別爲`錯誤`的記錄，如是`HBuilderX`的`記錄`，根據`記錄`，解決問題

<img src="/static/snapshots/tutorial/install_windows_error/eventvwr_2.png" style="zoom: 80%; border: 1px solid #eee;"/>

特別說明：如果事件查看器錯誤顯示`unKnow`, 那就下載此 [opengl32sw.dll文件補丁](https://update.dcloud.net.cn/hbuilderx/patch/opengl32sw.dll)，放到HBuilderX根目錄試試

下面羅列，【事件查看器】中可能會遇到的錯誤


### 3.2 顯卡錯誤：ig9icd32.dll錯誤

** 在`事件查看器`中，可能遇到`ig9icd32.dll錯誤`的解決辦法**

<img src="/static/snapshots/tutorial/install_windows_error/eventvwr_3.png" style="zoom: 80%;" />

方法1：升級顯卡驅動

方法2：下載此 [opengl32sw.dll文件補丁](https://update.dcloud.net.cn/hbuilderx/patch/opengl32sw.dll), 下載後，將此`dll`文件，放到HBuilderX安裝目錄的根目錄


### 3.3 顯卡錯誤：dbgcore.dll錯誤

** 在`事件查看器`中，可能遇到`dbgcore.dll錯誤`的解決辦法**

下載補丁文件 [dbgcore.dll下載地址](https://update.dcloud.net.cn/hbuilderx/patch/dbgcore.dll), 下載後，將此`dll`文件，放到HBuilderX安裝目錄的根目錄

> 注意：也有可能是配置文件損壞了。參考4章節。


### 3.4 AMD顯卡錯誤： atioglxx.dll錯誤

如果您的電腦配置了AMD顯卡，如遇到啓動問題（事件查看器atioglxx.dll錯誤），atioglxx.dll是ati顯卡驅動所需要的一個文件。

解決辦法：

1. 開始菜單，搜索【計算機管理】
2. 點擊【設備管理器】--> 【顯示適配器】
3. 如果有兩塊顯卡，且其中一塊爲AMD，選中amd顯卡，右鍵菜單，`禁用`。如果只有一塊AMD顯卡，就別禁用了。

<img src="/static/snapshots/tutorial/install_windows_error/amd.png" />

### 3.5 【設備管理器】顯卡上面出現歎號

部分類型的顯卡，可能因爲

1. 開始菜單，搜索【計算機管理】
2. 點擊【設備管理器】--> 【顯示適配器】
3. 如果上面顯示`歎號`， 更新到最新版本。


### 3.6 更新顯卡驅動後出現問題

如果您更新過`顯卡驅動`， 更新驅動之後，啓動不了。那就是顯卡驅動的問題。請還原顯卡驅動，或升級驅動到最新版、或最新穩定版本。


## 4. 配置文件損壞
--------------

> 還有小夥伴反應，昨天還用的好好的，今天啓動不了，怎麼回事呢？

> 新下載的小夥伴，也有可能遇到這個問題。

有可能是配置文件損壞了，導致無法啓動。

### 4.1 方案1：刪除.lock文件

在操作系統資源管理器地址欄輸入`%appdata%`回車； 在此目錄下，找到HBuilder X目錄，打開。

進入後，如發現存在`.lock`文件，刪除此文件，然後嘗試啓動HBuilderX。

<img src="/static/snapshots/tutorial/install_windows_error/lock.png" />

### 4.2 方案2：重置配置文件目錄

1. 先點擊一下安裝目錄下的`reset.bat`文件
2. 還不行，再嘗試如下方案， 如下圖所示，在地址欄輸入`%appdata%`回車； 在此目錄下，找到HBuilder X目錄，注意：將此目錄隨便重命名一下，也可以刪除掉

<img src="/static/snapshots/tutorial/install_windows_error/appdata.png" style="border: 1px solid #eee;"/>


## 5. win:啓動後，頂部工具欄顯示不全
-----------------

> 部分用戶反饋，啓動後，部分筆記本頂部工具欄顯示不全

原因：在部分筆記本電腦上，因爲分辨率或縮放的原因，HBuilderX啓動頂部菜單顯示不全。

解決方法：

1. 快捷鍵 `alt + 空格 + x`, 最大化HBuilderX
2. 桌面，點擊右鍵菜單【顯示設置】，調整下分辨率和縮放。


## 6. 備註

### 6.1 聯繫方式

如果以上都嘗試了，還未解決，請聯繫官方：

1. Email: ide@dcloud.io
2. QQ: 搜羣，羣關鍵字：HBuilderX ,加入羣后，找羣管理員幫您解決。
3. 去論壇發帖。論壇地址：http://ask.dcloud.net.cn

### 6.2 如何提問？

如果您遇到啓動問題，發郵件、或添加qq尋求幫助時，請您提供下列信息，這樣可以得到更快幫助！

需要提供的信息：

- 操作系統信息，（windows 還是 Mac）
- 是首次下載，無法啓動？還是以前可以打開，現在無法打開？
- windows電腦：如果遇到界面顯示問題，請提供分辨率、縮放。（桌面，右鍵菜單【顯示設置】