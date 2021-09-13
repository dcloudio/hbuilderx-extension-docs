# applyEdit

create, delete, and rename resources as defined by the given workspace edit. 

The uri of the modified document and the TextEdit operation object to be modified should be set in the WorkspaceEdit object.

## applyEdit介绍

**Parameter**

|Name	|Type									|Description			|
|--			|--											|--				|
|edit		|[WorkspaceEdit](#WorkspaceEdit)	|A workspace edit.	|

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

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
|uri		|String或Uri						|A resource identifier.		|
|edits		|Array&lt;[TextEdit](#TextEdit)&gt;	|An array of text edits.	|

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

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
|range	|[Range](#Range)	|A range.	|
|newText|String				|A string.	|

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

Create a new range from two positions. If start is not before or equal to end, the values will be swapped.

**Attribute list**

|Attribute name	|Type	|Description		|
|--		|--			|--			|
|start	|Number		|A position.	|
|end	|Number		|A position.	|