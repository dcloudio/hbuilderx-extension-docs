# HBuilderX的快捷键理念

HBuilderX的快捷键原则是：不定义记不住的快捷键
过去的很多工具都提供了太多abcd的快捷键，完全记不住
HBuilderX在定义每个快捷键时都经过了考量，记住如下原则，就可掌握大部分快捷键

1. 尽可能保持与OS、浏览器接近

比如标签卡管理，与浏览器完全相同，command+t新建标签卡、command+shift+t恢复刚关闭的标签卡、command+w关闭标签卡、command+alt+left/right切换标签卡
对于习惯eclipse体系command+t寻找文件的用户，需记得寻找文件的快捷键已经调整为command+p

2. command是操作、command+shift是反操作或更多操作、command+alt为更多操作

command+k是格式化，那么command+shift+k就是合并为一行
command+w是关闭当前标签卡，那么command+shift+w是关闭所有标签卡
command+f是搜索，command+alt+f是目录内搜索

3. 符号化而不是单词字母化

包围的英文是surround，但从这个单词里选一个字母配合command等键定为快捷键是很难记住的。command+]是包围，command+shift+]是反包围，这样好记多了
command+shift+|是给选中行每行设置光标，“|”就是光标的样子，很形象

4. 强化和鼠标的配合，更易用

alt+鼠标滚轮是横向滚动
alt+鼠标单击是转到定义
alt+鼠标拖动是列选择
command+鼠标单击是添加多光标
鼠标双击可以智能选中，详见选择菜单

5. 老HBuilder用户需注意的常见快捷键差异

- 寻找文件从command+t改为command+p
- 删除行从command+d改为ctrl+d。command+d让给了选择相同词
- 格式化从command+shift+f改为command+k
- 合并行从command+j改为command+shift+k
- ctrl+d为删除当前行

6. sublime用户需注意常见快捷键差异

- 重复行内容的快捷键是command+shift+r
- 打开控制台不是command+~而是ctrl+x
- 合并行不是command+j而是command+shift+k
- 在每行行首设置光标不是command+shift+l而是command+shift+\
- 选择括号内容不是command+shift+m而是command+[
- command+]是加包围。除了包围tag还支持包围if等函数块。同时提供command+shift+]为反包围
- 调缩进是tab或shift+tab，不是command+[和]
- 选择tag、相同缩进，可以双击tag首尾或缩进符号，不用背快捷键
- 扩大选区是command+=，更易用
- 复制行或选区是command+shift+r而不是command+shift+d
- 当然在右上角，你也可以点击下拉菜单，切换其他工具的快捷键方案