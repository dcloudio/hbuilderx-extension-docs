# 如何注册插件CLI命令？

## 注册cli命令

在插件的入口文件中，使用`hx.commands.registerCliCommand()`中注册cli命令。

如下示例：注册了一个`test.input`命令。

```js
const hx = require("hbuilderx");

function activate(context) {
    // 注册cli命令test.input
    let disposable = hx.commands.registerCliCommand('test.input', async (params) => {
        // 解析命令行参数与输入
        let {args} = params;
        let {name} = args;
        console.log("[cli参数] name:", name);

        // 请注意这个clientID，非常重要，可以将插件内的日志输出到终端
        let client_id = params.cliconsole.clientId;
        await hx.cliconsole.log({ clientId: client_id, msg: `欢迎使用HBuilderX CLI`, status: 'Info' });
    });
    context.subscriptions.push(disposable);
};

function deactivate() {};

module.exports = {
    activate,
    deactivate
};
```

## package.json

在package.json文件`contributes`节点下，使用`clicommands`定义参数配置项。

如下示例，定义了一个`name`参数

```json
{
    "id": "test",
    "name": "test",
    "description": "test",
    "displayName": "test",
    "version": "0.0.1",
    "publisher": "test",
    "engines": {
        "HBuilderX": "^2.7.0"
    },
    "categories": [
        "Other"
    ],
    "main": "./extension.js",
    "activationEvents": [
        "*"
    ],
    "contributes": {
        "commands": [{
            "command": "test.input",
            "title": "test"
        }],
        "clicommands": [{
            "name": "test.input",
            "descption": "test string input",
            "doc": "",
            "args": [{
                "name": "name",
                "descption": "name",
                "usage": "",
                "type": "string",
                "default": "",
                "enum": ""
            }]
        }],
        "extensionDependencies": [
            "plugin-manager"
        ]
    }
}
```

**args 说明：**

|args	|介绍	|
|--	|--	|
|type	|string，boolean，enum，file	|
|enum    |多个使用&#124;分割    |
|usage	|如果参数必填，可以设置require	|


## 如何在命令行使用？

打开操作系统终端或命令行工具，进入HBuilderX安装目录，找到cli程序。

```
./cli test.input --name xxx
```

备注：MacOSX，cli所在的路径为：`/Applications/HBuilderX.app/Contents/MacOS/cli`

## 如何将插件内的日志输出到终端？

```js
let disposable = hx.commands.registerCliCommand('test.input', async (params) => {
    // 请注意这个clientID，非常重要，可以将插件内的日志输出到终端
    let client_id = params.cliconsole.clientId;
    await hx.cliconsole.log({ clientId: client_id, msg: `欢迎使用HBuilderX CLI`, status: 'Info' });
});
context.subscriptions.push(disposable);
```

注意上面的代码，先从params中解析中`client_id`，然后调用`hx.cliconsole.log`打印消息

具体请参考：[hx.cliconsole.log](/ExtensionDocs/Api/cli/cliconsole) 详细文档。
