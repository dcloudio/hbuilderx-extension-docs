# createDiagnosticCollection

Create a diagnostics collection. 

For document verification, wavy lines are displayed in the error area of the document to identify problems.

## Parameter and Returns

##### Parameter

|Name	|Type	|Description			|
|--			|--			|--				|
|name		|String		|The name of the problem list, which will be displayed in tooltips when the mouse is moved over the wavy line|

##### Returns

|Type										|Description			|
|--												|--				|
|[DiagnosticCollection](#DiagnosticCollection)	|List of questions created	|


##### Example

``` javascript
    let activeEditor = hx.window.getActiveTextEditor();
    activeEditor.then(function(editor) {
        // Get file path
        let file_url = editor.document.uri.fsPath;
        // 通过editor.document可以获取文档对象进行校验
        // 创建一个测试问题集合
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
|name	|String		|The name of the collection.	|

#### set

##### Parameter

|Name	|Type										|Description		|
|--			|--												|--			|
|uri		|String or Uri									|Document path	|
|diagnostics|Array&lt;[DiagnosticItem](#DiagnosticItem)&gt;	|Diagnostic Item	|

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
|message	|String		|The human-readable message.									|
|severity	|String		|The severity, default is error. Scope:'error'，'warn'. |
