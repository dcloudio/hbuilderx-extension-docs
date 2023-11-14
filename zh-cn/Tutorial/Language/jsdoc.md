# HBuilder JSDoc+规范

> 旧版文档： <https://ask.dcloud.net.cn/article/129>

## 介绍@intro

**JSDoc有2个作用，导出API文档和明确代码类型，辅助代码提示。**

JSDoc描述了函数或变量的功能、值域、示例等很多代码提示时需要的数据，还可以通过类型定义，给动态的JS变量或函数赋予明确的类型。

HBuilder/HBuilderX支持JSDoc的书写和解析，JSDoc详细的标签介绍及语法请参考[JSDoc](https://jsdoc.app/index.html#block-tags)。
但是标准的JSDoc不满足Hx的需求，为了提高JS代码类型解析的精确性和实现更强大的代码助手提示，我们扩展了JSDoc。

*   对于普通开发者，书写JSDoc有助于代码可读性的提升，在很多要求严格的大公司，JSDoc是强制要求编写的。
    完善的JSDoc也能让开发者自定义的函数在引用时得到更方便的代码提示。

*   对于框架开发者，书写好的JSDoc是必须的，除了生成API手册，良好的JSDoc可以让框架在IDE里得到更好的提示。

## JSDoc写法

在hx中，敲`/**`回车即可生成JSDoc注释模板


## 支持的标签@support-tags

*   下面是`HBuilderX`会`解析`的一些标签，对JS解析引擎`确定变量类型`时有一定的帮助。

| 标签							| 用法													| 说明													|
| :--------------------------	| :-----------------------------						| :---------------------------------------------------	|
| [description](#description)	| @description 内容										| 描述。支持markdown语法								|
| [example](#example)			| @example												| 示例代码，可以多行，支持 markdown 语法				|
| [param](#param)				| @param {Type} paramName 描述							| 可以指定参数类型及描述								|
| [property](#property)			| @property {Type} propName 描述						| 可以指定对象属性类型及描述							|
| [value](#value)				| @value value描述										| 变量支持的值域，需要紧跟在@property或者@param后面		|
| [defaultValue](#defaultValue)	| @defaultValue value									| 默认值												|
| [remark](#remark)				| @remark 内容											| 提供注意事项说明，可以多行，支持 markdown 语法		|
| [return](#return)				| {属性类型}											| 描述函数的返回值										|
| [since](#since)				| 无													| 版本号 从哪个 HBuilderX 或者编译器版本开始支持		|
| [tutorial](#tutorial)			| @tutorial url											| 引用教程文档											|
| [type](#type)					| @type {Type}											| 描述变量的类型										|
| [uniPlatform](#uniplatform)	| `@uniPlatform { "app":{...},"mp":{...},"web":{...}} }`	| 用于提供兼容性信息。仅用于`uni-app`项目				|


### @description

使用@description可以在代码提示时显示被描述变量或者函数的描述信息。

**语法**

```javascript
@description 描述内容
```

**示例**

```javascript
/**
 * @description 这是一个动物的构建函数
 */
function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}
```

**截图**
![description](https://web-assets.dcloud.net.cn/hbuilderx-doc/jsDoc/description.png)


### @example

使用@example可以提示代码示例。

**语法**

```javascript
@example 示例内容
```

**示例**

```javascript
/**
 * @description 这是一个构造函数
 * @example
 * 函数使用示例：
 * var animal = new Animal('cat', 10);
 */
function Animal(name,weight){
	this.name = name;
	this.weight = weight;
}
```

**截图**
![example](https://web-assets.dcloud.net.cn/hbuilderx-doc/jsDoc/example.png)


### @param

使用@param可以描述一个函数的参数以及参数类型

*   HBuilder扩展了参数值域的写法（目前只支持字符串值域）

**语法**

```javascript
@param {Type[,Type,...]} ParameterName = [Value1|Value2[|Value3|...]] 参数描述
```

*   值域还有另一种写法，参考[value](#value)

**示例**

```javascript
/**
 * 这是一个方法描述
 * @param {String} method = [get|post] 可选值域包括get和post，get是直接请求，post是提交数据
 */
function request(method) {}
```

**截图**
![param](https://web-assets.dcloud.net.cn/hbuilderx-doc/jsDoc/param.png)


### @value

使用@value可以描述一个函数的参数的值域

**语法**

```javascript
@value Value1 描述
```

**示例**

```javascript
/**
 * 这是一个方法描述
 * @param {String} method 可选值域包括get和post
 * @value get 直接请求
 * @value post 提交数据
 */
function request(method) {}
```

**截图**
![value](https://web-assets.dcloud.net.cn/hbuilderx-doc/jsDoc/value.png)


### @property

使用@property可以描述一个对象的属性

**语法**

```javascript
@property {Type[,Type,...]} propertyName 属性描述
```

**示例**

```javascript
/**
 * @property {IDString} id id元素
 * @property {ClassString} classNames class样式
 */
var htmlOptions = {
    id:null,
    classNames:null
}
htmlOptions.id = "123";
htmlOptions.classNames = "arrow area"
```


### @remark

使用@remark可以添加相关说明，可以多行，支持 markdown 语法

**语法**

```javascript
@remark 描述
```

**示例**

```javascript
/**
 * 这是一个方法描述
 * @remark
 * - 该接口只能在 onChange 回调之后才能调用。
 * - 此时容户端会挂起，等待小程序设置 Wi-Fi 信息，请务必尽快调用该接口，若无数据请传入一个空数组。
 * - 有可能随着周边 Wi-Fi列表的刷新，单个流程内收到多次带有存在重复的 Wi-Fi 列表的回调
 */
function getDocumentApi(method) {}
```

**截图**
![remark](https://web-assets.dcloud.net.cn/hbuilderx-doc/jsDoc/remark.png)


### @return

使用@return可以描述返回对象的属性

**语法**

```javascript
@return {Type[,Type,...]}
```

**示例**

```javascript
/**
 * @return {HTMLDocument} 返回html文档类
 */
function getDocumentApi() {}
```

**截图**
![return](https://web-assets.dcloud.net.cn/hbuilderx-doc/jsDoc/return.png)


### @since

使用@since可以标识从哪个版本开始支持

**语法**

```javascript
@since 版本号
```

**示例**

```javascript
/**
 * @since 3.9.0+ 支持的版本
 */
function getDocumentApi(method) {}
```

**截图**
![since](https://web-assets.dcloud.net.cn/hbuilderx-doc/jsDoc/since.png)


### @tutorial

使用@tutorial可以引用其他文档或教程。它可以用于提供更多的信息或链接到其他相关资源。

**语法**

```javascript
@tutorial url
```

**示例**

```javascript
/**
 * @tutorial https://ask.dcloud.net.cn/article/129
 */
function getDocumentApi(method) {}
```

**截图**
![tutorial](https://web-assets.dcloud.net.cn/hbuilderx-doc/jsDoc/tutorial.png)


### @type

使用@type可以定义某个对象的类型

**语法**

```javascript
@type {Type[,Type,...]}
```

**示例**

```javascript
/**
 * @type {IDString}
 */
var htmlId = null;
htmlId = "uni-app-myButton";
```


### @uniPlatform

使用@uniPlatform可以标识兼容性信息，`uniPlatform`需要参考详细规范。

**语法**

```javascript
@uniPlatform {uniPlatform兼容性信息}
```

**示例**

```javascript
/**
 * @uniPlatform {
 *   "app": {
 *     "android": {
 *       "osVer": "8.0",
 *       "uniVer": "3.7.0",
 *       "unixVer": "3.9.0"
 *     },
 *     "ios": {
 *       "osVer": "8.0",
 *       "uniVer": "3.7.0",
 *       "unixVer": "3.9.0"
 *     }
 *   },
 *   "mp": {
 *     "weixin": {
 *       "hostVer": "8.0",
 *       "uniVer": "3.7.0",
 *       "unixVer": "x"
 *     },
 *     "kuaishou": {
 *       "hostVer": "8.0",
 *       "uniVer": "3.7.0",
 *       "unixVer": "x"
 *     }
 *   },
 *   "web": {
 *     "uniVer": "3.6.2+",
 *     "unixVer": "x"
 *   }
 * }
 */
function getDocumentApi(method) {}
```

**截图**
![uniPlatform](https://web-assets.dcloud.net.cn/hbuilderx-doc/jsDoc/uniPlatform.png)


## JSDoc类型语法@type-syntax

在上述JSDoc语法使用时，我们经常看到类型， 例：{Type}。不管是@extends、@param、@property还是@type，都涉及类型语法，都有些什么类型呢？
HBuilder定义了一套非常完善的类型系统，包括各种类型的组合，在写类型时提供了丰富的智能提示。

### 单一的类型

**语法**

```javascript
{TypeName}
```

**示例**

```javascript
这里定义一个类型为Document的变量
/**
 * @type {Document}
 */
var foo = null;
```

**截图**
![单一的类型](https://web-assets.dcloud.net.cn/hbuilderx-doc/jsDoc/单一的类型.png)


### 多个类型

**语法**

```javascript
{TypeName,TypeName[,TypeName,...]}
```

**示例**
* 这里定义一个类型为Document,HTMLElement的变量
```javascript
/**
 * @type {Document, HTMLElement}
 */
var foo = null;
```

**截图**
![多个类型](https://web-assets.dcloud.net.cn/hbuilderx-doc/jsDoc/多个类型.png)


> 这里的foo既是Document，同时也是HTMLElement，同时可以提示这2种类型的属性和方法。

### 函数类型

**语法**

```javascript
{Function(firstParamType,secParamType,...):returnType}
```

**示例**

```javascript
//这里定义一个参数为Event的回调函数
/**
 * @param {Function(Event)} callback
 */
function testCallBack(callback){}

//这里定义一个返回类型是参数为IDString返回值为HTMLElement的函数。
/**
 * @return {Function(IDString):HTMLElement}
 */
function testFunctionReturn(){
	return foo;
}
var rFunc = testFunctionReturn();
rFunc('id').getElementsByClassName('classA');
```


### 特殊值域string@spec-types
在vue Doc中也可以使用特殊值域string，用于限定属性能够使用的值。它紧跟在property后面使用。
```javascript
/**
 * @property {IDString} id
 */
```

详情请参考 [特殊值域string](https://uniapp.dcloud.net.cn/uts/data-type.html#ide-string)
