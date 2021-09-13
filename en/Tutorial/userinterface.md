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

左边的大纲是长文档导航的利器。HBuilderX提供了优雅简洁的文档导览界面。

可以点底栏左侧红框内的大纲按钮，对应的快捷键是【win：alt+w、mac：ctrl+w】

<img src="/static/snapshots/tutorial/userinterface/outline_en.png" style="zoom:45%;border: 1px solid #eee; border-radius: 20px;" />

## Built-in Explorer

> 此处只是简单介绍下内置资源管理器，请查看[详细用法](Tutorial/UserGuide/built-in-explorer)

传统开发工具，仅仅依靠左侧的项目树来管理资源文件，便利性和效率是远远不够的。
HBuilderX内置的资源管理器，给你一个更大的资源管理界面，大幅提高文件的管理效率。

相比OS自带的资源管理器，HBuilderX资源管理器为编程文件提供专门的优化。

- 在大图预览界面下直接显示html标题、vue页面、组件的名字
- 直接预览markdown的内容
- 在列表详情界面扩充单独的列来显示svn/git状态

<img src="/static/snapshots/tutorial/explorer.gif" style="zoom:98%" />

## editor layout

By default, editor groups are laid out in vertical columns.

You can easily arrange editor groups in any layout you like, both vertically and horizontally.

Top Menu "view -> layout", There is a set of predefined editor layouts。

<img src="/static/snapshots/tutorial/userinterface/layout_en.png" style="zoom:45%;border: 1px solid #eee; border-radius: 20px;" />

## Single Window

单窗体： 就是项目管理器，只显示一个项目。

在主窗体上，点击菜单【视图】【新建HBuilder窗体】，就可以新建一个单项目窗体。

在主窗体上，选中某个项目，右键菜单，点击【在新窗体中打开】，即可将项目在单项目窗体中打开

[关于单窗体的详细说明与介绍](/Tutorial/UserGuide/multi-window)