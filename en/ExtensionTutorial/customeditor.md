#### How to extend a custom editor?

`Supported from HBuilderX 2.9.2+`

- Configure contribution points through [customEditors] (/ExtensionDocs/ContributionPoints/README.md#customEditors) and declare custom editors that need to be registered.

```json
//package.json；
//...NOTE：Package.json does not support comments, you need to delete the comments when using the following codes.
    "contributes": {
        "customEditors": [{
            "viewType": "catEdit.catScratch",   // Custom editor type id
            "displayName": "Cat Scratch",
            "selector": [{
                "fileNamePattern": "*.cscratch" // File name matching pattern
            }],
            "priority": "default"
        },
        ...]
    }
```

- Extension inherits from CustomEditorProvider

  HBuilderX uses WebViewPanel as the view of the custom editor. The usage of [WebViewPanel](/ExtensionDocs/Api/windows/createWebView?id=webviewpanel) can also refer to [View Extension](/ExtensionTutorial/views.md#WebView) Example.
    
```javascript
var hx = require("hbuilderx");

// Call Classes
let CustomDocument = hx.CustomEditor.CustomDocument;
let CustomEditorProvider = hx.CustomEditor.CustomEditorProvider;
let CustomDocumentEditEvent = hx.CustomEditor.CustomDocumentEditEvent;

// Inherits CustomDocument
class CatCustomDocument extends CustomDocument {
    constructor(uri) {
        super(uri)
    }
    dispose() {
        super.dispose();
    }
}

// Inherit CustomEditorProvider to implement some methods
class CatCustomEditorProvider extends CustomEditorProvider{
    constructor(context){
        super()
    }
    openCustomDocument(uri){
        // create CustomDocument
        return Promise.resolve(new CatCustomDocument(uri));
    }
    resolveCustomEditor(document, webViewPanel){
        // link CustomDocument and WebViewPanel
    }
    saveCustomDocument(document) {
        // save document
        return true;
    }
    saveCustomDocumentAs(document, destination) {
        // document save to destination
        return true;
    }
}
```

- Register the custom editor of the above extension through API: [window.registerCustomEditorProvider](/ExtensionDocs/Api/windows/registerCustomEditorProvider) when the extension is activated

Custom editor provides new extension activation event [onCustomEditor](/ExtensionDocs/activation_event.md#onCustomEditor)

```json
// package.json declare the type of custom editor that can activate the extension
"activationEvents": [
    "onCustomEditor:catEdit.catScratch"
]
```

```javascript
// extension.js is activation entry
function activate(context) {
    hx.window.registerCustomEditorProvider("catEdit.catScratch", new CatCustomEditorProvider());
}
```

- Others

```javascript
// Send a document change event to HBuilderX, and the editor tab becomes dirty status
provider.onDidChangeCustomDocument.fire(new CustomDocumentEditEvent(document));
```
