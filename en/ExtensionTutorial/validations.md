对文件进行验证有3种触发方式：
1. 通过点击注册的某个菜单触发验证
2. 监听文档修改事件实时验证
3. 监听文档保存事件验证

将验证的错误列表发送到HBuilderX进行显示的代码如下：
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