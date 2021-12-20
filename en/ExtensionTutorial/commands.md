`Command` refers to the custom function registered in the extension, which will be called when the `command` is triggered. Registering a new `command` is divided into 2 steps:

1 . Declare the `command` through the `commands` configuration  point in package.json, the relevant code is as follows:

```json
    "contributes": {
		"commands": [{
			"command": "extension.helloWorld",
			"title": "Hello World"
		}]
    }
```

2 . When the extensionssds is activated, use the API hx.commands.registerCommand or hx.commands.registerTextEditorCommand to implement the `command` declared above. Note that the `command ID` must be consistent. The relevant code is as follows:

```javascript
    let disposable = hx.commands.registerCommand('extension.helloWorld', () => {
            //do something
        });
    context.subscriptions.push(disposable)
```
