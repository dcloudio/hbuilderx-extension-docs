# openTextDocument

Open a document file through the specified uri.

#### Parameter

|Name	|Type			|Description		|
|--			|--					|--			|
|uri		|String or [Uri](/ExtensionDocs/Api/other/Uri)| File Path	|

#### Returns
|Type								|Description			|
|--												|--				|
|Promise&lt;[TextDocument](/ExtensionDocs/Api/windows/TextEditor.md#TextDocument)&gt;	|	A promise that resolves to a document.	|

#### Example
``` javascript
    var documentPromise = hx.workspace.openTextDocument("foo/bar.js");
    documentPromise.then(function(document) {
        console.log("Document opened:",document.fileName);
    });
```