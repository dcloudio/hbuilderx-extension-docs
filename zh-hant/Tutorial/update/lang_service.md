# HBuilderX 語言服務重大調整

- 語言服務由Java調整為Node
- App打包，Java按需調用，不再常駐後臺。

### 語言服務說明

**改進：**
- 更好的支持typescript（獨立typescript項目、vue中typescript）
- 更完善的支持d.ts（d.ts解析、types自動下載），更好的支持node_modules的代碼提示等相關功能
- 完善（vue標籤、easycom組件、css、less、scss、ts）的Hover支持
- JS支持自動導包
- JS import {}.. from '|'或require('|')時自動提示已安裝的npm模塊名
- JS完善對象解構支持（代碼提示、轉到定義、Hover）
- emmet支持代碼提示預覽
- uniapp-cli項目按照對應的uniapp版本進行代碼提示
- 修復easycom組件某些情況下提示不及時的問題
- API可轉到定義到對應的d.ts
- uni-app manifest.json 源碼視圖 支持代碼提示
- HBuilderX 設置 settings.json 源碼視圖 支持代碼提示

**調整：**
- 語法庫數據源換成了vscode的數據源
- HTML下的script僅提示和轉到定義當前文件引用的js內定義的變量和函數，不再提示項目下所有全局的變量和函數
- 【全提示】代碼提示時不再提示項目下的所有API列表