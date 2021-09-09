# createWebViewDialog

> HBuilderX 3.0.0起支持

创建基于WebView页面的对话框，通过html渲染对话框的主要内容，可通过参数定制对话框标题、按钮等内容。按钮被添加到对话框下方的按钮组里，点击按钮会向WebView发送消息，开发者可在html通过js监听。

## Parameter

|Name	|Type					|Description											|
|--		|--							|--												|
|dialogOptions 	|[DialogOptions](#DialogOptions)	|对话框基本属性，包括标题、按钮等	|
|webviewOptions |[WebViewOptions](#WebViewOptions)	|WebView属性	|

## Returns

|Type|Description							|					|
|--				|--								| --				|
|WebViewDialog	|[WebViewDialog](#WebViewDialog)	| WebViewDialog，控制对话框显示和关闭等	|

## Example
```Javascript
let webviewDialog = hx.window.createWebViewDialog({
    modal: false,
    title: "是否删除文件？",
    description: "删除后无法恢复，请谨慎操作。也可以到回收站看看。",
    dialogButtons: [
        "确定", "取消"
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
                if(button == '确定'){
                    //TODO 处理表单提交
                }else if(button == '取消'){
                    //TODO 处理取消逻辑
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
    // 处理错误信息
});
```

## WebViewOptions
`从HBuilderX 2.8.1及以上版本开始支持`

调用createWebView创建[WebView](#WebView)时需要的配置项

**Attribute list**

|Attribute name			|Type	|Description						|
|--				|--			|--							|
|enableScripts	|Boolean	|是否启用JavaScript脚本支持	|


## DialogOptions

调用createWebViewDialog需要的对话框属性参数。

**Attribute list**

|Attribute name		|Type	|Description				|
|--			|--			|--					|
|modal      | Boolean	| 是否显示为模态窗口，默认模态窗口 |
|title      | String	| 对话框主标题 |
|description       | String	| 对话框副标题 |
|dialogButtons   | Array&lt;String&gt;	| 需要在对话框下方按钮组区域添加的按钮列表 |
|size       | 对话框尺寸 | 需要显示的对话框大小，结构：{ width: Number, height: Number } |

- *以上所有属性可选，但不建议*

## WebViewDialog

WebView相关属性可以参考[WebView](#WebView)。

#### 属性列表

|Attribute name		|Type	|Description				|
|--			|--			|--					|
|webView | [WebView](#WebView)	| 用于渲染对话框主要内容 |
|id      | String	| 用于内部通信的对话框id |

### show

显示对话框，返回显示成功或者失败的信息，主要包含内置浏览器相关状态。

**Returns**

|Type	|Description		|
|--			|--			|
|Promise&lt;Object&gt;	|Promise对象，Object结构：{"code":2, "message":"Built-in browser not exist."}|

**主要错误码信息**

|错误码		| Description									|
|--			|--										|
|0	| 无错误 |
|1	| 内置浏览器插件正在下载 |
|2	| 内置浏览器插件不存在（弹出下载内置浏览器插件窗口，用户点击了取消）|

### close

关闭对话框，插件通过close主动关闭对话框

### displayError

在对话框副标题下方显示红色错误信息，错误信息会由动态抖动效果

**Parameter**

|Name	|Type	|Description			|
|--			|--			|--				|
|text		|String		| 错误信息  |

### setButtonStatus

设置对话框指定按钮状态，对话框按钮通过[createWebViewDialog](#createWebViewDialog)参数[DialogOptions](#DialogOptions)提供。

**Parameter**

|Name	|Type	|Description			|
|--			|--			|--				|
|button		|String		| 按钮字符串  |
|status		|Array&lt;String&gt;	| 按钮状态列表，为空时设置默认状态|

### 按钮状态说明

|状态		| Description      |
|--			|--	        |
|"loading"	| 按钮文字前方增加loading动态提示 |
|"disable"	| 禁用按钮，可与loading组合使用 |  

**Example**
``` javascript
    webviewDialog.setButtonStatus("确定", ["loading", "disable"]);
```

### onDialogClosed

注册窗口关闭回调。

|Name	|Type	|Description			|
|--			|--			|--				|
|callback	|Function		|当窗口显示后，用户关闭或调用close后，触发该回调，无参数|

### Returns

|Type	|Description			|
|--			|--				|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	| Disposable对象	|