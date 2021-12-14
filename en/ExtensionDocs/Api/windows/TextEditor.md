# TextEditor
Represents an editor that is attached to a document.

## TextEditor

### TextEditor Attribute list
|Attribute name		|Type										|Description						|
|--			|--												|--							|
|document	|[TextDocument](#TextDocument)					|The document associated with this text editor. The document will be the same for the entire lifetime of this text editor.			|
|selection	|[TextSelection](#TextSelection)				|The primary selection on this text editor. Shorthand for TextEditor.selections[0].			|
|selections	|Array&lt;[TextSelection](#TextSelection)&gt;	|The selections in this text editor. The primary selection is always at index 0.	|
|options	|[TextEditorOptions](#TextEditorOptions)		|Text editor options.			|

### edit

> Perform an edit on the document associated with this text editor.

**Parameter**

|Name	|Type									|Description			|
|--			|--											|--				|
|callback		|Function([TextEditorEdit](#TextEditorEdit))	|A function which can create edits using an edit-builder.	|

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

**Example**

``` javascript
    let editorPromise = hx.window.getActiveTextEditor();
    editorPromise.then(function(editor) {
        let selection = editor.selection;
        let document = editor.document;
        let word = document.getText(selection);
        let reversed = word.split('').reverse().join('');
        editor.edit(editBuilder => {
            editBuilder.replace(selection, reversed);
        });
    });
```

### setSelection

> Set the main selection area, the API will clear your selection first, if you want to use multiple channels, please use[addSelection](#addSelection)方法

**Parameter**

|Name	|Type	|Description		|
|--			|--			|--			|
|active		|Number		|Select the side with the cursor, see the figure below|
|anchor		|Number		|Select the side without the cursor, see the figure below	|

<img src="/static/snapshots/Plug-in-development/anchor_active.jpg" style="zoom:50%" />

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

**Example**

``` javascript
let editor = hx.window.getActiveTextEditor();
editor.then((editor)=>{
    editor.setSelection(10,12);
})
```

### addSelection

> Add a new selection area, and a new cursor will be added in the editor after calling.

**Parameter**

|Name	|Type	|Description		|
|--			|--			|--			|
|active		|Number		|Select the side with the cursor, see the figure below|
|anchor		|Number		|Select the side without the cursor, see the figure below	|

<img src="/static/snapshots/Plug-in-development/anchor_active.jpg" style="zoom:50%" />

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|Promise.	|

**Example**

``` javascript
let editorPromise = hx.window.getActiveTextEditor();
editorPromise.then((editor)=>{
    editor.setSelection(10,12).then(()=>{
        editor.addSelection(16,18);
    });
})
```

## TextDocument

> Represents a text document, such as a source file. Text documents have lines and knowledge about an underlying resource like a file.

### Attribute list

|Attribute name			|Type							|Description														|
|--				|--									|--															|
|fileName		|String								|The file system path of the associated resource. 				|
|isDirty		|Boolean							|true if there are unpersisted changes.|
|isUntitled		|Boolean							| Is this document representing an untitled file which has never been saved yet. 											|
|lineCount		|Number								|The number of lines in this document													|
|uri			|[Uri](/ExtensionDocs/Api/other/Uri)						|The associated uri for this document.If it is local file, which can get local file path through uri.fsPath.|
|languageId|String|language Id，for example 'javascript','html' etc, see for complete id list [Here](/ExtensionDocs/Api/other/languageId)									|
|workspaceFolder|[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)|
The project object to which the document file belongs									|

### getText

> Get the text of this document. 

|Name	|Type		|Description													|
|--			|--				|--														|
|range		|[Range](#Range)|[Optional]Include only the text included by the range.	|

**Returns**

|Type	|Description		|
|--			|--			|
|String		|The text inside the provided range or the entire text.	|


### lineAt

> Returns a text line denoted by the line number.

|Name	|Type	|Description			|
|--			|--			|--				|
|lineno		|Number		|A line number in [0, lineCount).	|

**Returns**

|Type						|Description		|
|--										|--			|
| Promise&lt;[TextLine](#TextLine)&gt;	|	A line.	|

### lineFromPosition

> Returns a text line denoted by the position. 

|Name	|Type	|Description		|
|--			|--			|--			|
|pos		|Number		|A position.	|

**Returns**

|Type						|Description		|
|--										|--			|
|Promise&lt;[TextLine](#TextLine)&gt;	|A line.	|


## TextEdit

TextEdit: A text edit represents edits that should be applied to a document.

### TextEdit Attribute list

|Attribute name	|Type			|Description			|
|--		|--					|--				|
|range	|[Range](#Range)	|A range.	|
|newText|String				|A new text edit object.	|

### replace **static**

**Parameter**

|Name	|Type			|Description			|
|--			|--					|--				|
|range		|[Range](#Range)	|A range.	|
|newText	|String				|A string.	|

**Returns**

|Type	|Description	|
|--			|--		|
|[TextEdit](#TextEdit)|	A new text edit object.|

## Range

Range: A range represents an ordered pair of two positions. 

**Attribute list**

|Attribute name	|Type	|Description		|
|--		|--			|--			|
|start	|Number		|The start position. It is before or equal to end.	|
|end	|Number		|The end position. It is after or equal to start.	|

## TextLine

TextLine: Represents a line of text, such as a line of source code.

**Attribute list**

|Attribute name	|Type	|Description						|
|--		|--			|--							|
|start	|Number		|The start position of row. 				|
|end	|Number		|The end position of row without the line separator characters.	|
|text	|String		|The text of this line without the line separator characters.		|
