Before modifying the document, you must first get the editor associated with the document. There are two ways to obtain the editor:

1 . hx.window.getActiveTextEditor()

code show as below:
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

2 . Through the editor `command`,hx.commands.registerTextEditorCommand('id',(editor)=>{});

code show as below:
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
> The example can be found here [Document Edit](#)
