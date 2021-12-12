# createWebView

> Supported from 2.8.1+
Create a WebView control view with a specified viewId, and create a tab item in the left or right area of the window. The tab content is webview, and html pages can be loaded in webview, which can render customized content more flexibly.

The viewId needs to be declared in the configuration extension point [views](/ExtensionDocs/ContributionPoints/README.md#views) in the package.json file.  The complete extended view process reference to <a href="/ExtensionTutorial/views?id=webview" target="_blank"> How to register a new view? </a>.

## Introduction

**Parameter**

|Name		|Type															|Description																|
|--			|--																|--																					|
|viewId	|String														|Id of the view contributed using the extension point views.|
|options|[WebViewOptions](#WebViewOptions)|Content settings for a webview.																|

**Returns**

|Type|Description							|					|
|--				|--								| --				|
|WebViewPanel	|[WebViewPanel](#WebViewPanel)	|A panel that contains a webview.	|

**Example**
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

Content settings for a webview

**Attribute list**

|Attribute name				|Type								|Description															|
|--					|--										|--																|
|enableScripts 	|Boolean								|Controls whether scripts are enabled in the webview content or not.	|


## WebViewPanel

调用createWebView返回的WebViewPanel对象

**Attribute list**

|Name	|Type	|Description				|
|--			|--			|--			|
|webView	|[WebView](#WebView)	|WebView 关联的WebView对象|
|dispose()  |dispose方法  |调用关闭该扩展视图    |


## WebView

调用[createWebView](#createWebView)创建WebView对象

### WebView属性列表

|Name	|Type	|Description				|
|--			|--			|--			|
|options	|[WebViewOptions](#WebViewOptions)	|调用[createWebView](#createWebView)创建WebView时传入的options参数|
|html |     String | WebView中要显示的html内容 |

### onDidReceiveMessage

> 收到hbuilderx.postMessage发出的消息时调用回调函数。

**Parameter**

|Name	|Type	|Description		|
|--			|--																	|--			|
|callback	|Function	|响应收到消息的回调|

**Returns**

|Type	|
|--	|
|无 | 

**Example**
``` javascript
    webview.onDidReceiveMessage((message)=>{ console.log(message) });
```


### postMessage(message: any): Thenable

> 在WebView中发送消息

**Parameter**

|Name	|Type	|Description		|
|--			|--	|--			|
|message	|Any	| 消息内容|

**Returns**

|Type	|Description	|
|--			|--		|
|Thenable| Javascript异步延迟后执行|


### asWebviewUri

> 将本地资源转换成可在WebView中加载的uri。

**Parameter**

|Name	|Type	|Description		|
|--			|--																	|--			|
|localResource	|[Uri](/ExtensionDocs/Api/other/Uri)	|统一资源访问符|

**Returns**

|Type	|Description	|
|--			|--		|
|[Uri](/ExtensionDocs/Api/other/Uri)|可在[WebView](#WebView)中加载的uri|
