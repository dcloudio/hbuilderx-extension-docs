### onDidSaveTextDocument

文档被保存时的事件

#### Parameter

|Name	|Type								|Description		|
|--			|--										|--			|
|listener	|Function([TextDocument](/ExtensionDocs/Api/windows/TextEditor.md#TextDocument))|事件回调	|

#### Returns
|Type	|Description				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

#### Example
``` javascript
    let onDidSaveTextDocumentEventDispose = hx.workspace.onDidSaveTextDocument(function(document){
        //do something with document.
    });
```