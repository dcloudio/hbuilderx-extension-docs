# Find and replace

- Find files
- Find and replace strings (by file, by project, by directory), and support regular expression
- Find symbol

## Find files

`ctrl+p (MacOSX: ⌘P)`, You can navigate to the search box, enter the file name, and quickly open any file.

Add the space after the file name and enter the project name to search only the files under the specified project.

<img src="/static/snapshots/tutorial/find_file.jpg" style="zoom: 50%;border-radius: 24px;border:1px solid #eee;"/>

Press and hold `Ctrl+Tab`, you can view the list of all files opened in the editor.

<img src="/static/snapshots/tutorial/find_file_2.jpg" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## Find symbol

In the current file, press `Ctrl + Shift + O` to find symbol.

<img src="/static/snapshots/tutorial/find_symbol.jpg" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## Find string

- Scope：String search, support `by current file`, `by directory`, `by left side selection`, `by current project`, `by all project` to search.
- Function：String search, support `whole word matching`, `regular expression matching`, `case matching`, and support `exclude` specific directories

<img src="/static/snapshots/tutorial/find_str.jpg" style="zoom: 45%;border-radius: 24px;border:1px solid #eee;"/>

## Find in selection

> Supported from HBuilderX 3.1.15+

HBuilderX supports "find in selection". You can select some codes and entering the search text in the top search bar (shortcut key: [Ctrl+Shift+f]). HBuilderX will search string in selected code blocks and then you can `search`, `replace`, and `select all the same words` in the selected area.

**Demo **

Find in selection, The background of the selected area will be highlighted. Press the `esc` key to exit the search.

<img src="/static/snapshots/tutorial/find_region.gif" style="zoom: 90%; border-radius: 5px;border:1px solid #eee;"/>
