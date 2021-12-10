# Clipboard

> Supported from HBuilderX 2.7.6+

The clipboard provides read and write access to the system's clipboard. Currently, only text format is supported.	

## readText

> Read the current clipboard contents as text.

#### Parameter Description
No parameters

#### Returns
|Type				|Description			|
|--						|--				|
|Promise&lt;String&gt;	|A promise that resolves to a string.	|

#### Example

``` javascript
    var readPromise = hx.env.clipboard.readText();
	readPromise.then(function(text) {
		console.log("Read clipboard content：",text);
	});
```

## writeText

> Writes text into the clipboard.

#### Parameter Description

|Parameter	|Type	|Description			|
|--			|--			|--				|
|value		|String		|The string to be written to the clipboard|

#### Returns

|Type			|Description	|
|--					|--		|
|Promise&lt;void&gt;|A promise that resolves when writing happened.|

#### Example

``` javascript
    hx.env.clipboard.writeText("Hello Clipboard.");
```
