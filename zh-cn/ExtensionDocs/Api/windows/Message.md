# 窗口右下角通知框

## showErrorMessage
在窗口右下角显示错误通知框
#### 参数说明

|参数名称	|参数类型			|描述					|
|--			|--					|--						|
|message	|String				|消息内容,支持html标签	|
|buttons	|Array&lt;String&gt;|通知框中的按钮组		|

#### 返回值
|返回类型				|描述									|
|--						|--										|
|Promise&lt;String&gt;	|如果设置了按钮，返回用户点击了哪个按钮	|

#### 示例
``` javascript
    let resultPromise = hx.window.showErrorMessage('是否删除该文件?',['是','否']);
    resultPromise.then((result)=>{
        if(result == '是'){
            console.log("选择了是");
        }else if(result === '否'){
            console.log("选择了否");
        }
    });
```

## showInformationMessage
在窗口右下角显示消息通知框
#### 参数说明

|参数名称	|参数类型			|描述					|
|--			|--					|--						|
|message	|String				|消息内容,支持html标签	|
|buttons	|Array&lt;String&gt;|通知框中的按钮组		|

#### 返回值
|返回类型				|描述									|
|--						|--										|
|Promise&lt;String&gt;	|如果设置了按钮，返回用户点击了哪个按钮	|

#### 示例
``` javascript
    hx.window.showInformationMessage('详情可访问<a href="http://www.dcloud.io">参考文档</a>');
```
效果如下：

<img src="/static/snapshots/Plug-in-development/info.jpg" style="zoom:50%" />

## showWarningMessage
在窗口右下角显示警告消息通知框
#### 参数说明

|参数名称	|参数类型			|描述					|
|--			|--					|--						|
|message	|String				|消息内容,支持html标签	|
|buttons	|Array&lt;String&gt;|通知框中的按钮组		|

#### 返回值
|返回类型				|描述									|
|--						|--										|
|Promise&lt;String&gt;	|如果设置了按钮，返回用户点击了哪个按钮	|

#### 示例
``` javascript
    let resultPromise = hx.window.showWarningMessage('是否删除该文件?',['是','否']);
    resultPromise.then((result)=>{
        if(result == '是'){
            console.log("选择了是");
        }else if(result === '否'){
            console.log("选择了否");
        }
    });
```
