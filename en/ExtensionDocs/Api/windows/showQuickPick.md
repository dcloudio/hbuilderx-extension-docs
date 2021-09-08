# showQuickPick

在窗口中间弹出一个可搜索的建议选择列表

#### Parameter

|Name	|Type										|Description			|
|--			|--												|--				|
|items		|Array&lt;[QuickPickItem](#QuickPickItem)&gt;	|建议选择项列表	|
|options	|[QuickPickOptions](#QuickPickOptions)			|设置			|

#### Returns

|Type		|Description									|
|--						|--										|
|Promise&lt;[QuickPickItem](#QuickPickItem)&gt;	|返回用户选择得某个列表项|

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

> 快速选择框设置

|Attribute name		|Type	|Description									|
|--			|--			|--										|
|placeHolder|String		|快速选择框上的搜索框为空时的占位文本	|


#### QuickPickItem

> 快速选择候选项

|Attribute name		|Type	|Description		|
|--			|--			|--			|
|label		|String		|候选项名称	|
|description|String		|候选项描述	|

> 如果要传递额外的数据，可以追加自定义的属性，当用户选择该项后，会通过回调返回选择了哪个候选项