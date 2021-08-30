>  HX是輕量編輯器和強大IDE的完美結合體。敏捷的性能，清爽的界面，強大的功能和於一身。

**本文檔面向入門用戶，建議初學者仔細研讀。**


#### 1. 介紹

1. 執着於更快一步的理念，hx的`左側項目管理器`是`單擊`響應而`不是雙擊`。
2. `單擊`展開目錄，`單擊`預覽文件，`雙擊`打開文件。
3. 預覽文件時頂部標籤卡是`斜體`的，此時繼續預覽其他文件會替換預覽標籤卡。`雙擊`文件後標籤卡爲正體，不會被替換。預覽的文件一旦開始編輯，也會自動變爲正式打開狀態。

<img src="/static/snapshots/started_tutorial/overview.png" style="zoom: 90%;"/>

4. 項目管理器默認是不顯示圖標的，可以將鼠標移到項目管理器區域，右上角會懸浮菜單，在裏面可以選擇顯示圖標。HBuilderX支持業內多種圖標插件，可以在工具-插件安裝中找到更多圖標插件。
5. hx的文件保存是免丟失的，並且有熱退出功能。所謂熱退出，就是關閉hx時不要保存文件。再次打開時仍然是之前的狀態。未保存的文件也會繼續原樣展現。
6. hx默認帶有每`30秒`保存一次臨時文件的策略（可以在設置裏調節時間間隔）
7. 不管是關閉hx，還是斷電、崩潰，臨時文件始終會自動保存。
8. 前端預編譯型語言越來越多，每次保存都觸發編譯比較消耗資源，有了hx，可以專注寫代碼而不需要隔一會按一下ctrl+s，需要編譯時再保存，或編輯多個文件後按ctrl+alt+s全部保存。

#### 2. 語法提示

擁有自研的世界級語法分析引擎一直是HBuilder系列產品傲視業內的資本。
但前端框架衆多，框架的語法提示需要加載單獨的語法提示庫。

框架語法提示庫是在頁面的右下角選擇。

<img src="/static/snapshots/started_tutorial/select-syntax-hints.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

**注意**：

1. 框架語法庫是掛在項目下的，一個項目加載了一個框架語法庫後，這個項目下所有js文件或HTML文件都會在代碼助手提示這個框架的語法。
2. 但如果一個文件是單獨從硬盤打開，沒有整項目拖入hx，那麼此時無法加載框架語法庫。

#### 3. 代碼助手


hx的代碼助手，可以按`alt+數字`選擇直接選擇某個項目，類似中文輸入法數字選詞 

<img src="/static/snapshots/started_tutorial/code-help.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

#### 4. 語法幫助


光標放到某api處，按下`F1`，就可跳轉到這個api的官方手冊。目前支持vue、uni-app、5+等api 

> 此功能僅適用於2.5.7以下版本，2.5.7.20200116-alpha+版本，按F1查看幫助文檔，改爲打開外部瀏覽器，避免對邊改邊看造成影響

<img src="/static/snapshots/started_tutorial/code-help-doc.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


#### 5. 編輯器與項目管理器的同步


hx默認是打開的標籤卡和項目管理器自動關聯，切換標籤卡時項目管理器也會跟隨變化，如不需要此功能，可以將鼠標移到項目管理器區域，右上角會懸浮菜單，在裏面可以取消“與編輯器同步”。

<img src="/static/snapshots/started_tutorial/sync.jpg" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

一般多項目時建議取消同步功能。

取消同步後，如需手動定位標籤卡所在的項目，可以對編輯器點右鍵-“在項目管理器中定位”。

<img src="/static/snapshots/started_tutorial/project-manager-position.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


#### 6. 多光標


hx支持多光標，按 `ctrl+鼠標左鍵` 就可增加一個光標，`ctrl+鼠標右鍵` 可取消一個光標或選區。

<img src="/static/snapshots/started_tutorial/more-cursor.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

還可以選擇相同詞。`ctrl+e` (mac是`cmd+d`)可選中相同的詞做批處理。

<img src="/static/snapshots/started_tutorial/select-same-word.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

多光標是極客必備工具，高級技巧請參考：[光標選擇](/Tutorial/UserGuide/selection)



#### 7. 列選擇


hx的列選擇，是`alt+鼠標拖選`。或者用快捷鍵`ctrl+alt+↑`或`↓`。

<img src="/static/snapshots/started_tutorial/select-column.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 8. 選擇編碼、着色高亮


當你打開一個不認識的文檔時，即hx的無法高亮着色，可以在右下角選擇使用其他編輯器打開。

當你打開一個文件編碼錯亂，產生亂碼時，也可以在右下角選擇編碼重新打開。

<img src="/static/snapshots/started_tutorial/select-encoding.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


#### 9. 轉到定義


轉到定義是非常常用的功能，普通編輯器不長於此，只能猜單詞跳轉。

HBuilderX有強大的語法分析引擎，可以準確的跳轉定義位置。

