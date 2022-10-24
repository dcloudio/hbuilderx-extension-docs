HBuilderX对md提供了强大支持，是有史以来最强大、最简洁、最高效的markdown书写工具。

下载HBuilderX，点菜单帮助-markdown语法说明，会打开一个md文件，里面详细演示了HBuilderX对markdown的强化。
**推荐在那里实际体验**

## 强大的Emmet支持、及快捷键支持
------

- 标题:  敲`h2+Tab`即可生成二级标题
- 图片: `img`后敲`Tab`
- 链接: `a`后敲`Tab`
- 表格: `table3*3`后敲`Tab`，表示生成3行3列的表格，行首生效
- 分割线: `hr`后敲`Tab`
- 代码块: `code`后敲`Tab`，行首生效
- `day`后敲`Tab`，当前日期。注意day需在行首或前面有空格
- `time`后敲`Tab`，当前时间。注意time需在行首或前面有空格
- 文字加粗: `b`后敲`Tab`
- 文字倾斜: `i`后敲`Tab`
- 注释：快捷键`Ctrl+/`快速插入注释

## 强大的智能粘贴
------

- 图片: 支持智能粘贴，粘贴剪切板里的图形时会自动保存为本md文档的附件
- 链接: 支持智能粘贴，粘贴URL会自动变成超链接格式，粘贴本地文件进来也会自动创建引用链接
- 表格: 支持从excel、wps、word、number的表格中复制粘贴表格进来

## 强大的智能双击
------

- 标题: 双击`#号`可选中整个标题段落
- 有序列表: `双击`前面的数字，可重新对数字排序，修正序号错误
- 代码块: `双击`语法区开头，即`!左侧`，选中包含定义符的整段文字
- 注释: `双击`注释首尾的定义符，选中整段注释
- 链接: `双击`语法区开头，即`[`左侧，选中包含定义符的整段文字
- 图片: `双击`语法区开头，即`!`左侧，选中包含定义符的整段文字

## 强大的整理功能
------

- 表格：支持`Ctrl+K`可以自动整理表格格式

<img src="/static/snapshots/tutorial/markdown/markdown_table_format.gif" style="border: 1px solid #eee;"/>

## 直观的文档结构图
------
HBuilderX Markdown文件，也支持显示文档结构图（大纲视图）。

windows快捷键: `Alt+w`; MacOSX快捷键：`Ctrl+w`

<img src="/static/snapshots/tutorial/markdown/markdown_outline.jpg" style="zoom: 45%;border-radius: 20px;border: 1px solid #eee;"/>

还可以通过`Ctrl+Shift+o`的快捷大纲功能来搜索标题，当标题较多时，可以更快的找到所需的标题

## 实用的任务列表

任务列表非常实用，管理待办、已办非常便利。

- [ ] 任务列表-未完成任务 `快捷键：Ctrl+Alt+[`
- [x] 任务列表-已完成任务 `快捷键：Ctrl+Alt+]`

## 路径提示@PathHints
------

HBuilderX 3.6.8+，MarkDown支持文件路径提示，比如提示图片路径，如下图：

<img src="/static/snapshots/tutorial/markdown/md_path_hints.png" class="hd-img" />


## markdown一键分享
------
使用markdown也有一个重要的问题，那就是图片的存储，markdown文件要用到图片时必须是一个链接，在不使用图床的情况下，编辑上传图片太麻烦。

