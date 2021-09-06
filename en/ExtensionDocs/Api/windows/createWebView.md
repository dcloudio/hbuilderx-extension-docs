# createWebView

> 从HBuilderX 2.8.1及以上版本开始支持

创建指定viewId的WebView控件视图，在窗体左侧或右侧区域创建一个tab项。tab内容为webview，webview里可装载html页面，可以较灵活的渲染自定义的内容。

viewId需要在package.json文件内的配置扩展点[views](/ExtensionDocs/ContributionPoints/README.md#views)中声明。

完整的扩展视图流程参考 <a href="/ExtensionTutorial/views?id=webview" target="_blank">如何注册一个新的视图？</a>

## 简介

**参数说明**

|参数名称	|参数类型					|描述											|
|--		|--							|--												|
|viewId	|String	|视图Id，需要首先在配置扩展点`views`中声明。									|
|options|[WebViewOptions](#WebViewOptions)			|WebView属性	|

**返回值**

|返回类型		|描述							|					|
|--				|--								| --				|
|WebViewPanel	|[WebViewPanel](#WebViewPanel)	|WebViewPanel属性	|

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

webview的配置项

**属性列表**

|属性名				|属性类型								|描述															|
|--					|--										|--																|
|enableScripts 	|Boolean								|是否启用JavaScript脚本支持	|


## WebViewPanel

调用createWebView返回的WebViewPanel对象

**属性列表**

|参数名称	|参数类型	|描述				|
|--			|--			|--			|
|webView	|[WebView](#WebView)	|WebView 关联的WebView对象|
|dispose()  |dispose方法  |调用关闭该扩展视图    |


## WebView

调用[createWebView](#createWebView)创建WebView对象

### WebView属性列表

|参数名称	|参数类型	|描述				|
|--			|--			|--			|
|options	|[WebViewOptions](#WebViewOptions)	|调用[createWebView](#createWebView)创建WebView时传入的options参数|
|html |     String | WebView中要显示的html内容 |

### onDidReceiveMessage

> 收到hbuilderx.postMessage发出的消息时调用回调函数。

**参数说明**

|参数名称	|参数类型	|描述		|
|--			|--																	|--			|
|callback	|Function	|响应收到消息的回调|

**返回值**

|返回类型	|
|--	|
|无 | 

**示例**
``` javascript
    webview.onDidReceiveMessage((message)=>{ console.log(message) });
```


### postMessage(message: any): Thenable

> 在WebView中发送消息

**参数说明**

|参数名称	|参数类型	|描述		|
|--			|--	|--			|
|message	|Any	| 消息内容|

**返回值**

|返回类型	|描述	|
|--			|--		|
|Thenable| Javascript异步延迟后执行|


### asWebviewUri

> 将本地资源转换成可在WebView中加载的uri。

**参数说明**

|参数名称	|参数类型	|描述		|
|--			|--																	|--			|
|localResource	|[Uri](/ExtensionDocs/Api/other/Uri)	|统一资源访问符|

**返回值**

|返回类型	|描述	|
|--			|--		|
|[Uri](/ExtensionDocs/Api/other/Uri)|可在[WebView](#WebView)中加载的uri|