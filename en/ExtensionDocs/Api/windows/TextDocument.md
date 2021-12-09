# TextDocument
Document file opened by the editor

## Attributes List

|Name	|Type																												|Description																																										|
|--							|--																													|--																																															|
|fileName				|String																											|The file system path of the associated resource. 																																											|
|isDirty				|Boolean																										|true if there are unpersisted changes.																																									|
|isUntitled			|Boolean																										|Is this document representing an untitled file which has never been saved yet.																																							|
|lineCount			|Number																											|The number of lines in this document.|
|uri						|[Uri](/ExtensionDocs/Api/other/Uri)												|The associated uri for this document.|
|languageId			|String																											|The identifier of the language associated with this document，for example 'javascript','html' etc，see full id list [Here](/ExtensionDocs/Api/other/languageId)	|
|workspaceFolder|[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)|Which project object the document belongs to																																			|

## getText
Get the text in the specified area

|Name	|Type		|Description													|
|--			|--				|--														|
|range		|[Range](#Range)|[Optional] Text area, if this parameter is not passed, the content of the entire document is obtained	|

**Returns**

|Type	|Description		|
|--			|--			|
|String		|Text string	|


## lineAt
Get the line information of the specified line number

|Name	|Type	|Description			|
|--			|--			|--				|
|lineno		|Number		|Line number, starting from 0	|

**Return Values**

|Type						|Description		|
|--										|--			|
| Promise&lt;[TextLine](#TextLine)&gt;	|Text line objec	|

## lineFromPosition
Get the line where the cursor is based on the cursor position.。

|Name	|Type	|Description		|
|--			|--			|--			|
|pos		|Number		|Cursor Position	|

**Returns**

|Type						|Description		|
|--										|--			|
|Promise&lt;[TextLine](#TextLine)&gt;	|Text line object	|


## Range
Text area

### Attributes List

|Attribute name	|Type	|Description		|
|--		|--			|--			|
|start	|Number		|Start Position	|
|end	|Number		|End Position	|

## TextLine
A line in the document

### Attributes List

|Attribute name	|Type	|Description						|
|--		|--			|--							|
|start	|Number		|Line start position					|
|end	|Number		|The end of the line, not counting line breaks|


## TextEdit
Document editing

### Attributes List

|Name	|Type			|Description			|
|--		|--					|--				|
|range	|[Range](#Range)	|The area to be modified	|
|newText|String		ss		|New content to insert	|

### replace **static**

#### Parameters

|Name	|Type			|Description			|
|--			|--					|--				|
|range		|[Range](#Range)	|The area to be modified	|
|newText	|String				|New content to insert	|

#### Returns

|Type	|Description	|
|--			|--		|
|[TextEdit](#TextEdit)|	Document editing object|
