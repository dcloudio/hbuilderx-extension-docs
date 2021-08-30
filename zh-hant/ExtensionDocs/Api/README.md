HBuilderX API根對象可以通過require('hbuilderx')引入。
```javascript
const hx = require('hbuilderx')
```
以下列出目前可用的API列表

|插件API	|詳情	|
|--	|--	|
|commands	|commands二級模塊對象，用於處理和`命令`相關的邏輯[詳情](/ExtensionDocs/Api/commands)	|
|hx.languages.createDiagnosticCollection()	|創建一個問題列表，可用於文檔校驗時在文檔出錯區域顯示波浪線標識問題[詳情](/ExtensionDocs/Api/languages/createDiagnosticCollection)		|

#### api:windows
|插件API									|詳情																											|
|--											|--																												|
|hx.window.showErrorMessage()				|在窗口右下角顯示錯誤消息通知框[詳情](/ExtensionDocs/Api/windows/Message?id=showerrormessage)					|
|hx.window.showInformationMessage()			|在窗口右下角顯示消息通知框[詳情](/ExtensionDocs/Api/windows/Message?id=showinformationmessage)					|
|hx.window.showWarningMessage()				|在窗口右下角顯示警告消息通知框[詳情](/ExtensionDocs/Api/windows/Message?id=showwarningmessage)					|
|hx.window.showMessageBox()					|在窗口顯示可供選擇的對話框[詳情](/ExtensionDocs/Api/windows/showMessageBox)									|
|hx.window.setStatusBarMessage()			|設置狀態欄消息[詳情](/ExtensionDocs/Api/windows/StatusBar?id=setstatusbarmessage)								|
|hx.window.clearStatusBarMessage()			|清空狀態欄消息[詳情](/ExtensionDocs/Api/windows/StatusBar?id=clearstatusbarmessage)							|
|hx.window.showQuickPick()					|在窗口中間彈出一個可搜索的建議選擇列表[詳情](/ExtensionDocs/Api/windows/showQuickPick)							|
|hx.window.getActiveTextEditor()			|獲取當前激活的編輯器[詳情](/ExtensionDocs/Api/windows/getActiveTextEditor)										|
|hx.window.showInputBox()					|在窗口中間居中彈出一個輸入框，獲取用戶輸入[詳情](/ExtensionDocs/Api/windows/showInputBox)						|
|hx.window.createOutputChannel()			|創建一個輸出控制檯通道，可用於在控制檯輸出文本內容[詳情](/ExtensionDocs/Api/windows/createOutputChannel)		|
|hx.window.createTreeView()					|[詳情](/ExtensionDocs/Api/windows/createTreeView)																|
|hx.window.createWebView()					|[詳情](/ExtensionDocs/Api/windows/createWebView)																|
|hx.window.createWebViewDialog()			|創建基於WebView頁面的對話框[詳情](/ExtensionDocs/Api/windows/createWebViewDialog)								|
|hx.window.showView()						|切換指定viewId的WebView控件視圖[詳情](/ExtensionDocs/Api/windows/showView)										|
|hx.window.registerUriHandler()				|註冊一個依賴hbuilderx協議的自定義網絡請求處理器(schema)[詳情](/ExtensionDocs/Api/windows/registerUriHandler)	|
|hx.window.registerCustomEditorProvider()	|註冊自定義編輯器[詳情](/ExtensionDocs/Api/windows/registerCustomEditorProvider)								|

#### api:workspace
|插件API									|詳情																										|
|--											|--																											|
|hx.workspace.applyEdit()					|根據指定的WorkspaceEdit對象編輯文檔[詳情](/ExtensionDocs/Api/workspace/applyEdit)							|
|hx.workspace.copyFileWithPrompt()			|將指定文件或文件夾拷貝到目標文件夾下[詳情](/ExtensionDocs/Api/workspace/copyFileWithPrompt)				|
|hx.workspace.getConfiguration()			|根據指定的section獲取對應的配置[詳情](/ExtensionDocs/Api/workspace/getConfiguration)						|
|hx.workspace.getWorkspaceFolders()			|獲取項目管理器下所有的項目對象（不包含已關閉項目）[詳情](/ExtensionDocs/Api/workspace/getWorkspaceFolders)	|
|hx.workspace.getWorkspaceFolder()			|獲取某個文件所在的項目[詳情](/ExtensionDocs/Api/workspace/getWorkspaceFolder)								|
|hx.workspace.openTextDocument()			|通過指定的uri打開一個文檔文件[詳情](/ExtensionDocs/Api/workspace/openTextDocument)							|
|hx.workspace.onDidChangeConfiguration()	|[詳情](/ExtensionDocs/Api/workspace/onDidChangeConfiguration)												|
|hx.workspace.onDidChangeWorkspaceFolders()	|[詳情](/ExtensionDocs/Api/workspace/onDidChangeWorkspaceFolders)											|
|hx.workspace.onDidChangeTextDocument()		|[詳情](/ExtensionDocs/Api/workspace/onDidChangeTextDocument)												|
|hx.workspace.onDidSaveTextDocument()		|[詳情](/ExtensionDocs/Api/workspace/onDidSaveTextDocument)													|
|hx.workspace.onDidOpenTextDocument()		|[詳情](/ExtensionDocs/Api/workspace/onDidOpenTextDocument)													|
|hx.workspace.onWillSaveTextDocument()		| 文檔即將要保存的事件 [詳情](/ExtensionDocs/Api/workspace/onWillSaveTextDocument)							|

#### api:env
|插件API				|詳情																			|
|--						|--																				|
| env屬性				| [詳情](/ExtensionDocs/Api/env/readme)											|
| hx.authorize.login()	|[詳情](/ExtensionDocs/Api/env/authorize)										|
| hx.env.clipboard		|讀取剪切板內容和寫入內容到剪切板    [詳情](/ExtensionDocs/Api/env/Clipboard)	|
| hx.env.openExternal()	| 打開一個外部鏈接[詳情](/ExtensionDocs/Api/env/openExternal)					|
