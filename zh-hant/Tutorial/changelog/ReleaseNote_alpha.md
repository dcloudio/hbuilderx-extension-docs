## 4.31.2024102414-alpha
### HBuilder 
* 新增 uni-app 在HBuilderX中直接运行和发行鸿蒙应用，不再需要在鸿蒙开发工具中配置模板
* 新增 uni-app manifest可视化界面，新增鸿蒙可视化设置，原App设置改名为安卓/iOS设置
* 新增 语言服务 uts插件开发支持鸿蒙系统API的提示
* 新增 json5文件着色 [详情](https://ext.dcloud.net.cn/plugin?id=19383)
* 优化 大文档选中相同词高亮性能，避免卡顿UI
* 优化 项目管理器项目过多时，降低系统内存和资源占用
* 调整 MacOS 系统文件关联的优先级 [详情](https://ask.dcloud.net.cn/question/90668)
* 调整 重复插入不再使用快捷键`Ctrl+Insert`，改用`Ctrl+Shift+r`，避免和部分AI工具冲突 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7238)
* 修复 `alt+/`快捷键触发代码提示时，偶发触发hover的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9955)
* 修复 编辑器字符搜索 焦点切换到外部程序再切换回来时，会导致代码区域滚动出错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6050)
* 修复 MacOS HTML文件预览到内置浏览器，高亮浏览器内对应元素功能失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10011)
* 新增 语言服务 uni-app (x) theme.json语言服务功能支持 [详情](https://uniapp.dcloud.net.cn/tutorial/darkmode.html#themejson)
* 新增 语言服务 支持内置包名`@dcloudio/uni-app`、`pinia`、`vuex`的自动导包
* 优化 语言服务 内存占用
* 优化 语言服务 vue文件代码提示性能
* 修复 语言服务 当提示项包含`$`符号且当前提示位置后面是括号时，回车后`$`符号丢失的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10021)
* 修复 语言服务 uniapp x 项目下某些情况下js文件报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10014)
* 修复 语言服务 uniapp项目某些情况下定义了同名属性时语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10476)
* 新增 语言服务 easycom组件 标签属性和事件提示时支持defineProps、defineEmits中的定义的属性和事件
* 修复 语言服务 3.8.0版本引发的 html文件中，document.getElementById()根据实际dom元素类型提示失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9588)
* 修复 语言服务 3.5.3版本引发的 html代码块，属性相关代码块不提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8959)
* 修复 语言服务 3.5.3版本引发的 html代码块，属性值的位置误提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8956)
* 修复 语言服务 3.5.3版本引发的 style代码块在属性选择器中误提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8953)
* 修复 语言服务 3.5.3版本引发的 script区域，部分代码块不提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8949)
* 修复 语言服务 3.5.3版本引发的 uni-app项目中html文件缺少条件编译的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8957)
* 修复 语言服务 3.5.3版本引发的 *.schema.json文件`foreignKey`字段循环引用报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9797)
* 修复 语言服务 3.5.3版本引发的 路径提示有概率导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9800)
* 修复 语言服务 3.5.3版本引发的 jsDoc提示导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10075)
* 修复 语言服务 3.5.3版本引发的 URI.parse可能导致的语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10108)
* 修复 语言服务 3.91版本引发的 uni-app x项目中style代码块重复的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8946)
* 修复 语言服务 3.5.3版本引发的 jsdoc代码块补全结果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8873)
* 修复 语言服务 4.08版本引发的 右键功能-文件查找引用无结果的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8022)
* 修复 语言服务 3.6.11版本引发的 编辑器手动指定关联语言时可能导致乱报红的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7676)
* 修复 语言服务 3.98版本引发的 manifest.json文件，在key的中间打字没有代码提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5798)
* 修复 语言服务 3.99版本引发的 废弃upx还能提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5331)
* 修复 语言服务 3.99版本引发的 style代码提示描述不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5213)
* 修复 语言服务 3.94版本引发的 json转type功能，在特定情况下，转换结果不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3930)
* 修复 语言服务 3.6.5版本引发的 markdown的锚点链接提示不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1788)
* 修复 语言服务 3.99版本引发的 class类名转到定义跳转文件不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=861)
* 修复 语言服务 uts plugin中开发安卓插件，覆写interface的方法时误报红的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10034)
* 调整 Windows HBuilderX"运行配置"-"kotlin编译器最大堆内存大小"默认值为2048
* 修复 uni-app 运行到微信开发者工具，偶发关闭运行控制台崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10012)
* 新增 uni-app x 云打包支持aab、渠道包和广告配置
* 新增 uni-app x iOS uvue断点调试 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-ios.html)
* 新增 uni-app x 新建uni_modules插件，增加分类UTS插件-标准模式组件
* 新增 内置了 uni-im 消息通知插件，在右下角闪动未读消息

