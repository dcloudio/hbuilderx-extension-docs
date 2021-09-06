The HBuilderX API root object can be introduced through require('hbuilderx').

```javascript
const hx = require('hbuilderx')
```

This page lists all HBuilderX APIs available to extension authors.

|API	|Details	|
|--	|--	|
|commands	|Used to process logic related to `command`. [Details](/ExtensionDocs/Api/commands)	|
|hx.languages.createDiagnosticCollection()	|Create a diagnostics collection. [Details](/ExtensionDocs/Api/languages/createDiagnosticCollection)		|

#### api:windows
|API									|Description																											|
|--											|--																												|
|hx.window.showErrorMessage()				|Show an error message. [Details](/ExtensionDocs/Api/windows/Message?id=showerrormessage)					|
|hx.window.showInformationMessage()			|Show an information message. [Details](/ExtensionDocs/Api/windows/Message?id=showinformationmessage)					|
|hx.window.showWarningMessage()				|Show a warning message. [Details](/ExtensionDocs/Api/windows/Message?id=showwarningmessage)					|
|hx.window.showMessageBox()					|Show a dialog box for selection in the window. [Details](/ExtensionDocs/Api/windows/showMessageBox)									|
|hx.window.setStatusBarMessage()			|Set a message to the status bar. [Details](/ExtensionDocs/Api/windows/StatusBar?id=setstatusbarmessage)								|
|hx.window.clearStatusBarMessage()			|Clear the status bar message. [Details](/ExtensionDocs/Api/windows/StatusBar?id=clearstatusbarmessage)							|
|hx.window.showQuickPick()					|Shows a selection list allowing multiple selections. [Details](/ExtensionDocs/Api/windows/showQuickPick)							|
|hx.window.getActiveTextEditor()			|Get the currently active editor. [Details](/ExtensionDocs/Api/windows/getActiveTextEditor)										|
|hx.window.showInputBox()					|Opens an input box to ask the user for input. [Details](/ExtensionDocs/Api/windows/showInputBox)						|
|hx.window.createOutputChannel()			|Creates a new output channel with the given name. [Details](/ExtensionDocs/Api/windows/createOutputChannel)		|
|hx.window.createTreeView()					|Create a TreeView for the view contributed using the extension point views. [Details](/ExtensionDocs/Api/windows/createTreeView)																|
|hx.window.createWebView()					|Create and show a new webview panel. [Details](/ExtensionDocs/Api/windows/createWebView)																|
|hx.window.createWebViewDialog()			|Create dialog based on WebView page. [Details](/ExtensionDocs/Api/windows/createWebViewDialog)								|
|hx.window.showView()						|Switch the WebView control view of the specified viewId. [Details](/ExtensionDocs/Api/windows/showView)										|
|hx.window.registerUriHandler()				|Registers a uri handler capable of handling system-wide uris. [Details](/ExtensionDocs/Api/windows/registerUriHandler)	|
|hx.window.registerCustomEditorProvider()	|Register a provider for custom editors for the viewType contributed by the customEditors extension point. [Details](/ExtensionDocs/Api/windows/registerCustomEditorProvider)								|

#### api:workspace
|API									|Description																										|
|--											|--																											|
|hx.workspace.applyEdit()					|create, delete, and rename resources as defined by the given workspace edit. [Details](/ExtensionDocs/Api/workspace/applyEdit)							|
|hx.workspace.copyFileWithPrompt()			|Copy the specified file or folder to the target folder. [Details](/ExtensionDocs/Api/workspace/copyFileWithPrompt)				|
|hx.workspace.getConfiguration()			|Get a workspace configuration object. [Details](/ExtensionDocs/Api/workspace/getConfiguration)						|
|hx.workspace.getWorkspaceFolders()			|Get all project objects under the project explorer. [Details](/ExtensionDocs/Api/workspace/getWorkspaceFolders)	|
|hx.workspace.getWorkspaceFolder()			|Returns the project info that contains a given uri. [Details](/ExtensionDocs/Api/workspace/getWorkspaceFolder)								|
|hx.workspace.openTextDocument()			|Open a document file through the specified uri. [Details](/ExtensionDocs/Api/workspace/openTextDocument)							|
|hx.workspace.onDidChangeConfiguration()	|An event that is emitted when the configuration changed. [Details](/ExtensionDocs/Api/workspace/onDidChangeConfiguration)												|
|hx.workspace.onDidChangeWorkspaceFolders()	|An event that is emitted when a workspace folder is added or removed. [Details](/ExtensionDocs/Api/workspace/onDidChangeWorkspaceFolders)											|
|hx.workspace.onDidChangeTextDocument()		|An event that is emitted when a text document is changed. [Details](/ExtensionDocs/Api/workspace/onDidChangeTextDocument)												|
|hx.workspace.onDidSaveTextDocument()		|An event that is emitted when a text document is saved to disk. [Details](/ExtensionDocs/Api/workspace/onDidSaveTextDocument)													|
|hx.workspace.onDidOpenTextDocument()		|An event that is emitted when a text document is opene. [Details](/ExtensionDocs/Api/workspace/onDidOpenTextDocument)													|
|hx.workspace.onWillSaveTextDocument()		| An event that is emitted when a text document will be saved to disk. [Details](/ExtensionDocs/Api/workspace/onWillSaveTextDocument)							|

#### api:env
|API				|Description																			|
|--						|--																				|
| env				| [Details](/ExtensionDocs/Api/env/readme)											|
| hx.authorize.login()	|[Details](/ExtensionDocs/Api/env/authorize)										|
| hx.env.clipboard		|Read or write content to the System clipboard. [Details](/ExtensionDocs/Api/env/Clipboard)	|
| hx.env.openExternal()	| Opens a link externallyv using the default application. [Details](/ExtensionDocs/Api/env/openExternal)					|
