# Message

> Notification box in the lower right corner of the window.

## showErrorMessage

> Show an error message.

#### Parameter

|Name	|Type			|Description					|
|--			|--					|--						|
|message	|String				|Message content, support html tags	|
|buttons	|Array&lt;String&gt;|Button group in notification box		|

#### Returns

|Type				|Description									|
|--						|--										|
|Promise&lt;String&gt;	|If a button is set, return which button the user clicked	|

#### Example
``` javascript
let resultPromise = hx.window.showErrorMessage('Do you want to delete the file?',['Yes','No']);
resultPromise.then((result)=>{
    if(result == 'Yes'){
        console.log("Your choice: Yes");
    }else if(result === 'No'){
        console.log("Your choice: No");
    }
});
```

## showInformationMessage

> Show an information message to users.

#### Parameter

|Name	|Type			|Description					|
|--			|--					|--						|
|message	|String				|Message content, support html tags	|
|buttons	|Array&lt;String&gt;|Button group in notification box		|

#### Returns
|Type				|Description									|
|--						|--										|
|Promise&lt;String&gt;	|If a button is set, return which button the user clicked	|

#### Example
``` javascript
hx.window.showInformationMessage('详情可访问<a href="http://www.dcloud.io">参考文档</a>');
```

<img src="/static/snapshots/info.jpg" style="zoom:50%" />

## showWarningMessage

> Show a warning message.

#### Parameter

|Name	|Type			|Description					|
|--			|--					|--						|
|message	|String				|Message content, support html tags	|
|buttons	|Array&lt;String&gt;|Button group in notification box		|

#### Returns
|Type				|Description									|
|--						|--										|
|Promise&lt;String&gt;	|If a button is set, return which button the user clicked	|

#### Example
``` javascript
let resultPromise = hx.window.showWarningMessage('Do you want to delete the file?',['Yes','No']);
resultPromise.then((result)=>{
    if(result == 'Yes'){
        console.log("Your choice: Yes");
    }else if(result === 'No'){
        console.log("Your choice: No");
    }
});
```
