# getConfiguration

根据指定的section获取对应的配置

## 简介

**Parameter**

|Name	|Type	|Description			|
|--			|--			|--				|
|section	|String		|配置项分类名称	|

**Returns**
|Type				|Description		|
|--								|--			|
|[Configuration](#Configuration)|返回配置	|

**Example**

``` javascript
    let config = hx.workspace.getConfiguration()
    let fontSize = config.get("editor.fontSize");
    //或者也可以这样
    let config = hx.workspace.getConfiguration("editor")
    let fontSize = config.get("fontSize");
```


## get

> get: 获取配置项

**Parameter**

|Name		|Type	|Description		|
|--				|--			|--			|
|section		|String		|配置项的key|
|defaultValue	|Any		|默认值，当key不存在时返回该值|

**Returns**

|Type	|Description		|
|--			|--			|
|Any		|配置项的值	|

**Example**
``` javascript
    let eslintConfig = hx.workspace.getConfiguration("eslint-js")
    let validateOnDocumentChanged = eslintConfig.get("validateOnDocumentChanged",false);
```

## update

> update: 更新配置项

**Parameter**

|Name	|Type	|Description		|
|--			|--			|--			|
|section	|String		|配置项的key|
|value		|Any		|配置项的值	|

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

**Example**
``` javascript
    let eslintConfig = hx.workspace.getConfiguration("eslint-js")
    eslintConfig.update("validateOnDocumentChanged",true).then(()=>{
        console.log("更新配置成功。");
    });
```