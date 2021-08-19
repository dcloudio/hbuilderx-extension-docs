# openTextDocument

通過指定的uri打開一個文檔文件

#### 參數說明

|參數名稱	|參數類型			|描述		|
|--			|--					|--			|
|uri		|String或[Uri](/ExtensionDocs/Api/other/Uri)|文檔地址	|

#### 返回值
|返回類型										|描述			|
|--												|--				|
|Promise&lt;[TextDocument](/ExtensionDocs/Api/windows/TextEditor.md#TextDocument)&gt;	|返回打開的文檔	|

#### 示例
``` javascript
    var documentPromise = hx.workspace.openTextDocument("foo/bar.js");
    documentPromise.then(function(document) {
        console.log("打開了文檔:",document.fileName);
    });
```