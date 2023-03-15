# 多文件字符搜索

> HBuilderX 3.7.8，重构了多文件字符搜索。

HBuilderX 3.7.8，多文件字符搜索，从`工具栏`改为在`HBuilderX左侧视图`实现。

HBuilderX项目管理器，选中某个项目，右键菜单【字符搜索】，即可进入多文件字符搜索视图。

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/node-search-use-gif.gif" style="border-radius: 15px; border: 1px solid #eee; zoom: 40%;" />

## 搜索视图

搜索视图主要包含以下内容:

- 搜索输入框：输入`搜索关键字`会自动搜索，当然也支持回车搜索。
- 搜索输入框尾部，有3个图标，分别是：大小写匹配、整词匹配、正则匹配
- 替换输入框
- 查找范围：当前项目、所有项目、打开的文件、当前目录、自定义目录
- 包含的文件
- 排除的文件：多文件字符搜索，默认不搜索`.git,.cvs,.svn,node_modules,unpackage`目录
- 搜索结果展示

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/node-search-view.jpg" style="border-radius: 15px; border: 1px solid #eee; zoom: 60%;"/>

## 正则匹配

下面罗列一下常见的正则语法，[更多正则语法](https://docs.rs/regex/1.7.1/regex/#syntax):

|语法	|描述	|
|--	|--	|
|.  |匹配单个字符，除了换行和行结束符|
|\d	|匹配数字	|
|\D	|匹配非数字字符	|
|\w	|匹配单词字符	|
|\W	|匹配非单词字符	|
|\s	|匹配空白字符	|
|\S	|匹配非空白字符	|
|[abc]	|匹配方括号之间的任何字符。|
|[^abc]	|匹配任何不在方括号之间的字符。|
|[0-9]	|匹配任何从 0 至 9 的数字。|
|[a-z]	|匹配任何从小写 a 到小写 z 的字符。|
|[A-Z]	|匹配任何从大写 A 到大写 Z 的字符。|
|[A-z]	|匹配任何从大写 A 到小写 z 的字符。|
|[adgk]	|匹配给定集合内的任何字符。|
|[^adgk]	|匹配给定集合外的任何字符。|
|(red)	|匹配任何指定的选项。|
|n+	|匹配任何包含至少一个 n 的字符串。|
|n*	|匹配任何包含零个或多个 n 的字符串。|
|n?	|匹配任何包含零个或一个 n 的字符串。|
|n{X}	|匹配包含 X 个 n 的序列的字符串。|
|n{X,Y}	|匹配包含 X 至 Y 个 n 的序列的字符串。|
|n{X,}	|匹配包含至少 X 个 n 的序列的字符串。|
|n$	|匹配任何结尾为 n 的字符串。|
|^n	|匹配任何开头为 n 的字符串。|
|?=n	|匹配任何其后紧接指定字符串 n 的字符串。|
|?!n	|匹配任何其后没有紧接指定字符串 n 的字符串。|

**示例:**

<img src="https://web-assets.dcloud.net.cn/hbuilderx-doc/node-search-reg.jpg" style="border-radius: 15px; border: 1px solid #eee; zoom: 60%;" />
