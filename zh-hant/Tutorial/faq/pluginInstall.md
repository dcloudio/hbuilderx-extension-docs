# HBuilderX插件安裝失敗解決方案

插件安裝失敗，可能有各種各樣的原因。當出現插件安裝失敗，又沒有明確提示相關錯誤時，點擊菜單【幫助】【查看運行日誌】，看下日誌中的錯誤。根據具體錯誤來解決問題

## 問題：npm install執行失敗
---

某些nodejs插件，比如`less`、`eslint-js`插件，插件zip包沒有自帶node_modules。

從插件市場導入此類插件後，HBuilderX會自動安裝node_modules，如果node_modules安裝失敗，會導致插件安裝失敗。

#### 解決方案

以`less`插件爲例：打開HBuilderX安裝目錄，進入`plugins/compile-less`目錄，看下目錄下是否存在`node_modules`。

如果不存在，在終端打開此目錄，手動執行`npm install`

<img src="/static/snapshots/faq/npminstall.png" style="zoom:90%;" />

**擴展**

什麼是`npm`? npm是隨同[NodeJS](https://nodejs.org/en/)一起安裝的包管理工具。HBuilderX已內置`npm`和`node`工具，路徑：HBuilderX安裝目錄，`plugins`目錄下，就可以看到npm。