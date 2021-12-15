# commands

A command is a function with a unique identifier. The function is sometimes also called command handler.

`Command` contains 2 parts: unique ID and custom function. Commands can be added to the editor using the registerCommand and registerTextEditorCommand functions.

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

2. Register the command in the activation callback (`activate`) of the extension. This is a sample that registers a command handler and adds an entry for that command to the palette. First register a command handler with the identifier.

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
|command	|String		| Identifier of the command to execute.|

##### Returns
|Type	|Description		|
|--			|--			|
|Promise	| Promise Object |


##### Example
``` javascript
//Execute the command for extension
hx.commands.executeCommand('extension.firstExtension')
//Execute built-in commands (close all open editors)
hx.commands.executeCommand('workbench.action.closeAllEditors')
```

## registerCommand

Registers a command that can be invoked via a keyboard shortcut, a menu item, an action, or directly.

##### Parameters

|Parameter	|Type	|Description					|
|--			|--			|--						|
|commandId	|String		|A unique identifier for the command.				|
|handler	|Function	|A command handler function.	|

##### Returns
|Type					|Description																									|
|--							|--																										|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	|Disposable which unregisters this command on disposal.	|


##### Example
``` javascript
    let disposable = hx.commands.registerCommand('extension.firstExtension',()=>{
        hx.window.showInformationMessage("Hello My First Extension.");
    });
    context.subscriptions.push(disposable);
```
