# onDidChangeConfiguration

> Supported from HBuilderX 2.7.10+ version

## Introduce

全局配置改变事件，比如"editor.fontSize"改变，或者通过插件扩展的配置项改变。

**Parameter**

|Name	|Type															|Description		|
|--			|--																	|--			|
|listener	|Function([ConfigurationChangeEvent](#ConfigurationChangeEvent))	|配置修改事件回调	|

**Returns**

|Type	|Description				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|该事件回调的销毁器，可将该对象放置到插件的context.subscriptions数组内，插件卸载时，将会自动注销该`事件回调`	|

**Example**

``` javascript
let configurationChangeDisplose = hx.workspace.onDidChangeConfiguration(function(event){
    if(event.affectsConfiguration("editor.fontSize")){
        console.log("Modified font size");
    }
});
```

## ConfigurationChangeEvent

> An event that is emitted when the configuration changed.

### affectsConfiguration

Checks if the given section has changed.

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