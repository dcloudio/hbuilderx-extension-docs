#  Notification box in the lower right corner of the window

## showErrorMessage

> Show an error message in the lower right corner of the window.

#### Parameters

|Name	|Type			|Description					|
|--			|--					|--						|
|message	|String				|The message to show, support html tags	|
|buttons	|Array&lt;String&gt;|Button group in notification box		|

#### Returns

|Type				|Description									|
|--						|--										|
|Promise&lt;String&gt;	||

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

> Show an information message in the lower right corner of the window.

#### Parameters

|Name	|Type			|Description					|
|--			|--					|--						|
|message	|String				|The message to show, support html tags	|
|buttons	|Array&lt;String&gt;|Button group in notification box		|

#### Returns
|Type				|Description									|
|--						|--										|
|Promise&lt;String&gt;	|	|

#### Example
``` javascript
hx.window.showInformationMessage('Learn More <a href="http://www.dcloud.io">Reference Documents</a>');
```

<img src="/static/snapshots/Plug-in-development/info.jpg" style="zoom:50%" />

## showWarningMessage

> Show a warning message in the lower right corner of the window.

#### Parameters

|Name	|Type			|Description					|
|--			|--					|--						|
|message	|String				|The message to show, support html tags	|
|buttons	|Array&lt;String&gt;|Button group in notification box		|

#### Returns
|Type				|Description									|
|--						|--										|
|Promise&lt;String&gt;	||

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
