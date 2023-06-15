The HBuilderX API root object can be introduced through require('hbuilderx').

```javascript
const hx = require('hbuilderx')
```

This page lists all available HBuilderX APIs.

|API	|Details	|
|--	|--	|
|commands	|a command is a function with a unique identifier. [Details](/ExtensionDocs/Api/commands)	|
|hx.languages.createDiagnosticCollection()			|Create a diagnostics collection that can be used to display wavy lines in the error area of ​the document to identify the details of the problem during document verification. [Details](/ExtensionDocs/Api/languages/createDiagnosticCollection)	|
|hx.languages.registerInlineCompletionItemProvider()|注册行内代码提示程序[详情](/ExtensionDocs/Api/languages/registerInlineCompletionItemProvider)																																						|

#### api:windows
|API									|Description																											|
|--											|--																												|
|hx.window.showErrorMessage()				|Show an error message in the lower right corner of the window. [Details](/ExtensionDocs/Api/windows/Message?id=showerrormessage)					|
|hx.window.showInformationMessage()			|Show an information message in the lower right corner of the window. [Details](/ExtensionDocs/Api/windows/Message?id=showinformationmessage)					|
|hx.window.showWarningMessage()				|Show a warning message in the lower right corner of the window. [Details](/ExtensionDocs/Api/windows/Message?id=showwarningmessage)					|
|hx.window.showMessageBox()					|Show a dialog box for selection in the window. [Details](/ExtensionDocs/Api/windows/showMessageBox)									|
|hx.window.setStatusBarMessage()			|Set status bar message. [Details](/ExtensionDocs/Api/windows/StatusBar?id=setstatusbarmessage)								|
|hx.window.clearStatusBarMessage()			|Clear status bar message. [Details](/ExtensionDocs/Api/windows/StatusBar?id=clearstatusbarmessage)							|
|hx.window.showQuickPick()					|Display a list of searchable options that pops up in the middle of the window. [Details](/ExtensionDocs/Api/windows/showQuickPick)							|
|hx.window.getActiveTextEditor()			|Get the currently active editor. [Details](/ExtensionDocs/Api/windows/getActiveTextEditor)										|
|hx.window.showInputBox()					|Open an input box to request user input. [Details](/ExtensionDocs/Api/windows/showInputBox)						|
|hx.window.createOutputChannel()			|Creates an output channel which can be used to output text content on the console. [Details](/ExtensionDocs/Api/windows/createOutputChannel)		|
|hx.window.createTreeView()					|Create a TreeView for the view contributed using the extension point views. [Details](/ExtensionDocs/Api/windows/createTreeView)																|
|hx.window.createWebView()					|Create and show a webview panel. [Details](/ExtensionDocs/Api/windows/createWebView)																|
|hx.window.createWebViewDialog()			|Create dialog based on WebView page. [Details](/ExtensionDocs/Api/windows/createWebViewDialog)								|
|hx.window.showView()						|Switch the WebViews by the specified viewId. [Details](/ExtensionDocs/Api/windows/showView)										|
|hx.window.registerUriHandler()				|Register a custom network request handler that relies on the hbuilderx protoco. [Details](/ExtensionDocs/Api/windows/registerUriHandler)	|
|hx.window.registerCustomEditorProvider()	|Register a custom editor. [Details](/ExtensionDocs/Api/windows/registerCustomEditorProvider)								|
|hx.window.createStatusBarItem()			|创建一个状态栏元素[详情](/ExtensionDocs/Api/windows/createStatusBarItem)										|

#### api:workspace
|API									|Description																										|
|--											|--																											|
|hx.workspace.applyEdit()					|Edit the document according to the specified WorkspaceEdit object. [Details](/ExtensionDocs/Api/workspace/applyEdit)							|
|hx.workspace.copyFileWithPrompt()			|Copy the specified file or folder to the target folder. [Details](/ExtensionDocs/Api/workspace/copyFileWithPrompt)				|
|hx.workspace.getConfiguration()			|Get a workspace configuration object. [Details](/ExtensionDocs/Api/workspace/getConfiguration)						|
|hx.workspace.getWorkspaceFolders()			|Get all project objects under the project explorer (without closed projects). [Details](/ExtensionDocs/Api/workspace/getWorkspaceFolders)	|
|hx.workspace.getWorkspaceFolder()			|Get the project where a file is located. [Details](/ExtensionDocs/Api/workspace/getWorkspaceFolder)								|
|hx.workspace.openTextDocument()			|Open a document file through the specified uri. [Details](/ExtensionDocs/Api/workspace/openTextDocument)							|
|hx.workspace.onDidChangeConfiguration()	|An event that is emitted when the configuration changed. [Details](/ExtensionDocs/Api/workspace/onDidChangeConfiguration)												|
|hx.workspace.onDidChangeWorkspaceFolders()	|An event that is emitted when a workspace folder is added or removed. [Details](/ExtensionDocs/Api/workspace/onDidChangeWorkspaceFolders)											|
|hx.workspace.onDidChangeTextDocument()		|An event that is emitted when a text document is changed. [Details](/ExtensionDocs/Api/workspace/onDidChangeTextDocument)												|
|hx.workspace.onDidSaveTextDocument()		|An event that is emitted when a text document is saved to disk. [Details](/ExtensionDocs/Api/workspace/onDidSaveTextDocument)													|
|hx.workspace.onDidOpenTextDocument()		|An event that is emitted when a text document is opened. [Details](/ExtensionDocs/Api/workspace/onDidOpenTextDocument)													|
|hx.workspace.onWillSaveTextDocument()		| An event that is emitted when a text document will be saved to disk. [Details](/ExtensionDocs/Api/workspace/onWillSaveTextDocument)							|

#### api:env
|API				|Description																			|
|--						|--																				|
| env				| [Details](/ExtensionDocs/Api/env/readme)											|
| hx.authorize.login()	|[Details](/ExtensionDocs/Api/env/authorize)										|
| hx.env.clipboard		|Read or write content to the System clipboard. [Details](/ExtensionDocs/Api/env/Clipboard)	|
| hx.env.openExternal()	| Open an external link. [Details](/ExtensionDocs/Api/env/openExternal)					|
