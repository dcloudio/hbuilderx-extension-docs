# onDidChangeTextDocument

An event that is emitted when a text document is changed.

## Introduce

**Parameter**

|Name	|Type															|Description		|
|--			|--																	|--			|
|listener	|Function([TextDocumentChangeEvent](#TextDocumentChangeEvent))	|事件回调	|

**Returns**

|Type	|Description				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

**Example**
``` javascript
    let onDidChangeTextDocumentEventDispose = hx.workspace.onDidChangeTextDocument(function(event){
        let document = event.document;
        //do something with document.
    });
```

## TextDocumentChangeEvent
文档被修改时的事件

**Attribute list**

|Attribute name		|Type						|Description				|
|--			|--								|--					|
|document	|[TextDocument](/ExtensionDocs/Api/windows/TextEditor.md#TextDocument)	|该事件关联的文档	|