`命令`指的是在插件中注册的自定义function,`命令`触发时将调用该function。注册一个新的`命令`分为2个步骤：

1 . 在package.json中通过`commands`配置扩展点声明该`命令`，相关代码如下：

```json
    "contributes": {
		"commands": [{
			"command": "extension.helloWorld",
			"title": "Hello World"
		}]
    }
```

2 . 在插件激活的时候通过API hx.commands.registerCommand或者hx.commands.registerTextEditorCommand来实现上面声明的`命令`，注意`命令标识`一定要一致。相关代码如下：

```javascript
    let disposable = hx.commands.registerCommand('extension.helloWorld', () => {
            //do something
        });
    context.subscriptions.push(disposable)
```
