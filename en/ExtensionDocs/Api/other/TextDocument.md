## TextDocument

TextDocument: Document file

**Property List**

|Property Name			|Property Type													|Description																							|
|--				|--															|--																								|
|fileName		|String														|File name																						|
|isDirty		|Boolean													|Whether the document has unsaved changes																					|
|isUntitled		|Boolean													| Whether the document is an untitled file																				|
|lineCount		|Number														|Total number of lines in the document																						|
|uri			|[Uri](/ExtensionDocs/Api/other/Uri)						|Document URI. For local files, you can use uri.fsPath to get the local file path									|
|languageId		|String														|Programming language ID, such as 'javascript', 'html', etc. See [here](/ExtensionDocs/Api/other/languageId) for the complete list	|
|workspaceFolder|[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)|The project object that this document file belongs to																		|
