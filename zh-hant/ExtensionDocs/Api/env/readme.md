# env

> 從HBuilderX 2.7.6及以上版本開始支持

env二級模塊對象，包含運行環境信息和系統交互相關的方法

**屬性列表**

|屬性名		|屬性類型				|描述																	|
|--			|--						|--																		|
|appName	|String					|應用程序名稱：HBuilder X												|
|appVersion	|String					|應用程序主版本號，可在菜單【幫助】-【關於】中查看						|
|appRoot	|String					|應用程序安裝路徑														|
|appData	|String					|應用程序數據存放路徑													|
|clipboard	|[Clipboard](/ExtensionDocs/Api/env/Clipboard)|剪切板對象，可用於讀取剪切板內容和寫入內容到剪切板，目前僅支持文本格式	|

#### 示例

```js
# 獲取應用程序名稱
const appName = hx.env.appName;

# 獲取應用程序主版本號
const appVersion = hx.env.appVersion;
```