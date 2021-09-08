# copyFileWithPrompt

> Supported from HBuilderX 2.9.12+ version

Copy the specified file or folder to the target folder

#### Parameter

|Name	|Type													|Description			|
|--			|--															|--				|
|options	|[CopyFileWithPromptOptions](#CopyFileWithPromptOptions)    |文件拷贝参数	|

#### Returns

|Type		|Description		|
|--						|--			|
|Promise&lt;String&gt;	|操作结果	|

文件拷贝返回值说明:

|code	|Description									|
|--		|--										|
|-1		|failed								|
|0		|Successful								|
|1		|Operation canceled								|


#### Example
``` javascript
 let result = hx.workspace.copyFileWithPrompt({
     src:hx.Uri.file('D:/test01'),
     dest:hx.Uri.file('E:/test01'),
     rootPromptTips:'目标文件已存在',
     filePromptTips:'目标文件已存在',
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

> 文件拷贝配置

**Attribute list**

|Attribute name		|Type	|Description						|
|--			|--			|--							|
|src		|[Uri](/ExtensionDocs/Api/other/Uri)		|拷贝文件源地址，地址是绝对路径|
|dest		|[Uri](/ExtensionDocs/Api/other/Uri)	|拷贝文件目标地址，地址是绝对路径并且是目录|
|rootPromptTips	|String		|目标文件一级目录存在时提示语|
|filePromptTips	|String |目标文件一级目录下文件存在时提示语 |
|filter	|Function([Uri](/ExtensionDocs/Api/other/Uri)) | 当前正在操作的文件回调 |
|errorHandler	|Function([Uri](/ExtensionDocs/Api/other/Uri))	|操作错误的文件回调, 返回0 取消操作  返回 1  重试  返回 2 跳过 |