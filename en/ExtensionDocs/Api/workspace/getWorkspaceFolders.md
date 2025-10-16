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

输出结果示例：

```json
{
   appid: '__UNI__XXXXX',
   id: '{1de3edba-85fc-42d0-87bb-5b03f1f4900d}',
   metatype: 'WorkspaceFolder',
   name: 'project1',
   nature: 'UniApp_Vue',
   uri: {
     authority: '',
     fragment: '',
     fsPath: '/Users/apple/Documents/HBuilderProjects/project1',
     metatype: 'Uri',
     path: '/Users/apple/Documents/HBuilderProjects/project1',
     query: '',
     scheme: 'file'
   },
   vueVersion: '3'
 }
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