HBuilderX 2.8.8,  推出了 MarkDown一键分享功能。使用uniCloud作为图床 什么是[uniCloud](https://uniapp.dcloud.io/uniCloud/README)，可靠、安全、简单易用、免费。

markdown一键分享，顾名思义是在HBuilderX中写好的markdown文档，可以简单通过编辑器右键【一键分享】菜单或者快捷键上传到云端，并生成分享链接，并且完全免费！

文档引用到本地图片会自动解析一并上传到云端。

[markdown一键分享](/Tutorial/extension/markdown_share)

## 跨文件跳转到标题@goto-definition

当编辑较多markdown文档时，有多文件互相跳转和引用的需求。
可以通过`[详见](a.md)`的方式来跳转到文件`a.md`中。

除了简单的文件跳转，HBuilderX 3.5.2起，还支持跳转到#标题，并且支持章节的`@`别名。

以下图为例，假使你正在编辑的文档为`1.md`，同目录下还有一个md文件叫`todo.md`，其中有一个一级标题`# web`，那么按下图写法，按下alt+鼠标左键就可以跳转到`todo.md`文件的标题`web`的位置。
<img src="/static/snapshots/tutorial/markdown/file_goto_definition.png" class="hd-img" />

HBuilderX的跳转标题策略是可以不区分多级标题的。`todo.md`有个二级标题`## web2`，则可以写为`[详见](todo.md#web2)`，也可以写为`[详见](todo.md##web2)`

当一篇文章内有多个的标题名称一样时，可以通过@别名的方式来区别。

比如todo.md的内容如下，有2个`web2`：
```
# web
## web2
# web2
```

如何区分这2个`web2`呢？此时可以给标题起别名
```
# web
## web2@web2a
# web2@web2b
```

那么引用处写成`[详见](todo.md#web2a)`，就可以准确跳转到二级标题web2的位置了。

## Mermaid流程图@Mermaid
------

> HBuilderX 3.6.8+，MarkDown支持Mermaid 流程图，并支持在内置浏览器预览。

Markdown 的原生语法不支持绘制图形，但通过 Mermaid 扩展，我们可以将一些格式化的文字渲染成我们需要的图形。比如 “流程图”。

下文将介绍如何通过 Mermaid 绘制「流程图」。

流程图由几何图形节点及连接线组成。几何图形节点是流程图内的各元素的载体，通常用形状来区分其属性，例如圆形代表开始或结束、菱形代表判断等。连接线用于描述几何图形节点之间的联系，可能是有向线段，也可能是无向线段等。

在 Markdown 中添加 Mermaid 图形，需要声明 Mermaid 类型的代码块，代码如下：

<img src="/static/snapshots/tutorial/markdown/md_Mermaid_sytax.png" class="hd-img" />

### 基本语法

基本的流程图包含：流程图布局方向、几何图形和连接线三个部分组成。

**流程图布局方向**

|标志	|方向	|
|--	|--	|
|TB	|top bottom - 从上到下|
|BT	|bottom top - 从下到上|
|RL	|right left - 从右到左|
|LR	|left right - 从左到右|
|TD	|等同于 TB|

**连接线**

不同种类的连接线可以表示不同类型的关系，例如，无方向的连接线可用来表示相关性、有方向的连接线可以表示数据流向或者节点间的依赖关系；用实线表示强关联、用虚线表示弱关联等待。[](#示例3)

### 示例1： 基本的横向流程图

```mermaid
graph LR
    1[方形] --> 2(圆角) --> 3((圆形)) --> 4>非对称] --> 5{菱形} --> 6{{六角形}} --> 7[/平行四边形--右倾/] --> 8[\平行四边形--左倾\] --> 9[/梯形--正向\]  --> 10[\梯形--反向/]
```

<img src="/static/snapshots/tutorial/markdown/md-Mermaid_flow_basic.jpg" class="hd-img" />

### 示例2：基本的竖向流程图

```mermaid
graph TD
    开始 --> 结束
```

<img src="/static/snapshots/tutorial/markdown/md-Mermaid_flow_td.jpg" class="hd-img" />

### 示例3：分组图

```mermaid
graph TB
    c1-->a2
    subgraph 第一组
    a1-->a2
    end
    subgraph 第二组
    b1-->b2
    end
    subgraph 第三组
    c1-->c2
    end
```

<img src="/static/snapshots/tutorial/markdown/md-Mermaid_flow_subgraph.jpg" class="hd-img" />

### 示例4：冒泡排序流程图

```mermaid
graph LR
    执行1[i = 1]
  执行2[j = 0]
  执行3[i ++]
  执行4["a = arr[j], b = arr[j + 1]"]
  执行5[交换 a, b]
  执行6[j ++]
    判断1["i < n"]
    判断2["j < n - i"]
  判断3["a > b"]
  开始 --> 执行1
  执行1 --> 判断1
  判断1 --Y--> 执行2
  执行2 --> 判断2
  判断2 --Y--> 执行4
  判断2 --N--> 执行3
  执行3 --> 判断1
  执行4 --> 判断3
  判断3 --N--> 判断2
  判断3 --Y--> 执行5
  执行5 --> 执行6
  执行6 --> 判断2
  判断1 --N--> 结束
```

<img src="/static/snapshots/tutorial/markdown/md-Mermaid_flow_if.jpg" class="hd-img" />


### 示例5：连接线语法

基本的连接线语法：

```mermaid
graph LR
    A-->B
```

<img src="/static/snapshots/tutorial/markdown/md-Mermaid_flow_line_basic.jpg" class="hd-img" />

带文字的连接线线语法：

```mermaid
graph LR
    A ==> B == 带文字连接线 ==> C
```

<img src="/static/snapshots/tutorial/markdown/md-Mermaid_flow_line_basic_2.jpg" class="hd-img" />


## 云同步笔记的技巧
------

#### 云同步工具

首先推荐一个云同步工具，微软的onedrive。[https://skydrive.live.com/](https://skydrive.live.com/)

在dropbox被墙后，onedrive成为最佳选择，免费、稳定、安全、多平台。

win10平台自带onedrive客户端，其他平台可在上述网址下载安装。（一定要安装客户端，web版也需要翻墙）

配置onedrive账户后，在本机我的电脑上会出现一个onedrive文件夹，在里面新建一个“note”的文件夹（名字可自定），然后把HBuilderX写的md都存到这个文件夹中。

每次在HBuilderX中保存md文件后，onedrive会自动同步这个文件到云端。

使用其他电脑或手持设备后，也会自动看到这个文档。

onedrive手机端不支持直接查看markdown，可另行安装手机App，iOS上推荐使用mweb，安卓上推荐使用锤子便签。


#### svn、git同步

本机装好node后，利用watch监听文件变化，发现文件修改可自动提交到svn或git。

团队共享的待办事项同步可以用这种方式处理。

在DCloud内部，个人文档大多采用方式1，公司协作文档均采用方式2。并行使用。

这套方案适用于pc端编写，手机端查看的场景。这个场景下，HBuilderX+markdown拥有远胜于evernote、OneNote等笔记软件的体验。启动更快捷、编写更高效、阅读更美观。

但如果经常在手机端编写并同步的话，还是云笔记本软件更合适。

总看电视和刷短视频，会让人变傻。

打开HBuilderX，在键盘上敲出凝结思绪的markdown，会让你变聪明。