轉到定義的快捷鍵是`Alt+d`，鼠標操作是alt+左鍵單擊（注意不是ctrl，因爲ctrl留給了多光標）

<img src="/static/snapshots/started_tutorial/3b6a921a9021ffa5ed54e7633afb7fd0.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

而HBuilderX還有一個特色是`轉到定義到分欄`，`ctrl+alt+左鍵`，可以把一個定義處的代碼打開在另一側，方便共同查看

<img src="/static/snapshots/started_tutorial/c75ed6bdd5b6c5a9b8c827b2ee1262a9.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


**如何回到上一個光標位置？**

在HBuilderX中，`Alt+Left`或點擊工具欄上的`<`, 即可回到上一個光標位置。


備註：支持切換【Ctrl+鼠標左鍵】或【Alt+鼠標左鍵】進行轉到定義 （菜單【選擇】，最後一個菜單）。

<img src="/static/snapshots/started_tutorial/f20f178f0559eebc71106d00c7b4117a.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />
 
#### 10. 文件快速打開


在頂部工具欄直接搜索工程下的文件名並打開，或者使用快捷鍵`ctrl+p`。

<img src="/static/snapshots/started_tutorial/file_quick_open.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


比較常用的文件，可以在工具欄裏添加到收藏夾。

<img src="/static/snapshots/started_tutorial/add-to-favorites.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

`ctrl+p`也是標籤卡管理的重要工具，屏幕窄看不清左右打開的標籤時，可以用它來瀏覽所有以打開的標籤



#### 11. 目錄內搜索


項目管理器點右鍵，選：查找字符串(當前目錄)，可在該目錄下所有文件中搜索字符串

<img src="/static/snapshots/started_tutorial/search-dir.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 12. 縮進調整


hx默認使用`tab`縮進，`tab`長度爲4個空格。

如果你需要調整縮進長度，比如`tab`長度爲2個空格，在工具設置-編輯器中調整。

<img src="/static/snapshots/started_tutorial/ident.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

如果不喜歡使用tab而喜歡使用空格，也可以在設置中調。注意這個調節只是編輯器裏敲tab按鍵時轉爲了空格，格式化時仍是tab。

調節格式化設置，參考菜單工具-插件配置。hx支持幾種格式化插件，他們都有自己的配置定義文件，請按插件配置中的說明修改設置。

<img src="/static/snapshots/started_tutorial/plugins-code-format.jpg" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


比如格式化插件Formator-Prettier，它的配置文件爲：【工具】【插件配置】【formator-frettier】【formator.config.js】

<img src="/static/snapshots/started_tutorial/plugins-setting.jpg" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

在菜單編輯-縮進中，可文件的縮進從`tab`轉`空格`或從`空格`轉`tab`。



#### 13. 語法校驗


hx的語法校驗都是插件，在工具插件安裝中選擇各種校驗插件，不同語言的校驗插件不一樣。安裝校驗插件後，保存文件時會自動執行語法校驗。

[語法校驗插件詳細介紹](/Tutorial/UserGuide/SyntaxCheck)


校驗概要結果會顯示在狀態欄，比如有2個錯誤（如下圖），可以按`F4`切換到不同的錯誤處，畫有紅波浪線（如下圖），鼠標移到紅波浪線上會顯示具體的錯誤信息。

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-01.png" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />


你也可以不保存，直接點菜單工具-驗證本文檔校驗語法 來進行校驗。

<img src="/static/snapshots/started_tutorial/plugins-syntax-check-02.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



#### 15. svn/git項目導入


以git爲例：（git項目：需要安裝git插件、以及TortoiseGit、並配置ssh祕鑰）

<img src="/static/snapshots/started_tutorial/project-svn-git-import.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

|插件名稱	|Mac操作系統	|Windows操作系統	|
|--	|--	|--	|
|svn	|[Mac SVN教程](https://ask.dcloud.net.cn/article/35252)	|[Windows SVN教程](https://ask.dcloud.net.cn/article/35246)	|
|git	|[Mac Git教程](https://ask.dcloud.net.cn/article/35248)	|[Windows Git教程](https://ask.dcloud.net.cn/article/35247)	|


#### 15. 預編譯器(less/sass)


在【菜單】-->【插件安裝】裏有各種語言的預編譯器，比如less、ts等。安裝預編譯器後，hx下的所有項目均可用共用。

**sass示例：**  
> 預編譯器安裝後使用入口在外部命令菜單中


<img src="/static/snapshots/started_tutorial/plugins-precompiler.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

**sass/less插件配置小技巧：**

less、sass可以在插件配置裏，配置爲保存文件時自動編譯。
> 安裝less或sass插件後，進入菜單【工具】【插件配置】【compile-less】,點擊package.json文件，將onDidSaveExecution修改爲true。注意修改後需要重啓HBuilderX才能生效

```Json
{
  "onDidSaveExecution": true
}
```