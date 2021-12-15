# createDiagnosticCollection

Create a diagnostics collection that can be used to display wavy lines in the error area of the document to identify problems during document verification.

## Parameters and Returns 

##### Parameters

|Name	|Type	|Description			|
|--			|--			|--				|
|name		|String		|TThe name of the collection, which will be displayed in tooltips when the mouse is moved over the wavy line|

##### Returns

|Type										|Description			|
|--												|--				|
|[DiagnosticCollection](#DiagnosticCollection)	|A new diagnostic collection.	|


##### Example

``` javascript
    let activeEditor = hx.window.getActiveTextEditor();
    activeEditor.then(function(editor) {
        // Get file path
        let file_url = editor.document.uri.fsPath;
        // The document object can be obtained for verification through editor.document
        // Create a test question collection
        let collections = [{
                column: 0,
                line: 3,
                message: "error for test",
                severity: 'error'
            }
        ];
        let diagnostics = hx.languages.createDiagnosticCollection('eslint');
        diagnostics.set(file_url, collections);
    });
```

## DiagnosticCollection

> A diagnostics collection is a container that manages a set of diagnostics. Diagnostics are always scopes to a diagnostics collection and a resource.

#### Attributes List

|Name	|Type	|Description		|
|--		|--			|--			|
|name	|String		|The name of this diagnostic collectionn	|

#### set

##### Parameters

|Name	|Type										|Description		|
|--			|--												|--			|
|uri		|String or Uri									|A resource identifier.	|
|diagnostics|Array&lt;[DiagnosticItem](#DiagnosticItem)&gt;	|Array of diagnostics or undefined	|

##### Returns

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

##### Example

``` javascript
    let diagnositics = hx.languages.createDiagnosticCollection('eslint');
    diagnositics.set("foo.js",[
        {
            column: 0,
            line: 0,
            message: 'a error message.'
        }
    ]);
```

## DiagnosticItem

> Diagnostic Item

##### Attributes List

|Name		|Type	|Description												|
|--			|--			|--													|
|line		|String		|lines of the document										|
|column		|String		|column of the document										|
|message	|String		|Question details									|
|severity	|String		|Problem level, value range:'error','warn'. The default value is'error' |
