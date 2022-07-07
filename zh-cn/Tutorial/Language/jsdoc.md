# HBuilder JSDoc+规范

> 旧版文档： https://ask.dcloud.net.cn/article/129

## 介绍@intro

JSDoc有2个作用，导出API文档和明确代码类型，辅助代码提示。

JSDoc描述了函数或变量的功能、值域、示例等很多代码提示时需要的数据，还可以通过类型定义，给动态的JS变量或函数赋予明确的类型。

HBuilder/HBuilderX支持JSDoc3的书写和解析，JSDoc 3详细的标签介绍及语法请参考[JSDoc 3](http://usejsdoc.org/)。
但标准的JSDoc是不够的，为了提高JS代码类型解析的精确性和实现更强大的代码助手提示，我们扩展了JSDoc。

- 对于普通开发者，书写JSDoc有助于代码可读性的提升，在很多要求严格的大公司，JSDoc是强制要求编写的。
完善的JSDoc也能让开发者自定义的函数在引用时得到更方便的代码提示。
- 对于框架开发者，书写好的JSDoc是必须的，除了生成API手册，良好的JSDoc可以让框架在IDE里得到更好的提示。
- 开发者们也可以给别人的JS框架补充JSDoc，以便在HBuilder里得到更好的提示。
如果你完成了某个框架的JSDoc，请提交到[https://github.com/dcloudio/WebFrameworkGrammar](https://github.com/dcloudio/WebFrameworkGrammar)，广大开发者都在期待你给大家带来的便利。
- 另外共享框架语法是可以获得HBuilder积分奖励的哦。

## JSDoc写法

```javascript
/** 文档注释写在这里 ，生成JSDoc的快捷操作是敲/**回车。 */。
```

## JSDoc支持标签@support-tags

下面是HBuilder会解析的一些标签，对JS解析引擎确定变量类型时有一定的帮助。

### &#64;alias

使用@alias可以给一个变量或者函数指定一个别名，代码提示时会提示该别名

**语法**
```javascript
@alias aliasName
```

**示例：**
```javascript
(function(){
/**
 * @alias foo
 */
function _fooBar(){
	
}
window.foo = _fooBar;
})();
foo();
```

### &#64;constructor

使用@constructor可以标识一个函数是构造函数

**语法**
```javascript
@constructor
```

**示例**
```javascript
/**
 * @constructor
 */
function Animal(name,weight){
	this.name = name;
	this.weight = weight;
}
var animal = new Animal('恐龙',10000);
alert(animal.name);
```

### &#64;description

使用@description可以在代码提示时显示被描述变量或者函数的描述信息。

**语法**
```javascript
@description 描述内容
```

**例子**
```javascript
/**
 * @description 这是一个构造函数
 * @constructor
 */
function Animal(name,weight){
	this.name = name;
	this.weight = weight;
}
```

**代码截图**

<img src="/static/snapshots/tutorial/jsdoc/description.png" class="hd-img" />

### &#64;example

使用@example可以提示代码示例。

**语法**
```javascript
@example 示例内容
```

**例子**
```javascript
/**
 * @description 这是一个构造函数
 * @example 
 * var animal = new Animal('恐龙',1000);
 * @constructor
 */
function Animal(name,weight){
	this.name = name;
	this.weight = weight;
}
```
**代码截图**

<img src="/static/snapshots/tutorial/jsdoc/example.png" class="hd-img" />
	
### &#64;extends

使用@extends用于标识继承于某个类型。

**语法**
```javascript
@extends {Type}
```

**例子**
```javascript
/**
 * @description 这是一个构造函数
 * @example 
 * var animal = new Animal('恐龙',1000);
 * @constructor
 */
function Animal(name,weight){
	this.name = name;
	this.weight = weight;
	
	this.say = function(){}
}

/**
 * @extends {Animal}
 */
function Dog(){
	this.say = function(){
		console.log(this.name+":wang wang wang ...");
	}
}
Dog.prototype = new Animal();
var dog = new Dog();
dog.name = "gougou";
dog.say();
```

**代码截图**

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/59a60e744e74cd2b0a442a127dcddd53.png)

### &#64;param

使用@param可以描述一个函数的参数以及参数类型，HBuilder扩展了参数值域的写法（目前只支持字符串值域）

**语法**
```javascript
@param {Type[,Type,...]} ParameterName=[Value1|Value2[|Value3|...]] 参数描述
```

**例子**
```javascript
/**
 * 这是一个方法描述
 * @param {String} method = [get|post] 可选值域包括get和post，get是直接请求，post是提交数据
 */
function request(method) {}
```

**代码截图**

<img src="/static/snapshots/tutorial/jsdoc/param-1.png" class="hd-img" />

### &#64;property

使用@property可以描述一个对象的属性

**语法**
```javascript
@property {Type[,Type,...]} propertyName 属性描述
```

**例子**
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
**代码截图**

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/e451487c65a583b0219c7b8ab391ec62.png)

### &#64;return

使用@return可以描述一个对象的属性

**语法**
```javascript
@return {Type[,Type,...]}
```

