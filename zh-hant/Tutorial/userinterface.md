### 用戶界面@userinterface

像許多其他代碼編輯器一樣，HBuilderX採用通用的用戶界面和左側的資源管理器佈局，而右側的編輯器則顯示已打開文件的內容。 

<img src="/static/snapshots/tutorial/HBuilderX.png" style="zoom:90%" />

### 基本佈局@basic-layout

用戶界面主要分爲：

* 編輯器 - 編輯文件的主要區域。您可以在垂直和水平方向上並排打開任意數量的編輯器。
* 項目管理器 - 包含諸如資源管理器之類的不同視圖，可在您處理項目時爲您提供幫助。
* 工具欄
* 狀態欄 - 有關打開的項目和您編輯的文件的信息。
* 控制檯 - 您可以在編輯器區域下方顯示不同的面板，以獲取輸出或調試信息，錯誤和警告或集成終端。面板也可以向右移動以獲得更多垂直空間。

每次啓動HBuilderX時，它的打開狀態與上次關閉時的狀態相同。

### 迷你地圖@minimap

`迷你地圖`，爲您提供了源代碼的高級概述，這對於快速導航和理解代碼很有用。

迷你地圖, 顯示在編輯器的右側。您可以單擊或拖動陰影區域以快速跳至文件的不同部分。

<img src="/static/snapshots/tutorial/minimap.png" style="zoom:90%" />

提示：
- 您可以在編輯器最右側，點擊右鍵，關閉或打開迷你地圖。
- 【設置】【編輯器設置】，也可以調整迷你地圖像素寬度，默認100

### 文檔結構圖@outline

左邊的大綱是長文檔導航的利器。HBuilderX提供了優雅簡潔的文檔導覽界面。

可以點底欄左側紅框內的大綱按鈕，對應的快捷鍵是【win：alt+w、mac：ctrl+w】

<img src="/static/snapshots/tutorial/outline.png" style="zoom:90%" />

### 內置資源管理器@Built-in-Explorer

> 此處只是簡單介紹下內置資源管理器，請查看[詳細用法](Tutorial/UserGuide/built-in-explorer)

傳統開發工具，僅僅依靠左側的項目樹來管理資源文件，便利性和效率是遠遠不夠的。
HBuilderX內置的資源管理器，給你一個更大的資源管理界面，大幅提高文件的管理效率。

相比OS自帶的資源管理器，HBuilderX資源管理器爲編程文件提供專門的優化。

- 在大圖預覽界面下直接顯示html標題、vue頁面、組件的名字
- 直接預覽markdown的內容
- 在列表詳情界面擴充單獨的列來顯示svn/git狀態

<img src="/static/snapshots/tutorial/explorer/explorer.gif" style="zoom:98%" />

### 編輯器佈局@editor-layout

HBuilderX，默認情況下，編輯器組以垂直列布局。

當然，您也可以輕鬆按自己喜歡的任何佈局在垂直和水平方向上排列編輯器。

菜單 “視圖 -> 分欄”，有一組預定義的編輯器佈局。

<img src="/static/snapshots/tutorial/subfield.png" style="zoom:98%" />

### 單窗體@single-window

單窗體： 就是項目管理器，只顯示一個項目。

在主窗體上，點擊菜單【視圖】【新建HBuilder窗體】，就可以新建一個單項目窗體。

在主窗體上，選中某個項目，右鍵菜單，點擊【在新窗體中打開】，即可將項目在單項目窗體中打開

[關於單窗體的詳細說明與介紹](/Tutorial/UserGuide/multi-window)