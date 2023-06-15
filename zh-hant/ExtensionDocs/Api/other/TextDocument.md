## TextDocument

TextDocument: 文档文件

**属性列表**

|属性名			|属性类型													|描述																							|
|--				|--															|--																								|
|fileName		|String														|文件名称																						|
|isDirty		|Boolean													|是否是修改状态																					|
|isUntitled		|Boolean													| 是否是无标题文件																				|
|lineCount		|Number														|文档总行数																						|
|uri			|[Uri](/ExtensionDocs/Api/other/Uri)						|文档的uri，如果是本地文件，可通过uri.fsPath获取本地文件路径									|
|languageId		|String														|编程语言Id，如'javascript','html'等，完整id列表参见[这里](/ExtensionDocs/Api/other/languageId)	|
|workspaceFolder|[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)|该文档文件所属的项目对象																		|
