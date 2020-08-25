对文档进行修改前，首先要拿到文档关联的编辑器，获取编辑器的方式有 2 种：

1 . 通过 hx.window.getActiveTextEditor()

代码如下：
```javascript
    let editorPromise = hx.window.getActiveTextEditor();
    editorPromise.then((editor)=>{
        let document = editor.document;
        let selection = editor.selection;
        // Get the word within the selection
        let word = document.getText(selection);
        let reversed = word.split('').reverse().join('');
        editor.edit(editBuilder => {
            editBuilder.replace(selection, reversed);
        });
    });
```

2 . 通过编辑器 `命令` ,hx.commands.registerTextEditorCommand('id',(editor)=>{});

代码如下：
```javascript
hx.commands.registerTextEditorCommand('extension.reverseSelectWord',(editor)=>{
    let document = editor.document;
    let selection = editor.selection;
    // Get the word within the selection
    let word = document.getText(selection);
    let reversed = word.split('').reverse().join('');
    editor.edit(editBuilder => {
        editBuilder.replace(selection, reversed);
    });
});
```
> 完整的代码示例可以在这里找到[文档编辑](#)。