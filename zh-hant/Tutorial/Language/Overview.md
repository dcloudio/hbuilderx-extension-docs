> HBuilderX的代碼提示系統很龐大，支持多種語法提示模型。

## 內置語法庫
- web項目有內置的html、js、css語法庫
- App項目有內置的plus擴展語法庫
- uni-app項目有內置的uni-app語法庫
- 微信小程序、快應用等項目也有對應的內置語法庫

## js框架語法庫（sdocml格式）

HBuilderX中，在可以輸入js的文件，比如js、html等文件裏，（不含vue、ts），底部狀態欄有“語法提示庫”，可以加載內置的框架語法庫。

<img src="/static/snapshots/tutorial/lang_1.png" />

其中node.js也是作爲一種框架語法而存在的。
勾選相應js框架語法後，js區域即可提示相應語法（初次勾選需要延時幾秒後才能使用）

該選擇是項目級的，一旦勾選後，整個項目下可以寫js的地方都會加載。
如果文件是單獨打開，沒有在HBuilderX左側的項目管理器中，則無法使用本功能。

如果HBuilderX能檢測到項目下有jquery或mui等常用框架，也會自動給這個項目掛載語法提示庫。但有時可能檢測不準，需要開發者手動引入。

## d.ts

很多框架都內置了d.ts語法提示庫。HBuilderX完整支持d.ts的語法提示。
如果項目下有某個框架的d.ts文件，HBuilderX則可以提示這個框架的語法提示。

## jsdoc+
jsdoc是以註釋方式聲明方法、參數、屬性，HBuilderX提供了經過擴展的jsdoc+，可實現強大的語法提示，詳見：[https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129)

<img src="/static/snapshots/tutorial/lang_2.png" style="zoom:50%;" />

## vue doc
vue組件開發者，如果想給組件使用者提供更好的使用方式，應該給組件寫vue doc。
vue doc是一種類似jsdoc的方式，通過在註釋裏描述組件的方法、參數、屬性。

詳見：[vue doc](https://hx.dcloud.net.cn/Tutorial/Language/vuedoc)

## 兼容vscode vetur插件中的vue規範

一些vue的組件庫，已經按照vetur規範製作語法提示庫，比如Element UI、Onsen UI、Bootstrap Vue等框架。
這些框架npm安裝是在node_module下會自帶一個json語法庫，或在HBuilderX新建模板中選擇element ui模板安裝也會包含該庫。有了這個語法庫，就可以直接代碼提示。如下圖

<img src="/static/snapshots/tutorial/lang_3.png" style="zoom:50%;"/>

## 代碼塊

HBuilderX支持自定義代碼塊，在菜單工具-代碼塊設置中可自行擴展。
代碼塊數據格式兼容vscode，並擴展了更多豐富設置。對於提高開發效率幫助很大。

<a href="/Tutorial/Language/Snippets">自定義代碼塊教程</a>