### Plug-in directory name

The directory name of the plug-in is the unique ID of the plug-in, and cannot conflict with other plug-ins. The name can only use English words and does not support separation by spaces.

### package.json

All plug-ins must have a package.json file in the root directory, which inherits the npm specification and extends some fields. The meaning of each field is listed below:

The meaning of each field is listed below:

|Field								|Type		|Required	|Description																																			|
|--										|--			|--				|--																																						|
|name									|String	|True			|plug-in name																																|
|displayName					|String	|True			|Used to display the name in the plug-in list																	|
|version							|String	|True			|The plug-in version number, which will be used when checking the upgrade		|
|engines							|Object	|True			|The attribute must contain at least `HBuilderX`, and the attribute value is a compatible major version number. If the version of HBuilderX is lower than this version, the user will be prompted to upgrade HBuilderX. For example: {"HBuilderX":"^2.7.0"}.|
|description					|String	|True			|A short description of the plug-in, the recommended length is less than 30	|
|main									|String	|False		|Plug-in code entry file, configuration type plug-in can be left blank																								|
|activationEvents			|Array	|False		|activation events list. If it is empty, it means that the plug-in will not load lazily												|
|contributes					|Object	|False		|[Plug-in configuration extension point](/ExtensionDocs/ContributionPoints/README.md)	|
|extensionDependencies|Array	|False		|The id of other plugins that this plugin depends on																										|


### Example

``` json
{
    "name": "helloworld",
    "displayName":"Simple Plug-in Example",
    "description": "Simple plug-in example for testing plug-in API",
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