## 4.28.2024092105-alpha
* 修复 鸿蒙的发行打包功能打出的包只有模板内容，没有应用代码的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8998)
* 修复 uni-app (x) 运行到iOS(18.0)模拟器 切换项目后App内容不更新的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9027)

## 4.27.2024091308-alpha
* 【重要】调整 amazon-corretto插件 从11.0.14升级到17.0.12，Windows从32位升级到64位 [文档](https://hx.dcloud.net.cn/Tutorial/App/notsupportJava)
* 修复 语言服务 4.08版本引发的 删除id和class在代码提示中依旧存在的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7293)
* 修复 语言服务 4.25版本引发的 uts插件报错：‘Could not find source file' 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8029)
* 修复 语言服务 4.25版本引发的 uniapp x项目查找引用失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8134)
* 调整 uts插件 uts Android插件开发配置项到 【设置-运行配置】[文档](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html)
* 修复 uni-app (x) 运行到App 重命名项目后，运行菜单点击没有反应的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7700)

## 4.26.2024082213-alpha
* 修复 4.0版本引发的h5-Extension插件不存在时，uni-app打包点击H5发行无反应的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7071)
* 修复 语言服务 3.5.3版本引发的 某些情况下，style属性选择器补全项提示不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7072)

## 4.25.2024081703-alpha
* 优化 语言服务 代码提示速度
* 优化 语言服务 vue文件中类型推导性能
* 调整 语言服务 uni-app x项目语法提示和校验平台支持多选 [详情](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support)
* 优化 语言服务 uni-app x项目平台兼容性信息显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2734)
* 修复 语言服务 3.5.3版本引发的 vue标签提示在子标签作用域下仍然提示顶级标签的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2419)
* 修复 语言服务 3.5.3版本引发的 vue标签提示在text标签下提示出Emmet代码块的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1791)
* 修复 语言服务 3.5.3版本引发的 某些情况下html文件在转到定义后, 代码提示出错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4126)
* 修复 语言服务 4.11版本引发的 vue文件 使用easycom组件时, 某些情况下组件的路径被识别为文件夹导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2589)
* 修复 语言服务 4.11版本引发的 vue文件 对某个easycom组件标签转到定义后,打开的组件文件script区域功能失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2527)
* 修复 语言服务 4.0版本引发的 vue文件 代码提示存在自动导包提示项时, 会导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2550)
* 修复 语言服务 3.8.10版本引发的 vue文件 某些情况下代码助手右侧详细信息显示不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2573)
* 修复 语言服务 4.11版本引发的 vue文件 template区域下，某些变量边界位置转到定义时引发语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2529)
* 修复 语言服务 4.11版本引发的 uniCloud目录下, 当A文件被B文件引用时, 若先打开B文件再打开A文件, 会导致A文件代码提示等功能失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2698)
* 修复 语言服务 4.01版本引发的 uniapp x项目, uniCloud环境下没有uniCloud相关提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2853)
* 修复 语言服务 4.11版本引发的 cli项目在有tsconfig.json文件的情况下, 某些情况下导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2603)
* 修复 语言服务 3.6.5版本引发的 uni-app项目 触发i18n key的悬浮提示时, 如果缺失翻译文件, 会导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2914)
* 修复 语言服务 4.11版本引发的 重命名文件时, 偶发导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3089)
* 修复 语言服务 3.95版本引发的 特殊值域String, UPageURIString和ScriptImportURIString不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5822)
* 修复 语言服务 3.6.5版本引发的 伪类:before提示项缺失的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6745)
* 修复 语言服务 4.11版本引发的 less和scss代码提示有两个重复项的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6685)
* 修复 语言服务 4.14版本引发的 uvue文件代码提示缺失的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4886)
* 修复 语言服务 4.14版本引发的 语言服务队列消息顺序出错, 导致tsserver服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2581)
* 修复 编辑器右下角切换语言模式时，中文输入法下导致HBuilderX崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3729)
* 修复 Markdown预览 目录层级比较深时，会导致部分图片不渲染的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4122)
* 调整 HBuilderX更新后，没有选择立即重启，在退出软件后，下次启动自动更新 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4120)
* 修复 HBuilderX升级 某些情况下升级成功后，点击立即重启没有重启成功的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4118)
* 修复 文件收藏功能，需要按两次快捷键才能触发的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2311)
* 修复 工具栏搜索分类切换时，下拉菜单某些情况下会自动消失导致鼠标选不中的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2076)
* 修复 地址栏 显示Git分支名称时，点击项目名称后面的箭头时，弹出界面位置不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2196)
* 新增 支持通过软链接将多个uni-app (x)项目的页面、组件、API等目录链接到指定项目下 [详情](https://hx.dcloud.net.cn/Tutorial/App/softLink)
* 新增 uni-app x 项目 生成本地打包原生iOS资源 [详情](https://doc.dcloud.net.cn/uni-app-x/native/use/ios.html)
* 新增 uni-app 云打包 支持Android防重签 [详情](https://uniapp.dcloud.net.cn/tutorial/app-android-antiresigne.html)
* 移除 5+App/wap2app/uni-app的manifest.json中的百度定位和百度地图配置
* 修复 uni-app 云打包 manifest.json中删除`ad`参数，打包时会重新加上`ad:{}`的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5308&ask_id=194093)
* 修复 uni-app 3.8.12引发的 运行到快应用联盟开发工具没有反应的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5588&ask_id=190535)
* 修复 前端网页托管 3.94版本引发的 web类型项目无法发布到前端网页托管的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2901)

