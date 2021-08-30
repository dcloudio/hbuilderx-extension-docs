# registerCustomEditorProvider
`從HBuilderX 2.9.2及以上版本開始支持`

註冊指定類型的CustomEditorProvider，當用戶打開匹配的文件時，在編輯器區域創建自定義編輯器標籤卡。自定義編輯器使用webview提供視圖顯示。

#### 參數說明

|參數名稱	|參數類型					|描述											|
|--		|--							|--												|
|type	|String	|自定義編輯器類型，需要首先在配置擴展點`customEditors`中聲明。	|
|provider|CustomEditorProvider |用戶自定義CustomEditorProvider|


#### 示例
```javascript
    hx.window.registerCustomEditorProvider("catEdit.catScratch", new CatCustomEditorProvider());
```
