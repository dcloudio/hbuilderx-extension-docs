### Extension directory name

The directory name of the extension is the unique ID of the extension, and cannot conflict with other extension. 

The name can only use English words and does not support separation by spaces.

### package.json

All extensions must have a `package.json` file in the root directory, which inherits the npm specification and extends some fields.

The meaning of each field is listed below:

|Field								|Type		|Required	|Eescribe																																			|
|--										|--			|--				|--																																						|
|name									|String	|True			|extension name																																|
|displayName					|String	|True			|Used to display the name in the plug-in list																	|
|version							|String	|True			|The extension version number, which will be used when checking the upgrade		|
|engines							|Object	|True			|The attribute must contain at least `HBuilderX`, and the attribute value is a compatible major version number. If the version of HBuilderX is lower than this version, the user will be prompted to upgrade HBuilderX. For example: {"HBuilderX":"^2.7.0"}.|
|description					|String	|True			|A short description of the extension, the recommended length is more than 30	|
|main									|String	|False		|extension code entry file																										|
|activationEvents			|Array	|False		|activation events list. 如为空，则表示该插件不会懒加载												|
|contributes					|Object	|False		|[Configuration extension point](/ExtensionDocs/ContributionPoints/README.md)	|
|extensionDependencies|Array	|False		|Dependent other plugin id																										|


### Example

``` json
{
    "name": "helloworld",
    "displayName":"简单的插件示例",
    "description": "简单的插件示例，用于测试插件API",
    "version": "1.0.0",
    "publisher": "coder",
    "engines": {
        "HBuilderX": "^2.7.0"
    },
    "categories": [
        "Other"
    ],
    "main": "./extension",
    "activationEvents": [
        "onCommand:extension.helloWorld",
        "onView:extensions.treedemo"
    ],
    "contributes": {},
    "extensionDependencies": [
        "foo1","bar1"
    ],
    "dependencies": {}
}

```