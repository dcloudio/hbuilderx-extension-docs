# commands

commands is the second-level module object, used to process the logic related to `command`.

`Command` contains 2 parts: unique ID and custom function, which can be registered through registerCommand or registerTextEditorCommand.

## Declare command

#### Menu: Associate commands to a menu through the `menus` extension point.

1. Declare a command through the commands extension point, and then associate it with `menus`

```json
{
    "contributes":{
        "commands":[
            {
                "command":"extension.firstExtension",
                "title":"My First Extension"
            }
        ],
        "menus":{
            "editor/context":[
                {
                    "command": "extension.firstExtension",
                    "group": "z_commands",
                    "when": "editorTextFocus"
                }
            ]
        }
    }
}
```

2. Register the command in the activation callback (`activate`) of the extension

``` javascript
    hx.commands.registerCommand('extension.firstExtension',()=>{
        hx.window.showInformationMessage("Hello My First Extension.");
    });
```

#### Custom shortcuts

User-defined shortcut keys: Users who use the extension can learn the ID of the `command` (usually declared in package.json), and then configure a shortcut key through the `custom shortcut key`.

```json
// Keybindings.json;
[
    {
		"key":"ctrl+shift+0",
		"command":"extension.firstExtension"
	}
]
```

## executeCommand

Execute the `command` with the specified id. In addition to the `commands` extended by the extension, you can also execute the built-in `commands` of HBuilderX. The complete list of built-in `commands` can be through the top menu of HBuilderX `tools`-`custom shortcut keys`, and then on the left of the opened configuration file In the side section, find all the listed `command` fields, as shown below:

<img src="/static/snapshots/commands@2x.png" style="zoom:50%" />

##### Parameter

|Parameter	    |Type	    |Description			|
|--			|--			|--				|
|command	|String		| The id of the command to be executed|

##### Returns
|Type	|Description		|
|--			|--			|
|Promise	|Promise Object|


##### Example
``` javascript
//Execute the command for extension
hx.commands.executeCommand('extension.firstExtension')
//Execute built-in commands (close all open editors)
hx.commands.executeCommand('workbench.action.closeAllEditors')
```

## registerCommand

Register a `command` with a specified id and associate a custom function

##### Parameter

|Parameter	|Type	|Description					|
|--			|--			|--						|
|commandId	|String		|`command`id				|
|handler	|Function	|The function to be executed when the command is triggered	|

##### Returns
|Type					|Description																									|
|--							|--																										|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|The destroyer of this `command` can place the object in the context.subscriptions array of the extension. When the extension is uninstalled, the `command` will be automatically cancelled.	|


##### Example
``` javascript
    let disposable = hx.commands.registerCommand('extension.firstExtension',()=>{
        hx.window.showInformationMessage("Hello My First Extension.");
    });
    context.subscriptions.push(disposable);
```
