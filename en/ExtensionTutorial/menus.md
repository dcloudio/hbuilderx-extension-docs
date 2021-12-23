Adding `menu` extension will add a `menus` section and associate a `command`. The method is to add the `menus` sub-node under the `contributes` node in package.json. The code is as follows:
```json
    "contributes": {
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
	}
```

> For details, please refer to here [menus](/ExtensionDocs/ContributionPoints/README.md#menus)
