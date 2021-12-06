# Clipboard

> Supported from HBuilderX 2.7.6+

Clipboard object, which can be used to read the content of the clipboard and write content to the clipboard. Currently, only text format is supported	

## readText

> Read clipboard content

#### Parameter Description
No parameters

#### Returns
|Type				|Description			|
|--						|--				|
|Promise&lt;String&gt;	|Return to clipboard content	|

#### Example

``` javascript
    var readPromise = hx.env.clipboard.readText();
	readPromise.then(function(text) {
		console.log("Read clipboard content：",text);
	});
```

## writeText

> Write clipboard content

#### Parameter Description

|Parameter	|Type	|Description			|
|--			|--			|--				|
|value		|String		|The string to be written to the clipboard|

#### Returns

|Type			|Description	|
|--					|--		|
|Promise&lt;void&gt;|Promise|

#### Example

``` javascript
    hx.env.clipboard.writeText("Hello Clipboard.");
```
