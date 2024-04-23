## 4.13.2024042321-alpha
* 调整 内置node版本由v16.17.0升级到v18.20.0
* 调整 macOS 最低支持版本调整为10.15
* 修复 关闭所有标签卡，在标签卡比较多的情况下，会导致UI卡顿的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1348)
* 修复 文本搜索 在搜索区已经显示的情况下，快捷键触发替换，不能自动显示替换区的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1207)
* 修复 单项目窗口 无打开文件时，`ctrl+tab` 无法触发视图切换的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1365)
* 新增 语言服务 非uts插件开发环境下引用iOS平台原生相关模块会报警
* 新增 语言服务 uni-app x typeof运算符返回值支持平台特有类型 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/operator.html#typeof)
* 调整 语言服务 uts插件iOS平台语言服务在windows版本的HBuilderX下不再生效
* 修复 语言服务 导入自定义uvue组件无法识别的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1397)
* 修复 语言服务 uts语法校验误报错："undefined无法赋值给类型null"的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1461)
* 修复 语言服务 uts语法校验误报错："number类型无法赋值给number字面量类型"的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1460)
* 修复 语言服务 scss出现语法错误时，某些情况下无法正常提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1466)
* 新增 uni-app x 真机运行 iOS平台增加清理构建缓存功能，缓存目录为unpackage/cache/.app-ios [详情](https://doc.dcloud.net.cn/uni-app-x/compiler/#cache)
* 调整 uni-app x 真机运行 Android平台构建缓存目录unpackage/cache/.kotlin调整为unpackage/cache/.app-android
* 新增 uni-app (x) 发行到app，iOS图标配置只能为1024*1024像素
* 修复 3.94版引出的 Webview调试控制台 点击调试链接后，无法加载调试等待页面的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1511)
* 修复 4.11版引出的 uni-app x 发行到app，不能正常显示打包错误的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1588)

## 4.12.2024041009-alpha
* 新增 Bug反馈插件 uni-app x分类，支持Web和iOS平台，并且允许多选
* 调整 语言服务 内置vue框架的d.ts版本从3.2.26升级到3.4.21
* 修复 语言服务 uvue标签语法校验 误报v-slot和v-bind不识别的Bug
* 修复 某些情况下，编辑器右键`查找引用`可能导致HBuilderX闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1246)
* 修复 未保存的标签卡，在非激活状态下，退出重开HBuilderX后，修改内容未正确还原的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1317)
* 修复 编辑器悬浮提示，提示信息内的链接颜色在深色主题下看不清的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1094)

