### Sass

Sass is a CSS extension that allows you to use variables , nested rules , mixins , inline imports and other functions based on CSS syntax to make CSS more powerful and elegant.. 

Using Sass and the Compass style library can help better organize and manage style files and develop projects more efficiently.

[sass docs](http://en.sass.hk/docs/)

### Install

In HBuilderX, the use of `scss/sass` requires the installation of the `compile-node-sass compilation plugin`.

[compile-node-sass Download](https://ext.dcloud.net.cn/plugin?id=2046)

### usage

- The uni-app project will automatically compile files that use sass。
- Compile the sass file separately. Select the sass file, click the right-click menu -> external command -> sass -> compile scss/sass.

<img src="/static/snapshots/tutorial/menu_tool/project-explorer_menu_en.png"  class="hd-img"/>

### Configuration file

The configuration file of compile-node-sass is package.json.

Click the menu [Tools -> External Command Setting -> compile-node-sass -> package.json] to open the package.json file.

<img src="/static/snapshots/tutorial/menu_tool/menu_sass_en.png"  class="hd-img"/>

```json
{
	"name": "sass",
	"id": "compile-node-sass",
	"version": "0.0.7",
	"displayName": "%displayName%",
	"description": "%description%",
	"engines": {
		"HBuilderX": "^3.2.6"
	},
	"external": {
		"type": "node",
		"programPath": "${pluginPath}",
		"executable": "/node_modules/.bin/node-sass",
		"programName": "node-sass-china",
		"commands": [
			{
				"id": "SASS_COMPILE",
				"name": "%SASS_COMPILE.name%",
				"command": [
					"${programPath}",
					"${file}",
					"${fileBasename}.css"
				],
				"extensions": "scss,sass",
				"key": "",
				"showInParentMenu": false,
				"onDidSaveExecution": false
			}
		]
	},
	"dependencies": {
		"node-sass-china": "^4.7.2"
	},
	"extensionDependencies": [
		"npm"
	]
}

```
### shortcut keys

Click the menu [Tools -> External Command Setting -> compile-node-sass -> package.json] to open the package.json file.

Open package.json and modify the key value to configure the shortcut key; this external command can be run directly through this shortcut key.

For example: `"key": "ctrl + alt + C"`
  
### Save and compile now
  
Click the menu [Tools -> External Command Setting -> compile-node-sass -> package.json] to open the package.json file.

The `onDidSaveExecution` in the configuration file indicates whether to trigger compilation when saving, and the default is false.

Modify `onDidSaveExecution` to `true`.