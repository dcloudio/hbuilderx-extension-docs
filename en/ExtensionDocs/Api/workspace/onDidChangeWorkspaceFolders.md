# onDidChangeWorkspaceFolders

> Supported from HBuilderX 2.7.10+ version

An event that is emitted when a workspace folder is added or removed.

## Introduce

**Parameter**

|Name	|Type															|Description		|
|--			|--																	|--			|
|listener	|Function([WorkspaceFoldersChangeEvent](#WorkspaceFoldersChangeEvent))	|Event callback for adding or removing items.	|

**Returns**

|Type	|Description				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

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

> An event that is emitted when a workspace folder is added or removed.

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