# showQuickPick

Shows a selection list allowing multiple selections.

#### Parameter

|Name	|Type										|Description			|
|--			|--												|--				|
|items		|Array&lt;[QuickPickItem](#QuickPickItem)&gt;	|An array of strings, or a promise that resolves to an array of strings.	|
|options	|[QuickPickOptions](#QuickPickOptions)			|Configures the behavior of the selection list.			|

#### Returns

|Type		|Description									|
|--						|--										|
|Promise&lt;[QuickPickItem](#QuickPickItem)&gt;	||

#### Example

``` javascript
    const pickResult = hx.window.showQuickPick([
      {
        label: '../',
        description: 'Back to the previous directory录',
        backPath: 'foo/bar'
      }
    ], {placeHolder: 'Please select a directory or file'});
    
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

> If you want to pass additional data, you can add a custom attribute, when the user selects the item, it will return which candidate is selected through a callback.
