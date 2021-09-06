# getActiveTextEditor

> Get the currently active editor, if there is no open editor, return undefined

#### Parameter

No parameters

#### Returns

|Type				|Description									|
|--						|--										|
|Promise&lt;[TextEditor](/ExtensionDocs/Api/windows/TextEditor)&gt;	|Return to the currently active editor|

#### Example

``` javascript
let activeEditor = hx.window.getActiveTextEditor();
activeEditor.then(function(editor){
  console.log(editor.document.fileName);
});
```