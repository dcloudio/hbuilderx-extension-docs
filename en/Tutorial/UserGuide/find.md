# Find and replace

- Find files
- Find and replace strings (by file, by project, by directory), and support regular
- Find symbol in editor
- Find in selection

## Find files

`ctrl+p (MacOSX: ⌘P)`, You can navigate to the search box, enter the file name, and quickly open any file.

After the file name, hit the space and enter the project name, you can search only the files under the specified project.

<img src="/static/snapshots/tutorial/find/find_file_en.png" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

Press and hold `Ctrl+Tab`, you can view the list of all files opened in the editor.

<img src="/static/snapshots/tutorial/find/find_file_2_en.png" style="zoom: 48%;border-radius: 24px;border:1px solid #eee;"/>

## Find symbol

In the current file, press `Ctrl + Shift + O` to find symbol.

<img src="/static/snapshots/tutorial/find/find_symbol_en.png" style="border:1px solid #eee;"/>

## Find string

- Scope：String search, support `by current file`, `by directory`, `by left side selection`, `by current project`, `by all project` to search and find.
- Function：String search, support `whole word`, `Regular Expression`, `Case Sensitive`, and support `exclude` specific directories

<img src="/static/snapshots/tutorial/find/find_str_en.png" class="hd-img" />

## Find in selection

> Only supports HBuilderX 3.1.15+ version

HBuilderX supports selecting a paragraph of text and searching in the selection in the search bar at the top (shortcut key: [Ctrl+Shift+f]), and you can `search`, `replace`, and `select all the same words` in the special background area.

**The following animation: **

Find in selection, The background of the selected area will turn yellow. Press the `esc` key to exit the area search.

<img src="/static/snapshots/tutorial/find/find_region_en.gif" style="zoom: 90%; border-radius: 5px;border:1px solid #eee;"/>