## 了解视图

HBuilderX支持创建完全自定义的、可以间接和nodejs通信的特殊网页，即视图。

使用视图可以构建复杂的、支持本地文件操作的用户界面。

设计糟糕的视图也很容易让人感觉不舒适，不能让人家一看就觉得你这是一张网页，`好看`、跟`HBuilderX风格统一`的UI也很重要。


[扩展一个新的 WebView](#WebView)

[扩展一个新的 TreeView](#TreeView)

## WebView

`从HBuilderX 2.8.1及以上版本开始支持`

扩展一个新的 WebView `视图`（view）通过以下2个步骤：

- 通过 <a href="/ExtensionDocs/ContributionPoints/README?id=viewscontainers" target="_blank">viewContainers</a> 和 <a href="/ExtensionDocs/ContributionPoints/README?id=views" target="_blank">views</a>配置扩展点声明要扩展的`视图`


``` json
//package.json；
//...NOTE：package.json不支持注释，以下代码使用时需要将注释删掉
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

- 在插件激活时通过API：<a href="/ExtensionDocs/Api/windows/createWebView" target="_blank">window.createWebView</a>实现上面扩展的`视图`

``` javascript
const hx = require('hbuilderx');

/**
 * @description 显示webview
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
                //    以下两种写法等同
                hbuilderx.onDidReceiveMessage((msg) => {});
                window.addEventListener("message", (msg) => {});

                hbuilderx.postMessage({
                    command: 'alert',
                    text: 'HelloWorld'
                });
            </script>
        </body>
      `;

    // 插件发送消息(可以被JSON化的数据)到webview
    webview.postMessage({
        command: "test"
    });

    // 插件接收webview发送的消息(可以被JSON化的数据)
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

> 扩展后的`视图`可通过菜单`视图`-`显示扩展视图`打开

#### 效果图

<img src="/static/snapshots/Plug-in-development/webview.png" style="zoom:50%" />

## TreeView
`从HBuilderX 2.7.12及以上版本开始支持`

扩展一个新的 TreeView `视图`（view）通过以下2个步骤：

- 通过 <a href="/ExtensionDocs/ContributionPoints/README?id=viewscontainers" target="_blank">viewContainers</a> 和 <a href="/ExtensionDocs/ContributionPoints/README?id=views" target="_blank">views</a>配置扩展点声明要扩展的`视图`


``` json
//package.json；
//...NOTE：package.json不支持注释，以下代码使用时需要将注释删掉
    "contributes": {
        "viewsContainers": {
            "activitybar": [{
                "id": "demoview",
                "title": "DemoView"
            }]
        },
        "views": {
            "demoview": [{
                //该id需要和window.createTreeView中的viewId参数一致
                "id": "extensions.treedemo",
                "name": "DemoView"
            }]
        }
    }
```

- 在插件激活时通过API：<a href="/ExtensionDocs/Api/windows/createTreeView" target="_blank">window.createTreeView</a>实现上面扩展的`视图`

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
//该方法将在插件激活的时候调用
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
        hx.window.showInformationMessage("选中了TreeItem:" + param[0]);
    });
    hx.window.createTreeView("extensions.treedemo", {
        showCollapseAll: true,
        treeDataProvider: new DemoTreeDataProvider(demoData)
    });
}
//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

}
module.exports = {
    activate,
    deactivate
}
```

> 扩展后的`视图`可通过菜单`视图`-`显示扩展视图`打开

#### 效果图

<img src="/static/snapshots/Plug-in-development/view@2x.png" style="zoom:50%;border: 1px solid #eee; border-radius: 10px;" />

