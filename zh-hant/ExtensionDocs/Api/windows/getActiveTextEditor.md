# getActiveTextEditor

> 獲取當前激活的編輯器,如果沒有打開的編輯器返回undefined

#### 參數說明
無

#### 返回值

|返回類型				|描述									|
|--						|--										|
|Promise&lt;[TextEditor](/ExtensionDocs/Api/windows/TextEditor)&gt;	|返回當前激活的編輯器|

#### 示例
``` javascript
    let activeEditor = hx.window.getActiveTextEditor();
    activeEditor.then(function(editor){
    	console.log(editor.document.fileName);
    });
```