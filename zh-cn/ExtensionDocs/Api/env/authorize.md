# authorize

> HBuilderX 3.0.0+起支持

## authorize介绍
authorize二级模块对象，用于处理插件授权登录，获取HBuilderX当前登录用户的信息授权。

它是[DCloud用户开放平台](https://open.dcloud.net.cn/)在HBuilderX插件API中的具体体现。

使用场景：

三方的开发者服务商，比如Git服务商，可以制作HBuilderX插件，并且将账户打通。比如插件注册项目的右键菜单，在HBuilderX中对项目点右键，一键上传到某Git服务商，且无需再重复注册三方Git服务账户。

当然不止是Git服务商，所有其他开发者服务商，如测试、加固、多渠道发布、招聘...，均可通过[DCloud用户开放平台](https://open.dcloud.net.cn/)共享DCloud的开发者资源。

使用步骤：

1. 三方开发商需要在[DCloud用户开放平台](https://open.dcloud.net.cn/)注册插件应用
2. 开发HBuilderX插件，调用 `hx.authorize.login` API，拿到code码。（见下面文档）
3. 插件将code码传到三方开发商服务器，从服务器端向 DCloud用户开放平台 的服务器请求，获取用户信息。文档详见：[https://ask.dcloud.net.cn/article/38005](https://ask.dcloud.net.cn/article/38005)

对应的效果如下图所示：

<img src = "/static/snapshots/Plug-in-development/authorize.png" />

## login

#### 参数说明

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|params		| Object	|授权登录必要的信息|

参数属性说明

|属性名		|属性类型	|描述									|
|--			|--			|--										|
|client_id |String		|  在[DCloud开发者开放开台](https://open.dcloud.net.cn/)添加授权插件后创建的client_id |
|scopes |Array&lt;String&gt;		| 授权范围列表, 取值范围：basic, email, phone。basic必填|
|description | String	| 关于授权信息描述，可以向用户简单解释插件将如何使用申请的信息（HBuilderX 3.1.7新增） |

basic包括用户的openid、昵称、头像。

email和phone请谨慎使用，非必要申请授权会招致HBuilderX的用户反感。

同时注意在调用login方法后，HBuilderX会弹出授权确认框，用户可能拒绝授权或拒绝授权email、phone等敏感信息。

#### 返回值

|返回类型										|描述			|
|--												|--				|
|Promise&lt;Object&gt;	| Promise对象	|

返回值属性说明

|属性名		|属性类型	|描述									|
|--			|--			|--										|
|code |String		| CODE码，有效期5分钟。用于插件作者服务器端换取accessToken，通过accessToken换取授权的基本信息 |
|error |Number		| code获取失败时的错误码 |

#### 示例
``` javascript
    let prom = hx.authorize.login({ client_id: "your client id", scopes: ['basic', 'email','phone'], description: "for test"});
    prom.then(function (param) {
		// param['code']
		// param['error']
	});
```

#### 主要错误码信息

|错误码		| 描述									|
|--			|--										|
|0	| 无错误 |
|1	| 当前没有登录用户 |
|2	| 用户取消了授权（直接关闭窗口操作） |
|3 	| （已废弃） |
|4	| 插件状态异常 |
|5	| 用户拒绝授权（用户点击拒绝），或当申请的scopes包含拒绝的授权时会返回该错误码，不影响已通过的授权 |
|1002	| 服务器参数错误 |
|2001	| 应用信息不存在，在[DCloud开发者开放开台](https://open.dcloud.net.cn/)检查client_id与插件id是否错误或匹配，插件规范参考[这里](/ExtensionDocs/manifest)。|
|3004	| 超时 |
|3203	| 404 |

- *关于错误码 2001，开发者在创建HBuilderX插件项目，会以填写的项目名称作为插件目录和插件id。插件开发过程中，在[DCloud开发者开放开台](https://open.dcloud.net.cn/)新增授权申请时需要填写此插件id，与生成的client_id绑定。最终在提交至插件市场时，如果更换了新的插件id，为保证本地正常开发，需要修改插件目录为新的id，并在[DCloud开发者开放开台](https://open.dcloud.net.cn/)重新提交申请。*

- *关于错误码 3，开发者在测试过程中，如果需要重新弹出授权窗口，可以手动删除HBuilderX缓存的加密授权信息记录。Windows平台位置：C:\Users\[UserName]\AppData\Roaming\HBuilder X\prefs, MacOS平台位置：~/Library/Application Support/HBuilder X/prefs，删除该文件[authorization]组下所有内容。*


## onUserLogin
用户登录事件

#### 参数说明

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|callback		|Function		|用户登录时的回调函数，无参数|

#### 返回值

|返回类型		|描述			|
|--				|--				|
|[Disposable](#Disposable)	| Disposable	|


#### 示例
``` javascript
    hx.authorize.onUserLogin(function(){
        // do something
    });
```

## onUserLogout
当前登录用户退出事件

#### 参数说明

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|callback		|Function		|当前登录用户退出时的回调函数，无参数|

#### 返回值

|返回类型	|描述			|
|--			|--				|
|[Disposable](#Disposable)	| Disposable对象	|

#### 示例
``` javascript
    hx.authorize.onUserLogout(function(){
        // do something
    });
```