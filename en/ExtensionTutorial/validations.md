There are 3 ways to trigger file verification:
1. Trigger verification by clicking on a registered menu
2. Validation when monitoring document modification event
3. Validation when listening document saving event

The following code that sends the error result of the verification to HBuilderX:
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
