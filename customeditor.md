#### 如何扩展一个自定义编辑器？

`从HBuilderX 2.9.2及以上版本开始支持`

- 通过 [customEditors](/ExtensionDocs/ContributionPoints/README.md#customEditors) 配置扩展点，声明需要注册的自定义编辑器。

``` json
//package.json；
//...NOTE：package.json不支持注释，以下代码使用时需要将注释删掉
    "contributes": {
        "customEditors": [{
			"viewType": "catEdit.catScratch",   // 自定义编辑器类型id
			"displayName": "Cat Scratch",
			"selector": [{
				"fileNamePattern": "*.cscratch" // 文件名匹配模式
			}],
			"priority": "default"
        },
        ...]
    }
```

- 插件代码继承CustomEditorProvider等

    HBuilderX使用WebViewPanel来作为自定义编辑器的视图，[WebViewPanel](/ExtensionDocs/Api/README.md#WebViewPanel)的用法也可以参考[视图扩展](/views.md#WebView)中部分示例。
	
``` javascript
var hx = require("hbuilderx");

// 引入主要的类
let CustomDocument = hx.CustomEditor.CustomDocument;
let CustomEditorProvider = hx.CustomEditor.CustomEditorProvider;
let CustomDocumentEditEvent = hx.CustomEditor.CustomDocumentEditEvent;

// 继承CustomDocument
class CatCustomDocument extends CustomDocument {
    constructor(uri) {
        super(uri)
    }
    dispose() {
        super.dispose();
    }
}

// 继承CustomEditorProvider，实现必要的方法
class CatCustomEditorProvider extends CustomEditorProvider{
    constructor(context){
        super()
    }
    openCustomDocument(uri){
        // 创建CustomDocument
        return Promise.resolve(new CatCustomDocument(uri));
    }
    resolveCustomEditor(document, webViewPanel){
        // 关联CustomDocument与WebViewPanel
    }
    saveCustomDocument(document) {
        // 保存document
        return true;
    }
    saveCustomDocumentAs(document, destination) {
        // document另存为至destination
        return true;
    }
}
```

- 在插件激活时通过API：[window.registerCustomEditorProvider](/ExtensionDocs/Api/README.md#registerCustomEditorProvider)注册上面扩展的自定义编辑器

    自定义编辑器提供了新的插件激活事件[onCustomEditor](/ExtensionDocs/activation_event.md#onCustomEditor)

``` json
    "activationEvents": [
	  "onCustomEditor:catEdit.catScratch"
	],
```

``` javascript
    // 插件激活入口
    function activate(context) {
    hx.window.registerCustomEditorProvider("catEdit.catScratch", new CatCustomEditorProvider());
}
```

- 其他

``` javascript
    // 在合适的位置向HBuilderX发送文档变动事件，编辑器标签卡变为dirty状态
    provider.onDidChangeCustomDocument.fire(new CustomDocumentEditEvent(document));
```