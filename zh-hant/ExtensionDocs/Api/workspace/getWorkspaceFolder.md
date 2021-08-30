# getWorkspaceFolder

>從HBuilderX 2.7.12及以上版本開始支持

獲取某個文件所在的項目

#### 參數說明
|參數名稱	|參數類型	|描述					|
|--			|--			|--						|
|uri		|String或Uri|文件絕對路徑或者文件Uri|

#### 返回值
|返回類型														|描述					|
|--																|--						|
|Promise&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;|文件所在的項目	|

#### 示例
``` javascript
    var wsPromise = hx.workspace.getWorkspaceFolder("%fsPath%");
    wsPromise.then(function(wsFolder) {
        console.log("文件所在項目：",wsFolder.name);
    });
```

#### WorkspaceFolder
工作空間下的項目目錄,在左側項目管理器內的每一個項目表示一個WorkspaceFolder

**屬性列表**

|屬性名	|屬性類型			|描述			|
|--		|--					|--				|
|uri	|String或[Uri](/ExtensionDocs/Api/other/Uri.md)|項目目錄地址	|
|name	|String				|項目目錄名稱	|
|nature	|String				|項目類型		|
|id		|String				|項目唯一id		|