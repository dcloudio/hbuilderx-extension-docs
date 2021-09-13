# applyEdit

根據指定的WorkspaceEdit對象編輯文檔。WorkspaceEdit對象內要設定被修改文檔的uri和要執行修改的TextEdit操作對象。

## applyEdit介紹

**參數說明**

|參數名稱	|參數類型									|描述			|
|--			|--											|--				|
|edit		|[WorkspaceEdit](#WorkspaceEdit)	|文檔編輯操作	|

**返回值**

|返回類型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

**示例**
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

WorkspaceEdit: 工作空間的一組編輯操作

#### set

**參數說明**

|參數名稱	|參數類型							|描述			|
|--			|--									|--				|
|uri		|String或Uri						|文檔地址		|
|edits		|Array&lt;[TextEdit](#TextEdit)&gt;	|編輯操作數組	|

**返回值**

|返回類型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

**示例**
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

TextEdit: 文檔編輯

#### 屬性列表

|屬性名	|屬性類型			|描述			|
|--		|--					|--				|
|range	|[Range](#Range)	|要修改的區域	|
|newText|String				|要插入的新內容	|

#### replace **static**

**參數說明**

|參數名稱	|參數類型			|描述			|
|--			|--					|--				|
|range		|[Range](#Range)	|要修改的區域	|
|newText	|String				|要插入的新內容	|

**返回值**

|返回類型	|描述	|
|--			|--		|
|[TextEdit](#TextEdit)|	文檔編輯對象|

## Range

Range: 文本區域

**屬性列表**

|屬性名	|屬性類型	|描述		|
|--		|--			|--			|
|start	|Number		|起始位置	|
|end	|Number		|結束位置	|