# onDidChangeConfiguration

> 从HBuilderX 2.7.10及以上版本开始支持`

## 介绍

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
            console.log("修改了字体大小");
        }
    });
```

## ConfigurationChangeEvent

> 配置改变产生的事件

### affectsConfiguration
判断该事件该变了哪个配置项值

**Parameter**

|Name	|Type	|Description								|
|--			|--			|--									|
|section	|String		|配置项的key，比如:"editor.fontSize"|

**Parameter**

|Type	|Description												|
|--			|--													|
|Boolean	|`true`表示配置项被修改，`false`表示配置项没有被修改|

**Example**

``` javascript
    let configurationChangeDisplose = hx.workspace.onDidChangeConfiguration(function(event){
        if(event.affectsConfiguration("editor.fontSize")){
            console.log("修改了字体大小");
        }
    });
```