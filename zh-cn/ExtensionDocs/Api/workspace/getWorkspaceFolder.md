# getWorkspaceFolder

>从HBuilderX 2.7.12及以上版本开始支持

获取某个文件所在的项目

#### 参数说明
|参数名称	|参数类型	|描述					|
|--			|--			|--						|
|uri		|String或Uri|文件绝对路径或者文件Uri|

#### 返回值
|返回类型														|描述					|
|--																|--						|
|Promise&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;|文件所在的项目	|

#### 示例
``` javascript
    var wsPromise = hx.workspace.getWorkspaceFolder("%fsPath%");
    wsPromise.then(function(wsFolder) {
        console.log("文件所在项目：",wsFolder.name);
    });
```

#### WorkspaceFolder
工作空间下的项目目录,在左侧项目管理器内的每一个项目表示一个WorkspaceFolder

**属性列表**

|属性名	|属性类型			|描述			|
|--		|--					|--				|
|uri	|String或[Uri](/ExtensionDocs/Api/other/Uri.md)|项目目录地址	|
|name	|String				|项目目录名称	|
|nature	|String				|项目类型		|
|id		|String				|项目唯一id		|