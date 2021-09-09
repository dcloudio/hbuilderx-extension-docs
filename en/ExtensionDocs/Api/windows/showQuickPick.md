# showQuickPick

In the middle of the window, Shows a selection list allowing multiple selections.

#### Parameter

|Name	|Type										|Description			|
|--			|--												|--				|
|items		|Array&lt;[QuickPickItem](#QuickPickItem)&gt;	|An array of strings, or a promise that resolves to an array of strings.	|
|options	|[QuickPickOptions](#QuickPickOptions)			|Configures the behavior of the selection list.			|

#### Returns

|Type		|Description									|
|--						|--										|
|Promise&lt;[QuickPickItem](#QuickPickItem)&gt;	|A promise that resolves to the selected items or undefined.|

#### Example

``` javascript
    const pickResult = hx.window.showQuickPick([
      {
        label: '../',
        description: '回到上一级目录',
        backPath: 'foo/bar'
      }
    ], {placeHolder: '请选择一个目录或者文件'});
    
    pickResult.then(function(result) {
      if (!result) {
        return;
      }
      let backPath = result.backPath;
      //do something with result
    })
```


#### QuickPickOptions

> Options to configure the behavior of the quick pick UI.

|Attribute name		|Type	|Description									|
|--			|--			|--										|
|placeHolder|String		|An optional string to show as placeholder in the input box to guide the user what to pick on.	|


#### QuickPickItem

> Represents an item that can be selected from a list of items.

|Attribute name		|Type	|Description		|
|--			|--			|--			|
|label		|String		|A human-readable string which is rendered prominent. 	|
|description|String		|A human-readable string which is rendered less prominent in the same line.	|

> 如果要传递额外的数据，可以追加自定义的属性，当用户选择该项后，会通过回调返回选择了哪个候选项