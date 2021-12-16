# getWorkspaceFolder

>Supported from HBuilderX 2.7.12+

Returns the workspace folder that contains a given uri.

#### Parameter
|Name	|Type	|Description					|
|--			|--			|--						|
|uri		|String or Uri|File absolute path or file Uri|

#### Returns
|Type												|Description					|
|--																|--						|
|Promise&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;|The project where the file is located.|

#### Example
``` javascript
    var wsPromise = hx.workspace.getWorkspaceFolder("%fsPath%");
    wsPromise.then(function(wsFolder) {
        console.log("The project where the file is located:",wsFolder.name);
    });
```

#### WorkspaceFolder

The project directory under the workspace, each project in the project manager on the left represents a WorkspaceFolder

**Attribute list**

|Attribute name	|Type			|Description			|
|--		|--					|--				|
|uri	|String or [Uri](/ExtensionDocs/Api/other/Uri.md)|Project directory path	|
|name	|String				|Project Name	|
|nature	|String				|project type		|
|id		|String				|Project unique id	|
