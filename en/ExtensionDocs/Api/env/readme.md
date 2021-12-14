# env

> Supported from HBuilderX 2.7.6+

env is a secondary module object, which contains information about the operating environment and methods related to system interaction

Attribute list：

|Name		|Type				|description																	|
|--			|--						|--																		|
|appName	|String					|The application name of the editor: HBuilder X												|
|appVersion	|String					|Application main version. Can be viewed in the menu [Help]-[About]						|
|appRoot	|String					|The application root folder from which the editor is running.								|
|appData	|String					|Application data storage path													|
|clipboard	|[Clipboard](/ExtensionDocs/Api/env/Clipboard)|The system clipboard, which can be used to read the content of the clipboard and write content to the clipboard. Currently, only text format is supported	|

#### Example

```js
# Get the application name
const appName = hx.env.appName;

# Get the main version number of the application
const appVersion = hx.env.appVersion;
```
