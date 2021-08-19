# showQuickPick

在窗口中間彈出一個可搜索的建議選擇列表

#### 參數說明

|參數名稱	|參數類型										|描述			|
|--			|--												|--				|
|items		|Array&lt;[QuickPickItem](#QuickPickItem)&gt;	|建議選擇項列表	|
|options	|[QuickPickOptions](#QuickPickOptions)			|設置			|

#### 返回值

|返回類型				|描述									|
|--						|--										|
|Promise&lt;[QuickPickItem](#QuickPickItem)&gt;	|返回用戶選擇得某個列表項|

#### 示例

``` javascript
    const pickResult = hx.window.showQuickPick([
      {
        label: '../',
        description: '回到上一級目錄',
        backPath: 'foo/bar'
      }
    ], {placeHolder: '請選擇一個目錄或者文件'});
    
    pickResult.then(function(result) {
      if (!result) {
        return;
      }
      let backPath = result.backPath;
      //do something with result
    })
```


#### QuickPickOptions

> 快速選擇框設置

|屬性名		|屬性類型	|描述									|
|--			|--			|--										|
|placeHolder|String		|快速選擇框上的搜索框爲空時的佔位文本	|


#### QuickPickItem

> 快速選擇候選項

|屬性名		|屬性類型	|描述		|
|--			|--			|--			|
|label		|String		|候選項名稱	|
|description|String		|候選項描述	|

> 如果要傳遞額外的數據，可以追加自定義的屬性，當用戶選擇該項後，會通過回調返回選擇了哪個候選項