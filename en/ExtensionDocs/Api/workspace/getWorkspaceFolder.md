# getWorkspaceFolder

>Supported from HBuilderX 2.7.12+ version

Get the project where a file is located.

#### Parameter
|Name	|Type	|Description					|
|--			|--			|--						|
|uri		|String或Uri|文件绝对路径或者文件Uri|

#### Returns
|Type												|Description					|
|--																|--						|
|Promise&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;|文件所在的项目	|

#### Example
``` javascript
    var wsPromise = hx.workspace.getWorkspaceFolder("%fsPath%");
    wsPromise.then(function(wsFolder) {
        console.log("文件所在项目：",wsFolder.name);
    });
```

#### WorkspaceFolder
工作空间下的项目目录,在左侧项目管理器内的每一个项目表示一个WorkspaceFolder

**Attribute list**

|Attribute name	|Type			|Description			|
|--		|--					|--				|
|uri	|String或[Uri](/ExtensionDocs/Api/other/Uri.md)|项目目录地址	|
|name	|String				|项目目录名称	|
|nature	|String				|项目类型		|
|id		|String				|项目唯一id		|