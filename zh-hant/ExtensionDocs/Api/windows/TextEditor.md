# TextEditor
文本編輯器對象

## TextEditor

### TextEditor屬性列表
|屬性名		|屬性類型										|描述						|
|--			|--												|--							|
|document	|[TextDocument](#TextDocument)					|該編輯器關聯的文檔			|
|selection	|[TextSelection](#TextSelection)				|當前光標選中的位置			|
|selections	|Array&lt;[TextSelection](#TextSelection)&gt;	|當前多光標選中的位置集合	|
|options	|[TextEditorOptions](#TextEditorOptions)		|該編輯器的設置項			|

### edit

> 修改當前編輯器打開的文檔

**參數說明**

|參數名稱	|參數類型									|描述			|
|--			|--											|--				|
|callback		|Function([TextEditorEdit](#TextEditorEdit))	|文檔編輯操作回調	|

**返回值**

|返回類型	|描述	|
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

> 設置主選擇區域，該API會首先清除原來的光標選擇，如果要使用多光標，請使用[addSelection](#addSelection)方法

**參數說明**

|參數名稱	|參數類型	|描述		|
|--			|--			|--			|
|active		|Number		|選擇區域中帶光標的一側，詳情見下圖|
|anchor		|Number		|選擇區域中不帶光標的一側，詳情見下圖	|

<img src="/static/snapshots/Plug-in-development/anchor_active.jpg" style="zoom:50%" />

**返回值**

|返回類型	|描述	|
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

> 增加新的選擇區域，調用後會在編輯器內追加一個新一個光標。

**參數說明**

|參數名稱	|參數類型	|描述		|
|--			|--			|--			|
|active		|Number		|選擇區域中帶光標的一側，詳情見下圖|
|anchor		|Number		|選擇區域中不帶光標的一側，詳情見下圖	|

<img src="/static/snapshots/Plug-in-development/anchor_active.jpg" style="zoom:50%" />

**返回值**

|返回類型	|描述	|
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

> 編輯器打開的文檔文件

### 屬性列表

|屬性名			|屬性類型							|描述														|
|--				|--									|--															|
|fileName		|String								|文件名稱													|
|isDirty		|Boolean							|是否是修改狀態												|
|isUntitled		|Boolean							| 是否是無標題文件											|
|lineCount		|Number								|文檔總行數													|
|uri			|[Uri](/ExtensionDocs/Api/other/Uri)						|文檔的uri，如果是本地文件，可通過uri.fsPath獲取本地文件路徑|
|languageId|String|編程語言Id，如'javascript','html'等，完整id列表參見[這裏](/ExtensionDocs/Api/other/languageId)	|
|workspaceFolder|[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)|該文檔文件所屬的項目對象	|

### getText

> 獲取指定區域內的文本

|參數名稱	|參數類型		|描述													|
|--			|--				|--														|
|range		|[Range](#Range)|[可選]文本區域，如果不傳該參數，則獲取整個文檔的內容	|

**返回值**

|返回類型	|描述		|
|--			|--			|
|String		|文本字符串	|


### lineAt

> 獲取指定行號的行信息

|參數名稱	|參數類型	|描述			|
|--			|--			|--				|
|lineno		|Number		|行號，從0開始	|

**返回值**

|返回類型								|描述		|
|--										|--			|
| Promise&lt;[TextLine](#TextLine)&gt;	|文本行對象	|

### lineFromPosition

> 根據光標位置獲取光標所在行。

|參數名稱	|參數類型	|描述		|
|--			|--			|--			|
|pos		|Number		|光標位置	|

**返回值**

|返回類型								|描述		|
|--										|--			|
|Promise&lt;[TextLine](#TextLine)&gt;	|文本行對象	|


## TextEdit

TextEdit: 文檔編輯

### TextEdit 屬性列表

|屬性名	|屬性類型			|描述			|
|--		|--					|--				|
|range	|[Range](#Range)	|要修改的區域	|
|newText|String				|要插入的新內容	|

### replace **static**

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

## TextLine

TextLine: 文檔中的某一行

**屬性列表**

|屬性名	|屬性類型	|描述						|
|--		|--			|--							|
|start	|Number		|行起始位置					|
|end	|Number		|行結束位置，不計算換行符	|
|text	|String		|行內容，不包含換行符		|