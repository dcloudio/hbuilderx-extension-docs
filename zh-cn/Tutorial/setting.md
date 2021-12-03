# 设置@setting

您可以通过各种设置轻松配置HBuilderX。

## 设置视图@view

要想打开设置，请使用以下菜单命令:

- Windows: 顶部菜单【工具】-> 【设置】(快捷键: `ctrl` + `alt` + `,`)
- MacOSX: 顶部菜单【HBuilderX】-> 【偏好设置】(快捷键: `command` + `,`)

<img src="/static/snapshots/tutorial/settings.png" style="zoom:90%" />

设置视图，主要分为5部分：

- 常用配置：[详情](/Tutorial/setting?id=常用配置)
- 编辑器配置: [详情](/Tutorial/setting?id=编辑器配置)
- 运行配置：手机/模拟器运行和浏览器运行相关配置
- 插件配置：已安装的插件扩展配置
- 源码视图：json文件，包含以上自定义的配置

## 常用配置项

- 编辑器字体大小
- 编辑字体，[详情](/Tutorial/settings/font)
- 制表符长度
- 空格代替制表符
- 失去焦点自动保存：默认未开启，如需要，请手动开启
- 语言关联配置
- 项目管理器过滤器配置
- 搜索默认不包含的目录：搜索时默认不包含`.git`、`.cvs`、`.svn`、`node_modules`、`unpackage`
- 打开终端数量：最多允许打开的终端数量，默认8
- 本地历史记录，[详情](/Tutorial/UserGuide/LocalHistory)
- 项目管理器单击展开/折叠目录（备注：若关闭此项则是双击展开/折叠目录）
- 项目管理器点击目录时打开内部资源管理器 (即点击时，是否打开内置资源管理器)

#### 更新设置

HBuilderX，可自定义编辑器升级策略。

启动时自动检查更新，即每次HBuilderX启动，都会检查更新，当存在更新时，弹窗提示更新。

<img src="/static/snapshots/tutorial/settings/upgrade.png" class="hd-img" />

## 编辑器配置

- 自动换行: 默认不换行，如需要，请启用。
- 高亮时显示空白字符：默认启用。
- 显示换行符
- 选择默认换行符
- 迷你地图最大像素宽度：默认100
- 鼠标悬停预览
- 关闭时记忆文档折叠状态
- 启动.editorconfig支持：默认启用
- 显示代码缩进对齐线
- 显示长行指示竖线
- 长行指示竖线显示在第几列： 默认值80
- 编辑器行高：文档行间距比例，默认1.2
- 仅在选择一个完整的单词时触发相同词高亮
- 启动代码助手：默认启用，可手动关闭
- Tab键自动插入代码助手选中项
- 代码助手字体大小：默认12
- 代码助手触发字符
- 启用px转rem提示
- 启用px转rpx/upx提示 [详情](/Tutorial/settings/px-upx)
- 自动匹配匹配字符
- 中文标点免干扰输入
- 文字分隔符
- 插入多光标使用的修饰键
- 使用Ctrl+鼠标滚轮缩放编辑器
- 智能计算制表符长度
- 编辑器向下滚动一屏

## uni-app运行设置@uniapp-run-setting

如果uni-app编译遇到`JavaScript heap out of memory`问题，请调整uni-app node启动内存参数。

点击菜单【设置 - 运行设置 - uni-app运行设置】，如下图：

<img src="/static/snapshots/tutorial/settings/uniapp_run_setting.png" style="zoom: 45%;border: 1px solid #eee;"/>

如果调整node启动内存参数，仍无法解决此问题，建议优化项目或代码。

## 源码视图常见问题

HBuilderX启动时，会加载`设置配置文件`, 文件损坏（文件格式错误，非json格式），会导致HBuilderX无法启动。

修改源码视图时，请谨慎修改。