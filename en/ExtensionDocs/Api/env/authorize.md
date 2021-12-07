# authorize

> Supported from HBuilderX 3.0.0+

## authorize summary
authorize is the second-level module authorization object, used to process extension login, and obtain the information authorization of the current user who log in to HBuilderX.

It is [DCloud Platform](https://open.dcloud.net.cn/) an example in HBuilderX extension API.

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
|params		| Object	|Information necessary to authorize login|

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

#### 主要错误码信息

|Error code		| Description									|
|--			|--										|
|0	| No error |
|1	| No logged-in users |
|2	| The user canceled the authorization (close the window directly) |
|3 	| (Obsolete)） |
|4	| Extension status is abnormal |
|5	| The user refuses the authorization (the user clicks to refuse), or the error code will be returned when the scopes applied for contains a denied authorization, which does not affect the authorized authorization |
|1002	| Server parameter error |
|2001	| 应用信息不存在，在[DCloud开发者开放开台](https://open.dcloud.net.cn/)检查client_id与插件id是否错误或匹配，插件规范参考[这里](/ExtensionDocs/manifest)。|
|3004	| Timeout |
|3203	| 404 |

- *关于错误码 2001，开发者在创建HBuilderX插件项目，会以填写的项目名称作为插件目录和插件id。插件开发过程中，在[DCloud开发者开放开台](https://open.dcloud.net.cn/)新增授权申请时需要填写此插件id，与生成的client_id绑定。最终在提交至插件市场时，如果更换了新的插件id，为保证本地正常开发，需要修改插件目录为新的id，并在[DCloud开发者开放开台](https://open.dcloud.net.cn/)重新提交申请。*

- *关于错误码 3，开发者在测试过程中，如果需要重新弹出授权窗口，可以手动删除HBuilderX缓存的加密授权信息记录。Windows平台位置：C:\Users\[UserName]\AppData\Roaming\HBuilder X\prefs, MacOS平台位置：~/Library/Application Support/HBuilder X/prefs，删除该文件[authorization]组下所有内容。*


## onUserLogin
用户登录事件

#### Parameter

|Name	|Type	|Description			|
|--			|--			|--				|
|callback		|Function		|用户登录时的回调函数，无参数|

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
