# createWebView

> 從HBuilderX 2.8.1及以上版本開始支持

創建指定viewId的WebView控件視圖，在窗體左側或右側區域創建一個tab項。tab內容爲webview，webview裏可裝載html頁面，可以較靈活的渲染自定義的內容。

viewId需要在package.json文件內的配置擴展點[views](/ExtensionDocs/ContributionPoints/README.md#views)中聲明，完整的擴展視圖流程參考[如何註冊一個新的視圖？](/ExtensionTutorial/views?id=webview)

## 簡介

**參數說明**

|參數名稱	|參數類型					|描述											|
|--		|--							|--												|
|viewId	|String	|視圖Id，需要首先在配置擴展點`views`中聲明。									|
|options|[WebViewOptions](#WebViewOptions)			|WebView屬性	|

**返回值**

|返回類型		|描述							|					|
|--				|--								| --				|
|WebViewPanel	|[WebViewPanel](#WebViewPanel)	|WebViewPanel屬性	|

**示例**
```Javascript
    let webviewPanel = hx.window.createWebView("viewId",{
        enableScripts:true
    });
    let webview = webviewPanel.webView;
    webview.html = `
        <script>
            hbuilderx.onDidReceiveMessage((msg)=>{
                
            });
            hbuilderx.postMessage({
                command: 'alert',
                text: 'HelloWorld'
            });
        </script>
        <img src="xxxx">
    `;
    webview.postMessage({
        command:"test"
    });
    webview.onDidReceiveMessage((msg)=>{
        if(msg.command == 'alert'){
            hx.window.showInformationMessage(msg.text);
        }
    });
```

## WebViewOptions

webview的配置項

**屬性列表**

|屬性名				|屬性類型								|描述															|
|--					|--										|--																|
|enableScripts 	|Boolean								|是否啓用JavaScript腳本支持	|


## WebViewPanel

調用createWebView返回的WebViewPanel對象

**屬性列表**

|參數名稱	|參數類型	|描述				|
|--			|--			|--			|
|webView	|[WebView](#WebView)	|WebView 關聯的WebView對象|
|dispose()  |dispose方法  |調用關閉該擴展視圖    |


## WebView

調用[createWebView](#createWebView)創建WebView對象

### WebView屬性列表

|參數名稱	|參數類型	|描述				|
|--			|--			|--			|
|options	|[WebViewOptions](#WebViewOptions)	|調用[createWebView](#createWebView)創建WebView時傳入的options參數|
|html |     String | WebView中要顯示的html內容 |

### onDidReceiveMessage

> 收到hbuilderx.postMessage發出的消息時調用回調函數。

**參數說明**

|參數名稱	|參數類型	|描述		|
|--			|--																	|--			|
|callback	|Function	|響應收到消息的回調|

**返回值**

|返回類型	|
|--	|
|無 | 

**示例**
``` javascript
    webview.onDidReceiveMessage((message)=>{ console.log(message) });
```


### postMessage(message: any): Thenable

> 在WebView中發送消息

**參數說明**

|參數名稱	|參數類型	|描述		|
|--			|--	|--			|
|message	|Any	| 消息內容|

**返回值**

|返回類型	|描述	|
|--			|--		|
|Thenable| Javascript異步延遲後執行|


### asWebviewUri

> 將本地資源轉換成可在WebView中加載的uri。

**參數說明**

|參數名稱	|參數類型	|描述		|
|--			|--																	|--			|
|localResource	|[Uri](/ExtensionDocs/Api/other/Uri)	|統一資源訪問符|

**返回值**

|返回類型	|描述	|
|--			|--		|
|[Uri](/ExtensionDocs/Api/other/Uri)|可在[WebView](#WebView)中加載的uri|