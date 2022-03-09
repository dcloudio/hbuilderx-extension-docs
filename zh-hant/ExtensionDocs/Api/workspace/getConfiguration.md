# getConfiguration

根據指定的section獲取對應的配置

## 簡介

**參數說明**

|參數名稱	|參數類型	|描述			|
|--			|--			|--				|
|section	|String		|配置項分類名稱	|

**返回值**

|返回類型						|描述		|
|--								|--			|
|[Configuration](/ExtensionDocs/Api/workspace/onDidChangeConfiguration?id=configurationchangeevent)|返回配置	|

**示例**

``` javascript
    let config = hx.workspace.getConfiguration()
    let fontSize = config.get("editor.fontSize");
    //或者也可以這樣
    let config = hx.workspace.getConfiguration("editor")
    let fontSize = config.get("fontSize");
```


## get

> get: 獲取配置項

**參數說明**

|參數名稱		|參數類型	|描述		|
|--				|--			|--			|
|section		|String		|配置項的key|
|defaultValue	|Any		|默認值，當key不存在時返回該值|

**返回值**

|返回類型	|描述		|
|--			|--			|
|Any		|配置項的值	|

**示例**
``` javascript
    let eslintConfig = hx.workspace.getConfiguration("eslint-js")
    let validateOnDocumentChanged = eslintConfig.get("validateOnDocumentChanged",false);
```

## update

> update: 更新配置項

**參數說明**

|參數名稱	|參數類型	|描述		|
|--			|--			|--			|
|section	|String		|配置項的key|
|value		|Any		|配置項的值	|

**返回值**

|返回類型	|描述	|
|--			|--		|
|Promise&lt;void&gt;	|Promise	|

**示例**
``` javascript
    let eslintConfig = hx.workspace.getConfiguration("eslint-js")
    eslintConfig.update("validateOnDocumentChanged",true).then(()=>{
        console.log("更新配置成功。");
    });
```