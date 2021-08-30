# onDidChangeConfiguration

> 從HBuilderX 2.7.10及以上版本開始支持`

## 介紹

全局配置改變事件，比如"editor.fontSize"改變，或者通過插件擴展的配置項改變。

**參數說明**

|參數名稱	|參數類型															|描述		|
|--			|--																	|--			|
|listener	|Function([ConfigurationChangeEvent](#ConfigurationChangeEvent))	|配置修改事件回調	|

**返回值**

|返回類型	|描述				|
|--			|--					|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|該事件回調的銷燬器，可將該對象放置到插件的context.subscriptions數組內，插件卸載時，將會自動註銷該`事件回調`	|

**示例**

``` javascript
    let configurationChangeDisplose = hx.workspace.onDidChangeConfiguration(function(event){
        if(event.affectsConfiguration("editor.fontSize")){
            console.log("修改了字體大小");
        }
    });
```

## ConfigurationChangeEvent

> 配置改變產生的事件

### affectsConfiguration
判斷該事件該變了哪個配置項值

**參數說明**

|參數名稱	|參數類型	|描述								|
|--			|--			|--									|
|section	|String		|配置項的key，比如:"editor.fontSize"|

**參數說明**

|返回類型	|描述												|
|--			|--													|
|Boolean	|`true`表示配置項被修改，`false`表示配置項沒有被修改|

**示例**

``` javascript
    let configurationChangeDisplose = hx.workspace.onDidChangeConfiguration(function(event){
        if(event.affectsConfiguration("editor.fontSize")){
            console.log("修改了字體大小");
        }
    });
```