# onDidOpenTextDocument

> 從HBuilderX 2.7.6及以上版本開始支持

文檔打開時的事件

#### 參數說明

|參數名稱	|參數類型								|描述		|
|--			|--										|--			|
|listener	|Function([TextDocument](/ExtensionDocs/Api/windows/TextEditor.md#TextDocument))|事件回調	|

#### 返回值
|返回類型	|描述				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|該事件回調的銷燬器，可將該對象放置到插件的context.subscriptions數組內，插件卸載時，將會自動註銷該`事件回調`	|

#### 示例
``` javascript
    let onDidOpenTextDocumentEventDispose = hx.workspace.onDidOpenTextDocument(function(document){
        //do something with document.
    });
    context.subscriptions.push(onDidOpenTextDocumentEventDispose);
```
