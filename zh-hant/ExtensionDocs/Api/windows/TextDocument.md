# TextDocument
編輯器打開的文檔文件

## 屬性列表

|屬性名			|屬性類型							|描述														|
|--				|--									|--															|
|fileName		|String								|文件名稱													|
|isDirty		|Boolean							|是否是修改狀態												|
|isUntitled		|Boolean							| 是否是無標題文件											|
|lineCount		|Number								|文檔總行數													|
|uri			|[Uri](/ExtensionDocs/Api/other/Uri)						|文檔的uri，如果是本地文件，可通過uri.fsPath獲取本地文件路徑|
|languageId|String|編程語言Id，如'javascript','html'等，完整id列表參見[這裏](/ExtensionDocs/Api/other/languageId)	|
|workspaceFolder|[WorkspaceFolder](/ExtensionDocs/Api/other/WorkspaceFolder)|該文檔文件所屬的項目對象									|

## getText
獲取指定區域內的文本

|參數名稱	|參數類型		|描述													|
|--			|--				|--														|
|range		|[Range](#Range)|[可選]文本區域，如果不傳該參數，則獲取整個文檔的內容	|

**返回值**

|返回類型	|描述		|
|--			|--			|
|String		|文本字符串	|


## lineAt
獲取指定行號的行信息

|參數名稱	|參數類型	|描述			|
|--			|--			|--				|
|lineno		|Number		|行號，從0開始	|

**返回值**

|返回類型								|描述		|
|--										|--			|
| Promise&lt;[TextLine](#TextLine)&gt;	|文本行對象	|

## lineFromPosition
根據光標位置獲取光標所在行。

|參數名稱	|參數類型	|描述		|
|--			|--			|--			|
|pos		|Number		|光標位置	|

**返回值**

|返回類型								|描述		|
|--										|--			|
|Promise&lt;[TextLine](#TextLine)&gt;	|文本行對象	|

## languageId
以下是目前支持的編程語言Id列表：

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
文本區域

### 屬性列表

|屬性名	|屬性類型	|描述		|
|--		|--			|--			|
|start	|Number		|起始位置	|
|end	|Number		|結束位置	|

## TextLine
文檔中的某一行

### 屬性列表

|屬性名	|屬性類型	|描述						|
|--		|--			|--							|
|start	|Number		|行起始位置					|
|end	|Number		|行結束位置，不計算換行符	|
|text	|String		|行內容，不包含換行符		|


## TextEdit
文檔編輯

### 屬性列表

|屬性名	|屬性類型			|描述			|
|--		|--					|--				|
|range	|[Range](#Range)	|要修改的區域	|
|newText|String				|要插入的新內容	|

### replace **static**

#### 參數說明

|參數名稱	|參數類型			|描述			|
|--			|--					|--				|
|range		|[Range](#Range)	|要修改的區域	|
|newText	|String				|要插入的新內容	|

#### 返回值

|返回類型	|描述	|
|--			|--		|
|[TextEdit](#TextEdit)|	文檔編輯對象|