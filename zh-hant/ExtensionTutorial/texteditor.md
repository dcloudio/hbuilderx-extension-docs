對文檔進行修改前，首先要拿到文檔關聯的編輯器，獲取編輯器的方式有2種：

1 . 通過hx.window.getActiveTextEditor()

代碼如下：
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

2 . 通過編輯器`命令`,hx.commands.registerTextEditorCommand('id',(editor)=>{});

代碼如下：
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
> 完整的代碼示例可以在這裏找到[文檔編輯](#)