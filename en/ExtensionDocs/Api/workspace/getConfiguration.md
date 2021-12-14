# getConfiguration

Get a workspace configuration object.

## Introduction

**Parameter**

|Name	|Type	|Description			|
|--			|--			|--				|
|section	|String		| 	A dot-separated identifier.	|

**Returns**

|Type				|Description		|
|--								|--			|
|[Configuration](/ExtensionDocs/Api/workspace/onDidChangeConfiguration?id=configurationchangeevent)|The full configuration or a subset.	|

**Example**

``` javascript
let config = hx.workspace.getConfiguration()
let fontSize = config.get("editor.fontSize");

or

let config = hx.workspace.getConfiguration("editor")
let fontSize = config.get("fontSize");
```


## get

> get: Get configuration items

**Parameter**

|Name		|Type	|Description		|
|--				|--			|--			|
|section		|String		|Configuration name。|
|defaultValue	|Any		|A value should be returned when no value could be found, is undefined.|

**Returns**

|Type	|Description		|
|--			|--			|
|Any		|Return a value from this configuration.	|

**Example**
``` javascript
    let eslintConfig = hx.workspace.getConfiguration("eslint-js")
    let validateOnDocumentChanged = eslintConfig.get("validateOnDocumentChanged",false);
```

## update

> update: Update configuration items

**Parameter**

|Name	|Type	|Description		|
|--			|--			|--			|
|section	|String		|Configuration name|
|value		|Any		|Configuration item value	|

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;void&gt;	|	|

**Example**
``` javascript
    let eslintConfig = hx.workspace.getConfiguration("eslint-js")
    eslintConfig.update("validateOnDocumentChanged",true).then(()=>{
        console.log("Successfully updated the configuration.");
    });
```
