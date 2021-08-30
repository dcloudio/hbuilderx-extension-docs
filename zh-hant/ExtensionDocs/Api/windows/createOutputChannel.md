# createOutputChannel

創建一個輸出控制檯通道，可用於在控制檯輸出文本內容。

## 介紹

**參數說明**

|參數名稱	|參數類型	|描述																								|
|--			|--			|--																									|
|channel	|String		|控制檯通道名稱，在添加內容到控制檯時，會將該名稱作爲前綴輸出，eg:[${channel}] 這是要輸出的內容。	|

**返回值**

|返回類型						|描述		|
|--								|--			|
|[OutputChannel](#OutputChannel)|控制檯通道	|

**示例**

``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```

## OutputChannel

> 輸出通道，在添加內容到控制檯時，會將通道名稱作爲前綴輸出，eg:[${channel}] 這是要輸出的內容。	

### 屬性列表

|屬性名	|屬性類型	|描述		|
|--		|--			|--			|
|name	|String		|通道名稱	|

### appendLine

參數說明

|參數名稱	|參數類型	|描述				|
|--			|--			|--					|
|line		|String		|輸出到控制檯的內容	|

返回值

|返回類型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

示例

``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```

### show

參數說明
無

返回值

|返回類型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

示例
``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```