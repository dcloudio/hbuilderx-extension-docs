插件扩展分为2个部分，分别为`插件API`和`配置扩展点`。
### 插件API说明
HBuilderX的插件是运行在单独的node.js进程的。除了调用HBuilderX提供的API列表外，node.js支持的API也能调用。当前开放的插件API列表参考[这里](/ExtensionDocs/Api/README.md)。

### 配置扩展点说明
`配置扩展点`是通过在插件描述文件`package.json`下的`contributes`节点下注册的配置。这里有完整的[配置扩展点](/ExtensionDocs/ContributionPoints/README.md)列表。
#### 为什么引入`配置扩展点`的概念？
HBuilderX对性能要求很高，`配置扩展点`也是出于性能考虑。 用户在安装插件时，每多安装一个插件都会额外增加主程序的启动加载时间，HBuilderX为了不影响主程序的启动时间，增加了插件`懒加载`的机制，即HBuilderX启动时不会自动激活已安装的插件，而只是解析插件的配置文件package.json里面的`配置扩展点`，通过`配置扩展点`添加插件想要注册的`菜单`、`命令`、`配置`等。当用户真正激活某个`菜单`或者`命令`时再通过onXXX事件去激活对应的插件。这样即满足了插件扩展的能力，又能减少对主程序性能的影响。关于懒加载的详细说明请参考[插件激活机制](/ExtensionDocs/activation_event.md)
