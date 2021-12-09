#  Notification box in the lower right corner of the window

## showErrorMessage

> Display an error notification box in the lower right corner of the window

#### Parameters

|Name	|Type			|Description					|
|--			|--					|--						|
|message	|String				|Message content, support html tags	|
|buttons	|Array&lt;String&gt;|Button group in notification box		|

#### Return Values

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

> Display a message notification box in the lower right corner of the window

#### Parameters

|Name	|Type			|Description					|
|--			|--					|--						|
|message	|String				|Message content, support html tags	|
|buttons	|Array&lt;String&gt;|Button group in notification box		|

#### Return Values
|Type				|Description									|
|--						|--										|
|Promise&lt;String&gt;	|If a button is set, return which button the user clicked	|

#### Example
``` javascript
hx.window.showInformationMessage('Learn More <a href="http://www.dcloud.io">Reference Documents</a>');
```

<img src="/static/snapshots/Plug-in-development/info.jpg" style="zoom:50%" />

## showWarningMessage

> Display a warning message notification box in the lower right corner of the window

#### Parameters

|Name	|Type			|Description					|
|--			|--					|--						|
|message	|String				|Message content, support html tags	|
|buttons	|Array&lt;String&gt;|Button group in notification box		|

#### Return Values
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
