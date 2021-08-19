本文档将带你一步一步建立第一个插件扩展。
### 新建第一个插件扩展
在HBuilderX里通过工具栏上`新建`按钮或者快捷键`ctrl+n`打开新建菜单选择`项目`，如下图所示，选择`普通项目`-`插件扩展开发`

> 注意：插件名称只能用英文字母和数字，不支持中文和空格。

<img src="/static/snapshots/1.jpg" style="zoom:50%" />

### 运行插件
建好插件项目后，选中该项目或者打开项目下某个文件，然后点击工具栏上`运行`按钮或者快捷键`ctrl+r`打开运行菜单，选择`运行插件xxx`即可新开一个HBuilderX窗体，这个新窗体将自动载入该插件。如下图

<img src="/static/snapshots/2.jpg" style="zoom:50%" />

运行起来的效果图如下：

<img src="/static/snapshots/5.jpg" style="zoom:50%" />


插件扩展开发模板示例中在代码编辑器右键菜单上注册了一个`Hello World`菜单，**此时我们打开一个文档**，然后右键即可看到`Hello World`菜单。点击该菜单运行后会在窗口显示一个提示框。如下图

<img src="/static/snapshots/run.gif" style="zoom:50%" />

也就是在老窗体写插件代码，保存插件代码后，在新窗体预览效果。
> 修改插件代码后需要重新运行插件

### 打印日志
运行起来的插件，在老窗体的控制台，会打印日志。

开发者可以使用`console.log`、`console.error`等API，把信息打印到老窗体的调试控制台。

### 插件代码说明
#### package.json
package.json在每个插件中都必须存在，包含插件的信息和`配置扩展点`。以下是示例插件的package.json代码说明
```javascript
{
    //注意，不能直接拷贝本段代码到编辑器中，package.json目前不支持注释。本段代码加的注释只是用于解释代码。
    //插件名称，必填字段
	"name": "your extension name",
	//插件显示名称，用于展示在插件列表中的名称, 必填字段
	"displayName": "your display name",
	"description": "your extension description",
    //插件版本号，用于版本升级判断，必填字段
	"version": "0.0.0",
	"publisher": "your name",
    //需要的最低HBuilder版本号，必填字段
	"engines": {
		"HBuilderX": "^2.6.8"
	},
    //插件分类
	"categories": [
		"Other"
	],
    //插件的程序入口js文件，在插件激活的时候调用
	"main": "./extension",
    //插件激活事件注册，当以下事件发生时，才会激活插件。
	"activationEvents": [
        //onCommand表示将要执行某个command的时触发该事件，本示例表示只有要执行`extension.helloWorld`的`命令`时本插件才会激活
		"onCommand:extension.helloWorld"
	],
    //配置扩展点
	"contributes": {
        //`命令`扩展点，用于声明一个`命令`,所有扩展的`命令`必须通过该扩展点声明
		"commands": [{
            //`命令`唯一标识
			"command": "extension.helloWorld",
            //`命令`的名称，当关联到菜单时，如果未配置菜单名称，会用该名称。
			"title": "Hello World"
		}],
        //`菜单`扩展点，用于注册一个`菜单`
		"menus": {
            //编辑器右键菜单
			"editor/context": [
				{
                    //关联的`命令`唯一标识
					"command": "extension.helloWorld",
                    //注册到菜单的位置
					"group": "z_commands",
                    //在什么条件下显示
					"when": "editorTextFocus"
				},
				{
                    //不关联`命令`的菜单扩展代表一个分割线
					"group": "z_commands"
				}
			]
		}
	},
	"dependencies": {}
}

```

#### 插件入口文件
本示例的插件入口文件是extension.js,插件入口文件必须要exports`activate`方法,该方法在插件激活的时候调用。代码说明如下：
```javascript
var hx = require("hbuilderx");
//该方法将在插件激活的时候调用
function activate(context) {
	let disposable = hx.commands.registerCommand('extension.helloWorld', () => {
		hx.window.showInformationMessage('你好，这是我的第一个插件扩展。');
		console.log("Hello My First HBuilderX Extension.");
	});
	//订阅销毁钩子，插件禁用的时候，自动注销该command。
	context.subscriptions.push(disposable)
}
//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

}
module.exports = {
	activate,
	deactivate
}

```