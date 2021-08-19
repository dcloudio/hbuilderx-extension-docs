# onDidChangeWorkspaceFolders

> 从HBuilderX 2.7.10及以上版本开始支持

项目管理器内的项目新增或者移除时产生的事件

## 介绍

**参数说明**

|参数名称	|参数类型															|描述		|
|--			|--																	|--			|
|listener	|Function([WorkspaceFoldersChangeEvent](#WorkspaceFoldersChangeEvent))	|项目新增或者移除的事件回调	|

**返回值**

|返回类型	|描述				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

**示例**

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

**属性列表**

|属性名	|属性类型											|描述			|
|--		|--													|--				|
|added	| Array&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;	|新增的项目列表	|
|removed| Array&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;	|移除的项目列表	|

**示例**

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