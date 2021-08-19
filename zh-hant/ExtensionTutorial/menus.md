`菜單`擴展是通過`配置擴展點`來註冊的，一般要關聯一個`命令`。擴展方式是在package.json中`contributes`節點下增加`menus`擴展點。相關代碼如下：
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

> `菜單`擴展點詳細的說明請參考這裏[menus](/ExtensionDocs/ContributionPoints/README.md#menus)