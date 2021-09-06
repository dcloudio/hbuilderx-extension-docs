## Create Extension

In HBuilderX, Click the `New` button on the toolbar or the shortcut key `ctrl+n` to open the new menu and select `Project`.

> Note: The plug-in name can only use English letters and numbers, and spaces are not supported

<img src="/static/snapshots/Plug-in-development/create_extension_en.png" style="zoom:45%;border: 1px solid #eee;border-radius: 5px;" />

## Run Extension

1. After creating the plug-in project, select the project or open a file under the project
2. Click the `Run` button on the toolbar or the shortcut key `ctrl+r` to open the run menu
3. Select `Run This Extension: xxx` to open a new HBuilderX form, and this new form will automatically load the plugin.

<img src="/static/snapshots/Plug-in-development/start_run_extension_en.png" style="zoom:45%;border: 1px solid #eee;border-radius: 5px;" />

The effect diagram of the plug-in operation is as follows:

<img src="/static/snapshots/Plug-in-development/show_run_extension_en.jpg" style="zoom:45%;border: 1px solid #eee;border-radius: 20px;" />


Plug-in extension development template example, register a `Hello World` menu on the right-click menu of the code editor.

<img src="/static/snapshots/Plug-in-development/extension_en_1.png" style="zoom:45%;border: 1px solid #eee;border-radius: 20px;" />

**At this time, we open a document**, and then right-click to see the `Hello World` menu. After clicking the menu to run, a prompt box will be displayed in the window.

<img src="/static/snapshots/Plug-in-development/extension_en_2.jpg" style="zoom:45%;border: 1px solid #eee;border-radius: 20px;" />

> Note: After modifying the plug-in code, you need to re-run the extension.

## Log

The running extension will print the log in the console of the old Window.

You can use APIs such as `console.log` and `console.error` to print information to the debugging console of the old Window.

## extension description

#### package.json

`package.json` must exist in every extension, contains extension information and `configuration extension points`.

The following is the package.json code description of the sample extension.

> Note: that you cannot directly copy this code into the editor, and package.json currently does not support comments. The comments in this code are only used to explain the code.

```javascript
{
	"name": "your extension name",
	"displayName": "your display name",
	"description": "your extension description",
	"version": "0.0.0",
	"publisher": "your name",
	"engines": {
		"HBuilderX": "^2.6.8"
	},
	"categories": [
		"Other"
	],
	"main": "./extension",
	"activationEvents": [
		"onCommand:extension.helloWorld"
	],
	"contributes": {
		"commands": [{
			"command": "extension.helloWorld",
			"title": "Hello World"
		}],
		"menus": {
			"editor/context": [
				{
					"command": "extension.helloWorld",
					"group": "z_commands",
					"when": "editorTextFocus"
				},
				{
					"group": "z_commands"
				}
			]
		}
	},
	"dependencies": {}
}

```

#### extension entry file

The plug-in entry file in this example is `extension.js`, and the plug-in entry file must have the exports`activate` method, which is called when the plug-in is activated.

```javascript
var hx = require("hbuilderx");

function activate(context) {
	let disposable = hx.commands.registerCommand('extension.helloWorld', () => {
		hx.window.showInformationMessage('你好，这是我的第一个插件扩展。');
		console.log("Hello My First HBuilderX Extension.");
	});
	context.subscriptions.push(disposable)
};

function deactivate() {

};

module.exports = {
	activate,
	deactivate
}

```