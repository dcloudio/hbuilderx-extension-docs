本文檔將帶你一步一步建立第一個插件擴展。
### 新建第一個插件擴展
在HBuilderX裏通過工具欄上`新建`按鈕或者快捷鍵`ctrl+n`打開新建菜單選擇`項目`，如下圖所示，選擇`普通項目`-`插件擴展開發`

> 注意：插件名稱只能用英文字母和數字，不支持中文和空格。

<img src="/static/snapshots/Plug-in-development/create_extension.png" style="zoom:45%;border: 1px solid #eee;" />

### 運行插件
建好插件項目後，選中該項目或者打開項目下某個文件，然後點擊工具欄上`運行`按鈕或者快捷鍵`ctrl+r`打開運行菜單，選擇`運行插件xxx`即可新開一個HBuilderX窗體，這個新窗體將自動載入該插件。如下圖

<img src="/static/snapshots/Plug-in-development/start_run_extension.jpg" style="zoom:50%;border: 1px solid #eee;" />

運行起來的效果圖如下：

<img src="/static/snapshots/Plug-in-development/show_run_extension.jpg" style="zoom:50%" />


插件擴展開發模板示例中在代碼編輯器右鍵菜單上註冊了一個`Hello World`菜單，**此時我們打開一個文檔**，然後右鍵即可看到`Hello World`菜單。點擊該菜單運行後會在窗口顯示一個提示框。如下圖

<img src="/static/snapshots/Plug-in-development/run.gif" style="zoom:50%" />

也就是在老窗體寫插件代碼，保存插件代碼後，在新窗體預覽效果。
> 修改插件代碼後需要重新運行插件

### 打印日誌
運行起來的插件，在老窗體的控制檯，會打印日誌。

開發者可以使用`console.log`、`console.error`等API，把信息打印到老窗體的調試控制檯。

### 插件代碼說明
#### package.json
package.json在每個插件中都必須存在，包含插件的信息和`配置擴展點`。以下是示例插件的package.json代碼說明
```javascript
{
    //注意，不能直接拷貝本段代碼到編輯器中，package.json目前不支持註釋。本段代碼加的註釋只是用於解釋代碼。
    //插件名稱，必填字段
	"name": "your extension name",
	//插件顯示名稱，用於展示在插件列表中的名稱, 必填字段
	"displayName": "your display name",
	"description": "your extension description",
    //插件版本號，用於版本升級判斷，必填字段
	"version": "0.0.0",
	"publisher": "your name",
    //需要的最低HBuilder版本號，必填字段
	"engines": {
		"HBuilderX": "^2.6.8"
	},
    //插件分類
	"categories": [
		"Other"
	],
    //插件的程序入口js文件，在插件激活的時候調用
	"main": "./extension",
    //插件激活事件註冊，當以下事件發生時，纔會激活插件。
	"activationEvents": [
        //onCommand表示將要執行某個command的時觸發該事件，本示例表示只有要執行`extension.helloWorld`的`命令`時本插件纔會激活
		"onCommand:extension.helloWorld"
	],
    //配置擴展點
	"contributes": {
        //`命令`擴展點，用於聲明一個`命令`,所有擴展的`命令`必須通過該擴展點聲明
		"commands": [{
            //`命令`唯一標識
			"command": "extension.helloWorld",
            //`命令`的名稱，當關聯到菜單時，如果未配置菜單名稱，會用該名稱。
			"title": "Hello World"
		}],
        //`菜單`擴展點，用於註冊一個`菜單`
		"menus": {
            //編輯器右鍵菜單
			"editor/context": [
				{
                    //關聯的`命令`唯一標識
					"command": "extension.helloWorld",
                    //註冊到菜單的位置
					"group": "z_commands",
                    //在什麼條件下顯示
					"when": "editorTextFocus"
				},
				{
                    //不關聯`命令`的菜單擴展代表一個分割線
					"group": "z_commands"
				}
			]
		}
	},
	"dependencies": {}
}

```

#### 插件入口文件
本示例的插件入口文件是extension.js,插件入口文件必須要exports`activate`方法,該方法在插件激活的時候調用。代碼說明如下：
```javascript
var hx = require("hbuilderx");
//該方法將在插件激活的時候調用
function activate(context) {
	let disposable = hx.commands.registerCommand('extension.helloWorld', () => {
		hx.window.showInformationMessage('你好，這是我的第一個插件擴展。');
		console.log("Hello My First HBuilderX Extension.");
	});
	//訂閱銷燬鉤子，插件禁用的時候，自動註銷該command。
	context.subscriptions.push(disposable)
}
//該方法將在插件禁用的時候調用（目前是在插件卸載的時候觸發）
function deactivate() {

}
module.exports = {
	activate,
	deactivate
}

```