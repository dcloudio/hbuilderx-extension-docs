## 4.24.2024072208
* 无

## 4.23.2024070804
* 新增 语言服务 在状态栏显示语言服务详情，方便了解状态和进行设置 [详情](https://hx.dcloud.net.cn/Tutorial/Language/lsStatus)
* 新增 语言服务 出现严重错误时，状态栏提示及快捷报Bug功能
* 新增 语言服务 加密插件存在类型声明文件时，支持引用插件时代码提示
* 调整 语言服务 uni-app x项目 默认关闭uts、uvue、css文件的语法校验，可通过语言服务状态栏打开
* 优化 语言服务 uni ext api代码提示性能
* 优化 语言服务 uni-app x项目 代码提示和语法校验等功能的性能
* 修复 语言服务 uni-app x项目下使用字面量对象赋值给UTSJSONObject与null的联合类型时，误报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2584)
* 修复 语言服务 某些情况下引用的文件路径与本地真实路径大小写不一致时偶发的语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2468)
* 修复 语言服务 uni-app (x) 页面中只有一个uni.的时候，不提示ext api的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2503)
* 修复 语言服务 markdown的代码区域没有css提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2230)
* 修复 语言服务 uni-app x项目 html没有标签提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1798)
* 修复 语言服务 uni-app x项目 组件属性校验不支持识别大小驼峰写法的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2056)
* 修复 语言服务 uts有名类型赋值时，误报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2050)
* 修复 语言服务 uts插件web端引用包名报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2051)
* 修复 语言服务 scss和less使用嵌套写法误报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1451)
* 修复 语言服务 在结束标签结尾位置没有代码提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1581)
* 修复 语言服务 删除文件后，被删除文件中的内容在某些情况下依然有代码提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1564)
* 修复 语言服务 某些情况下import的包名鼠标悬浮功能失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2052)
* 修复 语言服务 vue内置指令v-bind不提示已经存在的属性的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1637)
* 修复 语言服务 uni-app x项目 某些情况下，查找引用结果重复的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1904)
* 修复 语言服务 uni-app x项目 pages.json文件中条件编译指定多平台时，语言服务只在单平台生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1905)
* 修复 语言服务 uni-app x项目 instanceof关键字后面无法提示interface或type类型的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1906)
* 修复 html文件 运行到浏览器，修改该文件依赖的css和js时，不会自动刷新的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2008)
* 修复 项目管理器下，双击打开uts加密文件会导致不停启动HBuilderX的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1949)
* 修复 项目下带package.json时，运行package.json下的scripts命令，导致HBuilderX崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1983)
* 新增 uni-app x 项目 生成本地打包原生Android资源 [详情](https://doc.dcloud.net.cn/uni-app-x/native/use/android.html)
* 新增 uni-app x 真机运行 iOS平台（iOS17以下）uts插件断点调试 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-ios.html)
* 修复 uni-app x 真机运行 iOS模拟器修改uts插件后重签基座控制台没有运行日志的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1963)
* 修复 uni-app x 运行控制台，某些情况下输出的日志颜色错误的Bug
* 修复 uni-app (x) 4.13 引出的，Node升级，导致UTS插件Android debug无法使用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1979)
* 优化 uni-app (x) 运行到iOS uts插件中的日志在控制台中输出的格式
* 修复 uni-app (x) 运行到iOS 控制台打印的日志不能跳转的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1288)
* 修复 uni-app老项目 安心打包勾选DCloud老版证书时，提示语`自定义基座不支持安心打包，请切换到普通打包`不正确的Bug

## 4.15.2024050802
* 修复 语言服务 uni-app项目中使用"@/"形式的绝对路径时，没有代码提示和语法校验报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1590)
* 修复 uni-app x manifest.json Android启动界面设置，当splash图为相对路径时提交云端打包后图片资源丢失的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1814)

