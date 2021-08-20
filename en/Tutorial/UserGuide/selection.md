# 选择

用鼠标拖着选中一片文本，是一个很容易让食指抽筋的操作。尤其是触摸板更痛苦。但是背诵很多相关的快捷键也一样痛苦。

HBuilderX提供了更友好方式：`智能双击`和`Ctrl+扩大选区`。

### 智能双击

在HBuilderX中，但凡特殊点的字符，都能智能双击。

- 双击引号/括号内侧，是选中引号/括号内的内容
- 双击逗号两侧，是选择逗号前一段或后一段
- 双击行尾，是选中该行(不含回车符)
- 双击连词符（-_）选中整个词
- 双击折叠行首内容开头，选择折叠段落
- 双击行首缩进，选择相同缩进的段落
- 双击列表符号，选择列表段落
- 双击Tag开头或结尾，选择整段Tag
- 双击属性赋值等号=，选择Html属性
- 双击if、function等关键字，选择整段包围区域
- 双击分号，选择js等语言的;分号前段落
- 双击css类名左侧，选择Css类
- 双击注释符选择注释区域
- 双击#选择markdown标题段落
- 双击语法定义符开头选择markdown图片、超链接、加粗、倾斜、代码等语法区
- [了解JSON智能双击](/Tutorial/Language/json?id=智能双击，快速选中数组或键值对)

下面是一个gif图例，双击选中tag和包围父tag

1. 双击div tag的首或尾可以选中这个tag，即开头的<左侧或结尾的>右侧。当然双击if、双击缩进符、双击括号引号内侧...很多位置都可以通过智能双击选中。具体见HBuilder的选择菜单。
2. 按Ctrl+]包围，就可以在这个选区首尾加父标签，同时闪烁光标。如果在js里，按下Ctrl+]不是包围tag，而是包围if、for等函数库，方便快速把一段代码放入if块中。
3. 输入div即可在首尾添加包围标签

<img src="/static/snapshots/tutorial/dbclick.gif" />

### 多光标

<img src="/static/snapshots/tutorial/more_cursor.gif" />


### 扩大选区

`=`是`+`的默认键位置，所以`Ctrl+=`其实就是`Ctrl`键和`+`号一起按下。

在HBuilderX里可以智能的判断选区范围，持续扩大选区，无鼠标快速选中你需要的选区。

<img src="/static/snapshots/tutorial/selection_expand.gif" />


### 反包围

1. 双击tag p开头，选中该tag。
2. 按反包围`Ctrl+Shift+]`，可去掉tag p并自动处理子节点的缩进。

<img src="/static/snapshots/tutorial/selection_1.gif" />

这里多提一句HBuilderX的快捷键理念，就是符号化，而不是字母化。很多工具的快捷键都是控制键+功能英文单词中的一个字母，这个是极难记忆的。

符号化让快捷键的记忆变简单，比如`Ctrl+]`是包围。

而反操作或增强操作一般是加Shift，比如Ctrl+Shift+]是反包围。

### 选中相同语法词及跳过某词

1. 下图中，使用普通的选择相同词Ctrl+e(mac是Cmd+d)，会把所有div都选中。但使用Ctrl+Shift+e（mac是Cmd+Shift+d），会智能识别语法，剔除不相干的词。
2. 下图按下选择相同语法词，同时选中tag首尾的div，而不会选中子节点的div。
3. 然后就可以方便的将原div改名为p

<img src="/static/snapshots/tutorial/selection_2.gif" />

备注：
- 如果想选择配对括号，靠相同词是不行的。选中相同语法词会选中匹配的2个左右括号
- 批量选中所有相同词是Ctrl+Alt+e(mac是ctrl+alt+d)

### 选择相同语法词或配对符号

菜单【选择】【选择相同语法词或配对符号】

MacOSX快捷键：command+shift+d；Windows快捷键：ctrl+shift+e

<img src="/static/snapshots/tutorial/renameTag.gif" style="zoom: 50%;border: 1px solid #eee; border-radius: 5px;" >

### 交换选区内容

当需要交互2个选区的内容时，选中a、剪切、点b前面、粘贴、选中b、找到之前a的位置点击、粘贴...这么长的操作太低效。

来看HBuilderX的`Ctrl+Shift+x`交互选区，也就是Ctrl+x的增强版。

1. 双击第1个style属性后的引号内侧，可选中引号内容。
2. 按下Ctrl后继续双击第2个style属性后的引号内侧，可选中2个引号内的选区。
3. 按下Ctrl+Shift+x，交换style属性的内容。

<img src="/static/snapshots/tutorial/selection_swap_1.gif" />

如果不选择内容，光标放置到2行，可直接交换这2行的内容，如下图

<img src="/static/snapshots/tutorial/selection_swap_2.gif" />


### 撤销最后一个多选区或多光标

选区选多了或选错了，不用担心要重头选，Ctrl+Shift+z不是撤销编辑内容，而是撤销最后一个选区。

1. 双击选中class
2. 按`Ctrl+e`选中相同词
3. 按`Ctrl+Shift+z`，不再选中最后一个词。

<img src="/static/snapshots/tutorial/selection_cancel.gif" />

如果多选了一个词，还可以点`Ctrl+鼠标右键`取消一个选区。

跳过当前词选下一个词,`Alt+Shift+e`(mac是`ctrl+shift+d`)


### 批量合并行

下图示例，是把css合并为一行时的快捷操作

<img src="/static/snapshots/tutorial/selection_merge.gif" />

1. 双击`{`内侧选中class
2. 按`Ctrl+双击`选中另一个class
3. 按反格式化`Ctrl+Shift+k`，可以把每个css的区块代码都合并为一行
4. `Ctrl+k`是格式化代码，那么`Ctrl+Shift+k`就是合并为一行。

### 同时注释if段首尾

if块的调整很常见，除了包围、反包围外，常用操作还有同时注释掉if段首尾。

1. 双击if选中if代码块
2. 按`Ctrl+\`在选区首尾加光标，变成多光标模式
3. 按`Ctrl+/`注释掉选区首尾行

<img src="/static/snapshots/tutorial/selection_if.gif" />