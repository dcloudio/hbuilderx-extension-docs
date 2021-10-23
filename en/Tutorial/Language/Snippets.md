# Snippets

## Overview

Code snippets are templates that make it easier to enter repeating code patterns, such as loops or conditional-statements.

For example, we often use `if...else` conditional-statement. HBuilderX can create the corresponding code pattern by enter `ife`.

Enter `ife`

<img src="/static/snapshots/tutorial/snippets_3.png" style="zoom: 90%;" />

Generate if..else structure after carriage return.

<img src="/static/snapshots/tutorial/snippets_4.png" style="zoom: 90%;" />

## List of snippets

**JavaScript Snippets**

- iff: if else snippet
- forr ：for loop snippet
- fori ：for loop snippet with variable i
- funn: function
- funa: anonymous function
- clog: print log
- clogvar: print variable name and value

**Dom Snippets**

- dg ：document.getElementById
- dl ：$("")

**Vue Snippets**

Enter `v`, HBuilderX will display list of vue snippets.

**uni-app Snippets**

Enter `u`, HBuilderX will display list of uniapp snippets. From HBuilderX 1.9.10+, you can use snippets `ifios` and `ifandroid` to check whether it belongs to the iOS and android platforms.

## Snippets settings

HBuilderX has built-in a large number of snippets. Knowing how to use snippets can improve programming efficiency.

To view the built-in snippets, click [Menu-Tools-Snippets Settings], and select the snippets of the language you want to view.

<img src="/static/snapshots/tutorial/menu_tool/menu_snippets_en.png" class="hd-img" />

In the opened page, the left side is the preset snippets, and the right side is the place where developers can extend the snippets by themselves.

<img src="/static/snapshots/tutorial/menu_tool/snippets_custom_en.png" class="hd-img" />


## Custom Snippets

Custom snippets are in the configuration json file. The following is configuration of `ife` snippet.

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
    
### Snippets format description

HBuilderX uses json to define the snippet format, which is compatible with vscode's snippets, that is, the custom snippet configured in vscode can be copied to HBuilderX for use.


| Item	|Description																																													|
|--									|--																																																		|
|key								|Snippet name, this name will be displayed in the code assistant list. The key cannot be repeated. For example, `"if ... else"` is a key.|
|prefix							|Trigger character of snippet																								|
|body								|The content of the snippet.																																					|
|triggerAssist			|True means that the code prompt is triggered on the first tabtop and display code assistant immediately after the snippet is entered into the document. The default is false.	|
|project		| Snippets are scoped so that only relevant snippets are suggested. Scope types are: `uni-app`, `Web`, `App`, `Wap2App`.<br/> Every snippet is scoped to one, several, or all ("global") languages based on how it is defined. For example, `"project": "uni-app"` means the scope of this snippet is only in uni-app project. `"project": "uni-app,App"` separates the projects name with commas which means that the snippet supports multiple projects.|

**Body description:**

- `$1` The position of the cursor after the snippet is entered. If you need multiple cursors, add `$1` in related locations; if there are preset data at this location and need to be selected, the grammar is `${1:selectedtext}`; display drop-down menus with `${1:foo1/foo2/foo3}`
- `$2` With tabstops, you can make the editor cursor move inside a snippet.
- `$0` The final cursor position via tabstop visited.

Remark：
1. **Double quotes are escaped with `\"`**
2. **Multiple Lines are represented by multiple arrays, one array per line, wrapped by `double quotes` and separated by `commas`**
3. **The indentation is indicated by `\t`, you cannot enter the indentation or spaces! **


### Attention
  
1. Each snippet uses `key` as the primary key, and multiple snippets are separated by `commas`.
2. You will receive a warning message if the json format is wrong.

## Datetime variable

> Supported from HBuilderX 2.7.5+, it supports to add "DATE_TIME" variable in annotation snippet.

Click the menu [Tools - Snippets settings - javascript snippets], and enter the following:

```
{  
    "method-annotation": {  
        "prefix": "anno",  
        "body": [  
            "/**",  
            " * Method description",  
            " * author: author name",  
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
