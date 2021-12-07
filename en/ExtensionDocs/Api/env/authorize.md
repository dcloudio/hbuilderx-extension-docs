# authorize

> Supported from HBuilderX 3.0.0+

## authorize summary
authorize is the second-level module authorization object, used to process extension login, and obtain the information authorization of the current user who log in to HBuilderX.

It is an example of [DCloud Platform](https://open.dcloud.net.cn/) in HBuilderX extension API.

Scenes:

Three-party developer service providers, such as Git, which can make HBuilderX extension and allow developer to setup accounts setting. Then, If this extension is registered with the right-click menu of the project, right-click the project in HBuilderX, and upload codes to a Git service provider with one click, and there is no need to re-register third-party Git service accounts.

Of course, not only Git service providers, all other developer service providers, such as testing, reinforcement, multi-channel publishing, recruitment..., can pass [DCloud Platform](https://open.dcloud.net.cn/) to share the developer resources of DCloud.

Steps:

1. Third-party developers need to register extension applications in [DCloud Platform](https://open.dcloud.net.cn/)
2. Develop the HBuilderX extension, call the `hx.authorize.login` API, and get the code code. (See document below)
3. The extension transmits the code to the third-party developer server, and requests from the server of the DCloud platform to obtain user information. For details, please refer to: [https://ask.dcloud.net.cn/article/38005](https://ask.dcloud.net.cn/article/38005)

As shown below:

<img src = "/static/snapshots/Plug-in-development/authorize.png" />

## login

#### Parameter

|Name	|Type	|Description			|
|--			|--			|--				|
|params		| Object	|Authorize login information|

Attributes

|Attribute name		|Type	|Description									|
|--			|--			|--										|
|client_id |String		|  The client_id created after adding the authorization extension in [DCloud Platform](https://open.dcloud.net.cn/) |
|scopes |Array&lt;String&gt;		| Authorization range list, value range: basic, email, phone. basic is required.|
|description | String	| Regarding the description of the authorization information, you can simply explain to the user how the plug-in will use the requested information (new in HBuilderX 3.1.7) |

Basic includes the user's openid, nickname, and avatar.

Email and phone should only be applied when necessary. Non-essential application for authorization will arouse the disgust of HBuilderX users.

At the same time, note that after calling the login method, HBuilderX will pop up an authorization confirmation box, and the user may refuse to authorize or refuse to authorize sensitive information such as email and phone.

#### Returns

|Type								|Description			|
|--												|--				|
|Promise&lt;Object&gt;	| Promise Object	|

Return attribute description

|Attribute name		|Type	|Description									|
|--			|--			|--										|
|code |String		| CODE is only valid for 5 minutes. Used to exchange the accessToken for the plug-in server, and exchange the basic information of authorization through the accessToken |
|error |Number		| The error code when the code acquisition fails |

#### Example
``` javascript
    let prom = hx.authorize.login({ client_id: "your client id", scopes: ['basic', 'email','phone'], description: "for test"});
    prom.then(function (param) {
		// param['code']
		// param['error']
	});
```

#### Primary error codes

|Error code		| Description									|
|--			|--										|
|0	| No error |
|1	| No logged-in users |
|2	| The user canceled the authorization (close the window directly) |
|3 	| (Obsolete)） |
|4	| Extension status is abnormal |
|5	| The user refuses the authorization (the user clicks to refuse), or the error code will be returned when the scopes applied for contains a denied authorization, which does not affect the authorized authorization |
|1002	| Server parameter error |
|2001	| The application information does not exist. Check [DCloud Platform](https://open.dcloud.net.cn/) to check whether the client_id and the extension id are wrong or match, please refer to the extension specification [here] (/ExtensionDocs/manifest)。|
|3004	| Timeout |
|3203	| 404 |

- *Regarding error code 2001, when a developer creates an HBuilderX extension project, the project name filled in will be used as the extension directory and extension id. In the process of extension development, you need to fill in the extension id when adding a new authorization application in [DCloud  Platform] (https://open.dcloud.net.cn/) and bind it with the generated client_id. In the final submission to the plug-in market, if a new extension id is changed, in order to ensure normal local development, the extension directory needs to be modified to the new id, and the extension catalog must be changed to [DCloud Platform](https://open.dcloud. net.cn/) resubmit the application. *

- *Regarding error code 3, developers can manually delete the encrypted authorization information records cached by HBuilderX if they need to re-pop up the authorization window during the test. Windows platform location: C:\Users\[UserName]\AppData\Roaming\HBuilder X\prefs, MacOS platform location: ~/Library/Application Support/HBuilder X/prefs, delete all content under the file [authorization] group. *


## onUserLogin
User login event

#### Parameter

|Name	|Type	|Description			|
|--			|--			|--				|
|callback		|Function		|Callback function when the user logs in, no parameters|

#### Returns

|Type|Description			|
|--				|--				|
|[Disposable](#Disposable)	| Disposable	|


#### Example
``` javascript
    hx.authorize.onUserLogin(function(){
        // do something
    });
```

## onUserLogout
Logout event of logged in user

#### Parameter

|Name	|Type	|Description			|
|--			|--			|--				|
|callback		|Function		| Callback function when the currently logged in user exits, no parameters

#### Returns

|Type	|Description			|
|--			|--				|
|[Disposable](#Disposable)	| Disposable Object	|

#### Example
``` javascript
    hx.authorize.onUserLogout(function(){
        // do something
    });
```