## 4.14.2024043013
* 调整 内置node版本由v16.17.0升级到v18.20.0
* 调整 macOS 最低支持版本调整为10.15
* 调整 语言服务 内置vue框架的d.ts版本从3.2.26升级到3.4.21
* 修复 语言服务 scss出现语法错误时，某些情况下无法正常提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1466)
* 新增 语言服务 uts插件 iOS平台支持提示使用的三方Framework的api（仅Mac版支持)
* 调整 语言服务 uts插件 iOS平台语言服务在windows版本的HBuilderX下不再生效
* 修复 语言服务 uts 语法校验 泛型定义时使用内部类误报错的Bug
* 修复 语言服务 uts 语法校验 特殊值域string和string类型的变量相互赋值时误报错的Bug
* 修复 语言服务 uts 语法校验误报错："undefined无法赋值给类型null"的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1461)
* 修复 语言服务 uts 语法校验误报错："number类型无法赋值给number字面量类型"的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1460)
* 修复 语言服务 uts typeof运算符返回值支持平台特有类型 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/operator.html#typeof)
* 新增 语言服务 uni-app x 支持 uvue 标签语法校验 [详情](https://hx.dcloud.net.cn/Tutorial/Language/vueValidate)
* 新增 语言服务 uni-app x 支持 css 语法校验 [详情](https://hx.dcloud.net.cn/Tutorial/Language/cssValidate)
* 修复 语言服务 uni-app x 校验错误提示时，平台错误顺序和设置平台时的顺序不一致的Bug
* 修复 语言服务 uni-app x windows平台选择语法提示和校验平台某些情况下不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1653)
* 修复 windows 切换免打扰模式 F11快捷键在默认快捷键方案下不生效的Bug
* 修复 vue文件 `{{}}`后面无法输入中文符号的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=924)
* 修复 向上插入空行 当光标在第一行时，插入内容不正确的Bug
* 修复 转到定义到新打开的文件，当文件比较大时，有概率导致光标回退时位置回到文件开头的Bug
* 修复 Prettier插件 当卸载重装插件后，如果格式化有冲突，弹框中会重复出现插件名称的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=849)
* 修复 某些情况下，编辑器右键`查找引用`可能导致HBuilderX闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1246)
* 修复 未保存的标签卡，在非激活状态下，退出重开HBuilderX后，修改内容未正确还原的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1317)
* 修复 关闭所有标签卡，在标签卡比较多的情况下，会导致UI卡顿的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1348)
* 修复 编辑器悬浮提示，提示信息内的链接颜色在深色主题下看不清的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1094)
* 修复 文本搜索 在搜索区已经显示的情况下，快捷键触发替换，不能自动显示替换区的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1207)
* 修复 单项目窗口 无打开文件时，`ctrl+tab` 无法触发视图切换的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1365)
* 修复 某些情况下，关闭修改状态下的文件，弹框保存崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1648)
* 修复 当HBuilderX安装目录的上级目录存在package.json、package-lock.json、node_modules时，会导致某些插件安装失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1649)
* 新增 Bug反馈插件 uni-app x分类，支持Web和iOS平台，并且允许多选
* 修复 uni-app 打印多个 object 类型参数时，点击超链接都会跳转到最后一个[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=890)
* 调整 uni-app x 真机运行 Android平台构建缓存目录unpackage/cache/.kotlin调整为unpackage/cache/.app-android
* 修复 App云打包 uni-app项目，提交打包后一直卡在40%的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1630)

