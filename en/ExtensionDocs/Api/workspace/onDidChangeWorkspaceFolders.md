# onDidChangeWorkspaceFolders

> Supported from HBuilderX 2.7.10+ version

An event that is emitted when a workspace folder is added or removed.

## Introduce

**Parameter**

|Name	|Type															|Description		|
|--			|--																	|--			|
|listener	|Function([WorkspaceFoldersChangeEvent](#WorkspaceFoldersChangeEvent))	|项目新增或者移除的事件回调	|

**Returns**

|Type	|Description				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

**Example**

``` javascript
    let wsFoldersChangeDisplose = hx.workspace.onDidChangeWorkspaceFolders(function(event){
        if(event.added){
            event.added.forEach(item=>console.log("新增了项目:",item.name));
        }
        if(event.removed){
            event.removed.forEach(item=>console.log("移除了项目:",item.name));
        }
    });
```

## WorkspaceFoldersChangeEvent

> 项目管理器中新增或者移除项目时产生的事件类型

**Attribute list**

|Attribute name	|Type											|Description			|
|--		|--													|--				|
|added	| Array&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;	|新增的项目列表	|
|removed| Array&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;	|移除的项目列表	|

**Example**

``` javascript
    let wsFoldersChangeDisplose = hx.workspace.onDidChangeWorkspaceFolders(function(event){
        if(event.added){
            event.added.forEach(item=>console.log("新增了项目:",item.name));
        }
        if(event.removed){
            event.removed.forEach(item=>console.log("移除了项目:",item.name));
        }
    });
```