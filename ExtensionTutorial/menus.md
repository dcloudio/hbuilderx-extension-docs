`菜单`扩展是通过`配置扩展点`来注册的，一般要关联一个`命令`。扩展方式是在package.json中`contributes`节点下增加`menus`扩展点。相关代码如下：
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

> `菜单`扩展点详细的说明请参考这里[menus](/ExtensionDocs/ContributionPoints/README.md#menus)