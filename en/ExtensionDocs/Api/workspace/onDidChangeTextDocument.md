# onDidChangeTextDocument

An event that is emitted when a text document is changed. This usually happens when the contents changes but also when other things like the dirty-state changes.

## Introduce

**Parameter**

|Name	|Type															|Description		|
|--			|--																	|--			|
|listener	|Function([TextDocumentChangeEvent](#TextDocumentChangeEvent))	|Event callback	|

**Returns**

|Type	|Description				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|The destroyer of the event callback can place the object in the context.subscriptions array of the extension. When the extension is uninstalled, the event callback will be automatically cancelled.	|

**Example**
``` javascript
    let onDidChangeTextDocumentEventDispose = hx.workspace.onDidChangeTextDocument(function(event){
        let document = event.document;
        //do something with document.
    });
```

## TextDocumentChangeEvent

An event describing a transactional document change.

**Attribute list**

|Attribute name		|Type						|Description				|
|--			|--								|--					|
|document	|[TextDocument](/ExtensionDocs/Api/windows/TextEditor.md#TextDocument)	|The affected document.	|
