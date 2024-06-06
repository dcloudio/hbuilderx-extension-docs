# Find and replace@find-replace

- Find files
- Find and replace strings (by file, by project, by directory), and support regular expression
- Find symbol

## Regular expression grouping and back-reference@replace-group-by-regexp
The capture group of a regular expression is numbered by calculating the opening parentheses from left to right. For example, there are four subgroups in '(A)(B(C))':

|groupNumber|groupContent|
|--	        |--	        |
|0			|(A)(B(C))	|
|1			|(A)		|
|2			|(B(C))		|
|3			|(C)		|

Back-reference:In replacement expressions we can use the number of the group to refer to the text content captured by the lookup expression (instead of the RE).

HX backreferences use backslashes \ and numbers, as shown in the following example:
```
Search expression(Find):([A-Za-z\s]+)@(\w+\.io)
Substitution expression(Replace)：email:(\1)@163.com\3
Before replacement:unicloud@dcloud.io
After replacement:email:(unicloud)@163.com\3
```

## Find files@find-files

`ctrl+p (MacOSX: ⌘P)`, You can navigate to the search box, enter the file name, and quickly open any file.

Add the space after the file name and enter the project name to search only the files under the specified project.

<img src="/static/snapshots/tutorial/find/find_file_en.png" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

Press and hold `Ctrl+Tab`, you can view the list of all files opened in the editor.

<img src="/static/snapshots/tutorial/find/find_file_2_en.png" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## Find symbol@find-symbol

In the current file, press `Ctrl + Shift + O` to find symbol.

<img src="/static/snapshots/tutorial/find/find_symbol_en.png" style="border:1px solid #eee;"/>

## Find string@find-string

- Scope：String search, support `by current file`, `by directory`, `by left side selection`, `by current project`, `by all project` to search.
- Function：String search, support `whole word matching`, `regular expression matching`, `case matching`, and support `exclude` specific directories

<img src="/static/snapshots/tutorial/find/find_str_en.png" class="hd-img" />

## Find in selection@find-in-selection

> Supported from HBuilderX 3.1.15+

HBuilderX supports "find in selection". You can select some codes and entering the search text in the top search bar (shortcut key: [Ctrl+Shift+f]). HBuilderX will search string in selected code blocks and then you can `search`, `replace`, and `select all the same words` in the selected area.

**Example**

Find in selection, The background of the selected area will be highlighted. Press the `esc` key to exit the search.

<img src="/static/snapshots/tutorial/find/find_region_en.gif" style="zoom: 90%; border-radius: 5px;border:1px solid #eee;"/>
