# Find and replace

- Find files
- Find and replace strings (by file, by project, by directory), and support regular
- Find symbol in editor
- Find in selection

## Find files

`ctrl+p (MacOSX: ⌘P)`, You can navigate to the search box, enter the file name, and quickly open any file.

After the file name, hit the space and enter the project name, you can search only the files under the specified project.

<img src="/static/snapshots/tutorial/find_file.jpg" style="zoom: 50%;border-radius: 24px;border:1px solid #eee;"/>

Press and hold `Ctrl+Tab`, you can view the list of all files opened in the editor.

<img src="/static/snapshots/tutorial/find_file_2.jpg" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## Find symbol

In the current file, press `Ctrl + Shift + O` to find symbol.

<img src="/static/snapshots/tutorial/find_symbol.jpg" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## Find string

- Scope：String search, support `by current file`, `by directory`, `by left side selection`, `by current project`, `by all project` to search and find.
- Function：String search, support `whole word matching`, `regular matching`, `case matching`, and support `exclude` specific directories

<img src="/static/snapshots/tutorial/find_str.jpg" style="zoom: 45%;border-radius: 24px;border:1px solid #eee;"/>

## Find in selection

> Only supports HBuilderX 3.1.15+ version

HBuilderX supports selecting a paragraph of text and searching in the selection in the search bar at the top (shortcut key: [Ctrl+Shift+f]), and you can `search`, `replace`, and `select all the same words` in the special background area.

**The following animation: **

Find in selection, The background of the selected area will turn yellow. Press the `esc` key to exit the area search.

<img src="/static/snapshots/tutorial/find_region.gif" style="zoom: 90%; border-radius: 5px;border:1px solid #eee;"/>