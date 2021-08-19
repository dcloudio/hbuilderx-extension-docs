# showMessageBox
> `從HBuilderX 2.9.12及以上版本開始支持`

在窗口顯示可供選擇的對話框

#### 參數說明

|參數名稱	|參數類型			|描述					|
|--			|--					|--						|
|options	|[MessageBoxOptions](#對話框屬性)|對話框內容|

#### 返回值

|返回類型				|描述									|
|--						|--										|
|Promise&lt;String&gt;	|如果設置了按鈕，返回用戶點擊了哪個按鈕	|


#### 對話框屬性

對話框設置，相關屬性

|屬性名		|屬性類型	|描述						|
|--			|--			|--							|
|type		|String		|消息類型,取值有['warning'，'info'，'error'，'question'] |
|title		|String		|對話框標題				|
|text		|String		|對話框內容				|
|buttons	|Array&lt;String&gt;|對話框中的按鈕組 |
|defaultButton	|String	|默認按鈕索引，可不填默認0 |
|escapeButton	|String	|默認Esc後執行的操作按鈕索引，可不填默認1 |


#### 示例

``` javascript
let result = hx.window.showMessageBox({
    type: 'error',
    title: '測試對話框',
    text: '這裏是測試對話框內容',
    buttons: ['確定', '取消']
});
result.then((button) => {
    if (button == '確定') {
        
    } else if (button == '取消') {
        
    }
});
```