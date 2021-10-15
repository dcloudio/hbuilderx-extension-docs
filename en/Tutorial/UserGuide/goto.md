# Goto

HBuilderX has a powerful jump function, as follows:

- [Goto Previous Location](#Goto-Previous-Location)
- Cursor jump
- [Goto Line](#Goto-Line)
- Goto the specified rank
- Goto Matching Bracket
- Goto BookMarkets
- Goto Scroll Bar
- [Goto Definition](#Goto-Definition)
- [Goto Definition to New Column](#Goto-Definition-to-New-Column)
- .....

## Goto Previous Location

In HBuilderX, `Alt+Left` (MacOSX: `ctrl + -`), click `<` on the toolbar, to return to the previous cursor position.

<img src="/static/snapshots/tutorial/goto/Previous_Location_en.png" class="hd-img" />

## Goto Line

Go to line shortcut：`ctrl + G`

<img src="/static/snapshots/tutorial/goto/goto_line_en.png" class="hd-img" />

## Goto the specified rank

> Only supports HBuilderX 2.8.10+

<img src="/static/snapshots/tutorial/goto/goto_lc_en.png" class="hd-img" />

- Support input `0` to jump to the first line
- input `$` to jump to the last line.

At the same time, it supports opening the specified file through the command line and jumping to the specified row and column.

```
# Example：
# File path, must be an absolute path
/Applications/HBuilderX-Alpha.app/Contents/MacOS/HBuilderX /Users/hx/filename.md:2:10
```

## Goto Definition

Go to definition is a very commonly used function, ordinary editors are not longer than this, only guess the word jump.

HBuilderX has a powerful syntax analysis engine that can accurately jump to the defined position.

The shortcut key to go to the definition is `Alt+D`, and the mouse operation is `alt+left click`.

<img src="/static/snapshots/started_tutorial/goto-definition-en.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />

> Remarks: Support switching [Ctrl+left mouse button] or [Alt+left mouse button] to go to definition (menu [select], the last menu)

## Goto Definition to New Column

Another feature of HBuilderX is `Go to definition to column`.

`ctrl+alt+left click`, you can open the code of a definition on the other side, which is convenient for common viewing.

<img src="/static/snapshots/started_tutorial/goto-definition-col-en.gif" style="zoom: 90%;border:1px solid #eee;border-radius: 5px;" />



