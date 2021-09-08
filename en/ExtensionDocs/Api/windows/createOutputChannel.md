# createOutputChannel

创建一个输出控制台通道，可用于在控制台输出文本内容。

## 介绍

**Parameter**

|Name	|Type	|Description																								|
|--			|--			|--																									|
|channel	|String		|控制台通道名称，在添加内容到控制台时，会将该名称作为前缀输出，eg:[${channel}] 这是要输出的内容。	|

**Returns**

|Type				|Description		|
|--								|--			|
|[OutputChannel](#OutputChannel)|控制台通道	|

**Example**

``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```

## OutputChannel

> 输出通道，在添加内容到控制台时，会将通道名称作为前缀输出，eg:[${channel}] 这是要输出的内容。	

### Attribute list

|Attribute name	|Type	|Description		|
|--		|--			|--			|
|name	|String		|通道名称	|

### appendLine

**Parameter**

|Name	|Type	|Description				|
|--			|--			|--					|
|line		|String		|输出到控制台的内容	|

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

示例

``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```

### show

**Parameter**
无

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

示例
``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```