## 4.23.2024070309-alpha
* 修复 语言服务 4.18版本引出的 uniapp x项目使用对象字面量时，定义的对象没有UTSJSONObject类型提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2781)
* 修复 uni-app (x) 运行到iOS 控制台打印的日志不能跳转的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1288)
* 修复 uni-app (x) 4.18版本引出的 发行/上传网站到服务器卡在开始打包的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2713)
* 优化 uni-app (x) 运行到iOS，uts插件中的日志在控制台中输出的格式

## 4.22.2024062415-alpha
* 修复 语言服务 uniapp x项目下使用字面量对象赋值给UTSJSONObject与null的联合类型时，误报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2584)
* 修复 uni-app老项目 安心打包勾选DCloud老版证书时，提示语`自定义基座不支持安心打包，请切换到普通打包`不正确的Bug

## 4.21.2024061818-alpha
* 新增 语言服务 加密插件存在类型声明文件时，支持引用插件时代码提示
* 新增 语言服务 出现严重错误时，状态栏提示及快捷报Bug功能
* 修复 语言服务 某些情况下引用的文件路径与本地真实路径大小写不一致时偶发的语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2468)
* 修复 语言服务 uni-app (x) 页面中只有一个uni.的时候，不提示ext api的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2503)
* 修复 4.18版本引出的 markdown预览热更新失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2467)

## 4.19.2024060704-alpha
* 修复 语言服务 markdown的代码区域没有css提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2230)
* 修复 4.18版本引出的 HBuilderX底部状态栏，语言服务语法校验文本，在单窗体下点击无反应的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2353)

