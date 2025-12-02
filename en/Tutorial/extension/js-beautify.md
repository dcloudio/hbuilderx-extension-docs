# js-beautify

HBuilderX 3.7.6+, the built-in format plugin (js-beautify) supports project-level formatting configuration via .jsbeautifyrc file

Note: This only takes effect when a `.jsbeautifyrc` file exists in the project. Otherwise, HBuilderX's built-in jsbeautifyrc formatting rules are used.

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/jsbeautifyrc-setting.jpg" class="hd-img" />

Note: As shown in the screenshot above, [Open file .jsbeautifyrc for configuration], if you have configured rules here before, the new `js-beautify` formatting will use the old formatting configuration file. If you want to use the latest `.jsbeautifyrc` configuration file, please delete this file and re-enter to regenerate it.

## How to Configure .jsbeautifyrc in a Project

> Effective from HBuilderX 3.7.6+

In the project, create a new `.jsbeautifyrc` file and configure the relevant formatting rules.

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/jsbeautifyrc-file.jpg" class="hd-img" />

## Indentation Style

When formatting, the indentation method used is read from the menu [Tools --> Settings] configuration

![](https://hx.dcloud.net.cn/static/snapshots/tutorial/format/indent.png)

Note: editorconfig configuration will override HBuilderX editor configuration; when a `.editorconfig` file exists in the project, the formatting reads from this configuration file.

## js-beautify Formatting Rules

For formatting rules, please check the js-beautify official documentation [details](https://github.com/beautify-web/js-beautify).

Here are some simple js-beautify formatting rules:

```json
{
    "eol": "\r\n",                      //Line ending character
    "end_with_newline": false,          //End output with newline
    "indent_level": 0,                  //Starting code indentation level
    "preserve_newlines": true,          //Preserve empty lines
    "max_preserve_newlines": null,      //Maximum consecutive newlines to preserve. For example, set to 2 to delete more than 2 empty lines to keep only 1
    "space_in_paren": true,             //Add spaces in parentheses, example f( a, b )
    "space_in_empty_paren": false,      //Insert space when function parentheses have no parameters, example f( )
    "jslint_happy": false,              //Enable jslint-strict mode
    "space_after_anon_function": false, //Add space before parentheses of anonymous functions
    "brace_style": "collapse",          //Code style, options [collapse|expand|end-expand|none][,preserve-inline] [collapse,preserve-inline
    "unindent_chained_methods": false,  //Don't indent chained method calls
    "break_chained_methods": false,     //Break chained method calls in subsequent lines
    "keep_array_indentation": false,    //Keep array indentation
    "unescape_strings": false,          //Decode displayable characters using xNN symbol encoding
    "wrap_line_length": 120
}
```

## js-beautify Supports Configuring ts Formatting Rules

HBuilderX 3.7.6+, js-beautify supports configuring ts formatting rules. Specifically as follows:

```json
{
    "typescript": {
        "convert_tabs_to_spaces":true,
        "indent_multi_line_object_literal_beginning_on_blank_line": true,
        "insert_space_after_comma_delimiter": true,
        "insert_space_after_constructor": false,
        "insert_space_after_function_keyword_for_anonymous_functions": true,
        "insert_space_after_keywords_in_control_flow_statements": true,
        "insert_space_after_opening_and_before_closing_empty_braces": true,
        "insert_space_after_opening_and_before_closing_jsx_expression_braces": false,
        "insert_space_after_opening_and_before_closing_nonempty_braces": true,
        "insert_space_after_opening_and_before_closing_nonempty_brackets": false,
        "insert_space_after_opening_and_before_closing_nonempty_parenthesis": false,
        "insert_space_after_opening_and_before_closing_template_string_braces": false,
        "insert_space_after_semicolon_in_for_statements": true,
        "insert_space_after_type_assertion": false,
        "insert_space_before_and_after_binary_operators": true,
        "insert_space_before_function_parenthesis": false,
        "insert_space_before_type_annotation": true,
        "place_open_brace_on_new_line_for_control_blocks": false,
        "place_open_brace_on_new_line_for_functions": false,
        "semicolons": "ignore",
        "trim_trailing_whitespace": true
    }
}
```
