# createDiagnosticCollection

創建一個問題列表，可用於文檔校驗時在文檔出錯區域顯示波浪線標識問題。

## 參數和返回值

##### 參數說明

|參數名稱	|參數類型	|描述			|
|--			|--			|--				|
|name		|String		|問題列表名稱，當鼠標移至波浪線上時會顯示在tooltips中|

##### 返回值

|返回類型										|描述			|
|--												|--				|
|[DiagnosticCollection](#DiagnosticCollection)	|創建的問題列表	|


##### 示例

``` javascript
    let activeEditor = hx.window.getActiveTextEditor();
    activeEditor.then(function(editor) {
        // 獲取文件路徑
        let file_url = editor.document.uri.fsPath;
        // 通過editor.document可以獲取文檔對象進行校驗
        // 創建一個測試問題集合
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

問題集合

#### 屬性列表

|屬性名	|屬性類型	|描述		|
|--		|--			|--			|
|name	|String		|問題集合名稱	|

#### set

##### 參數說明

|參數名稱	|參數類型										|描述		|
|--			|--												|--			|
|uri		|String或Uri									|文檔地址	|
|diagnostics|Array&lt;[DiagnosticItem](#DiagnosticItem)&gt;	|問題集合	|

##### 返回值

|返回類型	|描述	|
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

問題項

##### 屬性列表

|屬性名		|屬性類型	|描述												|
|--			|--			|--													|
|line		|String		|在文檔第幾行										|
|column		|String		|在文檔第幾列										|
|message	|String		|問題詳細信息										|
|severity	|String		|問題級別，取值範圍:'error'，'warn'. 默認值是'error'|
