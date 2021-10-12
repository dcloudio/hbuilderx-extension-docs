# EditorConfig

> Supported from HBuilderX 2.0.3+

## What is EditorConfig?

Many companies require developers to follow the same programming style. For example, indentation is used for spaces or tabs.

.editorconfig is a set of specifications to solve the above problems. It can be saved in the root directory of the project. Then team members can share the .editorconfig file via git/svn and follow the same format and style.

HBuilderX has built-in support for .editorconfig. You have to download extra plugins to use this feature in Sublime and VSCode.

The official website of `editorconfig` is [https://editorconfig.org/](https://editorconfig.org/). EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with various OS and IDEs.

## How to write .editorconfig file?

The following is a sample .editorconfig file for setting end_of_line and indentation styles for Python and JavaScript.

```
# EditorConfig is awesome: http://EditorConfig.org
 
# top-most EditorConfig file
root = true
 
# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true
 
# 4 space indentation
[*.py]
indent_style = space
indent_size = 4
 
# Tab indentation (no size specified)
[*.js]
indent_style = tab
 
# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2
 
# Matches the exact files either package.json or .travis.yml
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
```

## Case

Many open source projects use `editorconfig`.

For example [jQuery](https://github.com/jquery/jquery/blob/master/.editorconfig), `jQuery` `.editorconfig` configuration file on `Github`.

```ini
root = true

[*]
indent_style = tab
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[package.json]
indent_style = space
indent_size = 2
```

From above example, JQuery configuration: encoding format, indentation style, etc.


## Where are .editorconfig stored?

When opening a file, EditorConfig plugins look for a file named `.editorconfig` in the directory of the opened file and in every parent directory. A search for .editorconfig files will stop if the root filepath is reached or an EditorConfig file with `root=true` is found.

EditorConfig files are read top to bottom and the most recent rules found take precedence. Properties from matching EditorConfig sections are applied in the order they were read, so properties in closer files take precedence.


## File Format Details

EditorConfig files use an `INI` format that is compatible with the format used by Python ConfigParser Library, but [ and ] are allowed in the section names. 

The section names are filepath globs (case sensitive), similar to the format accepted by gitignore. Only forward slashes (`/`, not backslashes) are used as path separators and octothorpes (`#`) or semicolons (`;`) are used for comments.
 
Comments should go on their own lines. EditorConfig files should be `UTF-8` encoded, with either `CRLF` or `LF` line separators.

### Wildcard Patterns

| Wildcard Patterns	| Description																																															|
| ----------				| ------------------------------------																																		|
| *									| Matches any string of characters, except path separators (/)																						|
| **								| Matches any string of characters																																				|
| ？								| Matches any single character																																						|
| [name]						| Matches any single character in name																																		|
| [!name]						| Matches any single character not in name																																|
| {s1,s3,s3}				| Matches any of the strings given (separated by commas) (Available since EditorConfig Core 0.11.0)				|
|{num1..num2}				|Matches any integer numbers between num1 and num2, where num1 and num2 can be either positive or negative|

**Notes:** Special characters can be escaped with a backslash so they won't be interpreted as wildcard patterns.

### Supported Properties

| Properties							| Description																																																																																											|
| ------------------------| ------------------------------------------------------------																																																																		|
| indent_style						| set to tab or space to use hard tabs or soft tabs respectively.																																																																	|
| indent_size							| a whole number defining the number of columns used for each indentation level and the width of soft tabs (when supported). When set to tab, the value of tab_width (if specified) will be used.	|
| tab_width								| a whole number defining the number of columns used to represent a tab character. This defaults to the value of indent_size and doesn't usually need to be specified.														|
| end_of_line							|  set to lf, cr, or crlf to control how line breaks are represented.																																																															|
|charset									|set to latin1, utf-8, utf-8-bom, utf-16be or utf-16le to control the character set.																																																							|
| trim_trailing_whitespace| set to true to remove any whitespace characters preceding newline characters and false to ensure it doesn't.																																										|
| insert_final_newline		| set to true to ensure file ends with a newline when saving and false to ensure it doesn't.																																																			|
| root										| special property that should be specified at the top of the file outside of any sections. Set to true to stop .editorconfig files search on current file.																				|

### Notes

1. Currently all properties and values are case-insensitive. They are lowercased when parsed. Generally, if a property is not specified, the editor settings will be used.
2. It is acceptable and often preferred to leave certain EditorConfig properties unspecified. For example, tab_width need not be specified unless it differs from the value of `indent_size`. Also, when indent_style is set to tab, it may be desirable to leave `indent_size` unspecified so readers may view the file using their preferred indentation width. Additionally, if a property is not standardized in your project (`end_of_line` for example), it may be best to leave it blank.
3. If you don't need the function of editorconfig, you can turn off it in [Settings].

## HBuilderX editorconfig configuration

In HBuilderX [Settings], there is an editorconfig switch, you can turn on/off `.editorconfig` as needed.

<img src="/static/snapshots/tutorial/settings/editorconfig_en.png" style="zoom: 45%;border: 1px solid #eee; border-radius: 10px;" />


