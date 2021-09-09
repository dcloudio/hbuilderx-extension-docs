# applyEdit

根据指定的WorkspaceEdit对象编辑文档。WorkspaceEdit对象内要设定被修改文档的uri和要执行修改的TextEdit操作对象。

## applyEdit介绍

**Parameter**

|Name	|Type									|Description			|
|--			|--											|--				|
|edit		|[WorkspaceEdit](#WorkspaceEdit)	|文档编辑操作	|

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

WorkspaceEdit: 工作空间的一组编辑操作

#### set

**Parameter**

|Name	|Type							|Description			|
|--			|--									|--				|
|uri		|String或Uri						|文档地址		|
|edits		|Array&lt;[TextEdit](#TextEdit)&gt;	|编辑操作数组	|

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

TextEdit: 文档编辑

#### Attribute list

|Attribute name	|Type			|Description			|
|--		|--					|--				|
|range	|[Range](#Range)	|要修改的区域	|
|newText|String				|要插入的新内容	|

#### replace **static**

**Parameter**

|Name	|Type			|Description			|
|--			|--					|--				|
|range		|[Range](#Range)	|要修改的区域	|
|newText	|String				|要插入的新内容	|

**Returns**

|Type	|Description	|
|--			|--		|
|[TextEdit](#TextEdit)|	文档编辑对象|

## Range

Range: 文本区域

**Attribute list**

|Attribute name	|Type	|Description		|
|--		|--			|--			|
|start	|Number		|起始位置	|
|end	|Number		|结束位置	|