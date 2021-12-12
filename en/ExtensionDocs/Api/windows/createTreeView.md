# createTreeView

> `Supported from HBuilderX 2.7.12+`

## Introduce

Create a view with the specified viewId, and create a tab item at the same level as the `Project Manager` in the left area of the form. The content area of the tab is a tree control, which can load nodes by itself.

The viewId needs to be configured in the package.json file [views](/ExtensionDocs/ContributionPoints/README.md#views), the complete extended view process reference [How to register a new view? ](/ExtensionTutorial/views?id=treeview)

Parameter: 

|Name	|Type							|Description										|
|--			|--									|--											|
|viewId		|String								|Id of the view contributed using the extension point views.|
|options	|[TreeViewOptions](#TreeViewOptions)|Options for creating the TreeView				|

Returns：No

**Example**：

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
        hx.window.showInformationMessage("Selected TreeItem:" + param[0]);
    });
    hx.window.createTreeView("extensions.treedemo",{
        showCollapseAll:true,
        treeDataProvider:new DemoTreeDataProvider(demoData);
    });
```

## TreeViewOptions 

> Options for creating a TreeView

**Attribute list**

|Attribute name				|Type								|Description															|
|--					|--										|--																|
|showCollapseAll	|Boolean								|Whether to show collapse all action or not.												|
|treeDataProvider	|[TreeDataProvider](#TreeDataProvider)	|A data provider that provides tree data.	|


## TreeDataProvider

A data provider that provides tree data. You cannot instantiate the object directly, you need to write a subclass to implement this interface, and each custom treeDataProvider needs to implement the methods listed under this interface.

### getChildren

> Get the children of element or root if no element is passed.

**Parameter**

|Name	|Type	|Description															|
|--			|--			|--																|
|element	|Any?		|The element from which the provider gets children. Can be undefined.	|

**Returns**

|Type	|Description	|
|--			|--		|
|Promise&lt;Any[]&gt;	|Children of element or root if no element is passed.	|

### getTreeItem

> Get TreeItem representation of the element

**Parameter**

|Name	|Type	|Description									|
|--			|--			|--										|
|element	|Any?		|The element for which TreeItem representation is asked for.	|

**Returns**

|Type	|Description				|
|--			|--					|
|[TreeItem](#TreeItem)	|	TreeItem representation of the element.	|

### onDidChangeTreeData

An optional event to signal that an element or root has changed. This will trigger the view to update the changed element/root and its children recursively (if shown). **This property needs to be created by the developer when constructing the TreeDataProvider**。

**Example**:
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

    // Proactive notification of data changes
    provider.dataChangeEmitter.fire();
    
```


## TreeItem
Store the display information of the node

**Attribute list**

|Attribute name				|Type					|Description																																					|
|--					|--							|--																																						|
|collapsibleState	|Number						|Collapsible state of the tree item, 0: unexpandable; 1: expandable																					|
|label				|String						|A human-readable string describing this item. 																																		|
|contextValue		|String						|Context value of the tree item, when registering the right-click menu through the `view/item/context` of the `menus` extension point, use the `viewItem` variable in the when expression to control the menu display. Example: `viewItem =='test'`	|
|command			|[CommandInfo](#CommandInfo)|The Command that should be executed when the tree item is selected.																														|
|tooltip			|String						|The tooltip text when you hover over this item.
																													|

## CommandInfo
Configure an information object required by a `command`

**Attribute list**

|Attribute name		|Type	|Description						|
|--			|--			|--							|
|command	|String		|The id of the command to be executed			|
|arguments	|any[]		|Parameters passed when executing the `command`	|
