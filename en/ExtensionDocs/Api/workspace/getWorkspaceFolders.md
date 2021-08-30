# getWorkspaceFolders

> 从HBuilderX 2.7.12及以上版本开始支持

获取项目管理器下所有的项目对象（不包含已关闭项目）

#### 参数说明
无

#### 返回值
|返回类型														|描述					|
|--																|--						|
|Promise&lt;Array&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;&gt;|项目管理器下所有的项目	|

#### 示例
``` javascript
    var wsPromise = hx.workspace.getWorkspaceFolders();
    wsPromise.then(function(wsFolders) {
        console.log("项目管理器包含的项目数量：",wsFolders.length);
    });
```


#### WorkspaceFolder
工作空间下的项目目录,在左侧项目管理器内的每一个项目表示一个WorkspaceFolder

**属性列表**

|属性名	|属性类型			|描述			|
|--		|--					|--				|
|uri	|String或[Uri](/ExtensionDocs/Api/other/Uri)|项目目录地址	|
|name	|String				|项目目录名称	|
|nature	|String				|项目类型		|
|id		|String				|项目唯一id		|