# openTextDocument

通过指定的uri打开一个文档文件

#### 参数说明

|参数名称	|参数类型			|描述		|
|--			|--					|--			|
|uri		|String或[Uri](/ExtensionDocs/Api/other/Uri)|文档地址	|

#### 返回值
|返回类型										|描述			|
|--												|--				|
|Promise&lt;[TextDocument](/ExtensionDocs/Api/windows/TextEditor.md#TextDocument)&gt;	|返回打开的文档	|

#### 示例
``` javascript
    var documentPromise = hx.workspace.openTextDocument("foo/bar.js");
    documentPromise.then(function(document) {
        console.log("打开了文档:",document.fileName);
    });
```