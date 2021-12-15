# getActiveTextEditor

> The currently active editor or undefined. The active editor is the one that currently has focus or, when none has focus, the one that has changed input most recently.

#### Parameter

No parameters

#### Returns

|Type				|Description									|
|--						|--										|
|Promise&lt;[TextEditor](/ExtensionDocs/Api/windows/TextEditor)&gt;	||

#### Example

``` javascript
let activeEditor = hx.window.getActiveTextEditor();
activeEditor.then(function(editor){
  console.log(editor.document.fileName);
});
```