## 4.11.2024040401-alpha
* 新增 语言服务 uni-app x 支持 css 语法校验 [详情](https://hx.dcloud.net.cn/Tutorial/Language/cssValidate)
* 新增 语言服务 uni-app x 支持 uvue 标签语法校验 [详情](https://hx.dcloud.net.cn/Tutorial/Language/vueValidate)
* 新增 语言服务 uts插件 iOS平台支持提示使用的三方Framework的api（仅Mac版支持)
* 修复 语言服务 uts 语法校验 泛型定义时使用内部类误报错的Bug
* 修复 语言服务 uts 语法校验 特殊值域string和string类型的变量相互赋值时误报错的Bug
* 修复 语言服务 uni-app x 平台校验错误提示时，平台错误顺序和设置平台时的顺序不一致的Bug
* 修复 windows 切换免打扰模式 F11快捷键在默认快捷键方案下不生效的Bug
* 修复 vue文件 `{{}}`后面无法输入中文符号的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=924)
* 修复 向上插入空行 当光标在第一行时，插入内容不正确的Bug
* 修复 转到定义到新打开的文件，当文件比较大时，有概率导致光标回退时位置回到文件开头的Bug
* 修复 Prettier插件 当卸载重装插件后，如果格式化有冲突，弹框中会重复出现插件名称的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=849)
* 修复 uni-app 打印多个 object 类型参数时，点击超链接都会跳转到最后一个[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=890)
* 修复 uni-app cli项目 vue3使用vite情况下无法运行的Bug [详情](https://ask.dcloud.net.cn/question/188578)

## 4.07.2024032807-alpha
* 修复 语言服务 uts插件web平台下不提示uts基础api的Bug
* 修复 uni-app 真机运行 模拟器支持多cpu架构时，运行标准基座误报不支持的Bug [详情](https://ask.dcloud.net.cn/question/186863)
* 修复 uni-app 内置浏览器打开时，切换文件导致未运行的项目自动运行的Bug [详情](https://ask.dcloud.net.cn/question/188432)
* 修复 uni-app cli项目 发行目录提示是web实际打包到h5的Bug [详情](https://ask.dcloud.net.cn/question/188468)
* 修复 uni-app 运行到web package.json自定义运行到内置浏览器不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1084)

## 4.06.2024032403-alpha
* 无

## 4.05.2024032021-alpha
* 无

## 4.04.2024031519-alpha
* 修复 uni-app 发行到web，开启摇树优化的情况下，提示编译成功，但是没有文件的Bug [详情](https://ask.dcloud.net.cn/question/187418)
* 新增 消息通知插件 在ide的右下角接收 [uni-im](https://im.dcloud.net.cn) 的消息通知（需下载插件） [详情](https://ext.dcloud.net.cn/plugin?name=im-notifier)

## 4.03.2024031101-alpha
* 修复 语言服务 uts插件 自动修复导包时，如果当前文件中没有其它import节点，自动导包到第一行后没有换行的Bug
* 修复 语言服务 uts 语法校验 当函数参数类型是`UTSJSONObject`，调用该函数时，使用字面量对象传参时，误报类型不匹配的Bug
* 修复 语言服务 uts 语法校验 `instanceof` 不允许type定义的类型作为值使用的Bug
* 修复 uni-app 真机运行 iOS标准基座签名后，下次升级时不会自动删除，导致升级后运行的重签基座是上一个版本的Bug
* 修复 uni-app x 真机运行 自定义调试基座，升级HBuilderX后，未提示基座版本不匹配的Bug
* 新增 uni-app x MacOSX 运行到web，支持运行到内置浏览器

## 4.02.2024030621-alpha
* 修复 语言服务 uni-app项目使用vue3+ts时，导入vue类型误报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=720)
* 修复 语言服务 uni-app项目使用ts时，pinia模块查找错误导致误报错的Bug [详情](https://ask.dcloud.net.cn/question/185148)
* 修复 语言服务 uts Android 自动修复存在多个导包选项时，选择第一条以外的选项导入结果不正确的Bug
* 修复 打开关闭编辑器时，部分内存没有正常回收引发内存泄漏的Bug
* 修复 连续快速转到定义时，返回上一个光标位置可能丢失某个位置的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=485)
* 修复 新建项目 弱网环境下可能导致界面无响应的Bug
* 修复 代码折叠预览 折叠行在屏幕最后一行时，预览界面无法消失的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=450)
* 修复 Prettier插件 格式化uvue时不识别内嵌的uts代码的Bug [详情](https://ext.dcloud.net.cn/plugin?id=2025)
* 修复 MacOSX 项目管理器&内置资源管理 使用快捷键重命名文件名，进入编辑状态时，再次触发快捷键不会自动提交更改的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=795)
* 修复 Html预览 运行菜单子菜单项`保存自动刷新浏览器`不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=721)
* 修复 Html预览 项目目录名称带字符'.'时预览html文件报404的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=812)
* 新增 uts插件 uts Android插件开发，支持Gradle 8.x [详情](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html#%E9%85%8D%E7%BD%AE-gradle-jdk)
* 优化 uni-app (x) 运行到web，调整控制台日志输出格式
* 优化 uni-app x 运行到Android，调整控制台日志输出格式
* 修复 uni-app x 项目包含uts插件，运行到自定义基座勾选`清理构建缓存`时运行报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=781)

## 4.01.2024020211-alpha
* 调整 Git插件 将Git Blame 查看当前行git日志功能，抽离为单独插件，支持从插件市场下载 [详情](https://ext.dcloud.net.cn/plugin?id=16568)
* 修复 语言服务 `uni-app x` uts代码import过多的Android平台库时导致性能下降的Bug
* 修复 语言服务 `uni-app x` main.uts中定义的globalProperties属性，在其他uvue页面无法提示的Bug
* 修复 语言服务 `uni-app x` import 导入uvue文件时，路径无法转到定义的Bug
* 修复 语言服务 打开多个html文件时，切换到上一个html，未修改的情况下，变量悬浮、转到定义等可能不对的Bug
* 修复 语言服务 uni_modules utssdk下不提示uni api的Bug
* 修复 语言服务 uniCloud 云函数和云对象开发时，代码提示越来越慢的Bug
* 修复 4.0版引出的 插件API 自定义webview视图 hbuilderx对象报undefined的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=670)
* 修复 4.0版引出的 uni_modules插件 上传到插件市场，打开界面一直loading的Bug
* 修复 4.0版引出的 schema2code插件 右键触发Schema2Code菜单，打开界面一直loading的Bug
* 修复 uni-app (x) HBuilderX刚启动，立即点击运行，有概率误报`uniapp-extension`插件被篡改的Bug
* 修复 uni-app (x) 在编辑器中打开图片文件后，点击预览导致HBuilderX崩溃的Bug

## 4.0.2024012711-alpha
* 新增 语言服务 uni-app x 支持多平台代码提示和语法校验，并可按平台切换语言服务 [详情](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support)
* 新增 语言服务 uni ext api 支持interface.uts规范 [详情](https://uniapp.dcloud.net.cn/api/extapi.html#%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91uni-ext-api)
* 升级 语言服务 内置typescript库从`4.5.5`升级到`5.2.2`
* 修复 语言服务 打开共享目录下的文件时，标签代码补全出现$的Bug [详情](https://ask.dcloud.net.cn/question/182857)
* 修复 语言服务 某些情况下，css无法转到定义的Bug [详情] (https://ask.dcloud.net.cn/question/184780)
* 修复 语言服务 pages.json path页面路径提示不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=466)
* 修复 语言服务 查找引用 显示引用结果后，导致文件被占用无法重命名的Bug
* 新增 Git插件 支持 blame，在代码行尾显示git日志 [详情](https://hx.dcloud.net.cn/Tutorial/SourceControl/Git/git_blame)
* 调整 报Bug插件 报Bug时勾选的HBuilder运行日志、uni-app控制台日志等上传后改为仅管理员可见
* 优化 报Bug插件 提交Bug后，点击详情跳转issues系统时支持自动登录
* 修复 报Bug插件 macOSX 报bug时无法粘贴图片 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=372)
* 修复 AI 虚拟行样式在切换主题时异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=360)
* 优化 HBuilderX登录界面网络错误提示
* 新增 windows uts、uvue文件支持系统关联图标
* 修复 windows 电脑关机时提示HBuilderX阻止关机的Bug
* 修复 macOSX 多窗口情况下 在某个窗口弹出菜单，然后鼠标点击另一个窗口上时，焦点状态及激活窗口不正确的Bug
* 修复 控制台文件链接点击跳转到编辑器时，如果目标行被折叠不会自动展开的Bug
* 修复 vue文件 script下的 jsdoc @标签着色不正确的Bug
* 修复 markdown预览 文件名包含+号或其他特殊符号时，导致预览失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=463)
* 修复 markdown预览 预览后再修改文件名导致预览失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=369)
* 修复 markdown预览 内嵌html代码时无法被正常解析渲染的Bug [详情](https://ask.dcloud.net.cn/question/184421)
* 修复 html预览 外部html文件无法运行到浏览器的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=411)
* 修复 html预览 引用相对路径资源不生效的Bug
* 修复 html预览 html文件路径存在中文时，内置浏览器日志无法输出到控制台的Bug
* 修复 插件进程异常崩溃时，可能导致界面卡死的Bug
* 修复 插件API 使用字体图标扩展的插件，安装使用后因字体占用导致插件无法卸载的Bug
* 修复 插件API window.getActiveTextEditor 当没有打开的标签卡时，该API调用时不返回的Bug
* 修复 运行多个html到chrome，修改其中一个，导致其余html页面刷新的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=313)
* 修复 5+项目，运行菜单栏运行到浏览器入口消失的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=447)
* 调整 uni-app运行 unpackage编译目录 `h5`目录名改为`web`
* 修复 uni-app运行 运行到支付宝小程序 自定义运行不生效的Bug [详情](https://ask.dcloud.net.cn/question/183790)
* 修复 uni-app运行 某些情况下导致HBuilderX内存占用越来越高的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=438)
* 修复 uni-app (x) pages.json文件、uts文件，菜单`编辑`-`注释`-`条件编译`功能不生效的Bug
* 新增 uni-app x 项目的uts插件支持debug调试 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug.html)
* 修复 manifest.json 复制权限到Android权限配置界面时，格式不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=370)
* 修复 插件市场导入项目，当项目仅支持vue2时，导入界面vue3按钮仍可以点击的Bug

