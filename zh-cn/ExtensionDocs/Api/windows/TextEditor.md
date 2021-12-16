# TextEditor - 文本编辑器对象 @TextEditor
------

TextEditor：文本编辑器对象，为API [hx.window.getActiveTextEditor()](/ExtensionDocs/Api/windows/getActiveTextEditor) 返回值的详细说明文档。


## TextEditor

### TextEditor属性列表
|属性名		|属性类型										|描述						|
|--			|--												|--							|
|document	|[TextDocument](#TextDocument)					|该编辑器关联的文档			|
|selection	|[TextSelection](#TextSelection)				|当前光标选中的位置			|
|selections	|Array&lt;[TextSelection](#TextSelection)&gt;	|当前多光标选中的位置集合	|
|options	|[TextEditorOptions](#TextEditorOptions)		|该编辑器的设置项			|

### edit

> 修改当前编辑器打开的文档

**参数说明**

|参数名称	|参数类型									|描述			|
|--			|--											|--				|
|callback		|Function([TextEditorEdit](#TextEditorEdit))	|文档编辑操作回调	|

**返回值**

|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

**示例**

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

**参数说明**

|参数名称	|参数类型	|描述		|
|--			|--			|--			|
|active		|Number		|选择区域中带光标的一侧，详情见下图|
|anchor		|Number		|选择区域中不带光标的一侧，详情见下图	|

<img src="/static/snapshots/Plug-in-development/anchor_active.jpg" style="zoom:50%" />

**返回值**

|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

**示例**

``` javascript
let editor = hx.window.getActiveTextEditor();
editor.then((editor)=>{
    editor.setSelection(10,12);
})
```

### addSelection

> 增加新的选择区域，调用后会在编辑器内追加一个新一个光标。

**参数说明**

|参数名称	|参数类型	|描述		|
|--			|--			|--			|
|active		|Number		|选择区域中带光标的一侧，详情见下图|
|anchor		|Number		|选择区域中不带光标的一侧，详情见下图	|

<img src="/static/snapshots/Plug-in-development/anchor_active.jpg" style="zoom:50%" />

**返回值**

|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

**示例**

``` javascript
let editorPromise = hx.window.getActiveTextEditor();
editorPromise.then((editor)=>{
    editor.setSelection(10,12).then(()=>{
        editor.addSelection(16,18);
    });
})
```

## TextDocument
----- 
> 编辑器打开的文档文件

### 属性列表

|属性名			|属性类型							|描述														|
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

|参数名称	|参数类型		|描述													|
|--			|--				|--														|
|range		|[Range](#Range)|[可选]文本区域，如果不传该参数，则获取整个文档的内容	|

**返回值**

|返回类型	|描述		|
|--			|--			|
|String		|文本字符串	|

**示例**
```js
let activeEditor = hx.window.getActiveTextEditor();
activeEditor.then(function(editor) {
  // 获取指定区域内的文本
  let text = editor.document.getText({
    start: 3755, 
    end: 3802
  });
  console.log(text);
});
```

### lineAt

> 获取指定行号的行信息

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|lineno		|Number		|行号，从0开始	|

**返回值**

|返回类型								|描述		|
|--										|--			|
| Promise&lt;[TextLine](#TextLine)&gt;	|文本行对象	|

**示例**
```js
let activeEditor = hx.window.getActiveTextEditor();
activeEditor.then(function(editor) {
  // 行号是从0开始
  let linePromise = editor.document.lineAt(2);
  linePromise.then((line)=>{
    console.log("TextLine is:", line.text);
  });
});
```

### lineFromPosition

> 根据光标位置获取光标所在行。

|参数名称	|参数类型	|描述		|
|--			|--			|--			|
|pos		|Number		|光标位置	|

**返回值**

|返回类型								|描述		|
|--										|--			|
|Promise&lt;[TextLine](#TextLine)&gt;	|文本行对象	|

**示例**
```js
let activeEditor = hx.window.getActiveTextEditor();
activeEditor.then(function(editor) {
    let linePromise = editor.document.lineFromPosition(editor.selection.active);
    linePromise.then((line)=>{
        console.log("Line info:", line.text, "开始位置：", line.start, "结束位置：", line.end);
    });
});
```

## TextEdit
----- 
TextEdit: 文档编辑

### TextEdit 属性列表

|属性名	|属性类型			|描述			|
|--		|--					|--				|
|range	|[Range](#Range)	|要修改的区域	|
|newText|String				|要插入的新内容	|

### replace **static**

**参数说明**

|参数名称	|参数类型			|描述			|
|--			|--					|--				|
|range		|[Range](#Range)	|要修改的区域	|
|newText	|String				|要插入的新内容	|

**返回值**

|返回类型	|描述	|
|--			|--		|
|[TextEdit](#TextEdit)|	文档编辑对象|

## Range

Range: 文本区域

**属性列表**

|属性名	|属性类型	|描述		|
|--		|--			|--			|
|start	|Number		|起始位置	|
|end	|Number		|结束位置	|

## TextLine

TextLine: 文档中的某一行， 为[editor.document.lineAt](/ExtensionDocs/Api/windows/TextEditor?id=lineat)、[editor.document.lineFromPosition](/ExtensionDocs/Api/windows/TextEditor?id=linefromposition) 返回值。

**属性列表**

|属性名	|属性类型	|描述						|
|--		|--			|--							|
|start	|Number		|行起始位置					|
|end	|Number		|行结束位置，不计算换行符	|
|text	|String		|行内容，不包含换行符		|