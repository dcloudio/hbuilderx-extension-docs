# createWebViewDialog

> Supported from HBuilderX 3.0.0

Create a dialog box based on the WebView page, render the main content of the dialog box through html, and customize the dialog box title, buttons, etc. The button is added to the button group at the bottom of the dialog box. Clicking the button will send a message to the WebView, and the developer can monitor it through js in the html.

## Parameter

|Name	|Type					|Description											|
|--		|--							|--												|
|dialogOptions 	|[DialogOptions](#DialogOptions)	|Basic attributes of the dialog box, including title, button, etc	|
|webviewOptions |[WebViewOptions](#WebViewOptions)	|Content settings for a webview.	|

## Returns

|Type|Description							|					|
|--				|--								| --				|
|WebViewDialog	|[WebViewDialog](#WebViewDialog)	| WebViewDialog, control dialog box display and close etc.|

## Example
```Javascript
let webviewDialog = hx.window.createWebViewDialog({
    modal: false,
    title: "Delete the file？",
    description: "It cannot be restored after deletion, please operate with caution. You can also go to the recycle bin.",
    dialogButtons: [
        "Confirm", "Cancel"
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
                if(button == 'Confirm'){
                    //TODO Process form submit
                }else if(button == 'Cancel'){
                    //TODO Process cancel logic
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
    // process error message
});
```

## WebViewOptions
`Supported from 2.8.1+`

Content settings for a webview.

**Attribute list**

|Attribute name			|Type	|Description						|
|--				|--			|--							|
|enableScripts	|Boolean	|Whether to enable JavaScript script support	|


## DialogOptions

Options to configure the behaviour of dialog.

**Attribute list**

|Attribute name		|Type	|Description				|
|--			|--			|--					|
|modal      | Boolean	| Indicates that this dialog is modal.

 |
|title      | String	| Dialog title. |
|description       | String	| Dialog subtitle |
|dialogButtons   | Array&lt;String&gt;	| Buttons group of dialog |
|size       | Size of dialog | The size of the dialog box that needs to be displayed,setting:{ width: Number, height: Number } |

- *All the above attributes are optional, but not recommended*

## WebViewDialog

WebView properties refer to[WebView](#WebView)。

#### Attribute list

|Attribute name		|Type	|Description				|
|--			|--			|--					|
|webView | [WebView](#WebView)	| WebView object |
|id      | String	| Dialog id used for internal communication |

### show

Reveal the view in the UI.

**Returns**

|Type	|Description		|
|--			|--			|
|Promise&lt;Object&gt;	||

**Error Codes**

|Error code		| Description									|
|--			|--										|
|0	| None |
|1	| The built-in browser plug-in is downloading |
|2	| The built-in browser plug-in does not exist |

### close

Close the dialog box

### displayError

A red error message will be displayed under the subtitle of the dialog box.

**Parameter**

|Name	|Type	|Description			|
|--			|--			|--				|
|text		|String		| Error message  |

### setButtonStatus

Set the state of the specified button in the dialog box, and the dialog box button [createWebViewDialog](#createWebViewDialog) is provided by the parameter [DialogOptions](#DialogOptions).

**Parameter**

|Name	|Type	|Description			|
|--			|--			|--				|
|button		|String		| Button text  |
|status		|Array&lt;String&gt;	| Button status list|

### Button status description

|Status		| Description      |
|--			|--	        |
|"loading"	| Add loading prompt before button text |
|"disable"	| Disable button, can be used in combination with loading  |  

**Example**
``` javascript
    webviewDialog.setButtonStatus("Confirm", ["loading", "disable"]);
```

### onDialogClosed

Callback when the registration window is closed.

|Name	|Type	|Description			|
|--			|--			|--				|
|callback	|Function		|When the window is displayed, the user closes or calls close event, the callback is triggered, no parameters.

### Returns

|Type	|Description			|
|--			|--				|
|[Disposable](/ExtensionDocs/Api/other/Disposable)	| Disposable object	|
