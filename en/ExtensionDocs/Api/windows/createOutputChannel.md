# createOutputChannel

Creates a new output channel with the given name.

## Introduce

**Parameter**

|Name	|Type	|Description																								|
|--			|--			|--																									|
|channel	|String		|Human-readable string which will be used to represent the channel in the UI.	|

**Returns**

|Type				|Description		|
|--								|--			|
|[OutputChannel](#OutputChannel)| An output channel is a container for readonly textual information.	|

**Example**

``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```

## OutputChannel

### Attribute list

|Attribute name	|Type	|Description		|
|--		|--			|--			|
|name	|String		|The human-readable name of this output channel.	|

### appendLine

> Append the given value and a line feed character to the channel.

**Parameter**

|Name	|Type	|Description				|
|--			|--			|--					|
|line		|String		|	A string, falsy values will be printed.	|

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

**Example**

``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```

### show

Reveal this channel in the UI.

**Parameter**

No.

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

**Example**
``` javascript
    let outputChannel = hx.window.createOutputChannel("foo");
    outputChannel.show();
    outputChannel.appendLine("Hello World");
```
