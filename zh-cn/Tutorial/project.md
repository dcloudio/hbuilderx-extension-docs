# 项目@project

使用HBuilderX，从创建项目开始吧。

下面将介绍项目创建、导入、关闭、创建别名、移除、重命名项目、重新识别项目类型、重新构建项目索引等操作。

## 导入项目/目录@import

点击顶部菜单【文件】【导入】，或点击菜单【打开目录】，即可导入项目到HBuilderX。

HBuilderX， 支持从`svn`、`Git`、`本地`导入项目。

svn、git导入项目，需要先安装svn、git插件。

<img src="/static/snapshots/tutorial/project/project_import.png" style="zoom: 85%;" />

## 创建项目@CreateProjectWindows

> 本章节适用于HBuilderX 3.3.0+版本, 低版本HBuilderX新建项目请[参考](/Tutorial/history/project?id=CreateProjectWindows) 

HBuilderX支持多种项目类型，主要有：web项目、5+App项目、uni-app项目、wap2app、HBuilderX扩展插件等。[项目类型详细介绍](/Tutorial/Other/ProjectType)    

- 欢迎页面，点击`新建项目`
- 【工具栏】第一个图标
- 顶部菜单【文件 -> 新建 -> 项目】

<img src="/static/snapshots/tutorial/project/project_create.png" style="zoom: 49%;" />

## 关闭项目@close

当项目管理器，项目数量过多时，您可以`关闭项目`；

在项目管理器，选中项目，右键菜单，点击【关闭项目】，即可将目移动到【已关闭项目】列表中。

当然，后期也可以从【已关闭项目】中，将需要的项目打开，移动到项目管理器。

<img src="/static/snapshots/tutorial/project/project_close.png" style="zoom: 85%;" />

## 项目别名@alias

HBuilderX，支持对项目创建或修改`别名`。

项目管理器，选中项目，右键菜单，点击【修改项目别名】，即创建别名。

<img src="/static/snapshots/tutorial/project/project_alias.png" style="zoom: 85%;" />

## toolbar@toolbar

> HBuilderX 3.3.0+版本, 项目管理器视图toolbar 新增定位和折叠所有快捷功能

注意：将鼠标移动到HBuilderX项目管理器范围内，相关图标才会显示出来。

<img src="/static/snapshots/tutorial/project/project_toolbar.png" class="hd-img" />

## 其它操作@other

**移除项目**：您可以将项目，从项目管理器移除，或移动到回收站。

**重新识别项目类型**：某些情况下，HBuilderX没有正确识别项目类型（比如uniapp项目，无法显示运行菜单），导致相关菜单无法正确显示，通过重新识别项目类型即可解决。[了解项目类型](/Tutorial/ProjectType)

**重新构建项目索引**：某些情况下，代码提示异常（比如图片路径无法提示），通过`重新构建项目索引`即可解决。

## 与编辑器同步@sync

<p>项目管理器，右上角，点击 <svg t="1631502274114" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24803" width="14" height="14"><path d="M873.8304 552.96h-737.28c-22.528 0-40.96-18.432-40.96-40.96s18.432-40.96 40.96-40.96h737.28c22.528 0 40.96 18.432 40.96 40.96s-18.432 40.96-40.96 40.96zM873.8304 307.2h-737.28c-22.528 0-40.96-18.432-40.96-40.96s18.432-40.96 40.96-40.96h737.28c22.528 0 40.96 18.432 40.96 40.96s-18.432 40.96-40.96 40.96zM873.8304 798.72h-737.28c-22.528 0-40.96-18.432-40.96-40.96s18.432-40.96 40.96-40.96h737.28c22.528 0 40.96 18.432 40.96 40.96s-18.432 40.96-40.96 40.96z" p-id="24804" fill="#707070"></path></svg> 图标</svg>，即可设置编辑器同步功能</p>

<img src="/static/snapshots/tutorial/settings/sync.png" style="zoom: 50%;border: 1px solid #eee;" />