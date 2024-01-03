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
* 无

## 3.7.10.20230425
* 无

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
* 无

## 3.6.17.20230112
* 修复 内置终端 绿柔主题下，选中终端文本，选中颜色没有显示的bug
* 优化 Markdown一键分享，网页所需的css资源和js资源，同步上传到uniCloud前端网页托管
* 修复 uni-app 运行到iOS模拟器，开启uni调试，打开后调试窗体显示空白的Bug
* 优化 原生App-云打包 Android打包 打包窗口不再显示`使用DCloud老版证书`（2022年11月30日以后创建的应用及以前未使用过老版本证书的应用不能再使用DCloud老版证书）

## 历史更新日志
[https://update.dcloud.net.cn/hbuilderx/changelog/ReleaseNote_release_archive_2022.html](https://update.dcloud.net.cn/hbuilderx/changelog/ReleaseNote_release_archive_2022.html)