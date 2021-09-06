#### 如何擴展一個自定義編輯器？

`從HBuilderX 2.9.2及以上版本開始支持`

- 通過 [customEditors](/ExtensionDocs/ContributionPoints/README.md#customEditors) 配置擴展點，聲明需要註冊的自定義編輯器。

```json
//package.json；
//...NOTE：package.json不支持註釋，以下代碼使用時需要將註釋刪掉
    "contributes": {
        "customEditors": [{
            "viewType": "catEdit.catScratch",   // 自定義編輯器類型id
            "displayName": "Cat Scratch",
            "selector": [{
                "fileNamePattern": "*.cscratch" // 文件名匹配模式
            }],
            "priority": "default"
        },
        ...]
    }
```

- 插件代碼繼承CustomEditorProvider等

    HBuilderX使用WebViewPanel來作爲自定義編輯器的視圖，[WebViewPanel](/ExtensionDocs/Api/windows/createWebView?id=webviewpanel)的用法也可以參考[視圖擴展](/ExtensionTutorial/views.md#WebView)中部分示例。
    
```javascript
var hx = require("hbuilderx");

// 引入主要的類
let CustomDocument = hx.CustomEditor.CustomDocument;
let CustomEditorProvider = hx.CustomEditor.CustomEditorProvider;
let CustomDocumentEditEvent = hx.CustomEditor.CustomDocumentEditEvent;

// 繼承CustomDocument
class CatCustomDocument extends CustomDocument {
    constructor(uri) {
        super(uri)
    }
    dispose() {
        super.dispose();
    }
}

// 繼承CustomEditorProvider，實現必要的方法
class CatCustomEditorProvider extends CustomEditorProvider{
    constructor(context){
        super()
    }
    openCustomDocument(uri){
        // 創建CustomDocument
        return Promise.resolve(new CatCustomDocument(uri));
    }
    resolveCustomEditor(document, webViewPanel){
        // 關聯CustomDocument與WebViewPanel
    }
    saveCustomDocument(document) {
        // 保存document
        return true;
    }
    saveCustomDocumentAs(document, destination) {
        // document另存爲至destination
        return true;
    }
}
```

- 在插件激活時通過API：[window.registerCustomEditorProvider](/ExtensionDocs/Api/windows/registerCustomEditorProvider)註冊上面擴展的自定義編輯器

自定義編輯器提供了新的插件激活事件[onCustomEditor](/ExtensionDocs/activation_event.md#onCustomEditor)

```json
// package.json 申明可以激活插件的自定義編輯器類型
"activationEvents": [
    "onCustomEditor:catEdit.catScratch"
]
```

```javascript
// 插件激活入口, 通常是extension.js文件
function activate(context) {
    hx.window.registerCustomEditorProvider("catEdit.catScratch", new CatCustomEditorProvider());
}
```

- 其他

```javascript
// 在合適的位置向HBuilderX發送文檔變動事件，編輯器標籤卡變爲dirty狀態
provider.onDidChangeCustomDocument.fire(new CustomDocumentEditEvent(document));
```