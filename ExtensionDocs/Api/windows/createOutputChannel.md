# createOutputChannel

创建一个输出控制台通道，可用于在控制台输出文本内容。

## 介绍

**参数说明**

|参数名称	|参数类型	|描述																								|
|--			|--			|--																									|
|channel	|String		|控制台通道名称，在添加内容到控制台时，会将该名称作为前缀输出，eg:[${channel}] 这是要输出的内容。	|

**返回值**

|返回类型						|描述		|
|--								|--			|
|[OutputChannel](#OutputChannel)|控制台通道	|

**示例**

``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```

## OutputChannel

> 输出通道，在添加内容到控制台时，会将通道名称作为前缀输出，eg:[${channel}] 这是要输出的内容。	

### 属性列表

|属性名	|属性类型	|描述		|
|--		|--			|--			|
|name	|String		|通道名称	|

### appendLine

参数说明

|参数名称	|参数类型	|描述				|
|--			|--			|--					|
|line		|String		|输出到控制台的内容	|

返回值

|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

示例

``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```

### show

参数说明
无

返回值

|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

示例
``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```