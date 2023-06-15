HBuilderX API根对象可以通过require('hbuilderx')引入。
```javascript
const hx = require('hbuilderx')
```
以下列出目前可用的API列表

|插件API											|详情																																|
|--													|--																																	|
|commands											|commands二级模块对象，用于处理和`命令`相关的逻辑[详情](/ExtensionDocs/Api/commands)												|
|hx.languages.createDiagnosticCollection()			|创建一个问题列表，可用于文档校验时在文档出错区域显示波浪线标识问题[详情](/ExtensionDocs/Api/languages/createDiagnosticCollection)	|
|hx.languages.registerInlineCompletionItemProvider()|注册行内代码提示程序[详情](/ExtensionDocs/Api/languages/registerInlineCompletionItemProvider)										|

#### api:windows
|插件API									|详情																											|
|--											|--																												|
|hx.window.showErrorMessage()				|在窗口右下角显示错误消息通知框[详情](/ExtensionDocs/Api/windows/Message?id=showerrormessage)					|
|hx.window.showInformationMessage()			|在窗口右下角显示消息通知框[详情](/ExtensionDocs/Api/windows/Message?id=showinformationmessage)					|
|hx.window.showWarningMessage()				|在窗口右下角显示警告消息通知框[详情](/ExtensionDocs/Api/windows/Message?id=showwarningmessage)					|
|hx.window.showMessageBox()					|在窗口显示可供选择的对话框[详情](/ExtensionDocs/Api/windows/showMessageBox)									|
|hx.window.setStatusBarMessage()			|设置状态栏消息[详情](/ExtensionDocs/Api/windows/StatusBar?id=setstatusbarmessage)								|
|hx.window.clearStatusBarMessage()			|清空状态栏消息[详情](/ExtensionDocs/Api/windows/StatusBar?id=clearstatusbarmessage)							|
|hx.window.showQuickPick()					|在窗口中间弹出一个可搜索的建议选择列表[详情](/ExtensionDocs/Api/windows/showQuickPick)							|
|hx.window.getActiveTextEditor()			|获取当前激活的编辑器[详情](/ExtensionDocs/Api/windows/getActiveTextEditor)										|
|hx.window.showInputBox()					|在窗口中间居中弹出一个输入框，获取用户输入[详情](/ExtensionDocs/Api/windows/showInputBox)						|
|hx.window.createOutputChannel()			|创建一个输出控制台通道，可用于在控制台输出文本内容[详情](/ExtensionDocs/Api/windows/createOutputChannel)		|
|hx.window.createTreeView()					|[详情](/ExtensionDocs/Api/windows/createTreeView)																|
|hx.window.createWebView()					|[详情](/ExtensionDocs/Api/windows/createWebView)																|
|hx.window.createWebViewDialog()			|创建基于WebView页面的对话框[详情](/ExtensionDocs/Api/windows/createWebViewDialog)								|
|hx.window.showView()						|切换指定viewId的WebView控件视图[详情](/ExtensionDocs/Api/windows/showView)										|
|hx.window.registerUriHandler()				|注册一个依赖hbuilderx协议的自定义网络请求处理器(schema)[详情](/ExtensionDocs/Api/windows/registerUriHandler)	|
|hx.window.registerCustomEditorProvider()	|注册自定义编辑器[详情](/ExtensionDocs/Api/windows/registerCustomEditorProvider)								|
|hx.window.createStatusBarItem()			|创建一个状态栏元素[详情](/ExtensionDocs/Api/windows/createStatusBarItem)										|

#### api:workspace
|插件API									|详情																										|
|--											|--																											|
|hx.workspace.applyEdit()					|根据指定的WorkspaceEdit对象编辑文档[详情](/ExtensionDocs/Api/workspace/applyEdit)							|
|hx.workspace.copyFileWithPrompt()			|将指定文件或文件夹拷贝到目标文件夹下[详情](/ExtensionDocs/Api/workspace/copyFileWithPrompt)				|
|hx.workspace.getConfiguration()			|根据指定的section获取对应的配置[详情](/ExtensionDocs/Api/workspace/getConfiguration)						|
|hx.workspace.getWorkspaceFolders()			|获取项目管理器下所有的项目对象（不包含已关闭项目）[详情](/ExtensionDocs/Api/workspace/getWorkspaceFolders)	|
|hx.workspace.getWorkspaceFolder()			|获取某个文件所在的项目[详情](/ExtensionDocs/Api/workspace/getWorkspaceFolder)								|
|hx.workspace.openTextDocument()			|通过指定的uri打开一个文档文件[详情](/ExtensionDocs/Api/workspace/openTextDocument)							|
|hx.workspace.onDidChangeConfiguration()	|[详情](/ExtensionDocs/Api/workspace/onDidChangeConfiguration)												|
|hx.workspace.onDidChangeWorkspaceFolders()	|[详情](/ExtensionDocs/Api/workspace/onDidChangeWorkspaceFolders)											|
|hx.workspace.onDidChangeTextDocument()		|[详情](/ExtensionDocs/Api/workspace/onDidChangeTextDocument)												|
|hx.workspace.onDidSaveTextDocument()		|[详情](/ExtensionDocs/Api/workspace/onDidSaveTextDocument)													|
|hx.workspace.onDidOpenTextDocument()		|[详情](/ExtensionDocs/Api/workspace/onDidOpenTextDocument)													|
|hx.workspace.onWillSaveTextDocument()		| 文档即将要保存的事件 [详情](/ExtensionDocs/Api/workspace/onWillSaveTextDocument)							|

#### api:env
|插件API				|详情																			|
|--						|--																				|
| env属性				| [详情](/ExtensionDocs/Api/env/readme)											|
| hx.authorize.login()	|[详情](/ExtensionDocs/Api/env/authorize)										|
| hx.env.clipboard		|读取剪切板内容和写入内容到剪切板    [详情](/ExtensionDocs/Api/env/Clipboard)	|
| hx.env.openExternal()	| 打开一个外部链接[详情](/ExtensionDocs/Api/env/openExternal)					|
