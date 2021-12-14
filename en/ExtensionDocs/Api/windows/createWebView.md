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

A panel that contains a webview.

**Attribute list**

|Name	|Type	|Description				|
|--			|--			|--			|
|webView	|[WebView](#WebView)	|Webview belonging to the panel.|
|dispose()  |dispose Method  |Call to close the extended view    |


## WebView

Displays html content, similarly to an iframe.

### WebView Attributes List

|Name	|Type	|Description				|
|--			|--			|--			|
|options	|[WebViewOptions](#WebViewOptions)	|Content settings for the webview.|
|html |     String | HTML contents of the webview. |

### onDidReceiveMessage

> Fired when the webview content posts a message.

**Parameter**

|Name	|Type	|Description		|
|--			|--																	|--			|
|callback	|Function	|Respond to the callback of the received message|

**Returns**

|Type	|
|--	|
|No | 

**Example**
``` javascript
    webview.onDidReceiveMessage((message)=>{ console.log(message) });
```


### postMessage(message: any): Thenable

> Post a message to the webview content.

**Parameter**

|Name	|Type	|Description		|
|--			|--	|--			|
|message	|Any	| Body of the message|

**Returns**

|Type	|Description	|
|--			|--		|
|Thenable| (Javascript) Execute after asynchronous delay|


### asWebviewUri

> Convert a uri for the local file system to one that can be used inside webviews.

**Parameter**

|Name	|Type	|Description		|
|--			|--																	|--			|
|localResource	|[Uri](/ExtensionDocs/Api/other/Uri)	|universal resource identifier |

**Returns**

|Type	|Description	|
|--			|--		|
|[Uri](/ExtensionDocs/Api/other/Uri)|Uri that can be loaded in [WebView](#WebView)|
