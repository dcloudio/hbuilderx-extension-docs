# showInputBox

在窗口中間居中彈出一個輸入框，獲取用戶輸入。類似於瀏覽器的prompt方法。

#### 參數說明

|參數名稱	|參數類型							|描述			|
|--			|--									|--				|
|options	|[InputBoxOptions](#InputBoxOptions屬性列表)|輸入框設置	|

#### 返回值

|返回類型				|描述			|
|--						|--				|
|Promise&lt;String&gt;	|用戶輸入的結果	|

#### 示例

```javascript
    let inputPromise = hx.window.showInputBox({
        prompt:"請輸入密碼",
        password:true
    });
    inputPromise.then((result)=>{
        console.log("輸入的密碼爲：",result);
    });
```

#### InputBoxOptions屬性列表

> 輸入框設置

|屬性名		|屬性類型	|描述						|
|--			|--			|--							|
|prompt		|String		|輸入框的描述				|
|value		|String		|輸入框的默認值				|
|placeHolder|String		|輸入框內容爲空時的佔位內容	|
|password	|Boolean	|是否是密碼框				|