# applyEdit

Make changes to one or many resources or create, delete, and rename resources as defined by the given workspace edit.

All changes of a workspace edit are applied in the same order in which they have been added. If multiple textual inserts are made at the same position, these strings appear in the resulting text in the order the 'inserts' were made, unless that are interleaved with resource edits. Invalid sequences like 'delete file a' -> 'insert text in file a' cause failure of the operation.

When applying a workspace edit that consists only of text edits an 'all-or-nothing'-strategy is used. A workspace edit with resource creations or deletions aborts the operation, e.g. consecutive edits will not be attempted, when a single edit fails.

## Introduce

**Parameter**

|Name	|Type									|Description			|
|--			|--											|--				|
|edit		|[WorkspaceEdit](#WorkspaceEdit)	|A workspace edit.	|

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|	|

**Example**
``` javascript
    let editorPromise = hx.window.getActiveTextEditor();
    editorPromise.then((editor)=>{
        let workspaceEdit = new hx.WorkspaceEdit();
        let edits = [];
        edits.push(new hx.TextEdit({
            start: 0,
            end: 0
        }, "foo"));
        
        workspaceEdit.set(editor.document.uri,edits);
        hx.workspace.applyEdit(workspaceEdit);
    });
```


## WorkspaceEdit

A workspace edit is a collection of textual and files changes for multiple resources and documents.

Use the applyEdit-function to apply a workspace edit.

#### set

**Parameter**

|Name	|Type							|Description			|
|--			|--									|--				|
|uri		|String or Uri						|		|
|edits		|Array&lt;[TextEdit](#TextEdit)&gt;	|An array of text edits.	|

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|	|

**Example**
``` javascript
    let workspaceEdit = new hx.WorkspaceEdit();
    let edits = [];
    edits.push(new hx.TextEdit({
        start: 0,
        end: 0
    }, "foo"));
    workspaceEdit.set(doc.uri, edits);
    hx.workspace.applyEdit(workspaceEdit);
```

## TextEdit

#### Attribute list

|Attribute name	|Type			|Description			|
|--		|--					|--				|
|range	|[Range](#Range)	|The range this edit applies to.	|
|newText|String				|The string this edit will insert.|

#### replace **static**

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

A range represents an ordered pair of two positions. It is guaranteed that start.isBeforeOrEqual(end)

**Attribute list**

|Attribute name	|Type	|Description		|
|--		|--			|--			|
|start	|Number		|The start position. It is before or equal to end.	|
|end	|Number		|The end position. It is after or equal to start.	|
