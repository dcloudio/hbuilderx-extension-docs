# createDiagnosticCollection

Create a diagnostics collection that can be used to display wavy lines in the error area of the document to identify problems during document verification.

## Parameter and Return Value

##### Parameter

|Name	|Type	|Description			|
|--			|--			|--				|
|name		|String		|The name of the problem list, which will be displayed in tooltips when the mouse is moved over the wavy line|

##### Return Value

|Type										|Description			|
|--												|--				|
|[DiagnosticCollection](#DiagnosticCollection)	|List of questions created	|


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

> Diagnostic Collection

#### Attributes List

|Name	|Type	|Description		|
|--		|--			|--			|
|name	|String		|The name of the collection	|

#### set

##### Parameter

|Name	|Type										|Description		|
|--			|--												|--			|
|uri		|String or Uri									|Document path	|
|diagnostics|Array&lt;[DiagnosticItem](#DiagnosticItem)&gt;	|Diagnostic Collection	|

##### Return Value

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
