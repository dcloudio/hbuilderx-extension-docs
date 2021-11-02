# 窗口右下角通知框

## showErrorMessage
在窗口右下角顯示錯誤通知框
#### 參數說明

|參數名稱	|參數類型			|描述					|
|--			|--					|--						|
|message	|String				|消息內容,支持html標籤	|
|buttons	|Array&lt;String&gt;|通知框中的按鈕組		|

#### 返回值
|返回類型				|描述									|
|--						|--										|
|Promise&lt;String&gt;	|如果設置了按鈕，返回用戶點擊了哪個按鈕	|

#### 示例
``` javascript
    let resultPromise = hx.window.showErrorMessage('是否刪除該文件?',['是','否']);
    resultPromise.then((result)=>{
        if(result == '是'){
            console.log("選擇了是");
        }else if(result === '否'){
            console.log("選擇了否");
        }
    });
```

## showInformationMessage
在窗口右下角顯示消息通知框
#### 參數說明

|參數名稱	|參數類型			|描述					|
|--			|--					|--						|
|message	|String				|消息內容,支持html標籤	|
|buttons	|Array&lt;String&gt;|通知框中的按鈕組		|

#### 返回值
|返回類型				|描述									|
|--						|--										|
|Promise&lt;String&gt;	|如果設置了按鈕，返回用戶點擊了哪個按鈕	|

#### 示例
``` javascript
    hx.window.showInformationMessage('詳情可訪問<a href="http://www.dcloud.io">參考文檔</a>');
```
效果如下：

<img src="/static/snapshots/Plug-in-development/info.jpg" style="zoom:50%" />

## showWarningMessage
在窗口右下角顯示警告消息通知框
#### 參數說明

|參數名稱	|參數類型			|描述					|
|--			|--					|--						|
|message	|String				|消息內容,支持html標籤	|
|buttons	|Array&lt;String&gt;|通知框中的按鈕組		|

#### 返回值
|返回類型				|描述									|
|--						|--										|
|Promise&lt;String&gt;	|如果設置了按鈕，返回用戶點擊了哪個按鈕	|

#### 示例
``` javascript
    let resultPromise = hx.window.showWarningMessage('是否刪除該文件?',['是','否']);
    resultPromise.then((result)=>{
        if(result == '是'){
            console.log("選擇了是");
        }else if(result === '否'){
            console.log("選擇了否");
        }
    });
```
