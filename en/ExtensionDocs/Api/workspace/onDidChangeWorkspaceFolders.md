# onDidChangeWorkspaceFolders

> Supported from HBuilderX 2.7.10+

An event that is emitted when a workspace folder is added or removed.

## Introduce

**Parameter**

|Name	|Type															|Description		|
|--			|--																	|--			|
|listener	|Function([WorkspaceFoldersChangeEvent](#WorkspaceFoldersChangeEvent))	|Event callback for adding or removing items.	|

**Returns**

|Type	|Description				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|The destroyer of the event callback can place the object in the context.subscriptions array of the extension. When the extension is uninstalled, the event callback will be automatically cancelled.	|

**Example**

``` javascript
    let wsFoldersChangeDisplose = hx.workspace.onDidChangeWorkspaceFolders(function(event){
        if(event.added){
            event.added.forEach(item=>console.log("Added item:",item.name));
        }
        if(event.removed){
            event.removed.forEach(item=>console.log("Items removed:",item.name));
        }
    });
```

## WorkspaceFoldersChangeEvent

> An event describing a change to the set of workspace folders.

**Attribute list**

|Attribute name	|Type											|Description			|
|--		|--													|--				|
|added	| Array&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;	|Added workspace folders.|
|removed| Array&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;	|Removed workspace folders.	|

**Example**

``` javascript
let wsFoldersChangeDisplose = hx.workspace.onDidChangeWorkspaceFolders(function(event){
    if(event.added){
        event.added.forEach(item=>console.log("Added item:",item.name));
    }
    if(event.removed){
        event.removed.forEach(item=>console.log("Items removed:",item.name));
    }
});
```
