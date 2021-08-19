# 代碼塊

## 概述

代碼塊是快速開發的利器。簡單的敲幾個字母，回車，就能生成大段代碼。

比如我們經常會敲if...else結構，在HBuilderX中，只需敲`ife`回車，就能直接生成相應的代碼結構。

敲`ife`

<img src="/static/snapshots/tutorial/snippets_3.png" style="zoom: 90%;" />

回車後生成if結構體

<img src="/static/snapshots/tutorial/snippets_4.png" style="zoom: 90%;" />

## 常用代碼塊列表

**通用js代碼塊**

- iff ：簡單if
- forr ：for循環結構體
- fori ：for循環結構體幷包含i
- funn：函數
- funa：匿名函數
- clog：打印日誌
- clogvar：打印變量命名和值

**dom代碼塊**

- dg ：document.getElementById
- dl ：$("")

**vue代碼塊**

敲v，即可拉出各種vue代碼塊

**uni-app代碼塊**

敲u，即可拉出各種uni-app代碼塊
還有ifios、ifandroid，這2個平臺判斷代碼塊（HBuilderX 1.9.10+）

## 代碼塊設置

HBuilderX已經內置了大量常用的代碼塊，熟悉這些代碼塊，對於提高編程效率有重要幫助。

查看內建的代碼塊，點擊菜單-工具-代碼塊設置，選擇你要查看的語言的代碼塊。

<img src="/static/snapshots/tutorial/snippets_1.png" style="zoom: 90%;" />

打開的界面中，左側即是預置的代碼塊，右側是開發者可以自己擴展代碼塊的地方。

<img src="/static/snapshots/tutorial/snippets_2.png" style="zoom: 80%;" />


## 自定義代碼塊

自定義代碼塊都是配置json文件中的，直接來一個js例子吧，上述`ife`代碼塊的配置如下：

```json
{
"if ... else": {
	"body": [
		"if ($1) {",
		"\t$0",
		"} else{",
		"\t",
		"}"
	],
	"prefix": "ife",
	"scope": "source.js"
}
}
```  
    
### 代碼塊配置格式說明

HBuilderX使用json定義代碼塊的格式，兼容vscode的代碼塊格式，也就是你可以把vscode裏已經配置的自定義代碼塊方便的挪到HBuilderX中使用。


|配置項			|說明																																																																													|
|--				|--																																																																														|
|key			|代碼塊顯示名稱，顯示在代碼助手列表中的名字。key是不能重複的。上面例子中`"if ... else"`就是一個`key`。																																																					|
|prefix			|代碼塊的觸發字符，就是敲什麼字母可以激活這個代碼塊。																																																																	|
|body			|代碼塊的內容																																																																											|
|triggerAssist	|爲`true`表示該代碼塊輸入到文檔後立即在第一個`tabstop`上觸發代碼提示，拉出代碼助手，默認爲`false`。																																																						|
| project		|將代碼塊控制在指定項目類型下生效。可取值有：`uni-app`、`Web`、`App`、`Wap2App`。<br/>`Web`指普通項目，`App`指5+App項目。如果不設置，則該代碼塊在所有項目類型下均生效。<br/>比如：`"project": "uni-app"`，代表這個代碼塊僅在uni-app項目下生效。<br/>如需設置多種項目類型，用逗號分隔。比如：`"project": "uni-app,App"`	|

**配置項body詳細說明:**

- `$1` 表示代碼塊輸入後光標的所在位置。如需要多光標，就在多個地方配置`$1`；如該位置有預置數據且需要選中，則寫法是`${1:selectedtext}`；這裏還支持下拉候選菜單，多選項即下拉候選列表使用`${1:foo1/foo2/foo3}`
- `$2` 表示代碼塊輸入後再次按tab後光標的切換位置`tabstops`（代碼塊展開後按tab可以跳到下一個`tabstop`，在HBuilderX中看到類似綠色光標的不閃的豎線，就可以按tab或回車跳轉光標過去）
- `$0`代表代碼塊輸入後最終光標的所在位置（也可以按回車直接跳過去）。

特別說明：
1. **雙引號使用`\"`轉義**
2. **換行使用多個數組表示，每個行一個數組，用`雙引號`包圍，並用`逗號`分隔**
3. **縮進需要用`\t`表示，不能直接輸入縮進或空格！**


### 注意事項
  
1. 每個代碼塊以`key`爲主鍵，多個代碼塊需要`逗號`分隔。
2. 如果json語法不合法，編輯器狀態欄會彈出錯誤信息，json中會畫出紅波浪線，請注意修正。

## 註釋模板同步時間

> HBuilderX 2.7.5+版本起，支持主持註釋模板同步時間

點擊菜單【工具】【代碼塊設置】【javascript代碼塊】，輸入如下內容：

```
{  
    "method-annotation": {  
        "prefix": "anno",  
        "body": [  
            "/**",  
            " * 方法說明",  
            " * author: 佚名",  
            " * description: ",  
            " * @param $1",  
            " * @return $2",  
            " * @createTime: $DATE_TIME",  
            " */"  
        ],  
        "triggerAssist": false,  
        "description": "method annotation"  
    }  
} 
```

<img src="/static/snapshots/tutorial/Snippets_time.gif" style="zoom: 80%; border: 1px solid #eee;border-radius: 10px;" />