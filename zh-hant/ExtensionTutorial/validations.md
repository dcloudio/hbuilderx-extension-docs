對文件進行驗證有3種觸發方式：
1. 通過點擊註冊的某個菜單觸發驗證
2. 監聽文檔修改事件實時驗證
3. 監聽文檔保存事件驗證

將驗證的錯誤列表發送到HBuilderX進行顯示的代碼如下：
```javascript
let editorPromise = hx.window.getActiveTextEditor();
editorPromise.then((editor)=>{
    let doc = editor.document;
    //do validation document。
    //doValidateDocument(doc);
    let diagnositics = hx.languages.createDiagnosticCollection('validation name');
    diagnositics.set(doc.uri,[
        {
            column: 0,
            line: 0,
            message: 'a error message.'
        },
        ...
    ]);
});

```