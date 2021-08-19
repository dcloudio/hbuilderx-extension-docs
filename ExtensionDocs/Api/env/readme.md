# env

> 从HBuilderX 2.7.6及以上版本开始支持

env二级模块对象，包含运行环境信息和系统交互相关的方法

**属性列表**

|属性名		|属性类型				|描述																	|
|--			|--						|--																		|
|appName	|String					|应用程序名称：HBuilder X												|
|appVersion	|String					|应用程序主版本号，可在菜单【帮助】-【关于】中查看						|
|appRoot	|String					|应用程序安装路径														|
|appData	|String					|应用程序数据存放路径													|
|clipboard	|[Clipboard](/ExtensionDocs/Api/env/Clipboard)|剪切板对象，可用于读取剪切板内容和写入内容到剪切板，目前仅支持文本格式	|

#### 示例

```js
# 获取应用程序名称
const appName = hx.env.appName;

# 获取应用程序主版本号
const appVersion = hx.env.appVersion;
```