# Clipboard

> 从HBuilderX 2.7.6及以上版本开始支持

剪切板对象，可用于读取剪切板内容和写入内容到剪切板，目前仅支持文本格式	

## readText

> 读取剪切板内容

##### 参数说明
无

##### 返回值
|返回类型				|描述			|
|--						|--				|
|Promise&lt;String&gt;	|返回剪切板内容	|

##### 示例

``` javascript
    var readPromise = hx.env.clipboard.readText();
	readPromise.then(function(text) {
		console.log("读取剪切板内容：",text);
	});
```

## writeText

> 写入剪切板内容

##### 参数说明

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|value		|String		|要写入剪切板的字符串|

##### 返回值

|返回类型			|描述	|
|--					|--		|
|Promise&lt;void&gt;|Promise|

##### 示例
``` javascript
    hx.env.clipboard.writeText("Hello Clipboard.");
```