## 3.99.2023121601-alpha
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

## 3.98.2023112011-alpha
* 修复 在HBuilderX中打开的文件，被外部程序修改后，偶发不会自动刷新内容的Bug [详情](https://ask.dcloud.net.cn/question/181222)
* 修复 MacOSX markdown预览 当文件比较大时，预览到内置浏览器渲染太慢的Bug
* 修复 ts语言 `#ifdef`等条件编译代码没有高亮的Bug
* 修复 语言服务 id无法转到定义的Bug
* 修复 语言服务 id、class提示，没有按照文件引用关系排序的Bug
* 修复 语言服务 windows 文件监听导致无法重命名和删除文件的Bug
* 修复 语言服务 unicloud-db组件指定的DB Schema表没有属性时，v-slot:default的data类型推导错误的Bug
* 修复 语言服务 uts插件 部分Android系统API不兼容kotlin的类型的Bug
* 修复 语言服务 TailwindCSS插件，没有代码提示的Bug [详情](https://ask.dcloud.net.cn/question/181475)
* 修复 语言服务 uni-app x 部分vue类型不正确导致语法报错的Bug
* 新增 语言服务 uts类型校验错误提示支持国际化
* 修复 3.97引出的，非uniCloud项目，运行后，仍打开了一个uniCloud控制台的Bug
* 修复 安心打包 iOS 自定义调试基座打包时误提示uts付费插件不支持安心打包的Bug [详情](https://ask.dcloud.net.cn/question/181784)
* 优化 App真机运行 Android 自定义基座，在版本号相同但安装时间不同时，不会覆盖安装的Bug
* 修复 App真机运行 Android 通过局域网连接的设备，运行时报不支持反向代理的Bug [详情](https://ask.dcloud.net.cn/question/181431)

## 3.97.2023110504-alpha
* 修复 Windows 在电脑扩展屏幕上，某些情况下登录窗口不可见的Bug
* 修复 3.94引出的，因插件路径调整，导致wap2app项目打包失败的Bug
* 修复 语言服务 uts 系统库代码提示触发自动导包时，导入的路径不对的Bug
* 修复 语言服务 uts 系统库自动修复导包时，导入的路径不对的Bug
* 修复 语言服务 文件删除后 ，该文件中定义的class和id等索引在仍会在代码提示出现的Bug
* 修复 语言服务 项目过大时，某些class不会提示的Bug
* 调整 语言服务 类型校验时支持string或number类型赋值到对应的string或number字面量联合类型
* 修复 语言服务 在调用函数使用字面量对象传入参数时，在{}内加双（单）引号提示属性，回车后补全不对的Bug
* 新增 Markdown 预览支持编辑器和预览视图双向同步滚动
* 新增 Markdown 在HBuilderX内打开的编辑器中复制代码粘贴到Markdown编辑器时，自动包裹对应语言的代码块
* 修复 编辑器变量悬浮时，快速关闭编辑器可能导致崩溃的Bug
* 新增 uni-app 运行到支付宝小程序时，支持自动打开项目并进入预览模式
* 修复 3.94引出的 uniCloud 初始化向导操作异常的Bug
* 修复 uniCloud 上传第一个云函数后，再次上传时没有反应的Bug
* 修复 uniCloud 先本地运行云函数，再上传云函数时，上传日志不会输出到控制台的Bug

## 3.94.2023102311-alpha
* 修复 3.91-alpha引发的 切换主题时，单击文件打开，若该文件之前打开过，会导致主题没有正常切换的Bug
* 修复 语言服务 uni-app x项目 uni.getElementById("") id参数不能提示和转到定义的Bug
* 修复 语言服务 uni-app x项目 选项式API内部作用域下定义的变量，语法校验时误报未使用的Bug
* 修复 语言服务 uni-app x项目 easycom组件后缀是uvue时，不能转到定义的Bug
* 修复 语言服务 uni-app x项目 Element 和 ComponentPublicInterface 类型使用时报未定义的Bug
* 修复 语言服务 3.91-alpha引出的，部分iOS系统库API缺失的Bug
* 修复 语言服务 3.93-alpha引出的，uni-app项目 当pages.json有语法错误时，vue文件会误报错的Bug
* 修复 App云打包 uni-app x项目，AndroidManifest.xml文件和nativeResources/android目录下的文件没有上传的Bug
* 修复 App真机运行 uni-app x项目，某些情况下报`未查到基座位置undefined`的Bug

## 3.93.2023101913-alpha
* 修复 Markdown 表格格式化后，需要多次撤销才能还原的Bug
* 修复 语言服务 引用uts插件不提示路径和无法对路径转到定义的Bug
* 修复 语言服务 引用uts插件后不提示uts插件导出内容的Bug
* 【重要】调整 App项目全系列调整为默认64位，即manifest.json的Android平台支持CPU类型默认值为`arm64-v8a`。如需32位需手动配置manifest打包后生效
* 修复 App真机运行 3.91版本引发的项目下文件路径带特殊字符时，会导致文件同步失败的Bug
* 修复 App真机运行 5+项目 修改js、css、图片等文件时，不会自动刷新引用这些资源的页面的Bug
* 新增 uni-app x运行配置 支持设置kotlin编译器内存参数 (菜单【设置 - 运行设置】，uni-app x运行配置)
* 修复 uni_modules插件 上传插件没有uni-app x相关分类的Bug

## 3.92.2023101106-alpha
* 修复 Markdown 图片悬浮预览时闪烁的Bug
* 修复 .editorconfig 文件存在扩展的设置项时，误报格式错误的Bug
* 修复 语言服务 uvue文件 选项式API props 误报错的Bug
* 修复 语言服务 uni-app x 条件编译 提示重复和内容不对的Bug
* 修复 uni_modules插件 上传到插件市场时，当更新日志中出现${}特殊标记时，引发HBuilderX崩溃的Bug
* 修复 uni-app 新建页面 页面在pages.json插入时缩进以及换行符和当前编辑器设置不一致的Bug
* 修复 uni-app manifest.json 点击某些元素时偶发崩溃的Bug

## 3.91.2023092719-alpha
* 【重要】新增 uni-app-x ，不再使用js和webview，编译为纯原生App，目前仅支持Android [详情](https://uniapp.dcloud.net.cn/uni-app-x/)
* 新增 HBuilderX 版本升级 支持差量更新 提升更新速度
* 调整 HBuilderX和uni-app的版本号改为数字 [详情](https://uniapp.dcloud.net.cn/tutorial/version.html)
* 新增 HBuilderX 支持搜索设置项（快捷键: `Alt+Shift+,`)
* 新增 项目管理器 鼠标拖拽移动文件 增加确认弹窗
* 优化 大幅字符替换操作的性能
* 优化 大文件 注释上千行代码操作性能
* 修复 菜单【视图】来回切换控制台，再按下`Alt+Tab`，出现一个新的空白无title的控制台Bug
* 修复 MacOSX 某些情况下，点击顶部视图或帮助菜单，HBuilderX出现崩溃的Bug
* 修复 多文件字符搜索 首次激活搜索视图 搜索输入框没有自动置焦的Bug
* 修复 格式化 vue/uvue文件template区域写条件编译时，格式化后条件编译缩进不对的Bug
* 修复 格式化 TS文件选中区域格式化时，当选中区域小于一行时，格式化结果可能不对的Bug
* 修复 某些情况下 HBuilderX plugin-manager Node进程无法退出的Bug
* 修复 App真机运行 Android设备选择窗口，设备列表刷新慢的Bug
* 修复 App真机运行 Android设备选择窗口，Windows下有时手机列表显示异常数据的Bug
* 新增 uni-app manifest.json App模块配置，Facebook登录，增加配置项client_token
* 修复 uni-app manifest.json App模块配置->定位->高德定位，只勾选Android，校验appkey_ios的Bug

## 3.8.12.20230802-alpha
* 修复 某些情况下HBuilderX退出后，部分node进程CPU100%无法正确退出的Bug
* 修复 多文件搜索 指定搜索范围后，切换编辑器标签卡导致搜索范围改变的Bug
* 修复 单行注释 光标在行首时，执行反注释不生效的Bug
* 修复 语言服务 某些情况下uniCloud目录下的文件代码提示慢的Bug
* 修复 语言服务 开启js语法校验后，vue文件内js报错不正确的Bug
* 修复 语言服务 uni-app项目 无法识别pinia模块的Bug
* 修复 语言服务 uni-app项目 模块名提示时不会提示内置模块（eg：@dcloudio/uni-app）的Bug
* 修复 语言服务 vue、html文件 偶发大纲不生效的Bug
* 修复 语言服务 html文件 部分模版语法可能导致代码无法提示的Bug
* 修复 uni-app 真机运行时，拔掉手机后再插上，重新运行会导致控制台日志重复及编译进程多个的Bug
* 修复 uni-app 真机运行 某些情况下运行控制台工具栏`重启应用`按钮点击后不生效的Bug

## 3.8.11.20230719-alpha
* 修复 语言服务 vue/nvue文件标签事件内没有代码提示的Bug
* 优化 uni-app 运行到抖音小程序工具时，自动打开项目进入Lite模式

## 3.8.10.20230714-alpha
* 新增 语言服务 JS、TS支持错误校验自动修复 [详情](https://hx.dcloud.net.cn/Tutorial/Language/auto-fixed)
* 修复 语言服务 Vue 箭头函数内this无法访问vue实例的Bug
* 修复 语言服务 Vue API描述国际化失效的Bug
* 修复 语言服务 悬浮框内文字不支持`ctrl + c`复制的Bug
* 修复 语言服务 悬浮框偶发悬浮到其他应用窗口上的Bug
* 修复 语言服务 TS文件块注释内敲`@`不提示注释标签的Bug
* 修复 语言服务 vue文件JS块注释内敲`@`提示注释标签，回车后替换内容不对的Bug
* 新增 支持在ts方法上敲`/**`自动提取方法参数信息到tsdoc上
* 新增 Git插件 在工具栏内的地址栏里，项目名称左侧新增Git分支名称，点击后可以方便的进行Git相关操作
* 修复 代码助手 某些情况下列表不能翻到下一页时下一页按钮仍然不置灰的Bug

## 历史更新日志
[已归档的历史版本](/Tutorial/changelog/ReleaseNote_alpha_archive.md)