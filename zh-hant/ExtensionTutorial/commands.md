`命令`指的是在插件中註冊的自定義function,`命令`觸發時將調用該function。註冊一個新的`命令`分爲2個步驟：

1 . 在package.json中通過`commands`配置擴展點聲明該`命令`，相關代碼如下：

```json
    "contributes": {
		"commands": [{
			"command": "extension.helloWorld",
			"title": "Hello World"
		}]
    }
```

2 . 在插件激活的時候通過API hx.commands.registerCommand或者hx.commands.registerTextEditorCommand來實現上面聲明的`命令`，注意`命令標識`一定要一致。相關代碼如下：

```javascript
    let disposable = hx.commands.registerCommand('extension.helloWorld', () => {
            //do something
        });
    context.subscriptions.push(disposable)
```
