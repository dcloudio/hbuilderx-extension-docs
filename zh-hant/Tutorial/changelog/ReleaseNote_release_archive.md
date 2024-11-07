## 3.99.2023122611
* 新增 报Bug 目前支持对 HBuilder 和 uni-app x 报Bug，方便提交日志和示例工程。入口在菜单帮助-报Bug，及App运行控制台的右上角蓝色虫子按钮
* 修复 内置浏览器 预览html文件和markdown文件，某些情况下预览失败的Bug [详情](https://ask.dcloud.net.cn/question/182604)
* 修复 windows 关闭HBuilderX过程中提示创建桌面快捷方式时UI卡住的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=310)
* 修复 Windows 某些情况下地址栏无法使用快捷键复制的Bug [详情](https://ask.dcloud.net.cn/question/180472)
* 修复 MacOSX 某些情况下内置浏览器devtools里面的文字无法使用快捷键复制的Bug [详情](https://ask.dcloud.net.cn/question/181819)
* 修复 多文件搜索 鼠标双击搜索结果项，输入焦点没有自动设置到打开的编辑器内的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=309)
* 修复 .editorconfig 配置`insert_final_newline`、`trim_trailing_whitespace`在保存文件时没有生效的Bug [详情](https://ask.dcloud.net.cn/question/165790)
* 新增 语言服务 uni-app x uts自动修复 支持number类型和kotlin的数字类型互相转换
* 新增 语言服务 uni-app x uts类型检查 支持函数类型校验 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/function.html#%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B)
* 新增 语言服务 uni-app x uts类型检查 检查算法由结构校验调整为名称校验 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/type-compatibility.html)
* 调整 语言服务 uni-app x uvue文件代码提示不再提示 uni-app x 不支持的内置组件
* 修复 语言服务 uni-app x uvue组件事件类型校验时，全局事件不生效的Bug
* 修复 语言服务 某些情况下语言服务启动时崩溃的Bug [详情](https://ask.dcloud.net.cn/question/182739)
* 修复 语言服务 less、scss文件代码提示时@rule某些情况下替换位置不对的Bug [详情](https://ask.dcloud.net.cn/question/182353)
* 修复 语言服务 unicloud-db组件代码提示时不支持field嵌套语法的Bug
* 修复 uni-app 运行到支付宝小程序，当pages.json因为条件编译存在重复key时运行失败的Bug [详情](https://ask.dcloud.net.cn/question/182610)
* 修复 uni-app cli项目无法运行到支付宝小程序的Bug
* 修复 uni-app MacOSX 运行到支付宝小程序，没有兼容老的支付宝小程序工具路径的Bug
* 修复 App真机运行 Android 某些机型获取基座安装时间异常导致基座一直被重复安装的Bug [详情](https://ask.dcloud.net.cn/question/182690)
* 修复 App真机运行 Android 运行到自定义调试基座后，再运行标准基座到iOS模拟器报安装调试基座失败的Bug[详情](https://ask.dcloud.net.cn/question/181703)
* 优化 uni-app manifest.json的权限可视化界面，支持在自动选择权限外，手动控制添加和删除权限。无需再去AndroidManifest.xml中删除权限。
* 修复 5+项目 工具栏运行菜单多出运行到Chrome等菜单项的Bug

## 3.98.2023112510
* 新增 Markdown 预览支持编辑器和预览视图双向同步滚动
* 新增 Markdown 在HBuilderX内打开的编辑器中复制代码粘贴到Markdown编辑器时，自动包裹对应语言的代码块
* 修复 MacOSX markdown预览 当文件比较大时，预览到内置浏览器渲染太慢的Bug
* 修复 在HBuilderX中打开的文件，被外部程序修改后，偶发不会自动刷新内容的Bug [详情](https://ask.dcloud.net.cn/question/181222)
* 修复 ts语言 `#ifdef`等条件编译代码没有高亮的Bug
* 修复 语言服务 windows 文件监听导致无法重命名和删除文件的Bug
* 修复 语言服务 id、class提示，没有按照文件引用关系排序的Bug
* 修复 语言服务 项目过大时，某些class不会提示的Bug
* 修复 语言服务 文件删除后，该文件中定义的class和id等索引在仍会在代码提示出现的Bug
* 修复 语言服务 id无法转到定义的Bug
* 修复 语言服务 在调用函数使用字面量对象传入参数时，在{}内加双（单）引号提示属性，回车后补全不对的Bug
* 修复 语言服务 unicloud-db组件指定的 DB Schema 表没有属性时，v-slot:default的data类型推导错误的Bug
* 修复 语言服务 TailwindCSS插件，没有代码提示的Bug [详情](https://ask.dcloud.net.cn/question/181475)
* 修复 语言服务 uni-app x 部分vue类型不正确导致语法报错的Bug
* 新增 语言服务 uts 类型校验错误提示支持国际化
* 修复 语言服务 uts 部分Android系统API不兼容kotlin的类型的Bug
* 修复 语言服务 uts 系统库自动修复导包时，导入的路径不对的Bug
* 调整 语言服务 类型校验时支持string或number类型赋值到对应的string或number字面量联合类型
* 修复 编辑器变量悬浮时，快速关闭编辑器可能导致崩溃的Bug
* 新增 uni-app 运行到支付宝小程序时，支持自动打开项目并进入预览模式
* 修复 安心打包 iOS 自定义调试基座打包时误提示“uts付费插件不支持安心打包”的Bug [详情](https://ask.dcloud.net.cn/question/181784)
* 优化 App真机运行 Android 自定义基座，在版本号相同但安装时间不同时，不会覆盖安装的Bug
* 修复 App真机运行 Android 通过局域网连接的设备，运行时报不支持反向代理的Bug [详情](https://ask.dcloud.net.cn/question/181431)

## 3.96.2023110403
* 修复 Windows 在电脑扩展屏幕上，某些情况下登录窗口不可见的Bug
* 修复 3.94引出的，因插件路径调整，导致wap2app项目打包失败的Bug


## 3.95.2023102806
* 修复 3.94引出的 uniCloud 初始化向导操作异常的Bug

## 3.94.2023102613
* 【重要】新增 uni-app-x ，不再使用js和webview，编译为纯原生App，目前仅支持Android [详情](https://uniapp.dcloud.net.cn/uni-app-x/)
* 调整 HBuilderX和uni-app的版本号改为数字 [详情](https://uniapp.dcloud.net.cn/tutorial/version.html)
* 新增 HBuilderX 版本升级 支持差量更新 提升更新速度
* 新增 HBuilderX 支持搜索设置项（快捷键: `Alt+Shift+,`)
* 优化 项目管理器 鼠标拖拽移动文件 增加确认弹窗
* 优化 字符替换操作的性能
* 优化 大文件 注释上千行代码的性能
* 修复 .editorconfig 文件存在扩展的设置项时，误报格式错误的Bug
* 修复 菜单【视图】来回切换控制台，再按下`Alt+Tab`，出现一个新的空白无title的控制台Bug
* 修复 MacOSX 某些情况下，点击顶部视图或帮助菜单，HBuilderX出现崩溃的Bug
* 修复 多文件字符搜索 首次激活搜索视图 搜索输入框没有自动置焦的Bug
* 修复 格式化 vue/uvue文件template区域写条件编译时，格式化后条件编译缩进不对的Bug
* 修复 格式化 TS文件选中区域格式化时，当选中区域小于一行时，格式化结果可能不对的Bug
* 修复 某些情况下 HBuilderX plugin-manager Node进程无法退出的Bug
* 修复 Markdown 图片悬浮预览时闪烁的Bug
* 修复 Markdown 表格格式化后，需要多次撤销才能还原的Bug
* 新增 uni-app manifest.json App模块配置，Facebook登录，增加配置项client_token
* 修复 uni-app manifest.json App模块配置->定位->高德定位，只勾选Android，校验appkey_ios的Bug
* 修复 uni-app manifest.json 点击某些元素时偶发崩溃的Bug
* 【重要】调整 App项目全系列调整为默认64位，即manifest.json的Android平台支持CPU类型默认值为`arm64-v8a`。如需32位需手动配置manifest打包后生效
* 修复 uni-app 新建页面 页面在pages.json插入时缩进以及换行符和当前编辑器设置不一致的Bug
* 修复 App真机运行 Android设备选择窗口，设备列表刷新慢的Bug
* 修复 App真机运行 Android设备选择窗口，Windows下有时手机列表显示异常数据的Bug
* 修复 App真机运行 5+项目 修改js、css、图片等文件时，不会自动刷新引用这些资源的页面的Bug
* 新增 uni_modules插件 上传插件补充uni-app x分类
* 修复 uni_modules插件 上传到插件市场时，当更新日志中出现${}特殊标记时，引发HBuilderX崩溃的Bug

## 3.8.12.20230817
* 新增 Git插件 在工具栏内的地址栏里，项目名称左侧新增Git分支名称，点击后可以方便的进行Git相关操作
* 新增 语言服务 JS、TS支持错误校验自动修复 [详情](https://hx.dcloud.net.cn/Tutorial/Language/auto-fixed)
* 新增 语言服务 支持在ts方法上敲`/**`自动提取方法参数信息到tsdoc上
* 修复 语言服务 悬浮框内文字不支持`ctrl + c`复制的Bug
* 修复 语言服务 悬浮框偶发悬浮到其他应用窗口上的Bug
* 修复 语言服务 TS文件块注释内敲`@`不提示注释标签的Bug
* 修复 语言服务 Vue文件JS块注释内敲`@`提示注释标签，回车后替换内容不对的Bug
* 修复 语言服务 Vue/nvue文件标签事件内没有代码提示的Bug
* 修复 语言服务 Vue 箭头函数内this无法访问vue实例的Bug
* 修复 语言服务 Vue API描述国际化失效的Bug
* 修复 语言服务 某些情况下uniCloud目录下的文件代码提示慢的Bug
* 修复 语言服务 开启js语法校验后，vue文件内js报错不正确的Bug
* 修复 语言服务 uni-app项目 无法识别pinia模块的Bug
* 修复 语言服务 uni-app项目 模块名提示时不会提示内置模块（eg：@dcloudio/uni-app）的Bug
* 修复 语言服务 Vue、html文件 偶发大纲不生效的Bug
* 修复 语言服务 html文件 部分模版语法可能导致代码无法提示的Bug
* 修复 代码助手 某些情况下列表不能翻到下一页时下一页按钮仍然不置灰的Bug
* 修复 某些情况下HBuilderX退出后，部分node进程CPU100%无法正确退出的Bug
* 修复 多文件搜索 指定搜索范围后，切换编辑器标签卡导致搜索范围改变的Bug
* 修复 单行注释 光标在行首时，执行反注释不生效的Bug
* 修复 uni-app 真机运行时，拔掉手机后再插上，重新运行会导致控制台日志重复及编译进程多个的Bug
* 修复 uni-app 真机运行 某些情况下运行控制台工具栏`重启应用`按钮点击后不生效的Bug
* 优化 uni-app 运行到抖音小程序工具时，自动打开项目进入Lite模式

## 3.8.7.20230703
* 新增 `Ctrl + Tab` 快速切换视图（macOS快捷键：Alt + Tab）
* 新增 `clogvar`代码块自动填充距离最近的变量
* 新增 Markdown编辑器 代码块区域支持折叠
* 新增 uni-app 支付宝发行 支持自动上传到支付宝后台 [详情](https://hx.dcloud.net.cn/cli/publish-mp-alipay)
* 修复 语言服务 某些情况下HTML标签和属性提示较慢的Bug
* 修复 语言服务 某些情况下导致CPU 100%的Bug
* 修复 语言服务 全局定义的class和id存在局部重新定义时，无法跳转到局部定义的Bug [详情](https://ask.dcloud.net.cn/question/170668)
* 修复 语言服务 vue文件引用的路径以`@/`开头时无法转到定义的Bug
* 修复 语言服务 vue cli ts项目vue文件误报错的Bug
* 修复 `Ctrl + /` 选中多行触发注释，当最后一行光标在行首时，最后一行也被注释的Bug
* 修复 `Ctrl + Shift + Enter` 向上插入空行 某些情况下缩进不对的Bug
* 修复 控制台日志 无法使用`Shift + Up`、`Shift + Down`等快捷键选中文字的Bug
* 修复 多文件字符搜索 搜索结果出来后，点击`重置`后编辑器中的高亮没有清理掉的Bug
* 优化 多文件字符搜索 小屏幕下搜索结果显示区域太小的Bug
* 修复 多文件字符搜索 包含/排除目录中输入内容，点击`搜索`按钮过滤条件不生效的Bug
* 修复 多文件字符搜索 某些情况下，搜索过程中，HBuilderX出现闪退的Bug
* 修复 内置浏览器 多次切换预览和关闭时，偶发崩溃的Bug
* 修复 多个运行控制台时，切换左侧视图（项目管理器等）会导致控制台顶部按钮错乱的Bug
* 新增 插件API `languages.registerInlineCompletionItemProvider` 支持行内代码提示 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/languages/registerInlineCompletionItemProvider)
* 新增 插件API `window.createStatusbarItem` 扩展底部状态栏 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/windows/createStatusBarItem)
* 优化 插件API `console.appendLine` 打印日志的性能

## 3.8.4.20230531
* 修复 3.8.3引出的 当电脑连接外接显示器，激活多文件字符搜索功能后，切换到其它屏幕的Bug [详情](https://ask.dcloud.net.cn/question/170787)
* 修复 语言服务 某些情况下，Vue文件，无法提示class的Bug
* 修复 某些情况下，语言服务出现异常，提示`The TypeScript language service died unexpectedly 5 times in the last 5 Minutes.`的Bug
* 修复 某些情况下，语言服务Node进程，CPU占用100%的Bug

## 3.8.3.20230526
* 【重要】调整 Windows 64位系统，HBuilderX内置Node调整为64位Node.exe
* 优化 多文件字符搜索 从工具栏改为在HBuilderX左侧视图实现 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/node-multi-file-search)
* 优化 HBuilder 左侧视图 右上角下拉菜单 支持切换项目管理器、多文件字符搜索、调试等视图
* 新增 查找引用 文件被哪些代码引用 (对文件点右键菜单【文件查找引用】)
* 新增 查找引用 Html和Vue中 ID和Class的查找引用
* 新增 查找引用 uni-app项目中 组件的查找引用
* 新增 语言服务 Html中引入Vue.js 支持Vue代码提示
* 优化 语言服务 javascript/typescript 函数重载提示
* 修复 语言服务 设置px转upx/rpx提示比例，代码助手提示自定义比例没有生效的Bug
* 修复 语言服务 js文件，某些情况下，require无法提示其它js文件路径的Bug
* 修复 语言服务 代码助手排序规则，修复uni-app项目下敲unic第一项不是uniCloud的Bug
* 修复 语言服务 uni-app 某些情况下，项目不存在uni_module目录，语言服务报错的Bug
* 修复 语言服务 uni-app /开头的路径提示，在中间输入补全项不正确的Bug
* 修复 语言服务 uts插件 Android 系统API部分类型继承关系出错导致语法校验报错的Bug
* 修复 语言服务 uts插件 iOS 部分类型缺失默认构造函数导致语法校验报错的Bug
* 修复 语言服务 uts插件 iOS String类型方法不全导致语法校验报错的Bug
* 修复 语言服务 Vue文件 template标签，无法提示lang的Bug
* 修复 语言服务 Vue文件 template标签，当lang属性为空时, html标签无法提示的Bug
* 修复 语言服务 Vue文件 SCSS @语法，某些情况下，代码助手回车后@符号替换位置错误的Bug
* 修复 语言服务 Vue文件 SCSS，某些情况下，!default和!global没有提示的Bug
* 修复 格式化 无法对1M以上的文件进行格式化的Bug
* 修复 格式化 当js文件第一行存在缩进时，格式化会导致缩进整体按第一行缩进的Bug
* 修复 某些情况下，开启项目管理器与编辑器总是关联时，打开子项目或者父项目下的文件会导致项目管理器滚动错误的Bug
* 优化 Alt+Tab切换标签卡，列表项图标和项目管理器图标保持一致
* 新增 MacOSX App项目 支持选择自定义基座运行到iOS模拟器 [详情](https://uniapp.dcloud.net.cn/tutorial/run/run-custom-base-ios-simulator.html)
* 修复 uni-app 项目运行，下载编译器插件，某些情况下，控制台不提示重新运行的的Bug
* 新增 uni-app 支持多个项目同时运行到微信开发者工具
* 新增 uni-app app云打包和manifest配置支持 uniMP激励视频广告 [详情](https://uniapp.dcloud.net.cn/uni-ad.html#unimp)
* 调整 uni-app uts项目，运行到iOS模拟器，控制台屏蔽uts调试入口，暂不支持对iOS模拟器进行uts调试
* 调整 uni-app uts项目，uts Android开发扩展，增加gradle版本限制，仅支持7.6.1及以下版本
* 修复 uni-app 当项目包含uts授权版插件，提交服务器制作自定义调试基座失败的Bug
* 【重要】调整 uni-app manifest.json和打包窗口 删除互动游戏(变现猫)入口，此广告业务将于5月31日正式下线
* 修复 uniCloud 阿里云 前端网页托管 自定义域名时上传文件后无法自动刷新CDN的Bug

## 3.7.11.20230427
* 修复 uniapp框架的一些Bug

## 3.7.10.20230425
* 修复 uniapp框架的一些Bug

## 3.7.9.20230324
* 修复 语言服务 因Vue域名变更，导致代码助手中帮助文档URL跳转后显示404的Bug
* 修复 js-beautify格式化插件，缩进设置成`tab`时，ts文件格式化导致注释内的缩进不对的Bug
* 修复 3.7.8引出的 uniCloud schema.json文件，右键菜单点击下载DB Schema，HBuilderX闪退的Bug
* 修复 3.7.8引出的 MacOSX 某些低版本的操作系统，无检测到iOS手机的Bug


## 3.7.8.20230323
* 新增 内置格式化插件 支持使用项目下.jsbeautifyrc配置文件 [详情](https://hx.dcloud.net.cn/Tutorial/extension/js-beautify)
* 修复 内置格式化插件 Vue文件ts代码不支持格式化的Bug
* 修复 语言服务 Vue文件 `this.xxx = ...`, xxx无法转到定义的Bug
* 修复 语言服务 uni-app cli ts项目，使用npm安装模块后，打开项目下vue文件导致语言服务崩溃的Bug
* 修复 语言服务 某些情况下ts语法校验不生效的Bug
* 优化 设置 语言服务配置 启用代码助手，修改配置项后，无需重启HBuilderX即可生效
* 修复 启用.editorconfig支持，当配置`insert_final_newline`时，偶发保存时误触代码助手的Bug
* 修复 启用.editorconfig支持，Vue文件如果最后一行未换行，保存时会导致文件内容错误的Bug
* 修复 MacOSX 运行到iOS App基座，设备选择窗口，某些情况下，iOS设备重复显示的Bug
* 【重要】调整 App真机运行 标准基座不再支持Android4.4（因内置的实人认证sdk不支持）。如不使用实人认证，自定义基座或云打包仍然支持Android4.4
* 新增 uni-app uts插件 运行到iOS支持debug调试 (需MacOSX) [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-ios.html)

## 3.7.3.20230223
* 新增 代码块包围 在选区外包裹if等代码块 (菜单编辑->包围->代码块包围，快捷键win：`Ctrl+Alt+T`、mac：`Command+Alt+T`) [详情](https://hx.dcloud.net.cn/Tutorial/Language/Snippets?id=surround)
* 新增 项目管理器 字体大小调节 (菜单设置->常用配置) [详情](https://hx.dcloud.net.cn/Tutorial/setting?id=project-explorer-font-size)
* 修复 语言服务 Vue3-ts项目 image src属性报错的Bug [详情](https://ask.dcloud.net.cn/question/162064)
* 修复 语言服务 uni-app main.js中通过Vue.prototype.xxx定义的Vue变量或方法，在vue文件中，this.无法提示的Bug [详情](https://ask.dcloud.net.cn/question/147190)
* 修复 语言服务 Vue文件，当只有script和style节点，没有template节点时，文档结构图显示空白的Bug
* 修复 多光标在同一行时，复制或剪切，会复制多行内容的Bug
* 修复 转到定义耗时较长时，可能无法转到定义的Bug
* 修复 某些情况下，因编辑器主题配置异常，导致HBuilderX无法启动的Bug
* 修复 Markdown code区域无法高亮显示空白字符的Bug
* 修复 Markdown 从WPS复制表格数据粘贴为Markdown表格语法转换错误的Bug
* 修复 查找索引符号 按下esc取消后，编辑器不会自动滚动到原来的光标所在位置的Bug
* 修复 设置界面和manifest.json界面，点击复选框控件上的文字右边空白区域也会导致选中/取消的Bug
* 修复 uniCloud 云函数 当云函数目录下存在中文文件时，上传并运行操作失败的Bug
* 新增 App真机运行 MacOSX 运行项目到iOS真机，自动启动App （需MacOSX安装跟iOS手机系统相匹配的Xcode）[详情](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#ios-app-automatically-open)
* 新增 App真机运行 Windows iOS标准基座 支持使用Apple证书签名，签名后可运行标准基座到iOS真机设备 [详情](https://uniapp.dcloud.net.cn/tutorial/run/ios-apple-certificate-signature.html)
* 新增 App真机运行 Windows 设备选择窗口 基座选择列表，自定义基座和标准基座支持使用&快捷键进行切换
* 新增 uni-app 微信小程序发行，自动上传到微信平台，支持配置微信ci机器人编号 [详情](https://uniapp.dcloud.net.cn/tutorial/build/publish-mp-weixin-cli.html)
* 新增 uni-app uts插件 运行到Android支持debug调试 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug.html)
* 优化 uni-app uts插件 iOS编译，提升编译速度
* 修复 uni-app 运行到Chrome 每次运行打开的都是新的Chrome实例的Bug

## 3.6.18.20230117
* 修复 uniapp框架的一些Bug

## 3.6.17.20230112
* 修复 内置终端 绿柔主题下，选中终端文本，选中颜色没有显示的bug
* 优化 Markdown一键分享，网页所需的css资源和js资源，同步上传到uniCloud前端网页托管
* 修复 uni-app 运行到iOS模拟器，开启uni调试，打开后调试窗体显示空白的Bug
* 优化 原生App-云打包 Android打包 打包窗口不再显示`使用DCloud老版证书`（2022年11月30日以后创建的应用及以前未使用过老版本证书的应用不能再使用DCloud老版证书）

## 3.6.15.20221228
* 修复 语言服务 uni-app Vue文件，script标签内，无法提示条件编译的Bug [详情](https://ask.dcloud.net.cn/question/159783)
* 修复 某些情况下 项目根目录.hbuilderx/launch.json文件重复写入数据，频繁读写，导致编辑器卡顿的Bug
* 修复 uni-app Vue3 运行到Chrome，浏览器Devtools控制台，日志路径显示错误的Bug
* 修复 uni_modules 插件对cli项目右键更新后，插件安装目录不正确的Bug

## 3.6.14.20221215
* 修复 3.6.13版引出的 某些情况下，编辑器回车后，光标位置错误的Bug [详情](https://ask.dcloud.net.cn/question/159490)
* 修复 3.6.13版引出的 html文件，运行到Chrome，启动了一个新的Chrome实例的Bug [详情](https://ask.dcloud.net.cn/question/159331)
* 修复 3.6.13版引出的 某些情况下，项目根目录生成了一个1.text测试文件的Bug [详情](https://ask.dcloud.net.cn/question/159580)

## 3.6.13.20221209
* 【重要】App真机运行 iOS标准基座 支持使用Apple证书签名，签名后可运行标准基座到iOS真机设备 [详情](https://uniapp.dcloud.net.cn/tutorial/run/ios-apple-certificate-signature.html)
* 【重要】升级 HBuilderX 内置Node版本升级为16.17.0，内置npm版本升级为6.14.12
* 优化 Git插件 git pull操作 状态栏消息增加查看日志功能
* 调整 设置 将语言服务相关的配置聚合到`语言服务配置`中
* 新增 Node调试 支持附加(attach)到已经启动的node进程上断点调试 [详情](https://hx.dcloud.net.cn/Tutorial/extension/node-development?id=attach)
* 新增 MarkDown 支持 Mermaid图，包含流程图 [详情](https://hx.dcloud.net.cn/Tutorial/Language/markdown?id=mermaid)
* 新增 MarkDown 文件和图片语法`![]()`、`[]()`中，支持提示文件路径 [详情](https://hx.dcloud.net.cn/Tutorial/Language/markdown?id=PathHints)
* 新增 MarkDown 代码区 kotlin 、 uts 等语言支持代码高亮
* 修复 HBuilderX 非正常退出时，语言服务进程没有退出的Bug
* 优化 HBuilderX Windows 当Node进程被安全软件拦截，导致语言服务等Node插件启动失败时，弹窗提示
* 修复 HBuilder开启多窗体然后关闭新窗体后，部分插件功能失效的Bug
* 修复 MacOSX 格式化ts文件，首行代码格式化后被添加空格的Bug
* 修复 语言服务 uni-app pages.json usingComponents拼写错误的Bug [详情](https://ask.dcloud.net.cn/question/158601)
* 修复 代码助手 存在某些不支持的图片格式时，图片预览失效的Bug
* 修复 代码助手 代码助手显示后，拖动到编辑器底部，任意光标位置回车后，中间代码丢失的Bug
* 修复 代码助手 当快速输入代码块时，某些情况下，代码提示窗口右侧信息显示其它语言服务返回结果的Bug
* 修复 代码助手 CSS class存在多个时，快速敲空格然后按左键，导致代码提示回车后替换位置错误的Bug
* 修复 语法校验 JSON 文件末尾存在中文`，`时，报错波浪线不显示的Bug
* 修复 转到定义 uni-app App.vue style引入多个文件, class转到定义只对最后一个文件生效的Bug [详情](https://ask.dcloud.net.cn/question/154824)
* 新增 uni-app manifest.json 可视化界面App模块配置 增加 安全网络、录音、摄像头、扫码 等模块选择 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html)
* 优化 uni-app Web平台Debug时，支持选择Chrome还是内置浏览器进行Debug（控制台点击虫子图标，弹出选择菜单）
* 修复 uniCloud 前端网页托管 某些情况下，发布失败，仍然执行上传操作的Bug
* 优化 uniCloud db_init.json 初始化云数据库时，容易超时的Bug
* 新增 App打包 控制台下载链接的“一键上传到uniCloud”，支持上传到阿里云正式版云存储
* 新增 uni_modules 支持配置模块的初始化脚本 [详情](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#package-json)
* 修复 uni_modules 插件市场导入插件，运行缓慢超时导致提示`插件处理外部应用请求未能完成`的Bug
* 修复 uni_modules插件 某些异常 package.json 缺少分类无法提交插件市场的Bug
* 调整 App真机运行 iOS标准基座包体积，仅支持 arm64 架构。即再不支持iPhone 5S、iPad Air(mini2)以前的设备。此调整不影响打包和自定义基座。
* 调整 App真机运行 移除 菜单【运行 - 运行到手机或模拟器 - 运行基座选择】，统一改为在运行弹出界面选择基座
* 新增 App真机运行 MacOSX uts插件 支持编译运行iOS标准基座到iOS真机设备
* 新增 App真机运行 设备选择窗口 iOS设备支持UDID的显示和复制
* 优化 App真机运行 设备选择窗口 显示基座详细信息
* 修复 App真机运行 设备选择窗口 刷新设备列表后，选择基座的radio也被改变的Bug
* 修复 App真机运行 设备选择窗口 某些情况下，提示弹窗被设备选择窗口遮挡，导致无法操作的Bug
* 修复 App真机运行 设备选择窗口 某些情况下，点击运行按钮引发崩溃的Bug
* 修复 App真机运行 3.6.2版引出的 打开Object类型的日志后，内容没有格式化的Bug
* 修复 App真机运行 iOS离线SDK制作自定义基座，target不是HBuilder时，同步文件失败的Bug
* 新增 uts插件 支持右键新建uts文件和平台目录
* 新增 uts插件 iOS平台 支持本地编译和真机运行，需要配置Xcode环境 [详情](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-ios.html)
* 新增 uts插件 Android平台 真机运行支持三方 Gradle 仓储 [详情](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html)
* 优化 uts插件 语言服务 支持iOS系统API、Android系统API的代码提示
* 优化 uts插件 语言服务 Android平台 完善R资源的代码提示
* 优化 uts插件 语言服务 Android平台 支持免导入使用java.lang.*下的类
* 修复 uts插件 停止运行 某些情况下，Node进程没有结束的Bug
* 修复 uts插件 真机运行 Android版插件调用内置依赖库中的API时需要手动下载并添加到lib目录的Bug [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#tempnotice)

## 3.6.5.20221121
* 修复 内置浏览器 Windows 某些电脑上，拖动内置浏览器，HBuilderX出现闪退的Bug
* 修复 uni-app 运行到内置浏览器 某些情况下，Cookie不一致的Bug

## 3.6.4.20220922
* 修复 语言服务 CSS大文件 CSS代码提示速度过慢的Bug
* 修复 语言服务 uni-app项目(非CLI) 当项目下存在tsconfig.json时，某些情况下，语法校验误报的Bug
* 修复 语言服务 某些情况下，语言服务频繁报错崩溃，HBuilderX窗口右下角频繁弹窗报错的Bug
* 修复 3.6.2引出的 App真机运行 Android Studio制作的自定义基座，运行到Android设备报错的Bug
* 修复 3.6.2引出的 App真机运行 uni-app 运行到iOS模拟器，修改nvue文件，无法同步修改的Bug
* 修复 3.6.2引出的 App真机运行 uni-app 运行到手机，某些情况下，控制台显示编译成功之后没有反应的Bug
* 修复 3.6.2引出的 App真机运行 uni-app 运行到Android 4.4模拟器，提示找不到基座的Bug [详情](https://ask.dcloud.net.cn/question/153826)
* 修复 App-云打包 新版支付宝SDK更新，导致Android 安心打包失败的Bug

## 3.6.3.20220917
* 修复 3.6.2引出的 HBuilderX 关闭标签卡，某些情况下出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/153398)
* 修复 3.6.2引出的 Windows 内置浏览器 手机设备模式 无法选择元素的Bug
* 修复 HBuilderX 代码提示过程中切换到其它程序，某些情况下，代码提示窗口会覆盖在其它程序上面的Bug
* 修复 3.6.2引出的 语言服务 uni-app CLI项目 px转rpx失效的Bug [详情](https://ask.dcloud.net.cn/question/153384)
* 修复 3.6.2引出的 控制台日志 某些类型的日志输出错误的Bug
* 修复 3.6.2引出的 uni-app 运行到iOS模拟器，控制台日志被截断或输出不全的Bug
* 修复 3.6.2引出的 uni-app 运行到Android模拟器，Windows上某些Android模拟器运行失败的Bug

## 3.6.2.20220914
* 【重要】App真机运行 iOS真机不再支持使用标准基座，请使用自定义基座运行真机或使用iOS模拟器 [详情](https://ask.dcloud.net.cn/article/40041)
* 【重要】新增 uts语法支持。使用ts开发原生 [详情](https://uniapp.dcloud.io/tutorial/syntax-uts.html)
* 新增 查找引用功能。支持对js、ts变量方法点右键查找
* 优化 Windows 内置浏览器 升级Cef版本到90.6.7
* 新增 HBuilderX设置 插件配置 增加配置项 启用JavaScript校验、启用TypeScript校验
* 新增 语言服务 内置语法校验 支持warning级别
* 新增 语言服务 vue、js内变量语法实时校验（js校验，需要在【设置 - 插件配置】中开启）
* 新增 语言服务 vue3 `style module`支持代码提示
* 新增 语言服务 vue2&3 `插槽`支持代码提示
* 新增 语言服务 vue2&3 script 区域支持自动导包
* 修复 语言服务 vuedoc 在 script setup 内不生效的bug
* 修复 语言服务 vue3 在 script setup 内 import 的自定义组件，在 template 区域无法提示的Bug
* 修复 语言服务 修改函数调用的名称时，会重复生成`()`的Bug
* 修复 语言服务 特殊String 不支持 `if(idstr === '|')` 写法的Bug
* 修复 语言服务 vue template 内变量悬浮不生效的Bug
* 修复 语言服务 vue cli项目，vue script 区域无法识别项目下 tsconfig.json 的Bug
* 修复 语言服务 uniCloud.importObject()，云对象修改后，代码提示、悬浮不能实时生效的Bug
* 优化 语言服务 uniCloud.importObject()，调用云对象上的方法时参数及返回值的代码提示
* 修复 语言服务 遵循 vetur 规范的 framework包 安装卸载的时候不能实时生效的Bug
* 修复 语言服务 html script 中引用其他文件的变量和函数悬浮不生效的Bug
* 修复 语言服务 html script 中引用其他文件的函数时解析返回值和参数类型不正确的Bug
* 修复 语言服务 底部状态栏框架语法库，移除时无法生效的Bug
* 优化 语言服务 设置px转rem后，转换提示放到代码提示的第一项
* 修复 语言服务 JavaScript `Object.`不提示es6+新增方法的Bug
* 修复 语言服务 `import xxx from 'XXX.vue'` 当不带vue后缀，提示模块找不到，以及无法转到定义的Bug
* 修复 语言服务 jsx和tsx文件 敲字符`.`时无法自动触发代码提示的Bug
* 修复 编辑器 关闭选项卡 某些情况下，没有记忆折叠状态的Bug
* 新增 标签卡 右键菜单 增加菜单 向左移动标签卡、向右移动标签卡
* 修复 Windows HBuilderX未启动的情况下，导入插件市场插件，首次导入UI视图显示空白的Bug
* 修复 多文件字符搜索 某些情况下，跳转位置错误的Bug
* 修复 转到定义到另一个文件后，后退时，光标跳转到该文件开始，而不是转到定义前的位置的Bug
* 新增 新建项目 HBuilderX插件 增加国际化示例模板
* 修复 调试视图 变量 Global节点 某些情况下，UI显示错乱的Bug
* 修复 HBuilderX 保存文件 utf-8 格式文件无文件头标识字节 0xEFBBBF的Bug [详情](https://ask.dcloud.net.cn/question/112186)
* 新增 HBuilderX英文 发行 H5发行及小程序发行窗口 窗口UI文本国际化
* 修复 App-云打包 某些情况下 项目下单个静态资源文件过大(比如超过100M)时 无法提交打包的Bug
* 修复 App-云打包 Windows 某些情况下，提交打包，HBuilderX出现闪退的Bug
* 优化 App真机运行 使用Node运行，不再依赖Java
* 新增 App真机运行 设备选择窗口 增加选择基座功能
* 修复 App真机运行 Windows 当项目路径存在中文，运行到 iOS设备，App页面显示异常的Bug
* 修复 App真机运行 某些情况下，安装自定义基座失败的Bug
* 修复 uni-app manifest.json uniPush字段 某些情况下变成 null 的Bug
* 修复 uni-app manifest.json 应用名称国际化后，打包界面，应用名称显示%%的Bug
* 调整 uni-app manifest.json 左侧“H5配置”改名为“Web配置

## 3.5.3.20220729
* 新增 uni-app 运行到 Web 时支持 debug 调试 [详情](https://uniapp.dcloud.io/tutorial/debug/debug-web-via-chrome.html)
* 新增 HBuilderX uniCloud前端网页托管 支持腾讯云
* 新增 HBuilderX 状态栏 右下角补充升级图标及新版本红点提示
* 新增 MarkDown 代码区块的语言着色高亮，支持提示下载对应语言着色扩展插件
* 新增 Markdown 支持跨文件转到#标题或标题的@别名 [详情](https://hx.dcloud.net.cn/Tutorial/Language/markdown?id=goto-definition)
* 新增 TypeScript 实时语法校验 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/tsSyntaxCheck)
* 新增 语言服务 支持tailwindcss提示，需要安装tailwindcss插件 [详情](https://ext.dcloud.net.cn/plugin?id=8560)
* 新增 语言服务 uni-app i18n国际化 pages.json和Vue页面 支持i18n代码提示、转到定义 [详情](https://uniapp.dcloud.io/tutorial/i18n.html#codeHints)
* 修复 语言服务 React 某些情况下，<App />回车后补充了`()`的Bug
* 修复 语言服务 React jsx文件 没有代码提示的Bug
* 修复 语言服务 CSS pointer-events缺少auto属性的Bug
* 修复 语言服务 Vue {{}}view后按tab，编辑器右下角弹窗提示Failed to expand abbreviation的Bug
* 修复 语言服务 uni-app项目，import x from ‘@/‘，`@/`开头的路径，某些情况下，转到定义失败的Bug
* 修复 代码块设置 自定义其它语言代码块 窗口列表出现两个JSON选项的Bug
* 修复 自定义代码块 注释中$DATE_TIME显示日期错误的Bug
* 修复 操作系统环境变量 配置NODE_OPTIONS --openssl-legacy-provider后，HBuilderX启动时失去响应的Bug
* 修复 打开内置终端后，插件API hx.window.showQuickPick() 窗口无法滚动的Bug
* 修复 首次打开文档并编辑，第一次撤销后光标位置不对的Bug
* 修复 单项目窗体 编辑器 选择语言关联窗口位置偏移的Bug
* 优化 插件安装 提示插件安装失败时给出详细原因和解决指南
* 调整 Git插件 pull操作 默认选项改为第四项，即git pull --rebase --autostash
* 修复 App安心打包 某些情况下，提交打包，提示大小超过40M的Bug
* 修复 App manifest.json 一键生成iOS通用链接功能，不能自动生成`apple-app-site-association`文件的Bug [详情](https://ask.dcloud.net.cn/question/149006)
* 修复 Wap2App项目，提交打包，某些情况下，生成的App样式不正确的Bug
* 修复 未登录时点击菜单【发行 原生APP-查看云打包状态】闪退的Bug
* 新增 uni-app 新建页面 增加 uni-id-pages 模板 [详情](https://ext.dcloud.net.cn/plugin?name=uni-id-pages)
* 新增 uni-app pages_init机制，导入 uni-app 插件到项目下时，可合并新页面路由到项目的 pages.json 中 [详情](https://uniapp.dcloud.io/plugin/uni_modules.html#pages-init)
* 新增 uni-app manifest.json 可视化界面基础配置 增加国际化语言配置 [详情](https://uniapp.dcloud.net.cn/tutorial/i18n.html#manifest)
* 调整 uni-app manifest.json 可视化界面去除微信登录的 AppSecret 输入框，仍可在源码视图填写，但不推荐在前端暴露 AppSecret
* 调整 uni-app manifest.json App常用其它配置，生成 iOS符号表文件，将配置项调整到原生App-云打包窗口
* 修复 uniCloud项目 node_modules文件特别多时，运行项目，Node进程CPU占用率过高的Bug
* 新增 海外开发者可使用`HBuilderX国际区账号`进行云端打包 [详情](https://uniapp.dcloud.io/tutorial/internationalization.html)

## 3.4.18.20220630
* 修复 3.4.15引出的 html标签选中后，闭合标签没有虚线框的Bug
* 修复 JSON文件 查找索引符号导致崩溃的Bug
* 修复 Windows 终端开启时，工具栏搜索分类，鼠标移动上去后，悬停列表自动消失的Bug [详情](https://ask.dcloud.net.cn/question/146695)
* 修复 App 原生App-云打包 某些情况下，点击打包没有提交到云端打包的bug
* 修复 uniCloud 前端网页托管 上传网站到服务器，非项目成员进行上传操作，编辑器闪退的Bug

## 3.4.15.20220610
* 修复 3.4.14引出的 PHP文件 注释快捷键 注释错误的Bug [详情](https://ask.dcloud.net.cn/question/146594)
* 修复 3.4.14引出的 uni-app manifest.json 配置uniPush图标后，无法提交打包的Bug [详情](https://ask.dcloud.net.cn/question/146716)
* 修复 3.4.14引出的 uni-app uniCloud项目 运行后，控制台右上角【开启调试按钮】不显示的Bug [详情](https://ask.dcloud.net.cn/question/146710)

## 3.4.14.20220607
* 新增 Node程序 支持运行和调试 [详情](https://hx.dcloud.net.cn/Tutorial/extension/node-development)
* 新增 可自主扩展新语言的语法高亮，可开发或下载语言高亮插件 [详情](https://hx.dcloud.net.cn/Tutorial/Language/language_grammars)
* 调整 部分内置的语言语法高亮迁移到插件市场 [详情](https://hx.dcloud.net.cn/Tutorial/Language/language_grammars?id=list)
* 新增 支持自定义项目级代码块（菜单【工具 代码块设置 自定义项目代码块】）[详情](https://hx.dcloud.net.cn/Tutorial/Language/Snippets?id=projectsnippets)
* 新增 语言服务 vue-cli项目 支持element-ui、bootstrap-vue等代码提示
* 新增 语言服务 JavaScript 支持document.getElementById、document.querySelector中id选择器的dom类型识别
* 新增 语言服务 scss 支持提示`!global` `!default`
* 修复 语言服务 Emmet语言 某些情况下，按下tab，没有反应的Bug
* 修复 语言服务 CSS 在同一行输入CSS代码，回车后，某些情况下，替换位置错误的Bug
* 修复 语言服务 CSS `{}`内，输入`mar`等，max-resolution等媒体查询出现在代码助手第一项的Bug
* 修复 语言服务 jsdoc代码块替换位置错误的Bug
* 修复 语言服务 vue3, template内，无法提示使用ref函数创建的对象数据的Bug
* 修复 语言服务 JavaScript JQuery代码提示，某些情况下，在`$("")`内输入`#`，回车后，出现两个`#`的Bug
* 修复 语言服务 Vue style节点，输入scoped后，自动补上了`=""`的Bug
* 修复 语言服务 uni-app项目，pages.json easycom不规范的写法，导致css class无法提示的Bug [详情](https://ask.dcloud.net.cn/question/143800)
* 修复 语言服务 uni-app项目，pages.json easycom节点配置错误时，无法提示uView框架组件的Bug
* 修复 语言服务 uni-app项目，pages.json 条件编译产生语法不对的情况时，导致vue下class没有提示的Bug
* 修复 语言服务 uni-app项目，scss嵌套语法，无法提示uni-app相关标签的Bug
* 修复 语言服务 uni-app项目，import x from ‘@/‘，`@/`开头的路径，某些情况下，转到定义失败的Bug
* 修复 插件安装窗口 已安装插件 某些情况下，版本号显示错误的Bug
* 修复 多文件搜索 某些情况下，右侧栏显示的代码着色错误的Bug
* 修复 项目运行过程中，在项目管理器关闭项目可能引发的编辑器闪退的bug
* 调整 App 原生App-云打包 java库改为openjdk 11.0.14.1
* 优化 App MacOSX 运行到iOS模拟器的窗口增加搜索功能

## 3.4.7.20220422
* 修复 语言服务 html a标签 target属性，没有自动拉出代码候选项的Bug [详情](https://ask.dcloud.net.cn/question/143628)
* 修复 语言服务 html 引用js后不提示js全局变量方法的Bug
* 修复 语言服务 html 输入!+tab后，`<html lang="">`设置为en的Bug [详情](https://ask.dcloud.net.cn/question/143531)
* 修复 语言服务 css属性 属性位置替换文本，替换内容错误的Bug
* 修复 语言服务 Vue script节点，无法提示vue某些代码块的Bug
* 修复 语言服务 Vue script节点，this.方法名，无法转到定义的Bug
* 修复 语言服务 uni-app pages.json提示的文件路径不区分大小写的Bug
* 修复 编辑器 撤销、恢复撤销操作，光标位置跳转错误的Bug
* 修复 项目运行过程中，项目管理器关闭项目可能引发的编辑器闪退的bug
* 修复 App安心打包 某些情况下提交安心打包失败的Bug
* 修复 App真机运行 某些情况下，因adb问题，查找模拟器设备失败的Bug
* 修复 App真机运行 当项目资源过大，引发的真机运行超时的Bug

## 3.4.6.20220420
* 【重要】调整 HBuilderX语言服务 由Java切换为Node，减少内存占用、增强语法提示 [详情](https://hx.dcloud.net.cn/Tutorial/update/lang_service)
* 调整 取消单独的App开发版安装包，统一为一个标准安装包。标准版也可以安装app相关插件。
* 新增 代码悬浮提示 支持着色
* 新增 新建uni-app项目时直接选择Vue2或3的版本（后续可在manifest里调整）
* 新增 文档保存时自动格式化，可通过【设置】-【编辑器配置】-【保存时自动格式化】开启
* 调整 App真机运行 不再长期监听手机，运行时检测，减少资源消耗
* 调整 安装HBuilderX核心插件时，由下载最新版插件调整为和当前HBuilderX版本匹配的插件
* 新增 HBuilderX CLI uni-app 制作应用wgt包 [详情](https://hx.dcloud.net.cn/cli/publish-app-wgt)
* 新增 HBuilderX CLI uni-app 生成本地打包App资源 [详情](https://hx.dcloud.net.cn/cli/publish-app-appResource)
* 修复 MacOSX 某些情况下，HBuilderX启动后，立即按下`command+w`关闭标签卡，编辑器闪退的Bug
* 修复 文档格式化后，撤销时光标位置不对的Bug
* 修复 某些情况，Git更新文件后，编辑器内文件不会自动刷新的Bug
* 修复 查找索引符号 搜索后，HBuilderX闪退的Bug
* 修复 某些情况，文档编辑后出现着色错乱的Bug
* 优化 markdown一键分享 网页内容适配移动端
* 优化 markdown一键分享 生成的html文件 调整代码区代码着色
* 优化 uni-app 发行 制作应用wgt包窗口样式
* 优化 uni-app 运行菜单和发行小程序的界面样式
* 修复 uni-app 新建页面，输入已存在的页面名称，不勾选创建同名目录，旧文件被覆盖的Bug
* 修复 uni-app manifest.json中`app-plus`-`compilerVersion`未配置时发行和运行会弹出设置微信开发者工具对话框的Bug
* 修复 uni-app manifest.json生成通用链接时，协作者选择服务空间时获取不到自定义域名的Bug
* 优化 uniCloud 新建公共模块界面 支持选择模板

## 3.3.13.20220314
* 修复 3.3.9引出的 App 安心打包 manifest.json 配置Google统计 安心打包没有提交相关文件的bug
* 修复 MacOSX iOS安心打包 操作系统钥匙串访问 登录项没有显示的Bug

## 3.3.11.20220210
* 修复 HBuilderX CLI发行微信小程序，某些情况下，HBuilderX出现出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/139189)
* 修复 3.3.10引出的 uni-app 运行到浏览器 某些情况下，HBuilderX出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/138828)
* 修复 3.3.9引出的 uni-app 运行 自定义条件编译没有生效的Bug [详情](https://ask.dcloud.net.cn/question/139125)

## 3.3.10.20220124
* 修复 3.3.9引出的 uni-app 自定义发行 运行错误的Bug
* 修复 uniCloud 当项目比较大时 控制台切换卡顿的Bug

## 3.3.9.20220121
* 新增 HBuilderX CLI 支持发行uni-app到微信小程序 [详情](https://hx.dcloud.net.cn/cli/publish-mp-weixin)
* 新增 HBuilderX CLI 支持发行uni-app到H5 [详情](https://hx.dcloud.net.cn/cli/publish-h5)
* 修复 MacOSX 某些情况下，项目管理器项目无法展开的Bug
* 调整 内置浏览器 地理位置设置 经纬度支持设置6位小数
* 修复 App 真机运行 部分Windows电脑运行App到iOS15以上手机失败的Bug
* 修复 App 真机运行 部分Android 11系统，同步文件失败的Bug
* 修复 uni-app 安心打包 没有生成iOS符号表文件的Bug
* 调整 uni-app 发行到微信小程序，支持自动上传代码到微信平台，无需再通过微信开发者工具上传发行 [详情](https://hx.dcloud.net.cn/Tutorial/App/uni-app-publish-mp-weixin)

## 3.3.5.20211229
* 修复 uniapp框架的一些Bug

## 3.3.4.20211228
* 修复 uniapp框架的一些Bug

## 3.3.3.20211225
* 【重要】调整 新建项目界面，预置大量云端一体完整项目 [详情](https://hx.dcloud.net.cn/Tutorial/project?id=CreateProjectWindows)
* 新增 项目管理器视图toolbar 新增定位和折叠所有的悬浮按钮 [详情](https://hx.dcloud.net.cn/Tutorial/project?id=toolbar)
* 修复 Markdown 代码区块第一行后字体显示倾斜的Bug [详情](https://ask.dcloud.net.cn/question/94477)
* 修复 查找索引符号 鼠标点击搜索区域或者内置资源管理器地址栏时，编辑器出现崩溃的Bug
* 修复 某些情况下，打开内置浏览器，再进行文件搜索引起的文件列表窗口渲染异常的Bug
* 修复 插件市场 云端一体页面模板 导入非uni_modules插件后pages.json path路径尾部多了一个点的Bug
* 修复 MacOSX 当HBuilderX安装路径带有空格时，运行项目到iOS模拟器失败的Bug
* 新增 原生App-云打包 打包窗口 增加Sigmob激励视频广告联盟配置
* 修复 uniCloud 运行云服务空间初始化向导，某些情况下，DB Schema创建确认窗口，没有显示全部创建的Bug
* 修复 uniCloud 上传所有云函数，某些情况下，未上传的云函数数量及名称显示错误的Bug
* 修复 uniCloud 在项目关闭运行时，偶发没有同步结束的Bug
* 优化 uni-app 运行带有预处理CSS语言的项目，运行时自动安装相关插件，无需再跳转到插件市场安装
* 新增 uni-app自动化测试插件 支持在HBuilderX内对uni-app普通项目、CLI项目进行自动化测试 [详情](https://ext.dcloud.net.cn/plugin?id=5708)
* 修复 HBuilderX CLI pack、cloud某些命令，运行异常的Bug
* 优化 在相关界面 增加HBuilderX CLI教程链接

## 3.2.16.20211122
* 修复 代码悬浮提示 某些情况下，HBuilderX出现闪退的Bug
* 修复 App 真机运行 某些情况下，HBuilderX出现闪退的Bug
* 修复 MacOSX manifest.json 配置iOS通用链接 提交打包 某些情况下，打包完成时，HBuilderX出现闪退的Bug


## 3.2.15.20211120
* 新增 uni-app 支持运行和发布到 飞书小程序
* 修复 MacOSX Xcode13 运行uniapp项目到iOS模拟器，iOS模拟器无法自动启动的的Bug
* 修复 Windows 11 真机运行提示wmic错误的Bug
* 优化 代码悬浮提示 超过1M大小的文件不显示悬浮提示框
* 修复 当用户环境变量中配置的max-old-space-size过大时导致node进程启动失败的Bug [详情](https://ask.dcloud.net.cn/question/133144)
* 优化 App manifest.json 打开速度
* 修复 App manifest.json 勾选使用原生隐私政策提示框 再次打开manifest.json后 此选项没有被勾选的Bug
* 新增 App manifest.json App常用其它设置 增加设置项 生成iOS平台符号表(dsym)文件
* 新增 App manifest.json App模块配置 定位 增加设置项 系统定位
* 优化 App manifest.json App模块配置 定位 支持多选
* 删除 uni-app manifest.json App模块配置 删除统计配置项
* 调整 uniCloud admin 改名为 uni-admin [详情](https://uniapp.dcloud.net.cn/uniCloud/admin)

## 3.2.12.20211029
* 新增 HBuilderX插件开发断点调试 [详情](https://hx.dcloud.net.cn/ExtensionTutorial/HowToDebug)
* 新增 uniCloud云函数断点调试 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=debug)
* 新增 代码提示 鼠标悬停 显示代码帮助悬浮窗口 [详情](https://hx.dcloud.net.cn/Tutorial/Language/Overview?id=hover-code-assist)
* 优化 插件API hx.window.createOutputChannel 控制台内容带有URL时，支持点击跳转
* 新增 终端 支持点击URL跳转到浏览器 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/terminal?id=open-links)
* 修复 终端 当输入内容超过一定长度时，换行显示错误的Bug
* 修复 控制台或终端，创建多个时，HBuilderX整体窗口超出屏幕范围的Bug
* 修复 代码格式化导致编辑器上的书签丢失的Bug
* 修复 compile-node-sass插件 设置项onDidSaveExecution不生效的Bug
* 修复 多文件字符搜索 配置过滤模式，过滤模式文本颜色没有置灰的Bug
* 修复 多文件字符搜索 配置过滤模式，某些情况下，过滤模式被清除导致搜索结果错误的Bug
* 修复 字符搜索和多文件搜索切换，搜索条件内容被清除的Bug
* 优化 uniCloud 新建数据集合schema文件
* 修复 uniCloud 关联项目解除关联后，重启HBuilderX后项目管理器还显示关联项目的Bug
* 修复 uniCloud 关联项目 发行到H5 某些情况下，提示未关联服务空间的Bug
* 优化 uniCloud 云函数上传ContentAccessDenied错误，控制台增加解决方法 [详情](https://hx.dcloud.net.cn/Tutorial/Questions/win10-defender-contentaccessdenied)
* 修复 uniapp-cli vue3项目，无法运行发行app的Bug [详情](https://ask.dcloud.net.cn/question/132565)
* 修复 uniapp-cli vue3项目，以SSR方式发行，提示未绑定服务空间的Bug
* 优化 原生App-云打包 当项目下uniCloud未关联服务空间时，提交打包，增加弹窗提示

## 3.2.9.20210927
* 【重要】新增 HBuilderX 支持本地语言扩展 (菜单【工具】，可切换其它语言) [详情](https://github.com/dcloudio/hbuilderx-language-packs)
* 【重要】新增 uni-app Vue3 版本 支持运行和发行到 App （暂不支持nvue）
* 新增 设置项 更新设置 支持配置是否检查更新，默认启动时自动检查更新 （【设置 - 常用配置】，检查更新）[详情](https://hx.dcloud.net.cn/Tutorial/setting?id=更新设置)
* 新增 设置项 帮助我们改进HBuilderX的功能和性能 允许用户自主选择是否上报使用情况统计信息和崩溃报告 [详情](https://hx.dcloud.net.cn/Tutorial/CrashReporter)
* 调整 HBuilderX编辑器顶部菜单【帮助 - 许可协议】，调整为在线链接，点击后跳转到浏览器打开
* 优化 vue3 代码提示、转到定义
* 新增 代码提示 package.json文件 增加相关字段提示
* 新增 js import {} 按需导入，{}内换行自动补上逗号
* 修复 HBuilderX编辑器无法渲染阿拉伯语的Bug
* 修复 菜单【编辑 - 缩进】调整缩进，某些情况下，在当前编辑器没有生效的Bug
* 新增 编辑器 删除连续的空格时, 根据设置的tab宽度, 一次性进行删除
* 修复 新建项目 当项目存储路径尾部带有/时，新建项目导致编辑器闪退的Bug
* 修复 Windows 某些情况下，复制操作，导致QQ、搜狗拼音输入法无法输入英文;,.标点符号的Bug
* 修复 MacOSX 操作系统自带的简体拼音输入法，输入easycom，编辑器出现崩溃的Bug
* 修复 MacOSX 编辑器开启【失去焦点时自动保存】功能后，处于dirty状态下的文件关闭时弹出对话框后编辑器无响应的Bug
* 修复 MacOSX 某些情况下，打开终端，终端顶部内容被挤压的Bug
* 修复 视图 前端网页托管，在地址栏，双击根目录/，编辑器闪退的Bug
* 修复 未启用.editorconfig支持 当.editorconfig文件存在错误，依然弹窗提示的Bug
* 新增 Markdown, 有序列表删除或插入, 自动修正序号
* 升级 eslint-vue插件 解决vue3 template多个root时校验出错的Bug
* 修复 Git 当项目管理器项目为Git项目子目录时，文件修改后，项目管理器没有显示相应标记的Bug
* 修复 Git 在单窗体中，打开Git项目，项目管理器项目名称后面，没有显示Git分支信息的Bug
* 修复 Git 项目管理器，相同前缀项目，某些情况下，git分支信息显示异常的Bug [详情](https://ask.dcloud.net.cn/question/130696)
* 优化 Git 推送 当本地分支没有跟踪远程分支时提示用户输入远程仓库
* 修复 Git 某些情况下，因.git/index.lock文件导致git命令运行失败的Bug
* 修复 外部命令 userInput, 某些情况下没有生效的Bug
* 新增 uniapp 发行H5 支持以SSR方式发行 [详情](https://uniapp.dcloud.io/collocation/ssr)
* 修复 uniapp-cli manifest.json 勾选使用原生隐私政策提示库，自动创建的androidPrivacy.json文件位置错误的Bug
* 优化 App manifest.json 取消使用原生隐私政策提示库，增加确认弹窗
* 新增 uniCloud 云函数require公共模块 支持提示公共模块名称
* 优化 uniCloud 关联其它项目的服务空间逻辑 不支持关联协作者服务空间项目
* 修复 uni_modules 插件市场导入`uni_modules`插件，某些情况下，提示`处理外部应用请求未能完成`的Bug
* 优化 App 原生打包 iOS 不再支持构建越狱包
* 调整 App Android平台 打包，没有配置icon时，不再添加橘红色图标
* 调整 App manifest.json QQ通用链接上传apple-app-site-association规则 [参考](https://wiki.connect.qq.com/%E5%A1%AB%E5%86%99%E5%8F%8A%E6%A0%A1%E9%AA%8Cuniversallinks)
* 删除 App manifest.json App模块配置 移除小米登录、讯飞语言、广告基础功能
* 优化 App manifest.json 将“QQ平台通用链接”和“新浪微博平台通用链接”的标题名称统一更改为iOS平台通用链接
* 优化 App manifest.json 微信自动生成的通用链接的结尾加上/

## 3.2.3.20210825
* 修复 uniapp框架的一些Bug

## 3.2.2.20210818
* 【重要】新增 uni-app项目在 manifest-基础配置中 切换项目的 vue版本 使用2或3 （vue3版暂不支持app） [详情](https://ask.dcloud.net.cn/article/37834)
* 【重要】新增 uni-app 支持运行和发布到 快手小程序
* 新增 Git插件 支持在项目管理器上显示Git分支并可点击进行快捷操作 [详情](https://hx.dcloud.net.cn/Tutorial/SourceControl/git)
* 新增 左下角账号快捷切换
* 新增 设置项 选择自动换行方式 按单词截取、按字符截取 （【设置 - 编辑器配置】，选择自动换行方式）
* 新增 插件API 插件command支持声明快捷键 [详情](https://hx.dcloud.net.cn/ExtensionDocs/ContributionPoints/README?id=keybindings)
* 新增 插件API 新增when表达式 isMac、isWindows、editorHasSelection [详情](https://hx.dcloud.net.cn/ExtensionDocs/ContributionPoints/README?id=when)
* 修复 插件开发 Windows 控制台日志部分路径无法打开的Bug
* 修复 自定义主题 编辑器上某些颜色无法自定义的Bug
* 修复 项目管理器 单击预览文件，文件缩进和.editorconfig缩进配置不一致的Bug
* 新增 项目管理器 对被自定义编辑器关联的文件，增加“打开方式”菜单（【设置】源码视图，增加自定义编辑器文件关联配置）
* 修复 某些情况下，因.editorconfig文件内容不合法，打开后编辑器出现崩溃的Bug
* 修复 多屏情况下并且界面在第二个屏幕上，快捷键冲突时，冲突菜单显示位置不对的Bug
* 修复 Windows 多屏DPI不一致时，导致编辑器文字排版错乱的Bug
* 修复 当编辑器标签卡存在搜索结果页时，ctrl+tab切换最近的标签卡，切换列表，出现多条名称为“搜索结果”的Bug
* 修复 某些编程语言(Python)，安装相应代码块插件后，无法提示代码块的Bug
* 修复 某些情况下，转到定义激活后, 文字无法恢复普通状态的Bug
* 修复 JavaScript `switch case`语句 换行会自动加逗号的Bug [详情](https://ask.dcloud.net.cn/question/113434)
* 修复 JavaScript Vue模板字符串 换行会自动加逗号的Bug [详情](https://ask.dcloud.net.cn/question/126186)
* 修复 编辑器启动后，已打开的文件，右键菜单【重排代码格式】菜单置灰的Bug
* 修复 条件编译，鼠标双击注释内容，选区不正确的Bug
* 修复 Markdown折叠 文件换行符为'\r'时折叠计算错误的Bug
* 修复 MacOSX，双击uni-app、uniCloud加密文件在编辑器打开后，编辑器无法最小化的Bug
* 优化 MacOSX，新建项目界面，增加模板列表显示条目数量
* 调整 原生App-云打包，原生插件包名校验不分区大小写
* 修复 原生App-云打包，打包结果控制台，一键上传到uniCloud，协作者无法上传安装包到uniCloud服务空间的Bug
* 修复 iOS安心打包 某些情况下，App安装包mainfest.json文件不是最新的Bug
* 新增 插件市场 导入uniapp原生SDK项目 导入HBuilderX后，自动将appid和pluginID绑定
* 修复 uni_modules 插件市场导入`uni_modules`插件，某些情况下，提示`处理外部应用请求未能完成`的Bug
* 优化 uniCloud clientDB的field代码提示
* 新增 uniCloud 初始化向导 增加【部署项目下的DB Schema及扩展校验函数】选项
* 新增 uniCloud 前端网页托管 支持协作者上传网站到服务器
* 优化 uniCloud 前端网页托管 优化上传网站到服务器的界面
* 修复 uniCloud 创建公共模块、uni-clientDB-actions、schema、validateFunction时，同类资源本地存在同名时提示语不正确的Bug
* 优化 uni-app 发行到H5、制作wgt，增加校验
* 优化 uni-app 新建项目 包含付费云函数的项目 自动拉起初始化向导
* 新增 uni-app 插件大赛一等奖获奖作品内置到新建项目模板中 [详情](https://ask.dcloud.net.cn/article/39133)
* 新增 App manifest.json 一键生成iOS通用链接 支持QQ登录、QQ分享、新浪微博登录、新浪微博分享 [详情](https://uniapp.dcloud.io/api/plugins/universal-links)
* 修复 App 真机运行 某些情况下，获取iOS自定义基座版本号错误，导致每次修改代码都会重新安装基座到手机的Bug

## 3.1.22.20210709
* 【重要】MacOSX 升级内置浏览器版本到Chrome 69、升级QT引擎到5.12.10
* 修复 插件卸载 某些插件卸载重装后，不重启HBuilderX，插件无法激活的Bug
* 修复 插件卸载 使用自定义编辑器的插件卸载后，没有恢复文件默认打开方式的Bug
* 优化 插件开发 控制台日志输出，增加文件行号的点击跳转
* 优化 大文档选择行数比较多时的性能问题
* 修复 MacOSX vue-cli项目，当电脑本身没有安装node环境时，运行项目到内置终端，相关npm命令执行失败的Bug
* 新增 底部控制台标签卡，支持鼠标滚轮翻动
* 修复 当设置中没有勾选`Ctrl+鼠标滚轮缩放编辑器`设置项时，底部控制台，鼠标滚轮缩放依然生效的Bug
* 修复 未命名标签卡收藏时，提示需要保存，但是选择了保存后仍然没有收藏成功的Bug
* 修复 编辑器 选中整行，按下tab, 行内容消失的Bug
* 新增 Markdown 列表内容为`[]()` 支持锚点跳转
* 新增 Markdown <>标签，支持转到邮箱
* 新增 Markdown 图片语法`![]()`和链接语法`[]()` 支持相对路径
* 修复 Markdown添加列表快捷键，在其它非Markdown文件也生效的Bug
* 修复 代码提示 代码助手处于数字模式时，当按下的数字大于可选项的个数时无法输入的Bug
* 优化 代码提示改为异步获取提示数据 避免某些情况计算时间过长卡UI
* 新增 支持自定义编辑器代码颜色 [详情](https://hx.dcloud.net.cn/Tutorial/themes?id=自定义编辑器代码颜色)
* 调整 json文件代码的高亮逻辑
* 修复 雅蓝、酷黑主题 HTML无效标签被加上背景色的Bug
* 修复 标签栏空白处，右键菜单，关闭所有标签卡功能无效的Bug
* 修复 底部区域标签卡过多时（比如启动多个运行项目，打开多个终端），导致窗口被撑大，并且无法缩放的Bug
* 修复 真机运行 某些Android 11系统真机运行同步文件失败的Bug
* 新增 App 原生App-云打包 Android打包 支持使用云端证书 [详情](https://ask.dcloud.net.cn/article/35985#server)
* 新增 uni-app vue3 支持以SSR方式运行、发行H5
* 新增 代码提示 uniCloud 支持提示关联项目的schema、collection
* 修复 uniCloud 云服务空间初始化向导 当加密云函数时，某些情况下初始化失败的Bug

## 3.1.18.20210609
* 修复 MacOSX 3.1.17引出的 自带中文输入法输入英文会造成部分类型的文件着色失效的Bug
* 修复 MacOSX 3.1.17引出的 10.13.6操作系统，某些情况下，HBuilderX无法启动的Bug
* 修复 Windows 3.1.17引出的 vue-cli项目，当电脑本身没有安装node环境时，运行项目到内置终端，相关npm命令执行失败的Bug
* 优化 酷黑、雅蓝主题 代码助手 选中文本颜色
* 修复 代码助手 数字模式 sass文件，某些css属性值无法正确输入数字的Bug


## 3.1.17.20210608
* 【重要】升级 HBuilderX 内置node版本升级为12.22，内置npm版本升级为6.4
* 【重要】调整 alt+鼠标滚动的行为从横向滚动调整为竖向滚动一屏。横向滚动为shift+鼠标滚轮
* 强化 各种鼠标滚轮功能，横向竖向滚动、滚3行滚一屏 [详情](https://hx.dcloud.net.cn/Tutorial/keybindings?id=鼠标滚轮)
* 新增 区域内搜索 选中一段文字，在顶部搜索栏选中区域搜索【Ctrl+Shift+f】，可以在特殊背景区内搜索、替换、全选相同词 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/find?id=区域内搜索)
* 新增 自定义右键菜单。编辑器和内置资源管理器 `Alt + 鼠标右键`弹出自定义右键菜单
* 新增 设置 增加启用自动匹配字符功能 （【设置 - 编辑器配置】，启用自动匹配字符功能）
* 新增 Git托管服务。集成CSDN CodeChina插件。新建项目或对老项目点右键可一键托管到Git [详情](https://ext.dcloud.net.cn/plugin?id=4882)
* 新增 从Git导入项目 托管在 csdn codechina 的项目可以快速导入 [详情](https://ext.dcloud.net.cn/plugin?id=4882)
* 新增 打通csdn和HBuilder的账户，在csdn web界面可使用HBuilder账户登录，并管理 code china 的Git项目
* 新增 apk、ipa文件 支持直接安装到手机 (项目管理器，选中文件，右键菜单，安装到手机)
* 【重要】优化 Vue、JavaScript(ES6+)、HTML(ES6+)、Markdown、Typescript等语言的语法着色速度、及相关大文档打开速度
* 调整 js文件的默认编辑器从JavaScript调整为JavaScript(ES6+)
* 调整 html文件的默认编辑器从HTML调整为HTML(ES6+)
* 【重要】优化 编辑器内长行的渲染性能，解决存在长行时编辑文字、滚动以及选择区域卡顿的Bug
* 优化 html/css/js/vue等文件 右键菜单，内置菜单【验证本文档语法】入口，当插件未安装时提示安装
* 修复 某些情况下，因配置文件损坏，导致HBuilderX无法启动的Bug
* 优化 插件安装 NodeJS插件npm安装失败时，提示具体失败原因
* 新增 代码助手窗口 匹配项高亮功能 [详情](https://hx.dcloud.net.cn/Tutorial/Language/CodeAssistant?id=代码助手匹配项高亮)
* 优化 代码助手窗口 选择模式切换功能 [详情](https://hx.dcloud.net.cn/Tutorial/Language/CodeAssistant?id=代码助手窗口切换选择模式)
* 修复 代码提示 try catch内，没有代码提示的Bug
* 优化 支持自定义设置折叠展开方式，可设置是否展开子行（【设置 - 编辑器配置】，代码展开方式）
* 修复 HTML标签属性 在引号内，按下tab，引号内容变成为html标签的Bug
* 优化 MacOSX 代码提示窗口 支持ctrl+p/n，上下移动选中代码
* 修复 vue-cli项目 template内，无法提示html标签代码块的Bug
* 修复 vue-cli项目 某些情况下，当转到定义的内容处于折叠区域，转到定义，没有展开折叠的Bug
* 新增 插件扩展示例webviewdialog 用于演示插件API webviewdialog的基本操作（新建插件项目时可选择相应项目模板）
* 优化 插件API registerUriHandler schema请求，浏览器调起HBuilderX后，当本地未安装相应插件时，支持直接在编辑器内安装插件，无需再跳转到插件市场
* 修复 插件API hx.workspace.getConfiguration() update操作，无法更新值为Object的Bug
* 修复 插件API hx.window.setStatusBarMessage, 带有url的消息无法跳转的Bug
* 修复 插件API setSelection 当文件中存在中文时，设置主选择区域错误的Bug
* 新增 HBuilderX CLI 支持命令行打开指定文件，并跳转到指定行列 [详情](https://hx.dcloud.net.cn/cli/file)
* 修复 HBuilderX CLI 终端执行多条CLI命令，不同CLI命令行日志相互串连的Bug
* 修复 HBuilderX CLI pack 命令行参数--iscustom没有生效的Bug
* 修复 HBuilderX CLI 新创建的项目，Android第一次打包，终端打印警告提示语后cli程序退出的Bug
* 优化 HBuilderX 插件项目类型识别
* 修复 项目管理器 项目执行Git初始化后，项目文件状态没有刷新的Bug
* 修复 项目管理器 已关闭项目窗口，当拖动控制台时，已关闭项目窗口高度被撑高的Bug
* 优化 项目管理器 悬浮收起和展开按钮增加tips
* 修复 项目管理器 Windows 当目录名称包含括号等特殊字符时，右键菜单，在外部资源管理器打开失败的Bug
* 修复 MacOSX 项目管理器，右键菜单，点击【打开文件所在目录】出现卡顿的Bug
* 修复 内置浏览器 预览html文件，重命名项目后，内置浏览器解析错误显示404的Bug
* 修复 内置浏览器 开发者工具控制台，自动记忆上次位置
* 修复 内置浏览器 拖曳HBuilderX到分屏 分屏主屏缩放不一样，导致内置浏览器页面及调试窗口被放大的Bug [详情](https://ask.dcloud.net.cn/question/110194)
* 优化 内置浏览器 地址栏单独显示一行 [详情](https://ask.dcloud.net.cn/article/37703)
* 优化 内置资源管理器 大图标模式 svg文件 图标显示图像
* 修复 内置资源管理器 新建文件夹或文件，会闪过其它图标的Bug
* 修复 内置资源管理器 某些没有预设图标的文件，显示txt图标的Bug
* 修复 内置资源管理器 无法显示以点开头的隐藏文件的Bug
* 修复 内置资源管理器 uni-app项目，右键菜单，新建组件，编辑器出现崩溃的Bug
* 修复 终端 将操作系统资源管理器文件夹拖入终端，终端变成文件浏览器的Bug
* 修复 Windows 终端 因执行策略引发的内置终端无法执行某些命令的Bug [详情](https://ask.dcloud.net.cn/question/86935)
* 修复 Windows 终端 上下来回拖动，终端底部出现空白的Bug
* 修复 Windows 控制台 分割线太细，很难选中的Bug
* 修复 Windows 编辑器标签卡，拖出一个标签卡到桌面最右边，某些情况下，无法再次拖动的Bug
* 修复 Windows 从360压缩软件里拖动目录到HBuilderX的内置资源管理器，HBuilderX没有激活到前台的Bug
* 修复 Windows 上下拖动编辑器 内置浏览器、终端窗口闪烁的Bug
* 修复 插件安装窗口 某些情况下，提醒的红色数字数量显示不准确的Bug
* 修复 MacOSX 插件安装窗口 某些情况下，显示到其它软件窗口上面的Bug
* 修复 MacOSX 检查更新弹窗 某些情况下，显示到内置刘浏览器后面的Bug
* 优化 MacOSX HBuilderX顶部菜单 第一个菜单列表 增加检查更新
* 修复 MacOSX git导入HBuilderX插件项目，导入后，直接按command+R， 编辑器闪退Bug
* 修复 MacOSX 当编辑器打开插件安装等模态窗口时，点击关闭右下角弹窗没有反应的Bug
* 修复 MacOSX 将焦点置于Git项目下的文件上，点击菜单【git 推送】，调起终端后，终端显示异常的Bug
* 修复 MacOSX 全屏幕状态下，关闭HBuilderX，重新启动后，没有进入全屏幕状态的Bug
* 修复 MacOSX HBuilderX连接并拖动到外接显示器后，某些情况下，搜索框没有光标、搜索下拉列表点击后没有反应的Bug
* 修复 切换最近的标签卡 内置资源管理器 某些情况下，标签卡列表跟已打开的标签卡对应不上的Bug
* 优化 切换最近的标签卡 当文件名相同时，标签卡列表显示项目文件路径
* 修复 标签卡 关闭所有标签卡 当标签卡数量很多时，卡顿、耗时的Bug
* 修复 标签卡 当文件名包含&符号时，标签卡文件名中的&显示不出来的Bug [详情](https://ask.dcloud.net.cn/question/81108)
* 修复 当编辑器打开的未保存文件过多时，导致HBuilderX启动速度变慢的Bug
* 修复 同时拖入多个文件（10个左右）到编辑器，编辑器打开文件，响应慢的Bug
* 优化 编辑器 失去焦点，高亮的代码变灰
* 优化 扩展视图 SFTP视图 增加文件夹图标
* 修复 选中一段代码 按下双引号，ctrl+z撤销错误的Bug
* 修复 选中一段代码 智能双击包围操作，ctrl+z撤销逻辑错误的Bug
* 修复 vue文件 某些情况下，双击等号，无法选中整个属性的Bug
* 修复 vue文件 某些情况下，双击引号内侧，无法选中引号内文字的Bug
* 修复 MacOSX 选中某行内容，上下移动行，行首出现灰色方块的Bug
* 优化 跳转 跳转行 输入0跳转到首行，输入$跳转到最后一行
* 优化 跳转 {}[]()括号 括号内输入}]) 自动跳出括号 [详情](https://ask.dcloud.net.cn/question/62646)
* 修复 搜索 字符搜索（多文件），搜索到结果后，状态栏提示`未查找到xxx`的Bug
* 修复 替换 工具栏上没有全选功能的Bug
* 新增 自定义快捷键 默认设置 增加“验证本文档语法”命令，即editor.action.validation
* 修复 快捷键 vscode快捷键方案 Ctrl+L (MacOSX: Command+L) 快捷键功能对应vscode功能错误的Bug
* 修复 快捷键 vscode快捷键方案 eslint校验 状态栏消息 跳转到下一个错误，快捷键显示错误的Bug
* 修复 快捷键 eclipse快捷键方案 Ctrl+Alt+上箭头（MacOSX: Command+Alt+上箭头），快捷键功能对应eclipse功能错误的Bug
* 修复 迷你地图 屏幕放大后，迷你地图消失后，迷你地图原先区域出现空白的Bug
* 修复 深色主题 代码助手窗口，某些文字颜色无法看清的Bug
* 修复 SVG图片 点击工具栏【预览】按钮，出现无关弹窗的Bug
* 优化 颜色预览窗口文字及UI
* 修复 颜色预览 十六进制颜色，带Alpha通道的颜色无法在编辑器预览，且不能通过Alt快捷打开颜色选择器的Bug
* 修复 搜狗输入法 设置为中文时使用英文标点，在辑器中输入`' " ( { [`不会成对出现的Bug [详情](https://ask.dcloud.net.cn/question/116356)
* 修复 MarkDown 文档结构图 代码区中`#注释`在文档结构图中显示为标题的Bug
* 优化 MarkDown 代码块不再显示缩进
* 修复 插件市场 导入uniCloud相关插件，切换云厂商时，已选好的项目名称被重置的Bug
* 优化 视图 显示前端网页托管 本地拖曳多个文件上传，每个文件上传后，文件列表实时刷新
* 修复 前端网页托管 在文件上传过程中，点击HBuilderX关闭按钮，导致HBuilderX失去响应的Bug
* 修复 前端网页托管 当文件上传确认弹窗和标签卡拖曳动作重叠时，导致编辑器UI异常的Bug
* 优化 前端网页托管 控制台日志，当有跳过的文件时，最后汇总显示跳过的文件数量
* 优化 前端网页托管 上传网站到服务器，自动记住上次选择的云服务空间
* 修复 uni-app 新建页面 某些分辨率的电脑，新建页面窗口显示不全的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I1YP5O)
* 修复 uniapp-cli 创建uniCloud云开发环境 自动创建的uni_modules目录位置不对的Bug
* 修复 uniapp-cli 插件市场导入uniCloud插件，pages等目录创建错误的Bug
* 优化 uniCloud schema文件，右键菜单，增加【schema2code】，且支持schema2code插件随着HBuilderX的升级而升级
* 优化 uniCloud schema2Code 不生成pages.json，而改成pages_init.json，差量合并新页面
* 修复 uniCloud 初始化数据库，在网络不好或其他情况下，连续多次点击，导致HBuilderX闪退的Bug
* 修复 uniCloud 某些情况下，从插件市场导入云函数插件，导入到本地后，创建的目录无法展开，刷新后也没反应的Bug
* 修复 uniCloud JQL文件 按住Alt，某些情况下，导致编辑器闪退的Bug
* 修复 App 发行小程序 windows 在输入框中，按下tab，焦点跳转到取消按钮上的Bug
* 新增 App 原生App-云打包，打包日志中，增加【一键上传到uniCloud】功能，提供免费cdn
* 优化 App 原生App-云打包，代码编译中、或提交打包过程中，打包窗口底部打包按钮设为禁用状态，避免重复点击
* 修复 App 原生App-云打包，打包过程中，手动关闭打包窗口，HBuilderX崩溃的Bug
* 优化 App 制作应用wgt包 原生混淆 记住上次勾选状态
* 修复 App 安心打包，当勾选原生混淆时，第二次安心打包失败的Bug

## 3.1.13.20210514
* 修复 uniapp框架的一些Bug

## 3.1.12.20210428
* 修复 3.1.4版本引出的 新设备 某些情况下，首次启动，第一次点击编辑器没有反应，第二次点击才能启动的Bug
* 修复 App 原生App-云打包 服务器返回警告弹窗，用户点击取消，仍继续打包的Bug
* 优化 App 安心打包 使用原生插件时打包的App体积减小
* 修复 Windows App 制作应用wgt包 由于文件被占用，第二次制作失败的Bug

## 3.1.11.20210423
* 【重要】新增 vue3 代码提示、转到定义，仅支持vue-cli项目
* 【重要】新增 HBuilderX CLI 部署云函数、管理云服务空间 [详情](https://hx.dcloud.net.cn/cli/uniCloud)
* 【重要】新增 HBuilderX CLI 部署和管理前端网页托管 [详情](https://hx.dcloud.net.cn/cli/uniCloud-hosting)
* 修复 HBuilderX CLI pack 命令行参数--iscustom没有生效的Bug
* 新增 在Windows资源管理器的目录点右键 使用HBuilderX打开（需要在【设置】中勾选关联右键菜单选项)
* 新增 项目管理器 悬浮显示收起和展开按钮
* 优化 项目管理器 修改项目别名窗口样式
* 修复 内置资源管理器 SVN更新操作后，文件修改时间没有更新的Bug
* 新增 插件API when表达式变量支持'-'中划线
* 优化 插件API hx.authorize.login 增加description字段，用于显示申请权限描述 [详情](http://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=login)
* 优化 MacOSX 右键菜单样式
* 修复 文件编辑状态指示器，撤销后状态异常的Bug
* 修复 关闭所有标签卡，当存在未保存文件时弹窗提示没有聚焦到文件的Bug
* 新增 插件安装 安装失败弹窗，增加重试按钮
* 新增 切换到上一个版本 增加确认弹窗
* 新增 编辑器中存在超链接时，鼠标悬停出现相关操作提示语
* 修复 HBuilderX 登录窗口 忘记密码功能失效的Bug
* 修复 uniCloud udb代码块 data没有提示的Bug
* 新增 uniCloud JQL查询 增加查看【全部信息】、【只看data】功能
* 新增 uniCloud 公共模块 增加可视化管理公共模块依赖 （对公共模块点右键->管理公共模块依赖）
* 调整 uniCloud 项目运行 默认连接本地云函数
* 新增 uniCloud 创建uniCloud云开发环境时，同时在项目下创建uni-id公共模块
* 移除 uniCloud cloudfunctions目录 右键菜单 移除“同步云端函数列表”
* 修复 uniCloud 某些情况下，uni_modules下的云函数上传没有反应的Bug
* 修复 uniCloud 单项目窗体下，关联云服务空间或项目，绑定其它项目的服务空间，项目列表显示不完整的Bug
* 新增 App 原生打包 打包控制台 打开所在目录，改为打开内置资源管理器
* 修复 App Android安心打包，打包多个渠道时，只有第一个渠道打包成功，剩余渠道包打包失败的Bug
* 修复 App Android安心打包，Windows电脑，某些情况下，因JAVA虚拟机内存问题，导致打包失败的Bug
* 新增 App manifest.json 一键生成iOS通用链接 [详情](https://uniapp.dcloud.io/api/plugins/universal-links)
* 优化 App manifest.json AppID增加选择复制功能

## 3.1.9.20210413
* 修复 项目管理器 uni_modules目录，某些情况下，展开目录卡顿的Bug

## 3.1.8.20210406
* 修复 uniCloud `uni_modules`公共模块，依赖另一个`uni_modules`公共模块，上传所有云函数、公共模块及actions，公共模块依赖关系丢失的Bug

## 3.1.7.20210330
* 修复 uniapp框架的一些Bug

## 3.1.6.20210326
* 【重要】新增 HBuilderX CLI 支持命令行调用App打包、启动HBuilderX等操作 [详情](https://hx.dcloud.net.cn/cli/README)
* 【重要】新增 uniCloud JQL查询调试器 (uniCloud/database目录下打开JQL文件，若无文件可以右键菜单【新建JQL查询文件】) [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-runner)
* 新增 文件编辑状态指示。当行内容发生未保存变动，行首显示相应色块，鼠标悬浮色块上可预览编辑前的内容
* 修复 js语句，某些情况下，回车没有自动补充行尾逗号的Bug [详情](https://ask.dcloud.net.cn/question/118525)
* 修复 MacOSX M1芯片的电脑，svn操作，提示`svn: command not found`的Bug
* 修复 MacOSX 内置浏览器 右键菜单【查找代码中对应的DOM节点】菜单丢失的Bug [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/built-in-browser)
* 修复 插件市场 云端一体页面模板 导入HBuilderX，某些情况下，页面路径创建错误的Bug
* 修复 前端网页托管 文件上传过程中，新建页面，某些情况下，编辑器闪退的Bug
* 修复 App 原生打包 某些情况下，获取基座版本号失败，导致打包失败的Bug
* 修复 App 原生打包 带有原生插件的App，打包时，没有拷贝nativeplugins目录下android、ios目录外的文件的Bug
* 优化 uni-app 新建项目，启用uniCloud，自动创建cloudfunctions和database目录
* 修复 uniCloud 初始化向导，某些情况下，没有上传云函数，直接提示`上传uni-client-actions结束`的Bug
* 修复 uniCloud 云函数 公共模块依赖使用`\\`时，上传失败的Bug
* 优化 uniCloud目录的右键菜单内容
* 优化 uniCloud clientDB 支持collection、field 转到定义
* 优化 uniCloud clientDB 代码提示 支持提示聚合函数
* 修复 uni_modules 发布到插件市场，插件过大时上传失败的Bug
* 优化 插件API hx.authorize.login 授权登录，去掉5分钟code有效期判断

## 3.1.4.20210305
* 修复 当焦点不在编辑器或项目管理器，点击菜单，新建文件，编辑器闪退的Bug [详情](https://ask.dcloud.net.cn/question/117347)
* 修复 Windows Git导入项目 拉起外部工具TortoiseGit，导入未完成时，HBuilderX无法操作的Bug
* 修复 曲面屏125%缩放，搜索栏字体大小异常的Bug
* 修复 内置资源管理器 非项目管理器的空文件夹，删除操作，导致编辑器闪退的Bug
* 修复 关闭“编辑器向下滚动一屏”配置项后，迷你地图无法拖动的Bug
* 修复 javascript 对象解构赋值语句，在行尾部按下回车后，自动添加逗号的Bug [详情](https://ask.dcloud.net.cn/question/117270)
* 修复 javascript 当文件中存在`?.`和`??`操作符时，jsbeautify格式化出错的Bug
* 修复 字符搜索 正则表达式, 分组无效的Bug [详情](https://ask.dcloud.net.cn/question/57338)
* 修复 字符搜索 正则表达式, 只输入`$`, 搜索后编辑器无响应的Bug [详情](https://ask.dcloud.net.cn/question/57338)
* 修复 MacOSX 当电脑同时安装HBuilderX Alpha和正式版, 插件市场导入插件，无法正确拉起HBuilderX的Bug
* 修复 MacOSX 内置浏览器 某些情况下，开发者工具显示空白的Bug
* 修复 HBuilderX 某些情况下，更新失败的Bug
* 修复 HBuilderX 用户登录，当用户状态异常，登录提示语提示不准确的Bug
* 修复 真机运行 iOS 当手机安装的应用数量超过200时，某些情况下，同步数据失败的Bug
* 修复 App 原生打包 勾选渠道打包，后续不勾选，仍提交渠道打包的Bug
* 修复 uni-app manifest.json App原生插件配置 云端插件 含输入框配置项没有显示的Bug
* 修复 uni-app manifest.json 原生插件选择窗口 某些情况下，无法关闭的Bug
* 优化 uni-app 新建组件，模板文件自动添加组件名称
* 新增 uniCloud 关联云服务空间或项目窗口，增加新建服务空间、刷新服务空间功能
* 修复 uniCloud 初始化向导 数据库初始化窗口，点击取消按钮、或关闭窗口后，再次上传云函数，弹出数据库初始化窗口的Bug
* 调整 为兼容hbuilderx 3.1.0+，openDB 表uni-id-address字段名：default，改为：is_default [详情](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-address/collection.json)
* 修复 uniCloud 初始化向导 某些情况下，没有执行初始化数据库的Bug
* 修复 uniCloud uni_modules下的云函数, 依赖项目根目录uniCloud下的公共模块时，上传失败的Bug
* 修复 uni_modules 项目模板无法从插件市场更新的Bug

## 3.1.2.20210206
* 【重要】新增 uni_modules。uni-app生态的重要模块化方案。[详情](https://uniapp.dcloud.net.cn/uni_modules)
* 【重要】新增 文件内容对比合并功能。文件覆盖前提供内容级的差异对比界面，支持内容编辑。（插件市场插件导入、schema2code导入时可见）
* 修复 插件API 当编辑器开启迷你地图时，文档修改事件执行两次的Bug
* 修复 插件API 内置资源管理器 执行command时传参不对的Bug
* 修复 插件API 自定义编辑器的持久化对象可能造成内存泄漏的Bug
* 优化 插件API 注册菜单 when表达式，优化计算性能
* 修复 插件API 当插件package.json activationEvents没有配置onUri时，某些情况下，编辑器出现闪退的Bug
* 修复 HBuilderX插件 某些情况下，项目类型识别错误的Bug
* 修复 颜色预览 某些rgb颜色值显示错误的Bug
* 修复 转到定义 当vue文件带有`beforeRouteLeave`方法时，转到定义失败的Bug [详情](https://ask.dcloud.net.cn/question/114628)
* 修复 MacOSX 内置资源管理器 某些情况下，点击目录，编辑器出现闪退的Bug
* 修复 uni-app cli项目 新建页面，选择分包，点击创建按钮没有反应的Bug
* 修复 App manifest.json 当文件存在语法错误，某些情况下，打开manifest.json，导致编辑器闪退的Bug
* 修复 App 原生打包 某些情况下，打包窗口，应用版本号与manifest.json显示不一致的Bug
* 修复 App 原生打包 iOS 设置自定义storyboard启动界面 某些情况下，提交打包，弹出自定义启动图相关弹窗的Bug
* 新增 uniCloud 创建云函数、action、公共模块、schema、validateFunction，云端校验是否存在，如果存在提示用户选择本地创建/云端拉取
* 新增 uniCloud cloudfunctions目录 右键菜单 增加下载云端所有资源
* 修复 uniCloud 弱网状态，上传云函数，某些情况下，界面卡顿导致编辑器崩溃的Bug
* 修复 uniCloud 批量上传公共模块，选择跳过云端已存在的模块，其它公共模块没有继续上传的Bug
* 新增 uniCloud 支持对schema、action文件转到定义
* 优化 uniCloud 前端网页托管 文件上传效率，速度提升数倍

## 3.0.7.20210123
* 【重要】新增 iOS App 安心打包，无需提交代码和证书到云打包机。更安全、更快捷 (仅支持MacOSX，不支持windows) [详情](https://ask.dcloud.net.cn/article/37979)

## 3.0.5.20210107
* 修复 插件API hx.window.createWebViewDialog 设置窗口大小无效的Bug
* 修复 3.0.4 版本引出的 当编辑器没有打开项目下任何文件，直接在项目管理器选中项目，按下Ctrl+R，HBuilderX闪退的Bug [详情](https://ask.dcloud.net.cn/question/114619)
* 修复 App 真机运行，某些情况下，HBuilderX闪退的Bug
* 修复 App manifest.json App原生插件配置，本地插件，带`.`的key值写入文件异常的Bug
* 修复 App Android 安心打包，某些情况下，打包失败的Bug

## 3.0.4.20201231
* 【重要】新增 Android App 安心打包，无需提交代码和证书到云打包机。更安全、更快捷 [详情](https://ask.dcloud.net.cn/article/37979)
* 【重要】DCloud开发者开放平台上线。向开发者服务商开放账户和流量。 [详情](https://open.dcloud.net.cn/)
* 【重要】新增 插件API hx.authorize 插件可获取HBuilderX登录用户的授权。类似于微信小程序中的微信登录。三方开发者服务商（如Git服务商）可与HBuilderX账户打通。 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=authorize)
* 新增 插件API hx.window.showMessageBox 创建简单的对话框 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=showmessagebox)
* 新增 插件API hx.workspace.copyFileWithPrompt 可将指定文件或文件夹拷贝到目标文件夹下 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=copyfilewithprompt)
* 新增 插件API hx.window.createWebViewDialog 创建内容区可由HTML编写的模态对话框 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=createwebviewdialog)
* 优化 插件API when表达式，支持正则匹配 [详情](https://hx.dcloud.net.cn/ExtensionDocs/ContributionPoints/README?id=when)
* 优化 MacOSX iOS模拟器列表展示方式，按操作系统版本展示
* 修复 MacOSX Big Sur 11系统，运行菜单列表样式显示异常的Bug
* 修复 MacOSX 设备运行列表，三级菜单编辑启动页面配置，鼠标滑过时，某些情况下造成iOS模拟器列表卡顿的Bug
* 修复 MacOSX 新版SVN，命令行输出为中文时，解析出错，导致SVN文件对比等功能异常的Bug [详情](https://ask.dcloud.net.cn/question/72358)
* 修复 MacOSX 当SVN仓库URL超长时，导致SVN提交窗口超出屏幕的Bug
* 修复 MacOSX 当html文件存在中文或空格等特殊字符时，运行html到外部浏览器失败的Bug
* 修复 插件市场 uniCloud Admin插件 某些情况下，导入插件到HBuilderX，pages.json没有合并的Bug
* 修复 某些情况下，内置资源管理器外部文件，点击右键菜单，造成编辑器崩溃的Bug
* 修复 某些情况下，转到定义丢失位置记录，导致后退时跳转位置不对的Bug
* 新增 新建同名项目，增加合并、替换操作
* 优化 控制台 消息通知 当控制台产生新日志时，右上角显示消息通知
* 修复 控制台 某些数据类型的日志无法打印的Bug
* 修复 uni-app 新建页面 选择分包，复选框`在pages.json中注册`，去掉勾选再次点击，导致HBuilderX崩溃的Bug [详情](https://ask.dcloud.net.cn/question/113869)
* 修复 App 原生打包窗口 勾选广告后，manifest.json中自定义的广告数据被清除的Bug
* 新增 App manifest.json iOS设置 关联域，用于配置通用链接域名 [详情](https://ask.dcloud.net.cn/article/36393)

## 2.9.8.20201110
* 修复 MacOSX 10.13.6系统，运行app到iOS真机，mdb崩溃的Bug
* 修复 MacOSX Big Sur 11.0.1 Beta系统，运行app到iOS模拟器、Android出错的Bug
* 修复 Windows 某些情况下，插件市场导入插件，打开新HBuilder窗体的Bug
* 修复 uniapp-cli项目，新建页面，提示pages.json存在错误的Bug

## 2.9.7.20201106
* 优化 无边框窗口（新建项目、新建页面等窗口），支持鼠标拖曳移动
* 修复 选择所有相同词，文档尾部有匹配结果时，搜索范围设置越界导致编辑器崩溃的Bug
* 修复 当本地存在遗留文件或同名文件时，插件安装失败的Bug
* 修复 多文件搜索，搜索结果窗口内容过长时导致编辑器闪退的Bug
* 修复 某些情况下，点击对话框上按钮后，切换主题、新建窗体后编辑器闪退的Bug
* 修复 新建HBuilder窗体，工具栏显示异常的Bug
* 修复 Windows 隐藏操作系统任务栏，HBuilderX窗体最大化后，鼠标移动到屏幕底部，无法自动弹出任务栏的Bug
* 修复 MacOSX Big Sur 11 Beta系统，无法检测到ios真机的Bug
* 修复 MacOSX Big Sur 11 Beta系统，uniCloud，关联云服务空间，编辑器出现闪退的Bug
* 修复 MacOSX Big Sur 11 Beta系统，鼠标滑过扩展插件视图后，编辑器出现闪退的Bug
* 修复 MacOSX Big Sur 11 Beta系统，多次按下`添加收藏`快捷键后，编辑器出现闪退的Bug
* 修复 MacOSX Big Sur 11 Beta系统，云端打包窗口，tab标签卡显示空白的Bug
* 修复 SFTP 当SFTP视图已打开时，再次点击`浏览远程文件`，没有跳转到SFTP视图的Bug
* 修复 插件API 某些情况下，因线程问题，导致插件扩展菜单失效的Bug
* 修复 插件API 某些情况下，自定义编辑器重复打开，导致webView创建失败的Bug
* 优化 插件API getActiveTextEditor lineFromPosition方法，返回lineNumber，可以获取到当前光标所在行行号
* 修复 插件市场导入项目到HBuilderX, 编辑器弹出付费协议窗口的Bug
* 优化 插件导入加入对HBuilderX版本号的判断，当本地版本小于要求时，提醒用户升级
* 修复 新建项目 某些情况下，普通项目模板，第二次创建失败的Bug
* 调整 新建项目 移除微信小程序项目的创建，请在微信工具中创建项目。HBuilderX 仍然可以导入和编辑微信小程序项目
* 优化 uni-app 新建页面 选择单页面模板，创建页面前，检查pages.json是否存在语法错误
* 修复 uni-app 新建页面 当项目已存在云服务空间，选择云端一体列表页面模板，仍弹窗提示选择云服务空间的Bug
* 修复 uni-app easycom规则没有配置的情况下，代码提示时组件不提示的Bug
* 修复 uniCloud 单项目窗体上，新建项目后，重复弹出初始化向导窗体的Bug
* 优化 uniCloud 前端网页托管 增加上传文件超过设定大小（50MB）限制的提示
* 优化 uniCloud 前端网页托管 当已配置自定义域名时，上传网站到服务器、MarkDown一键分享，控制台日志显示自定义域名路径
* 修复 uniCloud 某些情况下，上传公共模块或云函数，控制台日志出现`云端运行`文字的Bug
* 新增 uniCloud 未实名认证用户，支持创建阿里云体验服务空间（cloudfunctions目录，右键菜单【运行云服务空间初始化向导...】）
* 新增 代码块 udb，快速创建`<uni-clientdb>`组件

## 2.9.3.20201014
* 新增 插件API CustomEditor 支持自定义编辑器  [详情](https://hx.dcloud.net.cn/customeditor)
* 修复 插件API registerUriHandler拼写错误的Bug
* 优化 快捷键-VSCode方案的全部保存, 修改为`ctrl+k, s`
* 修复 已打开的文件，改变文件后缀名，状态栏语言类型没有改变的Bug
* 修复 MacOS SVN 1.14.0版本 项目管理器文件内容变化后，SVN状态图标没有显示的Bug
* 修复 打开前端网页托管时，点击菜单【工具】-【外部命令】，造成编辑器闪退的Bug
* 修复 内部资源管理器 地址栏下拉列表，切换目录，导致编辑器闪退的Bug
* 优化 uni-app 新建页面功能。支持在新建页面时直接配置 pages.json 内容，输入标题等。可选更多页面模板，并支持预览内容或图片
* 优化 uni-app 在分包的目录上，右键菜单点击新建页面，自动在新建页面选择对应的分包目录
* 修复 uni-app 运行到内置浏览器，某些情况下，控制台日志显示不全的Bug
* 新增 uniCloud 云服务空间初始化向导，提升使用便利度 （cloudfunctions目录，右键菜单【运行云服务空间初始化向导...】
* 新增 uniCloud 初始化云函数配置 cloudfunctions_init.json，可在插件市场的插件中配置云函数的参数（如云函数url参数），使用者可在HBuilderX中一键完成配置 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=init)
* 修复 uniCloud 真机运行 调用腾讯云云函数时，控制台不打印云函数运行日志的Bug
* 修复 uniCloud 上传公共模块 没有上传依赖的公共模块的Bug
* 修复 uniCloud 某些情况下，关联服务空间，导致HBuilderX编辑器闪退的Bug

## 2.8.12.20200926
* 修复 uniapp框架的一些Bug

## 2.8.11.20200907
* 新增 前端网页托管视图 (菜单【视图】【显示前端网页托管】)
* 新增 HBuilderX 支持跳转到指定的行和列 [详情](https://ask.dcloud.net.cn/article/37732)
* 新增 Git插件 增加`编辑.gitignore`和`添加到.gitignore`功能
* 修复 Windows 某些AMD显卡的电脑，无法启动HBuilderX的Bug
* 修复 Windows 资源管理器，选中多个文件，右键点击Open with HBuilderX，造成编辑器崩溃的Bug
* 优化 内置浏览器 手机扫码预览界面
* 修复 项目管理器 某些情况下，右键菜单卡顿的Bug
* 修复 搜索 搜索类型下拉列表 某些情况下，造成编辑器崩溃的Bug
* 修复 跨高分屏缩放引起的窗口拖拽的Bug
* 修复 颜色预览 颜色后面还存其它值时，颜色无法预览的Bug
* 修复 颜色预览 某些hsl、hsla颜色值，预览错误的Bug
* 修复 颜色预览 rgba 当alpha=1的时候，颜色无法预览的Bug
* 修复 markdown一键分享 某些情况下，上传失败后，提示信息仍然提示成功的Bug
* 优化 App manifest.json 调整文件图标
* uni-app 发行 h5界面 uniCloud云服务空间 增加新建和刷新功能

## 2.8.8.20200820
* 新增 MarkDown 一键分享 [详情](https://ask.dcloud.net.cn/article/37573)
* 修复 文档结构图 显示隐藏操作 导致编辑器焦点丢失的Bug
* 修复 外部命令 当命令数组为空时保存，编辑器崩溃以及无法启动的Bug
* 修复 未命名文件保存和其它文件另存为操作，没有更新导航栏的Bug
* 新增 控制台 URL链接内容 右键菜单 增加复制链接
* 修复 uniCloud进行上传操作后，内置浏览器、内置终端运行异常的Bug

## 2.8.6.20200814
* 修复 uniapp框架的一些Bug

## 2.8.5.20200812
* 修复 windows 内置浏览器 2.8.1版引出的 右键菜单无法显示的Bug
* 修复 文档结构图 同时打开多个文件，文档结构图出现跳转错误，并造成编辑器崩溃的Bug
* 修复 文档结构图 缩小宽度到0时，造成编辑器崩溃的Bug
* 修复 某些情况下，启动HBuilderX后，立即关闭内置资源管理器标签卡导致编辑器崩溃的Bug

## 2.8.3.20200728
* 修复 目录内字符搜索结果界面右侧预览的vue、less等语言不着色的Bug [详情](https://ask.dcloud.net.cn/question/102438)
* 修复 菜单 显示左侧视图，菜单名称出现错别字的Bug
* 修复 插件API webView，引出的SFTP视图，右键菜单无法显示的Bug [详情](https://ask.dcloud.net.cn/question/102493)

## 2.8.2.20200726
* 【重要】新增 前端网页托管 提供免费、高速、安全、免运维的网页部署云服务 [详情](https://uniapp.dcloud.io/uniCloud/hosting)
+ 入口1：选中web项目，点击菜单发行-上传网站到服务器
+ 入口2：uni-app发布为H5时，勾选 直接部署到前端网页托管
* 【重要】新增 uniCloud 本地运行云函数，可连接远程数据库和云存储，大幅提升开发效率，同时方便数据导入导出
* 优化 兼容自定义代码块配置body时不是数组的情况
* 修复 jsx后缀的文件没有代码提示的Bug
* 修复 某些情况下，编辑器右键菜单【重排代码格式】置灰了的Bug
* 优化 修改插件配置规范，支持插件配置文件独立 (菜单【设置】【插件配置】)
* 修复 内部资源管理器 项目名称过长时，地址栏文件名宽度错误的Bug
* 新增 底部控制台 右键菜单，支持自定义快捷键 [详情](https://ask.dcloud.net.cn/article/37482)
* 修复 Mac 设置-常用设置中字体列表没有显示的Bug
* 【重要】新增 插件API hx.window.createWebView。可在创建的webview视图中自由绘制自己的界面 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=createwebview)
* 新增 插件API hx.window.registerUriHanlder，支持从浏览器打开HBuilderX并自动安装或激活某插件 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=registerurihandler)
* 修复 插件API getActiveTextEditor()获取临时编辑器url出错的Bug
* 修复 插件API 2.7.12版引出的showInputBox无法使用的Bug
* 修复 插件API 消息通知框，当按钮文字太长时，显示不全的Bug
* 修复 插件市场 使用HBuilderX导入插件，调起HBuilderX后，编辑器窗口没有前置的Bug
* 修复 eslint-vue插件 获取workdspaceFolder时插件API调整造成的兼容Bug
* 【重要】新增 App manifest.json - App启动图，支持iOS 自定义storyboard启动界面（6月30日起Appstore强制要求storyboard）[详情](https://ask.dcloud.net.cn/article/37475)
* 新增 真机运行 支持iOS14_beta系统版本
* 修复 WebView调试 在新版Chrome(83.x版本) 上无法使用的Bug
* 修复 uni-app cli项目 提交打包 因缺少cliVersion和baseVersion字段，导致服务器不能正确分配打包机的Bug
* 优化 App manifest.json 将`App SDK配置`，合并到 App模块配置 中。选择模块后，如涉及SDK配置，则会出现相应界面
* 优化 App manifest.json - `App SDK配置`，支持三方SDK仅用于单一手机OS。比如只在Android上配高德定位、微信支付、支付宝支付，而在iOS上不启用。避免每次打包前调整manifest

## 2.7.14.20200618
* 【重要】HBuilderX插件市场上线，欢迎大家提交插件 [详情](https://ext.dcloud.net.cn/?cat1=1)
* 新增 Windows 普通项目、uni-app项目 支持同步js断点到内置浏览器进行调试（对js代码的左侧行号点右键，选同步断点到内置浏览器）
* 优化 FTP/SFTP插件，支持在左侧页签浏览远程FTP目录（对FTP项目右键，浏览远程文件）[详情](https://ask.dcloud.net.cn/article/37430)
* 新增 编辑器 全部替换时，状态栏提示总替换数量
* 优化 新建项目时下载项目模板失败的情况
* 修复 启用按tab键自动插入代码助手选中项功能，在激活代码助手的情况下，`alt+tab`等快捷键无响应的Bug
* 优化 编辑器视图下点击工具栏的地址栏上的父目录，打开的项目管理器将自动置焦之前编辑器里的文档
* 修复 编辑器右键菜单复制文件路径复制的是项目管理器中选中的文件路径的Bug
* 修复 项目管理器 右键菜单在空白位置时仍然能获取到当前文件的Bug
* 修复 内部资源管理器 因文件关联导致图标空白的Bug
* 修复 内部资源管理器 重命名单个文件后，文件选择状态丢失的Bug
* 修复 内部资源管理器 新建或重命名后，焦点错误的Bug
* 修复 某些rgb颜色预览错误的Bug [详情](https://ask.dcloud.net.cn/question/99287)
* 优化 文档结构图反复打开会导致内存泄漏的Bug
* 修复 2.7.9版本，引出的点击行号，无法选中当前行的Bug
* 新增 插件API workspace.onDidChangeConfiguration 事件回调
* 新增 插件API workspace.onDidChangeWorkspaceFolders 事件回调
* 新增 插件API window.createTreeView 支持创建treeview视图，在项目管理器右侧以tab方式展现新的树形列表 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=createtreeview)
* 新增 插件API views、viewContainers配置扩展点，可以扩展新的UI视图 [详情](https://hx.dcloud.net.cn/views)
* 新增 插件API workspace.getWorkspaceFolders 获取项目管理器下所有的项目对象 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=getworkspacefolders)
* 新增 插件API workspace.getWorkspaceFolder 获取某个文件所在的项目 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=getworkspacefolder)
* 新增 uni-app 支持条件编译平台MP-360,QUICKAPP-WEBVIEW-HUAWEI,QUICKAPP-WEBVIEW-UNION的代码提示和高亮
* 调整 移除快应用项目的创建、运行，请改为使用uni-app开发快应用

## 2.7.9.20200527
* 新增 HBuilderX版本更新支持显示下载进度，并提供多源下载以适配多种网络环境
* 新增 xml文件 支持文档结构图
* 新增 代码助手 支持按Tab键自动插入代码助手选中项（默认关闭，可在【设置】【编辑器设置】中开启）
* 优化 新建项目、新建文件UI
* 修复 新建项目 模板下载链接显示错误的Bug
* 修复 代码块扩展点配置项目类型没有生效的Bug
* 修复 未保存的文件，切换文件编码，导致未保存内容丢失的Bug
* 修复 某些情况下，带有中文的文件再次打开后，因编码格式错误导致中文显示乱码的Bug [详情](https://ask.dcloud.net.cn/question/95197)
* 修复 MarkDown 鼠标悬停预览图片，鼠标移走之后预览图片偶发不关闭的Bug
* 修复 内部资源管理器 文件重命名过程中，删除字符，导致UI显示错乱的Bug
* 修复 Mac SVN提交信息不能为空的Bug
* 修复 Mac 保存修改只读文件时，去掉对话框中的“使用管理员重新打开”按钮，避免此操作造成编辑器关闭后没有再次启动的Bug
* 新增 插件API snippets扩展点，可以扩展指定编程语言的代码块
* 新增 插件API hx.env.clipboard 读取剪切板内容和写入内容到剪切板
* 新增 插件API hx.env.openExternal 打开外部链接
* 新增 插件API texteditor.setSelection，texteditor.addSelection 设置选择区域
* 新增 插件API workspace.onDidOpenTextDocument 文档打开时的事件
* 修复 插件API config.*表达式获取插件默认配置时值不对的Bug
* 修复 插件API WorkspaceFolder.uri类型没有转换到正确的Uri类型上的Bug

## 2.7.5.20200519
* 【重要】新增 插件开放API，用js编写HBuilderX插件，打造更顺手的开发利器 [详情](https://hx.dcloud.net.cn/)
* 新增 新建项目 普通项目下提供插件扩展开发示例
* 新增 支持从[插件市场](https://ext.dcloud.net.cn/?cat1=7)一键导入云函数分类模板
* 调整 ide不再内置账户注册功能，注册会引导到网页注册，并且未验证邮箱将不再允许登录HBuilderX
* 修复 windows 内置浏览器分离后再最大化，部分窗口被任务栏遮盖的Bug
* 修复 部分电脑 检查更新，弹框消息显示不完整的Bug
* 修复 设置 运行设置，百度、QQ小程序开发者工具下载链接显示不正确的Bug
* 修复 HBuilderX内未保存的文档，在外部修改后，HBuilderX出现多个弹框的Bug
* 修复 vue文件，带有`-`的标签，某些情况下着色异常的Bug
* 修复 html文件，带有`-->`的字符串，着色异常Bug
* 调整 App真机运行基座的图标，从红色改为绿色，与HBuilderX图标主色保持一致
* 修复 uni-app easycom组件模式，因校验规则变动，导致代码提示错误的Bug

## 2.6.16.20200424
* 修复 uniapp框架的一些Bug

## 2.6.15.20200421
* 新增 【重要】内置浏览器运行时，将日志直接输出到HBuilderX控制台
* 新增 内置web服务器 支持自定义端口 （菜单【设置】【运行配置】）
* 新增 FTP插件 支持通过commands在【自定义快捷键】中配置快捷键 [详情](https://ask.dcloud.net.cn/article/37081)
* 新增 项目管理器 增加刷新功能
* 修复 因eslint新版插件导致validate-html、validate-stylelint插件失效的Bug
* 修复 某些Node.js插件，npm install失败，再次安装，引发编辑器闪退的Bug
* 修复 Json文件语法校验 修正错误后，红色波浪线无法消失的Bug [详情](https://ask.dcloud.net.cn/question/94249)
* 修复 内部资源管理器 当未安装终端插件时，运行外部命令导致编辑器闪退的Bug
* 修复 Sublime Text 快捷键配置文件语法错误的Bug [详情](https://ask.dcloud.net.cn/question/94359)
* 修复 Mac 内置浏览器分离后，点击关闭按钮，编辑器崩溃的Bug
* 修复 Mac 导入vue课程源码时，提示npm install失败的Bug
* 新增 uni-app 支持自定义uniapp编译器node启动内存（菜单【设置】【运行配置】）

## 2.6.11.20200409
* 新增 插件配置 （菜单【设置】【插件配置】）
* 新增 eslint 支持自定义配置实时校验、自动修复功能 （菜单【设置】【插件配置】）
* 新增 内置浏览器 增加分离独立窗口功能（内置浏览器【工具栏】分离按钮）
* 新增 内置浏览器 普通项目HTML文件，右键菜单增加 “高亮浏览器内对应元素” 功能；内置浏览器右键菜单，增加 “查找代码中对应的DOM节点”  [详情](https://ask.dcloud.net.cn/article/37087)
* 修复 Mac 部分电脑HBuilderX关闭后无法再次启动的Bug
* 修复 Mac 内置浏览器 手机模式下，uniapp/5+app项目，input输入框无法输入的Bug [详情](https://ask.dcloud.net.cn/question/92267)
* 新增 内部资源管理器 cloudfunctions目录 右键菜单，增加云函数相关操作
* 修复 查找索引符号 跳转后已折叠区域内容没有展开的Bug
* 修复 import以@方式引入不带文件后缀的组件时，无法转到定义的Bug
* 修复 html标签结束字符后面无法输入中文标点符号的Bug
* 修复 颜色预览 rgba颜色 在颜色预览窗口修改颜色后，alpha值显示为127的Bug
* 修复 颜色预览 rgba颜色 当alpha值为1.0时，没有显示相应颜色值的Bug
* 修复 Mac 颜色预览，无法拾取屏幕颜色的Bug
* 优化 App 原生App云打包 Android证书 支持选择以key为后缀的证书
* 优化 App 制作应用wgt包，当versionCode为空时，从服务器获取versionCode值

## 2.6.9.20200403
* 修复 Mac 内置浏览器 手机模式下，uniapp/5+app项目，input输入框无法输入的Bug [详情](https://ask.dcloud.net.cn/question/92267)
* 修复 App manifest.json 配置WKWebview后，App模块权限配置，提示没有勾选ios UIWebview的Bug

## 2.6.8.20200330
* 新增 FTP插件，支持FTP/SFTP协议 [详情](https://ask.dcloud.net.cn/article/37081)
* 优化 eslint一键修复，调整为文件保存时自动修复，无需再手动点修复按钮 [详情](https://ask.dcloud.net.cn/article/37070)
* 兼容 Mac 因微信开发者工具最新1.02.2003250版本调整cli路径，HBuilderX找不到微信开发者工具路径错误的Bug
* 修复 Mac 内置浏览器touch事件无效的Bug
* 修复 当HBuilderX安装目录路径带有@符号时，编辑器布局UI显示异常的Bug
* 修复 设置自动换行后，重启编辑器第一次点击自动换行不生效的Bug [详情](https://ask.dcloud.net.cn/question/89953)
* 优化 svn/git导入，URL包含%时，本地路径解析为实际中文名称
* 修复 App manifest.json screenOrientation规范放置节点错误的Bug

## 2.6.5.20200314
* 补齐 MAC 内部资源管理器 [详情](https://ask.dcloud.net.cn/article/36828)
* 新增 项目管理器、内部资源管理器 支持剪切功能
* 优化 账号安全登录机制（新老版本混合使用会导致需重新登录）
* 修复 es6模板字符串内出现一个以上${}变量时导致代码提示出错的Bug
* 优化 多文件搜索 按esc键 将焦点至焦到编辑器
* 修复 某些环境下 首次展开项目管理器文件夹，文件夹行高异常显示的Bug
* 修复 全部替换后，按下`Ctrl+S`, 替换内容没有保存的Bug
* 修复 某些情况下，`Ctrl+W`关闭标签卡后，编辑器焦点丢失的Bug
* 优化 Mac 新建项目窗口UI
* 修复 vue文件 当data中存在class关键字时，导致代码块无法提示的Bug [详情](https://ask.dcloud.net.cn/question/90265)
* 新增 App manifest.json SDK配置 Android自动添加第三方SDK需要的权限
* 修复 App manifest.json 云打包操作导致文件内容格式变化的Bug

## 2.6.1.20200226
* 修复 uniapp框架的一些Bug

## 2.6.0.20200223
* 修复 uniapp框架的一些Bug

## 2.5.1.20200103
* 新增 CSS 颜色预览功能 （可Alt+左键，进一步打开颜色选择器）
* 新增 记忆文件折叠状态 （默认关闭；可在【设置】-【编辑器配置】，启用记忆折叠状态）
* 新增 支持WebP格式的图片预览
* 新增 dart、tpl语言代码高亮着色
* 优化 语法提示  es6部分语法 代码提示、转到定义
* 优化 语法提示 补充一批新的 CSS 语法
* 优化 语法提示 vuedoc 支持属性值域描述
* 修复 语法提示 vuedoc nvue中不支持组件语法提示的Bug
* 修复 语法提示 项目下文件过多时，文件路径偶发不提示当前目录下文件的Bug
* 修复 智能回车 js语言，在对象变量行尾回车，自动补充逗号的Bug
* 修复 智能粘贴 某些情况下内容显示成一行的Bug
* 修复 js、html文件，关联JavaScript(ES6+)、HTML（es6+）后，右键菜单【验证本文档语法】失效的Bug
* 修复 自定义代码块 在$1处输入中文之后，使用Tab无法切换到$2处继续编辑的Bug [详情](https://ask.dcloud.net.cn/question/85981)
* 修复 自定义代码块 用户目录下存在不合规范的文件名时造成崩溃的Bug
* 修复 某些情况下 语言服务偶发退出的Bug
* 新增 标签卡右键菜单，增加打开文件所在位置
* 优化 文件关闭后，再次打开，光标显示在上次的位置
* 修复 多光标撤销、恢复撤销操作，光标位置错误的Bug
* 修复 打开查找索引界面后，编辑器光标仍然闪动的Bug
* 修复 多文件字符串搜索，搜索栏重绘导致CPU使用率过高的Bug
* 修复 字符串搜索，焦点在编辑器且文件被改变时，清除搜索结果指示器的Bug
* 修复 Window10 搜索框，微软输入法快速输入时偶发异常的Bug [详情](https://ask.dcloud.net.cn/question/84147)
* 修复 焦点在项目管理器上时，按 Ctrl+Alt+f 多文件搜索时没有按选中文件搜索的Bug
* 修复 格式化 光标在中文附近时，格式化后光标位置跑到开头的Bug [详情](https://ask.dcloud.net.cn/question/84634)
* 修复 折叠 快捷键触发折叠时折叠框的大小不正确的Bug
* 修复 折叠 当某块代码包含多行注释或条件编译时，导致折叠出错的Bug
* 修复 折叠 在独立单行内容上，按下折叠快捷键，行尾出现折叠指示器的Bug
* 修复 拖动标签卡到窗体外面的窗口，修改文件后标签卡状态错误的Bug
* 修复 悬停预览代码后，某些情况下，无法撤销恢复已修改内容的Bug
* 修复 控制台打印时间，某些情况下显示为其它语言格式的Bug
* 修复 在屏幕分辨率低于1024x768的电脑上，首次启动后，顶部菜单栏被遮挡的Bug[详情](https://ask.dcloud.net.cn/question/82376)
* 修复 欢迎页面 高分辨率屏幕上HBuilderX图标过大的的Bug
* 修复 欢迎页面 点击收藏，编辑器崩溃的Bug
* 修复 Mac 搜索文件结果列表，上下键无效的Bug
* 修复 Mac 项目管理器，项目上右键菜单点击【字符搜索】某些情况下无效的Bug
* 修复 Mac 多文件字符搜索，当焦点错误时，输入搜索内容回车，编辑器崩溃的Bug
* 修复 Mac 终端超时设置的最大数时，在弹框提醒中选择【修改设置】崩溃的Bug
* 新增 uni-app 项目js中可以提示浏览器的api
* 新增 uni-app 控制台 增加重启手机应用功能，无需再次编译，软重启手机App
* 新增 uni-app manifest.json App常用其它配置 编译模式添加【v3编译器】和【fast启动模式】
* 新增 App manifest.json SDK配置 增加苹果登录选项
* 修复 App manifest.json 原生插件列表顺序没有按照配置文件中的顺序排列的Bug

## 2.4.6.20191210
* 修复 鼠标悬停预览代码后，导致撤销失效的Bug

## 2.4.5.20191209
* 新增 查找索引符号，可快速查找函数、变量、markdown标题等文档结构图中的内容 （快捷键 Ctrl+Shift+o）
* 新增 鼠标悬停在代码折叠后的省略号处，可悬浮预览被折叠内容
* 优化 文件路径提示
* 优化 字符搜索的性能和指示器样式
* 优化 字符搜索时点击大小写、全词匹配等操作时自动触发重新搜索
* 优化 文件搜索的性能，补充匹配字符高亮
* 修复 某些情况下，git/svn项目，更新代码或切换分支后，文件内容没有更新的Bug
* 修复 无标题文档不更新title的Bug
* 修复 某些情况下，状态栏语言名称丢失的Bug
* 修复 初次修改文档，中文输入法输入卡顿的Bug
* 修复 当文件第一行是空行时，再次打开编辑器折叠计算错误的Bug
* 修复 通过拖拽分栏后的tabbar背景色不正确的Bug
* 修复 某些情况下，分左右两栏，没有对齐的Bug
* 修复 vscode快捷键方案，搜索上一个/下一个字符，快捷键显示错误的Bug
* 修复 win7 安装插件窗口滚动条过细的Bug
* 修复 win7 QQ输入法输入单引号时触发移动光标的Bug
* 修复 项目管理器，焦点在目录文件上时，按Ctrl+Shift+c复制路径不生效的Bug
* 修复 打开WebView调试控制台，菜单状态错误的Bug
* 删除 uni-app项目的manifest.json可视化视图删除自定义组件模式选择，因为已不再支持非自定组件模式

## 2.4.2.20191115
* 修复 uniapp框架的一些Bug

## 2.4.1.20191114
* 新增 迷你地图（右侧缩略图，可在滚动条右键菜单开启关闭，快捷键 win: Alt+o；mac: Ctrl+o）
* 新增 鼠标悬停在滚动条或迷你地图的非当前页区域时，小窗预览指示文档
* 新增 JSON文件 支持文档结构图。包括uni-app的pages.json的文档结构图（快捷键 win: Alt+w；mac: Ctrl+w）
* 新增 编辑器标签卡超出一屏时，支持鼠标滚轮横向滚动标签卡
* 新增 底部状态栏新增文档结构图、终端两个快捷按钮
* 修复 预览状态下打开文档结构图后，点击文档结构图的item跳转到编辑器对应位置时焦点不在编辑器上的Bug
* 修复 修改文件触发自动保存时，再次撤销成未修改状态时，切换标签卡时提示临时文件需要恢复的Bug
* 修复 Vue文件 {{}} 附近输入中文￥自动转换成$的Bug
* 修复 已关闭项目丢失项目别名的Bug
* 修复 某些情况下初次自定义代码块未生效的Bug
* 优化 设置过自定义代码块的语言，自动显示在【代码块设置】菜单列表中，无需再次查找
* 修复 SVN/Git项目导入，输入url后回车，当前窗口被关闭的Bug
* 修复 对运行中的项目，右键菜单操作【关闭项目】造成崩溃闪退的Bug
* 修复 日志文件积累时间较长后，造成占用硬盘空间过大的Bug
* 优化 加快某些大文档在外部变更后重新渲染的速度
* 优化 打开较多文档时主题切换的速度
* 修复 跳转到指定行，代码没有展开折叠的Bug
* 修复 触发全部折叠时行尾的折叠指示器框大小不对的Bug
* 优化 文字搜索右侧显示搜索结果的数字指示
* 修复 小屏幕（高度为768像素）下一些界面适配的Bug
* 修复 vscode快捷键方案，eslint校验，跳转到下一个错误，快捷键错误的Bug
* 优化 更新逻辑，非app用户不会收到app插件更新通知
* 修复 Windows 分栏时编辑器焦点切换时标签卡title背景色没有变化的Bug
* 修复 Mac Command+m 无法最小化窗体的Bug
* 修复 Mac 暗色主题下，弹窗文字颜色看不清的Bug
* 修复 Mac 10.15 右键菜单字体异常的Bug
* 优化 Mac app运行到iOS模拟器，自动记忆上次运行的模拟器
* 调整 删除快应用发布的菜单，请在快应用官方工具发布快应用
* 优化 App打包 提供更清晰的界面指示、完善提示语
* 新增 App打包 支持新的Android公共测试证书 [详情](https://ask.dcloud.net.cn/article/68)
* 新增 uni-app 新建页面时允许不创建同名目录

## 2.3.7.20191024
* 修复 Vuex mapState mapActions mapMutations 映射的函数属性无法转到定义和无法提示的Bug
* 修复 html 连续编写有默认值的属性时(例如 autocomplete accesskey等)， 覆盖位置不对的Bug
* 优化 uni-app globaldata代码提示及转到定义
* 新增 App打包 对manifest中的iOS通用链接进行前置校验

## 2.3.6.20191021
* 修复 uniapp框架的一些Bug

## 2.3.5.20191018
* 新增 Vuex、Vue-Router代码提示
* 新增 本地历史记录功能。（右键菜单-本地历史记录。并可在【设置】-【常用配置】，调整最大文件数量等参数）
* 新增 首次启动显示欢迎向导
* 新增 预览图片时，状态栏右下角显示图片的文件大小和像素尺寸
* 修复 文件保存时恰好设备断电导致文件损坏的Bug
* 优化 自动保存临时文件的策略。取消固定周期保存临时文件，更改为内容变更后自动保存，同时删除了【设置】中的`自动保存临时文件周期`配置项
* 修复 某些情况下HBulderX更新失败的Bug
* 修复 当项目存在时，拖入一个相同项目导致崩溃的Bug
* 优化 折叠 点击右侧折叠方框可展开折叠
* 优化 文件搜索，列表隐藏时关闭进度条
* 优化 Alt+鼠标左键转到定义时，无需移动鼠标也能触发显示下划线
* 修复 某些情况下因字体渲染导致方法参数提示窗口位置异常的Bug
* 修复 当设置编辑器处于懒加载的状态时，切换到设置时由于记录焦点变换造成的崩溃Bug
* 修复 nvue文件 import from 导入组件，无法转到定义的Bug
* 修复 nvue文件 uni-app生命周期函数内，调用method方法，转到定义失败的Bug
* 修复 App真机运行 iOS 项目文件过多的情况下，同步文件失败的Bug
* 修复 App真机运行 Mac 运行控制台打印的日志时间没有对齐的Bug
* 修复 App真机运行 某些情况下xcode模拟器无法自动启动的Bug
* 新增 App云端打包 本地校验证书密码，减少证书密码错误造成的无效打包
* 优化 App云端打包 界面文字描述以及布局，明确显示版本号，减少版本号相同引发的无效打包
* 新增 uni-app manifest.json H5发行时是否自动裁剪没有使用的组件和API的配置

## 2.3.3.20190923
* 修复 uniapp框架的一些Bug

## 2.3.2.20190921
* 修复 uni-app iOS13以下系统 无法启动debugger的Bug
* 修复 uni-app manifest中未设置组件编译模式时无法启动debugger的Bug

## 2.3.1.20190920
* 修复 uniapp框架的一些Bug

## 2.3.0.20190919
* 新增 windows 沉浸式标题栏。统一标题栏和界面主题的颜色，增加窗体内容区的高度（可在设置中切换回普通标题栏）
* 优化 html中vue的代码提示、转到定义
* 新增 点击右侧滚动条信息点，直达对应位置
* 新增 支持vue cli web项目直接在内置浏览器中预览（如未npm install，需先执行）
* 新增 Windows 程序关闭前，提示是否创建桌面快捷方式
* 新增 Eclipse快捷键方案切换【菜单-工具-快捷键切换】
* 新增 智能双击 双击选中es6模板字符串功能
* 新增 识别支付宝、百度、头条、QQ小程序文件
* 新增 代码提示 支持支付宝小程序数据、更新微信小程序最新数据。在uni-app项目中自动加载，在其他项目中，手动在状态栏的代码提示库中选择
* 优化 折叠的图标样式
* 优化 断电时正在写入的文件损坏的概率
* 优化 代码高亮 酷黑主题的代码选中背景色
* 修复 已关闭工程列表展开状态下关闭程序, 再次启动程序后已关闭工程列表位置显示错误的Bug
* 修复 Mac 多光标取消 `command + 右键` 弹出右键菜单的Bug
* 修复 预览窗口打开时，新打开文件，弹出对话框导致欢迎页面UI文字重叠显示的Bug
* 修复 markdown 列表前缀后按BackSpace无法整体删除列表符的Bug
* 修复 代码高亮 HTML文件中js字符串多行显示时的着色及es6模板字符串在酷黑主题下着色异常的Bug
* 修复 历史剪贴板的多行内容粘贴时变成了一行的Bug
* 修复 scss/less 选择器嵌套的代码内容中无法提示CSS属性的Bug
* 修复 scss 代码提示 无法提示!default的Bug
* 修复 Windows 进入全屏模式后，底部操作系统的工具栏仍然存在的Bug
* 修复 窗口最大化时通过打开方式打开文件时窗口状态不正确的Bug
* 新增 nvue文件关联
* 修复 调用npm运行时npm路径初始化不正确的bug
* 新增 App 真机运行 支持iOS13
* 新增 App manifest可视化界面 增加iOS13的蓝牙配置项
* 优化 真机运行 Mac通过WiFi连接的iOS手机不再显示在运行列表中
* 新增 uni-app 真机运行 支持nvue文件保存后直接刷新App页面，不用重启应用，提升调试速度
* 修复 uni-app nvue文件 代码助手无法提示uni-app生命周期的Bug
* 新增 uni-app manifest可视化界面 增加nvue页面编译模式
* 修复 uni-app 在其它文件中，uni.scss定义的全局变量无法提示的Bug

## 2.2.2.20190816
* 优化 项目外的单独文件的代码提示
* 修复 项目外的单独文件预览不自动刷新的Bug
* 修复 html中 vue自定义组件属性高亮不对的Bug
* 修复 `alt+/`触发代码助手和方法参数提示时，两个窗口位置出现重叠的Bug
* 修复 中文输入法下菜单的&快捷键不生效的Bug
* 优化 酷黑主题 代码选中背景色
* 新增 `shift+滚轮`，横向滚动一页。之前的 `alt+滚轮` 是横向滚动3列

## 2.2.1.20190813
* 修复 部分情况下 node插件安装状态错误的Bug
* 修复 部分情况下 HBuilderX启动后只出现图标，窗口无法显示的Bug
* 新增 manifest可视化界面 添加Android选择CPU的设置

## 2.2.0.20190812
* 优化 html中vue的代码提示、转到定义
* 新增 eslint 支持项目下配置文件（项目下需安装eslint库，并且HBuilderX的插件管理中需要安装eslint插件）
* 新增 eslint 状态栏显示校验错误时，支持一键修复
* 新增 行号右键菜单
* 新增 文件名搜索 `Ctrl+p` 支持空格后继续输入文件路径，如 `index myapp/pages`，支持模糊匹配，方便快速过滤查找目标文件；并支持右侧配置忽略目录
* 优化 文件搜索结果优化排序，优先展示当前项目的文件
* 新增 字符搜索，支持多光标"全选"所有搜索结果 `Alt+Enter`，搭配正则后可大幅提升修改文档的效率
* 修复 字符搜索，正则表达式匹配不准的Bug
* 优化 字符搜索(多文件)，可搜索非UTF-8编码文件中的中文（优于其他国外工具）
* 修复 字符搜索(多文件)，输入搜索内容后，在键盘上按下page down或下箭头，显示no history的Bug
* 修复 字符搜索(多文件)，不停的按回车显示多行搜索结果的Bug
* 优化 字符搜索(多文件)，搜索结果列表页面，当前文件处于已编辑状态时进行提示
* 优化 项目管理器 输入字母，快速定位目录/文件
* 优化 酷黑和雅蓝主题细节
* 优化 不同搜索类型的图标进一步区分清晰
* 新增 less/scss支持显示文档结构图
* 优化 scss/less 代码提示，并增加了一些常用代码块
* 修复 scss 输入`@`，代码助手回车后, 显示两个`@`符号的Bug
* 修复 scss 当文件路径包含中文时，scss编译后，控制台中文显示乱码的Bug
* 优化 dom及jquery代码提示和转到定义，完善度已超过上一代HBuilder，请老用户尽快升级
* 修复 css的class转到定义某些情况下位置不正确的Bug
* 修复 代码提示 通过Vue.component注册的全局组件内的属性、事件以及vuedoc不生效的Bug
* 修复 代码提示 js中定义的class类以及构造函数，在new的时候不提示的Bug
* 修复 代码提示 js中箭头函数内的对象解构参数在函数体内不提示的Bug
* 修复 某些情况下js require或import某个模块后无法提示和转到定义的Bug
* 修复 php 输入$，代码助手回车后, 显示两个$符号的Bug
* 修复 格式化 当HBuilderX程序安装目录存在空格，格式化php，执行失败的Bug
* 修复 某些情况下语法校验错误波浪线不显示的Bug
* 修复 粘贴 多光标分别粘贴多段内容时，若内容含回车则无法分段粘贴的Bug
* 优化 粘贴 自动调整缩进。包括从外部复制代码、首行带缩进等情况。按Ctrl+z可撤销缩进调整
* 修复 多窗口 在新打开的窗口中，保存时不会触发语法校验的Bug
* 修复 多窗口 关闭主窗口，在单窗口打开目录失败的Bug
* 修复 多窗口 关闭某个窗口后点击视图菜单后崩溃的Bug
* 修复 在编辑器内打开文件，当文件在外部被修改时，可能造成HBuilderX无限弹框的Bug
* 修复 在编辑器内打开文件，同时在外部使用git、svn拉取，某些情况下，编辑器内已打开文件内容没有更新的Bug [详情](https://ask.dcloud.net.cn/question/75071)
* 优化 终端 默认打开目录的逻辑，如果当前文件在项目下，默认打开项目的根目录
* 新增 支持切换【Ctrl+鼠标左键】或【Alt+鼠标左键】进行多光标插入（菜单【选择】），对应的，转到定义可使用【Ctrl+鼠标左键】
* 调整 快捷键 `Ctrl+Shift+z` 转移给“重做”功能，“撤销上一个选区”的快捷键改为 `Alt+Shift+z`
* 优化 快捷键 其他工具快捷键方案，补齐注释、条件编译注释的快捷键
* 修复 js 块注释无法折叠的Bug
* 优化 已关闭项目列表中，过滤本地被删除的项目；选中项目，右键菜单增加移除操作
* 优化 markdown预览支持将任务列表渲染为checkbox
* 修复 部分情况下，真机运行插件安装状态错误的Bug [详情](https://ask.dcloud.net.cn/question/75745)
* 修复 云打包 某些情况下，获取不到基座版本号，导致打包错误的Bug
* 修复 Mac SVN项目，当文件名带有@符号时，提交失败的Bug
* 修复 Mac 项目文件发生变化时，以点开头的文件不显示的Bug
* 修复 Mac 免打扰模式，工具栏被系统顶部菜单遮挡的Bug
* 修复 Mac manifest.json 关闭卡顿的Bug
* 修复 Mac manifest.json Android打包权限配置窗口滚动卡顿的Bug
* 修复 manifest uni-app未设置编译模式时默认值显示错误的Bug
* 删除 app类项目 manifest.json -> SDK配置 微信登录中没有使用到的appsecret参数
* 新增 uni-app 中添加了 `uAlert` 和 `uConfirm` 代码块
* 修复 uni-app debug 因电脑存在多个IP，导致调试失败的Bug
* 修复 uni-app debug 未启动完成时，点击停止运行崩溃的Bug
* 新增 在视图菜单和Mac Dock栏右键菜单 添加uni-debug窗口切换功能
* 新增 【重要】uni-app 支持编辑器直接打断点同步到App调试控制台。在`uni-app`手机端debug启动后，在文档行号处点右键操作，可同步断点到debug窗体的source断点区域
* 新增 【重要】uni-app 支持运行和发布到QQ小程序
* 新增 【重要】uni-app 自定义运行和发布平台（如钉钉小程序、h5-weixin） [详情](https://uniapp.dcloud.io/collocation/package)

## 2.1.3.20190724
* 修复 Mac svn/git插件 某些菜单不显示的Bug
* 优化 .editorconfig文件内容高亮显示

## 2.1.1.20190716
* 修复 终端命令分隔符不对导致运行npm命令失效的Bug
* 修复 Node.js插件依赖的node_module安装失败后，插件仍然被当做已安装成功的Bug

## 2.1.0.20190713
* 新增 内置预览浏览器 支持手机模式、默认跨域（无需装插件）、支持右键审查元素、支持地理位置模拟
* 新增 多文件字符搜索功能，支持快速选择当前项目、所有项目，支持项目管理器选择多个文件或文件夹搜索，支持搜索过滤条件，支持文件类型的黑白名单（如只搜索js文件或不搜json文件），支持排除的目录
* 新增 stylus语言服务，支持代码提示、转到定义、选择相同变量，无需安装插件
* 新增 stylus格式化插件
* 新增 支持editorconfig配置，项目下带有.editorconfig文件时会依据该配置调整编辑器的缩进等风格策略 [教程](https://ask.dcloud.net.cn/article/36070)
* 新增 项目关闭。不常用的项目可以临时关闭，折叠到项目管理器底部，并不再索引这些项目
* 新增 通过鼠标的后退前进按钮，触发编辑器光标历史的移动及内置浏览器的网页切换
* 新增 关闭所有标签卡时展示引导页面
* 优化 分栏 支持拖拽标签卡操作分栏
* 优化 js中dom选择器以及jqurey的$()中的代码提示
* 优化 html、vue文档结构图性能
* 优化 windows进入免打扰模式后，提示用户如何退出模式，避免误触F11后无法还原
* 修复 升级时偶发某些插件升级失败的Bug
* 修复 复制编辑器时，再打开新的预览文件时会同步更新另一个编辑器的Bug
* 修复 复制编辑器时，行号的宽度不正确的Bug
* 修复 通过Alt+Shift+上/下产生多光标，此时按Esc，无法去掉多光标状态的Bug
* 修复 注释 多行注释中包括空行时无法反注释的Bug
* 修复 注释 html、markdown的注释里敲回车时错误补充*的Bug
* 修复 注释 `/**`生成jsdoc时某些情况下匹配的参数不对的Bug
* 修复 终端 Mac下因环境变量问题，终端启动后，某些命令无法使用的Bug
* 修复 终端 Windows下有时终端首次显示不全的Bug
* 修复 终端 打开内置终端，会自动再开一个空的控制台的Bug
* 修复 终端 非项目内的文件点右键打开命令行，会打开外部终端的Bug
* 修复 终端 Windows 隐藏内置终端后，右键菜单点击【使用命令行窗口打开所在目录】没有响应的Bug
* 修复 Mac 某些情况下，复制选区或当前行功能无法使用的Bug
* 修复 因某些非打印字符导致的文档保存不正确的Bug
* 修复 单窗口弹出自动下载语言对话框导致无法点击其它区域的Bug
* 修复 当多个窗体时，windows任务栏上，点击关闭某个窗体崩溃的Bug
* 修复 提示方法代码块时取消不会隐藏代码助手，关闭文件再点击导致崩溃的Bug
* 修复 某些情况下，Node.js插件(如eslint)安装失败的Bug
* 修复 超长文本搜索，工具栏显示异常的Bug
* 修复 html中引用的css地址带参数时，class无法转到定义的Bug
* 修复 url以`//`开头无法跳转的Bug
* 修复 html中es6模板字符串跨行着色的Bug
* 修复 vue指令属性带_时高亮不正确的Bug
* 修复 vue `<script type="text/ecmascript-6">`中注释错误以及不高亮的Bug
* 修复 当文件存在base64超长文本时，输入某些特殊字符造成卡顿的Bug
* 修复 Mac 运行自定义基座，找不到java时，运行失败的Bug
* 修复 Mac 插件市场，下载组件解压失败的Bug
* 修复 打包界面服务器返回异常，有时出现横向滚动条的Bug
* 修复 点击控制台运行时有时候提示请选择正确的项目类型的Bug
* 新增 uni-app 点击界面右上角预览时，自动编译项目到H5端并显示在内置浏览器中
* 调整 uni-app 运行到chrome时默认ip修改为localhost，避免定位等API在非Https下无法使用的问题
* 新增 uni-app px转rpx自动换算，在设置中配置转换比例，代码中敲px时代码助手会列出计算过的rpx值
* 修复 uni-app cli项目的控制台日志输出，无法点击转到源文件的Bug
* 新增 uni-app manifest.json, App SDK配置，可视化界面增加百度地图
* 修复 uni-app manifest.json, 插件配置，复制参数值导致崩溃的Bug

## 2.0.1.20190614
* 修复 PHP语言服务需要配置PHP环境的问题，自带了一个PHP环境到插件中，并解决之前配置依赖不生效的Bug
* 修复 单项目窗体，创建项目跑到主窗口的Bug
* 修复 emmet某些情况下中文乱码的Bug

## 2.0.0.20190610
* 【重要】新增 Android支持多渠道打包 [详情](https://ask.dcloud.net.cn/article/35974)。发布到Google Play Store，必须选对应渠道包，否则会无法上架！
* 新增 php语言服务，包括语法提示和转到定义（需要在插件安装中安装插件）
* 新增 PHP格式化插件(php cs fixer)
* 新增 置焦项目管理器快捷键【Win: Alt+Shift+Q，Mac：Ctrl+Shift+Q】
* 新增 多窗口之间切换的快捷键【alt + `】
* 新增 右键菜单 - 使用命令行窗口打开所在目录，可以选择在内置终端或外部终端中打开（设置-运行设置里选择）
* 优化 html标签，输入`>`，自动补全闭合标签
* 修复 多窗口下，真机运行控制台混乱的Bug
* 优化 打包成功时，控制台下载链接，区分iOS、Android打包类型
* 修复 某种情况下，因获取打包状态错误，导致下载安装包命名错误的Bug
* 修复 markdown 删除代码区时背景色仍保留一行的Bug
* 修复 单行超长时（如含有base64超长字符），移动光标、滚动会卡顿的Bug
* 修复 双击标签卡无法全屏的Bug
* 修复 窗口位置在屏幕左侧以外时，关闭后下次再打开丢失标签卡的Bug
* 优化 撤销 一次撤销太多内容的逻辑，支持按空格分段撤销，超过2秒间隔不一并撤销
* 优化 项目管理器 支持键盘操作，包括上下左右箭头、pg up/down、Home、End、*键
* 修复 Mac 项目管理器上按回车触发了重命名的Bug
* 优化 Win版内置浏览器升级为Chrome71
* 优化 运行node命令时可选择使用内置终端或外部终端
* 修复 windows内置终端，无法Ctrl+c Ctrl+v复制粘贴的Bug（逻辑同powershell）
* 优化 typescript的方法参数提示
* 优化 新建自定义文件，输入文件名敲`.`时，如果光标后面还是`.`，则第一次输入`.`时自动右移光标
* 优化 manifest图标配置
* 优化 manifest可视化视图，新增`App常用其他设置`，包括scheme、targetSdkVersion、背景音频的可视化设置，新增自定义组件编译模式的可视化设置
* 修复 在部分语言文件中，双击单词，会把前后的“-”一起选中的Bug
* 优化 云打包时若HBuilderX版本与打包服务器不匹配，提示各自的版本号信息
* 新增 uni-app 插件大赛一等奖获奖作品内置到新建项目模板中 [详情](https://ask.dcloud.net.cn/article/35939)
* 修复 uni-app 新建组件重名覆盖的Bug
* 优化 uni-app 新建页面，可选择是否同时添加路由信息到pages.json、可选择添加到pages.json的主包或分包、可选择是否同时创建nvue文件

## 1.9.9.20190522
* 修复 uniapp框架的一些Bug

## 1.9.8.20190518
* 修复 uniapp框架的一些Bug

## 1.9.7.20190517
* 新增 真机运行，uni-app自定义组件编译模式，支持控制台打印对象的功能，支持超过4k的日志输出。提升App调试便利度
* 新增 单项目窗体模式 (对项目点击右键, 选择【在新窗体中打开】)，多个窗体间切换的快捷键是【Ctrl+F6】。注意只有一个主窗体，其他窗体均为单项目窗体
* 新增 Windows任务栏右键菜单，打开历史项目窗体和历史文件
* 新增 NodeJs语法提示（如项目下有package.json会自动加载提示库，如没有，需在编辑器右下角点击【语法提示库】选择nodejs）
* 新增 右键菜单，增加转到定义【Alt+鼠标左键或F12】、选择相同变量
* 调整 项目管理器默认图标主题从无图标调整为HBuilderX图标，并补充一批图标。可在菜单工具-项目管理器图标主题中切换
* 修复 新建项目未记忆上次路径的Bug
* 优化 文档结构图，自动和编辑器光标同步
* 优化 F3时如没有选中词，执行向下搜索的逻辑
* 优化 代码助手的快捷键【Alt+/】同时弹出方法参数提示窗口，无需单独记忆快捷键和点右键菜单
* 修复 因折叠导致的滚动条信息点位置不对的Bug
* 优化 代码块 自定义代码块时可以查看该语言内置的代码块
* 修复 代码块 在文件开始位置代码块列表提示不全的Bug
* 修复 非全局JSDoc注释含有中文时，提示的描述信息乱码的Bug
* 修复 markdown代码区没有背景色的Bug
* 优化 酷黑主题控制台tab选中和未选中时的前景颜色
* 修复 Mac 免打扰模式下，编辑器首行看不到的Bug
* 修复 Mac 设置界面无法选择可执行程序的Bug(例如adb)
* 修复 插件市场 使用HBuilderX导入, 插件文件名带有中文时, 文件名乱码的Bug
* 优化 manifest可视化界面的提示
* 修复 pages.json文件使用条件编译为不同平台设置相同key时项目无法运行的Bug
* 修复 pages.json格式错误时，点击无法跳转的Bug
* 新增 uniapp打包和发布, 添加小程序开发工具验证
* 修复 uniapp运行到h5时路由模式为history时地址错误的Bug

## 1.9.4.20190426
* 修复 代码助手某些情况下崩溃的bug
* 修复 方法参数提示出现嵌套函数时显示参数信息不对的bug
* 修复 代码块插入后缩进和当前文件缩进不一致的bug
* 修复 manifest中appid为空时，无法保存其它内容的bug
* 修复 内置终端某些环境变量不对的bug
* 修复 clear/cls命令导致内置终端布局错乱的bug
* 调整 项目管理器仅有一个项目时，右侧标签卡与项目管理器联动。可在项目管理器右上角悬浮菜单中调节联动策略 [详情](https://ask.dcloud.net.cn/article/35885)
* 调整 控制台右键菜单，将“清空控制台”恢复为第一个
* 新增 代码助手字体大小调节。设置-编辑器配置-代码助手字体大小
* 优化 代码助手右侧内容提示信息排版
* 优化 js函数前输入/**回车自动生成jsdoc结构
* 优化 支持jsdoc内提示@param等注释关键字

## 1.9.3.20190422
* 新增 显示js方法参数提示的功能 (右键菜单，显示方法参数提示【Shift+Alt+/】)
* 新增 控制台，添加运行/重新运行【Ctrl+f5】和停止运行【Ctrl+Shift+f5】快捷键及控制台菜单
* 修复 win7 部分情况无法使用终端的bug
* 修复 目录内搜索时间过长时，关闭搜索结果编辑器，更新结果会崩溃的bug
* 修复 创建空项目时，提示创建失败的bug
* 调整 Mac 隐藏控制台/终端的快捷键调整为【Ctrl+Shift+c】，避免与ctrl+c停止终端命令冲突
* 优化 注释 多行行注释时注释符开始位置从行首调整为最小缩进处，避免格式化后缩进不对
* 优化 书签图标清晰度
* 优化 在编辑器中一直按ESC，可依次隐藏底部控制台、右侧预览窗体
* 优化 Ctrl+tab 切换标签卡时，支持按上下键切换标签卡
* 修复 代码助手 颜色项目高亮时显示颜色不对的bug
* 修复 代码助手 敲引号候选列表出现又消失的bug
* 优化 代码助手 界面排版
* 优化 移除项目到回收站，同时关闭此项目中已经打开的文件
* 优化 合并行，在html区域合并时行间追加空格，防止属性之间没有空格
* 优化 编辑区主题切换响应时间
* 修复 真机运行自定义基座某些情况无法运行的bug
* 优化 uni-app运行时在控制台说明cli编译器、自定义基座版本号。版本匹配说明[详见](https://ask.dcloud.net.cn/article/35627)

## 1.9.2.20190417
* 修复 uniapp框架的一些Bug

## 1.9.1.20190415
* 修复 uniapp框架的一些Bug

## 1.9.0.20190412
* 新增 【重要】支持 vue doc，支持组件语法提示。 [参考](https://ask.dcloud.net.cn/article/35814)
* 新增 通过[插件市场](https://ext.dcloud.net.cn/)网页直接启动HBuilderX并导入插件
* 调整 【重要】uni-app项目nativeplugins目录下的插件，云打包时不再默认集成，需要在 manifest-App原生插件 里进行二次勾选，才会打包生效
* 新增 重新运行的快捷键【Ctrl+F5】
* 新增 主题颜色自定义，[参考](https://ask.dcloud.net.cn/article/35776)
* 新增 markdown code区域代码指定语言后支持高亮着色
* 优化 雅蓝主题下若干视觉效果，补齐缺失的语言着色
* 优化 新建项目、插件安装，增加进度通知
* 修复 F3偶发崩溃的bug
* 修复 Mac Mojave系统，删除文件或文件夹报错的bug
* 修复 HTML(ES6)、JavaScript(ES6)下代码块不提示的bug
* 修复 jsdoc注释/**后回车，即使已经有注释仍然生成新注释结构的bug
* 修复 真机运行 报workspace is closed错误的bug
* 修复 真机运行，Mac端文件同步两次的bug

## 1.8.2.20190401
* 修复 绿柔主题下，webview调试控制台，字体显示白色的Bug

## 1.8.1.20190330
* 修复 uniapp框架的一些Bug

## 1.8.0.20190330
* 新增 主题 雅蓝
* 新增 快捷键方案提供idea/webstorm快捷键
* 新增 兼容vetur中vue-tag提示规范，支持Element UI、Onsen UI、Bootstrap Vue等框架标签提示
* 修复 某些操作次数过多时造成崩溃的bug
* 优化 自动保存临时文件的逻辑，崩溃断电时保护好未保存的文件
* 优化 选择相同语法词【win:ctrl+shift+e / mac:command+shift+d】，可精准选择某变量、样式的所有引用处，方便查看逻辑关系，方便重构变量、样式名称（选中后在右下角可看到选区数量）。[详情](https://ask.dcloud.net.cn/article/35732)
* 新增 左右移动标签卡【win:ctrl+shift+pagedown / mac:command+shift+pagedown】
* 优化 切换到第10个标签卡 调整为 切换到最末尾的标签卡【win:alt+0 / mac:command+0】
* 优化 标签卡右键菜单，补充分栏快捷操作
* 优化 光标在条件编译区域时，突出显示首尾行的指示器
* 优化 支持多光标同时设置和取消书签【win:ctrl+f2 / mac:command+f2】
* 优化 svn/git mac 提交commit操作提供了可视化界面
* 修复 svn/git 导入时目录路径中存在空格时的bug
* 修复 svn/git 提交文件时路径中存在空格时报错的bug
* 修复 代码助手在编辑器最右侧时显示不全的bug
* 修复 升级失败后又提示升级的bug
* 修复 html、vue中写js时敲空格触发代码块提示的bug
* 修复 html_es6编辑器里js和css注释错误的bug
* 修复 js箭头函数参数变量引用处无法转到定义的bug
* 修复 设置 项目管理器过滤配置，清除默认值后，项目下以点开头的文件夹仍无法显示的bug
* 修复 App打自定义基座包时自动修改version.name的bug

## 1.7.0.20190314
* 新增 js语法提示支持含有d.ts的三方库
* 新增 mac svn/git 查看日志功能
* 新增 mac svn/git 文件对比功能
* 优化 mac svn/git 完善部分命令的调用
* 修复 svn 某些情况下目录状态不刷新的bug
* 优化 svn/git 项目文件状态，增加冲突文件的状态显示
* 优化 快捷键设置 新增svn/git相关快捷键命令，可复制到右侧自行配置快捷键
* 优化 终端 windows下的性能
* 修复 终端 windows下某些输入法无法输入中文的bug
* 修复 终端 某些配色看不清的bug
* 修复 终端 win7下缺少powershell时打不开的bug
* 优化 多个单光标，通过选相同词，可选择每个光标的当前词
* 修复 在部分windows系统上，由于Qt冲突导致无法启动的bug
* 修复 vue中标签属性名带_时着色不正确的bug
* 修复 某些情况下语法提示服务自动关闭的bug
* 优化 长时间使用后会崩溃闪退
* 新增 uni-app cli项目，支持打包App（老版cli需通过命令npm update升级）
* 新增 uni-app cli项目，支持使用HBuilderX基础版开发，即uni-app插件被安装到项目下而不是HBuilderX的插件目录下
* 新增 uni-app cli项目，相应目录右键菜单支持新建页面、新建组件
* 优化 uni-app cli项目，page.json中路径配置
* 修复 pages.json存在条件编译代码时，新建页面导致条件编译混乱的bug
* 修复 某些情况下真机运行时删除项目导致崩溃的bug
* 优化 云打包，包名校验与错误提示

## 1.6.2.20190220
* 新增 TypeScript语言服务插件，支持代码提示、转到定义
* 新增 设置 支持英文和中文单独字体设置，如英文设为Consolas，中文设为雅黑
* 新增 项目管理器和文件右键菜单 svn项目显示svn操作菜单，git项目显示git操作菜单
* 新增 mac 在项目管理器显示git/svn状态(安装相应插件后)
* 新增 mac svn或git项目，新增文件版本对比
* 调整 mac 工具和关于的部分菜单项目，移动到左上角HBuilderX菜单里
* 修复 mac web项目运行到浏览器时路径含有中文报404的bug
* 修复 某些情况下报java错误的bug
* 修复 scss/sass编译插件偶发安装失败的bug
* 新增 关闭右侧标签卡、关闭所有已保存标签卡
* 修复 更新失败后弹框内容为空的bug
* 优化 禁用vue的comment-directive规则校验
* 修复 app打包界面在小屏幕上底部按钮无法显示的bug
* 修复 插件安装列表uniapp插件显示“安装”问题
* 修复 代码助手 引用图片或文件，无法提示绝对路径的bug

## 1.5.4.20190127
* 新增 Android启动图片可以配置.9.png[教程](https://ask.dcloud.net.cn/article/35527)
* 修复 真机联调偶发断开连接的bug
* 修复 本地提交云打包因超时问题,提交失败的bug
* 修复 发布功能配置快捷键不生效的bug
* 修复 prettier格式化插件, 格式化操作后，结束标签>跑到下一行的bug
* 优化 单位转换默认启用(px转upx,px转rem)

## 1.5.2.20190121
* 修复 scss/less不支持px转upx、px转rem提示的问题
* 修复 Win 语言服务初始化变慢的问题
* 修复 js方法参数定义处提示无用代码块的问题
* 修复 shell脚本在黑色主题下变量着色的问题
* 修复 新建vue文件默认模板不对的问题

## 1.5.1.20190120
* 修复 uniapp框架的一些Bug

## 1.5.0.20190119
* 新增 scss/less语言服务器(vscode兼容插件)，支持代码提示和转到定义(alt+鼠标单击)
* 新增 Win 在项目管理器显示git/svn状态(安装相应插件后)
* 新增 换行符设置。在编辑器菜单里可转换，在设置中可设默认值
* 新增 鼠标中键点击标签卡关闭该标签卡
* 修复 部分大文档光标点击卡顿的bug
* 修复 emmet HTML中输入!后Tab不生成html结构的bug
* 新增 Git插件补充一批新命令
* 新增 重新识别项目类型功能（项目管理器，对项目点右键-重新识别项目类型）
* 新增 设置 Windows下支持指定文件默认使用HBuilderX打开
* 修复 Mac Mojave系统，无法删除文件的bug
* 修复 项目在本地删除后，操作时，在状态栏提示项目不存在
* 修复 智能双击 点击条件编译折叠开头无法双击选中折叠区域的bug
* 修复 日志文件打开时，浏览器频繁刷新的bug
* 修复 格式化 光标有时错跑到文档开头的bug
* 升级 格式化 升级prettier插件
* 修复 代码助手 css输入!或@, 代码助手回车后变成两个!或@的bug
* 修复 路径提示不支持绝对路径的bug
* 修复 某些情况下url转到定义识别不正确的bug
* 修复 设置界面中的文本输入框，修改时光标自动跳到最后的bug
* 修复 索引 某些情况下项目索引不全的bug
* 优化 索引 降低项目索引时CPU占用率
* 修复 App项目 打两次自定义基座包不会覆盖原来的包的bug
* 修复 5+项目 打包后，iphone xs max启动图不对的bug
* 新增 uni-app 注释菜单 【ctrl+alt+/】显示行注释、快注释、条件编译注释、条件编译注释-not。方便选中内容设置或反设置条件编译
* 新增 uni-app scss/less/stylus/typescript等预编译语言的条件编译，包括着色、注释菜单、智能双击
* 修复 uni-app 某些语言双击条件编译#ifdef、#ifndef、#endif等关键字时无法选中整体条件编译段落的bug
* 新增 uni-app 新建页面，增加less、scss、stylus、TypeScript等页面模板
* 新增 uni-app manifest可视化界面支持微信小程序权限配置
* 优化 uni-app 应用发布流程
* 修复 uni-app 同时运行2个手机时第二个手机资源同步不对的问题

## 1.4.1.20181228
* 修复 云打包在manifest配置有个推模块的情况下误报icons不能为空的bug

## 1.4.0.20181227
* 【重要】新增 uni-app添加支付宝和百度小程序运行 [详情](https://ask.dcloud.net.cn/article/35393)
* 【重要】新增 uni-app插件市场，支持前端组件、js sdk、页面模板、项目模板、原生插件等多种类型 [https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
* 【重要】新增 uni-app支持原生插件云打包
* 新增 vscode、sublime text快捷键方案切换【菜单-工具-快捷键切换】
* 新增 入门教程【菜单-帮助】
* 新增 普通web项目添加vue-cli默认项目模板，可在运行菜单执行npm命令，简化vue项目的开发配置过程
* 新增 设置 调整行高
* 新增 设置 选中整个单词才高亮其他相同词，即单字母选中不高亮其他字母
* 新增 设置 是否在资源管理器文件右键菜单显示"open with HBuilderX"
* 新增 后退前进光标，支持选区和多光标。Ctrl+=扩大选区后也可使用后退来恢复之前的选区
* 新增 在状态栏显示选区文字长度、行数及多选区数量。还可用于字数统计
* 新增 条件编译 代码语法提示
* 新增 条件编译 支持css和pages.json
* 新增 条件注释、块注释的折叠
* 新增 项目管理器 按Ctrl+鼠标多选文件，批量复制、删除
* 修复 项目管理器 文件名中带.造成文件图标显示错误的bug
* 优化 格式化 取消格式化插件的缩进单独配置，格式化时自动从编辑器设置中取缩进配置
* 修复 格式化 文件过长时格式化后出现内容不全的bug
* 修复 外部浏览器不会热刷新的bug
* 修复 js和html切换成es6模式时状态栏不显示语法提示库的bug
* 修复 双击选择英文单词在中英文混合时会一起选中中文的bug
* 修复 Ctrl+l连续选择行时，无法自动滚动屏幕的bug
* 优化 选择行支持多光标
* 修复 复制粘贴 如果复制内容中间有空行，粘贴后无法自动缩进的bug
* 修复 复制粘贴 在以空格替代tab缩进时，粘贴时把内容中的空格改成tab的bug
* 修复 复制粘贴 无法复制行首的空白字符的bug
* 修复 多光标操作后进行撤销、重做时，部分场景无法保留多光标状态的bug
* 修复 大纲视图在切换文件时不会自动刷新的bug
* 修复 vue中正则表达式着色异常的bug
* 修复 vue文件部分情况下折叠区域计算不正确的问题
* 优化 智能猜测Tab宽度的算法
* 修复 代码助手 backspace时不会自动回退的bug
* 修复 路径使用@/方式时，无法代码提示和转到定义的bug
* 修复 Markdown 同行多链接无法跳转链接的bug
* 修复 自定义代码块列表框偶发造成程序崩溃的bug
* 修复 外部命令 配置的快捷键初始化不生效的bug
* 修复 外部命令 重复打开终端的bug
* 新增 Mac 导入svn/git项目
* 优化 Mac svn/git插件使用体验，支持提交代码时输入commit信息
* 修复 Mac 打开设置时偶发崩溃的bug
* 修复 Mac 通过外部命令执行项目下npm命令时执行目录不对的bug
* 修复 Mac 块注释原快捷键和os冲突，改为command+alt+/

## 1.3.2.20181214
* 修复 文件搜索列表/自定义代码块列表界面上下键无效的问题
* 修复 Mac Mojave系统下字体模糊的问题
* 修复 Mac Mojave系统下HBuilderX升级后卡顿的问题
* 修复 Mac 从一个分栏往另一个分栏拖拽文件不生效的问题
* 修复 创建新窗口时偶发崩溃的问题
* 修复 代码助手右侧选中内容后ctrl+c无法复制的问题
* 优化 快捷键冲突菜单增加【以后只选一个】，选择对应操作后自动解决冲突
* 删除 外部文件打开时的弹框提示


## 1.3.1.20181211
* 新增 支持Alt/Command+数字切换文档标签卡，如Alt+1切换到第一个文档（win版为alt，mac为Command）
* 优化 uniapp 编译微信小程序项目时自动清除缓存，避免缓存造成的错误
* 修复 win版通过SVN/Git导入项目时项目类型没有正确识别的问题
* 优化 将文件收藏功能突出显示在工具栏上，并优化收藏的细节体验
* 新增 通过多光标批量复制内容到新位置。如多光标选中A词和B词并复制，在新位置放置2个光标C和D，粘贴，即可在C处粘贴A、D处粘贴B
* 新增 win版支持Alt+hjkl移动光标的左下上右，方便不移动手腕操作光标
* 新增 主键盘右侧区的上下左右、Home、End、PageUp、PageDown等全面命令均可自定义快捷键，方便极客按需自定义，实现不移动手腕操作键盘
* 修复 列选择后移动光标，丢失多光标状态的bug
* 修复 复制列选择数据后，无法列粘贴数据的bug
* 新增 通过键盘进行向上列选择和向下列选择【Ctrl+Alt+Up/Down】
* 优化 跳转到行首行尾改为软行首和软行尾。即自动换行的行，按home、end时，先到换行后的行首或行尾，再按一次到真实行号的行首或行尾。如行首有缩进，先跳转到缩进后，再按home跳转到真实行首
* 新增 跳转 跳转到驼峰词前后、跳转到段落（以空行为段落分割）首尾、直接跳转真实行的首尾
* 新增 选择 选择至驼峰词前后、选择至段落（以空行为段落分割）首尾、直接选择至真实行的首尾
* 新增 删除 删除至驼峰词前后
* 优化 选左词和选右词支持了多光标选择
* 优化 markdown 预览的样式
* 修复 智能回车 markdown代码区、jsdoc、json数组中部分兼容问题
* 优化 升级 更新提示中可以查看升级日志了
* 修复 升级 因文件占用导致升级失败的问题，避免无限提示升级
* 修复 mac版某些机器打开文件所在目录卡慢的bug
* 修复 写js方法调用后在参数内输入{后回车跳转错误的bug
* 修复 win版某些情况下外部命令执行时路径不对的bug
* 修复 emmet html标签在有属性的情况下按TAB键无效的bug
* 修复 emmet 中文乱码的bug
* 修复 Mac下HX在APFS(区分大小写，加密)格式的磁盘下无法启动的问题
* 优化 运行菜单里的iOS模拟器列表移至到【iOS模拟器】子菜单，减少菜单长度
* 优化 vue部分代码提示
* 优化 项目别名样式

## 1.2.1.20181126
* 修复 manifest.json修改启动图延时参数时误报不是整数的问题

## 1.2.0.20181122
* 【重要】新增 uni-app支持运行到chrome，可使用chrome的手机审查模式，安装vue devtools插件，调试更方便
* 新增 5+App的webview免翻墙调试功能（菜单运行-运行到手机或模拟器-打开webview调试控制台，需要手机端启动可调试的App）
* 新增 文件对比功能（项目管理器按住Ctrl+鼠标选择2个文件-右键菜单中选择【对比选中的文件】）
* 新增 项目管理器，增加文件图标（可在项目管理器菜单选择图标类型，可在插件安装中增加图标插件）
* 新增 内置浏览器，增加二维码功能，方便在手机端扫码访问
* 优化 校验写入磁盘文件权限，提示以管理员身份启动
* 优化 预览时启动和刷新内置浏览器的速度
* 优化 代码助手服务因全局代理或防火墙设置导致无法启动的问题
* 优化 新建项目时项目模板下载逻辑
* 修复 格式化操作后，有时光标位置到了首行的问题
* 修复 某些情况下项目删除不了的问题
* 修复 某些情况下settings.json写入格式错误的问题
* 修复 真机运行时有可能会崩溃的问题
* 修复 部分机器启动语言服务时报缺失dll的问题
* 修复 项目管理器右键新建文件按Esc取消后没有删除列表项的问题
* 修复 css格式化自动为https://后面加空格的问题
* 修复 将项目内文件全部删除后再删除项目后崩溃的问题
* 修复 部分代码块内容不对的问题
* 修复 mac 解决在部分mac机器上，打包界面按钮被遮挡的问题
* 修复 mac 运行设置页面，无法选择微信开发者工具路径的问题
* 调整 暂时取消外部浏览器的保存自动刷新功能，此功能影响浏览速度并会造成项目无法删除，后续会继续优化
* 注意 mac mojave系统，升级后如遇到问题，请参考这里解决[https://ask.dcloud.net.cn/article/35244](https://ask.dcloud.net.cn/article/35244)

## 1.1.0.20181030
* 新增 px转upx、px转rem转换。在设置中配置转换比例，代码中敲px时代码助手会列出计算过的upx/rem值
* 新增 项目管理器 对项目点右键，可设置项目别名
* 新增 项目管理器 对项目点右键，可折叠其它展开的项目
* 新增 项目管理器 鼠标移入本区域会在右上角出现功能菜单
* 修复 首次打开设置，源码视图异常的问题
* 修复 css/scss代码助手缺少提示的问题
* 修复 语法校验 错误位置在行首时，校验波浪线不显示的问题
* 优化 语法校验 规则区分warn和error
* 修复 只有一个标签卡时按Ctrl+tab造成崩溃的问题
* 修复 上下移动行后，缩进格式错乱及选择行尾回车符后移动时多移动了内容的问题
* 调整 去掉prettier-php插件
* 调整 Mac平台 删前词、删后词和撤销后的恢复，改为os默认的快捷键
* 修复 mac平台 右键菜单样式不正常及子菜单为空时，父菜单不显示的问题
* 新增 App 制作移动App资源升级包功能（包括5+App、wap2app）
* 新增 App 自定义基座功能，可配置三方sdk的appkey后调试运行
* 新增 App manifest可视化界面-模块权限配置中添加iOS隐私描述配置
* 优化 App 打包窗口，增加iOS证书申请指南的链接
* 优化 App 打包、微信开发者工具启动等环节的错误提示

## 1.0.1.20181012
* 修复 使用某些ES7语法时语法提示异常的问题
* 新增 代码助手底部左右翻页箭头
* 优化 json代码提示function的策略，支持选择es5的匿名函数或es6的箭头函数等
* 修复 链接中带中文时无法跳转的问题
* 修复 manifest.json配置百度语音sdk打包时不生效的问题

## 1.0.0.20181010
* 新增 滚动条信息点，支持在右侧标记书签、搜索结果、语法错误。切换跳转3种标记分别是F2、F3、F4
* 新增 选择所有相同词功能【Win:Ctrl+Alt+e Mac:Ctrl+Alt+d】
* 新增 跳过当前选择，选中下一个相同词 【Win:Alt+Shift+e Mac:Ctrl+Shift+d】
* 新增 右下角通知中心。补充升级提示
* 优化 新建项目时模板选择的体验
* 新增 JavaScript(ES6+)编辑器，可在编辑器右下角点击语言切换。现有着色遇到问题时可切换
* 新增 智能回车 markdown中在列表符后回车，把之前自动补的#、-等前缀去掉。体验同word
* 优化 智能回车 json行尾回车自动加逗号时，如果行尾有注释，不会把逗号加到注释后面
* 优化 智能回车 如果非多光标，json中回车后智能补的json逗号可单独撤销
* 新增 智能双击 双击选中markdown的图片、超链接、加粗、倾斜、单行代码、多行代码语法区开头，选中该语法区
* 新增 智能双击 双击选中markdown的>引用选中所有引用区
* 调整 智能双击 没有缩进的行首双击，不触发全选
* 修复 两侧包围 选中内容按引号括号包围后无法保持选区的bug
* 修复 两侧包围 多光标时插入引号、括号的选区丢失、撤销逻辑不符、绿光标位置不对等问题
* 新增 两侧包围 markdown 中选中内容，按`~_*等符号，自动在选区2侧加包围符号
* 优化 加包围【Ctrl+]】 如果没有触发其他包围设置，则自动在选区首尾加2个光标
* 优化 反包围【Ctrl+Shift+]】，选区2端是配对符号(如引号括号`~_等符号)时，删除包围符号，比如将[a]变成a
* 新增 向2侧扩大选择、由2侧向内减少选择 【Win:Alt+Shit+→ 、Alt+Shit+←】【Mac:Ctrl++Shit+→ 、Ctrl++Shit+←】
* 新增 设置/取消markdown引用列表 【Ctrl+Atl+Shift+.】
* 优化 智能粘贴 不选内容直接Ctrl+c复制本行后，立即Ctrl+v，调整为插入相同行，而不是在光标位置后粘贴
* 修复 多选区复制后，在非HBuilderX的其他软件中粘贴，粘贴内容顺序与选择顺序相反的问题
* 修复 双引号中敲单引号，有时右引号丢失的问题
* 修复 css校验时，upx单位报错的问题
* 新增 生成离线打包App资源功能 【菜单-发行】
* 新增 真机运行运行到指定页面。[配置教程](https://uniapp.dcloud.io/collocation/pages?id=condition)
* 修复 代码助手在选中编辑器内容的情况下替换不正确的问题
* 修复 Android真机运行时有时候获取sdcard路径错误导致同步文件到错误目录下的问题