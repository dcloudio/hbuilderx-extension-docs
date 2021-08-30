# Vue支持

HBuilderX中使用vue，如果是打開vue文件，會自動掛載vue語法庫。
如果是HTML文件裏引用vue框架，需要點右下角的語法提示庫，選擇vue語法庫。
我們更推薦開發者使用vue單文件規範，直接打開vue文件。

> 注意：如果文件不在項目下，而是單獨的文件，無法掛載語法庫，請在左側項目管理器建個項目，打開項目裏的文件進行體驗。

## 語法高亮

除了vue的普通語法高亮支持，HBuilderX還支持各種表達式語法，以及script和style支持的其他語言如less、scss、stylus、typescript等高亮，無需安裝插件。


## 代碼提示

### API提示及幫助

提示不止是要全，而且要準。不能把所有詞都猜一遍列出來，該有什麼就有什麼，清晰可信賴。
既要寫的快，又要寫不錯。

除了完善的提示，在代碼助手右側還能看到清晰的幫助描述，對api進行說明，還有vue官網的api鏈接，點擊即可直達vue官網指定頁面。非常適合學習參考。

<img src="/static/snapshots/vue/1.png" style="zoom: 80%;border: 1px solid #eee;" />

### this的精準識別

<img src="/static/snapshots/vue/this.png" style="zoom: 70%;border: 1px solid #eee;" />

### 語法提示

<img src="/static/snapshots/vue/hint_1.png" style="zoom: 60%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/hint_2.png" style="zoom: 80%;border: 1px solid #eee;" />

### 指令提示

<img src="/static/snapshots/vue/hint_3.png" style="zoom: 80%;border: 1px solid #eee;" />

### 自定義組件提示

HBuilderX的組件語法提示比其他工具都要強大，組件的標籤、屬性都可以直接被提示出來。

<img src="/static/snapshots/vue/hint_4.png" style="zoom: 50%;border: 1px solid #eee;" />

### doc

HBuilderX支持強大的vue doc，是vue組件開發者的利器，通過類jsdoc的寫法，可讓你的組件實現全面的代碼提示和幫助。

詳見[vue-doc詳情](/Tutorial/Language/vuedoc)

<img src="/static/snapshots/vue/hint_5.png" style="zoom: 50%;border: 1px solid #eee;" />

### 兼容vscode vetur插件中的vue規範

一些vue的組件庫，已經按照vetur規範製作語法提示庫，比如Element UI、Onsen UI、Bootstrap Vue等框架。

這些框架npm安裝或在HBuilderX新建模板中選擇安裝，可以直接實現代碼提示。如下圖

<img src="/static/snapshots/vue/hint_6.png" style="zoom: 50%;border: 1px solid #eee;" />

### 常用代碼塊/自定義代碼塊

敲v，在拉出的代碼助手列表裏可以看到大量vue代碼塊。

你也可以在工具-代碼塊設置-vue代碼塊裏自己添加更多代碼塊。

<img src="/static/snapshots/vue/hint_7.gif" style="zoom: 50%;border: 1px solid #eee;" />

### vue router

支持提示$router、$route 所有實例方法、屬性

<img src="/static/snapshots/vue/vue_router_1.png" style="zoom: 80%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/vue_router_2.png" style="zoom: 80%;border: 1px solid #eee;" />

### vuex

支持提示State、Mutation、action等，並支持轉到定義

<img src="/static/snapshots/vue/vuex_1.png" style="zoom: 80%;border: 1px solid #eee;" />

<img src="/static/snapshots/vue/vuex_2.gif" style="zoom: 80%;border: 1px solid #eee;" />


### 其他

另外其他開發工具常見的emmet、d.ts，HBuilderX也均良好支持。

## 幫助文檔

光標放到api處，按下F1，可直接在右側打開對應的幫助文檔，不用切屏，邊看文檔邊改代碼，見下圖：

<img src="/static/snapshots/vue/help_doc.gif" style="zoom: 60%;border: 1px solid #eee;" />

## 轉到定義

按下alt+鼠標單擊，即可對各種變量、樣式、方法的引用溯源，在template、script、style中來回跳轉。非常強大而靈活。

按下ctrl+alt+單擊，還可在旁邊以分欄方式打開定義處，方便並排查看。

<img src="/static/snapshots/vue/goto.gif" style="zoom: 60%;border: 1px solid #eee;" />

## 重構或選擇相同語法詞

如果你想看某個變量在哪裏被引用，或者選中所有變量進行改名，那麼點右鍵->選擇相同變量（ctrl+shift+e）。

如下圖可見，“list”在文中出現很多相同單詞，但只有那幾個準確的變量被選中：

<img src="/static/snapshots/vue/select.png" style="zoom: 50%;border: 1px solid #eee;" />

詳情參考：[https://ask.dcloud.net.cn/article/35732](https://ask.dcloud.net.cn/article/35732)

## 語法校驗

首先需要在插件管理中安裝eslint-plugin-vue，然後點工具-驗證本文檔語法，或在vue文檔保存時也會自動驗證。

插件的管理設置如配置快捷鍵、是否在保存時自動觸發，在設置-插件設置-eslint-plugin-vue裏的插件配置裏，詳見[eslint-vue配置](/Tutorial/extension/eslint-vue)

<img src="/static/snapshots/vue/check.gif" style="zoom: 80%;border: 1px solid #eee;" />

## 大綱

選擇視圖菜單-顯示文檔結構圖，或右鍵菜單裏選擇，即可在左側出現大綱。點擊左側即可快讀跳轉右側。

<img src="/static/snapshots/vue/outline.jpeg" style="zoom: 50%;border: 1px solid #eee;" />

## 免命令行使用vue

如果你不喜歡配置複雜的node環境，這並不影響你快速進入vue世界。

HBuilderX內置了終端插件和node環境。

在新建界面，可以可視化新建vue項目，而不需要配cli。

<img src="/static/snapshots/vue/project_create.png" style="zoom: 40%;border: 1px solid #eee;" />

在運行菜單裏，可以可視化的運行和build。

<img src="/static/snapshots/vue/project_run.png" style="zoom: 80%;border: 1px solid #eee;" />

在引入插件時也無需安裝node模塊，uni-app插件市場可以可視化的導入插件（僅適用於uni-app），詳見[uni-app插件市場](https://ext.dcloud.net.cn/)
