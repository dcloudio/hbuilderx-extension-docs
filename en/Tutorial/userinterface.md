## User Interface

Like many other code editors, HBuilderX adopts a common user interface and layout of an explorer on the left.

showing all of the files and folders you have access to, and an editor on the right, showing the content of the files you have opened.

<img src="/static/snapshots/tutorial/userinterface/HBuilderX_en.png" style="zoom:40%;border-radius: 25px;border: 1px solid #eee;" />

## Basic Layout

The UI is divided into areas:

* Editor - The main area to edit your files. You can open as many editors as you like side by side vertically and horizontally.
* Project Explorer on the left
* toolbar
* Status Bar - Information about the opened project and the files you edit.
* Console - You can display different panels below the editor region for output or debug information, errors and warnings, or an integrated terminal. Panel can also be moved to the right for more vertical space.

Each time you start HBuilderX, it opens up in the same state it was in when you last closed it.

## Minimap

A Minimap (code outline) gives you a high-level overview of your source code, which is useful for quick navigation and code understanding

A file's minimap is shown on the right side of the editor. You can click or drag the shaded area to quickly jump to different sections of your file.

<img src="/static/snapshots/tutorial/userinterface/minimap_en.png" style="zoom:45%;border: 1px solid #eee; border-radius: 20px;" />

Notes：
- You can right-click on the far right side of the editor to close or open the mini map.
- [Settings - Editor], supports adjusting the pixel width of the mini map, the default is 100

## Outline View

The outline on the left is a powerful tool for navigating long documents.

HBuilderX provides an elegant and concise document navigation interface.

Click the outline icon in the bottom status bar to open the outline view. The corresponding shortcut key is [win: alt+w, mac: ctrl+w]

<img src="/static/snapshots/tutorial/userinterface/outline_en.png" style="zoom:45%;border: 1px solid #eee; border-radius: 20px;" />

## Built-in Explorer

> Here is just a brief introduction to the built-in resource manager, [Details](Tutorial/UserGuide/built-in-explorer)

The built-in resource manager of HBuilderX gives you a larger resource management interface and greatly improves the efficiency of file management.

Compared with the resource manager that comes with OS, HBuilderX resource manager provides special optimization for programming files.

- Large icon view, Directly display the html title, vue page, component name
- Preview the content of markdown directly
- Expand a separate column in the list details interface to display svn/git status

<img src="/static/snapshots/tutorial/explorer.gif" style="zoom:98%; border: 1px solid #eee;" />

## editor layout

By default, editor groups are laid out in vertical columns.

You can easily arrange editor groups in any layout you like, both vertically and horizontally.

Top Menu "view -> layout", There is a set of predefined editor layouts。

<img src="/static/snapshots/tutorial/userinterface/layout_en.png" style="zoom:45%;border: 1px solid #eee; border-radius: 20px;" />

## Single Window

Single Project window: It is the project manager, only one project is displayed。

On the main window, Click the menu [View] [New Window] to create a single project window.

On the main window, select an project, right-click on the menu, and click [Open in New Window] to open the project in the single project Window.

[Detailed description of the single form](/Tutorial/UserGuide/multi-window)