# Clipboard

> 從HBuilderX 2.7.6及以上版本開始支持

剪切板對象，可用於讀取剪切板內容和寫入內容到剪切板，目前僅支持文本格式	

## readText

> 讀取剪切板內容

##### 參數說明
無

##### 返回值
|返回類型				|描述			|
|--						|--				|
|Promise&lt;String&gt;	|返回剪切板內容	|

##### 示例

``` javascript
    var readPromise = hx.env.clipboard.readText();
	readPromise.then(function(text) {
		console.log("讀取剪切板內容：",text);
	});
```

## writeText

> 寫入剪切板內容

##### 參數說明

|參數名稱	|參數類型	|描述			|
|--			|--			|--				|
|value		|String		|要寫入剪切板的字符串|

##### 返回值

|返回類型			|描述	|
|--					|--		|
|Promise&lt;void&gt;|Promise|

##### 示例
``` javascript
    hx.env.clipboard.writeText("Hello Clipboard.");
```
