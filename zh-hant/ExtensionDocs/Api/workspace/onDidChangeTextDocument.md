# onDidChangeTextDocument

文檔被修改時的事件

## 介紹

**參數說明**

|參數名稱	|參數類型															|描述		|
|--			|--																	|--			|
|listener	|Function([TextDocumentChangeEvent](#TextDocumentChangeEvent))	|事件回調	|

**返回值**

|返回類型	|描述				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|該事件回調的銷燬器，可將該對象放置到插件的context.subscriptions數組內，插件卸載時，將會自動註銷該`事件回調`	|

**示例**
``` javascript
    let onDidChangeTextDocumentEventDispose = hx.workspace.onDidChangeTextDocument(function(event){
        let document = event.document;
        //do something with document.
    });
```

## TextDocumentChangeEvent
文檔被修改時的事件

**屬性列表**

|屬性名		|屬性類型						|描述				|
|--			|--								|--					|
|document	|[TextDocument](/ExtensionDocs/Api/windows/TextEditor.md#TextDocument)	|該事件關聯的文檔	|