## 4.08.2024040127
* 修复 uni-app cli项目 vue3使用vite情况下无法运行的Bug [详情](https://ask.dcloud.net.cn/question/188578)

## 4.07.2024032720
* 修复 语言服务 uts插件web平台下不提示uts基础api的Bug
* 修复 uni-app 真机运行 模拟器支持多cpu架构时，运行标准基座误报不支持的Bug [详情](https://ask.dcloud.net.cn/question/186863)
* 修复 uni-app 内置浏览器打开时，切换文件导致未运行的项目自动运行的Bug [详情](https://ask.dcloud.net.cn/question/188432)
* 修复 uni-app cli项目 发行目录提示是web实际打包到h5的Bug [详情](https://ask.dcloud.net.cn/question/188468)
* 修复 uni-app 运行到web package.json自定义运行到内置浏览器不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1084)

## 4.06.2024032513
* 新增 语言服务 uni-app x 支持多平台代码提示和语法校验，并可按平台切换语言服务 [详情](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support)
* 新增 语言服务 uni ext api 支持interface.uts规范 [详情](https://uniapp.dcloud.net.cn/api/extapi.html#%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91uni-ext-api)
* 升级 语言服务 内置typescript库从`4.5.5`升级到`5.2.2`
* 修复 语言服务 打开共享目录下的文件时，标签代码补全出现$的Bug [详情](https://ask.dcloud.net.cn/question/182857)
* 修复 语言服务 某些情况下，css无法转到定义的Bug [详情] (https://ask.dcloud.net.cn/question/184780)
* 修复 语言服务 pages.json path页面路径提示不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=466)
* 修复 语言服务 查找引用 显示引用结果后，导致文件被占用无法重命名的Bug
* 修复 语言服务 `uni-app x` uts代码import过多的Android平台库时导致性能下降的Bug
* 修复 语言服务 `uni-app x` main.uts中定义的globalProperties属性，在其他uvue页面无法提示的Bug
* 修复 语言服务 `uni-app x` import 导入uvue文件时，路径无法转到定义的Bug
* 修复 语言服务 打开多个html文件时，切换到上一个html，未修改的情况下，变量悬浮、转到定义等可能不对的Bug
* 修复 语言服务 uni_modules utssdk下不提示uni api的Bug
* 修复 语言服务 uniCloud 云函数和云对象开发时，代码提示越来越慢的Bug
* 修复 语言服务 uni-app项目使用vue3+ts时，导入vue类型误报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=720)
* 修复 语言服务 uni-app项目使用ts时，pinia模块查找错误导致误报错的Bug [详情](https://ask.dcloud.net.cn/question/185148)
* 修复 语言服务 uts Android 自动修复存在多个导包选项时，选择第一条以外的选项导入结果不正确的Bug
* 修复 语言服务 uts插件 自动修复导包时，如果当前文件中没有其它import节点，自动导包到第一行后没有换行的Bug
* 修复 语言服务 uts 语法校验 当函数参数类型是`UTSJSONObject`，调用该函数时，使用字面量对象传参时，误报类型不匹配的Bug
* 修复 语言服务 uts 语法校验 `instanceof` 不允许type定义的类型作为值使用的Bug
* 新增 Git-blame插件 在代码行尾显示git日志（需下载插件） [插件地址](https://ext.dcloud.net.cn/plugin?id=16568) [教程](https://hx.dcloud.net.cn/Tutorial/SourceControl/Git/git_blame)
* 新增 消息通知插件 在ide的右下角接收 [uni-im](https://im.dcloud.net.cn) 的消息通知（需下载插件） [插件地址](https://ext.dcloud.net.cn/plugin?name=im-notifier)
* 调整 报Bug插件 报Bug时勾选的HBuilder运行日志、uni-app控制台日志等上传后改为仅管理员可见
* 修复 报Bug插件 macOSX 报bug时无法粘贴图片 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=372)
* 修复 AI 虚拟行样式在切换主题时异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=360)
* 优化 HBuilderX登录界面网络错误提示
* 新增 windows uts、uvue文件支持系统关联图标
* 修复 windows 电脑关机时提示HBuilderX阻止关机的Bug
* 修复 MacOSX 多窗口情况下 在某个窗口弹出菜单，然后鼠标点击另一个窗口上时，焦点状态及激活窗口不正确的Bug
* 修复 MacOSX 项目管理器&内置资源管理 使用快捷键重命名文件名，进入编辑状态时，再次触发快捷键不会自动提交更改的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=795)
* 修复 打开关闭编辑器时，部分内存没有正常回收引发内存泄漏的Bug
* 修复 连续快速转到定义时，返回上一个光标位置可能丢失某个位置的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=485)
* 修复 新建项目 弱网环境下可能导致界面无响应的Bug
* 修复 代码折叠预览 折叠行在屏幕最后一行时，预览界面无法消失的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=450)
* 修复 Prettier插件 格式化uvue时不识别内嵌的uts代码的Bug [详情](https://ext.dcloud.net.cn/plugin?id=2025)
* 修复 控制台文件链接点击跳转到编辑器时，如果目标行被折叠不会自动展开的Bug
* 修复 vue文件 script下的 jsdoc @标签着色不正确的Bug
* 修复 markdown预览 文件名包含+号或其他特殊符号时，导致预览失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=463)
* 修复 markdown预览 预览后再修改文件名导致预览失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=369)
* 修复 markdown预览 内嵌html代码时无法被正常解析渲染的Bug [详情](https://ask.dcloud.net.cn/question/184421)
* 修复 html预览 外部html文件无法运行到浏览器的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=411)
* 修复 html预览 引用相对路径资源不生效的Bug
* 修复 html预览 html文件路径存在中文时，内置浏览器日志无法输出到控制台的Bug
* 修复 html预览 运行菜单子菜单项`保存自动刷新浏览器`不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=721)
* 修复 html预览 项目目录名称带字符'.'时预览html文件报404的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=812)
* 修复 插件进程异常崩溃时，可能导致界面卡死的Bug
* 修复 插件API 使用字体图标扩展的插件，安装使用后因字体占用导致插件无法卸载的Bug
* 修复 插件API window.getActiveTextEditor 当没有打开的标签卡时，该API调用时不返回的Bug
* 修复 运行多个html到chrome，修改其中一个，导致其余html页面刷新的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=313)
* 修复 5+项目运行 运行菜单栏运行到浏览器入口消失的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=447)
* 优化 uni-app (x) 运行到web，调整控制台日志输出格式
* 修复 uni-app (x) pages.json文件、uts文件，菜单`编辑`-`注释`-`条件编译`功能不生效的Bug
* 修复 uni-app (x) HBuilderX刚启动，立即点击运行，有概率误报`uniapp-extension`插件被篡改的Bug
* 修复 uni-app (x) 在编辑器中打开图片文件后，点击预览导致HBuilderX崩溃的Bug
* 调整 uni-app运行 unpackage编译目录 `h5`目录名改为`web`
* 修复 uni-app运行 运行到支付宝小程序 自定义运行不生效的Bug [详情](https://ask.dcloud.net.cn/question/183790)
* 修复 uni-app运行 某些情况下导致HBuilderX内存占用越来越高的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=438)
* 修复 uni-app运行 iOS标准基座签名后，下次升级时不会自动删除，导致升级后运行的重签基座是上一个版本的Bug
* 新增 uni-app x 项目的uts插件支持debug调试 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug.html)
* 优化 uni-app x 运行到Android，调整控制台日志输出格式
* 修复 uni-app x 项目包含uts插件，运行到自定义基座勾选`清理构建缓存`时运行报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=781)
* 修复 uni-app x 真机运行 自定义调试基座，升级HBuilderX后，未提示基座版本不匹配的Bug
* 新增 uts插件 uts Android插件开发，支持Gradle 8.x [详情](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html#%E9%85%8D%E7%BD%AE-gradle-jdk)
* 修复 manifest.json 复制权限到Android权限配置界面时，格式不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=370)
* 修复 插件市场导入项目，当项目仅支持vue2时，导入界面vue3按钮仍可以点击的Bug

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

## 历史更新日志
[已归档的历史版本](/Tutorial/changelog/ReleaseNote_release_archive.md)