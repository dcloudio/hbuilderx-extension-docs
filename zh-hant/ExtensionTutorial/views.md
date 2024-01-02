## 瞭解視圖

HBuilderX支持創建完全自定義的、可以間接和nodejs通信的特殊網頁，即視圖。

使用視圖可以構建複雜的、支持本地文件操作的用戶界面。

設計糟糕的視圖也很容易讓人感覺不舒適，不能讓人家一看就覺得你這是一張網頁，`好看`、跟`HBuilderX風格統一`的UI也很重要。


[擴展一個新的 WebView](#WebView)

[擴展一個新的 TreeView](#TreeView)

## WebView

`從HBuilderX 2.8.1及以上版本開始支持`

擴展一個新的 WebView `視圖`（view）通過以下2個步驟：

- 通過 <a href="/ExtensionDocs/ContributionPoints/README?id=viewscontainers" target="_blank">viewContainers</a> 和 <a href="/ExtensionDocs/ContributionPoints/README?id=views" target="_blank">views</a>配置擴展點聲明要擴展的`視圖`


``` json
//package.json；
//...NOTE：package.json不支持註釋，以下代碼使用時需要將註釋刪掉
     "contributes": {
         "viewsContainers": {
             "rightside": [{
                 "id": "WebViewcontainerId",
                 "title": "webview 展示"
             }]
         },
         "views": {
             "WebViewcontainerId": [{
                 "id": "extension.WebView",
                 "title": "webview - 展示"
             }]
         },
         ...
    }
```

- 在插件激活時通過API：<a href="/ExtensionDocs/Api/windows/createWebView" target="_blank">window.createWebView</a>實現上面擴展的`視圖`

``` javascript
const hx = require('hbuilderx');

/**
 * @description 顯示webview
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
                //    以下兩種寫法等同
                hbuilderx.onDidReceiveMessage((msg) => {});
                window.addEventListener("message", (msg) => {});

                hbuilderx.postMessage({
                    command: 'alert',
                    text: 'HelloWorld'
                });
            </script>
        </body>
      `;

    // 插件發送消息(可以被JSON化的數據)到webview
    webview.postMessage({
        command: "test"
    });

    // 插件接收webview發送的消息(可以被JSON化的數據)
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

> 擴展後的`視圖`可通過菜單`視圖`-`顯示擴展視圖`打開

#### 效果圖

<img src="/static/snapshots/Plug-in-development/webview.png" style="zoom:50%" />

## TreeView
`從HBuilderX 2.7.12及以上版本開始支持`

擴展一個新的 TreeView `視圖`（view）通過以下2個步驟：

- 通過 <a href="/ExtensionDocs/ContributionPoints/README?id=viewscontainers" target="_blank">viewContainers</a> 和 <a href="/ExtensionDocs/ContributionPoints/README?id=views" target="_blank">views</a>配置擴展點聲明要擴展的`視圖`


``` json
//package.json；
//...NOTE：package.json不支持註釋，以下代碼使用時需要將註釋刪掉
    "contributes": {
        "viewsContainers": {
            "activitybar": [{
                "id": "demoview",
                "title": "DemoView"
            }]
        },
        "views": {
            "demoview": [{
                //該id需要和window.createTreeView中的viewId參數一致
                "id": "extensions.treedemo",
                "name": "DemoView"
            }]
        }
    }
```

- 在插件激活時通過API：<a href="/ExtensionDocs/Api/windows/createTreeView" target="_blank">window.createTreeView</a>實現上面擴展的`視圖`

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
//該方法將在插件激活的時候調用
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
        hx.window.showInformationMessage("選中了TreeItem:" + param[0]);
    });
    hx.window.createTreeView("extensions.treedemo", {
        showCollapseAll: true,
        treeDataProvider: new DemoTreeDataProvider(demoData)
    });
}
//該方法將在插件禁用的時候調用（目前是在插件卸載的時候觸發）
function deactivate() {

}
module.exports = {
    activate,
    deactivate
}
```

> 擴展後的`視圖`可通過菜單`視圖`-`顯示擴展視圖`打開

#### 效果圖

<img src="/static/snapshots/Plug-in-development/view@2x.png" style="zoom:50%;border: 1px solid #eee; border-radius: 10px;" />

