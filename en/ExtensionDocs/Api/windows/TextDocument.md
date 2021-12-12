# TextDocument
Represents a text document, such as a source file. Text documents have lines and knowledge about an underlying resource like a file.

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
Get the text of this document.

|Name	|Type		|Description													|
|--			|--				|--														|
|range		|[Range](#Range)|[Optional] Include only the text included by the range.	|

**Returns**

|Type	|Description		|
|--			|--			|
|String		|The text inside the provided range or the entire text.	|


## lineAt
Returns a text line denoted by the line number. 

|Name	|Type	|Description			|
|--			|--			|--				|
|lineno		|Number		|A line number in [0, lineCount).	|

**Returns**

|Type						|Description		|
|--										|--			|
| Promise&lt;[TextLine](#TextLine)&gt;	|A line|

## lineFromPosition
Returns a text line denoted by the position.

|Name	|Type	|Description		|
|--			|--			|--			|
|pos		|Number		|A position	|

**Returns**

|Type						|Description		|
|--										|--			|
|Promise&lt;[TextLine](#TextLine)&gt;	|A line	|


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
