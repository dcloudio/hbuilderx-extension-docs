扩展一个新的`视图`（view）通过以下2个步骤：
1. 通过`viewContainers`和`views`扩展点声明要扩展的`视图`

``` json
//package.json
//...
    "contributes": {
        "viewsContainers": {
            "activitybar": [{
                "id": "demoview",
                "title": "DemoView"
            }]
        },
        "views": {
            "demoview": [{
                "id": "extensions.treedemo",
                "name": "DemoView"
            }]
        }
    }
```

2. 在插件激活时实现该扩展的`视图`

``` javascript
// extension.js
var hx = require("hbuilderx");

class DemoTreeDataProvider {
    constructor(demoData) {
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

<img src="/static/snapshots/view@2x.png" style="zoom:50%" />