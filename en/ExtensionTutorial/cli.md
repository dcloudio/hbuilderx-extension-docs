# How to Register Plugin CLI Commands?

## Register CLI Commands

In the entry file of the plugin, use `hx.commands.registerCliCommand()` to register CLI commands.

The following example: registers a `test.input` command.

```js
const hx = require("hbuilderx");

function activate(context) {
    // Register CLI command test.input
    let disposable = hx.commands.registerCliCommand('test.input', async (params) => {
        // Parse command line arguments and input
        let {args} = params;
        let {name} = args;
        console.log("[CLI args] name:", name);

        // Please note this clientID is very important, it can output logs from the plugin to the terminal
        let client_id = params.cliconsole.clientId;
        await hx.cliconsole.log({ clientId: client_id, msg: `Welcome to HBuilderX CLI`, status: 'Info' });
    });
    context.subscriptions.push(disposable);
};

function deactivate() {};

module.exports = {
    activate,
    deactivate
};
```

## package.json

In the package.json file under the `contributes` node, use `clicommands` to define parameter configuration items.

The following example defines a `name` parameter

```json
{
    "id": "test",
    "name": "test",
    "description": "test",
    "displayName": "test",
    "version": "0.0.1",
    "publisher": "test",
    "engines": {
        "HBuilderX": "^2.7.0"
    },
    "categories": [
        "Other"
    ],
    "main": "./extension.js",
    "activationEvents": [
        "*"
    ],
    "contributes": {
        "commands": [{
            "command": "test.input",
            "title": "test"
        }],
        "clicommands": [{
            "name": "test.input",
            "descption": "test string input",
            "doc": "",
            "args": [{
                "name": "name",
                "descption": "name",
                "usage": "",
                "type": "string",
                "default": "",
                "enum": ""
            }]
        }],
        "extensionDependencies": [
            "plugin-manager"
        ]
    }
}
```

**args Description:**

|args	|Description	|
|--	|--	|
|type	|string, boolean, enum, file	|
|enum    |Use &#124; to separate multiple values    |
|usage	|If the parameter is required, you can set it to require	|


## How to Use from Command Line?

Open the operating system terminal or command line tool, navigate to the HBuilderX installation directory, and find the cli program.

```
./cli test.input --name xxx
```

Note: On MacOSX, the cli path is: `/Applications/HBuilderX.app/Contents/MacOS/cli`

## How to Output Plugin Logs to Terminal?

```js
let disposable = hx.commands.registerCliCommand('test.input', async (params) => {
    // Please note this clientID is very important, it can output logs from the plugin to the terminal
    let client_id = params.cliconsole.clientId;
    await hx.cliconsole.log({ clientId: client_id, msg: `Welcome to HBuilderX CLI`, status: 'Info' });
});
context.subscriptions.push(disposable);
```

Note the code above, first parse `client_id` from params, then call `hx.cliconsole.log` to print messages

For details, please refer to: [hx.cliconsole.log](/ExtensionDocs/Api/cli/cliconsole) documentation.
