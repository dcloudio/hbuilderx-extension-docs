# onDidChangeTextDocument

文档被修改时的事件

## 介绍

**参数说明**

|参数名称	|参数类型															|描述		|
|--			|--																	|--			|
|listener	|Function([TextDocumentChangeEvent](#TextDocumentChangeEvent))	|事件回调	|

**返回值**

|返回类型	|描述				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

**示例**
``` javascript
    let onDidChangeTextDocumentEventDispose = hx.workspace.onDidChangeTextDocument(function(event){
        let document = event.document;
        //do something with document.
    });
```

## TextDocumentChangeEvent
文档被修改时的事件

**属性列表**

|属性名		|属性类型						|描述				|
|--			|--								|--					|
|document	|[TextDocument](/ExtensionDocs/Api/windows/TextEditor.md#TextDocument)	|该事件关联的文档	|