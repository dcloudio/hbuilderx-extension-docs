## 3.6.14.20221216-alpha
* 修复 3.6.12版引出的 某些情况下，编辑器回车后，光标位置错误的Bug [详情](https://ask.dcloud.net.cn/question/159490)
* 修复 3.6.9版引出的 某些情况下，项目根目录生成了一个1.text测试文件的Bug [详情](https://ask.dcloud.net.cn/question/159580)
* 修复 3.6.7版引出的 html文件，运行到Chrome，启动了一个新的Chrome实例的Bug [详情](https://ask.dcloud.net.cn/question/159331)
* 修复 uni-app Web平台开启或停止浏览器Debug调试，某些情况下，控制台按钮重复显示的Bug

## 3.6.12.20221207-alpha
* 修复 3.6.11引出的 uts文件 无法显示大纲视图的Bug
* 修复 3.6.11引出的 uts文件 右键菜单重排代码格式置灰的Bug
* 优化 App真机运行 设备选择窗口，标准基座和自定义基座，显示基座信息
* 优化 App真机运行 菜单【运行 - 运行到手机或模拟器】，移除菜单【运行基座选择】
* 【uniCloud插件】
+ 本地调试插件 修复 云函数调用云函数时，被调用云函数无返回值导致报错的Bug

## 3.6.11.20221205-alpha
* 新增 App真机运行 iOS设备选择窗口支持UDID显示和复制
* 新增 App真机运行 MacOSX uts插件 支持编译运行iOS标准基座到iOS真机设备
* 优化 App真机运行 iOS标准基座包体积，仅支持 arm64 架构。即不再支持iPhone 5S、iPad Air(mini2)以前的设备。此调整不影响打包和自定义基座。
* 修复 App真机运行 设备选择窗口 刷新设备列表 底部radio被改变的Bug
* 修复 App真机运行 uts插件 编译运行 某些情况下，Node进程没有结束的Bug
* 新增 uts插件 支持新建uts文件和平台目录
* 优化 uts插件 语言服务 提升代码提示速度，降低内存占用
* 优化 uts插件 热刷新速度，支持编译缓存，未修改不编译
* 修复 uts插件 语言服务 iOS平台 参数标签名称是关键字时报错的Bug
* 修复 语言服务 uni-app pages.json usingComponents拼写错误的Bug [详情](https://ask.dcloud.net.cn/question/158601)
* 修复 新建HBuilder窗口或者拖动标签卡创建新窗口，关闭该新窗口时会导致部分插件功能失效的Bug
* 优化 uniCloud db_init.json 初始化云数据库 当数据库表过多时，初始化云数据库超时的Bug
* 新增 App打包 控制台下载链接后的一键上传到uniCloud，支持上传到阿里云正式版云存储
* 修复 uni_modules插件 某些异常 package.json 缺少分类无法提交插件市场的Bug

## 3.6.10.20221121-alpha
* 修复 3.6.9引出的 uni-app CLI项目，当存在uts插件时，无法正常编译和运行的Bug
* 修复 uni-app uts插件 语言服务 `import x from '@/uni_modules/'` uts插件路径提示错误的Bug
* 修复 App真机运行 设备选择窗口 某些情况下，点击运行按钮，HBuilderX出现崩溃的Bug
* 优化 uts插件 iOS平台 本地编译和真机运行速度

## 3.6.9.20221114-alpha
* 【重要】App真机运行 iOS标准基座 支持使用Apple证书签名，签名后可运行标准基座到iOS真机设备（需mac电脑） [详情](https://uniapp.dcloud.net.cn/tutorial/run/ios-apple-certificate-signature.html)
* 新增 MarkDown 支持 Mermaid图，包含流程图 [详情](https://hx.dcloud.net.cn/Tutorial/Language/markdown?id=mermaid)
* 新增 MarkDown 文件和图片语法`![]()`、`[]()`中，支持提示文件路径 [详情](https://hx.dcloud.net.cn/Tutorial/Language/markdown?id=PathHints)
* 新增 MarkDown 代码区 kotlin 、 uts 等语言支持代码高亮
* 修复 代码助手 存在某些不支持的图片格式时，图片预览失效的Bug
* 新增 uts插件 iOS平台 支持本地编译和真机运行，需要配置Xcode环境 [详情](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-ios.html)
* 新增 uts插件 Android平台 真机运行支持三方 Gradle 仓储 [详情](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html)
* 优化 uts插件 语言服务 支持iOS系统API、Android系统API的代码提示
* 优化 uts插件 语言服务 Android平台 完善R资源的代码提示
* 优化 uts插件 语言服务 Android平台 支持免导入使用java.lang.*下的类
* 修复 MacOSX 格式化ts文件，首行代码格式化后被添加空格的Bug
* 修复 HBuilderX 非正常退出时，语言服务进程没有退出的Bug
* 修复 windows 某些型号的电脑，HBuilderX 拖动内置浏览器边框后闪退的Bug
* 修复 App真机运行 设备选择窗口，某些情况下，错误提示弹窗显示到设备选择窗口后面，导致HBuilderX无法进行任何操作的Bug
* 修复 App真机运行 iOS离线SDK制作自定义基座，target不是HBuilder时，同步文件失败的Bug

## 3.6.8.20221027-alpha
* 修复 App真机运行 打开Object类型的日志后，内容没有格式化的Bug
* 修复 uni_modules 插件市场导入插件，运行缓慢超时导致提示`插件处理外部应用请求未能完成`的Bug

## 3.6.7.20221018-alpha
* 【重要】升级 HBuilderX 内置Node版本升级为16.17.0，内置npm版本升级为6.14.12
* 优化 Git插件 git pull操作 状态栏消息增加查看日志功能 方便查看日志
* 调整 设置 将语言服务相关的配置聚合到`语言服务配置`配置项中
* 新增 Node调试 支持附加(attach)到已经启动的node进程上断点调试 [详情](https://hx.dcloud.net.cn/Tutorial/extension/node-development?id=attach)
* 优化 Windows 当Node进程被安全软件拦截，导致语言服务等Node插件启动失败时，弹窗提示
* 修复 代码助手 代码助手显示后，拖动到编辑器底部，任意光标位置回车后，中间代码丢失的Bug
* 修复 代码助手 当快速输入代码块时，某些情况下，代码提示窗口右侧信息显示其它语言服务返回结果的Bug
* 修复 代码助手 CSS class存在多个时，快速敲空格然后按左键，导致代码提示回车后替换位置错误的Bug
* 修复 代码助手 CSS 大文件代码提示速度过慢的Bug
* 修复 语法校验 uni-app项目(非CLI) 当项目下存在tsconfig.json时，某些情况下，语法校验误报的Bug
* 修复 语法校验 JSON 文件末尾存在中文`，`时，报错波浪线不显示的Bug
* 修复 转到定义 uni-app App.vue style引入多个文件, class转到定义只对最后一个文件生效的Bug [详情](https://ask.dcloud.net.cn/question/154824)
* 修复 语言服务 某些情况下，语言服务频繁报错崩溃，HBuilderX窗口右下角频繁弹窗报错的Bug
* 修复 内置浏览器 Windows 某些情况下，拖动内置浏览器，HBuilderX闪退的Bug
* 修复 App真机运行 3.5.5引出的 uni-app 运行到iOS模拟器，修改nvue文件，无法同步修改的Bug
* 修复 App真机运行 3.5.5引出的 5+app 运行到iOS 某些情况下，日志没有打印的Bug
* 优化 uni-app 运行到Web 支持选择使用Chrome Debug、使用内置浏览器Debug（控制台点击虫子图标，可弹出选择菜单）
* 修复 uni-app 运行到内置浏览器 某些情况下，Cookie不一致的Bug
* 新增 uni-app manifest.json 可视化界面App模块配置 增加"安全网络" [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html)
* 修复 uniCloud 前端网页托管 某些情况下，发布失败，仍然执行上传操作的Bug
* 新增 uni_modules 支持配置模块的初始化脚本。可用于定时任务设置随机开始时间 [详情](https://uniapp.dcloud.net.cn/plugin/uni_modules.html#package-json)
* 修复 uni-app 真机运行 uts Android版插件调用内置依赖库中的API时需要手动下载并添加到lib目录的Bug [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#tempnotice)

## 3.6.3.20220919-alpha
* 修复 3.6.1引出的 HBuilderX 关闭标签卡，某些情况下出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/153398)
* 修复 3.6.1引出的 Windows 内置浏览器 手机设备模式 无法选择元素的Bug
* 修复 HBuilderX 代码提示过程中切换到其它程序，某些情况下，代码提示窗口会覆盖在其它程序上面的Bug
* 修复 3.6.1引出的 语言服务 uni-app CLI项目 px转rpx失效的Bug [详情](https://ask.dcloud.net.cn/question/153384)
* 修复 3.6.1引出的 控制台日志 某些类型的日志输出错误的Bug
* 修复 uni-app 运行到iOS模拟器，控制台日志被截断或输出不全的Bug
* 修复 uni-app 运行到Android模拟器，Windows上某些Android模拟器运行失败的Bug
* 修复 uni-app 运行到Android，某些情况下，控制台提示编译成功后，没有反应的Bug
* 修复 App安心打包 Android 新版支付宝SDK引出的，安心打包失败的Bug

## 3.6.1.20220907-alpha
* 修复 3.6.0引出的 Windows 内置浏览器 网络请求无法跨域的Bug [详情](https://ask.dcloud.net.cn/question/152510)
* 修复 3.6.0引出的 Windows 内置浏览器 某些情况下，浏览器背景色错误的Bug [详情](https://ask.dcloud.net.cn/question/152647)
* 修复 编辑器 关闭选项卡 某些情况下，没有记忆折叠状态的Bug
* 修复 语言服务 JavaScript `Object.`不提示es6+新增方法的Bug
* 修复 语言服务 uni-app pages.json文件, page字段路径提示回车后补全错误的Bug
* 修复 语言服务 uni-app nvue文件 css class 转到定义失败的Bug [详情](https://ask.dcloud.net.cn/question/152522)
* 修复 语言服务 uni-app nvue文件 script和style标签 无法提示lang属性的Bug
* 修复 语言服务 Vue文件 stylus代码没有提示的Bug
* 修复 语言服务 `import xxx from 'XXX.vue'` 当不带vue后缀，提示模块找不到，以及无法转到定义的Bug
* 修复 语言服务 jsx和tsx文件 敲字符`.`时无法自动触发代码提示的Bug
* 新增 语言服务 内置语法校验 支持warning级别
* 修复 语言服务 启用JavaScript校验 在Vue文件 Script节点不生效的Bug
* 修复 语言服务 html文件 关闭JavaScript校验功能配置后，错误红色波浪线仍然存在的Bug
* 修复 语言服务 多行错误时，鼠标悬浮在非第一行，错误提示不显示的Bug
* 修复 App-云打包 某些情况下 项目下单个静态资源文件过大(比如超过100M)时 无法提交打包的Bug
* 修复 App-云打包 Windows 某些情况下，提交打包，HBuilderX出现闪退的Bug
* 修复 uniCloud 云函数 当云函数依赖第三方库，上传并运行，执行失败的Bug

## 3.6.0.20220901-alpha
* 【重要】新增 uts语法支持。使用ts开发原生 [详情](https://uniapp.dcloud.io/tutorial/syntax-uts.html)
* 新增 查找引用功能。支持对js、ts变量方法点右键查找
* 优化 Windows 内置浏览器 升级Cef版本到90.6.7
* 新增 HBuilderX设置 插件配置 增加配置项 启用JavaScript校验、启用TypeScript校验
* 新增 语言服务 vue、js内变量语法实时校验（js校验，需要在【设置 - 插件配置】中开启）
* 新增 语言服务 vue3 `style module`支持代码提示
* 新增 语言服务 vue2&3 `插槽`支持代码提示
* 新增 语言服务 vue2&3 script 区域支持自动导包
* 修复 语言服务 vuedoc 在 script setup 内不生效的bug
* 修复 语言服务 vue3 在 script setup 内 import 的自定义组件，在 template 区域无法提示的Bug
* 修复 语言服务 修改函数调用的名称时，会重复生成`()`的Bug
* 修复 语言服务 特殊String 不支持 `if(idstr === '|')` 写法的Bug
* 修复 语言服务 vue template 内变量悬浮不生效的Bug
* 修复 语言服务 uniCloud.importObject()，云对象修改后，代码提示、悬浮不能实时生效的Bug
* 优化 语言服务 uniCloud.importObject()，调用云对象上的方法时参数及返回值的代码提示
* 修复 语言服务 遵循 vetur 规范的 framework包 安装卸载的时候不能实时生效的Bug
* 修复 语言服务 html script 中引用其他文件的变量和函数悬浮不生效的Bug
* 修复 语言服务 html script 中引用其他文件的函数时解析返回值和参数类型不正确的Bug
* 修复 语言服务 底部状态栏框架语法库，移除时无法生效的Bug
* 修复 语言服务 vue cli项目，vue script 区域无法识别项目下 tsconfig.json 的Bug
* 修复 语言服务 修改写好的标签名称时，选择代码提示项后多补内容的Bug
* 优化 语言服务 设置px转rem后，转换提示放到代码提示的第一项
* 新增 标签卡 右键菜单 增加菜单 向左移动标签卡、向右移动标签卡
* 修复 Windows HBuilderX未启动的情况下，导入插件市场插件，首次导入UI视图显示空白的Bug
* 修复 多文件字符搜索 某些情况下，跳转位置错误的Bug
* 修复 转到定义到另一个文件后，后退时，光标跳转到该文件开始，而不是转到定义前的位置的Bug
* 新增 HBuilderX英文 发行 H5发行及小程序发行窗口 窗口UI文本国际化
* 新增 新建项目 HBuilderX插件 增加国际化示例模板
* 修复 uni-app manifest.json 应用名称国际化后，打包界面，应用名称显示%%的Bug
* 调整 uni-app manifest.json 左侧“H5配置”改名为“Web配置”

## 3.5.5.20220825-alpha
* 修复 3.5.4引出的 Windows HBuilderX Cli命令失效的Bug
* 新增 App真机运行 设备选择窗口 增加选择基座功能
* 修复 App真机运行 Windows 当项目路径存在中文，运行到 iOS设备，App页面显示异常的Bug
* 修复 App真机运行 某些情况下，安装自定义基座失败的Bug
* 修复 uni-app manifest.json uniPush字段 某些情况下变成 null 的Bug

## 3.5.4.20220805-alpha
* 【重要】优化 App真机运行 使用Node运行，不再依赖Java
* 修复 调试视图 变量 Global节点 某些情况下，UI显示错乱的Bug
* 修复 HBuilderX 保存文件 utf-8 格式文件无文件头标识字节 0xEFBBBF的Bug [详情](https://ask.dcloud.net.cn/question/112186)

## 3.5.3.20220727-alpha
* 修复 操作系统环境变量 配置NODE_OPTIONS --openssl-legacy-provider后，HBuilderX启动时失去响应的Bug
* 修复 未登录时点击菜单【发行 原生APP-查看云打包状态】闪退的Bug
* 修复 Wap2App项目，提交打包，某些情况下，生成的App样式不正确的Bug
* 修复 uniCloud项目 node_modules文件特别多时，运行项目，Node进程CPU占用率过高的Bug

## 3.5.2.20220719-alpha
* 新增 语言服务 uni-app i18n国际化 pages.json和Vue页面 支持i18n代码提示、转到定义 [详情](https://uniapp.dcloud.io/tutorial/i18n.html#codeHints)
* 修复 语言服务 await关键字补全 某些情况下，附带多余信息的Bug
* 新增 Markdown 支持跨文件转到#标题或标题的@别名 [详情](https://hx.dcloud.net.cn/Tutorial/Language/markdown?id=goto-definition)
* 优化 插件安装 提示插件安装失败时给出详细原因和解决指南
* 调整 Git插件 pull操作 默认选项改为第四项，即git pull --rebase --autostash
* 修复 3.5.1引出的 弹出快速选择窗口（如Git或语言选择）不响应esc和视图弹出层级错误的Bug
* 修复 App安心打包 某些情况下，提交打包，提示大小超过40M的Bug
* 修复 App manifest.json 一键生成iOS通用链接功能，不能自动生成`apple-app-site-association`文件的Bug [详情](https://ask.dcloud.net.cn/question/149006)
* 新增 海外开发者可使用`HBuilderX国际区账号`进行云端打包 [详情](https://uniapp.dcloud.io/tutorial/internationalization.html)

## 3.5.1.20220707-alpha
* 新增 HBuilderX uniCloud前端网页托管 支持腾讯云
+ 入口1：选中web项目，点击菜单发行-上传网站到服务器
+ 入口2：uni-app发布为H5时，勾选 直接部署到前端网页托管
+ 入口3: HBuilderX CLI 部署和管理前端网页托管 [详情](https://hx.dcloud.net.cn/cli/uniCloud-hosting)
* 新增 HBuilderX 状态栏 右下角补充升级图标及新版本红点提示
* 修复 单项目窗体 编辑器 选择语言关联窗口位置偏移的Bug
* 修复 代码块设置 自定义其它语言代码块 窗口列表出现两个JSON选项的Bug
* 修复 自定义代码块 注释中$DATE_TIME显示日期错误的Bug
* 修复 语言服务 CSS pointer-events缺少auto属性的Bug
* 修复 语言服务 Vue {{}}view后按tab，编辑器右下角弹窗提示Failed to expand abbreviation的Bug
* 修复 语言服务 uni-app项目，import x from ‘@/‘，`@/`开头的路径，某些情况下，转到定义失败的Bug
* 修复 打开内置终端后，插件API hx.window.showQuickPick() 窗口无法滚动的Bug
* 新增 uni-app 新建页面 增加 uni-id-pages 模板 [详情](https://ext.dcloud.net.cn/plugin?name=uni-id-pages)

## 3.5.0.20220623-alpha
* 新增 uni-app 运行到 Web 时支持 debug 调试 [详情](https://hx.dcloud.net.cn/Tutorial/debug/h5-debug)
* 新增 TypeScript 实时语法校验 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/tsSyntaxCheck)
* 新增 语言服务 支持tailwindcss提示，需要安装tailwindcss插件 [详情](https://ext.dcloud.net.cn/plugin?id=8560)
* 新增 MarkDown 代码区块的语言着色高亮，支持提示下载对应语言着色扩展插件
* 修复 语言服务 React 某些情况下，<App />回车后补充了`()`的Bug
* 修复 语言服务 React jsx文件 没有代码提示的Bug
* 修复 首次打开文档并编辑，第一次撤销后光标位置不对的Bug
* 修复 json文件 查找索引符号导致崩溃的Bug
* 新增 uni-app pages_init机制，导入 uni-app 插件到项目下时，可合并新页面路由到项目的 pages.json 中 [详情](https://uniapp.dcloud.io/plugin/uni_modules.html#pages-init)
* 新增 uni-app manifest.json 可视化界面基础配置 增加国际化语言配置 [详情](https://uniapp.dcloud.net.cn/tutorial/i18n.html#manifest)
* 调整 uni-app manifest.json 可视化界面去除微信登录的 AppSecret 输入框，仍可在源码视图填写，但不推荐在前端暴露 AppSecret
* 调整 uni-app manifest.json App常用其它配置，生成 iOS符号表文件，将配置项调整到原生App-云打包窗口

## 3.4.17.20220614-alpha
* 修复 Windows 终端开启时，工具栏搜索分类，鼠标移动上去后，悬停列表自动消失的Bug [详情](https://ask.dcloud.net.cn/question/146695)
* 修复 App 原生App-云打包 某些情况下，点击打包没有提交到云端打包的bug
* 修复 uniCloud 前端网页托管 上传网站到服务器，非项目成员进行上传操作，编辑器闪退的Bug

## 3.4.13.20220601-alpha
* 新增 语言服务 JavaScript 支持document.getElementById、document.querySelector中id选择器的dom类型识别
* 新增 语言服务 scss 支持提示`!global` `!default`
* 修复 语言服务 CSS `{}`内，输入`mar`等，max-resolution等媒体查询出现在代码助手第一项的Bug
* 修复 语言服务 JavaScript JQuery代码提示，某些情况下，在`$("")`内输入`#`，回车后，出现两个`#`的Bug
* 修复 语言服务 Vue style节点，输入scoped后，自动补上了`=""`的Bug
* 修复 语言服务 uni-app项目，scss嵌套语法，无法提示uni-app相关标签的Bug
* 修复 语言服务 uni-app项目，import x from ‘@/‘，`@/`开头的路径，某些情况下，转到定义失败的Bug
* 修复 语言服务 uni-app项目，pages.json 条件编译产生语法不对的情况时，导致vue下class没有提示的Bug
* 修复 App 真机运行 某些情况下，查找不到Android设备的Bug
* 修复 App 某些情况下，制作应用wgt包失败的Bug
* 修复 3.4.10引出的 App打包 manifest.json选择云端原生插件，提交云端打包，用户本地配置的插件资源没有上传的Bug

## 3.4.12.20220523-alpha
* 修复 3.4.10 引出的 项目管理器 项目名称后面没有显示Git分支信息的Bug [详情](https://ask.dcloud.net.cn/question/145569)
* 修复 5+App、wap2App项目 制作应用wgt包失败的Bug
* 【uniCloud插件】

## 3.4.11.20220520-alpha
* 优化 HBuilderX 启动速度
* 修复 3.4.10引出的 欢迎页面 状态栏选择语言后出现崩溃的Bug
* 修复 3.4.10引出的 php文件 代码没有着色的Bug
* 新增 uniCloud 新建DB Schema 模板列表 支持搜索

## 3.4.10.20220517-alpha
* 新增 Node程序 支持运行和调试 [详情](https://hx.dcloud.net.cn/Tutorial/extension/node-development)
* 新增 可自主扩展新语言的语法高亮，可开发或下载语言高亮插件 [详情](https://hx.dcloud.net.cn/Tutorial/Language/language_grammars)
* 调整 部分内置的语言语法高亮迁移到插件市场 [详情](https://hx.dcloud.net.cn/Tutorial/Language/language_grammars?id=list)
* 新增 语言服务 vue-cli项目 支持element-ui、bootstrap-vue等代码提示
* 修复 语言服务 Emmet语言 某些情况下，按下tab，没有反应的Bug
* 修复 语言服务 CSS 在同一行输入CSS代码，回车后，某些情况下，替换位置错误的Bug
* 修复 语言服务 jsdoc代码块替换位置错误的Bug
* 修复 插件安装窗口 已安装插件 某些情况下，版本号显示错误的Bug
* 修复 多文件搜索 某些情况下，右侧栏显示的代码着色错误的Bug
* 调整 App 原生App-云打包 java库改为openjdk
* 优化 App MacOSX 运行到iOS模拟器的窗口增加搜索功能

## 3.4.9.20220508-alpha
* 修复 语言服务 uni-app pages.json easycom节点配置错误时，uview-ui没有代码提示的Bug

## 3.4.8.20220428-alpha
* 新增 支持自定义项目级代码块（菜单【工具 代码块设置 自定义项目代码块】）[详情](https://hx.dcloud.net.cn/Tutorial/Language/Snippets?id=projectsnippets)
* 修复 语言服务 vue3, template内，无法提示使用ref函数创建的对象数据的Bug
* 修复 语言服务 html a标签 target属性，没有自动拉出代码候选项的Bug [详情](https://ask.dcloud.net.cn/question/143628)
* 修复 语言服务 html 引用js后不提示js全局变量方法的Bug
* 修复 语言服务 html 输入!+tab后，`<html lang="">`设置为en的Bug [详情](https://ask.dcloud.net.cn/question/143531)
* 修复 语言服务 css属性 属性位置替换文本，替换内容错误的Bug
* 修复 语言服务 Vue script节点，无法提示vue某些代码块的Bug
* 修复 语言服务 Vue script节点，this.方法名，无法转到定义的Bug
* 修复 语言服务 uni-app pages.json提示的文件路径不区分大小写的Bug
* 修复 语言服务 uni-app easycom不规范的写法 导致css class无法提示的Bug [详情](https://ask.dcloud.net.cn/question/143800)
* 修复 撤销、恢复撤销操作，光标位置跳转错误的Bug
* 修复 项目运行过程中，在项目管理器关闭项目可能引发的编辑器闪退的bug
* 修复 App安心打包 某些情况下提交打包失败的Bug
* 修复 App真机运行 某些情况下因adb问题，查找模拟器设备失败的Bug
* 新增 uniCloud 支持云对象本地运行和调试 [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#run-local)

## 3.4.6.20220416-alpha
* 修复 语言服务 uni-app，vue文件，class转到定义，无法转到在App.vue @import引入的公共css文件的Bug
* 修复 语言服务 html文件，引用外部的css文件，当文件地址带有?时，css选择器无法转到定义的Bug
* 修复 语言服务 vue3 API，defineProps、defineExpose，无法提示数据类型的Bug
* 优化 语言服务 vue3，style节点，支持提示:deep、:global
* 修复 语言服务 ts文件，无法提示代码块的Bug
* 调整 markdown一键分享 生成的html文件 调整代码区代码着色
* 修复 3.4.5引出的 当一个文件存在多种换行符时，eslint自动修复替换出错的Bug
* 修复 3.4.0引出的 uni-app 运行 控制台右键菜单点击停止运行，不起作用的Bug

## 3.4.5.20220408-alpha
* 优化 语言服务 Vuex commit、dispatch，支持提示mutation、action中的方法
* 修复 语言服务 vue-cli项目 vue文件 script和style标签，输入`lang=`，没有自动拉出相关候选项的Bug
* 修复 语言服务 uni-app vue style节点 import引入文件，以@符号开头的路径，无法转到定义的Bug
* 修复 代码悬浮提示 某些情况下，按下保存，代码悬浮窗口不停变化大小的Bug
* 修复 json文件 引号内回车，自动补充逗号的Bug
* 调整 markdown-share 一键分享 网页内容适配移动端
* 修复 插件API hx.window.getActiveTextEditor replace方法 当同一个文件存在多种换行符时，文本内容替换错误的Bug
* 修复 App真机运行 当HBuilderX语言为英文时，设备选择窗口，窗口内容显示中文的Bug
* 优化 MacOSX App真机运行 运行到iOS模拟器，模拟器选择窗口，支持搜索

## 3.4.4.20220403-alpha
* 修复 语言服务 vue 使用this.访问data中定义的数据对象，this.xx. 没有根据数据类型，提示相应方法的Bug
* 修复 语言服务 vue 模板语法`{{}}`内，使用js表达式，回车后没有自动补充`()`的Bug
* 修复 语言服务 css 代码助手候选项 !important 重复显示的Bug
* 修复 语言服务 uni-app vue 代码助手候选项 picker-view 重复显示的Bug
* 修复 语言服务 uni-app pages.json 某些属性没有提示的Bug
* 修复 语言服务 uni-app cli项目，uni.开头的api, 回车后`()`内没有补充`{}`的Bug
* 修复 语言服务 uni-app vue3项目，`import {} from "@dcloudio/uni-app"`, `{}`内无法提示uni-app生命周期方法的Bug
* 优化 语言服务 uni-app vue文件 import引入文件 支持提示以@符号开头的路径
* 优化 语言服务 vue 支持提示ref和$refs关键字
* 优化 代码悬浮提示 减少不要的悬浮提示
* 修复 MacOSX 某些情况下，HBuilderX启动后，立即按下`command+w`关闭标签卡，编辑器闪退的Bug
* 优化 App真机运行 运行到iOS模拟器，设备选择窗口，将上一次使用的模拟器放置在第一条
* 优化 App真机运行 运行到iOS设备，运行失败时的控制台提示语
* 优化 App真机运行 运行到Android，获取设备，对用户自定义adb路径，增加有效性检查
* 修复 3.4.0引出的 apk、ipa文件，右键菜单，安装到手机，没有显示手机设备列表的Bug
* 修复 3.4.0引出的 App真机运行 Windows 32系统，运行App项目到iOS、Android，无法查找到设备的Bug
* 修复 3.4.0引出的 App真机运行 在【设置 - 运行设置】中，自定义的模拟器端口，没有生效的Bug
* 修复 3.4.0引出的 App真机运行 Windows 运行App项目到夜神模拟器，真机运行过程中，模拟器设备断开连接的Bug
* 修复 3.4.0引出的 App真机运行 adb connect连接Android真机，真机运行过程中，手机设备断开连接的Bug
* 修复 3.4.0引出的 App真机运行 uni-app 运行到iOS/Android，设备选择窗口，某些情况下，一直显示正在获取的Bug
* 修复 3.4.0引出的 App真机运行 MacOSX 运行项目到iOS模拟器，某些情况下，选择设备与实际运行设备不一致的Bug
* 修复 uni-app 新建页面，输入已存在的页面名称，不勾选创建同名目录，旧文件被覆盖的Bug

## 3.4.3.20220325-alpha
* 新增 HBuilderX CLI uni-app 制作应用wgt包 [详情](https://hx.dcloud.net.cn/cli/publish-app-wgt)
* 新增 HBuilderX CLI uni-app 生成本地打包App资源 [详情](https://hx.dcloud.net.cn/cli/publish-app-appResource)
* 新增 代码悬浮提示 支持着色
* 新增 语言服务 manifest.json settings.json支持代码提示
* 优化 语言服务 javaScript 代码提示
* 修复 语言服务 css变量 转到定义时，下划线绘制错误的Bug
* 修复 语言服务 vue文件 `import ... from ...`，无法提示文件路径的Bug
* 修复 语言服务 uni-app uni.navigateTo()等页面跳转到方法，url无法提示页面的Bug
* 修复 语言服务 某些情况下，在图片上转到定义导致HBuilderX崩溃的Bug
* 修复 分栏 某些情况下，打开同一份文档时，关掉第一个文档窗口崩溃的Bug
* 调整 编辑器 vue文件 async类关键字颜色
* 修复 原生App-云打包 项目过大时导致无法提交到云端打包的Bug
* 优化 uni-app 发行 制作应用wgt包窗口样式
* 优化 uniCloud 新建公共模块界面 支持选择模板

## 3.4.2.20220310-alpha
* 修复 3.4.0引出的 打开失去焦点自动保存，多文件字符搜索，点击搜索结果后文件内容被覆盖的Bug [详情](https://ask.dcloud.net.cn/question/140782)
* 修复 3.4.0引出的 Wap2App项目，无法提交打包的Bug [详情](https://ask.dcloud.net.cn/question/140700)
* 修复 3.4.0引出的 Android真机运行 没有使用设置中用户自定义adb的Bug
* 修复 代码格式化，撤销操作，光标位置错误的Bug [详情](https://ask.dcloud.net.cn/question/140970)
* 修复 某些情况下，插件安装后，插件状态不对的Bug
* 修复 App 安心打包 manifest.json 配置Google统计 安心打包没有提交相关文件的bug
* 修复 语言服务 html行内标签, `=`后面存在空格时，无法正确提示CSS代码的Bug
* 修复 语言服务 uni-app easycom 组件名称提示错误的Bug
* 修复 语言服务 vue文件 hover 和 resolve 时提示内容缺失的Bug
* 修复 语言服务 CSS代码提示 某些情况下，font-family提示错误的Bug
* 修复 语言服务 CSS代码提示 rgb、rgba等函数补全错误的Bug

## 3.4.1.20220308-alpha
* 修复 3.4.0引出的 uni-app 新建页面，修改pages.json内容，导致编辑器闪退的Bug [详情](https://ask.dcloud.net.cn/question/140732)

## 3.4.0.20220304-alpha
* 【重要】调整 HBuilderX语言服务 由Java切换为Node，减少内存占用、增强语法提示
* 新增 新建uni-app项目时直接选择Vue2或3的版本（后续可在manifest里调整）
* 新增 文档保存时自动格式化，可通过【设置】-【编辑器配置】-【保存时自动格式化】开启
* 【调整】 App真机运行 不再长期监听手机，运行时检测，减少资源消耗
* 修复 文档格式化后，撤销时光标位置不对的Bug
* 修复 某些情况，Git更新文件后，编辑器内文件不会自动刷新的Bug
* 修复 查找索引符号 搜索后，HBuilderX闪退的Bug
* 修复 某些情况，文档编辑后出现着色错乱的Bug
* 修复 uni-app manifest.json中app-plus-compilerVersion未配置时发行和运行会弹出设置微信开发者工具对话框的Bug
* 修复 uni-app manifest 生成通用链接时，协作者选择服务空间时获取不到自定义域名的Bug
* 调整 安装HBuilderX核心插件时，由下载最新版插件调整为和当前HBuilderX版本匹配的插件
* 优化 uni-app 运行菜单和发行小程序的界面样式

## 3.3.12.20220222-alpha
* 修复 HBuilderX CLI发行微信小程序，某些情况下，HBuilderX出现出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/139189)

## 3.3.8.20220114-alpha
* 修复 MacOSX 3.3.7-alpha引出的 uniCloud虚拟目录，点击后提示没有权限的Bug

## 3.3.7.20220112-alpha
* 新增 HBuilderX CLI 支持发行uni-app到微信小程序 [详情](https://hx.dcloud.net.cn/cli/publish-mp-weixin)
* 新增 HBuilderX CLI 支持发行uni-app到H5 [详情](https://hx.dcloud.net.cn/cli/publish-h5)
* 修复 MacOSX 某些情况下，项目管理器项目无法展开的Bug
* 调整 内置浏览器 地理位置设置 经纬度支持设置6位小数
* 修复 App 真机运行 部分Windows电脑运行App到iOS15以上手机失败的Bug
* 修复 App 真机运行 部分Android 11系统，同步文件失败的Bug
* 修复 uni-app 安心打包 没有生成iOS符号表文件的Bug
* 调整 uni-app 发行到微信小程序，支持自动上传代码到微信平台，无需再通过微信开发者工具上传发行 [详情](https://hx.dcloud.net.cn/Tutorial/App/uni-app-publish-mp-weixin)

## 3.3.6.20211231-alpha
* 无

## 3.3.2.20211218-alpha
* 无

## 3.3.1.20211214-alpha
* 新增 新建项目 uni-app模板 支持扫码体验
* 优化 新建项目 选择uniCloud非付费项目模板 创建完成后，自动拉起初始化向导
* 修复 查找索引符号 鼠标点击搜索区域或者内置资源管理器地址栏时，编辑器出现崩溃的Bug
* 修复 3.3.0 引出的 Windows HBuilderX最大化时，编辑器窗口界面渲染异常的Bug
* 修复 某些情况下，打开内置浏览器，再进行文件搜索引起的文件列表窗口渲染异常的Bug
* 修复 MacOSX 当HBuilderX安装路径带有空格时，运行项目到iOS模拟器失败的Bug
* 新增 原生App-云打包 打包窗口 增加Sigmob广告联盟配置
* 修复 uniCloud 运行云服务空间初始化向导，某些情况下，DB Schema创建确认窗口，没有显示全部创建的Bug
* 修复 uniCloud 上传所有云函数，某些情况下，未上传的云函数数量及名称显示错误的Bug
* 新增 uni-app自动化测试插件 支持在HBuilderX内对uni-app普通项目、CLI项目进行自动化测试 [详情](https://ext.dcloud.net.cn/plugin?id=5708)
* 修复 HBuilderX CLI 某些命令，运行异常的Bug
* 新增 HBuilderX CLI引导 在相关功能界面 增加CLI教程跳转链接

## 3.3.0.20211130-alpha
* 【重要】调整 新建项目界面，预置大量云端一体完整项目 [详情](https://hx.dcloud.net.cn/Tutorial/project?id=CreateProjectWindows)
* 新增 项目管理器视图toolbar 新增定位和折叠所有的悬浮按钮 [详情](https://hx.dcloud.net.cn/Tutorial/project?id=toolbar)
* 修复 代码悬浮提示 某些情况下引发闪退的Bug
* 修复 Markdown 代码区块第一行后字体显示倾斜的Bug [详情](https://ask.dcloud.net.cn/question/94477)
* 修复 插件市场 云端一体页面模板 导入非uni_modules插件 导入后pages.json path路径尾部多了一个点的Bug
* 修复 App 真机运行 某些情况下引发闪退的Bug
* 修复 MacOSX manifest.json 配置iOS通用链接后 打包完成时偶发闪退的Bug
* 优化 uni-app 运行带有预处理CSS语言的项目，运行时自动安装相关插件，无需再跳转到插件市场安装
* 修复 uniCloud uniCloud在项目关闭运行时，偶发没有同步结束的Bug

## 3.2.15.20211120-alpha
* 调整 uniCloud admin 改名为 uni-admin [详情](https://uniapp.dcloud.net.cn/uniCloud/admin)

## 3.2.14.20211112-alpha
* 修复 Windows 11 真机运行提示wmic错误的Bug
* 修复 App manifest.json 勾选使用原生隐私政策提示框 再次打开manifest.json后 此选项没有被勾选的Bug

## 3.2.13.20211110-alpha
* 新增 uni-app 支持运行和发布到 飞书小程序
* 修复 MacOSX Xcode13 运行uniapp项目到iOS模拟器，iOS模拟器无法自动启动的的Bug
* 优化 代码悬浮提示 超过1M大小的文件不显示悬浮提示框
* 修复 当用户环境变量中配置的max-old-space-size过大时导致node进程启动失败的Bug [详情](https://ask.dcloud.net.cn/question/133144)
* 优化 App manifest.json 打开速度
* 新增 App manifest.json App常用其它设置 增加设置项 生成iOS平台符号表(dsym)文件
* 新增 App manifest.json App模块配置 定位 增加设置项 系统定位
* 优化 App manifest.json App模块配置 定位 支持多选
* 删除 uni-app manifest.json App模块配置 删除统计配置项

## 3.2.12.20211028-alpha
* 修复 uniCloud 关联项目解除关联后，重启HBuilderX后项目管理器还显示关联项目的Bug
* 修复 uniCloud 关联项目 发行到H5 某些情况下，提示未关联服务空间的Bug
* 优化 uniCloud 新建DB Schema，选择非默认模板，自动填充模板名称到新建文件名输入框
* 优化 uniCloud 云函数上传ContentAccessDenied错误，控制台增加解决方法 [详情](https://hx.dcloud.net.cn/Tutorial/Questions/win10-defender-contentaccessdenied)

## 3.2.11.20211021-alpha
* 新增 HBuilderX插件开发断点调试 [详情](https://hx.dcloud.net.cn/ExtensionTutorial/HowToDebug)
* 修复 compile-node-sass插件 设置项onDidSaveExecution不生效的Bug
* 优化 插件API hx.window.createOutputChannel 控制台内容带有URL时，支持点击跳转
* 修复 多文件字符搜索 配置过滤模式，过滤模式文本颜色没有置灰的Bug
* 修复 多文件字符搜索 配置过滤模式，某些情况下，过滤模式被清除导致搜索结果错误的Bug
* 修复 字符搜索和多文件搜索切换，搜索条件内容被清除的Bug
* 优化 uniCloud 新建数据集合schema文件
* 修复 uniCloud 断点调试 开启断点调试后，无法正常运行其它云函数的Bug
* 修复 断点调试 在多个文件加上断点，某些情况下，Debug视图点击继续，断点所在行没有选中的Bug
* 修复 断点调试 鼠标滚动时，悬浮提示窗口没有消失的Bug
* 修复 uniapp-cli vue3项目，无法运行发行app的Bug [详情](https://ask.dcloud.net.cn/question/132565)
* 修复 uniapp-cli vue3项目，以SSR方式发行，提示未绑定服务空间的Bug

## 3.2.10.20211013-alpha
* 新增 uniCloud云函数断点调试 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=debug)
* 新增 代码提示 鼠标悬停 显示代码帮助悬浮窗口 [详情](https://hx.dcloud.net.cn/Tutorial/Language/Overview?id=hover-code-assist)
* 新增 终端 支持点击URL跳转到浏览器 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/terminal?id=open-links)
* 修复 终端 当输入内容超过一定长度时，换行显示错误的Bug
* 修复 控制台或终端，创建多个时，HBuilderX整体窗口超出屏幕范围的Bug
* 修复 代码格式化导致编辑器上的书签丢失的Bug
* 修复 uniCloud 某些情况下，无法绑定其它项目服务空间的Bug
* 优化 原生App-云打包 当项目下uniCloud未关联服务空间时，提交打包，增加弹窗提示

## 3.2.8.20210923-alpha
* 修复 3.2.7-alpha引出的 设置，显示换行符，编辑器文件换行符渲染错误的Bug
* 修复 3.2.7-alpha引出的 vue3-cli项目，background-color代码提示错误的Bug

## 3.2.7.20210919-alpha
* 新增 设置项 更新设置 支持配置是否检查更新，默认启动时自动检查更新 （【设置 - 常用配置】，检查更新）
* 新增 编辑器 删除连续的空格时, 根据设置的tab宽度, 一次性进行删除
* 新增 Markdown, 有序列表删除或插入, 自动修正序号
* 新增 js import {} 按需导入，{}内换行自动补上逗号
* 修复 新建项目 当项目存储路径尾部带有/时，新建项目导致编辑器闪退的Bug
* 修复 HBuilderX编辑器无法渲染阿拉伯语的Bug
* 升级 eslint-vue插件 解决vue3 template多个root时校验出错的Bug
* 修复 MacOSX 某些情况下，打开终端，终端顶部内容被挤压的Bug
* 修复 Git 当项目管理器项目为Git项目子目录时，文件修改后，项目管理器没有显示相应标记的Bug
* 修复 Git 在单窗体中，打开Git项目，项目管理器项目名称后面，没有显示Git分支信息的Bug
* 修复 Git 项目管理器，相同前缀项目，某些情况下，git分支信息显示异常的Bug [详情](https://ask.dcloud.net.cn/question/130696)
* 优化 Git 推送 当本地分支没有跟踪远程分支时提示用户输入远程仓库
* 调整 HBuilderX编辑器顶部菜单【帮助 - 许可协议】，调整为在线链接，点击后跳转到浏览器打开
* 修复 菜单【编辑 - 缩进】调整缩进，某些情况下，在当前编辑器没有生效的Bug
* 修复 代码提示 vue3 cli项目，script内，某些代码块无法提示的Bug
* 修复 代码提示 vue3 cli项目，setup函数，return内无法提示定义变量的Bug
* 修复 外部命令 userInput, 某些情况下没有生效的Bug
* 新增 uniapp 发行H5 支持以SSR方式发行 [详情](https://uniapp.dcloud.io/collocation/ssr)
* 优化 uniapp manifest.json 取消使用原生隐私政策提示库，增加确认弹窗
* 修复 uniapp-cli manifest.json 勾选使用原生隐私政策提示库，自动创建的androidPrivacy.json文件位置错误的Bug
* 新增 uniCloud 云函数require公共模块 支持提示公共模块名称
* 调整 App manifest.json QQ通用链接上传apple-app-site-association规则 [参考](https://wiki.connect.qq.com/%E5%A1%AB%E5%86%99%E5%8F%8A%E6%A0%A1%E9%AA%8Cuniversallinks)
* 调整 App Android平台 打包，没有配置icon时，不再添加橘红色图标

## 3.2.6.20210901-alpha
* 新增 HBuilderX 支持本地语言扩展 (菜单【工具】，可切换其它语言) [详情](https://github.com/dcloudio/hbuilderx-language-packs)

## 3.2.5.20210827-alpha
* 【重要】新增 uni-app Vue3 版本 支持运行和发行到 App
* 优化 vue3 代码提示、转到定义
* 新增 设置项 帮助我们改进HBuilderX的功能和性能 允许用户自主选择是否上报使用情况统计信息和崩溃报告 [详情](https://hx.dcloud.net.cn/Tutorial/CrashReporter)
* 新增 代码提示 package.json文件 增加相关字段提示
* 修复 Windows 某些情况下，复制操作，导致QQ、搜狗拼音输入法无法输入英文;,.标点符号的Bug
* 修复 MacOSX 操作系统自带的简体拼音输入法，输入easycom，编辑器出现崩溃的Bug
* 修复 MacOSX 编辑器开启【失去焦点时自动保存】功能后，处于dirty状态下的文件关闭时弹出对话框后编辑器无响应的Bug
* 修复 视图 前端网页托管，在地址栏，双击根目录/，编辑器闪退的Bug
* 修复 未启用.editorconfig支持 当.editorconfig文件存在错误，依然弹窗提示的Bug
* 修复 Git 某些情况下，因.git/index.lock文件导致git命令运行失败的Bug
* 优化 uniCloud 关联其它项目的服务空间逻辑 不支持关联协作者服务空间项目
* 修复 uni_modules 插件市场导入`uni_modules`插件，某些情况下，提示`处理外部应用请求未能完成`的Bug
* 新增 uni-app Vue3 版本 发行到H5 支持以SSR方式发行
* 优化 App 原生打包 iOS 不再支持构建越狱包
* 删除 App manifest.json App模块配置 移除小米登录、讯飞语言、广告基础功能
* 优化 App manifest.json 将“QQ平台通用链接”和“新浪微博平台通用链接”的标题名称统一更改为iOS平台通用链接
* 优化 App manifest.json 微信自动生成的通用链接的结尾加上/

## 3.2.1.20210811-alpha
* 【重要】新增 uni-app 支持运行和发布到 快手小程序
* 新增 项目管理器 对被自定义编辑器关联的文件，增加“打开方式”菜单（【设置】源码视图，增加自定义编辑器文件关联配置）
* 新增 插件市场 导入uniapp原生SDK项目 导入HBuilderX后，自动将appid和pluginID绑定
* 修复 App 真机运行 某些情况下，获取iOS自定义基座版本号错误，导致每次修改代码都会重新安装基座到手机的Bug
* 优化 uni-app 新建项目 包含付费云函数的项目 自动拉起初始化向导
* 新增 uni-app 插件大赛一等奖获奖作品内置到新建项目模板中 [详情](https://ask.dcloud.net.cn/article/39133)

## 3.2.0.20210801-alpha
* 【重要】新增 uni-app项目在 manifest-基础配置中 切换项目的 vue版本 使用2或3 （vue3版暂不支持app） [详情](https://ask.dcloud.net.cn/article/37834)
* 新增 Git插件 支持在项目管理器上显示Git分支并可点击进行快捷操作 [详情](https://hx.dcloud.net.cn/Tutorial/SourceControl/git)
* 新增 左下角账号快捷切换
* 新增 设置项 选择自动换行方式 按单词截取、按字符截取 （【设置 - 编辑器配置】，选择自动换行方式）
* 新增 插件API 插件command支持声明快捷键 [详情](https://hx.dcloud.net.cn/ExtensionDocs/ContributionPoints/README?id=keybindings)
* 新增 插件API 新增when表达式 isMac、isWindows、editorHasSelection [详情](https://hx.dcloud.net.cn/ExtensionDocs/ContributionPoints/README?id=when)
* 修复 自定义主题 编辑器上某些颜色无法自定义的Bug
* 修复 项目管理器 单击预览文件，文件缩进和.editorconfig缩进配置不一致的Bug
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
* 优化 uniCloud clientDB的field代码提示
* 新增 uniCloud 初始化向导 增加【部署项目下的DB Schema及扩展校验函数】选项
* 新增 uniCloud 前端网页托管 支持协作者上传网站到服务器
* 优化 uniCloud 前端网页托管 优化上传网站到服务器的界面
* 修复 uniCloud 创建公共模块、uni-clientDB-actions、schema、validateFunction时，同类资源本地存在同名时提示语不正确的Bug
* 优化 uni-app 发行到H5、制作wgt，增加校验
* 新增 App manifest.json 一键生成iOS通用链接 支持QQ登录、QQ分享、新浪微博登录、新浪微博分享 [详情](https://uniapp.dcloud.io/api/plugins/universal-links)

## 3.1.22.20210707-alpha
* 修复 插件开发 Windows 控制台日志部分路径无法打开的Bug
* 修复 MacOSX 3.1.20引出的 右键菜单快捷键没有显示在菜单中的Bug
* 修复 uniCloud 下载所有DB Schema及校验函数，勾选全部应用，编辑器闪退的Bug

## 3.1.21.20210624-alpha
* 无

## 3.1.20.20210623-alpha
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
* 修复 代码提示 代码助手处于数字模式时，当按下的数字大于可选项的个数时无法输入的Bug
* 新增 代码提示 uniCloud 支持提示关联项目的schema、collection
* 修复 uniCloud 云服务空间初始化向导 当加密云函数时，某些情况下初始化失败的Bug

## 3.1.19.20210613-alpha
* 优化 代码提示改为异步获取提示数据 避免某些情况计算时间过长卡UI
* 新增 支持自定义编辑器代码颜色 [详情](https://hx.dcloud.net.cn/Tutorial/themes?id=自定义编辑器代码颜色)
* 调整 json文件代码的高亮逻辑
* 修复 MacOSX 3.1.16引出的 自带中文输入法输入英文会造成部分类型的文件着色失效的Bug
* 修复 MacOSX 3.1.16引出的 10.13.6操作系统，某些情况下，HBuilderX无法启动的Bug
* 修复 Windows 3.1.16引出的 vue-cli项目，当电脑本身没有安装node环境时，运行项目到内置终端，相关npm命令执行失败的Bug
* 修复 雅蓝、酷黑主题 HTML无效标签被加上背景色的Bug
* 优化 酷黑、雅蓝主题 代码助手 选中文本颜色
* 修复 代码助手 数字模式 sass文件，某些css属性值无法正确输入数字的Bug
* 修复 标签栏空白处，右键菜单，关闭所有标签卡功能无效的Bug
* 修复 底部区域标签卡过多时（比如启动多个运行项目，打开多个终端），导致窗口被撑大，并且无法缩放的Bug
* 修复 Markdown添加列表快捷键，在其它非Markdown文件也生效的Bug
* 修复 真机运行 某些Android 11系统真机运行同步文件失败的Bug
* 新增 App 原生App-云打包 Android打包 支持使用云端证书 [详情](https://ask.dcloud.net.cn/article/35985#server)
* 新增 uni-app vue3 支持以SSR方式运行、发行H5

## 3.1.17.20210603-alpha
* 【重要】调整 alt+鼠标滚动的行为从横向滚动调整为竖向滚动一屏。横向滚动为shift+鼠标滚轮
* 强化 各种鼠标滚轮功能，横向竖向滚动、滚3行滚一屏 [详情](https://hx.dcloud.net.cn/Tutorial/keybindings?id=鼠标滚轮)
* 新增 自定义右键菜单。编辑器和内置资源管理器 `Alt + 鼠标右键`弹出自定义右键菜单
* 新增 从Git导入项目 托管在 csdn codechina 的项目可以快速导入 [详情](https://ext.dcloud.net.cn/plugin?id=4882)
* 新增 打通csdn和HBuilder的账户，在csdn web界面可使用HBuilder账户登录，并管理 code china 的Git项目
* 新增 设置 增加启用自动匹配字符功能 （【设置 - 编辑器配置】，启用自动匹配字符功能）
* 修复 3.1.16引出的 某些情况下，懒加载状态下，关闭所有已保存标签卡时，未保存的标签卡也被关闭的Bug
* 修复 3.1.16引出的 某些情况下，懒加载状态下，关闭未保存标签卡，未保存的标签卡没有提示直接被关闭的Bug
* 修复 3.1.16引出的 调整编辑器缩放等级后，引发其他编辑器字符位置不正确的Bug
* 修复 3.1.16引出的 多文件字符搜索结果页面，按alt或command键，编辑器闪退的Bug
* 修复 3.1.16引出的 某些情况下，编辑器最大化，账号登录异常、项目管理器图标异常等Bug
* 修复 3.1.16引出的 MacOSX 带空格的目录 打开文件所在目录失败的Bug
* 修复 3.1.16引出的 原生App-云打包，打包结果控制台，某些情况下，一键上传到uniCloud，点击没有反应的Bug
* 修复 项目管理器 重命名预览打开的文件，编辑器预览文件内容变空白的Bug

## 3.1.16.20210526-alpha
* 【重要】升级 HBuilderX 内置node版本升级为12.22，内置npm版本升级为6.4
* 新增 区域内搜索 选中一段文字，在顶部搜索栏选中区域搜索【Ctrl+Shift+f】，可以在特殊背景区内搜索、替换、全选相同词 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/find?id=区域内搜索)
* 优化 Vue、JavaScript(ES6+)、HTML(ES6+)、Markdown、Typescript等语言的语法着色速度，即相关大文档打开速度
* 调整 js文件的默认编辑器从JavaScript调整为JavaScript(ES6+)
* 调整 html文件的默认编辑器从HTML调整为HTML(ES6+)
* 优化 编辑器内长行的渲染性能，解决存在长行时编辑文字、滚动以及选择区域卡顿的Bug
* 优化 html/css/js/vue等文件 右键菜单，内置菜单【验证本文档语法】，当插件未安装时提示安装
* 修复 某些情况下，因配置文件损坏，导致HBuilderX无法启动的Bug
* 优化 插件安装 NodeJS插件npm安装失败时，提示具体失败原因
* 新增 代码助手窗口 匹配项高亮功能 [详情](https://hx.dcloud.net.cn/Tutorial/Language/CodeAssistant?id=代码助手匹配项高亮)
* 优化 代码助手窗口 选择模式切换功能 [详情](https://hx.dcloud.net.cn/Tutorial/Language/CodeAssistant?id=代码助手窗口切换选择模式)
* 优化 支持自定义设置折叠展开方式，可设置是否展开子行（【设置 - 编辑器配置】，代码展开方式）
* 修复 HTML标签属性 在引号内，按下tab，引号内容变成为html标签的Bug
* 优化 MacOSX 代码提示窗口 支持ctrl+p/n，上下移动选中代码
* 修复 vue-cli项目 template内，无法提示html标签代码块的Bug
* 修复 vue-cli项目 某些情况下，当转到定义的内容处于折叠区域，转到定义，没有展开折叠的Bug
* 优化 插件API registerUriHandler schema请求，浏览器调起HBuilderX后，当本地未安装相应插件时，支持直接在编辑器内安装插件，无需再跳转到插件市场
* 修复 插件API hx.workspace.getConfiguration() update操作，无法更新值为Object的Bug
* 修复 插件API hx.window.setStatusBarMessage, 带有url的消息无法跳转的Bug
* 修复 插件API setSelection 当文件中存在中文时，设置主选择区域错误的Bug
* 新增 HBuilderX CLI 支持命令行打开指定文件，并跳转到指定行列 [详情](https://hx.dcloud.net.cn/cli/file)
* 修复 HBuilderX CLI 终端执行多条CLI命令，不同CLI命令行日志相互串连的Bug
* 修复 HBuilderX CLI pack 命令行参数--iscustom没有生效的Bug
* 修复 HBuilderX CLI 新创建的项目，Android第一次打包，终端打印警告提示语后cli程序退出的Bug
* 优化 HBuilderX 插件项目类型识别
* 新增 项目管理器 项目右键菜单，增加菜单【托管当前项目】
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
* 优化 新建项目窗口 单选按钮UI样式
* 优化 扩展视图 SFTP视图 增加文件夹图标
* 修复 选中一段代码 按下双引号，ctrl+z撤销错误的Bug
* 修复 选中一段代码 智能双击包围操作，撤销逻辑错误的Bug
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
* 修复 3.1.10引出的，某些情况下，项目管理器展开特定目录，导致HBuilderX闪退的Bug
* 优化 插件市场 导入插件，拉起HBuilderX，选择项目窗口别名UI
* 修复 插件市场 导入uniCloud相关插件，切换云厂商时，已选好的项目名称被重置的Bug
* 优化 视图 显示前端网页托管 本地拖曳多个文件上传，每个文件上传后，文件列表实时刷新
* 修复 前端网页托管 在文件上传过程中，点击HBuilderX关闭按钮，导致HBuilderX失去响应的Bug
* 修复 前端网页托管 当文件上传确认弹窗和标签卡拖曳动作重叠时，导致编辑器UI异常的Bug
* 优化 前端网页托管 控制台日志，当有跳过的文件时，最后汇总显示跳过的文件数量
* 优化 前端网页托管 上传网站到服务器，自动记住上次选择的云服务空间
* 修复 3.1.15版本引出的 某些情况下，uni_modules插件菜单重复的Bug
* 修复 uni-app 新建页面 某些分辨率的电脑，新建页面窗口显示不全的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I1YP5O)
* 修复 uniapp-cli 创建uniCloud云开发环境 自动创建的uni_modules目录位置不对的Bug
* 修复 uniapp-cli 插件市场导入uniCloud插件，pages等目录创建错误的Bug
* 修复 uniCloud 初始化数据库，在网络不好或其他情况下，连续多次点击， 导致HBuilderX闪退的Bug
* 修复 uniCloud 某些情况下，从插件市场导入云函数插件，导入到本地后，创建的目录无法展开，刷新后也没反应的Bug
* 修复 uniCloud JQL文件 按住Alt，某些情况下，导致编辑器闪退的Bug
* 修复 App 发行小程序 windows 在输入框中，按下tab，焦点跳转到取消按钮上的Bug
* 新增 App 原生App-云打包，打包结果控制台，增加【一键上传到uniCloud】功能，免费cdn
* 优化 App 原生App-云打包，代码编译中、或提交打包过程中，打包窗口底部打包按钮设为禁用状态，避免重复点击
* 修复 App 原生App-云打包，打包过程中，手动关闭打包窗口，HBuilderX崩溃的Bug
* 新增 Apk、ipa文件 支持直接安装到手机 (项目管理器，选中文件，右键菜单，安装到手机)
* 优化 App 制作应用wgt包 原生混淆 记住上次勾选状态

## 3.1.15.20210518-alpha
* 修复 代码提示 try catch内，没有代码提示的Bug
* 新增 插件扩展示例webviewdialog 用于演示插件API webviewdialog的基本操作
* 修复 项目管理器 项目执行Git初始化后，项目文件状态没有刷新的Bug
* 优化 uniCloud schema文件，右键菜单，增加【schema2code】，且支持schema2code插件随着HBuilderX的升级而升级
* 优化 uniCloud schema2Code 不生成pages.json，而改成pages_init.json，差量合并新页面
* 修复 App 安心打包，当勾选原生混淆时，第二次安心打包失败的Bug

## 3.1.14.20210430-alpha
* 新增 Git托管服务。集成CSDN CodeChina插件。新建项目或对老项目点右键可一键托管到Git [详情](https://ext.dcloud.net.cn/plugin?id=4882)
* 修复 3.1.4版本引出的 新设备 某些情况下，首次启动，第一次点击编辑器没有反应，第二次点击才能启动的Bug
* 修复 uniCloud udb代码块 data没有提示的Bug
* 修复 App 原生App-云打包 服务器返回警告弹窗，用户点击取消，仍继续打包的Bug
* 优化 App 安心打包 使用原生插件时打包的App体积减小
* 修复 Windows App 制作应用wgt包 由于文件被占用，第二次制作失败的Bug

## 3.1.10.20210416-alpha
* 【重要】新增 vue3 代码提示、转到定义，仅支持vue-cli项目
* 【重要】新增 HBuilderX CLI 部署云函数、管理云服务空间 [详情](https://hx.dcloud.net.cn/cli/uniCloud)
* 【重要】新增 HBuilderX CLI 部署和管理前端网页托管 [详情](https://hx.dcloud.net.cn/cli/uniCloud-hosting)
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
* 新增 uniCloud schema2code插件，快速生成增删改查页面 [详情](https://ext.dcloud.net.cn/plugin?id=4684)
* 新增 uniCloud JQL查询 增加查看【全部信息】、【只看data】功能
* 新增 uniCloud 公共模块 增加可视化管理公共模块依赖 （对公共模块点右键->管理公共模块依赖）
* 调整 uniCloud 项目运行 默认连接本地云函数
* 移除 uniCloud cloudfunctions目录 右键菜单 移除“同步云端函数列表”
* 修复 uniCloud 某些情况下，uni_modules下的云函数上传没有反应的Bug
* 修复 uniCloud 单项目窗体下，关联云服务空间或项目，绑定其它项目的服务空间，项目列表显示不完整的Bug
* 新增 App 原生打包 打包控制台 打开所在目录，改为打开内置资源管理器
* 修复 App Android安心打包，打包多个渠道时，只有第一个渠道打包成功，剩余渠道包打包失败的Bug
* 修复 App Android安心打包，Windows电脑，某些情况下，因JAVA虚拟机内存问题，导致打包失败的Bug
* 新增 App manifest.json 一键生成iOS通用链接 [详情](https://uniapp.dcloud.io/api/plugins/universal-links)
* 优化 App manifest.json AppID增加选择复制功能

## 3.1.8.20210407-alpha
* 修复 uniCloud `uni_modules`公共模块，依赖另一个`uni_modules`公共模块，上传所有云函数、公共模块及actions，公共模块依赖关系丢失的Bug

## 3.1.6.20210318-alpha
* 修复 MacOSX 内置浏览器 右键菜单【查找代码中对应的DOM节点】菜单丢失的Bug [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/built-in-browser)
* 修复 插件市场 云端一体页面模板 导入HBuilderX，某些情况下，页面路径创建错误的Bug

## 3.1.5.20210316-alpha
* 【重要】新增 HBuilderX CLI 支持命令行调用App打包、启动HBuilderX等操作 [详情](https://hx.dcloud.net.cn/cli/README)
* 【重要】新增 uniCloud JQL查询调试器 (uniCloud/database目录下打开JQL文件，若无文件可以右键菜单【新建JQL查询文件】) [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-runner)
* 新增 文件编辑状态指示。当行内容发生未保存变动，行首显示相应色块，鼠标悬浮色块上可预览编辑前的内容
* 修复 MacOSX M1芯片的电脑，svn操作，提示`svn: command not found`的Bug
* 修复 js语句，某些情况下，回车没有自动补充行尾逗号的Bug [详情](https://ask.dcloud.net.cn/question/118525)
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

## 3.1.4.20210303-alpha
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
* 修复 uni-app manifest.json 原生插件选择窗口 某些情况下，无法关闭的Bug
* 优化 uni-app 新建组件，模板文件自动添加组件名称
* 新增 uniCloud 关联云服务空间或项目窗口，增加新建服务空间、刷新服务空间功能
* 修复 uniCloud 初始化向导 数据库初始化窗口，点击取消按钮、或关闭窗口后，再次上传云函数，弹出数据库初始化窗口的Bug
* 调整 为兼容hbuilderx 3.1.0+，openDB 表uni-id-address字段名：default，改为：is_default [详情](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-address/collection.json)
* 修复 uniCloud 初始化向导 某些情况下，没有执行初始化数据库的Bug

## 3.1.3.20210219-alpha
* 修复 App manifest.json App原生插件配置 云端插件 含输入框配置项没有显示的Bug
* 修复 uniCloud uni_modules下的云函数, 依赖项目根目录uniCloud下的公共模块时，上传失败的Bug
* 修复 uni_modules 项目模板无法从插件市场更新的Bug

## 3.1.2.20210206-alpha
* 修复 uniCloud 云函数，上传部署，依赖的uni_modules公共模块没有上传的Bug

## 3.1.1.20210204-alpha
* 优化 uniCloud 前端网页托管 文件上传效率，速度提升数倍
* 修复 uniCloud 云函数管理公共模块依赖当uni_modules名称长度比较大时UI上出现名称重叠的Bug
* 修复 uniCloud 云函数管理公共模块依赖某些情况下不显示uni_modules下的公共模块的Bug
* 优化 uniCloud 下载所有云函数、公共模块及actions, 控制台增加相关日志
* 修复 uni_modules 删除 module 下的 database 时，项目根目录的 uniCloud目录没有自动刷新的Bug
* 修复 uni_modules easycom模式 代码助手无法提示 modules 下 components 的Bug
* 修复 uni_modules 从插件市场更新插件时，部分情况更新失败的Bug

## 3.1.0.20210202-alpha
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

## 3.0.7.20210109-alpha
* 【重要】新增 iOS App 安心打包，无需提交代码和证书到云打包机。更安全、更快捷 (仅支持MacOSX，不支持windows) [详情](https://ask.dcloud.net.cn/article/37979)
* 修复 插件API hx.window.createWebViewDialog 设置窗口大小无效的Bug
* 修复 3.0.4 版本引出的 当编辑器没有打开项目下任何文件，直接在项目管理器选中项目，按下Ctrl+R，HBuilderX闪退的Bug [详情](https://ask.dcloud.net.cn/question/114619)
* 修复 App 真机运行，某些情况下，HBuilderX闪退的Bug
* 修复 App manifest.json App原生插件配置，本地插件，带`.`的key值写入文件异常的Bug
* 修复 App Android 安心打包，某些情况下，打包失败的Bug

## 3.0.4.20201230-alpha
* 修复 前端网页托管 上传文件，控制台打印日志时，无法切换到其它控制台的Bug
* 修复 MacOSX uniCloud 某些情况下，关联项目后解除关联，文件夹没有刷新的Bug
* 修复 uniCloud 迁移cloudfunctions目录 当项目存在cloudfunctions_init.json时，迁移后云函数package.json文件dependencies字段内容丢失的Bug

## 3.0.3.20201228-alpha
* 修复 3.0.0 版本引出的 HBuilderX标准版 首次启动后 某些情况下，代码块无法正常使用的Bug

## 3.0.2.20201225-alpha
* 无

## 3.0.1.20201223-alpha
* 新增 插件API hx.window.createWebViewDialog 创建内容区可由HTML编写的模态对话框 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=createwebviewdialog)
* 修复 uni-app 新建页面 选择分包后，`在pages.json中注册`复选框，去掉勾选再次点击，导致HBuilderX崩溃的Bug [详情](https://ask.dcloud.net.cn/question/113869)
* 修复 Windows App manifest.json App常用其它配置 勾选CPU类型，列表框变成白色背景Bug
* 修复 App 原生打包窗口 勾选广告后，manifest.json中自定义的广告数据被清除的Bug

## 3.0.0.20201219-alpha
* 【重要】DCloud开发者开放平台上线。向开发者服务商开放账户和流量。 [详情](https://open.dcloud.net.cn/)
* 【重要】新增 插件API hx.authorize 插件可获取HBuilderX登录用户的授权。类似于微信小程序中的微信登录。三方开发者服务商（如Git服务商）可与HBuilderX账户打通。 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=authorize)
* 新增 插件API hx.window.showMessageBox 创建简单的对话框 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=showmessagebox)
* 新增 插件API hx.workspace.copyFileWithPrompt 可将指定文件或文件夹拷贝到目标文件夹下 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=copyfilewithprompt)
* 优化 插件API when表达式，支持正则匹配 [详情](https://hx.dcloud.net.cn/ExtensionDocs/ContributionPoints/README?id=when)
* 优化 MacOSX iOS模拟器列表展示方式，按操作系统版本展示
* 修复 MacOSX 设备运行列表，三级菜单编辑启动页面配置，鼠标滑过时，某些情况下造成iOS模拟器列表卡顿的Bug
* 修复 MacOSX 新版SVN，命令行输出为中文时，解析出错，导致SVN文件对比等功能异常的Bug [详情](https://ask.dcloud.net.cn/question/72358)
* 修复 MacOSX 当SVN仓库URL超长时，导致SVN提交窗口超出屏幕的Bug
* 修复 MacOSX 当html文件存在中文或空格等特殊字符时，运行html到外部浏览器失败的Bug
* 修复 App iOS 原生App-云打包 某些情况下，提示安装Android安心打包插件的Bug
* 新增 App manifest.json iOS设置 关联域，用于配置通用链接域名 [详情](https://ask.dcloud.net.cn/article/36393)
* 修复 插件市场 uniCloud Admin插件 某些情况下，导入插件到HBuilderX，pages.json没有合并的Bug
* 新增 新建同名项目，增加合并、替换操作
* 优化 控制台 消息通知 当控制台产生新日志时，右上角显示消息通知
* 修复 控制台 某些数据类型的日志无法打印的Bug

## 2.9.11.20201121-alpha
* 修复 Android App 安心打包 某些情况下，原生插件打包失败的Bug
* 修复 Android App 安心打包 勾选原生混淆，打包失败的Bug
* 修复 Android App 安心打包 GooglePlay渠道包上线谷歌市场失败的Bug

## 2.9.10.20201117-alpha
* 修复 MacOSX Big Sur系统，HBuilderX启动后CPU使用率过高的Bug

## 2.9.9.20201114-alpha
* 【重要】新增 Android App 安心打包，无需提交代码和证书到云打包机。更安全、更快捷 [详情](https://ask.dcloud.net.cn/article/37979)
* 修复 MacOSX 10.13.6系统，运行app到iOS真机，mdb崩溃的Bug
* 修复 MacOSX Big Sur 11.0.1 Beta系统，运行菜单列表样式显示异常的Bug
* 修复 MacOSX Big Sur 11.0.1 Beta系统，运行app到iOS模拟器、Android出错的Bug
* 修复 Windows 某些情况下，插件市场导入插件，打开新HBuilder窗体的Bug
* 修复 某些情况下，内置资源管理器外部文件，点击右键菜单，造成编辑器崩溃的Bug
* 修复 某些情况下，转到定义丢失位置记录，导致后退时跳转位置不对的Bug
* 修复 uniapp-cli项目，新建页面，提示pages.json存在错误的Bug
* 新增 uniCloud uni-clientDB-actions 支持单文件上传、删除
* 优化 uniCloud db_init.json 当云数据库存在同名数据表时，提示覆盖的窗口UI

## 2.9.7.20201103-alpha
* 修复 新建项目 某些情况下，普通项目模板，第二次创建失败的Bug
* 修复 MacOSX 2.9.6版本引出的 项目管理器右上角菜单列表样式异常的Bug

## 2.9.6.20201031-alpha
* 修复 选择所有相同词，文档尾部有匹配结果时，搜索范围设置越界导致编辑器崩溃的Bug
* 修复 当本地存在遗留文件或同名文件时，插件安装失败的Bug
* 修复 Windows 隐藏操作系统任务栏，HBuilderX窗体最大化后，鼠标移动到屏幕底部，无法自动弹出任务栏的Bug
* 修复 MacOSX Big Sur 11 Beta系统，uniCloud，关联云服务空间，编辑器出现闪退的Bug
* 修复 MacOSX Big Sur 11 Beta系统，鼠标滑过扩展插件视图后，编辑器出现闪退的Bug
* 修复 MacOSX Big Sur 11 Beta系统，多次按下`添加收藏`快捷键后，编辑器出现闪退的Bug
* 修复 MacOSX Big Sur 11 Beta系统，云端打包窗口，tab标签卡显示空白的Bug
* 优化 uni-app 新建页面 选择单页面模板，创建页面前，检查pages.json是否存在语法错误
* 修复 uni-app 新建页面 当项目已存在云服务空间，选择云端一体列表页面模板，仍弹窗提示选择云服务空间的Bug
* 修复 uni-app 非cloudfunctions目录下，common目录右键菜单出现`新建公共模块`和`同步公共模块列表`的Bug
* 新增 代码块 udb，快速创建`<uni-clientdb>`组件

## 2.9.5.20201024-alpha
* 修复 MacOSX Big Sur 11 Beta系统，无法检测到ios真机的Bug
* 修复 内部资源管理器 地址栏下拉列表，切换目录，导致编辑器闪退的Bug
* 修复 多文件搜索，搜索结果窗口内容过长时导致编辑器闪退的Bug
* 修复 某些情况下，点击对话框上按钮后，切换主题、新建窗体后编辑器闪退的Bug
* 优化 无边框窗口（新建项目、新建页面等窗口），支持鼠标拖曳移动
* 修复 新建HBuilder窗体，工具栏显示异常的Bug
* 修复 SFTP 当SFTP视图已打开时，再次点击`浏览远程文件`，没有跳转到SFTP视图的Bug
* 修复 插件API 某些情况下，因线程问题，导致插件扩展菜单失效的Bug
* 修复 插件API 某些情况下，自定义编辑器重复打开，导致webView创建失败的Bug
* 优化 插件API getActiveTextEditor lineFromPosition方法，返回lineNumber，可以获取到当前光标所在行行号
* 修复 插件市场导入项目到HBuilderX, 编辑器弹出付费协议窗口的Bug
* 优化 插件导入加入对HBuilderX版本号的判断，当本地版本小于要求时，提醒用户升级
* 调整 新建项目 移除微信小程序项目的创建，请在微信工具中创建项目。HBuilderX 仍然可以导入和编辑微信小程序项目
* 修复 uni-app easycom规则没有配置的情况下，代码提示时组件不提示的Bug
* 修复 uniCloud 单项目窗体上，新建项目后，重复弹出初始化向导窗体的Bug
* 优化 uniCloud 前端网页托管 增加上传文件超过设定大小（50MB）限制的提示
* 优化 uniCloud 前端网页托管 当已配置自定义域名时，上传网站到服务器、MarkDown一键分享，控制台日志显示自定义域名路径
* 修复 uniCloud 某些情况下，上传公共模块或云函数，控制台日志出现`云端运行`文字的Bug
* 新增 uniCloud 未实名认证用户，支持创建阿里云体验服务空间（cloudfunctions目录，右键菜单【运行云服务空间初始化向导...】）

## 2.9.2.20200913-alpha
* 新增 插件API CustomEditor 支持自定义编辑器  [详情](https://hx.dcloud.net.cn/customeditor)
* 优化 快捷键-VSCode方案的全部保存, 修改为`ctrl+k, s`
* 修复 已打开的文件，改变文件后缀名，状态栏语言类型没有改变的Bug
* 修复 Windows 2.9.0版本引出的 uni-app新建页面，导入模版，在根目录下生成空文件夹的Bug
* 修复 MacOS SVN 1.14.0版本 项目管理器文件内容变化后，SVN状态图标没有显示的Bug
* 新增 uni-app uniCloud付费插件的试用引导
* 优化 uni-app 新建页面窗口，获取pages.json文件方式，更快加载pages.json内容
* 优化 uni-app 在分包的目录上，右键菜单点击新建页面，自动在新建页面选择对应的分包目录

## 2.9.1.20200927-alpha
* 修复 Windows 2.9.0版本引出的 在网络不好的情况下，uni-app新建页面，导致编辑器卡顿的Bug

## 2.9.0.20200926-alpha
* 优化 uni-app 新建页面功能。支持在新建页面时直接配置 pages.json 内容，输入标题等。可选更多页面模板，并支持预览内容或图片
* 修复 uni-app 运行到内置浏览器，某些情况下，控制台日志显示不全的Bug
* 修复 插件API registerUriHandler拼写错误的Bug
* 修复 打开前端网页托管时，点击菜单【工具】-【外部命令】，造成编辑器闪退的Bug
* 新增 uniCloud 云服务空间初始化向导，提升使用便利度 （cloudfunctions目录，右键菜单【运行云服务空间初始化向导...】）
* 新增 uniCloud 初始化云函数配置 cloudfunctions_init.json，可在插件市场的插件中配置云函数的参数（如云函数url参数），使用者可在HBuilderX中一键完成配置 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=init)
* 修复 uniCloud 真机运行 调用腾讯云云函数时，控制台不打印云函数运行日志的Bug
* 修复 uniCloud 上传公共模块 没有上传依赖的公共模块的Bug
* 修复 uniCloud 某些情况下，关联服务空间，导致HBuilderX编辑器闪退的Bug

## 2.8.11.20200904-alpha
* 无

## 2.8.10.20200903-alpha
* 修复 项目管理器 TypeScript、xml、word、xslt文件图标错误的Bug
* 修复 Windows 资源管理器，选中多个文件，右键点击Open with HBuilderX，造成编辑器崩溃的Bug
* 新增 HBuilderX 支持跳转到指定的行和列 [详情](https://ask.dcloud.net.cn/article/37732)
* 修复 跨高分屏缩放引起的窗口拖拽的Bug
* uni-app 发行 h5界面 uniCloud云服务空间 增加新建和刷新功能

## 2.8.9.20200829-alpha
* 新增 前端网页托管视图 (菜单【视图】【显示前端网页托管】)
* 修复 Windows 某些AMD显卡的电脑，无法启动HBuilderX的Bug
* 优化 内置浏览器 手机扫码预览界面
* 修复 项目管理器 某些情况下，右键菜单卡顿的Bug
* 修复 搜索 搜索类型下拉列表 某些情况下，造成编辑器崩溃的Bug
* 修复 颜色预览 颜色后面还存其它值时，颜色无法预览的Bug
* 修复 颜色预览 某些hsl、hsla颜色值，预览错误的Bug
* 修复 颜色预览 rgba 当alpha=1的时候，颜色无法预览的Bug
* 修复 markdown一键分享 某些情况下，上传失败后，提示信息仍然提示成功的Bug
* 新增 Git插件 增加`编辑.gitignore`和`添加到.gitignore`功能
* 优化 App manifest.json 调整文件图标

## 2.8.7.20200820-alpha
* 新增 MarkDown 一键分享 [详情](https://ask.dcloud.net.cn/article/37573)
* 修复 文档结构图 显示隐藏操作 导致编辑器焦点丢失的Bug
* 修复 外部命令 当命令数组为空时保存，编辑器崩溃以及无法启动的Bug
* 修复 未命名文件保存和其它文件另存为操作，没有更新导航栏的Bug
* 新增 控制台 URL链接内容 右键菜单 增加复制链接
* 修复 uniCloud进行上传操作后，内置浏览器、内置终端运行异常的Bug

## 2.8.4.20200805-alpha
* 修复 windows 2.8.1版引出的 内置浏览器 右键菜单无法显示的Bug
* 修复 文档结构图 同时打开多个文件，文档结构图出现跳转错误，并造成编辑器崩溃的Bug
* 修复 某些情况下，启动HBuilderX后，立即关闭内置资源管理器标签卡导致编辑器崩溃的Bug

## 2.8.3.20200727-alpha
* 修复 目录内字符搜索结果界面右侧预览的vue、less等语言不着色的Bug [详情](https://ask.dcloud.net.cn/question/102438)
* 修复 菜单 显示左侧视图，菜单名称出现错别字的Bug
* 修复 插件API webView，引出的SFTP视图，右键菜单无法显示的Bug [详情](https://ask.dcloud.net.cn/question/102493)

## 2.8.2.20200724-alpha
* 修复 插件API WebView 某些情况下, 旧的html内容没有被彻底清除的Bug

## 2.8.1.20200721-alpha
* 【重要】新增 uniCloud 本地运行云函数，可连接远程数据库和云存储，大幅提升开发效率，同时方便数据导入导出
* 优化 兼容自定义代码块配置body时不是数组的情况
* 修复 某些情况下，编辑器右键菜单【重排代码格式】置灰了的Bug
* 优化 修改插件配置规范，支持插件配置文件独立 (菜单【设置】【插件配置】)
* 【重要】新增 插件API hx.window.createWebView。可在创建的webview视图中自由绘制自己的界面 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=createwebview)
* 新增 插件API hx.window.registerUriHanlder，支持从浏览器打开HBuilderX并自动安装或激活某插件 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=registerurihandler)
* 修复 插件API getActiveTextEditor()获取临时编辑器url出错的Bug
* 修复 插件API 2.7.12版引出的showInputBox无法使用的Bug
* 修复 插件API 消息通知框，当按钮文字太长时，显示不全的Bug
* 修复 前端网页托管 某些情况下，获取服务空间列表失败，导致编辑器闪退的Bug
* 优化 manifest.json App启动图，iOS 自定义storyboard启动界面，兼容zip压缩包多一层目录的情况

## 2.8.0.20200701-alpha
* 【重要】新增 前端网页托管 通过uniCloud，提供免费、高速、安全、免运维的网页部署云服务 [详情](https://uniapp.dcloud.io/uniCloud/hosting)
+ 入口1：选中web项目，点击菜单发行-上传网站到服务器
+ 入口2：uni-app发布为H5时，勾选 直接部署到前端网页托管
* 修复 内部资源管理器 新建或重命名文件后，焦点错误的Bug
* 修复 内部资源管理器 项目名称过长时，地址栏文件名宽度错误的Bug
* 修复 某些rgb颜色预览错误的Bug [详情](https://ask.dcloud.net.cn/question/99287)
* 新增 底部控制台 右键菜单，支持自定义快捷键 [详情](https://ask.dcloud.net.cn/article/37482)
* 修复 Mac 设置-常用设置中字体列表没有显示的Bug
* 修复 插件市场 使用HBuilderX导入插件，调起HBuilderX后，编辑器窗口没有前置的Bug
* 修复 eslint-vue插件 获取workdspaceFolder时插件API调整造成的兼容Bug
* 修复 jsx后缀的文件没有代码提示的Bug
* 【重要】新增 App manifest.json - App启动图，支持iOS 自定义storyboard启动界面（6月30日起Appstore强制要求storyboard）[详情](https://ask.dcloud.net.cn/article/37475)
* 新增 真机运行 支持iOS14_beta系统版本
* 修复 WebView调试 在新版Chrome(83.x版本) 上无法使用的Bug
* 修复 uni-app cli项目 提交打包 因缺少cliVersion和baseVersion字段，导致服务器不能正确分配打包机的Bug
* 优化 App manifest.json 将`App SDK配置`，合并到 App模块配置 中。选择模块后，如涉及SDK配置，则会出现相应界面
* 优化 App manifest.json - `App SDK配置`，支持三方SDK仅用于单一手机OS。比如只在Android上配高德定位、微信支付、支付宝支付，而在iOS上不启用。避免每次打包前调整manifest

## 2.7.13.20200615-alpha
* 无

## 2.7.12.20200613-alpha
* 【重要】HBuilderX插件市场上线，欢迎大家提交插件 [详情](https://ext.dcloud.net.cn/?cat1=1)
* 优化 FTP/SFTP插件，支持在左侧页签浏览远程FTP目录（对FTP项目右键，浏览远程文件）[详情](https://ask.dcloud.net.cn/article/37430)
* 优化 新建项目时下载项目模板失败的情况
* 优化 文档结构图反复打开会导致内存泄漏的Bug
* 修复 资源管理器 因文件关联导致图标空白的Bug
* 新增 插件API window.createTreeView 支持创建treeview视图，在项目管理器右侧以tab方式展现新的树形列表 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=createtreeview)
* 新增 插件API views、viewContainers配置扩展点，可以扩展新的UI视图 [详情](https://hx.dcloud.net.cn/views)
* 新增 插件API workspace.getWorkspaceFolders 获取项目管理器下所有的项目对象 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=getworkspacefolders)
* 新增 插件API workspace.getWorkspaceFolder 获取某个文件所在的项目 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=getworkspacefolder)

## 2.7.11.20200602-alpha
* 新增 Windows 普通项目、uni-app项目 支持同步js断点到内置浏览器进行调试（对js代码的左侧行号点右键，选同步断点到内置浏览器）
* 新增 编辑器 全部替换时，状态栏提示总替换数量
* 修复 2.7.6版本，引出的点击行号，无法选中当前行的Bug
* 修复 启用按tab键自动插入代码助手选中项功能，在激活代码助手的情况下，alt+tab等快捷键无响应的Bug
* 优化 编辑器视图下点击工具栏的地址栏上的父目录，打开的项目管理器将自动置焦之前编辑器里的文档
* 修复 编辑器右键菜单复制文件路径复制的是项目管理器中选中的文件路径的Bug
* 修复 项目管理器 右键菜单在空白位置时仍然能获取到当前文件的Bug
* 修复 内部资源管理器 重命名单个文件后，文件选择状态丢失的Bug
* 新增 插件API workspace.onDidChangeConfiguration 事件回调
* 新增 插件API workspace.onDidChangeWorkspaceFolders 事件回调
* 新增 uni-app 支持条件编译平台MP-360,QUICKAPP-WEBVIEW的代码提示和高亮
* 调整 移除快应用项目的创建、运行，请改为使用uni-app开发快应用

## 2.7.8.20200525-alpha
* 无

## 2.7.7.20200522-alpha
* 修复 插件API WorkspaceFolder.uri类型没有转换到正确的Uri类型上的Bug

## 2.7.6.20200521-alpha
* 新增 HBuilderX版本更新支持显示下载进度，并提供多源下载以适配多种网络环境
* 新增 xml文件 支持文档结构图
* 新增 代码助手 支持按Tab键自动插入代码助手选中项（默认关闭，可在【设置】【编辑器设置】中开启）
* 优化 新建项目、新建文件UI
* 修复 代码块扩展点配置项目类型没有生效的Bug
* 修复 未保存的文件，切换文件编码，导致未保存内容丢失的Bug
* 修复 某些情况下，带有中文的文件再次打开后，因编码格式错误导致中文显示乱码的Bug 详情
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

## 2.7.4.20200515-alpha
* 无

## 2.7.3.20200514-alpha
* 修复 Windows 运行项目到内置浏览器，某些情况下日志重复打印的Bug

## 2.7.2.20200513-alpha
* 优化 新建插件项目时，增加项目名称合法性校验
* 修复 插件Api onDidChangeTextDocument 的回调中doc对象缺失某些属性的Bug
* 修复 插件Api executeCommand 内部命令同步执行时存在超时的Bug
* 修复 设置 运行设置，百度、QQ小程序开发者工具下载链接显示不正确的Bug
* 修复 uni-app easycom组件模式，因校验规则变动，导致代码提示错误的Bug

## 2.7.1.20200510-alpha
* 修复 HBuilderX内未保存的文档，在外部修改后，HBuilderX出现多个弹框的Bug
* 修复 vue文件，带有-的标签，某些情况下着色异常的Bug
* 修复 html文件，带有-->的字符串，着色异常Bug
* 优化 插件运行时，Ctrl+r可直接运行和停止插件，不再弹出运行菜单
* 修复 插件市场，云函数模板包含__MACOSX文件夹时，HBuilderX导入错误的Bug
* 调整 App真机运行基座的图标，从红色改为绿色，与HBuilderX图标主色保持一致

## 2.7.0.20200501-alpha
* 【重要】新增 插件开放API，用js编写HBuilderX插件，打造更顺手的开发利器 [详情](https://hx.dcloud.net.cn/)
* 新增 新建项目 普通项目下提供插件扩展开发示例
* 新增 支持从[插件市场](https://ext.dcloud.net.cn/?cat1=7)一键导入云函数分类模板
* 调整 ide不再内置账户注册功能，注册会引导到网页注册，并且未验证邮箱将不再允许登录HBuilderX
* 修复 windows 内置浏览器分离后再最大化，部分窗口被任务栏遮盖的Bug
* 修复 部分电脑 检查更新，弹框消息显示不完整的Bug

## 2.6.16.20200427-alpha
* 修复 Sublime Text 快捷键文件语法错误的Bug [详情](https://ask.dcloud.net.cn/question/94359)

## 2.6.14.20200420-alpha
* 修复 因eslint新版插件导致validate-html、validate-stylelint插件失效的Bug
* 修复 某些Node.js插件，npm install失败，再次安装，引发编辑器闪退的Bug

## 2.6.13.20200414-alpha
* 修复 内置浏览器运行时，某些数据类型在HBuilderX控制台显示错误的Bug

## 2.6.12.20200412-alpha
* 新增 【重要】内置浏览器运行时，将日志直接输出到HBuilderX控制台
* 新增 内置web服务器 支持自定义端口 （菜单【设置】【运行配置】）
* 新增 FTP插件 支持通过commands在【自定义快捷键】中配置快捷键 [详情](https://ask.dcloud.net.cn/article/37081)
* 新增 项目管理器 增加刷新功能
* 修复 内部资源管理器 当未安装终端插件时，运行外部命令导致编辑器闪退的Bug
* 修复 Mac 内置浏览器分离后，点击关闭按钮，编辑器崩溃的Bug
* 修复 Mac 导入vue课程源码时，提示npm install失败的Bug
* 新增 uni-app 支持自定义uniapp编译器node启动内存（菜单【设置】【运行配置】）

## 2.6.10.20200403-alpha
* 修复 Mac 部分电脑HBuilderX关闭后无法再次启动的Bug
* 新增 eslint 支持自定义配置实时校验、自动修复功能 （菜单【设置】【插件配置】）
* 新增 内置浏览器 增加分离独立窗口功能（内置浏览器【工具栏】分离按钮）
* 新增 内置浏览器 普通项目HTML文件，右键菜单增加 “高亮浏览器内对应元素” 功能；内置浏览器右键菜单，增加 “查找代码中对应的DOM节点”  [详情](https://ask.dcloud.net.cn/article/37087)
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
* 修复 App manifest.json 配置WKWebview后，App模块权限配置, 提示没有勾选ios UIWebview的Bug

## 2.6.7.20200326-alpha
* 新增 FTP插件，支持FTP/SFTP协议 [详情](https://ask.dcloud.net.cn/article/37081)
* 兼容 Mac 因微信开发者工具最新1.02.2003250版本调整cli路径，HBuilderX找不到微信开发者工具路径错误的Bug
* 修复 eslint插件 保存同步时，偶发请求超时的Bug
* 修复 当HBuilderX安装目录路径带有@符号时，编辑器布局UI显示异常的Bug
* 修复 App manifest.json screenOrientation规范放置节点错误的Bug

## 2.6.6.20200320-alpha
* 优化 eslint一键修复，调整为文件保存时自动修复，无需再手动点修复按钮 [详情](https://ask.dcloud.net.cn/article/37070)
* 修复 Mac 内置浏览器touch事件无效的Bug
* 修复 设置自动换行后，重启编辑器第一次点击自动换行不生效的Bug [详情](https://ask.dcloud.net.cn/question/89953)
* 优化 svn/git导入，URL包含%时，本地路径解析为实际中文名称

## 2.6.4.20200310-alpha
* 修复 App manifest.json 可视化界面配置模块权限时发生崩溃的Bug

## 2.6.3.20200305-alpha
* 补齐 MAC 内部资源管理器 [详情](https://ask.dcloud.net.cn/article/36828)
* 新增 项目管理器、内部资源管理器 支持剪切功能
* 优化 账号安全登录机制（新老版本混合使用会导致需重新登录）
* 修复 es6模板字符串内出现一个以上${}变量时导致代码提示出错的Bug
* 优化 多文件搜索 按esc键 将焦点至焦到编辑器
* 修复 某些环境下 首次展开项目管理器文件夹，文件夹行高异常显示的Bug
* 新增 App manifest.json SDK配置 Android自动添加第三方SDK需要的权限
* 修复 App manifest.json 云打包操作导致文件内容格式变化的Bug
* 新增 uniCloud 云函数运行传参功能（右键【配置运行测试参数】)

## 2.5.11.20200212-alpha
* 新增 uniCloud 云函数全部上传、批量上传功能
* 新增 uniCloud 云数据库初始化的功能（右键db_init.json）
* 修复 全部替换后，按下`Ctrl+S`, 替换内容没有保存的Bug
* 修复 某些情况下，`Ctrl+W`关闭标签卡后，编辑器焦点丢失的Bug
* 优化 Mac 新建项目窗口UI

## 2.5.10.20200205-alpha
* 新增 Mac 内置浏览器支持跨域请求
* 修复 uniCloud 项目导入HBuilderX后第一次选择云服务空间后无法正常运行、发行的Bug
* 优化 uniCloud 项目通过右键菜单绑定服务空间之后，不再需要在代码中初始化

## 2.5.9.20200203-alpha
* 无

## 2.5.8.20200128-alpha
* 修复 免打扰模式，搜索后，某些搜索相关的按钮无法点击的Bug
* 修复 js 注释内无法输入中文标点的Bug
* 修复 js async修饰箭头函数时，参数不提示的Bug
* 修复 uni-app pages.json easycom配置autoscan导致组件无法提示的Bug

## 2.5.7.20200116-alpha
* 新增 资源管理器 支持外部命令，补充右键菜单
* 修复 资源管理器 无法打开磁盘根目录的Bug
* 修复 资源管理器 某些情况下，安装svn/git插件导致编辑器崩溃的Bug
* 修复 资源管理器 当文件夹为svn/git时，在底部状态栏上，点击按照大小、类型、修改日期排序错误的Bug
* 修复 资源管理器 文件后缀大写，生成预览图标失败的Bug
* 优化 按F1查看帮助文档，改为打开外部浏览器，避免对边改边看造成影响
* 修复 Mac 2.5.5版本引出的拖文件到项目管理器，存在相同文件时没有弹窗提示的Bug
* 修复 Mac 替换文件提示弹窗显示英文的Bug
* 修复 App 云打包 证书密码过长时，导致打包失败的Bug[详情](https://ask.dcloud.net.cn/question/87746)
* 修复 App 真机运行 重新自定义调试基座包时，版本号没变不会自动更新调试基座的Bug

## 2.5.6.20200113-alpha
* 无

## 2.5.5.20200111-alpha
* 新增 内部资源管理器。大幅提升资源管理器效率（目前仅支持Windows） [详情](https://ask.dcloud.net.cn/article/36828)
* 新增 项目管理器 支持单击目录不展开/折叠（在项目管理器右上角的菜单中可配置）
* 新增 项目管理器 增加彩色图标主题 （在项目管理器右上角的菜单中可配置）
* 优化 关闭代码提示后，将不再启动代码助手服务，可减少内存占用（在【设置】-【编辑器配置】，启用或关闭代码助手服务；默认开启）
* 修复 某些RGBA颜色值，颜色预览显示错误的Bug
* 新增 uni-app easycom组件模式，支持代码提示、转到定义

## 2.5.4.20200108-alpha
* 修复 2.5.3版本引出的微信小程序发行失败、及发行导致编辑器崩溃闪退的Bug

## 2.5.3-20200107-alpha
* 修复 单项目窗体，搜索框输入多个空格回车后，导致编辑器崩溃的Bug
* 修复 编辑器内打开图片，然后点击另存为，导致编辑器崩溃的Bug
* 修复 微信小程序发布过程中，点击关闭控制台，导致编辑器崩溃的Bug
* 修复 某些情况下，格式化操作出现数组越界问题，导致编辑器崩溃的Bug
* 修复 某些情况下，单窗口删除项目，导致编辑器崩溃的Bug
* 修复 某些情况下，文件着色，导致编辑器崩溃的问题
* 修复 某些情况下，编辑文件，导致其它折叠节点自动展开的Bug
* 修复 设置显示换行符，并取消自动换行后编辑器横向滚动条向右滚动时文字和行号、折叠等区域重叠的Bug
* 修复 打开js文件后，再将着色切换到es6+上，然后触发滚动条预览后着色丢失的Bug [详情](https://ask.dcloud.net.cn/question/86932)
* 新增 App端 uni-AD 广告联盟 在manifest.json和打包界面的设置
* 新增 uni-app 新建项目支持 uni-ui 项目模板，无需在页面里引入和注册组件，所有 uni-ui组件直接用

## 2.5.0.20191231-alpha
* 优化 es6部分语法 代码提示、转到定义
* 新增 dart、tpl语言代码高亮着色
* 优化 文件关闭后，再次打开，光标显示在上次的位置
* 新增 记忆文件折叠状态 （默认关闭；可在【设置】-【编辑器配置】，启用记忆折叠状态）
* 修复 用户自定义代码块目录下存在不合规范的文件名时造成崩溃的Bug
* 修复 自定义代码块，在$1处输入中文之后，使用Tab无法切换到$2处继续编辑的Bug
* 修复 当某块代码包含多行注释或条件编译时，导致折叠出错的Bug
* 修复 js语言，在对象变量行尾回车，自动补充逗号的Bug
* 修复 悬停预览代码后，某些情况下，无法撤销恢复已修改内容的Bug
* 修复 在屏幕分辨率低于1024x768的电脑上，首次启动后，顶部菜单栏被遮挡的Bug
* 修复 在高分辨率电脑上，欢迎页面，HBuilderX图标过大的的Bug
* 修复 欢迎页面，点击收藏，编辑器崩溃的Bug
* 修复 复制粘贴，某些情况下内容显示成一行的Bug
* 修复 控制台打印时间，某些情况下显示为其它语言格式的Bug
* 修复 焦点在项目管理器上时，按 Ctrl+Alt+f 多文件搜索时没有按选中文件搜索的Bug
* 修复 Mac 项目管理器，项目上右键菜单点击【字符搜索】某些情况下无效的Bug
* 修复 Mac 多文件字符搜索，当焦点错误时，输入搜索内容回车，编辑器崩溃的Bug
* 修复 Mac 终端超时设置的最大数时，在弹框提醒中选择【修改设置】崩溃的Bug
* 新增 uni-app manifest.json App常用其它配置 编译模式添加【v3编译器】和【fast启动模式】

## 2.4.9.20191223-alpha
* 无

## 2.4.8.20191220-alpha
* 新增 当关闭编辑器时，记录文件的折叠状态
* 修复 某些情况下，CSS color渲染错误的Bug
* 优化 es6部分语法 代码提示、转到定义
* 修复 js、html文件，关联JavaScript(ES6+)、HTML（es6+）后，右键菜单【验证本文档语法】失效的Bug
* 修复 在独立单行内容上，按下折叠快捷键，行尾出现折叠指示器的Bug

## 2.4.7.20191216-alpha
* 新增 CSS 颜色预览功能 （可Alt+左键，进一步打开颜色选择器）
* 新增 支持WebP格式的图片预览
* 新增 标签卡右键菜单，增加打开文件所在位置
* 优化 代码助手UI性能
* 优化 语法提示 补充一批新的 CSS 属性
* 优化 vuedoc 支持属性值域描述
* 修复 vuedoc nvue中不支持组件语法提示的Bug
* 修复 项目下文件过多时，文件路径偶发不提示当前目录下文件的Bug
* 修复 多光标撤销、恢复撤销操作，光标位置错误的Bug
* 修复 多文件字符串搜索，搜索栏重绘导致CPU使用率过高的Bug
* 修复 字符串搜索，焦点在编辑器且文件被改变时，清除搜索结果指示器的Bug
* 修复 格式化 光标在中文附近时，格式化后光标位置跑到开头的Bug [详情](https://ask.dcloud.net.cn/question/84634)
* 修复 Window10 搜索框，微软输入法快速输入时偶发异常的Bug [详情](https://ask.dcloud.net.cn/question/84147)
* 修复 某些情况下 语言服务偶发退出的Bug
* 修复 Mac 搜索文件结果列表，上下键无效的Bug
* 修复 打开查找索引界面后，编辑器光标仍然闪动的Bug
* 修复 快捷键触发折叠时折叠框的大小不正确的Bug
* 修复 拖动标签卡到窗体外面的窗口，修改文件后标签卡状态错误的Bug
* 新增 uni-app 项目js中可以提示浏览器的api
* 新增 uni-app 控制台 增加重启手机应用功能，无需再次编译，软重启手机App
* 新增 App manifest.json SDK配置 增加苹果登录选项
* 修复 App manifest.json 原生插件列表顺序没有按照配置文件中的顺序排列的Bug

## 2.4.4.20191129-alpha
* 无

## 2.4.3.20191125-alpha
* 新增 查找索引符号，可快速查找函数、变量等文档结构图中的内容 （快捷键 Ctrl+Shift+o）
* 新增 鼠标悬停在代码折叠后的省略号处，可悬浮预览被折叠内容
* 优化 文件路径提示
* 优化 字符搜索的性能和指示器样式
* 优化 字符搜索时点击大小写、全词匹配等操作时自动触发重新搜索
* 优化 文件搜索的性能，补充匹配字符高亮
* 修复 某些情况下，git/svn项目，更新代码或切换分支后，文件内容没有更新的Bug
* 修复 无标题文档不更新title的Bug
* 修复 某些情况下，状态栏语言名称丢失的Bug
* 修复 文件未修改状态下，中文输入法敲字卡的Bug
* 修复 当文件第一行是空行时，再次打开编辑器折叠计算错误的Bug
* 修复 通过拖拽分栏后的tabbar背景色不正确的Bug
* 修复 某种情况下，分左右两栏，没有对齐的Bug
* 优化 编辑器搜索字符指示器加深颜色
* 修复 vscode快捷键方案，搜索上一个/下一个字符，快捷键显示错误的Bug
* 修复 win7 安装插件窗口滚动条过细的Bug
* 修复 win7 QQ输入法输入单引号时触发移动光标的Bug
* 修复 项目管理器，焦点在目录文件上时，按Ctrl+Shift+c复制路径不生效的Bug
* 修复 打开WebView调试控制台，菜单状态错误的Bug
* 删除 uni-app项目的manifest.json可视化视图删除自定义组件模式选择，因为已不再支持非自定组件模式

## 2.4.2.20191115-alpha
* 无

## 2.4.1.20191114-alpha
* 新增 鼠标悬停在迷你地图的非当前页区域时，小窗预览指示文档
* 优化 更新逻辑，非app用户不会收到app插件更新通知

## 2.4.0.20191112-alpha
* 新增 鼠标悬停在滚动条非当前页区域时，小窗预览指示文档
* 优化 文字搜索右侧显示搜索结果的数字指示
* 修复 小屏幕（高度为768像素）下一些界面适配的Bug
* 修复 Mac Command+m 无法最小化窗体的Bug
* 修复 Mac 暗色主题下，弹窗文字颜色看不清的Bug
* 修复 SVN/Git项目导入，输入url后回车，当前窗口被关闭的Bug
* 修复 修改文件触发自动保存时，再次撤销成未修改状态时，切换标签卡时提示临时文件需要恢复的Bug
* 优化 设置过自定义代码块的语言，自动显示在【代码块设置】菜单列表中，无需再次查找
* 修复 某种情况下删除折叠行时，导致编辑器卡死、着色异常的Bug
* 修复 智能双击在显示迷你地图时逻辑不对的Bug
* 优化 Mac app运行到iOS模拟器，自动记忆上次运行的模拟器
* 新增 uni-app 新建页面时允许不创建同名目录

## 2.3.9.20191104-alpha
* 修复 Mac git/svn点击提交时，导致编辑器崩溃闪退的Bug

## 2.3.8.20191103-alpha
* 新增 迷你地图（右侧缩略图，可在滚动条右键菜单开启关闭，快捷键 win: Alt+o；mac: Ctrl+o）
* 新增 JSON文件 支持文档结构图。包括uni-app的pages.json的文档结构图（快捷键 win: Alt+w；mac: Ctrl+w）
* 新增 编辑器标签卡超出一屏时，支持鼠标滚轮横向滚动标签卡
* 新增 底部状态栏新增文档结构图、终端两个快捷按钮
* 修复 预览状态下打开文档结构图后，点击文档结构图的item跳转到编辑器对应位置时焦点不在编辑器上的Bug
* 修复 Vue文件 {{}} 附近输入中文￥自动转换成$的Bug
* 修复 已关闭项目丢失项目别名的Bug
* 修复 某些情况下初次自定义代码块未生效的Bug
* 修复 对运行中的项目，右键菜单操作【关闭项目】造成崩溃闪退的Bug
* 修复 日志文件积累时间较长后，造成占用硬盘空间过大的Bug
* 优化 加快某些大文档在外部变更后重新渲染的速度
* 优化 打开较多文档时主题切换的速度
* 修复 跳转到指定行，代码没有展开折叠的Bug
* 修复 触发全部折叠时行尾的折叠指示器框大小不对的Bug
* 修复 vscode快捷键方案，eslint校验，跳转到下一个错误，快捷键错误的Bug
* 修复 Mac 10.15 右键菜单字体异常的Bug
* 调整 删除快应用发布的菜单，请在快应用官方工具发布快应用
* 优化 App打包界面 提供更清晰的界面指示、完善提示语
* 新增 App打包 支持新的Android公共测试证书 [详情](https://ask.dcloud.net.cn/article/68)

## 2.3.7.20191024-alpha
* 修复 Vuex mapState mapActions mapMutations 映射的函数属性无法转到定义和无法提示的Bug
* 修复 html 连续编写有默认值的属性时(例如 autocomplete accesskey等)， 覆盖位置不对的Bug
* 优化 uni-app globaldata代码提示及转到定义
* 新增 App打包 对manifest中的iOS通用链接进行前置校验

## 2.3.6.20191021-alpha
* 无

## 2.3.5.20191018-alpha
* 无

## 2.3.4.20191014-alpha
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

## 2.3.3.20190924-alpha
* 无

## 2.3.2.20190921-alpha
* 修复 uni-app iOS13以下系统 无法启动debugger的Bug
* 修复 uni-app manifest中未设置组件编译模式时无法启动debugger的Bug

## 2.3.1.20190920-alpha
* 无

## 2.3.0.20190919-alpha
* 新增 Eclipse快捷键方案切换【菜单-工具-快捷键切换】
* 修复 调用npm运行时npm路径初始化不正确的bug
* 修复 已关闭工程列表展开状态下关闭程序, 再次启动程序后已关闭工程列表位置显示错误的Bug
* 优化 断电时正在写入的文件损坏的概率
* 新增 App manifest可视化界面 增加iOS13的蓝牙配置项
* 新增 uni-app manifest可视化界面 增加nvue页面编译模式

## 2.2.7.20190917-alpha
* 修复 Mac iOS13真机运行 提示mdb缺少某些依赖库的Bug
* 优化 Mac 通过WiFi连接的iOS手机不再显示在运行列表中

## 2.2.6.20190914-alpha
* 新增 Windows 程序关闭前，提示是否创建桌面快捷方式
* 新增 代码提示 支持支付宝小程序数据、更新微信小程序最新数据。在uni-app项目中自动加载，在其他项目中，手动在状态栏的代码提示库中选择
* 修复 HTML文件中javascript字符串多行显示时着色不对的Bug
* 修复 javascript模板字符串在酷黑主题下着色不对的Bug
* 新增 真机运行 支持iOS13
* 新增 真机运行 nvue文件支持差量同步，提升修改后界面刷新速度
* 修复 真机运行 iOS模拟器 nvue文件同步后界面不刷新的Bug

## 2.2.5.20190907-alpha
* 优化 html中vue的代码提示、转到定义
* 新增 windows 沉浸式标题栏。统一标题栏和界面主题的颜色，增加窗体内容区的高度（可在设置中切换回普通标题栏）
* 新增 点击右侧滚动条信息点，直达对应位置
* 优化 文件关联识别支付宝、百度、头条、QQ小程序文件
* 优化 酷黑主题 代码选中背景色
* 优化 折叠的图标样式
* 修复 Mac 多光标取消 `command + 右键` 弹出右键菜单的Bug
* 修复 预览窗口打开时，新打开文件，弹出对话框导致欢迎页面UI文字重叠显示的Bug
* 修复 markdown 列表前缀后按BackSpace无法整体删除列表符的Bug
* 新增 uni-app 真机运行 支持nvue文件保存后直接刷新App页面而不用重启应用
* 修复 nvue文件 代码助手无法提示uniapp生命周期的Bug

## 2.2.4.20190823-alpha
* 无

## 2.2.3.20190822-alpha
* 新增 支持vue cli web项目直接在内置浏览器中预览（如未npm install，需先执行）
* 优化 代码提示 支持vue修饰符提示，如v-model.trim=""
* 修复 scss/less 选择器嵌套的代码内容中无法提示CSS属性的Bug
* 修复 scss 代码提示 无法提示!default的Bug
* 新增 智能双击 双击选中es6模板字符串功能
* 修复 历史剪贴板的多行内容粘贴时变成了一行的Bug
* 修复 Windows 进入全屏模式后，底部操作系统的工具栏仍然存在的Bug
* 修复 窗口最大化时通过打开方式打开文件时窗口状态不正确的Bug
* 新增 nvue文件关联
* 修复 uni-app 在其它文件中，uni.scss定义的全局变量无法提示的Bug

## 0.1.50.20180918-alpha
* 无

## 0.1.49.20180917-alpha
* 新增 设置提供可视化界面
* 调整 插件配置统一汇总到菜单【工具】-【插件配置】，所有插件包括内置的格式化插件jsbeaufy配置都调整到此入口
* 新增 Prettier插件，处理less、scss、php文件格式化
* 修复 插件安装后可能导致外部命令无法显示的问题
* 新增 wap2app 项目创建、打包、manifest可视化
* 新增 菜单文件-打开历史文件，支持打开历史项目
* 优化 全部保存的快捷键默认为【Ctrl+Alt+s】
* 修复 html的text区域无法输入中文书名号的问题。可选择是否转义
* 修复 光标在文件开头时格式化造成HBuilderX无响应的问题
* 修复 项目名称包含空格时代码助手图片预览失效的问题
* 优化 删除目录时该目录下已打开的文件自动关闭
* 优化 文件和文件夹内搜索过滤unpackage目录
* 修复 markdown 大纲层级不正确的问题
* 优化 运行菜单，在toolbar上点运行和Ctrl+r运行，统一下拉运行菜单。等待手机检测时可反复按Ctrl+r。点击菜单运行很低效，推荐点击toolbar或快捷键
* 修复 有时打包失败没有提示错误信息的问题
* 优化 真机运行崩溃的问题
* 修复 uni-app 编译添加node和npm环境变量，以免因为npm和node不统一造成编译失败的问题
* 修复 uni-app 小程序运行后，切换项目后点控制台的停止按钮无法停止的问题
* 优化 uni-app manifest可视化界面新增微信小程序配置（注意app的sdk里的微信设置和微信小程序设置是不同的）
* 修复 uni-app 微信开发者工具启动后无法查看源码的问题
* 修复 uni-app 相同appid和projectName时无法启动微信开发者项目的问题
* 修复 uni-app 修改manifest.json时有可能导致崩溃的问题

## 0.1.48.20180906-alpha
* 【重要】新增 自动保存修改内容到临时文件的功能，停电、崩溃不再担心。这个机制不是保存正式文件，不会触发自动编译运行。自动保存间隔时间默认为30秒，可在设置里修改
* 新增 全部保存功能
* 新增 uni-app项目新建页面、组件的功能。新建页面会自动新建同名目录、vue文件及自动添加到pages.json最后
* 新增 在uni-app项目下打开的vue页面编辑器，右键添加转到pages.json对应节点的功能
* 优化 文件在外部被编辑后，提醒变更的逻辑
* 修复 git插件无法使用的问题
* 修复 拖动代码不能移动位置的问题
* 修复 黑色主题下，光标在括号旁边时，匹配括号的黑色小框看不清的问题
* 修复 js字符串中文字符转义的问题
* 修复 有些包含大量emoji字符的utf8文件编码识别错误的问题
* 修复 node插件升级时，如果已安装会重新安装的问题
* 修复 Ctrl+tab无法切换到预览文件的问题
* 修复 函数参数为function时不能自动补全圆括号的问题
* 修复 Mac上中文输入法有时出现多余字符的问题
* 修复 Mac上撤销操作偶发乱套的问题
* 调整 删除jshint校验js的逻辑，校验js请安装eslint插件
* 修复 真机运行菜单iOS设备的中文显示为乱码的问题
* 修复 真机运行菜单正在运行的设备对应的项目名称有可能显示不对的问题
* 修复 真机运行多个设备时有时候出现不同步文件的问题
* 修复 App打包界面选择的iphone、ipad打包时不生效的问题

## 0.1.47.20180823-alpha
* 无

## 0.1.47.20180821-alpha
* 添加 uniapp编译前先进行manifest.json和pages.json的语法校验的功能
* 添加 真机运行控制台添加重启、停止、启动的功能
* 优化 真机运行控制台焦点切换的问题
* 优化 代码提示时uni-app下js模块提示过滤掉pages.json下配置的页面
* 修复 node插件升级失败有可能导致崩溃的问题
* 修复 通过点击“Android模拟器端口设计”菜单导致端口丢失的问题
* 修复 正则搜索卡死的问题
* 修复 外部命令报node不可运行
* 修复 真机运行编译器报错无法跳转到对应文件的问题
* 修复 真机运行编译器日志错乱的问题
* 修复 升级时有些node插件不安装的问题
* 修复 manifest图形编辑器设置iphonex、iphonexl启动图的节点名称不对的问题
* 修复 内置浏览器渲染进程异常导致崩溃的问题
* 修复 项目管理器中操作文件小概率崩溃的问题
* 修复 manifest.json文件末尾为注释会导致App打包进度一闪而过的问题
* 修复 manifest可视化编辑器编辑时可能损坏包含//注释的manifest.json文件内容结构的问题
* 修复 创建项目时关闭新建界面导致崩溃的问题
* 修复 App打Android包没有提交xxxhdpi图标的问题
* 修复 mac下移除项目到回收站有时会失败的问题
* 修复 使用emmet的时候按下tab键后中文乱码

## 0.1.46.20180810-alpha
* 新增 5+app项目的manifest图形化编辑器
* 新增 iOS真机运行保存时自动刷新手机的功能
* 修复 网络被劫持时插件下载失败的问题
* 修复 mac下休眠一段时间后HBuilderX卡死的问题
* 修复 在资源管理器中双击文件或通过打开方式启动应用后有时无法打开对应文件的问题
* 修复 css文件行注释异常的bug
* 修复 settings.json文件不合法导致启动就弹错误提示框，并且界面主题混乱的问题
* 优化 App打包时支持隐藏进度界面
* 新增 移除项目到回收站的功能
* 新增 uni-app项目光标在标签语句上按F1可打开组件帮助文档
* 补充 用户登录后每天自动签到加社区积分功能
* 优化 windows下自动检测微信开发者工具所在目录
* 优化 vue代码提示，支持自定义组件的属性提示
* 优化 双引号自动补全时绿光标结束点的逻辑
* 修复 有时弹出错误的快捷键冲突选择菜单的问题
* 修复 php自定义代码块不生效的问题
* 修复 有时启动崩溃的问题
* 修复 光标选到页首时，注释、加粗、加包围等操作可能引发崩溃的问题

## 0.1.45.20180728-alpha
* 【重要】新增uni-app，使用vue技术，开发一次，iOS、Android、微信小程序三端同时生成。[详见](https://uniapp.dcloud.io/)
* 【重要】调整uniapp策略，之前的原生渲染uniapp改为nml项目[详见](https://ask.dcloud.net.cn/article/13507)
* uni-app：新增条件编译，采用类似 //#ifdef APP-PLUS 的写法做平台条件编译，代码块名为ifdef，还可双击ifdef选中整体代码段落。[详见](https://uniapp.dcloud.io/platform)
* uni-app：新增u开头的各种组件和api的代码块，如urequest即可快速生成联网代码
* 【重要】语法校验
+ 新增html,vue,css,sass,less等语法验证插件【安装插件后默认是保存时校验，也可在工具菜单手动激活】
+ 优化语法校验，在代码中通过波浪线直接标识，支持F4跳转到下一个语法错误
+ json文件保存时，自动删除多余错误逗号
* 【重要】新增光标在api代码处，按F1打开对应的帮助文档。目前支持uni-app、plus、vue的api
* 优化新建菜单，增加文件模板及自定义模板
* 新增切换最近文件列表。Win:Ctrl+Tab；Mac:Alt+Tab。短按是在最近2个标签卡切换，长按可在列表中持续移动（逻辑同OS的切屏）
* 新增文件收藏功能，方便快速访问常用文件【Alt+Shift+f】
* 新增快捷键冲突时弹出选择菜单的功能
* 代码提示
+ 优化js中json语法的提示
+ 修复翻页可能错乱的bug
+ 补充vue指令的信息帮助及vuex框架语法库
+ 修复某些情况下框架语法库失效的问题
* Emmet：修复在css、php等文件中失效的bug
* 优化代码块教程，新增clogvar快捷打印变量的js代码块
* 优化vue转到定义
* 智能回车
+ json的键值对和数组后回车，自动补充行尾逗号
+ 优化js中/**回车处理
+ 修复回车时光标可能在屏幕外的问题
* 智能双击
+ 新增双击逗号左侧或右侧，选中数组或参数的前一个或后一个。大幅提升json的节点增删效率
+ 新增双击条件编译区的ifdef或endif关键字选中条件编译段落
+ 新增双击行尾行注释，选中注释段
+ 新增Alt+双击括号引号，把两侧的括号引号也选中
* 优化重复插入，不选内容时是重复插入当前行，选内容时是重复插入选区。Win:Ctrl+Insert；Mac:Command+Shift+r
* 优化缩进，支持空格、tab转换和长度调整，使用方式：菜单【编辑】-【缩进】
* 外部命令新增terminal类型，使用该类型的外部命令运行环境设定为内置终端
* 优化内置终端插件的使用体验
* 优化运行
+ 支持多设备运行到不同的控制台
+ 修复项目名含有+号等特殊字符时，无法在内置web服务器运行和预览的问题
+ 修复Mac无法自动识别已安装的浏览器的问题
+ 修复预览时web服务器启动慢导致无法使用web服务器预览的bug
* markdown
+ 粘贴外部图片到md文件时，自动整理到附件文件夹下，方便整体发行及预览
+ 修复非项目下的md文件预览时不能显示图片的bug
* 修复某些情况下，ctrl+f搜索会导致程序崩溃的问题
* 修复大量删除项目内文件可能会导致崩溃或项目列表清空的问题
* 【App插件】支持Mac真机运行同步文件
* 【App插件】新增manifest.json中（plus->arguments）配置应用默认启动参数功能
* 【App插件】新增toast的图标支持设置宽高（iconWidth/iconHeight）
* 【App插件】Android平台云端打包支持在manifest中指定targetSdkVersion版本（解决Google提交应用要求支持Android8.0+的问题）
* 【App插件】Android平台修复应用资源可能被清理工具删除的问题
* 【App插件】Android平台修复未配置震动权限时扫码成功引起应用崩溃的问题
* 【App插件】Android平台修复特定情况下状态栏高度计算不正确的问题
* 【App插件】Android平台修复二维码通过图片扫码识别（plus.barcode.scan）不触发回调的问题
* 【App插件】iOS平台修复自定义基座concole.log日志无法输出的问题

## 0.1.43.20180625-alpha
* 修复内置浏览器、内置终端插件配置错误的问题

## 0.1.42.20180623-alpha
* 【重要】新增内置终端【win: Alt+c；mac: Ctrl+c】
+ 支持多终端
+ 菜单运行支持解析package.json的命令直接运行到内置终端
* 优化代码块的自定义和显示
* 优化Vue2.x语法提示
* 插件外部命令支持保存自动执行，在插件配置中将"onDidSaveExecution": true, 重启生效。可用于保存时自动编译、压缩、提交svn等
* 优化格式化
* 修复粘贴时有时代码没有智能缩进的问题
* 解决外部命令运行有时会提示node异常的问题
* 调整代码助手数字选择默认策略为Alt+数字插入
* 【App插件】【重要】新增原生视频播放组件（支持flv、rtmp/hls/rtsp协议），新增直播推流组件（rtmp协议），规范参考 [https://www.html5plus.org/doc/zh_cn/video.html](https://www.html5plus.org/doc/zh_cn/video.html)
* 【App插件】【重要】直播开发指南，参见[https://ask.dcloud.net.cn/article/13416](https://ask.dcloud.net.cn/article/13416)
* 【App插件】解决wap2app打包原生时没有编译的问题
* 【App插件】Android平台修复高德定位使用缓存数据导致定位不准确的问题
* 【App插件】Android平台修复默认不支持媒体输入的问题
* 【App插件】Android平台修复Webview设置bottom属性横竖屏切换后可能不生效的问题
* 【App插件】iOS平台修复NView不能显示部分网络gif文件的问题
* 【App插件】iOS平台修复应用内支付（IAP）无法获取购买凭证的问题
* 【App插件】iOS平台修复无法直达支付宝的芝麻认证页面的问题

## 0.1.41.20180612-alpha
* 代码助手新增右侧详细信息
* 代码助手新增单击Alt切换数字插入状态的功能
* 新增中文输入免干扰功能，在特定语法区输入全角的分号逗号括号会自动替换为半角符号，减少错误，编写更顺畅。可在设置中配置开关
* 修复设置分栏为4宫格并关闭HBuilder X后，无法再次启动HBuilder X的问题
* 修复HTML文件不提示vue指令的问题
* 完善自定义代码块的帮助说明

##0.1.40.20180607-alpha
* 修复内置浏览器无法加载页面资源的问题
* 修复win10下浏览器运行-Edge提示找不到Edge浏览器的问题

##0.1.39.20180606-alpha
* 修复wxml的注释和智能选中的一些问题
* 修复某些情况下，格式化后滚动条位置不正确的问题

##0.1.38.20180605-alpha
* 紧急修复mac上部分文件格式化、外部命令菜单显示的若干bug

##0.1.37.20180605-alpha
* 新增内置浏览器预览，即老版的边改边看 【win: Alt+p；mac: Ctrl+p】
* 强化微信小程序支持，更好的小程序开发工具 [详见](https://ask.dcloud.net.cn/article/13373)
+ 支持新建微信小程序项目、文件
+ 支持小程序语法提示
+ 支持直接运行到微信开发工具的模拟器看效果和调试【菜单运行】
* 新增自定义代码块功能【菜单工具-自定义代码块】
* 补充mui代码块
* 默认支持格式化vue文件，并修复格式化后光标位置不正确的问题
* 修复某些情况下中文输入法卡的问题
* 修复vue中url跳转失效的问题
* 修复有时代码块失效或变卡的问题
* 修复Mac版代码提示经常失效的问题
* 修复真机运行有时崩溃的问题
* 修复es6编译无效果的问题
* 修复js压缩插件不支持es6的问题
* 修复文件内搜索时输入中文有时候会崩溃的问题
* 修复Mac下运行项目下的npm命令失效的问题
* 修复选中内容按左边括号，无法在2端加括号包围的问题。只支持大中小括号，不包含尖括号
* 修复输入左边引号括号智能补齐匹配引号括号不支持多光标的问题

##0.1.36.20180521-alpha
* 修复 UniApp真机运行失败的问题
* 强化折叠，见菜单跳转
+ 折叠单行【Alt+-】
+ 展开单行【Alt+=】
+ 折叠子行【Alt+Shift+-】
+ 展开子行【Alt+Shift+=】
+ 折叠所有行【Alt+Ctrl+Shift+-】
+ 展开所有行【Alt+Ctrl+Shift+=】
+ 折叠其他区域【Alt+Shift+o】
* 新增 选中当前行(不含首尾空白字符) 【鼠标双击行尾】【Ctrl+Shift+l】

## 0.1.35.20180519-alpha
* 无

## 0.1.34.20180519-alpha
* 【重要】新增App换量联盟，免费获得翻倍用户，[详见](https://ask.dcloud.net.cn/article/13300)
* 【重要】大幅强化vue，可能是最好的vue开发工具
* 优化less、scss语法提示
* 解析项目下package.json中npm命令，在运行和外部命令菜单提供快捷执行入口
* 优化浏览器运行的若干体验问题
* 配置语言类型关联，指定某后缀名文件使用某种语言编辑器打开（设置里files.associations节点）
* win版在根目录新增reset.bat，执行bat可清除HBuilderX所有数据配置
* 优化框架语法提示库的加载
* 优化插件部分体验问题
* 修复mac下外部命令shell模式无法打开终端的问题
* 优化文件保存无权限时的逻辑
* 智能双击新增选中折叠。鼠标双击折叠行前字符左侧可选中该折叠区域
* 优化扩大选区【Ctrl+=】
* markdown：新增markdown的浏览器运行预览【Ctrl+r】
* 【App插件】修复创建5+app项目后没有从服务器自动获取appid的问题

## 0.1.33.20180505-alpha
* 新增插件管理
* 新增保存自动刷新浏览器功能（仅通过内置服务器打开的页面生效）
* 新增粘贴智能缩进，光标在行首缩进位置(不是顶格)时粘贴自动处理缩进
* 新增光标历史前进后退【Alt+←、Alt+→】及清空光标历史
* 支持拖拽标签卡到外部直接生成新窗体
* 分栏增加垂直分栏和四宫格模式
* 内置服务器首次启动策略修改为浏览器运行后启动，弹出权限询问框时请务必点允许
* 修改某些情况下格式化后光标错位的问题
* 修复新建窗体后项目管理器单击展开变双击的问题
* 新建项目时补充hello wap2app模板
* 优化酷黑主题的一些问题
* 修复文档结构图/大纲的中文兼容问题
* 修复临时文件标题不随着第一行内容变更的问题

## 0.1.32.20180424-alpha
* 新增Ctrl+鼠标右键移除点击位置的多光标/选区
* 新增js、css等分号结尾的语言中，双击分号选择该段内容的功能
* 修复酷黑主题搜索输入框字体颜色看不清的问题
* 修复某些情况下代码块不提示的问题

## 0.1.31.20180420-alpha
* 新增文档结构图/大纲功能【Alt+w】（mac是Ctrl+w）
* 智能双击：HTML中新增双击=选中Tag属性、Css中新增双击类名左侧选中整个类、优化js中function等关键字双击末尾则选中该词
* 优化酷黑主题体验，修复nss,njs等文件酷黑主题下没有高亮的问题
* 新增Ctrl+鼠标滚轮缩放字体的开关配置项:editor.mouseWheelZoom
* 修复二进制文件预览的一些错误

## 0.1.30.20180418-alpha
* 新增黑色主题
* 新增编辑器分栏功能【Alt+Shift+1、Alt+Shift+2、Alt+Shift+3】
* 转到定义支持在另一分栏打开，方便并排查看【Ctrl+Alt+鼠标点击或Alt+Shift+D或windows下Shift+F12】
* 支持Alt+N将焦点移到编辑器的功能。至此完成：Alt+Q是左侧项目管理器，Alt+O是顶部工具栏，Alt+C是底部控制台，Alt+N是中间编辑器（mac下Alt改为Ctrl）
* 补充了mac下的文件复制移动删除等操作
* 增加历史剪切板【Ctrl+Alt+v】
* 优化搜索功能，搜不到的文字会变红，查找下一个循环到开头时会悬浮图标指示
* 在空白文档粘贴内容时，会自动检测待粘贴内容是否HTML或json，并自动切换语言类型和自动格式化
* 取消js文件保存时自动校验语法的默认设置，需要的开发者请手动在设置中调整jshint.onsave选项
* 修复某些情况tab缩进变成8的问题
* 修复某些情况重命名文件引发崩溃的问题
* 修复某些情况引号智能补全错乱的问题
* 修复某些情况JS跨文件转到定义不正确的问题
* 修复某些情况项目管理器目录层级错乱的问题
* 修复忘记密码后没有提示已发送邮件的问题
* 【App插件】Uni-App支持web组件引用本地html、js、css文件

## 0.1.29.20180409-alpha
* 紧急更新某些情况下内置web服务器打开html显示404的问题

## 0.1.28.20180406-alpha
* 增加web服务器插件,仅支持HTML文件在浏览器运行时使用
* 文件夹内搜索添加全部替换的功能
* 修复未搜索到结果时，状态栏信息立即消失的问题
* 修复设置和搜索结果编辑器替换所有有时候未替换的问题
* 修复有时异常退出导致项目列表清空的问题
* 修复大文档在某些情况下折叠造成卡顿的问题
* 修复某些情况下大文档着色引发异常的问题
* 【mac版】解决finder里打开方式不能选择HbuilderX的问题
* 【mac版】修复部分快捷键失效的问题
* 【App插件】解决某些情况下，调试debug卡死的问题
* 【App插件】小程序to快应用/Uni-App转换器支持 url跳转参数传递,优化部分样式,组件转换
* 【App插件】快应用真机运行基座升级到1.0.15

##0.1.27.20180403-alpha
* 解决某些情况下App插件升级或安装失败的问题
* 解决某些情况下Mac版tab键失效的问题
* 【App插件】解决快应用/Uni-App真机运行时，修改部分文件提示编译失败的问题

## 0.1.26.20180401-alpha
*  搜索结果在状态栏增加提示
*  修复文件夹、项目无法重命名的问题
*  修复重命名文件时，如果该文件已打开，会打开两个标签卡的问题
*  修复某些情况下设置未成功保存的问题
*  修复某些语言文件在某些情况下的折叠异常问题
*  优化less、scss的着色，修复markdown某些字符导致的着色异常问题
*  Markdown：悬浮预览支持gif动画
* 【重要】【App插件】添加Uni-App/快应用打包Android apk的功能
* 【App插件】优化Uni-App/快应用调试流程，解决某些情况下调试器启动失败等问题
* 【App插件】小程序to快应用/Uni-App转换器优化import,template标签转换、修复部分样式转换问题
* 【App插件】快应用/Uni-App调试基座修复a标签点击不处理href、二维码扫描引起程序崩溃、video不居中显示等问题

## 0.1.25.20180326-alpha
* 解决Mac无法浏览器运行的问题，并新增自动检测Chrome、Safari和FireFox
* 多光标模式支持上下移动行【Ctrl+Up/Down】、回车、反回车【Shift+Enter】等操作
* 添加Uni-App、快应用示例模板，新建项目时可选择
* 转义里新增了首字母大写，调整了大小写转换的快捷键【Alt+Shift+U/L/T】
* 修复搜索到折叠区域时，折叠不展开的bug
* 修复了代码助手在窗体右边缘时被遮挡、自闭合标签回车缩进错误等问题
* 修复了Mac版粘贴表格(numbers)内容到markdown文档时无法自动转换markdown表格的问题
* 【App插件】快应用真机运行基座升级到1.0.13
* 【App插件】更新小程序to快应用/Uni-App转换器

## 0.1.24.20180323-alpha
* 控制台右键菜单增加复制
* 解决创建快应用项目目录结构不正确的问题
* 解决debug快应用或Uni-App后有时无法退出的问题
* 优化快应用调试
* 解决某些情况下真机运行无法启动的问题
* 解决真机运行/调试debug时，修改单个文件后，设备上显示白屏的问题
*【快应用开发插件】转换器修复部分样式不生效的问题

##0.1.23.20180320-alpha
* 【重要】新增快应用开发、运行、调试。[详见](https://quickapp.dcloud.io)
* 【重要】新增Uni-App开发、运行、调试。Uni-App是5+App的升级版，仍然支持5+webview，但界面主体由原生渲染引擎绘制。支持开发一次发布到更多平台。[详见](https://github.com/dcloudio/Uni-App)
* 【重要】新增微信小程序转换为快应用/Uni-App
* 【重要】新增mac版
* markdown：支持excel、wps、word、number中粘贴表格进来，自动转为markdown表格【特色】
* markdown：从内存中粘贴图片进md，自动创建md的附件文件夹（类似另存网页），将图片保存到文件夹并将链接展示到md中。保存md时，会自动清理无效图片【特色】
* markdown：鼠标移到图片语法区，悬浮显示本地图片。配套图片粘贴功能，进一步加强了对word、evernote的替代【特色】
* markdown：新增标题折叠【特色】
* markdown：修复了列复制无法按列粘贴的bug
* 补充了各种新语言的折叠
* 智能双击统一支持Ctrl添加新选区
* 智能双击新增双击选中HTML tag
* 新增HTML tag的包围和反包围【Ctrl+]】
* 新增HTML tag的起始、结束标签的套框指示
* 合并行支持多光标，支持去重空格【Ctrl+Shift+k】
* 优化了注释的体验，支持多光标注释
* 给选区首尾设置光标【Ctrl+\】。这样双击选中首尾tag或if块，按Ctrl+\，就可以把光标放到首尾，然后Ctrl+/就可以同时注释掉首行和尾行
* 根据语法选择相同词 【Ctrl+Shift+e】。传统的Ctrl+e选择相同词，在选择tag比如div时，会把子div也选中，而Ctrl+Shift+e则只会选中首尾的tag名称，方便一起改名
* 撤销最后一个多光标或选区【Ctrl+Shift+z】。用于最后一个光标或选区选错时，丢弃掉这个光标或选区
* 粘贴为HTML【Ctrl+Shift+v】可以在网页或excel里选内容，直接粘贴为HTML源码
* 优化转到定义【Alt+单击】
* 优化启动后代码提示引擎加载的速度
* js语法校验选项默认开启ES6
* 优化若干代码助手细节
* 运行浏览器时windows下自动检测chrome、firefox的路径，如果没有配置webserver地址就用file协议打开
* 自动修正常见的设置界面json语法错误

## 0.1.22.20180302-alpha
* 新增若干语言的行注释【Ctrl+/】和块注释【Ctrl+shift+/】
* 新增if、for等关键字语法块包围【Ctrl+]】与反包围【Ctrl+Shift+]】
* 强化智能双击：双击if、for等选中函数块、双击注释选中注释块、双击行首空白选择相同缩进行
* 新增扩大选区【ctrl+=】，可连续扩大选区
* 复制行、删除行、剪切行，补充了多光标操作，大幅提升效率
* 新增互换2个选区或2行内容【Ctrl+shift+x】
* 新增去除行尾空格
* 优化了粘贴时自动缩进
* markdown：补充* 号无序列表【ctrl+alt+8】、+号无序列表【ctrl+alt+=】设置行首列表符的快捷键
* markdown：优化粘贴，自动生成url、图片等标签，自动过滤重复列表符
* markdown：支持格式化对齐表格【Ctrl+K】（暂未兼容不同字体和缩放条件变化）
* 解决大的js文件语法校验时卡顿的问题
* 解决修改软件路径导致文件关联失效的问题
* 解决文件内容过少导致无法正确获取编码的问题
* 解决纯净模式没有隐藏控制台的问题

## 0.1.21.20180225-alpha
* 解决css提示内容不全的问题
* 解决jshint语法验证时，没有错误却弹出控制台的问题

## 0.1.20.20180212-alpha
* 新增App打包
* 新增js和json的语法校验
* 新增搜索分类、目录内搜索(Ctrl+Alt+F)
* 新增转到定义(F12)
* 新增纯净模式(双击标签卡)和免打扰模式(F11)
* 优化搜索菜单
* 新增块注释功能(Ctrl+Shift+/)
* 新增ejs、jade等前端模板语法高亮
* 新增为选区每行行首添加光标(Ctrl+Shift+\，也可以理解为Ctrl+|)
* 新增行首列表符设置：无序列表(Ctrl+Alt+-)，有序列表(Ctrl+Alt+1)，任务列表(Ctrl+Alt+1[)，已完成任务列表(Ctrl+Alt+])，并支持多光标设置
* 新增双击列表符-、*、+、[ ]、[x]，选中列表整段区域
* 新增双击#选中markdown标题段落
* [菜单-帮助-markdown语法帮助]中更新了操作技巧
* 解决配置文件包含中文可能导致视图菜单下的自动换行设置失败的问题
* 解决启动后项目管理器没有自动选中当前编辑器打开的文件的问题
* 解决markdown文件中删除空格有时会误删有序/无序列表符号的问题

## 0.1.17.20180122-alpha
* 【重要】需求墙上线了，喜欢HBuilder X的朋友们请移步[https://dev.dcloud.net.cn/wish/](https://dev.dcloud.net.cn/wish/)投票，提出你的想法
* 添加项目手动排序功能（通过鼠标拖动项目管理器里的项目上下移动）
* 添加项目管理器内文件拖拽移动功能
* 添加拖拽外部文件复制到项目管理器功能
* 解决高分屏下保存框字太大的问题

## 0.1.16.20180117-alpha
* 解决同名文件标签卡无法区分的问题
* 新建无标题文档并粘贴一段json后，文档格式将自动调整为json，同时格式化该文档
* 项目管理器里的文件，打开后HBuilderX标题栏显示其磁盘全路径url。

## 0.1.15.20180115-alpha
* 无