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

Output result example:

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

The project directory under the workspace, each project in the project manager on the left represents a WorkspaceFolder

**Attribute list**

|Attribute name	|Type			|Description			|
|--		|--					|--				|
|uri	|String or [Uri](/ExtensionDocs/Api/other/Uri.md)|Project directory path	|
|name	|String				|Project Name	|
|nature	|String				|project type		|
|id		|String				|Project unique id	|
