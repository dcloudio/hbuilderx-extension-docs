# TextDocument
编辑器打开的文档文件

## 属性列表

|属性名			|属性类型							|描述														|
|--				|--									|--															|
|fileName		|String								|文件名称													|
|isDirty		|Boolean							|是否是修改状态												|
|isUntitled		|Boolean							| 是否是无标题文件											|
|lineCount		|Number								|文档总行数													|
|uri			|[Uri](/ExtensionDocs/Api/other/Uri)						|文档的uri，如果是本地文件，可通过uri.fsPath获取本地文件路径|
|languageId|String|编程语言Id，如'javascript','html'等，完整id列表参见[这里](#languageId)									|
|workspaceFolder|[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)|该文档文件所属的项目对象									|

## getText
获取指定区域内的文本

|参数名称	|参数类型		|描述													|
|--			|--				|--														|
|range		|[Range](#Range)|[可选]文本区域，如果不传该参数，则获取整个文档的内容	|

**返回值**

|返回类型	|描述		|
|--			|--			|
|String		|文本字符串	|


## lineAt
获取指定行号的行信息

|参数名称	|参数类型	|描述			|
|--			|--			|--				|
|lineno		|Number		|行号，从0开始	|

**返回值**

|返回类型								|描述		|
|--										|--			|
| Promise&lt;[TextLine](#TextLine)&gt;	|文本行对象	|

## lineFromPosition
根据光标位置获取光标所在行。

|参数名称	|参数类型	|描述		|
|--			|--			|--			|
|pos		|Number		|光标位置	|

**返回值**

|返回类型								|描述		|
|--										|--			|
|Promise&lt;[TextLine](#TextLine)&gt;	|文本行对象	|

## languageId
以下是目前支持的编程语言Id列表：

- txt
- actionscript
- ada
- asm
- asp
- autoit
- baanc
- bash
- batch
- c
- cs
- cmake
- cpp
- css
- caml
- cobol
- coffeescript
- d
- dart
- ejs
- fortran
- fortran77
- html
- html_es6
- handlebars
- haskell
- inno
- json
- json_tm
- java
- javascript
- javascriptreact
- javascript_es6
- kix
- less
- lisp
- lua
- markdown
- matlab
- njs
- nml
- nsis
- nss
- objc
- php
- pascal
- perl
- postscript
- powershell
- python
- r
- rc
- ruby
- sql
- sass
- scheme
- scss
- smalltalk
- stylus
- swift
- tcl
- typescript
- typescriptreact
- ux
- vb
- vhdl
- verilog
- vue
- wxml
- xml
- yaml
- pug

## Range
文本区域

### 属性列表

|属性名	|属性类型	|描述		|
|--		|--			|--			|
|start	|Number		|起始位置	|
|end	|Number		|结束位置	|

## TextLine
文档中的某一行

### 属性列表

|属性名	|属性类型	|描述						|
|--		|--			|--							|
|start	|Number		|行起始位置					|
|end	|Number		|行结束位置，不计算换行符	|
|text	|String		|行内容，不包含换行符		|


## TextEdit
文档编辑

### 属性列表

|属性名	|属性类型			|描述			|
|--		|--					|--				|
|range	|[Range](#Range)	|要修改的区域	|
|newText|String				|要插入的新内容	|

### replace **static**

#### 参数说明

|参数名称	|参数类型			|描述			|
|--			|--					|--				|
|range		|[Range](#Range)	|要修改的区域	|
|newText	|String				|要插入的新内容	|

#### 返回值

|返回类型	|描述	|
|--			|--		|
|[TextEdit](#TextEdit)|	文档编辑对象|