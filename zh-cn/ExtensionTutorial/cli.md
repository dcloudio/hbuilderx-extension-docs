# 如何注册插件CLI命令？

## 注册cli命令

在插件的入口文件中，使用`hx.commands.registerCliCommand()`中注册cli命令。

如下示例：注册了一个`test.input`命令。

```js
const hx = require("hbuilderx");

function activate(context) {
    // 注册cli命令test.input
    let disposable = hx.commands.registerCliCommand('test.input', (params) => {
        // 解析命令行参数与输入
        let {args} = params;
        let {name} = args;
        console.log("[cli参数] name:", name);
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

**说明：**

* args.type的值域：string，boolean，enum，file
* enum示例:  a | b | c

## 如何在命令行使用？

打开操作系统终端或命令行工具，进入HBuilderX安装目录，找到cli程序。

```
./cli test.input --name xxx
```

备注：MacOSX，cli所在的路径为：`/Applications/HBuilderX.app/Contents/MacOS/cli`
