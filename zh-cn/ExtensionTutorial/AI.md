### 实现行内代码提示

##### 通过registerInlineCompletionItemProvider实现行内代码提示

> 从HBuilderX 3.8.5及以上版本

```javascript
const inlineProvider = (document, position, context, token) => {
    // 根据document和position确定上下文。
    // 传递给大模型需要的数据，获取返回值
    // 将返回值格式化成插件所需格式后返回。
    return {
        items: [{
            insertText: 'insertText'
        }]
    }
}
const disposable = hx.languages.registerInlineCompletionItemProvider(
    [{
        language: 'javascript'
    }], {
        provideInlineCompletionItems: inlineProvider
    },
)
context.subscriptions.push(disposable)

```

##### 通过createStatusBarItem创建状态栏元素

> 从HBuilderX 3.8.5及以上版本

1. 状态栏显示文字

```javascript
const myStatusBarItem = hx.window.createStatusBarItem(
    hx.StatusBarAlignment.Right,
    100,
)
myStatusBarItem.text = '数据转换中'
# 显示状态栏项目
myStatusBarItem.show()
```
2. 状态栏显示自定义icon+文字

package.json添加配置点
```package.json
"icons": {
	"loading": {
		"description": "Loading Icon",
		"default": {
			"fontPath": "./icons.ttf",
			"fontCharacter": "\\eb19"
		}
	}
}
```

```javascript
const myStatusBarItem = hx.window.createStatusBarItem(
    hx.StatusBarAlignment.Right,
    100,
)
myStatusBarItem.text = '$(loading) 数据转换中'
myStatusBarItem.show()
```

### 实现AI Chat

##### 编写一个Chat页面

通过前端html实现一个Chat的聊天主界面

##### 通过window.createWebView创建一个视图，集成上一步创建的聊天界面

[创建视图](https://hx.dcloud.net.cn/ExtensionTutorial/views?id=webview)


### 编辑器内容操作

##### 使用AI给编辑器的代码添加注释

```javascript
hx.commands.registerCommand('virtualAI.commen', async () => {
    // 获取当前激活的editor
	const activeTextEditor = await hx.window.getActiveTextEditor()
	const selection = activeTextEditor.selection
	const document = activeTextEditor.document
    // 获取选中的内容
	const selectionText = document.getText(selection)
	const languageId = document.languageId
    // 提供一个AI模型计算的方法
	const virtualAI = ({
		selectionText,
		languageId
	}) => {
		return `
		// 你当前语言是${languageId}
		// 数据模型分析结果为...
		${selectionText}
		`
	}
	const replaceText = virtualAI({
		selectionText,
		languageId
	})
    // 将AI计算的值替换选中的文本
	activeTextEditor.edit((async res => {
		const selection = activeTextEditor.selection;
		res.replace(selection, replaceText)
	}));
});
```

##### 将编辑器代码数据发送给AI Chat，帮助分析代码

```javascript
const activeTextEditor = await hx.window.getActiveTextEditor()
const selection = activeTextEditor.selection
const document = activeTextEditor.document
// 选中内容的文本内容
const selectionText = document.getText(selection)
// 当前文档的语言
const languageId = document.languageId
// 发送数据给视图，webview 是上面创建的视图
webview.postMessage({
	selectionText,
	languageId
});
// webview接受到数据后发送给AI Chat获取结果
```
##### 将AI Chat回答的结果插入到编辑器中

```javascript
// 接收视图数据，webview 是上面创建的视图
webview.onDidReceiveMessage(async ({
	text
}) => {
	const activeTextEditor = await hx.window.getActiveTextEditor()
    // 将结果插入到当前激活的editor上
	activeTextEditor.edit((async res => {
		const selection = activeTextEditor.selection;
		res.insert(selection, text)
	}));
});
```

### 插件配置

##### 设置可视化插件配置项

[configuration扩展点](https://hx.dcloud.net.cn/ExtensionDocs/ContributionPoints/README?id=configuration)

##### 设置插件的全局状态

相比vscode在HBuilderX中暂时不能通过context.globalState设置插件的全局状态，建议维护一个配置文件写到`${hx.env.appData}/extensions/${pluginId}/pref.json`中，来维护插件的全局状态。

