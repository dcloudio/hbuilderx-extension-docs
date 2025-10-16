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
工作空间下的项目目录,在左侧项目管理器内的每一个项目表示一个WorkspaceFolder

**属性列表**

|属性名	|属性类型			|描述			|
|--		|--					|--				|
|uri	|String或[Uri](/ExtensionDocs/Api/other/Uri)|项目目录地址	|
|name	|String				|项目目录名称	|
|nature	|String				|项目类型		|
|id		|String				|项目唯一id		|
