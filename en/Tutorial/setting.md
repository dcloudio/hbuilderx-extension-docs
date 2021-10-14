# Settings

You can easily configure HBuilderX through various settings.

To open the settings, please do the following:

- Windows: Top menu [Tools -> Settings] (shortcut key: `ctrl` + `alt` + `,`)
- MacOSX: Top menu [HBuilderX -> Preferences] (shortcut key: `command` + `,`)

<img src="/static/snapshots/tutorial/settings/ui_settings_en.png" class="hd-img" />

settings view，Divided into 5 parts：

- Commonly Used：[Details](/Tutorial/setting?id=常用配置)
- Editor: [Details](/Tutorial/setting?id=编辑器配置)
- Run：Mobile phone/emulator operation and browser operation related configuration
- Plugins：Installed plug-in extension configuration
- Source View：json file, Include the above customized configuration

## Commonly Used

- The Editor Font Size
- 编辑字体，[Details](/Tutorial/settings/font)
- Tab Size
- Insert Spaces when Pressing Tab
- Auto Save when Focus Losed
- Language Association
- 项目管理器过滤器配置
- 搜索默认不包含的目录：搜索时默认不包含`.git`、`.cvs`、`.svn`、`node_modules`、`unpackage`
- 打开终端数量：最多允许打开的终端数量，默认8
- Local History[Details](/Tutorial/UserGuide/LocalHistory)
- 项目管理器打击展开/折叠目录，关闭此项则是双击展开/折叠目录
- 项目管理器点击目录时打开内部资源管理器

## Editor

- Word Wrap
- Display Blank Characters when Highlighted
- 显示换行符
- 选择默认换行符
- Macimum Pixel Width Of MiniMap: default 100
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
- 启用px转rpx/upx提示 [Details](/Tutorial/settings/px-upx)
- 自动匹配匹配字符
- 中文标点免干扰输入
- 文字分隔符
- 插入多光标使用的修饰键
- 使用Ctrl+鼠标滚轮缩放编辑器
- 智能计算制表符长度
- 编辑器向下滚动一屏

## uni-app Running Configuration@uniapp-run-setting

如果uniapp编译遇到`JavaScript heap out of memory`问题，请调整uniapp node启动内存参数。

点击菜单【设置 - 运行设置 - uniapp运行设置】，如下图：

<img src="/static/snapshots/tutorial/settings/uniapp_run_setting_en.png" style="zoom: 45%;border: 1px solid #eee;"/>

如果调整node启动内存参数，仍无法解决此问题，建议优化项目或代码。

## Question

When HBuilderX starts, it will load the `settings configuration file`, and the file is damaged (file format error, not in json format), which will cause HBuilderX to fail to start.

When modifying the source code view, please modify it carefully.