# openTextDocument

Open a document file through the specified uri.

#### Parameter

|Name	|Type			|Description		|
|--			|--					|--			|
|uri		|String或[Uri](/ExtensionDocs/Api/other/Uri)|文档地址	|

#### Returns
|Type								|Description			|
|--												|--				|
|Promise&lt;[TextDocument](/ExtensionDocs/Api/windows/TextEditor.md#TextDocument)&gt;	|返回打开的文档	|

#### Example
``` javascript
    var documentPromise = hx.workspace.openTextDocument("foo/bar.js");
    documentPromise.then(function(document) {
        console.log("打开了文档:",document.fileName);
    });
```