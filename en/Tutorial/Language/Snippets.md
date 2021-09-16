# Snippets

## Overview

Snippets are a powerful tool for rapid development. Simply type a few letters and press Enter to generate a large piece of code.

For example, we often type the `if...else` structure. In HBuilderX, you can directly generate the corresponding code structure by hitting `ife` and enter.

input `ife`

<img src="/static/snapshots/tutorial/snippets_3.png" style="zoom: 90%;" />

Generate if structure after carriage return.

<img src="/static/snapshots/tutorial/snippets_4.png" style="zoom: 90%;" />

## List of commonly used code blocks

**JavaScript Snippets**

- iff
- forr ：for loop structure
- fori ：for loop structure and contains i
- funn: function
- funa: anonymous function
- clog: print log
- clogvar: print variable name and value

**dom Snippets**

- dg ：document.getElementById
- dl ：$("")

**vue Snippets**

Enter `v`, You can pull out various vue Snippets.

**uni-app Snippets**

Enter `u`, You can pull out various uniapp Snippets.

## Snippets settings

HBuilderX has built-in a large number of commonly used Snippets. Familiarity with these Snippets is important to improve programming efficiency.

To view the built-in Snippets, click [Menu-Tools-Snippets Settings], and select the Snippets of the language you want to view.

<img src="/static/snapshots/tutorial/menu_tool/menu_snippets_en.png" class="hd-img" />

In the opened interface, the left side is the preset Snippets, and the right side is the place where developers can extend the Snippets by themselves.

<img src="/static/snapshots/tutorial/menu_tool/snippets_custom_en.png" class="hd-img" />


## Custom Snippets

Custom Snippets are in the configuration json file.

js Snippets example: the configuration of the above `ife` Snippets is as follows:

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
    
### Snippets Format description

HBuilderX uses json to define the format of the Snippets, which is compatible with the Snippets format of vscode, that is, you can easily move the custom Snippets that has been configured in vscode to HBuilderX for use.


|Configuration item	|Description																																													|
|--									|--																																																		|
|key								|Snippets display name, the name displayed in the code assistant list. The key cannot be repeated.|
|prefix							|Trigger character of Snippets																								|
|body								|The content of the Snippets.																																					|
|triggerAssist			|True means that the code prompt is triggered on the first tabtop immediately after the code block is entered into the document, and the code assistant is pulled out. The default is false.	|
|project		|Control the code block to take effect under the specified project type. Possible values are: `uni-app`, `Web`, `App`, `Wap2App`.<br/>To set multiple item types, separate them with commas. For example: `"project": "uni-app,App"`	|

**Body description:**

- `$1` The position of the cursor after the code block is entered. If you need multiple cursors, configure `$1` in multiple places; if there are preset data at this location and need to be selected, the writing method is `${1:selectedtext}`; here also supports drop-down candidate menus, multiple options are drop-down candidates The list uses `${1:foo1/foo2/foo3}`
- `$2` After the code block is entered, the cursor switch position after pressing tab again.
- `$0` The final cursor position after the code block is entered.

Remark：
1. **Double quotes are escaped with `\"`**
2. **Line breaks are represented by multiple arrays, one array per line, surrounded by `double quotes` and separated by `commas`**
3. **The indentation needs to be indicated by `\t`, you cannot directly enter the indentation or spaces! **


### Matters needing attention
  
1. Each code block uses `key` as the main key, and multiple code blocks need to be separated by `commas`.
2. If the json syntax is illegal, an error message will pop up in the editor status bar, and a red wavy line will be drawn in the json, please pay attention to the correction.

## Comment template For Datetime

> From HBuilderX 2.7.5+ version, it supports the synchronization time of host annotation template

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