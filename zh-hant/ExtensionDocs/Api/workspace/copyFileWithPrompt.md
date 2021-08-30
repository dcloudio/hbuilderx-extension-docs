# copyFileWithPrompt

> 從HBuilderX 2.9.12及以上版本開始支持

將指定文件或文件夾拷貝到目標文件夾下

#### 參數說明

|參數名稱	|參數類型													|描述			|
|--			|--															|--				|
|options	|[CopyFileWithPromptOptions](#CopyFileWithPromptOptions)    |文件拷貝參數	|

#### 返回值

|返回類型				|描述		|
|--						|--			|
|Promise&lt;String&gt;	|操作結果	|

文件拷貝返回值說明:

|code	|描述									|
|--		|--										|
|-1		|操作失敗								|
|0		|操作成功								|
|1		|操作取消								|


#### 示例
``` javascript
 let result = hx.workspace.copyFileWithPrompt({
     src:hx.Uri.file('D:/test01'),
     dest:hx.Uri.file('E:/test01'),
     rootPromptTips:'目標文件已存在',
     filePromptTips:'目標文件已存在',
     filter:function(params){
 	    console.log(params)
 		return 0;
     },
     errorHandler:function(err){
 		console.log(err)
 		return 0;
     }
 });
 result.then((data)=>{
 });
```

#### CopyFileWithPromptOptions

> 文件拷貝配置

**屬性列表**

|屬性名		|屬性類型	|描述						|
|--			|--			|--							|
|src		|[Uri](/ExtensionDocs/Api/other/Uri)		|拷貝文件源地址，地址是絕對路徑|
|dest		|[Uri](/ExtensionDocs/Api/other/Uri)	|拷貝文件目標地址，地址是絕對路徑並且是目錄|
|rootPromptTips	|String		|目標文件一級目錄存在時提示語|
|filePromptTips	|String |目標文件一級目錄下文件存在時提示語 |
|filter	|Function([Uri](/ExtensionDocs/Api/other/Uri)) | 當前正在操作的文件回調 |
|errorHandler	|Function([Uri](/ExtensionDocs/Api/other/Uri))	|操作錯誤的文件回調, 返回0 取消操作  返回 1  重試  返回 2 跳過 |