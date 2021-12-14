# onDidChangeConfiguration

> Supported from HBuilderX 2.7.10+

## Introduce

An event that is emitted when the configuration changed.

**Parameter**

|Name	|Type															|Description		|
|--			|--																	|--			|
|listener	|Function([ConfigurationChangeEvent](#ConfigurationChangeEvent))	|Configuration  event callback	|

**Returns**

|Type	|Description				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|The destroyer of the event callback can place the object in the context.subscriptions array of the extension. When the extension is uninstalled, the event callback will be automatically cancelled.	|

**Example**

``` javascript
let configurationChangeDisplose = hx.workspace.onDidChangeConfiguration(function(event){
    if(event.affectsConfiguration("editor.fontSize")){
        console.log("Modified font size");
    }
});
```

## ConfigurationChangeEvent

> An event describing the change in Configuration.

### affectsConfiguration

Checks if the given section has changed. If scope is provided, checks if the section has changed for resources under the given scope.

**Parameter**

|Name	|Type	|Description								|
|--			|--			|--									|
|section	|String		|Configuration name, Example:"editor.fontSize"|

**Parameter**

|Type	|Description												|
|--			|--													|
|Boolean	|`true` if the given section has changed.|

**Example**

``` javascript
let configurationChangeDisplose = hx.workspace.onDidChangeConfiguration(function(event){
    if(event.affectsConfiguration("editor.fontSize")){
        console.log("Modified font size");
    }
});
```
