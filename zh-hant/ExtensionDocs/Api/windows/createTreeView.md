# createTreeView

> `從HBuilderX 2.7.12及以上版本開始支持`

## 介紹

創建指定viewId的視圖，在窗體左側區域創建一個和`項目管理器`同級的tab項。tab的內容區爲一個樹控件，可自行裝載節點。

viewId需要在package.json文件內的配置擴展點[views](/ExtensionDocs/ContributionPoints/README.md#views)中聲明，完整的擴展視圖流程參考[如何註冊一個新的視圖？](/ExtensionTutorial/views?id=treeview)

參數說明: 

|參數名稱	|參數類型							|描述										|
|--			|--									|--											|
|viewId		|String								|視圖Id，需要首先在配置擴展點`views`中聲明。|
|options	|[TreeViewOptions](#TreeViewOptions)|創建TreeView時需要的設置項。				|

返回值：無

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
        hx.window.showInformationMessage("選中了TreeItem:" + param[0]);
    });
    hx.window.createTreeView("extensions.treedemo",{
        showCollapseAll:true,
        treeDataProvider:new DemoTreeDataProvider(demoData);
    });
```

## TreeViewOptions 

> 創建TreeView需要的配置項

**屬性列表**

|屬性名				|屬性類型								|描述															|
|--					|--										|--																|
|showCollapseAll	|Boolean								|是否顯示摺疊所有												|
|treeDataProvider	|[TreeDataProvider](#TreeDataProvider)	|TreeView樹控件獲取數據的接口，需要自己寫一個子類實現該接口。	|


## TreeDataProvider

TreeView樹控件獲取數據的接口，不可直接實例化該對象，需要自己寫一個子類實現該接口，每個自定義的treeDataProvider都需要實現該接口下列出的方法

### getChildren

> 獲取某個節點的下的子節點，如果參數爲空，則表示要獲取根節點

**參數說明**

|參數名稱	|參數類型	|描述															|
|--			|--			|--																|
|element	|Any?		|獲取該節點下的子節點列表，如果參數爲空，則是要獲取根節點列表	|

**返回值**

|返回類型	|描述	|
|--			|--		|
|Promise&lt;Any[]&gt;	|Promise	|

### getTreeItem

> 獲取用於顯示自定義數據element(通過getChildren獲取的對象)的TreeItem對象

**參數說明**

|參數名稱	|參數類型	|描述									|
|--			|--			|--										|
|element	|Any?		|通過getChildren獲取的列表對象中某一項	|

**返回值**

|返回類型	|描述				|
|--			|--					|
|[TreeItem](#TreeItem)	|保存有節點的顯示信息	|

### onDidChangeTreeData
該接口用於通知HBuilderX數據變化，需要刷新視圖，目前僅支持刷新整個視圖。**該屬性需要開發者在構造TreeDataProvider時創建**。

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

    // 數據變化主動通知
    provider.dataChangeEmitter.fire();
    
```


## TreeItem
保存有節點的顯示信息

**屬性列表**

|屬性名				|屬性類型					|描述																																					|
|--					|--							|--																																						|
|collapsibleState	|Number						|是否可展開，目前取值有：0：不可展開；1：可展開																											|
|label				|String						|該item的顯示名稱																																		|
|contextValue		|String						|該item的上下文信息，在通過`menus`擴展點的`view/item/context`類別註冊右鍵菜單時，用when表達式中的`viewItem`變量控制菜單顯示。舉例：`viewItem == 'test'`	|
|command			|[CommandInfo](#CommandInfo)|當選中該item時要執行的`命令`																															|
|tooltip			|String						|鼠標懸浮到該item上的tooltip提示消息																													|

## CommandInfo
配置一個`命令`需要的信息對象

**屬性列表**

|屬性名		|屬性類型	|描述						|
|--			|--			|--							|
|command	|String		|要執行的`命令`id			|
|arguments	|any[]		|執行該`命令`時傳遞的參數	|