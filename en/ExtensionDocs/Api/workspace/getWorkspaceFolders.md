# getWorkspaceFolders

> Supported from HBuilderX 2.7.12+ version

Get all project objects under the project explorer (not including closed projects)

#### Parameter

No

#### Returns
|Type												|Description					|
|--																|--						|
|Promise&lt;Array&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;&gt;|项目管理器下所有的项目	|

#### Example
``` javascript
    var wsPromise = hx.workspace.getWorkspaceFolders();
    wsPromise.then(function(wsFolders) {
        console.log("项目管理器包含的项目数量：",wsFolders.length);
    });
```


#### WorkspaceFolder

The project directory under the workspace, each project in the project manager on the left represents a WorkspaceFolder

**Attribute list**

|Attribute name	|Type			|Description			|
|--		|--					|--				|
|uri	|String或[Uri](/ExtensionDocs/Api/other/Uri)|Project Path	|
|name	|String				|Project directory name	|
|nature	|String				|Project Type		|
|id		|String				|Project ID	|