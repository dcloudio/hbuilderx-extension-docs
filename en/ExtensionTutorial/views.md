## Understanding the view

HBuilderX supports customized and special web pages: Views, which can communicate with nodejs.

Use the view to build a complex UI that supports local file operations.

It's very important to design a perfect UI.


[Extend a new WebView](#WebView)

[Extend a new TreeView](#TreeView)

## WebView

`Supported from HBuilderX 2.8.1+`

Extend a new WebView `view` (view) with the following 2 steps:

- Through <a href="/ExtensionDocs/ContributionPoints/README?id=viewscontainers" target="_blank">viewContainers</a> and <a href="/ExtensionDocs/ContributionPoints/README?id=views" target="_blank">views</a> to configure and declare the `view`.


``` json
//package.json；
//...NOTE：Package.json does not support comments, you need to delete the comments when using the following code
     "contributes": {
         "viewsContainers": {
             "rightside": [{
                 "id": "WebViewcontainerId",
                 "title": "webview - display"
             }]
         },
         "views": {
             "WebViewcontainerId": [{
                 "id": "extension.WebView",
                 "title": "webview - display"
             }]
         },
         ...
    }
```

- Activate the extension with API: <a href="/ExtensionDocs/Api/windows/createWebView" target="_blank">window.createWebView</a> to implement the expanded `view`

``` javascript
const hx = require('hbuilderx');

/**
 * @description display webview
 */
function showWebView(webviewPanel) {
    let webview = webviewPanel.webView;

    var background = '';

    let config = hx.workspace.getConfiguration();
    let colorScheme = config.get('editor.colorScheme');
    if (colorScheme == 'Monokai') {
        background = 'rgb(39,40,34)'
    } else if (colorScheme == 'Atom One Dark') {
        background = 'rgb(40,44,53)'
    } else {
        background = 'rgb(255,250,232)'
    };

    webview.html =
        `
        <body style="background-color:${background};border:1px solid ${background};">
            <div style="max-width:200px;">
                <img src="https://download1.dcloud.net.cn/uploads/images/hbuilderx/hx_desc@1x.png" style="position: absolute;bottom: 0;left: 0;right: 0;width: 100%;margin: auto;">
            </div>
            <script>
                //The following two methods are equivalent
                hbuilderx.onDidReceiveMessage((msg) => {});
                window.addEventListener("message", (msg) => {});

                hbuilderx.postMessage({
                    command: 'alert',
                    text: 'HelloWorld'
                });
            </script>
        </body>
      `;

    //The extension sends messages (data that can be JSONized) to the webview
    webview.postMessage({
        command: "test"
    });

    //The extension receives messages sent by webview (data that can be JSONized)
    webview.onDidReceiveMessage((msg) => {
        if (msg.command == 'alert') {
            hx.window.showInformationMessage(msg.text);
        }
    });
};


module.exports = {
    showWebView
}
```

> The expanded `View` can be opened via the menu `View`-`Show Plug-in View`

#### Screenshot

<img src="/static/snapshots/Plug-in-development/webview.png" style="zoom:50%" />

## TreeView
`Supported from 从HBuilderX 2.7.12+`

Extend a new TreeView `view` (view) through the following 2 steps:

- Through <a href="/ExtensionDocs/ContributionPoints/README?id=viewscontainers" target="_blank">viewContainers</a> and <a href="/ExtensionDocs/ContributionPoints/README?id=views" target="_blank">views</a> to configure and declare the `view`.


``` json
//package.json；
//...NOTE：Package.json does not support comments, you need to delete the comments when using the following code
    "contributes": {
        "viewsContainers": {
            "activitybar": [{
                "id": "demoview",
                "title": "DemoView"
            }]
        },
        "views": {
            "demoview": [{
                //The id needs to be consistent with the viewId parameter in window.createTreeView
                "id": "extensions.treedemo",
                "name": "DemoView"
            }]
        }
    }
```

- Activate the extension with API: <a href="/ExtensionDocs/Api/windows/createTreeView" target="_blank">window.createTreeView</a> to implement the expanded `view`

``` javascript
// extension.js
var hx = require("hbuilderx");

class DemoTreeDataProvider extends hx.TreeDataProvider{
    constructor(demoData) {
        super();
        this._demoData = demoData;
    }
    getChildren(element) {
        let demoData = this._demoData;
        return new Promise(resolve => {
        	if (!element) {
        	    resolve(demoData);
        	} else {
        	    resolve(element.children);
        	}
        });
    }
    getTreeItem(element) {
        return {
            label:element.name,
            collapsibleState:element.children ? 1 : 0,
            command:{
                command:element.children ? "":"extension.helloWorld",
                arguments:[
                    element.name
                ]
            }
        }
    }
}
//This method will be called when the extension is activated
function activate(context) {
    let demoData = [
        {
            name:"Root1",
            children:[
                {
                    name:"child1"
                },
                {
                    name:"child2"
                }
            ]
        },
        {
            name:"Root2",
            children:[
                {
                    name:"child3",
                },
                {
                    name:"child4"
                }
            ]
        }
    ]
    hx.commands.registerCommand("extension.helloWorld",function(param){
        hx.window.showInformationMessage("Select TreeItem:" + param[0]);
    });
    hx.window.createTreeView("extensions.treedemo", {
        showCollapseAll: true,
        treeDataProvider: new DemoTreeDataProvider(demoData)
    });
}
//This method will be called when the extension is disabled (currently it is triggered when the extension is uninstalled
function deactivate() {

}
module.exports = {
    activate,
    deactivate
}
```

> The expanded `View` can be opened via the menu `View`-`Show Plug-in View`

#### Screenshot

<img src="/static/snapshots/Plug-in-development/view@2x.png" style="zoom:50%;border: 1px solid #eee; border-radius: 10px;" />