**例子**
```javascript
/**
 * @return {HTMLDocument}
 */
function getDocument() {
	//some code
}
getDocument().getElementById("123");
```
**代码截图**

<img src="/static/snapshots/tutorial/jsdoc/return.png" class="hd-img" />

### &#64;type

使用@type可以定义某个变量的类型

**语法**
```javascript
@type {Type[,Type,...]}
```

**例子**
```javascript
/**
 * @type {IDString}
 */
var htmlId = null;
htmlId = "123";
```

**代码截图**

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/65e2eb8af480d734b0ab9c977f91cafc.png)

## JSDoc类型语法@type-syntax

在上述JSDoc语法使用时，我们经常看到类型。不管是@extends、@param、@property还是@type，都涉及类型语法，都有些什么类型呢？
HBuilder定义了一套非常完善的类型系统，包括各种类型的组合，在写类型时提供了丰富的智能提示。

### 单一的类型

**语法**
```javascript
{TypeName}
```

**例子**
```javascript
这里定义一个类型为Document的变量
/**
 * @type {Document}
 */
var foo = null;
```

**代码截图**

<img src="/static/snapshots/tutorial/jsdoc/type-1.png" class="hd-img" />

### 多个类型

**语法**
```javascript
{TypeName,TypeName[,TypeName,...]}
```

**例子**
```javascript
这里定义一个类型为Document,HTMLElement的变量
/**
 * @type {Document,HTMLElement}
 */
var foo = null;
```

**代码截图**

>这里的foo既是Document，同时也是HTMLElement，同时可以提示这2种类型的属性和方法。

<img src="/static/snapshots/tutorial/jsdoc/type-2.png" class="hd-img" />

### 函数类型

**语法**
```javascript
{Function(firstParamType,secParamType,...):returnType}
```

**例子**
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

**代码截图**

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/b699754f66782c7bfc0d494dcf7d00e0.png)

### 特殊类型@spec-types

HBuilder为了对一些比较特殊的类型列表进行更智能的提示（比如id列表、样式列表、颜色列表、图片列表...的提示），特别定义了一批特殊类型列表。

**下面是扩展的各种类型的名字一览表。**

- IDString : 提示id的列表
- ClassString : 提示class的列表
- TagString : 提示html标签(tag)的列表
- AttrString : 提示html标签属性的列表
- AttrValueString : 提示html标签属性值域的列表
- cssPropertyString : 提示css属性的列表
- cssPropertyValueString : 提示css属性值域的列表
- HTMLString : 能够支持在该字符串内部写html代码
- CSSString : 能够支持在该字符串内部写css代码
- URIString : 提示项目下所有文件的列表
- ImageURIString : 提示项目下所有图片的列表
- JSURIString : 提示项目下所有JS文件的列表
- CSSURIString : 提示项目下所有CSS文件的列表
- MultimediaString : 提示多媒体文件的列表
- ColorString : 提示颜色的列表
- FontString : 提示预置的字体列表
- EventString : 提示事件名称的列表

**下面是扩展的各种类型的代码提示样例截图。**

**IDString**        提示id的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/28ae44fa2b1f799453dbb943613ac29c.png)

**ClassString**        提示class的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/c3f6c1e32aadb086d63f2e5808753d83.png)

**TagString**        提示html标签(tag)的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/2654d96b22eee43858e0a1dcb5e10070.png)

**AttrString**        提示html标签属性的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/e8cf3bcb78c4c7552a7b0cc040078232.png)

**AttrValueString**        提示html标签属性值域的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/b2d4d40ab562859227f74dc5f636233b.png)

**cssPropertyString**        提示css属性的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/e1d69e860a77e5443741abfbcdec528f.png)

**cssPropertyValueString**        提示css属性值域的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/9044a59d22c90bf815e4ab5b45f2d257.png)

**HTMLString**        能够支持在该字符串内部写html代码

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/971043701570ce175bc8bbc046329814.png)

**CSSString**        能够支持在该字符串内部写css代码

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/f500aafd0ff0f34ea2dba48e20bfe8de.png)

**URIString**        提示项目下所有文件的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/0d384ea2762a33f1f57c66f14ea2cee4.png)

**ImageURIString**        提示项目下所有图片的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/db976d83c071b9fdcdbd76b3fdd1f8cf.png)

**JSURIString**        提示项目下所有JS文件的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/f45366de28423c5e804d904639dfa1a4.png)

**CSSURIString**        提示项目下所有CSS文件的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/9a81bf86580b71a56baac1320d8c7fa8.png)

**MultimediaString**        提示多媒体文件的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/7b08923abd43620d7e2fa9108a3b311d.png)

**ColorString**        提示颜色的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/c59e8663447315d155073b5351344320.png)

**FontString**        提示预置的字体列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/35c944472194b7c66417b85c4d00ef0b.png)

**EventString**        提示事件名称的列表。

![](https://img-cdn-tc.dcloud.net.cn/uploads/article/20150103/b8b41ffc9e199f2fb43de2c3aefa2b39.png)

