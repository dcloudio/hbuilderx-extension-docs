# copyFileWithPrompt

> Supported from HBuilderX 2.9.12+ 

Copy the specified file or folder to the target folder

#### Parameter

|Name	|Type													|Description			|
|--			|--															|--				|
|options	|[CopyFileWithPromptOptions](#CopyFileWithPromptOptions)    |File copy parameters	|

#### Returns

|Type		|Description		|
|--						|--			|
|Promise&lt;String&gt;	|Result (failed or successful or cancelled)	|

Returns:

|code	|Description									|
|--		|--										|
|-1		|Failed								|
|0		|Successful								|
|1		|Operation cancelled								|


#### Example
``` javascript
 let result = hx.workspace.copyFileWithPrompt({
     src:hx.Uri.file('D:/test01'),
     dest:hx.Uri.file('E:/test01'),
     rootPromptTips:'Target file already exists',
     filePromptTips:'Target file already exists',
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

> File copy configuration

**Attribute list**

|Attribute name		|Type	|Description						|
|--			|--			|--							|
|src		|[Uri](/ExtensionDocs/Api/other/Uri)		|The source address of the copied file, the address is an absolute path|
|dest		|[Uri](/ExtensionDocs/Api/other/Uri)	|The destination address of the copied file, the address is an absolute path and a directory|
|rootPromptTips	|String		|Root directory prompt|
|filePromptTips	|String |Target file prompt |
|filter	|Function([Uri](/ExtensionDocs/Api/other/Uri)) | Callback uri |
|errorHandler	|Function([Uri](/ExtensionDocs/Api/other/Uri))	|Error callback handler, 0: cancel, 1: retry, 2: skip |
