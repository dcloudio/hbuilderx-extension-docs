# env

> Supported from HBuilderX 2.7.6+ version

Env second-level module object, including methods related to operating environment information and system interaction

Attribute list：

|Attribute name		|Type				|description																	|
|--			|--						|--																		|
|appName	|String					|Application name：HBuilder X												|
|appVersion	|String					|Application main version. Can be viewed in the menu [Help]-[About]						|
|appRoot	|String					|Application installation path														|
|appData	|String					|Application data storage path													|
|clipboard	|[Clipboard](/ExtensionDocs/Api/env/Clipboard)|Clipboard object, which can be used to read the content of the clipboard and write content to the clipboard. Currently, only text format is supported	|

#### Example

```js
# Get the application name
const appName = hx.env.appName;

# Get the main version number of the application
const appVersion = hx.env.appVersion;
```