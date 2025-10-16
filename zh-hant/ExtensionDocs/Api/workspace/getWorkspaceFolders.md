# getWorkspaceFolders

> 從HBuilderX 2.7.12及以上版本開始支持

獲取項目管理器下所有的項目對象（不包含已關閉項目）

#### 參數說明
無

#### 返回值
|返回類型														|描述					|
|--																|--						|
|Promise&lt;Array&lt;[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)&gt;&gt;|項目管理器下所有的項目	|

#### 示例
``` javascript
    var wsPromise = hx.workspace.getWorkspaceFolders();
    wsPromise.then(function(wsFolders) {
        console.log("項目管理器包含的項目數量：",wsFolders.length);
    });
```


#### WorkspaceFolder
工作空間下的項目目錄,在左側項目管理器內的每一個項目表示一個WorkspaceFolder

**屬性列表**

|屬性名	|屬性類型			|描述			|
|--		|--					|--				|
|uri	|String或[Uri](/ExtensionDocs/Api/other/Uri)|項目目錄地址	|
|name	|String				|項目目錄名稱	|
|nature	|String				|項目類型		|
|id		|String				|項目唯一id		|