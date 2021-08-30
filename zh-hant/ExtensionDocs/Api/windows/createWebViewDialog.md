# createWebViewDialog

> HBuilderX 3.0.0起支持

創建基於WebView頁面的對話框，通過html渲染對話框的主要內容，可通過參數定製對話框標題、按鈕等內容。按鈕被添加到對話框下方的按鈕組裏，點擊按鈕會向WebView發送消息，開發者可在html通過js監聽。

## 參數說明

|參數名稱	|參數類型					|描述											|
|--		|--							|--												|
|dialogOptions 	|[DialogOptions](#DialogOptions)	|對話框基本屬性，包括標題、按鈕等	|
|webviewOptions |[WebViewOptions](#WebViewOptions)	|WebView屬性	|

## 返回值

|返回類型		|描述							|					|
|--				|--								| --				|
|WebViewDialog	|[WebViewDialog](#WebViewDialog)	| WebViewDialog，控制對話框顯示和關閉等	|

## 示例
```Javascript
let webviewDialog = hx.window.createWebViewDialog({
    modal: false,
    title: "是否刪除文件？",
    description: "刪除後無法恢復，請謹慎操作。也可以到回收站看看。",
    dialogButtons: [
        "確定", "取消"
    ],
    size: {
        width: 400,
        height: 300
    }
}, {
    enableScripts: true
});

let webview = webviewDialog.webView;
webview.html = `
    <html>
    <script>
    function initReceive() {
        hbuilderx.onDidReceiveMessage((msg)=>{
            if(msg.type == 'DialogButtonEvent'){
                let button = msg.button;
                if(button == '確定'){
                    //TODO 處理表單提交
                }else if(button == '取消'){
                    //TODO 處理取消邏輯
                        hbuilderx.postMessage({
                        command: 'cancel'
                    });
                }
            }
        });
    }
    window.addEventListener("hbuilderxReady", initReceive);
    </script>
    </html>
`;

webview.onDidReceiveMessage((msg) => {
    console.log(msg)
    if (msg.command == 'cancel') {
        webviewDialog.close();
    }
});

let promi = webviewDialog.show();
promi.then(function (data) {
    // 處理錯誤信息
});
```

## WebViewOptions
`從HBuilderX 2.8.1及以上版本開始支持`

調用createWebView創建[WebView](#WebView)時需要的配置項

**屬性列表**

|屬性名			|屬性類型	|描述						|
|--				|--			|--							|
|enableScripts	|Boolean	|是否啓用JavaScript腳本支持	|


## DialogOptions

調用createWebViewDialog需要的對話框屬性參數。

**屬性列表**

|屬性名		|屬性類型	|描述				|
|--			|--			|--					|
|modal      | Boolean	| 是否顯示爲模態窗口，默認模態窗口 |
|title      | String	| 對話框主標題 |
|description       | String	| 對話框副標題 |
|dialogButtons   | Array&lt;String&gt;	| 需要在對話框下方按鈕組區域添加的按鈕列表 |
|size       | 對話框尺寸 | 需要顯示的對話框大小，結構：{ width: Number, height: Number } |

- *以上所有屬性可選，但不建議*

## WebViewDialog

WebView相關屬性可以參考[WebView](#WebView)。

#### 屬性列表

|屬性名		|屬性類型	|描述				|
|--			|--			|--					|
|webView | [WebView](#WebView)	| 用於渲染對話框主要內容 |
|id      | String	| 用於內部通信的對話框id |

### show

顯示對話框，返回顯示成功或者失敗的信息，主要包含內置瀏覽器相關狀態。

**返回值**

|返回類型	|描述		|
|--			|--			|
|Promise&lt;Object&gt;	|Promise對象，Object結構：{"code":2, "message":"Built-in browser not exist."}|

**主要錯誤碼信息**

|錯誤碼		| 描述									|
|--			|--										|
|0	| 無錯誤 |
|1	| 內置瀏覽器插件正在下載 |
|2	| 內置瀏覽器插件不存在（彈出下載內置瀏覽器插件窗口，用戶點擊了取消）|

### close

關閉對話框，插件通過close主動關閉對話框

### displayError

在對話框副標題下方顯示紅色錯誤信息，錯誤信息會由動態抖動效果

**參數說明**

|參數名稱	|參數類型	|描述			|
|--			|--			|--				|
|text		|String		| 錯誤信息  |

### setButtonStatus

設置對話框指定按鈕狀態，對話框按鈕通過[createWebViewDialog](#createWebViewDialog)參數[DialogOptions](#DialogOptions)提供。

**參數說明**

|參數名稱	|參數類型	|描述			|
|--			|--			|--				|
|button		|String		| 按鈕字符串  |
|status		|Array&lt;String&gt;	| 按鈕狀態列表，爲空時設置默認狀態|

### 按鈕狀態說明

|狀態		| 描述      |
|--			|--	        |
|"loading"	| 按鈕文字前方增加loading動態提示 |
|"disable"	| 禁用按鈕，可與loading組合使用 |  

**示例**
``` javascript
    webviewDialog.setButtonStatus("確定", ["loading", "disable"]);
```

### onDialogClosed

註冊窗口關閉回調。

|參數名稱	|參數類型	|描述			|
|--			|--			|--				|
|callback	|Function		|當窗口顯示後，用戶關閉或調用close後，觸發該回調，無參數|

### 返回值

|返回類型	|描述			|
|--			|--				|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	| Disposable對象	|