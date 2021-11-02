# TextEditor
文本编辑器对象

## TextEditor

### TextEditor Attribute list
|Attribute name		|Type										|Description						|
|--			|--												|--							|
|document	|[TextDocument](#TextDocument)					|该编辑器关联的文档			|
|selection	|[TextSelection](#TextSelection)				|当前光标选中的位置			|
|selections	|Array&lt;[TextSelection](#TextSelection)&gt;	|当前多光标选中的位置集合	|
|options	|[TextEditorOptions](#TextEditorOptions)		|该编辑器的设置项			|

### edit

> 修改当前编辑器打开的文档

**Parameter**

|Name	|Type									|Description			|
|--			|--											|--				|
|callback		|Function([TextEditorEdit](#TextEditorEdit))	|文档编辑操作回调	|

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

> 设置主选择区域，该API会首先清除原来的光标选择，如果要使用多光标，请使用[addSelection](#addSelection)方法

**Parameter**

|Name	|Type	|Description		|
|--			|--			|--			|
|active		|Number		|选择区域中带光标的一侧，详情见下图|
|anchor		|Number		|选择区域中不带光标的一侧，详情见下图	|

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

> 增加新的选择区域，调用后会在编辑器内追加一个新一个光标。

**Parameter**

|Name	|Type	|Description		|
|--			|--			|--			|
|active		|Number		|选择区域中带光标的一侧，详情见下图|
|anchor		|Number		|选择区域中不带光标的一侧，详情见下图	|

<img src="/static/snapshots/Plug-in-development/anchor_active.jpg" style="zoom:50%" />

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

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

> 编辑器打开的文档文件

### Attribute list

|Attribute name			|Type							|Description														|
|--				|--									|--															|
|fileName		|String								|文件名称													|
|isDirty		|Boolean							|是否是修改状态												|
|isUntitled		|Boolean							| 是否是无标题文件											|
|lineCount		|Number								|文档总行数													|
|uri			|[Uri](/ExtensionDocs/Api/other/Uri)						|文档的uri，如果是本地文件，可通过uri.fsPath获取本地文件路径|
|languageId|String|编程语言Id，如'javascript','html'等，完整id列表参见[这里](/ExtensionDocs/Api/other/languageId)									|
|workspaceFolder|[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)|该文档文件所属的项目对象									|

### getText

> 获取指定区域内的文本

|Name	|Type		|Description													|
|--			|--				|--														|
|range		|[Range](#Range)|[可选]文本区域，如果不传该参数，则获取整个文档的内容	|

**Returns**

|Type	|Description		|
|--			|--			|
|String		|文本字符串	|


### lineAt

> 获取指定行号的行信息

|Name	|Type	|Description			|
|--			|--			|--				|
|lineno		|Number		|行号，从0开始	|

**Returns**

|Type						|Description		|
|--										|--			|
| Promise&lt;[TextLine](#TextLine)&gt;	|文本行对象	|

### lineFromPosition

> 根据光标位置获取光标所在行。

|Name	|Type	|Description		|
|--			|--			|--			|
|pos		|Number		|光标位置	|

**Returns**

|Type						|Description		|
|--										|--			|
|Promise&lt;[TextLine](#TextLine)&gt;	|文本行对象	|


## TextEdit

TextEdit: 文档编辑

### TextEdit Attribute list

|Attribute name	|Type			|Description			|
|--		|--					|--				|
|range	|[Range](#Range)	|要修改的区域	|
|newText|String				|要插入的新内容	|

### replace **static**

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

## TextLine

TextLine: 文档中的某一行

**Attribute list**

|Attribute name	|Type	|Description						|
|--		|--			|--							|
|start	|Number		|行起始位置					|
|end	|Number		|行结束位置，不计算换行符	|
|text	|String		|行内容，不包含换行符		|