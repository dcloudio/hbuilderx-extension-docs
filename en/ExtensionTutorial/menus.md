Adding `menu` extension will add a `menus` section and associate a `command`.

The method is to add the `menus` sub-node under the `contributes` node in package.json. 

The code is as follows:
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


### 如何注册二级菜单？

关于二级菜单的注册，请参考[二级菜单](/ExtensionDocs/ContributionPoints/README.md#注册二级菜单)
