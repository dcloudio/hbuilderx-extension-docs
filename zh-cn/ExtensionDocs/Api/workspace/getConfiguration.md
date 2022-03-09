# getConfiguration

根据指定的section获取对应的配置

## 简介

**参数说明**

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|section	|String		|配置项分类名称	|

**返回值**

|返回类型						|描述		|
|--								|--			|
|[Configuration](/ExtensionDocs/Api/workspace/onDidChangeConfiguration?id=configurationchangeevent)|返回配置	|

**示例**

``` javascript
    let config = hx.workspace.getConfiguration()
    let fontSize = config.get("editor.fontSize");
    //或者也可以这样
    let config = hx.workspace.getConfiguration("editor")
    let fontSize = config.get("fontSize");
```


## get

> get: 获取配置项

**参数说明**

|参数名称		|参数类型	|描述		|
|--				|--			|--			|
|section		|String		|配置项的key|
|defaultValue	|Any		|默认值，当key不存在时返回该值|

**返回值**

|返回类型	|描述		|
|--			|--			|
|Any		|配置项的值	|

**示例**
``` javascript
    let eslintConfig = hx.workspace.getConfiguration("eslint-js")
    let validateOnDocumentChanged = eslintConfig.get("validateOnDocumentChanged",false);
```

## update

> update: 更新配置项

**参数说明**

|参数名称	|参数类型	|描述		|
|--			|--			|--			|
|section	|String		|配置项的key|
|value		|Any		|配置项的值	|

**返回值**

|返回类型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

**示例**
``` javascript
    let eslintConfig = hx.workspace.getConfiguration("eslint-js")
    eslintConfig.update("validateOnDocumentChanged",true).then(()=>{
        console.log("更新配置成功。");
    });
```