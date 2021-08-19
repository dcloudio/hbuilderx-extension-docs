# getActiveTextEditor

> 获取当前激活的编辑器,如果没有打开的编辑器返回undefined

#### 参数说明
无

#### 返回值

|返回类型				|描述									|
|--						|--										|
|Promise&lt;[TextEditor](/ExtensionDocs/Api/windows/TextEditor)&gt;	|返回当前激活的编辑器|

#### 示例
``` javascript
    let activeEditor = hx.window.getActiveTextEditor();
    activeEditor.then(function(editor){
    	console.log(editor.document.fileName);
    });
```