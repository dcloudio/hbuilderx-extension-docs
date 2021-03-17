# 设置

您可以通过各种设置轻松配置HBuilderX。

要想打开设置，请使用以下菜单命令:

- Windows: 顶部菜单【工具】-> 【设置】(快捷键: `ctrl` + `alt` + `,`)
- MacOSX: 顶部菜单【HBuilderX】-> 【偏好设置】(快捷键: `command` + `,`)

<img src="/static/snapshots/tutorial/settings.png" style="zoom:90%" />

设置视图，主要分为5部分：

- 常用配置：[字体](/Tutorial/settings/font)、字体大小、语言关联配置、本地历史记录
- 编辑器配置: 编辑器相关配置，比如缩进、[代码助手配置](/Tutorial/Language/CodeAssistant?id=代码助手配置)、[px转upx](/Tutorial/settings/px-upx)等。
- 运行配置：手机/模拟器运行和浏览器运行相关配置
- 插件配置：已安装的插件扩展配置
- 源码视图：json文件，包含以上自定义的配置

# 源码视图常见问题

HBuilderX启动时，会加载`设置配置文件`, 文件损坏（文件格式错误，非json格式），会导致HBuilderX无法启动。

修改源码视图时，请谨慎修改。