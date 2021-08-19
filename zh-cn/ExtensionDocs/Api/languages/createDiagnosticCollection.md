# createDiagnosticCollection

创建一个问题列表，可用于文档校验时在文档出错区域显示波浪线标识问题。

## 参数和返回值

##### 参数说明

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|name		|String		|问题列表名称，当鼠标移至波浪线上时会显示在tooltips中|

##### 返回值

|返回类型										|描述			|
|--												|--				|
|[DiagnosticCollection](#DiagnosticCollection)	|创建的问题列表	|


##### 示例

``` javascript
    let activeEditor = hx.window.getActiveTextEditor();
    activeEditor.then(function(editor) {
        // 获取文件路径
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

问题集合

#### 属性列表

|属性名	|属性类型	|描述		|
|--		|--			|--			|
|name	|String		|问题集合名称	|

#### set

##### 参数说明

|参数名称	|参数类型										|描述		|
|--			|--												|--			|
|uri		|String或Uri									|文档地址	|
|diagnostics|Array&lt;[DiagnosticItem](#DiagnosticItem)&gt;	|问题集合	|

##### 返回值

|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

##### 示例

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

问题项

##### 属性列表

|属性名		|属性类型	|描述												|
|--			|--			|--													|
|line		|String		|在文档第几行										|
|column		|String		|在文档第几列										|
|message	|String		|问题详细信息										|
|severity	|String		|问题级别，取值范围:'error'，'warn'. 默认值是'error'|