## 4.18.2024060311-alpha
* 新增 uni-app x 项目 生成本地打包原生Android资源 [详情](https://doc.dcloud.net.cn/uni-app-x/native/use/android.html)
* 新增 uni-app x 真机运行 iOS平台（iOS17以下）uts插件断点调试 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-ios.html)
* 新增 语言服务 在状态栏显示语言服务详情，方便了解状态和进行设置 [详情](https://hx.dcloud.net.cn/Tutorial/Language/lsStatus)
* 调整 语言服务 uni-app x项目 默认关闭uts、uvue、css文件的语法校验，可通过语言服务状态栏打开
* 优化 语言服务 uni-app x项目 代码提示和语法校验等功能的性能
* 修复 语言服务 uni-app x项目 html没有标签提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1798)
* 修复 语言服务 uni-app x项目 组件属性校验不支持识别大小驼峰写法的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2056)
* 修复 语言服务 uts有名类型赋值时，误报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2050)
* 修复 语言服务 uts插件web端引用包名报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2051)
* 修复 语言服务 scss和less使用嵌套写法误报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1451)
* 修复 语言服务 在结束标签结尾位置没有代码提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1581)
* 修复 语言服务 删除文件后，被删除文件中的内容在某些情况下依然有代码提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1564)
* 修复 语言服务 某些情况下import的包名鼠标悬浮功能失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2052)
* 修复 html文件 运行到浏览器，修改该文件依赖的css和js时，不会自动刷新的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2008)
* 修复 项目管理器下，双击打开uts加密文件会导致不停启动HBuilderX的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1949)
* 修复 项目下带package.json时，运行package.json下的scripts命令，导致HBuilderX崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1983)

## 4.17.2024051110-alpha
* 修复 语言服务 uni-app项目中使用"@/"形式引用包名缺省"index.ts"或"index.js"时，没有代码提示和语法校验报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1934)
* 修复 uni-app x 真机运行 iOS模拟器修改uts插件后重签基座控制台没有运行日志的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1963)
* 修复 uni-app (x) 4.13 引出的，Node升级，导致UTS插件Android debug无法使用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1979)

## 4.16.2024051009-alpha
* 修复 语言服务 uni-app项目中使用"@/"形式的绝对路径时，没有代码提示和语法校验报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1590)
* 修复 语言服务 文件删除后，该文件中定义的符号信息在某些情况下仍旧提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1564)
* 修复 语言服务 vue内置指令v-bind不提示已经存在的属性的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1637)
* 优化 语言服务 uni ext api代码提示性能
* 优化 语言服务 uni-app x项目 错误校验性能
* 修复 语言服务 uni-app x项目 某些情况下，查找引用结果重复的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1904)
* 修复 语言服务 uni-app x项目 pages.json文件中条件编译指定多平台时，语言服务只在单平台生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1905)
* 修复 语言服务 uni-app x项目 instanceof关键字后面无法提示interface或type类型的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1906)
* 修复 uni-app x项目 manifest.json Android启动界面设置，当splash图为相对路径时提交云端打包后图片资源丢失的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1814)
* 修复 uni-app x项目 运行控制台，某些情况下输出的日志颜色错误的Bug

## 4.14.2024042905-alpha
* 修复 某些情况下，关闭修改状态下的文件，弹框保存崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1648)
* 修复 当HBuilderX安装目录的上级目录存在package.json、package-lock.json、node_modules时，会导致某些插件安装失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1649)
* 修复 语言服务 windows平台在uni-app x项目中选择语法提示和校验平台某些情况下不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1653)
* 修复 App云打包 uni-app项目，提交打包后一直卡在40%的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1630)
* 修复 4.13版引出的 `uni_modules` 插件包含 `uni_modules.config.json` 脚本时上传失败的Bug

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
* 修复 4.05版引出的 从插件市场导入项目模版，误提示项目模版无效的Bug

## 4.05.2024032021-alpha
* 修复 4.0版引出的 uni-app (x) 项目运行 刚启动HBuilderX时立即运行有概率误报`uniapp-extension`插件被篡改的Bug

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

## 历史更新日志
[已归档的历史版本](/Tutorial/changelog/ReleaseNote_alpha_archive.md)