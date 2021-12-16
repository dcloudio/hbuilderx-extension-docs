# onWillSaveTextDocument

An event that is emitted when a text document will be saved to disk.

Note: This event is a synchronous call and will block the UI. In order to avoid blocking the UI for a long time, a timeout mechanism is set and the timeout period is 2s.

> Note that the logic you execute in the event callback should not take too long. If it times out, there will be some unpredictable problems.

## Introduce

**Parameter**

|Name	|Type															|Description		|
|--			|--																	|--			|
|listener	|Function([TextDocumentWillSaveEvent](#TextDocumentWillSaveEvent))	|Event callback	|

**Returns**

|Type	|Description				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|The destroyer of the event callback can place the object in the context.subscriptions array of the extension. When the extension is uninstalled, the event callback will be automatically cancelled.	|

**Example**

``` javascript
    let willSaveTextDocumentEventDispose = hx.workspace.onWillSaveTextDocument(function(event){
        let document = event.document;
        //do something with document.
    });
```

## TextDocumentWillSaveEvent

**Attribute list**

|Attribute name		|Type										|Description						|
|--			|--												|--							|
|document	|[TextDocument](#TextDocument)					|The affected document.			|
