### onDidSaveTextDocument

An event that is emitted when a text document is saved to disk.

#### Parameter

|Name	|Type								|Description		|
|--			|--										|--			|
|listener	|Function([TextDocument](/ExtensionDocs/Api/windows/TextEditor.md#TextDocument))|Event callback	|

#### Returns
|Type	|Description				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|The destroyer of the event callback can place the object in the context.subscriptions array of the extension. When the extension is uninstalled, the event callback will be automatically cancelled.	|

#### Example
``` javascript
    let onDidSaveTextDocumentEventDispose = hx.workspace.onDidSaveTextDocument(function(document){
        //do something with document.
    });
```
