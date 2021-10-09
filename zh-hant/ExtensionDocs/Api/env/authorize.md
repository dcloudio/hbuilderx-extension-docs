# authorize

> HBuilderX 3.0.0+起支持

## authorize介紹
authorize二級模塊對象，用於處理插件授權登錄，獲取HBuilderX當前登錄用戶的信息授權。

它是[DCloud用戶開放平臺](https://open.dcloud.net.cn/)在HBuilderX插件API中的具體體現。

使用場景：

三方的開發者服務商，比如Git服務商，可以製作HBuilderX插件，並且將賬戶打通。比如插件註冊項目的右鍵菜單，在HBuilderX中對項目點右鍵，一鍵上傳到某Git服務商，且無需再重複註冊三方Git服務賬戶。

當然不止是Git服務商，所有其他開發者服務商，如測試、加固、多渠道發佈、招聘...，均可通過[DCloud用戶開放平臺](https://open.dcloud.net.cn/)共享DCloud的開發者資源。

使用步驟：

1. 三方開發商需要在[DCloud用戶開放平臺](https://open.dcloud.net.cn/)註冊插件應用
2. 開發HBuilderX插件，調用 `hx.authorize.login` API，拿到code碼。（見下面文檔）
3. 插件將code碼傳到三方開發商服務器，從服務器端向 DCloud用戶開放平臺 的服務器請求，獲取用戶信息。文檔詳見：[https://ask.dcloud.net.cn/article/38005](https://ask.dcloud.net.cn/article/38005)

對應的效果如下圖所示：

<img src = "/static/snapshots/Plug-in-development/authorize.png" />

## login

#### 參數說明

|參數名稱	|參數類型	|描述			|
|--			|--			|--				|
|params		| Object	|授權登錄必要的信息|

參數屬性說明

|屬性名		|屬性類型	|描述									|
|--			|--			|--										|
|client_id |String		|  在[DCloud開發者開放開臺](https://open.dcloud.net.cn/)添加授權插件後創建的client_id |
|scopes |Array&lt;String&gt;		| 授權範圍列表, 取值範圍：basic, email, phone。basic必填|
|description | String	| 關於授權信息描述，可以向用戶簡單解釋插件將如何使用申請的信息（HBuilderX 3.1.7新增） |

basic包括用戶的openid、暱稱、頭像。

email和phone請謹慎使用，非必要申請授權會招致HBuilderX的用戶反感。

同時注意在調用login方法後，HBuilderX會彈出授權確認框，用戶可能拒絕授權或拒絕授權email、phone等敏感信息。

#### 返回值

|返回類型										|描述			|
|--												|--				|
|Promise&lt;Object&gt;	| Promise對象	|

返回值屬性說明

|屬性名		|屬性類型	|描述									|
|--			|--			|--										|
|code |String		| CODE碼，有效期5分鐘。用於插件作者服務器端換取accessToken，通過accessToken換取授權的基本信息 |
|error |Number		| code獲取失敗時的錯誤碼 |

#### 示例
``` javascript
    let prom = hx.authorize.login({ client_id: "your client id", scopes: ['basic', 'email','phone'], description: "for test"});
    prom.then(function (param) {
		// param['code']
		// param['error']
	});
```

#### 主要錯誤碼信息

|錯誤碼		| 描述									|
|--			|--										|
|0	| 無錯誤 |
|1	| 當前沒有登錄用戶 |
|2	| 用戶取消了授權（直接關閉窗口操作） |
|3 	| （已廢棄） |
|4	| 插件狀態異常 |
|5	| 用戶拒絕授權（用戶點擊拒絕），或當申請的scopes包含拒絕的授權時會返回該錯誤碼，不影響已通過的授權 |
|1002	| 服務器參數錯誤 |
|2001	| 應用信息不存在，在[DCloud開發者開放開臺](https://open.dcloud.net.cn/)檢查client_id與插件id是否錯誤或匹配，插件規範參考[這裏](/ExtensionDocs/manifest)。|
|3004	| 超時 |
|3203	| 404 |

- *關於錯誤碼 2001，開發者在創建HBuilderX插件項目，會以填寫的項目名稱作爲插件目錄和插件id。插件開發過程中，在[DCloud開發者開放開臺](https://open.dcloud.net.cn/)新增授權申請時需要填寫此插件id，與生成的client_id綁定。最終在提交至插件市場時，如果更換了新的插件id，爲保證本地正常開發，需要修改插件目錄爲新的id，並在[DCloud開發者開放開臺](https://open.dcloud.net.cn/)重新提交申請。*

- *關於錯誤碼 3，開發者在測試過程中，如果需要重新彈出授權窗口，可以手動刪除HBuilderX緩存的加密授權信息記錄。Windows平臺位置：C:\Users\[UserName]\AppData\Roaming\HBuilder X\prefs, MacOS平臺位置：~/Library/Application Support/HBuilder X/prefs，刪除該文件[authorization]組下所有內容。*


## onUserLogin
用戶登錄事件

#### 參數說明

|參數名稱	|參數類型	|描述			|
|--			|--			|--				|
|callback		|Function		|用戶登錄時的回調函數，無參數|

#### 返回值

|返回類型		|描述			|
|--				|--				|
|[Disposable](#Disposable)	| Disposable	|


#### 示例
``` javascript
    hx.authorize.onUserLogin(function(){
        // do something
    });
```

## onUserLogout
當前登錄用戶退出事件

#### 參數說明

|參數名稱	|參數類型	|描述			|
|--			|--			|--				|
|callback		|Function		|當前登錄用戶退出時的回調函數，無參數|

#### 返回值

|返回類型	|描述			|
|--			|--				|
|[Disposable](#Disposable)	| Disposable對象	|

#### 示例
``` javascript
    hx.authorize.onUserLogout(function(){
        // do something
    });
```