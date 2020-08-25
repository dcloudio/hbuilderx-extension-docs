`命令` 指的是在插件中注册的自定义 function ， `命令` 触发时将调用该 function 。注册一个新的 `命令` 分为2个步骤：

1 . 在 package.json 中通过 `commands` 配置扩展点声明该 `命令` 。相关代码如下：

```json
    "contributes": {
		"commands": [{
			"command": "extension.helloWorld",
			"title": "Hello World"
		}]
    }
```

2 . 在插件激活的时候通过 API hx.commands.registerCommand 或者 hx.commands.registerTextEditorCommand 来实现上面声明的 `命令` ，注意 `命令标识` 一定要一致。相关代码如下：

```javascript
    let disposable = hx.commands.registerCommand('extension.helloWorld', () => {
            //do something
        });
    context.subscriptions.push(disposable)
```
