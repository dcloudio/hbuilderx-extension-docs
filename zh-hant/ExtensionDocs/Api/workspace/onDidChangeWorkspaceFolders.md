# onDidChangeWorkspaceFolders

> 從HBuilderX 2.7.10及以上版本開始支持

項目管理器內的項目新增或者移除時產生的事件

## 介紹

**參數說明**

|參數名稱	|參數類型															|描述		|
|--			|--																	|--			|
|listener	|Function([WorkspaceFoldersChangeEvent](#WorkspaceFoldersChangeEvent))	|項目新增或者移除的事件回調	|

**返回值**

|返回類型	|描述				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|該事件回調的銷燬器，可將該對象放置到插件的context.subscriptions數組內，插件卸載時，將會自動註銷該`事件回調`	|

**示例**

``` javascript
    let wsFoldersChangeDisplose = hx.workspace.onDidChangeWorkspaceFolders(function(event){
        if(event.added){
            event.added.forEach(item=>console.log("新增了項目:",item.name));
        }
        if(event.removed){
            event.removed.forEach(item=>console.log("移除了項目:",item.name));
        }
    });
```

## WorkspaceFoldersChangeEvent

> 項目管理器中新增或者移除項目時產生的事件類型

**屬性列表**

|屬性名	|屬性類型											|描述			|
|--		|--													|--				|
|added	| Array&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;	|新增的項目列表	|
|removed| Array&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;	|移除的項目列表	|

**示例**

``` javascript
    let wsFoldersChangeDisplose = hx.workspace.onDidChangeWorkspaceFolders(function(event){
        if(event.added){
            event.added.forEach(item=>console.log("新增了項目:",item.name));
        }
        if(event.removed){
            event.removed.forEach(item=>console.log("移除了項目:",item.name));
        }
    });
```