### Extension directory name

The directory name of the extension is the unique ID of the extension, and cannot conflict with other extension. The name can only use English words and does not support separation by spaces.

### package.json

All extensions must have a package.json file in the root directory, which inherits the npm specification and extends some fields. The meaning of each field is listed below:

The meaning of each field is listed below:

|Field								|Type		|Required	|Description																																			|
|--										|--			|--				|--																																						|
|name									|String	|True			|Extension name																																|
|displayName					|String	|True			|Used to display the name in the extension list																	|
|version							|String	|True			|The extension version number, which will be used when checking the upgrade		|
|engines							|Object	|True			|The attribute must contain at least `HBuilderX`, and the attribute value is a compatible major version number. If the version of HBuilderX is lower than this version, the user will be prompted to upgrade HBuilderX. For example: {"HBuilderX":"^2.7.0"}.|
|description					|String	|True			|A short description of the extension, the recommended length is less than 30	|
|main									|String	|False		|Extension code entry file, configuration type extension can be left blank																								|
|activationEvents			|Array	|False		|activation events list. If it is empty, it means that the extension will not load lazily												|
|contributes					|Object	|False		|[Configuration extension point](/ExtensionDocs/ContributionPoints/README.md)	|
|extensionDependencies|Array	|False		|The id of other extensions that this extension depends on																										|


### Example

``` json
{
    "name": "helloworld",
    "displayName":"Simple Extension Example",
    "description": "Simple extension example for testing extension API",
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


### Note

The plugin root directory package.json contains many fields, some of which are not open to developers.

Recently, some plugin package.json files have been configured with fields that HBuilderX has not opened, such as `"__private": true`. This field indicates that the plugin belongs to the HBuilderX `built-in plugins` and will not be displayed in the HBuilderX menu [Settings - Plugin Configuration].

**All plugins developed by developers should be displayed in the HBuilderX menu [Settings - Plugin Configuration], allowing users to uninstall them.**