# getWorkspaceFolders

> Supported from HBuilderX 2.7.12+

Get all project objects under the project explorer (not including closed projects)

#### Parameter

No

#### Returns
|Type												|Description					|
|--																|--						|
|Promise&lt;Array&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;&gt;|All projects under the project manager	|

#### Example
``` javascript
    var wsPromise = hx.workspace.getWorkspaceFolders();
    wsPromise.then(function(wsFolders) {
        console.log("Number of projects included in the project manager:",wsFolders.length);
    });
```


#### WorkspaceFolder

A workspace folder is one of potentially many roots opened by the editor. All workspace folders are equal which means there is no notion of an active or primary workspace folder.

**Attribute list**

|Attribute name	|Type			|Description			|
|--		|--					|--				|
|uri	|String or [Uri](/ExtensionDocs/Api/other/Uri)|Project Path	|
|name	|String				|Project directory name	|
|nature	|String				|Project Type		|
|id		|String				|Project ID	|
