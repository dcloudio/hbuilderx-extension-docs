# createTreeView

> `从HBuilderX 2.7.12及以上版本开始支持`

## 介绍

创建指定viewId的视图，在窗体左侧区域创建一个和`项目管理器`同级的tab项。tab的内容区为一个树控件，可自行装载节点。

viewId需要在package.json文件内的配置扩展点[views](/ExtensionDocs/ContributionPoints/README.md#views)中声明，完整的扩展视图流程参考[如何注册一个新的视图？](/ExtensionTutorial/views?id=treeview)

Parameter: 

|Name	|Type							|Description										|
|--			|--									|--											|
|viewId		|String								|视图Id，需要首先在配置扩展点`views`中声明。|
|options	|[TreeViewOptions](#TreeViewOptions)|创建TreeView时需要的设置项。				|

Returns：无

示例：

``` javascript
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
    hx.window.createTreeView("extensions.treedemo",{
        showCollapseAll:true,
        treeDataProvider:new DemoTreeDataProvider(demoData);
    });
```

## TreeViewOptions 

> 创建TreeView需要的配置项

**Attribute list**

|Attribute name				|Type								|Description															|
|--					|--										|--																|
|showCollapseAll	|Boolean								|是否显示折叠所有												|
|treeDataProvider	|[TreeDataProvider](#TreeDataProvider)	|TreeView树控件获取数据的接口，需要自己写一个子类实现该接口。	|


## TreeDataProvider

TreeView树控件获取数据的接口，不可直接实例化该对象，需要自己写一个子类实现该接口，每个自定义的treeDataProvider都需要实现该接口下列出的方法

### getChildren

> 获取某个节点的下的子节点，如果参数为空，则表示要获取根节点

**Parameter**

|Name	|Type	|Description															|
|--			|--			|--																|
|element	|Any?		|获取该节点下的子节点列表，如果参数为空，则是要获取根节点列表	|

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;Any[]&gt;	|Promise	|

### getTreeItem

> 获取用于显示自定义数据element(通过getChildren获取的对象)的TreeItem对象

**Parameter**

|Name	|Type	|Description									|
|--			|--			|--										|
|element	|Any?		|通过getChildren获取的列表对象中某一项	|

**Returns**

|Type	|Description				|
|--			|--					|
|[TreeItem](#TreeItem)	|保存有节点的显示信息	|

### onDidChangeTreeData
该接口用于通知HBuilderX数据变化，需要刷新视图，目前仅支持刷新整个视图。**该属性需要开发者在构造TreeDataProvider时创建**。

示例:
``` javascript
    var hx = require("hbuilderx");
    class MyTreeViewProvider extends hx.TreeDataProvider {
        constructor() {
            super();
            this.dataChangeEmitter = new hx.EventEmitter();
            this.onDidChangeTreeData = this.dataChangeEmitter.event;
        }
        ... // other function
    }

    // 数据变化主动通知
    provider.dataChangeEmitter.fire();
    
```


## TreeItem
保存有节点的显示信息

**Attribute list**

|Attribute name				|Type					|Description																																					|
|--					|--							|--																																						|
|collapsibleState	|Number						|是否可展开，目前取值有：0：不可展开；1：可展开																											|
|label				|String						|该item的显示名称																																		|
|contextValue		|String						|该item的上下文信息，在通过`menus`扩展点的`view/item/context`类别注册右键菜单时，用when表达式中的`viewItem`变量控制菜单显示。举例：`viewItem == 'test'`	|
|command			|[CommandInfo](#CommandInfo)|当选中该item时要执行的`命令`																															|
|tooltip			|String						|鼠标悬浮到该item上的tooltip提示消息																													|

## CommandInfo
配置一个`命令`需要的信息对象

**Attribute list**

|Attribute name		|Type	|Description						|
|--			|--			|--							|
|command	|String		|要执行的`命令`id			|
|arguments	|any[]		|执行该`命令`时传递的参数	|