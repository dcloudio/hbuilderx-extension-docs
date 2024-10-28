## 3.99.2023121601-alpha
### HBuilder
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
### uni-app 插件
* 新增 编译器 nvue + vue2 支持使用ts开发。方便插件作者的库全面升级为ts。
* Web平台、App-Vue平台 新增 radio 组件支持 backgroundColor、borderColor、activeBackgroundColor、activeBorderColor、iconColor 属性  [详情](https://uniapp.dcloud.net.cn/component/radio.html#radio)
* Web平台、App-Vue平台 新增 checkbox 组件支持 backgroundColor、borderColor、activeBackgroundColor、activeBorderColor、iconColor 属性 [详情](https://uniapp.dcloud.net.cn/component/checkbox.html#checkbox)
* Web平台 新增 Vue3 项目支持百度地图 [详情](https://uniapp.dcloud.net.cn/collocation/manifest#h5sdkconfig)
* Web平台 修复 Vue3 CLI 创建的项目打包后多根节点组件属性丢失的Bug [详情](https://ask.dcloud.net.cn/question/182569)
* Web平台 修复 map 组件使用高德地图 circles 的 fillColor、color 属性设置透明度无效的Bug [详情](https://ask.dcloud.net.cn/question/159809)
* App-Android平台 修复 uni.downloadFile 下载完成发后会多触发一次 onProgressUpdate 事件的Bug
* App-iOS平台 修复 nvue map 组件选择 google 地图时，使用自定义气泡导致应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/183494)
* App平台 修复 vite.config.js 配置 target 为 esnext 时 nvue 页面报错的Bug [详情](https://ask.dcloud.net.cn/question/183180)
* 小程序平台 修复 Vue3 项目 script setup 中 onError 无效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4276)
* 小程序平台 修复 Vue3 项目插槽内容为单根节点时 v-if 无效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4486)
* 支付宝小程序平台 新增 组件支持 styleIsolation 配置，默认值 apply-shared [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#mp-alipay)
* 飞书小程序平台 修复 Vue3 项目作用域插槽不显示内容的Bug [详情](https://ask.dcloud.net.cn/question/181927)
### uni-app x 插件
* 修复 编译器 部分情况下报错信息未回溯到源码的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=246) [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=253) [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=264)
* 修复 编译器 组件递归使用时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=225)
* 优化 编译器 真机运行调用未包含的被摇掉的api的错误提示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=227)
* 修复 应用 onLaunch 生命周期调用 route API 异常的Bug
* 新增 vue框架 支持 app.use 注册 vue 插件 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#app-instance)
* 新增 vue框架 app.config.globalProperties 注册全局属性 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#app-instance)
* 新增 vue框架 动态组件 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#special-elements)
* 新增 vue框架 provide/inject 用于组件通信 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#composition-options)
* 新增 vue框架 mixin 混入 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#composition-options)
* 新增 vue框架 v-html 指令 [详情](https://doc.dcloud.net.cn/uni-app-x/component/index.html#directives)
* 新增 vue框架 v-once 指令、v-memo 指令、v-pre 指令 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#directives)
* 新增 vue框架 componentInstance.$forceUpdate [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#component-instance)
* 新增 vue框架 支持 render 函数 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#rendering-options)
* 新增 全局变量 globalData [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#globaldata)
* 新增 splash 在 manifest.json 中配置启动封面 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-splashscreen.html)
* 新增 uni-ad 开屏广告 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-ad)
* 新增 组件 input 的属性 cursor-color，用于调整光标颜色 [详情](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)
* 新增 API uni.getUniverifyManager，App一键登陆 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html)
* 新增 API uni.getFileSystemManager，本地文件管理 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-file-system-manager.html)
* 优化 规范了文件系统使用，对cache文件进行了详细约定 [详情](https://doc.dcloud.net.cn/uni-app-x/api/file-system-spec.html)
* 新增 API uni-push 支持荣耀厂商推送
* 修复 API uni.toast、uni.showModal等交互反馈弹窗在 onReady 生命周期前调用可能无法正常显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=312))
* 补齐 CSS background-image 的 linear-gradient 渐变方向支持 to bottom left 、to top right [详情](https://doc.dcloud.net.cn/uni-app-x/css/background-image.html)
* 修复 CSS 先后设置 box-shadow 与 border 属性导致后设置的样式不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=280)
* 修复 CSS z-index 属性可能引发下标越界异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=215)
* 修复 CSS position 设置为 fixed 时 z-index 可能不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=274)
* 修复 CSS transition 初始值为百分比时动态设置 length 值动画效果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=262)
* 修复 CSS transition-property 属性值动态更新为 background-color 时不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=298)
* 修复 CSS transform-origin 在设置 transition-property 为 transform 时不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=299)
* 修复 组件 text 在某些情况设置 max-width 后高度不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=257)
* 修复 组件 video 无法播放本地m3u8文件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=229)
* 修复 组件 list-view 无法通过 scroll-into-view 属性滚动到 sticky-header 组件位置的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=261)
* 修复 组件 list-item 被复用后 click 事件无法正常触发的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=271)
* 修复 组件 view 设置 overflow 为 visible 后需同时对父元素设置 overflow 为 visible 才能生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=259)
* 修复 组件 view 设置 overflow 为 hidden 后子元素显示区域可能占用 border 边框区域的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=304)
* 修复 TouchEvent 事件在超出父视图可视区域后 screenX、screenY 属性值可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=245)
* 修复 系统切换暗黑模式导致应用白屏
* 优化 App打release包后，应用资源不再释放到存储卡，提升首次启动速度
* 调整 API uni.installApk 安装apk，从ext api改为内置api [详情](https://doc.dcloud.net.cn/uni-app-x/api/install-apk.html)
* 调整 App真机运行标准基座内置 uni-facialRecognitionVerify 实人认证模块，方便调试开发
* 修复 App真机运行调用 uni.exit 后可能导致应用异常崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=169)
* 新增 ui库 uni-icons 支持uni-app x [详情](https://uniapp.dcloud.net.cn/component/uniui/uni-icons.html)
* 新增 ui库 uni-data-picker 支持uni-app x [详情](https://uniapp.dcloud.net.cn/component/uniui/uni-data-picker.html)
* 新增 uni-cms 客户端插件 uni-cms-article [详情](https://ext.dcloud.net.cn/plugin?id=11701)
* 更新 模板 App升级中心 支持在通知栏显示下载进度
* 更新 模板 uni-id-pages-x v1.0.4+ 不再支持配置项：`config.needLogin`，改用uni-id-router替代 [详情](https://ext.dcloud.net.cn/plugin?name=uni-id-pages-x)
### uts插件
* 新增 Android平台 UTSAndroid.getFileProviderUri，方便控制应用内文件对外分享 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html#getfileprovideruri)
* 优化 新建uni_modules插件的UTS插件模板，默认包含完整演示UTS插件API/组件示例
* 修复 Android平台 本地 libs 三方依赖变更后不生效的Bug [详情](https://ask.dcloud.net.cn/question/182382)
* 修复 多个解构语句可能编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=217)
* 修复 App-iOS平台 类继承时属性 override 报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=207)
* 修复 App-Android平台 UTSJSONObject对象定义方法后，不能通过索引调用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=234)
* 修复 App-Android平台 顶层变量、type 属性、类实例属性、类静态属性仅首字母大小写区分时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=286)
### App插件(含5+App和uni-app的App端)
* 更新 一键登录使用的个验 SDK Android为 3.1.6.0 版，iOS为 3.0.6.0 版，解决联通运营商一键认证服务主体变更导致新开通应用预登录可能失败的问题
* Android平台 更新 UniPush使用的个推核心组件 SDK 为 3.2.9.0 版，个推 SDK 为 3.3.3.0 版，支持荣耀厂商推送；谷歌渠道个推 SDK 为 4.4.3.6 版，适配Android14
* iOS平台 更新 支付模块 微信 SDK 为 2.0.2 版；支付宝 SDK 为 15.8.6 版； Paypal SDK 为 1.2.0 版；Stripe SDK 为 23.18.2 版
* iOS平台 更新 分享/登录模块 微信 SDK 为 2.0.2 版；QQ SDK 为 3.5.14 版；新浪微博 SDK 为 3.3.4 版；Facebook SDK 为 16.2.1 版；Google SDK 为 7.0.0 版
* iOS平台 更新 地图/定位模块 高德地图 SDK 为 9.7.0 版，高德定位 SDK 为 2.10.0 版；百度地图 SDK 为 6.6.0 版，百度定位 SDK 为 2.0.9 版
* iOS平台 更新 统计模块 友盟基础库 SDK 为 7.4.2 版，友盟统计 SDK 为 9.6.1 版；Google 统计 SDK 为 10.18.0 版
* iOS平台 更新 uni-AD模块 Google AdMob SDK 为 10.13.0 版
* iOS平台 修复 iPhone 15 设备无法获取手机型号的Bug [详情](https://ask.dcloud.net.cn/question/182298)
* iOS平台 修复 iOS17系统视频播放控件 video 竖屏状态下进入全屏后退出全屏无法正常显示的Bug
### uniCloud插件
* 【重要】新增 七牛云扩展存储 价格更优、权限更灵活 [详情](https://uniapp.dcloud.net.cn/uniCloud/ext-storage/intro.html)
* 新增 uni-app-x 项目支持 uniIdRouter [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id/summary.html#uni-id-router)
* 新增 支付宝小程序云 支持云函数URL化
* 补齐 支付宝小程序云 支持ide中运行JQL文件
* 修复 支付宝小程序云 doc get 未兼容返回值为 null 的Bug [详情](https://ask.dcloud.net.cn/question/182457)
* 修复 支付宝小程序云 数据库 where、match 查询对象时结果不正确的Bug
* 修复 支付宝小程序云 云存储上传失败时，失败原因未在前端展示的Bug
* 修复 支付宝小程序云 uni.getTempFileURL API 返回只有文件名的Bug
* 修复 项目存在多个云厂商时，上传云函数识别云厂商错误的Bug
* 修复 database 目录右击菜单“上传Schema扩展Js的配置”提示“请绑定服务空间”的Bug [详情](https://ask.dcloud.net.cn/question/182971)
* 修复 创建 Schema 时，存在数据量大的 init_data.json 会导致无法正确下载的Bug
* 修复 单独上传 uni-clientDB-actions 文件时会导致覆盖之前上传的 action 的Bug [详情](https://ask.dcloud.net.cn/question/182598)
* 修复 上传云函数、创建schema、上传/下载校验函数时，如果存在时在弹窗中选择跳过将会跳过所有的Bug
* 修复 初始化向导删除 db_init.json 文案的Bug
* 优化 关联服务空间时可以跨不同云厂商切换服务空间

## 3.98.2023112011-alpha
### HBuilder
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
### uni-app插件
* 优化 编译时如 static 目录下存在被忽略的、非当前平台可用的目录，会给出强调提示 [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#static)
* 修复 当项目使用了uni ext api时，且云打包同时勾选Android和iOS，发行后的安装包未能正确包含uni ext api插件的Bug [详情](https://ask.dcloud.net.cn/question/181295)
* uni统计2 修复 支付宝小程序云报错 spaceAppId required 的bug [详情](https://ask.dcloud.net.cn/question/181491)
### uni-app x插件
* 优化 编译器 项目存在大量css代码时的编译速度
* 新增 组件 sticky-section 分段吸顶 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/sticky.html#sticky-section)
* 新增 API uni-push [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/push.html)
* 新增 css position 属性设置为 absolute 时，margin 支持取值 auto
* 调整 API uni.downloadFile 下载默认目录调整为app的cache目录下的uniDownloads目录，方便被rom的清理工具清理 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=201)
* 修复 组件 video 部分 event 回调没有属性值的Bug [详情](https://ask.dcloud.net.cn/question/180748)
* 修复 组件 swiper current 属性可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/181396)
* 修复 组件 list-item 执行复用时遇到 text 组件嵌套可能会闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=216)
* 修复 组件 checkbox-group 动态修改 checkbox 组件的 check 属性时，form 组件提交的 value 不正确的Bug
* 修复 组件 radio-group 动态修改 radio 组件的 check 属性时，form 组件提交的 value 不正确的Bug
* 修复 组件 slider 当父容器可滚动且显示 value 且当前滑块值为最大值时，无法直接在滑块的右半径上按下拖动的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=218)
* 修复 组件 scroll-view、list-view 同时设置 scroll-y、scroll-x属性为 false 时，组件的 touch 相关事件不触发的Bug
* 修复 easycom组件类型在非uvue页面中使用报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=177)
* 修复 3.97引出的 首页面 onLoad 生命周期调用 uni.showLoading 可能会崩溃的Bug [详情](https://ask.dcloud.net.cn/question/181567)
* 修复 css 代码中引用非 static 目录的静态资源失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=231)
* 修复 部分情况下真机运行 appid 为空导致应用异常崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=162)
* 修复 使用 v-if 显示组件的 background 样式设置为线性渐变可能引起崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=164)
* 调整 各项目模板的 index.html （web平台专有文件）中引入入口文件从 main.js 改为 main（即main.uts，后缀可省略）
* 新增 模板 App升级中心兼容uni-app x [详见](https://ext.dcloud.net.cn/plugin?id=4542)
* 新增 模板 uni-id-pages-x [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id/app-x.html)
### uts插件
* 优化 异步函数在 uni-app x 中使用时默认与框架运行在同一线程
* 修复 部分位运算组合使用时优先级不正确的Bug
* 修复 App-Android平台 Array join 返回值与 web 不一致的Bug
* 修复 自定义基座真机运行时hooksClass 相关回调重复调用的Bug
* 修复 App-iOS平台 使用 uts 插件（含ext api）后因底层依赖 uni-getDeviceInfo 有读取 IDFA 的代码导致可能影响应用上架审核的Bug
* 修复 Number 参与的运算结果可能整型溢出的Bug
* 修复 Number 参与的除法运算除数不能为0的Bug
### App插件(含5+App和uni-app的App端)
* Android平台 更新 uni-AD 模块 穿山甲&GroMore SDK为 5.7.0.5 版，解决加载广告可能会崩溃的Bug
* Android平台 更新 一键登录使用的个推核心组件SDK为 3.2.9.0 版，个验SDK为 3.1.4.0 版
* Android平台 更新 uni实人认证使用的阿里云金融级实人认证SDK为 2.3.7 版
### uniCloud插件
* 新增 uni-app-x 项目 支持uniCloud支付宝小程序云
* 新增 支付宝小程序云初始化向导
* 优化 基于模板新建schema/新建schemajs时，如模板是由多个文件组成的，允许用户选择创建具体的文件
* 修复 初始化云数据库时，云端已存在集合触发的弹窗提示中第一个集合默认选中的Bug
* 修复 打开db_init.json文件后，在编辑区域右键“初始化数据库”无法初始化的Bug
* 修复 对uniCloud文件夹重命名后，不会更新uniCloud文件夹别名的Bug
* 修复 上传公共模块时项目目录下不存在uni_modules目录导致无法上传的Bug
* 修复 微信小程序平台上传文件到支付宝小程序云报错的Bug
* 修复 支付宝小程序云 database update 操作返回值没有返回 updated 参数的Bug

## 3.97.2023110504-alpha
### HBuilder
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
### uni-app插件
* 修复 vue3 项目 vite.config.js 配置 target 未作用到 renderjs 的Bug [详情](https://ask.dcloud.net.cn/question/180135)
* 修复 使用 uts 开发的 ext-api，升级更新 wgt 后，调用可能报错的Bug [详情](https://ask.dcloud.net.cn/question/180309)
### uni-app x插件
* 新增 form 组件 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/form.html)
* 新增 uni.addInterceptor 拦截器，可拦截部分API [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/interceptor.html)
* 新增 uni.setNavigationBarTitle [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/set-navigation-bar-title.html)
* 新增 uni.getAppBaseInfo 获取获取包名、签名信息 [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/get-app-base-info.html)
* 新增 scroll-view 组件支持 nested-scroll-child，可将嵌套滚动的父滚动视图滚动余量传递给子视图 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/scroll-view.html)
* 新增 web-view 组件支持 download 事件，以及 loading、loaded 事件回调参数支持 url 属性 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/web-view.html)
* 新增 image、video 组件 src 支持非 static 目录的静态资源
* 新增 uvue 文件支持引入 ts 后缀的文件，等同于 uts 后缀
* 新增 App-Android平台 真机运行标准基座内置所有常用权限
* 修复 动态创建的根节点 class 样式丢失的Bug
* 修复 v-model 绑定的表达式包裹 () 运行失败的Bug
* 修复 在自定义组件中使用 class 定制另一个自定义组件根节点样式不生效的Bug
* 修复 data 中定义的 UTSJSONObject 修改后，不触发渲染的Bug
* 修复 uvue 页面文件名与 easycom 组件同名时渲染不正确Bug
* 修复 text 组件固定宽高时，设置 padding-left 和 padding-right 可能导致文本不居中的Bug
* 修复 text 组件设置 space 属性时，换行符 \n 有时无法正常显示的Bug
* 修复 text 组件设置 line-height 属性可能不生效的Bug
* 修复 swiper-item 组件 overflow 属性值为 hidden 时子元素未被裁剪的Bug
* 修复 uni.loadFontFace 多次请求同一网络字体时可能触发错误回调的Bug
* 修复 Element 的 style 调用 setProperty 更新 transition-duration 属性值不支持单位为s(秒)的Bug
* 修复 uni.toast、uni.showModal等交互反馈弹窗在onLoad等特定场景可能引起应用崩溃的Bug
* 修复 App-Android平台 uni.getLocation 使用系统定位获取位置信息慢的Bug
### uts插件
* 修复 位移赋值类操作符，当右侧为复杂表达式，计算结果不正确的Bug
* 修复 相同interface、class定义了不同属性，方法调用失败的Bug
* 修复 App-Android平台 string 的 indexOf 方法参数类型不正确的Bug
* 新增 App-Android平台 uni-app x项目开发的uts原生组件定义的对外方法支持返回值
* 新增 App-iOS平台 真机运行适配支持 XCode15
* 新增 uts插件支持监听应用的原生生命周期回调函数 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#hooksclass)
* 新增 uts组件插件支持 NVUpdateStyles 生命周期监听组件的样式更新 [详情](https://uniapp.dcloud.net.cn/plugin/uts-component.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
* 调整 App-Android平台 uts组件插件内置对象 $androidContext 可为空 [详情](https://uniapp.dcloud.net.cn/plugin/uts-component.html#%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1%E5%92%8C%E5%87%BD%E6%95%B0)
* 修复 uni-app 项目 vue2 下开发uts插件报错可能未指向源码的Bug
### uniCloud插件
* 【重要】新增 uni-app 项目 支持uniCloud支付宝小程序云版。价格更优，限制更少，支持域名备案
* 调整 `db_init.json` 按collection拆分，每个collection由schema.json、index.json、init_data.json三个文件描述 [详情](https://uniapp.dcloud.net.cn/uniCloud/hellodb.html#init-db)

## 3.94.2023102311-alpha
### HBuilder
* 修复 3.91-alpha引发的 切换主题时，单击文件打开，若该文件之前打开过，会导致主题没有正常切换的Bug
* 修复 语言服务 uni-app x项目 uni.getElementById("") id参数不能提示和转到定义的Bug
* 修复 语言服务 uni-app x项目 选项式API内部作用域下定义的变量，语法校验时误报未使用的Bug
* 修复 语言服务 uni-app x项目 easycom组件后缀是uvue时，不能转到定义的Bug
* 修复 语言服务 uni-app x项目 Element 和 ComponentPublicInterface 类型使用时报未定义的Bug
* 修复 语言服务 3.91-alpha引出的，部分iOS系统库API缺失的Bug
* 修复 语言服务 3.93-alpha引出的，uni-app项目 当pages.json有语法错误时，vue文件会误报错的Bug
* 修复 App云打包 uni-app x项目，AndroidManifest.xml文件和nativeResources/android目录下的文件没有上传的Bug
* 修复 App真机运行 uni-app x项目，某些情况下报`未查到基座位置undefined`的Bug
### uni-app x插件
* 修复 多根节点时，uni.getElementById 获取失败的Bug
* 修复 web-view 组件点击网页中的输入框无法弹出软键盘的Bug
* 修复 scroll-view 组件的子组件滑动松手后惯性滚动时没有触发 nestedprescroll 事件的Bug
### uts插件
* App-Android平台 更新 编译使用的 Android SDK 为 33
* App-Android平台 修复 number 的 toFixed 方法返回结果可能异常的Bug
* App-Android平台 修复 number 数据类型的位运算操作可能引起崩溃的Bug
### App插件(含5+App和uni-app的App端)
* Android平台 修复 targetSdkVersion 设置为 33 在 Android13 设备保存图片到相册失败的Bug
* iOS平台 更新 uni-AD模块 百度百青藤广告SDK 为 5.324 版，解决信息流广告偶现无法关闭的Bug

## 3.93.2023101913-alpha
### HBuilder
* 修复 Markdown 表格格式化后，需要多次撤销才能还原的Bug
* 修复 语言服务 引用uts插件不提示路径和无法对路径转到定义的Bug
* 修复 语言服务 引用uts插件后不提示uts插件导出内容的Bug
* 【重要】调整 App项目全系列调整为默认64位，即manifest.json的Android平台支持CPU类型默认值为`arm64-v8a`。如需32位需手动配置manifest打包后生效
* 修复 App真机运行 3.91版本引发的项目下文件路径带特殊字符时，会导致文件同步失败的Bug
* 修复 App真机运行 5+项目 修改js、css、图片等文件时，不会自动刷新引用这些资源的页面的Bug
* 新增 uni-app x运行配置 支持设置kotlin编译器内存参数 (菜单【设置 - 运行设置】，uni-app x运行配置)
* 修复 uni_modules插件 上传插件没有uni-app x相关分类的Bug
### uni-app插件
* 微信小程序平台 修复 subscribe 组件属性无效的Bug [详情](https://ask.dcloud.net.cn/question/178893)
* 支付宝小程序平台 修复 lottie 组件属性无效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4510)
* 抖音小程序平台 修复 Vue2 项目运行到抖音 27.2.0 版本以上 $refs 失效的Bug [详情](https://github.com/dcloudio/uni-app/pull/4555)
### uni-app x插件
* 新增 sticky-header 吸顶组件 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/sticky-header.html)
* 新增 unicloud-db 组件 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/unicloud-db.html)
* 新增 takeSnapshot 截图api [详情](https://uniapp.dcloud.net.cn/uni-app-x/dom/element.html#takeSnapshot)
* 新增 transitionend 动画结束事件 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/common.html#transitionend)
* 新增 css border-*-width 属性值支持 thin | medium | thick
* 新增 摇树优化 代码中未使用的内置模块（如video）会自动摇掉，减少安装包体积 [详情](https://uniapp.dcloud.net.cn/uni-app-x/manifest.html#treeShaking)
* 优化 组件类型，内置组件和自定义组件可更方便的获取类型并调用组件方法 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/#methods)
* 优化 uni.getElementById 支持泛型 [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/get-element.html)
* 新增 list-view 组件的下拉刷新支持自定义样式
* 修复 list-view 组件嵌套 swiper 时 swiper-item 可能重复显示的Bug
* 修复 list-view 组件某些情况子节点位置错乱的Bug
* 修复 video 组件在 Android8.0 以下设备使用硬解码可能引起崩溃的Bug
* 修复 web-view 组件在 Android11 及以上设备可能无法加载本地网页的Bug
* 修复 text 组件动态修改 display 属性可能出现渲染异常的Bug
* 修复 css position 属性设置为 fixed 时，z-index 属性可能不生效的Bug
* 修复 uvue 文件 methods 中定义的方法不能递归访问的Bug [详情](https://ask.dcloud.net.cn/question/179395)
* 修复 目录包含特殊字符编译报错的Bug
* 修复 ref 绑定节点移除时，$refs 数据未更新的Bug
### uts插件
* 新增 await 支持与 Promise 一同使用 [详情](https://uniapp.dcloud.net.cn/uts/operator.html#await)
* 新增 UTSJSONObject 支持 hasOwnProperty [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/utsjsonobject.html#hasOwnProperty)
* 修复 parseInt 解析超过整型数据范围返回值为 NaN 的Bug
* App-Android平台 修复 console 输出对象信息中包含 private 属性和方法的Bug
* App-Android平台 修复 number 数据类型在某些情况除法运行结果不正确的Bug
* App-iOS平台 修复 vue 页面中调用 API 参数不支持 null 的Bug
### App插件(含5+App和uni-app的App端)
* 更新 uni-AD SDK，对接双11预算，其中腾讯优量汇SDK Android为 4.542.1412 版，iOS为 4.14.45 版；穿山甲&GroMore SDK Android为 5.6.1.6 版，iOS为 5.7.0.4 版；快手广告SDK Android为 3.3.53.3 版，iOS为 3.3.53 版；快手内容联盟SDK Android为 3.3.53 版；Sigmob广告联盟SDK Android为 4.12.7 版，iOS为 4.10.0 版；百度百青藤广告SDK Android为 9.322 版，iOS为 5.322 版；华为广告SDK Android为 13.4.66.300 版
* Android平台 调整 默认支持CPU类型为arm64-v8a，解决在华为新设备（如Mate60、X5）应用启动慢的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-android-abifilters.html#default)
* Android平台 修复 上架 OPPO 应用市场可能提示`含数字天堂(dcloud)广告插件`的Bug [详情](https://ask.dcloud.net.cn/question/174958)
* Android平台 修复 uni-AD 红包广告可能不展示的Bug
### uniCloud插件
* 优化 阿里云 callFunction、url化方式调用云函数最大超时时间由60秒调整为120秒
* 新增 uni-app x项目 支持uniCloud调试

## 3.92.2023101106-alpha
### HBuilder
* 修复 Markdown 图片悬浮预览时闪烁的Bug
* 修复 .editorconfig 文件存在扩展的设置项时，误报格式错误的Bug
* 修复 语言服务 uvue文件 选项式API props 误报错的Bug
* 修复 语言服务 uni-app x 条件编译 提示重复和内容不对的Bug
* 修复 uni_modules插件 上传到插件市场时，当更新日志中出现${}特殊标记时，引发HBuilderX崩溃的Bug
* 修复 uni-app 新建页面 页面在pages.json插入时缩进以及换行符和当前编辑器设置不一致的Bug
* 修复 uni-app manifest.json 点击某些元素时偶发崩溃的Bug
### uni-app插件
* App平台 修复 云端打包 Storage 相关接口设置和获取内容异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/4556)
* App-iOS平台 修复 nvue 页面在 iOS17 设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/179220)
### uni-app x插件
* App-Android平台 修复 uni-app-x 项目 onLoad 生命周期调用 route API 交互异常的Bug
* App-Android平台 修复 uni-app-x 项目非 tabBar 首页调用 uni.switchTab 应用崩溃的Bug
### uts插件
* 修复 App-Android平台 vue 页面调用 API 传参对象中包含`Any`类型字段时可能出现异常的Bug
### App插件(含5+App和uni-app的App端)
* Android平台 更新 Google 统计 SDK 为 21.3.0 版；Google 推送 SDK 为 23.2.1 版
### uniCloud插件
* 修复 uni-app-x 项目 android 6.0 下调用 uniCloud 部分接口报错的Bug

## 3.91.2023092719-alpha
### HBuilder
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
### uni-app插件
* 新增 条件编译 提供 uniVersion 用于区分编译器版本。可用于插件适配不同版本的uni-app [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#uniVersion)
* 新增 条件编译 static目录支持app、web子目录 [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#static)
* App-Android平台 修复 uni.downloadFile 下载 wgt 文件可能没有文件后缀的Bug [详情](https://ask.dcloud.net.cn/question/176447)
* App-iOS平台 修复 应用语言设置为英文时，nvue map 组件仍然显示中文的Bug [详情](https://ask.dcloud.net.cn/question/178833)
### uts插件
* 调整 通过数字字面量定义变量未申明类型时默认推导为 number 类型 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#autotypefornumber)
* 调整 typeof 获取实例对象类型支持平台专有数字类型 Int、Float、Double等 [详情](https://uniapp.dcloud.net.cn/uts/operator.html#typeof)
* 调整 instanceof 不再支持判断基础类型 number、string、boolean [详情](https://uniapp.dcloud.net.cn/uts/operator.html#instanceof)
* 调整 JSON.parse 解析json字符串支持返回 Array、number、boolean、string 等数据类型 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/json.html#parse)
* 新增 JSON.parse 支持传入泛型解析为指定 type 类型 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#%E6%8A%8Ajson%E5%AF%B9%E8%B1%A1%E8%BD%AC%E4%B8%BAtype)
* 新增 UTSJSONObject 通过 getBoolean、getString、getNumber、getJSON 等方法访问属性，并支持传入 keyPath 格式参数 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#%E8%AE%BF%E9%97%AE-utsjsonobject-%E4%B8%AD%E7%9A%84%E5%B1%9E%E6%80%A7%E6%95%B0%E6%8D%AE)
* 新增 number 类型支持与平台专有数字类型相互转换方法 toInt、toFloat、toDouble、from 等 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/number.html)
* 新增 type 自定义类型支持 for...in 遍历 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#type)
* 新增 Regexp 正则表达式支持 flags 属性 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/regexp.html#flags)
* 新增 支持 encodeURI、decodeURI、encodeURIComponent、decodeURIComponent 等全局方法 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/global.html#encodeuri)
* 新增 支持使用数值字面量和字符串字面量用作类型注解 [详情](https://uniapp.dcloud.net.cn/uts/literal.html)
* 新增 uni.request 请求的 method 支持 OPTIONS [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/request.html)
* 新增 App-Android平台 Promise [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/promise.html)
* 新增 App-Android平台 支持 Array.fromNative 方法将原生 ByteArray/LongArray/ShortArray 类型转换为 Array
* 修复 App-Android平台 部分场景下位运算符异常的Bug
* 修复 App-iOS平台 class 实例对象调用带参数标签的方法编译报错的Bug
* 补齐 App-iOS平台 支持 parseInt、parseFloat、isNan、isFinite 等全局方法
* 补齐 App-iOS平台 string 类型支持 toString、valueOf 等方法
* 补齐 App-iOS平台 Array 类型支持 toString、sort 等方法
* 补齐 App-iOS平台 Date 类型支持 toString、 valueOf、toUTCString、toTimeString、toDateString、parse 等方法
* 修复 App-iOS平台 函数参数不支持 class 数组类型的Bug
* 修复 for 循环中包含复杂continue、break时，执行不正确的Bug
* 修复 class 中无法访问外部定义的与类内部属性、方法同名的变量的Bug
### App插件(含5+App和uni-app的App端)
* Android平台 更新 Facebook 登录 SDK 为 16.1.3 版，解决登录异常的问题 [详情](https://ask.dcloud.net.cn/question/175402)
* iOS平台 更新 uni-AD模块 穿山甲广告联盟SDK 为 5.6.0.5 版；百度百青藤广告联盟SDK 为 5.321 版；Pangle SDK 为 5.5.0.4 版；Google AdMob SDK 为 10.9.0 版
* iOS平台 修复 3.7.12版更新个验SDK引出的 一键登录弹窗模式下点击关闭不会触发 fail 回调的Bug [详情](https://ask.dcloud.net.cn/question/177253)
### uniCloud插件
* 新增 uni-app x 项目支持 [详情](https://uniapp.dcloud.net.cn/uni-app-x/unicloud/)

## 3.8.12.20230802-alpha
### HBuilder
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
### uni-app插件
* App-iOS平台 修复 uni.setTabBarItem 动态设置 gif 后再设置普通图片可能不生效的Bug
### uniCloud插件
* 调整 uni-ai 非uni-ai计费网关调用百度接口由内测接口调整为[文心千帆大模型接口](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/jlil56u11)
* 新增 uni-map-common 聚合多家地图供应商的云能力的公共模块 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-map-common.html)
* 新增 unicloud-map 云端一体组件，主要用于显示数据库里的自定义POI，渲染在地图上。 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-map.html)
* 新增 unicloud-map 地图管理端插件，提供了POI管理，可以在管理端可视化的标记POI。 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-map-admin.html)
* 新增 unicloud-city-select 城市选择组件，方便用户在应用中快速选择目标城市的组件。 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-city-select.html)
### App插件(含5+App和uni-app的App端)
* 【重要】Android平台 适配 支持 Android14 系统
* Android平台 更新 云端打包环境 compileSdkVersion 为 33
* iOS平台 更新 uni-AD模块 穿山甲广告联盟SDK 为 5.5.0.3 版；穿山甲GroMore SDK 为 5.3.6.0 版；百度百青藤广告联盟SDK 为 5.31 版；Sigmob广告联盟SDK 为 4.9.3 版
* iOS平台 修复 uni-AD模块 穿山甲GroMore激励视频 close 事件返回的 isEnded 属性返回值可能不正确的Bug

## 3.8.11.20230719-alpha
### HBuilder
* 修复 语言服务 vue/nvue文件标签事件内没有代码提示的Bug
* 优化 uni-app 运行到抖音小程序工具时，自动打开项目进入Lite模式
### App插件(含5+App和uni-app的App端)
* iOS平台 更新 uni-AD模块 腾讯优量汇广告联盟SDK 为 4.14.32 版

## 3.8.10.20230714-alpha
### HBuilder
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
### uni-app插件
* App-Android平台 修复 UniPush1.0 指定格式透传消息不会创建推送消息的Bug [详情](https://ask.dcloud.net.cn/question/173602)
* App-iOS平台 修复 tabBar 使用 iconfont 字体图标时，样式可能不正常的Bug [详情](https://ask.dcloud.net.cn/question/173375)
* 抖音小程序平台 新增 支持运行到指定页面
* uts插件 App-Android平台 调整 UTSAndroid.getSystemPermissionDenied 返回值类型为Array [详情](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html#getsystempermissiondenied)
* uts插件 App-iOS平台 新增 CocoaPods 依赖支持配置git地址 [详情](https://uniapp.dcloud.net.cn/plugin/uts-ios-cocoapods.html#usecocoapods)
* uts插件 App-iOS平台 修复 调用方法参数中有多个自定义类型时会导致应用崩溃的Bug
### uniCloud插件
* 新增 阿里云定时触发时云函数入参对齐腾讯云 [详情](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#trigger-param)
* 新增 云对象定时触发方法_timing增加入参 [详情](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#cloudobject)
* 新增 uni-ai支持通过开发者自己的key调用讯飞星火大模型 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#get-llm-manager)
* 新增 类似uni.request的http请求接口uniCloud.request [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-request)
* 新增 类似uni.connectSocket的websocket客户端接口uniCloud.connectSocket [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#websocket-client)
### App插件(含5+App和uni-app的App端)
* Android平台 修复 隐私政策提示框在部分设备横屏状态下按钮显示不全的Bug [详情](https://ask.dcloud.net.cn/question/173749)
* Android平台 修复 扫码界面拒绝权限提示文字默认语言不正确的Bug [详情](https://ask.dcloud.net.cn/question/174032)
* Android平台 修复 通过 scheme 可唤起应用打开外部链接的Bug [详情](https://ask.dcloud.net.cn/question/173349)
* Android平台 修复 双击返回键退出应用后接收不到个推通道的推送消息的Bug
* iOS平台 补齐 一键登录 icon 支持 width、height 属性设置 logo 图片的宽高 [文档](https://uniapp.dcloud.net.cn/univerify.html)
* iOS平台 更新 uni-AD模块 腾讯优量汇广告联盟SDK 为 4.14.31 版；快手广告联盟SDK 为3.3.46 版；穿山甲广告联盟SDK 为 5.4.0.2 版本；穿山甲GroMore SDK 为 5.3.5.0 版；百度百青藤广告联盟SDK 为 5.30 版；Sigmob广告联盟SDK 为 4.9.1 版
* iOS平台 修复 wgt热更新后整包覆盖安装引起应用启动白屏的Bug [详情](https://ask.dcloud.net.cn/question/163393)

## 3.8.7.20230628-alpha
### HBuilder
* 修复 某些情况下，多文件字符搜索，搜索过程中，HBuilderX出现闪退的Bug
### uni-app插件
* App平台 修复 3.8.5更新的uni-push2.0引出的 仅启用在线推送而不启用离线推送时，调用 `uni.getPushClientId` 会报`getPushClientId:fail init am error: no api impl found`的问题 [详情](https://ask.dcloud.net.cn/question/172659)
* App-iOS平台 修复 tabBar 图标宽高不一致时显示会变形的Bug [详情](https://ask.dcloud.net.cn/question/172418)
* uts插件 App-Android平台 Math.round 返回结果为浮点数的Bug
* uts插件 App-Android平台 console.log 修复部分类型打印异常的Bug
* uts插件 App-iOS平台 修复 Hello UTS 中腾讯定位插件没有网络时调用 getLocation 导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/172744)
### uniCloud插件
* 修复 jql语法 geoNear方法不传query参数时返回结果不正确的Bug [详情](https://ask.dcloud.net.cn/question/172404)
* 新增 uni-ai chatCompletion 接口流式响应支持 optimizedMessage 事件，优化 message 触发频率，减少客户端卡顿 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion-stream)
### App插件(含5+App和uni-app的App端)
* Android平台 优化 plus.runtime.install 安装apk功能剥离为独立模块，云端打包勾选 google play 渠道时不包含此模块，解决上架 google play 审核报 DCloud SDK 包含从未知来源下载或安装应用的问题 [详情](https://ask.dcloud.net.cn/question/172533)
* Android平台 更新 AndroidX依赖库为 1.1.0 版，解决上架 google play 报 androidx.fragment:fragment:1.0.0 SDK 版本已老的问题
* Android平台 修复 3.8.3引出的 同时勾选友盟统计模块和个推推送模块打包冲突报错的Bug [详情](https://ask.dcloud.net.cn/question/172844)
* iOS平台 更新 云端打包环境 XCode 为 14.3.1 版、iOS SDK 为 16.4 版
* iOS平台 修复 setTitleNViewButtonStyle 动态设置标题栏按钮样式可能导致无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/172191)

## 3.8.6.20230621-alpha
### HBuilder
* 修复 3.8.5引出的 文件查找引用功能失效的Bug
### uni-app插件
* 修复 3.8.5更新的uni-push2.0的socket合法域名错误的问题
* uts插件 App-iOS平台 修复 函数参数类型为 UTSJSONObject 时传入的参数值总是为空的Bug
### App插件(含5+App和uni-app的App端)
* iOS平台 更新 一键登录使用的个验基础库SDK为 3.0.6.0 版，解决上传 AppStore 可能报 ITMS-90683:Missing purpose string in info.plist 的Bug

## 3.8.5.20230616-alpha
### HBuilder
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
* 修复 内置浏览器 多次切换预览和关闭时，偶发崩溃的Bug
* 修复 多个运行控制台时，切换左侧视图（项目管理器等）会导致控制台顶部按钮错乱的Bug
* 新增 插件API `languages.registerInlineCompletionItemProvider` 支持行内代码提示 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/languages/registerInlineCompletionItemProvider)
* 新增 插件API `window.createStatusbarItem` 扩展底部状态栏 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/windows/createStatusBarItem)
* 优化 插件API `console.appendLine` 打印日志的性能
### uni-app插件
* App平台、Web平台 修复 vue 页面 textarea 组件高度渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/169380)
* App平台 优化 Vue2 项目 nvue 文件事件编译 [详情](https://ask.dcloud.net.cn/question/170516)
* App平台 修复 Vue3 项目部分情况下 VideoContext 方法失效的Bug [详情](https://ask.dcloud.net.cn/question/168476)
* App平台 修复 nvue 文件中文本节点无法使用 \n 换行的Bug [详情](https://github.com/dcloudio/uni-app/issues/4215)
* App平台 修复 指纹认证部分提示语未支持国际化的Bug [详情](https://ask.dcloud.net.cn/question/168473	)
* App-iOS平台 修复 uni.setTabBarItem 动态设置 gif 图片不生效的Bug [详情](https://ask.dcloud.net.cn/question/171342)
* App-iOS平台 修复 nvue rich-text 组件循环渲染时文字可能随机出现白色背景的Bug [详情](https://ask.dcloud.net.cn/question/171090)
* App-iOS平台 修复 nvue video 组件高度设置 rpx 单位时可能导致 controls 不显示的Bug [详情](https://ask.dcloud.net.cn/question/171037)
* App-iOS平台 修复 uni原生插件Hook系统事件 applicationMain:argv: 获取参数为空的Bug
* Web平台 优化 uni.showToast 文本换行样式 [详情](https://github.com/dcloudio/uni-app/pull/4373)
* Web平台 修复 部分情况下选择位置界面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/167071)
* Web平台 修复 高德地图地址名称丢失的Bug [详情](https://ask.dcloud.net.cn/question/171013)
* Web平台 修复 darkmode 配置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4317)
* 小程序平台 修复 嵌套列表部分情况下事件编译报错的Bug [详情](https://ask.dcloud.net.cn/question/171043)
* 小程序平台 修复 部分情况下 eventChannel 错乱的Bug
* 小程序平台 修复 自定义属性名称无法使用 name、value 的Bug [详情](https://github.com/dcloudio/uni-app/pull/4257)
* 微信小程序平台 修复 使用 requirePlugin 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/4301)
* 抖音小程序平台 新增 支持 consume-card、pay-button、rate-button、member-button 组件 [详情](https://ask.dcloud.net.cn/question/167927)
* 抖音小程序平台 新增 showToast 支持 mask 配置 [详情](https://ask.dcloud.net.cn/question/154332)
* Web平台、小程序平台、App平台在线推送 修复 uni-push2.0 修复 高频调用推送，导致客户端内存不足，从而引起客户端卡住的问题（小程序平台，需添加新的socket合法域名 wshzn.getui.net:5223 进白名单，[详情](https://uniapp.dcloud.net.cn/unipush-v2.html#useinmp)）
* uts插件 App-Android平台 调整 内置`XXPermissions`库为仓储引用，避免与其它插件产生冲突
* uts插件 App-iOS平台 新增 CocoaPods 依赖 [文档](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#config-json-2)
* uts插件 App-iOS平台 修复 uts页面组件调用 $emit 方法无响应的Bug
### uniCloud插件
* 【重要】新增 uni-ai 计费网关，可低门槛的采购ai能力 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai-buy.html)
* 新增 阿里云 云存储支持目录 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage.html#storage-dir)
* 优化 阿里云 云函数调用云函数超时时间由10秒调整为60秒
* 新增 本地调试支持使用push扩展库
* 修复 本地调试调用redis服务的multi方法时未正确返回结果的Bug [详情](https://ask.dcloud.net.cn/question/171188)
### App插件(含5+App和uni-app的App端)
* Android平台 新增 enableOAID 配置不使用云端打包机默认版本 OAID SDK，避免通过uts插件或uni原生插件调用自己的 OAID SDK 引起的冲突 [详情](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#enableoaid)
* Android平台 更新 uni-AD 今日头条穿山甲 SDK 为 5.3.4.1 版；穿山甲GroMore广告 SDK 为 5.3.4.1 版
* Android平台 修复 3.8.4引出的 软键盘弹出时输入框可能被遮挡的Bug [详情](https://ask.dcloud.net.cn/question/172135)
* iOS平台 调整 allowsInlineMediaPlayback 默认值为 ture，允许 H5 视频全屏播放 [文档](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#full-manifest)
* iOS平台 调整 mediaPlaybackRequiresUserAction 默认值为 false，允许 H5 音视频通过 API 控制自动播放 [文档](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#full-manifest)
* iOS平台 修复 视频播放控件 video 画面方向可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/171484)
### uni小程序SDK
* Android平台 修复 动态设置胶囊按钮全局项菜单可能不生效的Bug
* iOS平台 优化 push 方式打开小程序设置 autoControlNavigationBar 为 false 时不接管 navigationController 的 delegate，减少对宿主的影响

## 3.8.4.20230602-alpha
### HBuilder
* 修复 3.8.3引出的 当电脑连接外接显示器，激活多文件字符搜索功能后，切换到其它屏幕的Bug [详情](https://ask.dcloud.net.cn/question/170787)
* 修复 语言服务 某些情况下，Vue文件，无法提示class的Bug
* 修复 某些情况下，语言服务出现异常，提示`The TypeScript language service died unexpectedly 5 times in the last 5 Minutes.`的Bug
* 修复 某些情况下，语言服务Node进程，CPU占用100%的Bug
### uni-app插件
* 【重要】App-Android平台 修复 3.8.3引出的 在部分设备启动白屏，报`Uncaught SyntaxError: Invalid or unexpected token at __uniappview.html:2`错误的Bug 请所有使用3.8.3的开发者重新打包[详情](https://ask.dcloud.net.cn/question/170588)
* App平台 修复 Vue2 项目在 nvue 页面 style 中使用 border-radius 样式解析不准确的Bug [详情](https://ask.dcloud.net.cn/question/168877)
* 小程序平台 修复 Vue2 项目在模板中使用 JSON.stringify 等全局变量编译报错的Bug [详情](https://ask.dcloud.net.cn/question/170722)
### App插件(含5+App和uni-app的App端)
* Android平台 修复 3.8.3引出的 输入框焦点切换可能引起页面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/170689)

## 3.8.3.20230523-alpha
### HBuilder
* 优化 HBuilderX 左侧视图 右上角下拉菜单 支持切换项目管理器、多文件字符搜索、调试等视图
* 优化 HBuilderX 多文件字符搜索视图 优化顶部状态栏停止功能和UI
* 修复 3.8.0引出的 uni-app 当项目包含uts授权版插件，提交服务器制作自定义调试基座失败的Bug
* 调整 uni-app manifest.json和打包窗口 删除互动游戏(变现猫)入口，此广告业务将于5月31日正式下线
### uni-app插件
* App平台 修复 nvue 页面 switch 组件配置 type="checkbox" 后点击报错的Bug [详情](https://ask.dcloud.net.cn/question/168894)
* uni-ad 管理后台页面调整，调整App的基础广告、增强广告的分类概念 [详见](https://uniapp.dcloud.net.cn/uni-ad/release.html)
* App平台、Web平台 优化 navigationBarBackgroundColor、navigationBarTextStyle 默认值 [详情](https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle)
### uniCloud插件
* 新增 uni-ai 微软azure openai chatCompletion接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#get-llm-manager)
* 修复 jql语法 部分请求执行缓慢的Bug [详情](https://ask.dcloud.net.cn/question/170035)
### App插件(含5+App和uni-app的App端)
* 更新 uni-AD SDK，对接618预算，其中优量汇SDK Android为 4.530.1400 版；iOS为 4.14.30 版；穿山甲SDK iOS为 5.4.0.0 版；穿山甲GroMore广告SDK iOS为 5.1.7.0 版；快手广告SDK iOS为 3.3.44 版；Sigmob广告联盟SDK Android为 4.12.1 版，iOS为 4.9.0 版；百度百青藤广告SDK Android为 9.29 版，iOS为 5.14 版
* Android平台 更新 友盟统计SDK为 9.6.1 版，适配华为应用市场审核政策调整
* iOS平台 更新 UniPush 使用的个推SDK为 2.7.4.2 版，解决默认获取定位权限的Bug
* iOS平台 更新 一键登录使用的个验SDK为 3.0.4.1 版

## 3.8.2.20230511-alpha
### HBuilder
* 修复 多文件字符搜索 某些情况下，HBuilderX出现崩溃的Bug
* 修复 语言服务 3.8.0引出的 nvue文件代码提示，语言服务出现崩溃的Bug
* 修复 语言服务 Vue文件 template标签，无法提示lang的Bug
* 修复 语言服务 Vue文件 template标签，当lang属性为空时, html标签无法提示的Bug
* 修复 语言服务 Vue文件 SCSS @语法，某些情况下，代码助手回车后@符号替换位置错误的Bug
* 修复 语言服务 Vue文件 SCSS，某些情况下，!default和!global没有提示的Bug
### uni-app插件
* uts插件 App-Android平台 新增 UTSAndroid.requestSystemPermission 申请系统权限 [详情](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html#requestsystempermission)
* uts插件 App-Android平台 升级 kotlin-stdlib 为 1.8.10 版
* uts插件 App-Android平台 修复 Math.random() 返回数据精度不足的Bug
* uts插件 App-Android平台 修复 UTSAndroid.offAppActivityRequestPermissionsResult 传入参数不生效的Bug
### uniCloud插件
* 新增 uni-ai 新增文字生成图片接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#ai-media)
### App插件(含5+App和uni-app的App端)
* Android平台 更新 UniPush 使用的个推核心组件SDK为 3.2.4.0 版；个推SDK为 3.2.17.0 版；适配华为应用市场审核政策调整
* Android平台 修复 部分场景下真机运行同步文件失败的Bug [详情](https://ask.dcloud.net.cn/question/169374)
* Android平台 修复 扫码界面拒绝权限提示文字不支持国际化的Bug [详情](https://ask.dcloud.net.cn/question/169217)
### uni小程序SDK
* Android平台 修复 releaseWgtToRunPathFromPath 部分场景下可能阻塞的Bug

## 3.8.1.20230428-alpha
### uni-app插件
* App-Android平台 修复 nvue 页面 map 组件在特定场景未自动回收销毁可能导致黑屏的Bug [详情](https://ask.dcloud.net.cn/question/168133)
* uts插件 App-iOS平台 修复 console.log 输出 json 对象可能不正确的Bug
### uniCloud插件
* 修复 vue3项目 发布到web端后 uniCloud.SSEChannel的open方法报错的Bug
### App插件(含5+App和uni-app的App端)
* Android平台 更新 uni-AD 快手广告SDK为 3.3.44 版；快手内容联盟SDK为 3.3.42 版

## 3.8.0.20230425-alpha
### HBuilder
* 优化 HBuilder Alpha版的应用图标在右下角补充了α角标
* 新增 语言服务 Html中引入Vue.js 支持Vue代码提示
* 新增 查找引用 文件被哪些代码引用 (对文件点右键菜单【文件查找引用】)
* 新增 查找引用 Html和Vue中 ID和Class的查找引用
* 新增 查找引用 uni-app项目中 组件的查找引用
* 修复 语言服务 代码助手排序规则，修复uni-app项目下敲unic第一项不是uniCloud的Bug
* 修复 语言服务 uni-app /开头的路径提示，在中间输入补全项不正确的Bug
* 修复 语言服务 uts插件 Android 系统API部分类型继承关系出错导致语法校验报错的Bug
* 修复 格式化 无法对1M以上的文件进行格式化的Bug
* 修复 格式化 当js文件第一行存在缩进时，格式化会导致缩进整体按第一行缩进的Bug
* 修复 切换主题 某些情况下闪退的Bug
* 修复 某些情况下，开启项目管理器与编辑器总是关联时，打开子项目或者父项目下的文件会导致项目管理器滚动错误的Bug
* 优化 Alt+Tab切换标签卡，列表项图标和项目管理器图标保持一致
* 修复 uni-app 项目运行，下载编译器插件，某些情况下，控制台不提示重新运行的的Bug
### uni-app插件
* App-iOS平台 修复 uni.scanCode 扫码后跳转页面可能引起应用卡死的Bug [详情](https://ask.dcloud.net.cn/question/160090)
* 【重要】新增 uts插件内可支持部分 uni 的 api，如`uni.showModel` [详情](https://uniapp.dcloud.net.cn/plugin/uts-uni-api.html)
* uts插件 App-Android平台 修复 函数参数不支持 boolean 类型的Bug
### uniCloud
* 新增 基于uni-push构建sse通道，在云函数 return 前也可以给客户端发消息 [详情](https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html)
* 新增 uni-ai 聊天接口支持steam流式响应 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion-stream)
* 新增 uni-ai-chat云端一体页面模板，开源的ai聊天示例。比uni-im更简单 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai-chat.html)
* 新增 HBuilder新建opendb表时，如该表含有schema扩展js，会同时自动创建schema扩展js
### App插件(含5+App和uni-app的App端)
* Android平台 修复 安全检测可能报`存在数据库注入漏洞`的问题 [详情](https://ask.dcloud.net.cn/question/152576)
* iOS平台 更新 uni-AD 今日头条穿山甲 SDK 为 5.1.6.0 版；穿山甲GroMore广告 SDK 为 5.1.6.0 版

## 3.7.13.20230411-alpha
### HBuilder
* 修复 3.7.13引出的 多文件字符搜索 某些情况下，搜索过程中HBuilderX出现崩溃的Bug
* 修复 语言服务 函数重载提示偶发崩溃的Bug
* 修复 uts插件 语言服务 iOS 部分类型缺失默认构造函数导致语法校验报错的Bug
* 修复 uts插件 语言服务 iOS String类型方法不全导致语法校验报错的Bug
* 新增 MacOSX App项目 支持选择自定义基座运行到iOS模拟器 [详情](https://uniapp.dcloud.net.cn/tutorial/run/run-custom-base-ios-simulator.html)
* 新增 uni-app 支持多个项目同时运行到微信开发者工具
* 新增 uni-app app云打包和manifest配置支持 uniMP激励视频广告 [详情](https://uniapp.dcloud.net.cn/uni-ad.html#unimp)
* 新增 uniCloud 阿里云 前端网页托管自定义域名，上传文件后自动刷新CDN
* 新增 uniCloud uni-ai扩展库 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html)
### uni-app插件
* 新增 uni.addInterceptor 回调增加第二个参数 params [详情](https://ask.dcloud.net.cn/question/129195)
* App平台 修复 Vue3 项目 picker-view 组件使用 v-if 切换报错的Bug [详情](https://ask.dcloud.net.cn/question/166884)
* App-Vue平台 修复 Vue3 项目 text 组件嵌套 text 组件显示异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/4215)
* Web平台 优化 使用 IP 定位时取消坐标系转换 [详情](https://github.com/dcloudio/uni-app/issues/4248)
* Web平台 修复 Vue3 项目 input 组件使用 v-model 时输入过快失焦的Bug [详情](https://ask.dcloud.net.cn/question/166821)
* Web平台 修复 Vue3 项目 longpress 事件对象缺少 touches 字段的Bug [详情](https://ask.dcloud.net.cn/question/166956)
* 小程序平台 修复 Vue2 项目使用高版本 CopyWebpackPlugin 时 static 目录条件编译无效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4181)
### uniCloud
* 【重要】新增 uni-ai 聚合多家ai引擎，帮助开发者快速将AI能力应用到自己的应用中 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html)
* 新增 JQL语法 触发器内副表读取事件增加 primaryCollection 参数，值为本次联表查询的主表表名
* 调整 JQL语法 schema 内配置的动态 enum 校验数据时移除仅枚举500条的限制
* 【重要】新增 uni-cms，全端的、云端一体的开源CMS内容管理系统，内置ai生成内容和广告解锁变现 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-cms.html)
### App插件(含5+App和uni-app的App端)
* 【重要】新增 uni-AD 支持 uniMP激励视频广告，提升CPM、提升填充率 [详情](https://uniapp.dcloud.net.cn/uni-ad.html#unimp)
* 新增 一键登录支持 isCenterHint 参数设置未勾选服务条款时点击登录按钮的提示信息是否垂直居中显示 [详情](https://uniapp.dcloud.net.cn/univerify.html#%E5%AE%A2%E6%88%B7%E7%AB%AF-%E8%AF%B7%E6%B1%82%E7%99%BB%E5%BD%95%E6%8E%88%E6%9D%83)
* Android平台 修复 蓝牙设备信息 BluetoothDeviceInfo 的 advertisData 字段可能会丢失数据的Bug [详情](https://ask.dcloud.net.cn/question/165119)
* Android平台 修复 App切换语言后重启可能出现闪屏的Bug [详情](https://ask.dcloud.net.cn/question/166730)
* iOS平台 更新 uni-AD Sigmob广告联盟SDK为 4.7.1 版；百度百青藤广告SDK为 5.121 版
* iOS平台 修复 plus.runtime.restart 后苹果应用内支付 IAP 无响应的Bug

## 3.7.12.20230331-alpha
### HBuilder
* 【重要】调整 Windows 64位系统，HBuilderX内置Node调整为64位Node.exe
* 优化 多文件字符搜索 从工具栏改为在HBuilderX左侧视图实现 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/node-multi-file-search)
* 优化 语言服务 javascript/typescript 函数重载提示
* 修复 语言服务 设置px转upx/rpx提示比例，代码助手提示自定义比例没有生效的Bug
* 修复 语言服务 因Vue域名变更，导致代码助手中帮助文档URL跳转后显示404的Bug
* 修复 语言服务 js文件，某些情况下，require无法提示其它js文件路径的Bug
* 修复 语言服务 uni-app项目，某些情况下，项目不存在uni_module目录，语言服务报错的Bug
* 修复 Node调试 某些情况下，attach失败的Bug
* 修复 js-beautify格式化插件，缩进设置成`tab`时，ts文件格式化导致注释内的缩进不对的Bug
* 修复 3.7.6引出的 uniCloud schema.json文件，右键菜单点击下载DB Schema，HBuilderX闪退的Bug
* 修复 3.7.6引出的 MacOSX 某些低版本的操作系统，无检测到iOS手机的Bug
* 调整 uts项目，运行到iOS模拟器，控制台屏蔽uts调试入口，暂不支持对iOS模拟器进行uts调试
* 调整 uts项目，uts Android开发扩展，增加gradle版本限制，仅支持7.6.1及以下版本
### uni-app插件
* App平台、Web平台 优化 socket 连接 onClose 事件信息增加 code、reason 属性
* App平台 修复 Vue3 项目使用纯 nvue 开发时热重载跳转到首页的Bug [详情](https://ask.dcloud.net.cn/question/164673)
* App平台 修复 国际化配置新增语言兼容性不佳的Bug [详情](https://ask.dcloud.net.cn/question/165884)
* App平台 修复 Vue3 项目 nvue 页面配置 flex-direction 默认值无效的Bug [详情](https://ask.dcloud.net.cn/question/165497)
* App-Android平台 修复 uni.onSocketClose 监听 WebSocket 关闭时 code 值为 1001 可能不触发回调的Bug
* App-Android平台 修复 实人认证 progressBarColor 设置为非法颜色值导致应用重启的Bug
* App-Android平台 修复 nvue 页面中存在特殊字符可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/166447)
* App-Android平台 修复 nvue 页面在App悬浮窗口模式下可能渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/156014)
* App-Android平台 修复 nvue text 组件中特殊字符不显示Bug [详情](https://ask.dcloud.net.cn/question/166014)
* App-Android平台 修复 反复进入退出App偶发 js 进程崩溃的Bug
* Web平台 修复 浏览器启用隐私模式报错的Bug [详情](https://ask.dcloud.net.cn/question/164775)
* Web平台 修复 Vue3 项目 script setup 中 onError 无效的Bug [详情](https://ask.dcloud.net.cn/question/164798)
* Web平台 修复 高德导航目的地名称显示异常的Bug [详情](https://ask.dcloud.net.cn/question/165669)
* Web平台 修复 高德无定位权限未触发 fail 回调的Bug [详情](https://ask.dcloud.net.cn/question/166298)
* Web平台 修复 高德地图 callout 排版异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/4230)
* 小程序平台 优化 Vue2 项目增加 slotMultipleInstance 配置，支持作用域插槽渲染多个实例 [详情](https://github.com/dcloudio/uni-app/issues/3503)
* 小程序平台 优化 Vue2 项目 v-for 遍历对象时支持 index 参数 [详情](https://ask.dcloud.net.cn/question/163685)
* 小程序平台 修复 Vue2 项目事件表达式包含多个函数语句时编译后无效的Bug [详情](https://ask.dcloud.net.cn/question/147342)
* 小程序平台 修复 Vue3 项目页面样式文件编译后缺失的Bug [详情](https://ask.dcloud.net.cn/question/163867)
* 百度小程序平台、支付宝小程序平台 新增 支持运行到指定页面
* 微信小程序平台 新增 支持企业小程序 onNFCReadMessage 生命周期 [详情](https://ask.dcloud.net.cn/question/166024)
* 微信小程序平台 修复 Vue3 项目混合分包部分情况下接口调用报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/4175)
* 支付宝小程序平台 优化 组件 styleIsolation 默认配置为 apply-shared
* 支付宝小程序平台 修复 Vue3 项目 page-meta 组件 foot-font-size 属性无效的Bug
* 字节跳动小程序平台 修复 aweme-data 组件渲染不正常的Bug [详情](https://ask.dcloud.net.cn/question/165295)
* uni统计2 新增 uniStatPageLog 参数，是否开启页面数据采集，默认为开启
* uts插件 App-Android平台 修复 console.log 无法输出对象中包含的 any 类型字段的Bug
### uniCloud插件
* 新增 jql支持in语法，查询某字段和另一个表指定字段匹配的记录 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#enhanced-in)
### App插件(含5+App和uni-app的App端)
* 更新 uni-AD 腾讯优量汇SDK Android为 4.514.1384 版；iOS为 4.14.12 版；快手广告SDK Android为 3.3.40 版，iOS为 3.3.40 版；Sigmob广告联盟SDK Android为 4.10.1 版；百度百青藤广告SDK Android为 9.271 版
* Android平台 修复 某些情况下可能出现软键盘弹出后立即收起的Bug [详情](https://ask.dcloud.net.cn/question/161957)
* Android平台 修复 plus.navigator.updateSplashscreen 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/164023)
* iOS平台 新增 配置 privacyRegisterMode 应用启动时是否获取 idfv，解决应用合规检测可能报同意隐私政策前读取 idfv 的问题 [详情](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#privacyRegisterMode)
* iOS平台 更新 一键登录使用的个验SDK为 3.0.4.0 版，解决某些情况下会获取本地网络权限可能导致苹果审核被拒的Bug [详情](https://ask.dcloud.net.cn/question/166587)
* iOS平台 修复 进入包含视频播放控件 video 页面会打断音乐播放的Bug [详情](https://ask.dcloud.net.cn/question/165329)
* iOS平台 修复 导航栏 titleNView 设置 splitLine 样式可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/164906)
* iOS平台 修复 从微信中唤起App时 plus.runtime.arguments 获取的参数可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/166211)

## 3.7.7.20230316-alpha
### HBuilder
* 修复 3.7.6引出的 ts文件 选中特定区域代码进行格式化，格式化操作失效的Bug
* 修复 启用.editconfig后，Vue文件如果最后一行未换行，保存时会导致文件内容错误的Bug
* 修复 语言服务 某些情况下ts语法校验不生效的Bug
### uni-app插件
* 微信小程序 修复 share-element 等组件部分属性无效的Bug [详情](https://ask.dcloud.net.cn/question/163926)
* 支付宝小程序 修复 Vue3 项目 page-meta 组件 page-style 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/163563)
* 字节跳动小程序 修复 uni.chooseImage 不支持 sizeType 配置的Bug [详情](https://ask.dcloud.net.cn/question/163986)
* App-Android平台 修复 nvue 页面 map 组件使用高德地图 marker 被点击时 label 可能被遮挡的Bug [详情](https://ask.dcloud.net.cn/question/156062)
* App-Android平台 修复 nvue 页面 map 组件使用谷歌地图 marker 的 label 设置锚点时位置会出现偏差的Bug
* App-iOS平台 修复 nvue 页面组件设置 border 样式偶现崩溃的Bug [详情](https://ask.dcloud.net.cn/question/164236)
* App-iOS平台 修复 nvue 页面 loading 组件事件触发异常的Bug [详情](https://ask.dcloud.net.cn/question/163143)
### uniCloud插件
* 新增 uni-cloud-s2s公共模块 用于解决uniCloud服务空间与传统服务器通讯时互相信任的问题 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-s2s.html)
* 优化 安全网络 微信小程序端支持非uni-id的应用 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#mp-weixin-without-uni-id-pages)
* 升级 阿里云 客户端连接云函数最大超时时间由20秒调整为40秒
* 升级 阿里云 云函数URL化的默认域名访问QPS限制由100调整为1000
* 升级 uniCloud控制台 阿里云 前端网页托管 cdn刷新次数限制由每小时3次调整为每小时10次
* 修复 uniCloud控制台 阿里云 创建数据表时达到集合数量上限后删除集合不能实时刷新数量限制的Bug
* 修复 阿里云 部分事务操作报错不清晰的Bug
* 修复 本地调试插件 部分情况下修改本地js文件不能实时生效的Bug
* 修复 本地调试插件 部分情况下修改云函数依赖 package.json 文件被改为错误的内容的Bug [详情](https://ask.dcloud.net.cn/question/165273)
* 调整 本地调试插件 调用本地云函数时由每个项目固定4个云函数实例调整为最小2个实例最大8个实例
* 调整 本地调试插件 调用本地云函数时当所有实例均被占用时不再等待实例空闲，直接拒绝本次调用请求
### App插件(含5+App和uni-app的App端)
* Android平台 修复 上架华为应用市场审核误报集成了`com.netease(网易;网易IM;网易云信)`SDK的bug [详情](https://ask.dcloud.net.cn/question/163991)
* Android平台 修复 plus.io.FileReader 的 readAsDataURL 返回 base64 字符中包含换行符的Bug [详情](https://ask.dcloud.net.cn/question/164955)
* iOS平台 修复 视频播放控件 video 设置 controls 为 false 时全屏状态没有隐藏标题栏的Bug [详情](https://ask.dcloud.net.cn/question/160712)

## 3.7.6.20230227-alpha
### HBuilder
* 新增 内置格式化插件 支持使用项目下.jsbeautifyrc配置文件 [详情](https://hx.dcloud.net.cn/Tutorial/extension/js-beautify)
* 修复 内置格式化插件 Vue文件ts代码不支持格式化的Bug
* 修复 语言服务 Vue文件 `this.xxx = ...`, xxx无法转到定义的Bug
* 修复 语言服务 uni-app cli ts项目，使用npm安装模块后，打开项目下vue文件导致语言服务崩溃的Bug
* 优化 设置 语言服务配置 启用代码助手，修改配置项后，无需重启HBuilderX即可生效
* 修复 启用.editorconfig支持 当配置`insert_final_newline`时，偶发保存时误触代码助手的Bug
* 修复 MacOSX 运行到iOS App基座，设备选择窗口，某些情况下，iOS设备重复显示的Bug
* 【重要】调整 App真机运行 标准基座不再支持Android4.4（因内置的实人认证sdk不支持）。如不使用实人认证，自定义基座或云打包仍然支持Android4.4
* 新增 uni-app uts插件 运行到iOS支持debug调试 (需MacOSX) [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-ios.html)
* 修复 3.7.1引出的 uni-app Vue3，运行到iOS模拟器，修改文件保存后，iOS模拟器不会自动刷新的Bug
### uni-app插件
* 【重要】App平台 新增 uni实人认证，uni.startFacialRecognitionVerify，姓名身份证和人脸活体比对，金融级安全保障 [详情](https://uniapp.dcloud.net.cn/uniCloud/frv/intro)
* Web、App平台 修复 NodesRef 无法获取 properties 的Bug [详情](https://ask.dcloud.net.cn/question/163535)
* Web平台 修复 高德地图缩放时会触发 markertap 事件的Bug [详情](https://ask.dcloud.net.cn/question/162763)
* App平台 优化 video 组件支持 isLive 属性
* App平台 修复 uni.uploadFile 接口 timeout 配置无效的Bug [详情](https://ask.dcloud.net.cn/question/163747)
* App平台 修复 Vue2 项目使用组合式 API 时 onPageScroll、onReachBottom 无效的Bug [详情](https://ask.dcloud.net.cn/question/162503)
* App-Android平台 修复 使用安全网络在部分设备可能引起崩溃的Bug
* 小程序平台 修复 Vue2 项目部分情况下 v-for 嵌套 v-model 编译后无效的Bug
* 京东小程序平台 新增 支持编译 Vue3 项目 [详情](https://github.com/dcloudio/uni-app/pull/4023)
* 微信小程序平台 新增 支持 Skyline gesture [详情](https://ask.dcloud.net.cn/question/162700)
### uniCloud插件
* 新增 uni实人认证，云端一体，金融级安全保障，包括云函数扩展库、web控制台 [详情](https://uniapp.dcloud.net.cn/uniCloud/frv/intro)
* 【重要】uni-id-pages 新增实名认证功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#frv)
* 【重要】新增 uni-frv-external 云端一体模板，用于非uniCloud业务使用实名认证功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/frv/dev.html#uni-frv-external)
* 调整 客户端sdk开发调试时连本地网络的时机由应用启动时连接调整为访问本地云函数时才会连接
* 修复 客户端sdk uniCloud.init、uniCloud.database 方法在关联正式版阿里云服务空间时仍默认使用公测版 endpoint 的Bug
### App插件(含5+App和uni-app的App端)
* Android平台 修复 暗黑模式下 tabbar 页面切换可能出现异常的Bug [详情](https://ask.dcloud.net.cn/question/163416)
* Android平台 修复 一键登录 按钮阴影可能显示异常的Bug [详情](https://ask.dcloud.net.cn/question/163054)
* Android平台 修复 3.7.1版引出的 在小米 Android13 设备图片选择功能异常的Bug [详情](https://ask.dcloud.net.cn/question/163903)

## 3.7.2.20230217-alpha
### HBuilder
* 修复 manifest.json界面 某些情况下，勾选复选框，HBuilderX出现闪退的Bug
* 修复 uni-app uts项目 运行到手机，某些情况下，重新运行项目后，控制台调试按钮消失的Bug
### uni-app插件
* App-Android平台 修复 uni.getSystemInfo 在部分设备获取 deviedId 值可能相同的Bug [详情](https://ask.dcloud.net.cn/question/163174)
* uts插件 App-Android平台 修复  math.sign 参数为 0 时返回结果异常的Bug
* uts插件 App-iOS平台 新增 支持调用 .a 静态库 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#ios-libs)
### uni小程序SDK
* Android平台 新增 适配支持暗黑模式
* Android平台 修复 3.7.0版引出的 特定场景启动小程序可能失败的Bug

## 3.7.1.20230210-alpha
### HBuilder
* 新增 代码块包围 在选区外包裹if等代码块 (菜单编辑->包围->代码块包围，快捷键win：`Ctrl+Alt+T`、mac：`Command+Alt+T`) [详情](https://hx.dcloud.net.cn/Tutorial/Language/Snippets?id=surround)
* 新增 项目管理器 字体大小调节 (菜单设置->常用配置) [详情](https://hx.dcloud.net.cn/Tutorial/setting?id=project-explorer-font-size)
* 修复 语言服务 Vue3-ts项目 image src属性报错的Bug [详情](https://ask.dcloud.net.cn/question/162064)
* 修复 语言服务 uni-app main.js中通过Vue.prototype.xxx定义的Vue变量或方法，在vue文件中，this.无法提示的Bug [详情](https://ask.dcloud.net.cn/question/147190)
* 修复 多光标在同一行时，复制或剪切，会复制多行内容的Bug
* 修复 转到定义耗时较长时，可能无法转到定义的Bug
* 修复 设置界面和manifest.json界面，点击复选框控件上的文字右边空白区域也会导致选中/取消的Bug
* 修复 uni-app 运行到Chrome 每次运行打开的都是新的Chrome实例的Bug
* 修复 真机运行 3.7.0引出的 5+App和Wap2App项目 某些情况下，同步文件失败的Bug
### uni-app插件
* 修复 Vue3 项目 uni.scss 中变量条件编译无效的Bug [详情](https://ask.dcloud.net.cn/question/162271)
* App平台 修复 Vue3 项目 movable-area 组件改变高度后可移动区域的高度不会更新的Bug [详情](https://ask.dcloud.net.cn/question/159723)
* App平台 修复 Vue3 项目 preloadPage 生命周期触发异常的Bug [详情](https://ask.dcloud.net.cn/question/160416)
* App-Android平台 修复 3.6.16版升级fastjson引出的 uni.sendSocketMessage 无法发送 ArrayBuffer 数据的Bug [详情](https://ask.dcloud.net.cn/question/161872)
* App-Android平台 修复 nvue 页面 cell 组件高度超过 list 自身高度会频繁触发 loadmore 事件的Bug [详情](https://ask.dcloud.net.cn/question/161972)
* App-Android平台 修复 nvue 页面 input 组件 placeholder 属性改变后 placeholder-style、placeholder-class 属性失效的Bug [详情](https://ask.dcloud.net.cn/question/161678)
* App-Android平台 修复 nvue 页面 map 组件的 marker 设置 anchor 时气泡显示异常的Bug [详情](https://ask.dcloud.net.cn/question/161180)
* App-Android平台 修复 nvue 页面 map 组件更新 marker 时 cover-view 不显示的Bug [详情](https://ask.dcloud.net.cn/question/161998)
* Web平台 修复 标题栏按钮文字在国际化后显示异常的Bug [详情](https://ask.dcloud.net.cn/question/162369)
* Web平台 修复 3.7.0版引出的 Vue2 项目 picker 组件样式错乱的Bug [详情](https://ask.dcloud.net.cn/question/162504)
* Web平台 修复 Vue3 项目 picker 打包后卡死的Bug [详情](https://ask.dcloud.net.cn/question/162091)
* Web平台 修复 Vue2 项目 内置浏览器高德地图 uni.getLocation 报错的Bug [详情](https://ask.dcloud.net.cn/question/156303)
* 小程序平台 修复 Vue3 项目 页面作为组件引用，导航栏标题配置无效的Bug [详情](https://ask.dcloud.net.cn/question/162745)
* 微信小程序平台 修复 3.7.0 版引出的 Vue2 项目部分情况下列表编译报错的Bug
* 快手小程序平台 修复 Vue3 项目 button getPhoneNumber 触发异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/4113)
* uts插件 App平台 新增 Math 相关函数支持
* uts插件 App-Android平台 修复 Array.sort函数不生效的Bug
* uts插件 App-iOS平台 修复 使用多层嵌套复杂对象时格式化不正确的Bug
* uts插件 App-iOS平台 修复 调用方法时参数大于实际数量时功能可能异常的Bug
* uts插件 App-iOS平台 修复 组件热刷新后属性初始值不生效的Bug
### uniCloud插件
* 新增 JQL触发器 支持联表查询时副表的读取触发器，beforeReadAsSecondaryCollection 和 afterReadAsSecondaryCollection [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-timing)
* 调整 JQL触发器 参数内的 subCollection 改为 secondaryCollection。老参数仍可访问但会给出警告 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-param)
* 修复 JQL语法字符串格式查询语句内使用数组且其中包含负数时报错的Bug [详情](https://ask.dcloud.net.cn/question/161852)
* 修复 云对象未返回值时客户端报错的Bug [详情](https://ask.dcloud.net.cn/question/161852)
* 修复 阿里云正式版删除文件出错未返回错误信息的Bug
* 本地调试插件 修复 云函数内使用 console.warn 打印日志输出到控制台颜色不正确的Bug
### App插件(含5+App和uni-app的App端)
* Android平台 更新 Paypal SDK 为 0.8.8 版，修复无法正常支付的Bug [详情](https://ask.dcloud.net.cn/question/154976)
* Android平台 修复 3.6.16版引出的 一键登录 全屏模式下配置其他登录按钮可能引起显示异常的Bug
* Android平台 修复 plus.downloader.clear 无法清除持久化存储的下载任务的Bug [详情](https://ask.dcloud.net.cn/question/162099)
* Android平台 修复 使用 UniPush 上架应用市场审核可能报`频繁自启动或关联启动第三方App`的Bug [详情](https://ask.dcloud.net.cn/question/162680)
* Android平台 修复 真机运行时应用沙盒目录 _doc 中的文件会被清除的Bug
* iOS平台 修复 音频播放 AudioPlayer seekTo 跳转指定位置不支持毫秒的Bug

## 3.7.0.20230118-alpha
### HBuilder
* 修复 某些情况下，因编辑器主题配置异常，导致HBuilderX无法启动的Bug
* 修复 语言服务 Vue文件，当只有script和style节点，没有template节点时，文档结构图显示空白的Bug
* 修复 Markdown code区域无法高亮显示空白字符的Bug
* 修复 Markdown 从WPS复制表格数据粘贴为Markdown表格语法转换错误的Bug
* 修复 查找索引符号 按下esc取消后，编辑器不会自动滚动到原来的光标所在位置的Bug
* 修复 uniCloud 云函数 当云函数目录下存在中文文件时，上传并运行操作失败的Bug
* 新增 App真机运行 MacOSX 运行项目到iOS真机，自动启动App （需MacOSX安装跟iOS手机系统相匹配的Xcode）[详情](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#ios-app-automatically-open)
* 新增 App真机运行 Windows iOS标准基座 支持使用Apple证书签名，签名后可运行标准基座到iOS真机设备 [详情](https://uniapp.dcloud.net.cn/tutorial/run/ios-apple-certificate-signature.html)
* 新增 App真机运行 Windows 设备选择窗口 基座选择列表，自定义基座和标准基座支持使用&快捷键进行切换
* 新增 uni-app 微信小程序发行，自动上传到微信平台，支持配置微信ci机器人编号 [详情](https://uniapp.dcloud.net.cn/tutorial/build/publish-mp-weixin-cli.html)
* 新增 uni-app uts插件 运行到Android支持debug调试 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug.html)
* 优化 uni-app uts插件 iOS编译，提升编译速度
### uni-app插件
* 【重要】新增 uts 组件。可使用uts语言开发原生扩展组件 [详情](https://uniapp.dcloud.net.cn/plugin/uts-component.html)
* 新增 uni-vue-devtools 插件，方便查看、修改 data 及审查自定义组件 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-vue-devtools.html)
* Web平台、App平台 新增 page-meta 组件支持 scroll-top 属性
* Web平台 修复 3.6.16版引出的 Vue3 项目 scroll-view 组件插槽部分情况下渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/149557)
* Web平台 修复 video 组件 show-progress 属性不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3908)
* Web平台 修复 input 组件 type=digit 时清空输入框后 placeholder 不显示的Bug [详情](https://ask.dcloud.net.cn/question/160726)
* Web平台 修复 Vue3 项目 onNavigationBarSearchInputConfirmed 无效的Bug [详情](https://ask.dcloud.net.cn/question/154740)
* Web平台 修复 Vue3 项目切换 tabbar 页面不触发 onTabItemTap 的Bug
* App平台 新增 animation-view 组件 即 lottie [详情](https://uniapp.dcloud.net.cn/component/animation-view.html)
* App平台 修复 Vue3 项目中原生导航栏 type 为 transparent 时，自定义 buttons 在导航栏上滑至顶端时颜色不改变的Bug [详情](https://ask.dcloud.net.cn/question/154074)
* 小程序平台 新增 pages.json 支持配置 entryPagePath 属性 [详情](https://ask.dcloud.net.cn/question/126216)
* 微信小程序平台 修复 3.6.16版引出的企业版微信运行报错的Bug
* 微信小程序平台 修复 3.6.16版引出的 Vue2 项目部分情况下作用域插槽中访问 length 属性报错的Bug
* 微信小程序平台 修复 Vue2 项目中使用 uni.env 时返回值不正确的Bug [详情](https://ask.dcloud.net.cn/question/159865)
* 支付宝小程序平台 修复 钉钉小程序使用 uni.saveImageToPhotosAlbum 报错的Bug [详情](https://ask.dcloud.net.cn/question/159183)
* 支付宝小程序平台 修复 uni.getSystemInfo 返回的 platform 属性在模拟器中不正确的Bug
* QQ小程序平台 修复 Vue3 项目 video 组件 ended 事件在真机不触发的Bug [详情](https://ask.dcloud.net.cn/question/155602)
### uniCloud插件
* 新增 schema扩展js支持引入公共模块及扩展库 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#deps-of-jql)
* 新增 JQL触发器方法新增一些参数 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-param)
### App插件(含5+App和uni-app的App端)
* Android平台 新增 隐私政策提示框支持 backToExit 配置是否响应点击系统返回键退出应用，解决部分应用市场上架审核可能提示`系统返回键失灵`的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
* Android平台 更新 uni-AD 腾讯优量汇广告SDK 为 4.500.1370 版；Sigmob广告联盟SDK 为 4.9.0 版
* Android平台 更新 云端打包环境 compileSdkVersion 为 32
* Android平台 修复 3.6.17版引出的 系统导航栏按键颜色与背景颜色相同的Bug [详情](https://ask.dcloud.net.cn/question/161501)
* Android平台 修复 3.6.17版引出的 自定义隐私政策提示框时启动应用可能出现卡死的Bug [详情](https://ask.dcloud.net.cn/question/161634)
* Android平台 修复 隐私合规检测可能报`隐私弹窗中处理超链接的过程中调用到了获取设备sim卡国家信息的api`的Bug [详情](https://ask.dcloud.net.cn/question/161479)
* Android平台 修复 图片选择在 Android13 设备提示没有权限的Bug [详情](https://ask.dcloud.net.cn/question/160879)
* Android平台 修复 plus.io.FileReader 的 readAsDataURL 读取数据时未按 slice 分割位置读取的Bug [详情](https://ask.dcloud.net.cn/question/160467)
* Android平台 修复 视频播放控件 VideoPlayer 在视频缓冲时触发 timeupdate 事件的Bug
* iOS平台 新增 苹果应用内支付 IAP 支持订阅促销优惠 [详情](https://uniapp.dcloud.net.cn/api/plugins/payment.html#%E4%BF%83%E9%94%80%E4%BC%98%E6%83%A0%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
* iOS平台 更新 一键登录使用的个验SDK为 3.0.3.0 版
### uni小程序SDK
* Android平台 修复 打开uni小程序切换应用到后台运行一段时间后可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/141868)

## 3.6.17.20230111-alpha
### uni-app插件
* App平台 修复 3.6.16 版引出的 Vue3 项目 vue 页面内联样式中 rpx 渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/161256)
* 微信小程序平台 修复 3.6.16 版引出的 Vue2 项目部分情况下模板中使用多个逻辑表达式运行报错的Bug [详情](https://ask.dcloud.net.cn/question/161190)
### App插件(含5+App和uni-app的App端)
* Android平台 修复 3.6.11版引出的 使用 record 模块后 wgt 升级提示没有配置 record 模块的Bug [详情](https://ask.dcloud.net.cn/question/161167)
* Android平台 修复 3.6.16版引出的 部分设备沉浸式状态栏失效的Bug [详情](https://ask.dcloud.net.cn/question/161277)
* Android平台 修复 隐私政策提示框在未适配 disagreeMode 模式情况下仅显示一次的Bug [详情](https://uniapp.dcloud.net.cn/tutorial/app-disagreemode.html)

## 3.6.16.20230109-alpha
### HBuilder
* 修复 语言服务 uni-app Vue文件，script标签内，无法提示条件编译的Bug [详情](https://ask.dcloud.net.cn/question/159783)
* 修复 内置终端 绿柔主题下，选中终端文本，选中颜色没有显示的bug
* 优化 Markdown一键分享，网页所需的css资源和js资源，同步上传到uniCloud前端网页托管
* 修复 uni-app Vue3 运行到浏览器，浏览器Devtools控制台，日志路径显示错误的Bug
* 修复 uni-app 运行到iOS模拟器，开启uni调试，打开后调试窗体显示空白的Bug
* 修复 某些情况下 项目根目录.hbuilder/launch.json文件重复写入数据，频繁读写，导致编辑器卡顿的Bug
* 优化 原生App-云打包 Android打包 打包窗口不再显示`使用DCloud老版证书`（2022年11月30日以后创建的应用及以前未使用过老版本证书的应用不能再使用DCloud老版证书）
### uni-app插件
* App-Vue平台、Web平台 优化 input 组件支持 inputmode 属性 [详情](https://uniapp.dcloud.net.cn/component/input.html#inputmode)
* App平台 修复 Vue3 项目 nvue 页面 webview 组件 onPostMessage 事件无效的Bug [详情](https://ask.dcloud.net.cn/question/158925)
* App平台 修复 Vue3 项目 image 组件使用 base64 显示异常的Bug [详情](https://ask.dcloud.net.cn/question/158368)
* App-Android平台 修复 使用 tabbar 后页面多次跳转可能导致底部系统导航栏颜色变化的bug
* App-Android平台 修复 nvue 页面 live-pusher 组件拒绝相机权限后再手动开启，回到应用后可能无法调用相机预览的Bug [详情](https://ask.dcloud.net.cn/question/158518)
* App-iOS平台 修复 nvue 页面 ad-content-page 组件拉取广告配置失败后无法重新拉取的Bug
* App-iOS平台 修复 nvue 页面 map 组件使用自定义地图样式后切换卫星图无效的Bug [详情](https://ask.dcloud.net.cn/question/159316)
* App-iOS平台 修复 使用模拟器开启调试后启动应用白屏的Bug [详情](https://ask.dcloud.net.cn/question/160363)
* App-iOS平台 修复 Vue3 项目中 input 组件 disabled 无法动态修改的Bug [详情](https://ask.dcloud.net.cn/question/157958)
* Web平台、小程序平台 修复 uni-push2.0 WebSocket连接不稳定的Bug [详情](https://ask.dcloud.net.cn/question/159690)
* Web平台 修复 input 组件输入负数带出上次结果的Bug [详情](https://ask.dcloud.net.cn/question/159447)
* Web平台 修复 Vue3 项目 uni.navigateTo eventChannel 只会调用一次的Bug [详情](https://ask.dcloud.net.cn/question/155922)
* Web平台 修复 Vue3 项目 scroll-view 组件滚动频繁触发视图更新的Bug [详情](https://ask.dcloud.net.cn/question/149557)
* Web平台 修复 Vue3 项目 picker 组件 end 属性读取错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/4075)
* Web平台 修复 uni.setTabBarItem 导致 tab 切换生命周期异常的Bug [详情](https://ask.dcloud.net.cn/question/160739)
* 微信小程序平台 修复 Vue2 项目 模板中无法观测数组长度变化的Bug [详情](https://github.com/dcloudio/uni-app/issues/1827)
* 支付宝小程序平台 修复 Vue3 项目 使用内联样式运行报错的Bug [详情](https://ask.dcloud.net.cn/question/159362)
### uniCloud插件
* JQL语法 修复 使用 setUser 方法未传 permission 参数且使用触发器时报错的Bug
* JQL语法 修复 add 方法传递的字段值为对象且其中包含null值时报错的Bug
* JQL语法 新增 数据库触发器增加 triggerContext 参数，用于在 before 和 after 内共享数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-context)
* 阿里云 调整 正式版云存储单文件100MB限制调整为5GB
### App插件(含5+App和uni-app的App端)
* Android平台 更新 fastjson SDK为 1.2.83 版，解决安全检测可能报`Fastjson反序列化远程代码执行漏洞`的问题
* Android平台 更新 一键登录使用的个验SDK为 3.1.0.0 版，优化初始化和预登录速度
* Android平台 更新 UniPush 使用的个推核心组件SDK为 3.2.1.0 版；谷歌渠道个推 sdk-for-gj 为 4.4.3.1 版；解决发布到 Google Play 商店可能被下架的问题 [详情](https://ask.dcloud.net.cn/question/160249)
* Android平台 修复 3.6.12版引出的 从系统相册中选择文件在部分鸿蒙设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/159556)
* Android平台 修复 3.6.7版引出的 一键登录 登录完成后自动关闭登录界面，以及登录按钮 loading 动画效果缺失的Bug [详情](https://ask.dcloud.net.cn/question/159898)
* Android平台 修复 上架应用市场审核可能报`频繁自启动或关联启动第三方应用`的Bug [详情](https://ask.dcloud.net.cn/question/160965)
* Android平台 修复 设置 targetSdkVersion 值大于或等于 30 时使用高德地图引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/159801)
* Android平台 修复 连续多次调用 createBLEConnection 连接蓝牙设备，无法连接设备也可能触发成功回调的Bug [详情](https://ask.dcloud.net.cn/question/113070)
* Android平台 修复 上架OPPO应用市场可能提示`含数字天堂(dcloud)广告插件`的Bug [详情](https://ask.dcloud.net.cn/question/160501)
* iOS平台 更新 UniPush 使用的个推SDK为 2.7.2.0 版，因个推改为 Swift 版，需引入 Swift 库，可能导致打包后 ipa 文件变大 [详情](https://uniapp.dcloud.net.cn/tutorial/app-push-unipush.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)
* iOS平台 修复 设置应用语言为英文时部分系统界面可能会显示为回退语言的Bug [详情](https://ask.dcloud.net.cn/question/159445)
* iOS平台 修复 自定义基座真机运行可能导致 setStorage 保存的数据丢失的Bug [详情](https://ask.dcloud.net.cn/question/159903)
* iOS平台 修复 plus.nativeUI.toast 设置 style 为 inline 时 iconWidth/iconHeight 属性失效的Bug [详情](https://ask.dcloud.net.cn/question/160192)
* iOS平台 修复 uni-AD 优量汇开屏广告展示期间弹出提示框可能导致开屏界面不会关闭的Bug
* iOS平台 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备返回数据没有 advertisData 字段的Bug [详情](https://ask.dcloud.net.cn/question/160178)

## 3.6.14.20221216-alpha
### HBuilder
* 修复 3.6.12版引出的 某些情况下，编辑器回车后，光标位置错误的Bug [详情](https://ask.dcloud.net.cn/question/159490)
* 修复 3.6.9版引出的 某些情况下，项目根目录生成了一个1.text测试文件的Bug [详情](https://ask.dcloud.net.cn/question/159580)
* 修复 3.6.7版引出的 html文件，运行到Chrome，启动了一个新的Chrome实例的Bug [详情](https://ask.dcloud.net.cn/question/159331)
* 修复 uni-app Web平台开启或停止浏览器Debug调试，某些情况下，控制台按钮重复显示的Bug
### uni-app插件
* App-Android平台 修复 使用 canvas 模块后 wgt 升级提示没有配置 canvas 模块的Bug [详情](https://ask.dcloud.net.cn/question/159283)
* App-iOS平台 修复 UniPush 2.0 在vue2项目中 启用离线推送后，调用 uni.getPushClientId 某些情况下获取不到cid的Bug [详情](https://ask.dcloud.net.cn/question/158921)
* 小程序平台 修复 3.6.11版引出的 使用 async/await 发布后运行报错的Bug [详情](https://ask.dcloud.net.cn/question/159413)
### uniCloud插件
* JQL语法 新增 触发器内可以获取用户信息和本次数据库操作结果 [用户信息](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#user-info)、[执行结果](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#result)
* JQL语法 新增 触发器内可以判断当前执行的语句是否和指定语句相同 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#is-equal-to-jql)
* JQL语法 调整 对于 schema 内定义的复杂类型数据（file、array、object）类型的字段，忽略赋给此字段的 null 值
* 本地调试插件 修复 在部分旧系统运行时本地调试服务启动失败的Bug [详情](https://ask.dcloud.net.cn/question/159343)
* 本地调试插件 修复 3.6.12版引出的 云函数 调试运行 无法进行Debug断点调试的Bug
* 本地调试插件 修复 阿里云正式版本地云函数内上传文件到云存储时，上传的文件无法在 uniCloud web 控制台看到的Bug [详情](https://ask.dcloud.net.cn/question/159109)
### App插件(含5+App和uni-app的App端)
* iOS平台 修复 plus.push.getClientInfoAsync 在应用热重启后调用不触发回调的Bug

## 3.6.12.20221207-alpha
* 修复 3.6.11引出的 uts文件 无法显示大纲视图的Bug
* 修复 3.6.11引出的 uts文件 右键菜单重排代码格式置灰的Bug
* 优化 App真机运行 设备选择窗口，标准基座和自定义基座，显示基座信息
* 优化 App真机运行 菜单【运行 - 运行到手机或模拟器】，移除菜单【运行基座选择】
* 【uniCloud插件】
  + 本地调试插件 修复 云函数调用云函数时，被调用云函数无返回值导致报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 3.6.11 版本引出的 显示开屏广告时弹出系统 alert 窗偶现崩溃的Bug

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
* 【uni-app插件】
  + 新增 ad-interactive 互动广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interactive.html)
  + App平台 新增 【ext api】 Wi-Fi 模块 [详情](https://uniapp.dcloud.net.cn/api/system/wifi.html)
  + App平台 优化 Vue2 项目 component is 支持传入组件选项和构造函数 [详情](https://ask.dcloud.net.cn/question/140044)
  + App平台 修复 nvue 页面 slider 组件某些情况下位置位置计算不准确的Bug [详情](https://ask.dcloud.net.cn/question/152714)
  + App-Android平台 修复 使用 tabbar 后页面多次跳转返回可能引起路由管理异常的Bug [详情](https://ask.dcloud.net.cn/question/158462)
  + App-Android平台 修复 3.6.9 版本引出的 uni.switchTab 在特殊场景可能无法正常切换页面的Bug [详情](https://ask.dcloud.net.cn/question/157720)
  + App-iOS平台 补齐 【ext api】 uni.onMemoryWarning [详情](https://ext.dcloud.net.cn/plugin?id=10071)
  + App-iOS平台 修复 3.6.7 版本引出的 ad 组件偶现加载优量汇广告成功但无法正常渲染的Bug
  + Web平台 修复 Vue3 项目 canvas 组件监听事件报错的Bug [详情](https://ask.dcloud.net.cn/question/158252)
  + 小程序平台 优化 vue3 项目使用 import 导入非 static 目录的资源生成后名称默认补充 hash [详情](https://github.com/dcloudio/uni-app/issues/4011)
  + 微信小程序平台 修复 Vue3 项目 v-for 循环事件可能错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/4015)
  + 微信小程序平台 修复 Vue3 项目 wxs 热更新失效的Bug [详情](https://ask.dcloud.net.cn/question/158252)
  + uni-im 全端支持Vue3 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
  + uni-im 新增多媒体消息（含：语音、图片、视频、任意文件）和代码发送
  + uts插件 新增 在uts文件中可使用条件编译 //#ifdef APP-ANDROID 和 //#ifdef APP-IOS [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#uts-%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)
  + uts插件 App-Android平台 调整 内置库包名为`io.dcloud.uts`，类名为`UTSAndroid` [详情](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html#iodcloudutsandroid)
  + uts插件 App-Android平台 优化 setTimeOut 函数线程池大小，支持多异步任务场景
  + uts插件 App-Android平台 修复 UTSJSONObject 构造函数无法传递复杂 JSON 参数的Bug
  + uts插件 App-Android平台 修复 UTSJSONObject 嵌套序列化存在冗余字段的Bug
  + uts插件 App-Android平台 修复 Array 索引不支持 number 类型的Bug
  + uts插件 App-Android平台 修复 JSON.stringify 参数为数组时返回字符串格式不正确的Bug
  + uts插件 App-iOS平台 新增 内置库`DCloudUTSFoundation` [详情](https://uniapp.dcloud.net.cn/plugin/uts-for-ios.html#dcloudutsfoundation)
  + uts插件 App-iOS平台 补齐 内置对象 Date、Number、Set、String、RegExp
  + uts插件 App-iOS平台 修复 console 打印对象在控制台输出格式不正确的Bug
  + hello uts 新增 系统API Alert 弹窗示例 [详情](https://ext.dcloud.net.cn/plugin?id=9892)
  + hello uts 补齐 iOS平台 三方SDK toast 消息提示框，监听设备位置变化示例 [详情](https://ext.dcloud.net.cn/plugin?id=9892)
* 【uniCloud插件】
  + 【重要】新增 数据库扩展js，{表名}.schema.ext.js，可实现数据库触发器。推荐用触发器替代action，更安全 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger)
  + 【重要】uni-pay 2.0，从公共模块升级为包含前端页面、uni-pay-co云对象，让支付更加简单省心 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-pay.html)
  + JQL语法 修复 where 和 permission 内使用负数常量时报错的Bug [详情](https://ask.dcloud.net.cn/question/157993)
  + 本地调试插件 修复 调用 clientDB、jql扩展 时报找不到 action 的Bug [详情](https://ask.dcloud.net.cn/question/157997)
  + uniIdRouter 修复 vue3项目跳转时报错的Bug [详情](https://ask.dcloud.net.cn/question/158015)
  + 【重要】uni-id-co 新增 外部系统联登接口，可为外部系统创建与uni-id相对应的账号，使该账号可以使用依赖uniId的系统及功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#external)
  + uni-id-co 新增 设置密码接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#set-pwd)
  + uni-id-co 新增 URL化请求时鉴权签名验证 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#http-reqeust-auth)
  + uni-id-co 新增匹配到的用户不可在当前应用登录时的错误码 `uni-id-account-not-exists-in-current-app` [错误码说明](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#errcode)
  + uni-id-co 修复 微信登录时用户未设置头像的报错问题
  + uni-id-co 修复 无法从 clientInfo 中获取 uniIdToken
  + uni-id-pages 新增 登录后跳转设置密码页面配置项`setPasswordAfterLogin` [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#set-pwd-after-login)
  + uni-id-pages 新增 设置密码页面
  + uni-id-pages 优化 toast 错误提示时间为3秒
  + uni-admin 调整 群发短信功能的 schema 文件命名规范，将`batch-sms-template` `batch-sms-task` `batch-sms-result` 更改为 `opendb-sms-temlate` `opendb-sms-task` `opendb-sms-log` 以符合opendb规范
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】调整 Camera&Gallery、Barcode、Orientation、Record等模块从引擎内置调整为独立模块，解决iOS平台隐私合规检测可能报包含麦克风、相机/相册、运动等权限的问题。云端打包默认不再包含以上模块，如需要请手动在 manifest.json -> 模块配置 中勾选[详情](https://uniapp.dcloud.net.cn/tutorial/app-modules.html#bcor)
  + Android平台 更新 UniPush 使用的个推SDK为 3.2.13.0 版，个推核心组件SDK为 3.1.12.0 版；谷歌渠道个推SDK为 4.10.1.0 版；解决隐私合规检测可能报超频采集的问题
  + iOS平台 更新 uni-AD 快手广告SDK为 3.3.33 版；快手内容联盟SDK为 3.3.32 版；今日头条穿山甲SDK为 4.9.0.5 版；穿山甲GroMore广告SDK为 3.8.0.2 版
  + iOS平台 修复 IAP支付 订单数据 orderInfo 参数异常时引起应用假死的Bug
  + iOS平台 修复 3.6.10版本引出的 三方登录授权不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/158380)

## 3.6.10.20221121-alpha
* 修复 3.6.9引出的 uni-app CLI项目，当存在uts插件时，无法正常编译和运行的Bug
* 修复 uni-app uts插件 语言服务 `import x from '@/uni_modules/'` uts插件路径提示错误的Bug
* 修复 App真机运行 设备选择窗口 某些情况下，点击运行按钮，HBuilderX出现崩溃的Bug
* 优化 uts插件 iOS平台 本地编译和真机运行速度
* 【uni-app插件】
  + App平台 修复 Vue2 项目 编辑 uts 插件代码热更新失效的Bug
  + App平台 修复 Vue2 项目 nvue 页面不支持 uts 插件的Bug [详情](https://ask.dcloud.net.cn/question/157435)
  + App平台 修复 darkmode 模式下设置 statusBar 颜色不正常的Bug
  + App平台 修复 nvue 首页设置 navigationBarTextStyle 无效的Bug [详情](https://ask.dcloud.net.cn/question/150485)
  + App平台 修复 uni.startSoterAuthentication（生物识别）识别错误时 loading 没有文字提示的Bug [详情](https://ask.dcloud.net.cn/question/157353)
  + App-Android平台 修复 uni.request 不支持 head 请求的Bug [详情](https://ask.dcloud.net.cn/question/136717)
  + App-Android平台 修复 页面中存在多个 input 组件时获取焦点光标位置可能不正确的Bug
  + App-Android平台 修复 nvue live-pusher 组件在 Android11+ 设备使用移动网络无法预览的Bug [详情](https://ask.dcloud.net.cn/question/156532)
  + App-Android平台 调整 uts插件 Date.getDay 从以周日为1统一调整为周日为0
  + App-Android平台 修复 uts插件 不支持函数参数为数组的Bug
  + App-Android平台 修复 uts插件 JSON.parse 不支持 JSONArray 的Bug
  + Web平台 修复 Vue3 项目 --window-top 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/157164)
  + Web平台 修复 Vue3 项目配置全局 loading、error 组件无效的Bug [详情](https://ask.dcloud.net.cn/question/157122)
  + 支付宝小程序平台 修复 page-meta 组件 root-font-size 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/157168)
  + uni-im 支持 非uniCloud 或 不基于uni-id-pages 开发的项目 接入 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
* 【uniCloud插件】
  + 【重要】阿里云商用版正式上线 [详情](https://ask.dcloud.net.cn/article/40144)
  + JQL语法 新增 支持 geoNear 以实现地理位置查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#geo-near)
  + JQL语法 修复 部分有权限进行的查询被误报权限校验未通过的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 新增 隐私政策提示框支持 showAlways 配置是否每次启动都弹窗提示 [详情](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
  + Android平台 修复 监听系统暗黑模式主题切换事件可能无效的Bug [详情](https://ask.dcloud.net.cn/question/157497)
  + Android平台 修复 云端打包 使用自有证书可能报 `Invalid keystore format` 错误的Bug [详情](https://ask.dcloud.net.cn/question/157057)
  + Android平台 修复 云端打包 配置应用清单文件 AndroidManifest.xml 的 package 属性值与包名相同时打包失败的Bug
  + iOS平台 修复 3.6.7版本引出的 设置启动页不自动关闭无效的Bug [详情](https://ask.dcloud.net.cn/question/157721)
  + iOS平台 修复 plus.screen.lockOrientation、plus.screen.unlockOrientation 在 iOS16 设备无效的Bug [详情](https://ask.dcloud.net.cn/question/155357)
  + iOS平台 修复 播放音频时无法正常录音的Bug [详情](https://ask.dcloud.net.cn/question/157408)
  + iOS平台 修复 设置暗黑模式跟随系统主题可能无效的Bug
* 【uni小程序SDK】
  + Android平台 修复 默认包含设置角标权限的Bug

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
* 【uni-app插件】
  + 新增 uni错误规范 [详情](https://uniapp.dcloud.net.cn/tutorial/err-spec.html)
  + App、Web平台 新增 暗黑模式（DarkMode） [详情](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
  + App、Web平台 修复 radio 组件禁用状态样式异常的Bug
  + App平台 新增 nvue 页面 MapContext 支持 setLocMarkerIcon 方法 [详情](https://uniapp.dcloud.net.cn/api/location/map.html#setLocMarkerIcon)
  + App平台 新增 nvue list 组件支持 render-reverse 属性 [详情](https://uniapp.dcloud.net.cn/component/list.html#%E5%B1%9E%E6%80%A7)
  + App平台 修复 Vue2 项目使用组合式 API 时 onReady 声明周期 template ref 未绑定的Bug
  + App平台 修复 Vue3 项目 template ref 会被代理的Bug
  + App平台 修复 Vue3 项目设置导航栏背景色为 rgba 色值无效的Bug [详情](https://ask.dcloud.net.cn/question/135111)
  + App平台 修复 Vue3 项目根节点 height:100% 无效的Bug [详情](https://ask.dcloud.net.cn/question/156564)
  + App-Android平台 新增 【ext api】 uni.onMemoryWarning [详情](https://ext.dcloud.net.cn/plugin?id=10071)
  + App-Android平台 新增 uts插件 生命周期函数 on/offAppTrimMemory、on/offAppConfigChange 等 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#iodcloudutsandroid)
  + App-Android平台 修复 uts插件 libs 包含三方 aar 时，丢失部分 jar 包的Bug
  + App-Android平台 修复 uts插件 无法继承内部类的Bug
  + App-iOS平台 修复 Vue3 项目录音播放无效的Bug [详情](https://ask.dcloud.net.cn/question/155741)
  + App-iOS平台 修复 uts插件 类构造函数无法使用外参的Bug
  + 微信小程序平台 修复 3.6.8 版本引出的 Vue3 项目在 vite.config.js 内定义编译注入的全局常量导致使用了 uniCloud 的客户端报错的Bug
  + 支付宝小程序平台 修复 uni.showLoading 提示 mask 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/156944)
  + 支付宝小程序平台 修复 Vue3 项目 eventChannel 通信失败的Bug [详情](https://github.com/dcloudio/uni-app/issues/3945)
  + 字节跳动小程序平台 优化 默认启用 component2 [详情](https://ask.dcloud.net.cn/question/156550)
  + hello uts 新增 Android平台获取用户输入、播放asset音频、调用系统拍照示例 [详情](https://ext.dcloud.net.cn/plugin?id=9892)
* 【uniCloud插件】
  + 【重要】新增 uni-im 云端一体的、全平台的、免费的、开源即时通讯系统 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
  + jql语法 修复 使用 add 数据库运算方法报错的Bug [详情](https://ask.dcloud.net.cn/question/156261)
  + jql语法 修复 使用部分 js 关键字导致查询条件或 field 报错的Bug
  + jql语法 修复 使用 getTemp 联表查询时，如果主表关联字段在 schema 内为数组类型但实际数据无此字段时报错的Bug
  + 云对象 新增 url 化支持通过多段 path 路径调用方法，以第一段作为云对象方法名 [详情](https://uniapp.dcloud.net.cn/uniCloud/http.html#request-co-url)
  + 本地调试插件 修复 HBuilderX 3.6.7 引出的断点进入nodejs内置模块的Bug
  + 安全网络 调整 统一错误码规范 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#err-code)
  + uni-id 升级密码加密算法，支持hmac-sha256加密 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#password-safe)
  + uni-id 新增 开发者可以自定义密码加密规则 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#custom-password-encrypt)
  + uni-id 新增 支持将其他系统用户迁移至uni-id [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#move-users-to-uni-id)
  + uni-id 支持URL化方式请求 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#adapter-http)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 Stripe支付支持设置账单信息 [详情](https://uniapp.dcloud.net.cn/tutorial/app-payment-stripe.html)
  + Android平台 新增 支持暗黑模式 [详情](https://ask.dcloud.net.cn/article/36995)
  + Android平台 更新 uni-AD 今日头条穿山甲广告SDK 为 4.9.0.8 版；穿山甲GroMore广告SDK 为 4.8.0.0 版；腾讯优量汇广告SDK 为 4.492.1362 版
  + Android平台 更新 高德地图SDK为 9.5.0 版，高德定位SDK为 6.1.0 版，解决隐私合规检测可能报高德SDK收取MAC地址、ANDROID ID的问题 [详情](https://ask.dcloud.net.cn/question/154268)
  + Android平台 修复 3.6.7版本引出的 应用后台切前台插屏广告可能不显示的Bug
  + Android平台 修复 视频播放控件 VideoPlayer 隐私合规检测可能报`数字天堂SDK获取传感器`的Bug [详情](https://ask.dcloud.net.cn/question/156360)
  + Android平台 修复 原生隐私政策提示框在部分设备 message 内容可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/156445)
  + iOS平台 修复 3.6.0版本引出的 开屏广告自定义底部图片、背景色不生效的Bug
  + iOS平台 修复 标题栏 titleNView 设置默认导航栏颜色可能导致与状态栏颜色不一致的Bug
  + iOS平台 修复 setUIStyle 设置暗黑模式可能无效的Bug

## 3.6.8.20221027-alpha
* 修复 App真机运行 打开Object类型的日志后，内容没有格式化的Bug
* 修复 uni_modules 插件市场导入插件，运行缓慢超时导致提示`插件处理外部应用请求未能完成`的Bug
* 【uni-app插件】
  + 【重要】新增 vue2 项目支持开发、使用 uts 插件 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + 新增 Vue2 项目支持使用组合式 API [详情](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)
  + 修复 3.6.7 版本引出的 Vue3 项目使用 TypeScript 后部分对象无法访问的Bug [详情](https://github.com/dcloudio/uni-app/issues/3930)
  + App平台、Web平台 新增 地理位置更新相关接口 [详情](https://uniapp.dcloud.net.cn/api/location/location-change.html)
  + App平台 修复 3.6.7 版本引出 Vue3 项目的 nvue 页面全局样式无效的Bug [详情](https://ask.dcloud.net.cn/question/155639)
  + App平台 修复 Vue2 项目移除页面根节点后导致事件异常的Bug [详情](https://ask.dcloud.net.cn/question/155057)
  + App平台 修复 Vue2 项目列表不使用 index 作为 key 时更新数据导致事件异常的Bug [详情](https://ask.dcloud.net.cn/question/155238)
  + App-Android平台 优化 Vue3 项目 minUserAgentVersion 默认配置为 49，避免低版本webview上白屏无提示 [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
  + App-Android平台 修复 uni.getStorageSync在某些情况下可能报`SyntaxError`错误的Bug [详情](https://ask.dcloud.net.cn/question/154284)
  + App-Android平台 新增 uts插件 支持application/activity部分生命周期函数 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#iodcloudutsandroid)
  + App-Android平台 修复 uts插件 不支持泛型通配符语法的Bug [详情](https://ask.dcloud.net.cn/question/155942)
  + App-iOS平台 修复 在 iOS16 设备 nvue 页面关闭、开启下拉刷新效果时偶现崩溃的Bug
  + App-iOS平台 修复 3.6.0版本引出的 nvue list 组件内使用 ad 信息流广告组件偶发渲染空白的Bug [详情](https://ask.dcloud.net.cn/question/155752)
  + Web平台 修复 Vue2 项目中 css 媒体查询中使用 page 选择器不生效的Bug
  + 【重要】微信小程序平台 新增 uni-AD 安全激励视频，提供防刷的服务器回调 [详情](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + 支付宝小程序 新增 uni.onKeyboardHeightChange 监听键盘高度变化 [详情](https://uniapp.dcloud.net.cn/api/key.html#onkeyboardheightchange)
  + 支付宝小程序 修复 小程序组件中的事件触发时机较早时在 Vue 组件中无法监听的Bug
* 【uniCloud插件】
  + 【重要】新增 安全网络 客户端校验功能，防止伪造的客户端请求服务器 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client)
  + 新增 `uni-clear-temp-data` 插件，用于自动清理数据库中的过期数据 [详情](https://ext.dcloud.net.cn/plugin?id=9826)
  + 修复 HBuilderX插件 `uni-`开头的 schema 文件 右键菜单缺少【opendb检查更新】的Bug
  + 修复 HBuilderX插件 本地云函数调用 redis 接口传较大的数据时报错的Bug [详情](https://ask.dcloud.net.cn/question/155804)
  + 修复 uniIdRouter 使用相对路径跳转时附带的 uniIdRedirectUrl 参数错误的Bug [详情](https://ask.dcloud.net.cn/question/155904)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 chooseVideo 使用相机拍摄视频在Android10及以上设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/155877)
  + Android平台 修复 chooseImage、chooseVideo 存在读取设备应用安装列表的行为可能导致隐私检测不合规的Bug
  + Android平台 修复 应用安全检测可能报`app关联启动`的Bug
  + Android平台 修复 3.6.0版本引出的 首次真机运行隐私政策提示框可能不弹出的Bug
  + iOS平台 更新 uni-AD 百度百青藤广告SDK 为 4.901 版；快手广告SDK 为 3.3.32 版
  + iOS平台 更新 微信SDK 为 1.9.6 版
  + iOS平台 修复 分享到微信收藏夹时跳转到朋友圈的Bug [详情](https://ask.dcloud.net.cn/question/155362)

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
* 【uni-app插件】
  + 【重要】新增 uts iOS版插件。将uts代码转为swift代码。 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + 【重要】新增 `uni ext api`。将不常用的API剥离为uni_modules插件，但仍使用uni.开头的API。[详情](https://uniapp.dcloud.net.cn/api/extapi.html)
  + 【重要】App-Android平台 修复 getSystemInfo 的 deviceId 属性偶尔获取失败和多设备获取重复的Bug（注意此修改造成的向下兼容问题）[详情](https://uniapp.dcloud.net.cn/api/system/info.html)
  + vue3 项目 vite 依赖版本升级至最新 3.1.8
  + App平台、Web平台 新增 【ext api】 uni.getBatteryInfo [详情](https://uniapp.dcloud.net.cn/api/system/batteryInfo.html)
  + App平台、Web平台 修复 picker 组件日期类型无法使用超出默认的年份范围值的Bug [详情](https://ask.dcloud.net.cn/question/131332)
  + App平台、Web平台 修复 iOS16 系统 input 组件 type=digit 无法输入小数点的Bug [详情](https://ask.dcloud.net.cn/question/154584)
  + App平台、Web平台 修复 editor 组件 insertImage 触发 input 事件没有 alt 属性的Bug [详情](https://ask.dcloud.net.cn/question/155163)
  + App平台、Web平台 修复 vue3 项目 editor 组件重新加载获取不到 EditorContext 的Bug [详情](https://ask.dcloud.net.cn/question/154702)
  + App平台 新增 nvue 页面 picker-view 组件增加 mask-top-style、mask-bottom-style 属性 [详情](https://uniapp.dcloud.net.cn/component/picker-view.html)
  + App平台 优化 video 组件支持 title 属性 [详情](https://uniapp.dcloud.net.cn/component/video.html)
  + App平台 修复 hover-class 属性不支持多个 class 的Bug [详情](https://ask.dcloud.net.cn/question/152506)
  + App平台 修复 vue3 项目 uts 插件 export default class 不生效的Bug [详情](https://ask.dcloud.net.cn/question/154164)
  + App平台 修复 vue3 项目 v-for 可能渲染失败的Bug [详情](https://ask.dcloud.net.cn/question/154836)
  + App平台 修复 vue3 项目 tabbar.broderStyle 自定义色值无效的Bug [详情](https://ask.dcloud.net.cn/question/150718)
  + App平台 修复 vue3 项目 nvue 页面 switch 组件 disabled 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/154577)
  + App-Android平台 修复 3.5.5版本引出 input 组件自动获取焦点可能失效的Bug [详情](https://ask.dcloud.net.cn/question/153481)
  + App-iOS平台 修复 nvue swiper 组件使用 rpx 时在部分设备可能无法正常滑动切换的Bug [详情](https://ask.dcloud.net.cn/question/149260)
  + Web平台 优化 uni.previewImage 在 PC 端增加切换和关闭按钮
  + Web平台 修复 tabbar 某些情况下显示重复的 badge 的Bug [详情](https://ask.dcloud.net.cn/question/153336)
  + Web平台 修复 uni.openLocation 导航未自动获取当前位置Bug [详情](https://ask.dcloud.net.cn/question/155066)
  + Web平台 修复 vue3 项目 titleNView 中 buttons 的 select 为 true 时图标不显示的Bug [详情](https://ask.dcloud.net.cn/question/153179)
  + Web平台 修复 vue3 项目 进入 tabbar 重复触发 onLoad 的 Bug [详情](https://ask.dcloud.net.cn/question/154066)
  + web平台 修复 vue3 项目 CSS 中的 v-bind 使用 rpx 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3884)
  + 小程序平台 修复 改变数据时 setData 调用异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/3787)
  + 小程序平台 修复 vue3 项目 CSS 中的 v-bind 使用非 setup 中的数据不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3887)
  + 小程序平台 修复 vue3 项目 作用域插槽嵌套使用时可能渲染错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3886)
  + 小程序平台 修复 vue3 项目 作用域插槽静态数据渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/153150)
  + 小程序平台 修复 vue3 项目 v-for 里的插槽可能渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/155008)
  + 小程序平台 修复 vue3 项目 发行为混合分包，页面返回可能报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3923)
  + 微信小程序平台 修复 vue3 项目 scroll-view 的 drag 相关事件不触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3921)
  + 微信小程序平台 修复 vue3 项目 uni://form-field 不生效的Bug [详情](https://ask.dcloud.net.cn/question/155373)
  + 百度小程序平台 修复 uni.createIntersectionObserver 无法监听多个节点的Bug [详情](https://github.com/dcloudio/uni-app/issues/3835)
  + 百度小程序平台 修复 node_modules 目录中的静态资源生成目录错误的Bug [详情](https://ask.dcloud.net.cn/question/154595)
  + 百度小程序平台 修复 onInit 生命周期不触发的Bug [详情](https://ask.dcloud.net.cn/question/154352)
  + 百度小程序平台 修复 vue2 项目 使用 usingSwanComponents 配置动态库组件内事件无法获取参数的Bug [详情](https://ask.dcloud.net.cn/question/155281)
  + 百度小程序平台 修复 vue3 项目 不能正常使用动态库组件的Bug [详情](https://github.com/dcloudio/uni-app/issues/3864)
  + 支付宝小程序平台 修复 编译成小程序插件后 uni.hideLoading 等接口无法访问的Bug [详情](https://github.com/dcloudio/uni-app/issues/2974)
  + 支付宝小程序平台 修复 page-container 组件被当作自定义组件编译的Bug [详情](https://ask.dcloud.net.cn/question/154028)
  + 支付宝小程序平台 修复 uni.showToast 不支持 duration 参数的Bug [详情](https://ask.dcloud.net.cn/question/147279)
  + 支付宝小程序平台 修复 小程序插件内的组件未使用事件运行报错的Bug [详情](https://github.com/dcloudio/uni-app/pull/3903)
  + QQ小程序平台 修复 vue3 项目 uni.createCanvasContext 传入 this 报错的Bug [详情](https://ask.dcloud.net.cn/question/154223)
  + 字节跳动小程序平台 新增 支持使用小程序插件 [详情](https://github.com/dcloudio/uni-app/issues/3917)
  + 字节跳动小程序平台 修复 vue3 项目使用小程序自定义组件可能报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3915)
  + 快手小程序平台 新增 页面支持分包 [详情](https://uniapp.dcloud.net.cn/collocation/pages.html#subpackages)
  + 快手小程序平台 优化 uni.requestPayment 实现改用 ks.pay [详情](https://ask.dcloud.net.cn/question/152948)
  + uni统计 修复 3.4.9版本引出的 deviceId 获取方式变化，导致 uni统计2.0 App-Android 平台部分统计数据不准确的Bug [详情](https://ask.dcloud.net.cn/article/40097)
* 【uniCloud插件】
  + 【重要】新增 `安全网络` uni-app客户端和unicloud实现安全通讯，验证客户端身份和加密数据，防刷利器 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html)
  + 新增 客户端sdk 新增 uniCloud.databaseForJQL 接口，拉齐在云函数中的写法。相比之前 database，返回值移除了多一层的 result [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb.html#jssdk)
  + 新增 客户端sdk uniCloud.importObject增加 parseSystemError 选项，用于处理云对象未捕获的错误或客户端网络错误，以便给用户展示友好的错误信息 [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + 修复 本地调试插件 连接本地云函数 require 出错时仅第一次报出错误的Bug
  + uni-id-co 新增 支持微信授权手机号登录方式 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-weixin-mobile)
  + uni-id-co 新增 解绑第三方平台账号 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#unbind-third-account)
  + uni-id-co 新增 微信绑定手机号支持通过`getPhoneNumber`事件回调的`code`绑定 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#bind-mobile-by-mp-weixin)
  + uni-admin 新增 群发短信功能 [详情](https://uniapp.dcloud.net.cn//uniCloud/admin.html#群发短信)
  + uni-admin 修复 uni统计 App-Android 平台部分统计数据不准确的Bug [详情](https://ask.dcloud.net.cn/article/40097)
  + uni-admin 修复 uni统计 周/月数据不准确的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 腾讯优量汇SDK iOS为 4.13.90 版；快手广告SDK Android为3.3.32，iOS为 3.3.31 版；快手内容联盟SDK iOS为 3.3.31 版；今日头条穿山甲SDK iOS为 4.8.0.3 版；穿山甲GroMore广告SDK iOS为 3.7.0.0 版；Sigmob广告联盟SDK Android为 4.7.0 版，iOS为 4.5.0 版；百度百青藤广告SDK Android为 9.241 版；华为广告SDK Android为 13.4.56.302 版
  + 【重要】Android平台 修复 plus.device.uuid 在高版本Android上不同设备获取的值可能相同的Bug。如之前依赖uuid，需注意处理兼容
  + 新增 plus.device.getDeviceId 获取匿名设备标识 [详情](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getDeviceId)
  + Android平台 新增 模板隐私政策提示框支持配置`游客模式`按钮 [详情](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
  + Android平台 更新 Paypal SDK 为 0.6.2 版，解决设置targetSdkVersion为31打包失败的问题 [详情](https://ask.dcloud.net.cn/question/154976)
  + Android平台 修复 UniPush 异步获取推送标识在部分情况可能返回慢的Bug
  + Android平台 修复 应用设置仅支持竖屏时在部分Android8设备可能引起应用崩溃的Bug
  + Android平台 修复 X5 内核在部分情况无法正确加载的Bug [详情](https://ask.dcloud.net.cn/question/152854)
  + Android平台 修复 直播推流 LivePusher 在部分场景可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/147593)
  + Android平台 修复 视频播放控件 VideoPlayer 切换视频资源后静音状态可能失效的Bug [详情](https://ask.dcloud.net.cn/question/153257)
  + Android平台 修复 视频播放控件 VideoPlayer 销毁时可能导致卡顿的Bug [详情](https://ask.dcloud.net.cn/question/153483)
  + Android平台 修复 视频播放控件 VideoPlayer 在部分情况下标题栏不显示的Bug
  + Android平台 修复 chooseVideo 选择视频文件在鸿蒙系统可能无法加载缩略图的Bug [详情](https://ask.dcloud.net.cn/question/152527)
  + Android平台 修复 一键登录 全屏模式设置背景图时沉浸式效果不正确的Bug
  + Android平台 修复 上架应用市场审核可能报`数字天堂SDK获取传感器的行为`的Bug [详情](https://ask.dcloud.net.cn/question/155043)
  + Android平台 修复 本地打包生成的自定义基座可能无法识别安装的Bug
  + Android平台 修复 3.6.0版本引出的 在 Android4.4 设备无法正常运行的Bug [详情](https://ask.dcloud.net.cn/question/153910)
  + 【重要】iOS平台 新增 云端打包支持原生应用配置文件 Info.plist 和资源目录 Resources [详情](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios)
  + iOS平台 修复 使用`阿里百川电商`SDK 5.x版，云端打包报符号冲突错误的Bug [详情](https://ask.dcloud.net.cn/question/153138)
  + iOS平台 修复 视频播放控件 VideoPlayer 标题栏、进度条样式不正确的Bug [详情](https://ask.dcloud.net.cn/question/153945)
  + iOS平台 修复 uni-AD 穿山甲Gromore 激励视频偶现可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/153717)
  + iOS平台 修复 3.6.0版本引出的 uni原生语言插件Hook不到applicationWillEnterForeground、applicationDidEnterBackground等系统事件的Bug
  + iOS平台 修复 安全检测可能报获取设备idfv的Bug

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
* 【uni-app插件】
  + 小程序平台 修复 onReady 生命周期触发两次的Bug [详情](https://ask.dcloud.net.cn/question/153422)

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
* 【uni-app插件】
  + App平台 修复 vue3 项目切换 tabbar 页面时调用 uni.createVideoContext 的 pause 无法暂停播放的Bug[详情](https://ask.dcloud.net.cn/question/151933)
  + App-Android平台 修复 uts 插件 部分情况下编译后丢失导入类的Bug [详情](https://ask.dcloud.net.cn/question/152597)
  + App-Android平台 修复 uts 插件 定义类型时使用 kotlin 基础类型（如 Int）时，编译报错的Bug
  + App-Android平台 修复 uts 插件 云打包时未包含 AndroidManifest.xml 的Bug
  + App-Android平台 修复 bindingx 执行 evaluateColor 可能出现异常的Bug [详情](https://ask.dcloud.net.cn/question/151759)
  + App-Android平台 修复 uni.reLaunch 打开非 tabbar nvue 页面可能依然显示 tabbar 的Bug [详情](https://ask.dcloud.net.cn/question/143792)
  + App-Android平台 修复 GooglePlay 渠道包无法正常使用高德地图的Bug [详情](https://ask.dcloud.net.cn/question/152668)
  + App-Android平台 修复 nvue 作为首页使用 picker 可能引起应用无响应的Bug [详情](https://ask.dcloud.net.cn/question/151819)
  + App-iOS平台 修复 nvue tabbar 页面 uni.reLaunch 不触发 onUnload 生命周期的Bug [详情](https://ask.dcloud.net.cn/question/152738)
  + Web平台 修复 调用 uni.setClipboardData 会弹起键盘的Bug [详情](https://github.com/dcloudio/uni-app/issues/3569)
  + 小程序平台 优化 小程序组件内部支持使用 kebab-case 事件名 [详情](https://github.com/dcloudio/uni-app/issues/1802)
  + 微信小程序平台 修复 wxs 内调用 triggerEvent 无法携带事件参数的Bug [详情](https://github.com/dcloudio/uni-app/issues/3829)
  + 快手小程序平台 修复 授权手机号的无回调信息的Bug [详情](https://ask.dcloud.net.cn/question/143078)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 UniPush使用的个推SDK为 3.2.12.0 版，个推核心组件SDK为 3.1.10.0 版，OPPO厂商推送SDK为 3.1.0 版，华为厂商推送SDK为 6.5.0.300 版； 一键登录使用的个验SDK为 3.0.6.0 版；支付宝SDK为 15.8.11 版；新浪微博SDK为 12.5.0 版；友盟统计SDK为 9.5.2 版；解决提交应用市场可能隐私检测被拒的问题 [详情](https://ask.dcloud.net.cn/question/143573)
  + Android平台 修复 getVideoInfo 获取纵向视频文件的宽高值相反的Bug [详情](https://ask.dcloud.net.cn/question/151205)
  + Android平台 修复 previewImage 预览图片时可能出现偏移的Bug [详情](https://ask.dcloud.net.cn/question/151966)
  + iOS平台 修复 uploader 上传文件获取 uploadedSize 值不准确的Bug
* 【uni小程序SDK】
  + iOS平台 修复 uni.setStorage 存储数据可能出错的Bug

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
* 【uni-app插件】
  + 【重要】新增 uts Android版插件 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + App-iOS平台 修复 uni.openLocation 底部安全区适配问题 [详情](https://ask.dcloud.net.cn/question/150074)
  + App-iOS平台 修复 uni.chooseLocation 可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/152367)
  + Web平台 新增 支持配置和使用高德地图 [详情](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfigmaps)
  + 支付宝小程序平台 修复 配置全局小程序组件后编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3619)
  + 支付宝小程序平台 修复 启用小程序基础库2.0配置后访问 $slots 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3529)
  + 字节小程序平台 新增 vue2 项目支持 onUploadDouyinVideo 生命周期 [详情](https://ask.dcloud.net.cn/question/151113)
* 【uniCloud插件】
  + 调整 本地调试插件 云对象运行参数配置文件改为 ${objectName}.param.js [详情](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#run-obj-param)
  + 修复 本地调试插件 HBuilderX 3.5.5 版本引出的使用 push 扩展库导致其他云函数不能正常运行的Bug
  + 修复 本地调试插件 HBuilderX 3.5.5 版本引出的连接本地云函数时偶发 `SIGN_PARAM_INVALID` 错误
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】Android平台 新增 云端打包支持配置原生应用清单文件 AndroidManifest.xml 和应用资源目录 res、assets [详情](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)
  + Android平台 更新 uni-AD 快手广告SDK Android为 3.3.29 版；快手内容联盟SDK Android为 3.3.31 版
  + Android平台 修复 uni-AD Sigmob激励视频广告点击跳过按钮后关闭触发 onClose 事件返回的 isEnded 属性值可能不准确的Bug
  + Android平台 修复 腾讯云安全检测可能误报`含数字天堂(dcloud)广告插件,可读取设备信息,可能泄露您的个人隐私`的Bug [详情](https://ask.dcloud.net.cn/question/150624)
  + Android平台 修复 安全检测可能报快手广告 SDK 频繁获取用户信息的Bug
  + iOS平台 修复 3.5.0版本引出的 快手开屏广告点击打开落地页返回后无法进入应用首页的Bug [详情](https://ask.dcloud.net.cn/question/152441)
  + iOS平台 修复 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug

## 3.5.5.20220825-alpha
* 修复 3.5.4引出的 Windows HBuilderX Cli命令失效的Bug
* 新增 App真机运行 设备选择窗口 增加选择基座功能
* 修复 App真机运行 Windows 当项目路径存在中文，运行到 iOS设备，App页面显示异常的Bug
* 修复 App真机运行 某些情况下，安装自定义基座失败的Bug
* 修复 uni-app manifest.json uniPush字段 某些情况下变成 null 的Bug
* 【uni-app插件】
  + 修复 项目路径包含括号时编译异常的Bug [详情](https://ask.dcloud.net.cn/question/150173)
  + App平台 修复 vue 页面 cover-view 组件 flex 布局无效的Bug [详情](https://ask.dcloud.net.cn/question/151697)
  + App平台 修复 vue3 项目 uni.getSystemInfo 获取 windowHeight 值不准确的Bug [详情](https://ask.dcloud.net.cn/question/150862)
  + App平台 修复 vue3 项目 vue 页面 map 组件更新中心坐标后显示错误的Bug [详情](https://ask.dcloud.net.cn/question/151438)
  + App-Android平台 修复 uni.saveImageToPhotosAlbum 保存网络图片可能覆盖上次保存的图片的Bug [详情](https://ask.dcloud.net.cn/question/125357)
  + App-Android平台 修复 picker 组件获取焦点异常的Bug [详情](https://ask.dcloud.net.cn/question/150454)
  + App-Android平台 修复 nvue 页面 map 组件 customCallout 设置图片可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/150166)
  + App-iOS平台 修复 uni.getSystemSetting 获取的 bluetoothEnabled、locationEnabled 值不准确的Bug
  + App-iOS平台 修复 nvue 页面 map 组件 marker 调用 moveAlong 方法没有中断前一次动画的Bug [详情](https://ask.dcloud.net.cn/question/151411)
  + App-iOS平台 修复 3.5.2 引出的 nvue 页面 ad-content-page 组件在某些场景可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/151778)
  + Web平台 修复 vue3 项目 css 环境变量 --window-top 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/150842)
  + Web平台 修复 vue3 项目发行模式 showLoading 图标大小显示错误的Bug [详情](https://ask.dcloud.net.cn/question/149819)
  + Web平台 修复 custom-tab-bar 组件使用 uni.setTabBarItem 设置 visible 无效的Bug [详情](https://ask.dcloud.net.cn/question/132947)
  + 小程序平台 修复 v-for 内使用复杂表达式后 v-model 失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3173)
  + 支付宝小程序、百度小程序、快手小程序、字节小程序平台 优化 支持自动拷贝 ext.json 文件
  + 支付宝小程序平台 优化 uni.saveImageToPhotosAlbum 接口不再使用旧版 saveImage 接口
  + 字节小程序平台 修复 vue2 项目 反复快速创建销毁页面时组件无法渲染的Bug
* 【uniCloud插件】
  + 优化 阿里云 数据库超时时间由3秒调整为5秒
  + 新增 阿里云 通过代理解决微信服务器需要固定IP的问题 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#http-proxy-client)
  + 新增 提供了一批新API，更优雅的处理同实例多并发请求
    - 新增 uniCloud.getRequestList 用于获取当前云函数实例内正在处理的请求的 requestId 列表 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-request-list)
    - 云函数 新增 context.requestId 用于获取当前请求id [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#context)
    - 云对象 新增 this.getUniCloudRequestId() 用于获取当前请求id [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-request-id)
  + 新增 云函数 uniCloud.getCloudInfos 获取云端信息。同时兼容有无并发请求的情况 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-cloud-infos)
  + 新增 云函数 uniCloud.getClientInfos 获取客户端信息。同时兼容有无并发请求的情况 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-client-infos)
  + 修复 客户端sdk 未关联 uniCloud 服务空间时使用 uniCloud 对象导致报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3758)
  + 修复 JQL 一个表内多个包含 parentKey 字段时树查询报错的Bug [详情](https://ask.dcloud.net.cn/question/151834)
  + 修复 本地调试插件 部分情况下全局对象复用导致的扩展库提示不正确的Bug [详情](https://ask.dcloud.net.cn/question/150357)
  + 优化 本地调试插件 持续调试会导致内存占用过高并且响应缓慢的Bug
  + 优化 uniIdRouter 支持对首页、直达页面进行拦截并跳转到登录页面
  + 优化 uni-id-co 密码规则调整，废除之前的简单校验，允许配置密码强度 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#password-strength)
  + 调整 uni-id-co 存储用户 openid（`wx_openid.${mp|h5|app|web}`）时同时在`wx_openid.${mp|h5|app|web}_${DCloudAppId}`存储了一份副本，参考：[微信登录](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-weixin)、[QQ登录](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-qq)
  + 调整 uni-id-co 依赖 uni-open-bridge-common 存储用户 `session_key`、`access_token` 等凭据 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#save-user-token)
  + 新增 uni-id-co 增加 beforeRegister 钩子用户在注册前向用户记录内添加一些数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#before-register)
  + 【重要】新增 uni-id-pages Web端支持微信登录（包括微信公众号内H5登录 和 普通浏览器内手机微信扫码登录）[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#weixinlogin)
  + 新增 uni-id-pages 支持密码强度（是否必须包含大小写字母、数字和特殊符号以及长度）配置 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#config)
  + 新增 uni-id-pages 登录成功（全局）回调事件：`uni-id-pages-login-success`，支持通过[uni.$on](https://uniapp.dcloud.net.cn/api/window/communication.html#on)监听 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
  + 新增 uni-open-bridge 开源库，统一管理微信等三方开放平台的凭据 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 QQ 登录、分享SDK版本为 3.5.12 版；百度定位SDK为 9.3.5 版，百度地图SDK为 7.5.3 版
  + Android平台 修复 UniPush 2.0 厂商推送通道不支持 payload 字段为非 json 字符串的Bug
  + Android平台 修复 plus.push.createMessage 创建本地消息 option 参数设置 when 字段无效的Bug
  + Android平台 修复 plus.runtime.install 升级 apk 可能报空指针的Bug
  + iOS平台 更新 uni-AD 百度百青藤广告SDK为 4.891 版
  + iOS平台 修复 3.5.0版本引出的 uni-AD 信息流广告设置宽度可能引起显示异常的Bug [详情](https://ask.dcloud.net.cn/question/150789)
  + iOS平台 修复 3.5.0版本引出的 使用百度定位模块需要勾选IDFA的Bug
  + iOS平台 修复 3.5.3版本引起的 标准真机运行基座中一键登录返回的 token 值不正确的Bug
  + iOS平台 修复 从本地相册中选择慢动作视频显示的时长不准确的Bug [详情](https://ask.dcloud.net.cn/question/150531)
* 【uni小程序SDK】
  + Android平台 优化 默认菜单字体大小为20px

## 3.5.4.20220805-alpha
* 【重要】优化 App真机运行 使用Node运行，不再依赖Java
* 修复 调试视图 变量 Global节点 某些情况下，UI显示错乱的Bug
* 修复 HBuilderX 保存文件 utf-8 格式文件无文件头标识字节 0xEFBBBF的Bug [详情](https://ask.dcloud.net.cn/question/112186)
* 【uni-app插件】
  + App平台 优化 vue2 项目 web-view 组件通过 webviewStyles 设置更多样式 [详情](https://ask.dcloud.net.cn/question/149212)
  + App平台 优化 vue 页面 web-view 组件内页面默认支持绘制到安全区外 [详情](https://ask.dcloud.net.cn/question/149472)
  + App平台 修复 openLocation、chooseLocation 在应用语言改变时没有跟随变化的Bug [详情](https://ask.dcloud.net.cn/question/149216)
  + App-Android平台 新增 uni.scanCode autoZoom 属性，可控制扫码时是否启用自动放大功能 [详情](https://uniapp.dcloud.net.cn/api/system/barcode.html)
  + App-Android平台 修复 nvue map 组件 maker 点聚合坐标重叠无法展现的Bug [详情](https://ask.dcloud.net.cn/question/149665)
  + App-Android平台 修复 nvue map 组件 polyline、polygon 清空数据不生效的Bug
  + App-iOS平台 修复 uni.setTabBarItem 动态更新 icon 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/149955)
  + App-iOS平台 修复 nvue map 组件使用 Google 地图时，多个页面中使用地图组件可能无法正常加载的Bug [详情](https://ask.dcloud.net.cn/question/150080)
  + Web平台 优化 web-view 组件支持 fullscreen 属性 [详情](https://uniapp.dcloud.net.cn/component/web-view.html)
  + Web平台 修复 vue3 项目 canvas 组件 touch 事件 stop、prevent 修饰符无效的Bug [详情](https://ask.dcloud.net.cn/question/148195)
  + 支付宝小程序平台 修复 vue3 项目 访问 $slots 不生效的Bug [详情](https://ask.dcloud.net.cn/question/150373)
* 【uniCloud插件】
  + 【重要】新增云函数ip防刷功能，避免大量无效请求导致云函数、数据库响应变慢 [详情](https://uniapp.dcloud.net.cn/uniCloud/ip-filter.html)
  + 修复 部分场景下在 main.js 内使用 uniCloud 报错的Bug
  + 修复 uni-admin 在 vue3 项目中使用 uni.showLeftWindow 后组件上 showLeftWindow 值并没有更新的Bug [详情](https://ask.dcloud.net.cn/question/149618)
  + uni统计2 新增 前端数据上报周期配置项 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html#report-time)
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 3.5.0版本引出的 使用百度地图或百度定位时未勾选`使用广告标识（IDFA）`云打包报错的Bug
  + iOS平台 修复 3.5.3版本引出的 开通 uni-AD 开屏广告后台切前台可能导致页面回退不正常的Bug [详情](https://ask.dcloud.net.cn/question/150053)
  + iOS平台 修复 图片选择界面设置 crop 属性选择 iCloud 图片黑屏的Bug [详情](https://ask.dcloud.net.cn/question/149219)

## 3.5.3.20220727-alpha
* 修复 操作系统环境变量 配置NODE_OPTIONS --openssl-legacy-provider后，HBuilderX启动时失去响应的Bug
* 修复 未登录时点击菜单【发行 原生APP-查看云打包状态】闪退的Bug
* 修复 Wap2App项目，提交打包，某些情况下，生成的App样式不正确的Bug
* 修复 uniCloud项目 node_modules文件特别多时，运行项目，Node进程CPU占用率过高的Bug
* 【uni-app插件】
  + App平台 新增 uni.openAppAuthorizeSetting 跳转系统授权管理页 [详情](https://uniapp.dcloud.io/api/system/openappauthorizesetting.html)
  + App-iOS平台 修复 https 请求配置自签名 p12 证书包含中间证书时请求报错的Bug [详情](https://ask.dcloud.net.cn/question/149526)
  + App-iOS平台 修复 nvue box-shadow 样式设置 spread 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/148415)
* 【uniCloud插件】
  + 新增 uni-admin uni统计支持上传 sourceMap，报错可准确回溯源码 [详情](https://uniapp.dcloud.io/uni-stat-v2.html#sourcemap-parse-error)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.480.1350 版，iOS为 4.13.80 版；快手广告SDK iOS为 3.3.27 版；今日头条穿山甲SDK iOS为 4.7.0.0 版；穿山甲GroMore广告SDK iOS为 3.5.1.0 版；Sigmob广告联盟SDK iOS为 4.2.1 版
  + Android平台 更新 UniPush 使用的个推SDK为 3.2.11.0 版，个推核心组件SDK为 3.1.9.0 版；谷歌渠道个推SDK为 3.2.10.8 版，个推核心组件SDK为 3.1.9.10 版；解决安全检测可能报个推SDK超频获取信息的问题 [详情](https://ask.dcloud.net.cn/question/149127)
  + Android平台 修复 上架某些应用市场审核检测可能报应用后台运行时存在获取任务列表行为的Bug
  + iOS平台 修复 3.5.0版本引出的 创建本地消息 plus.push.createMessage 不传 option 参数引起应用崩溃的Bug
  + iOS平台 修复 sqlite 在应用 restart 后 executeSql 修改数据报`Attempt to write a readonly database`错误的Bug [详情](https://ask.dcloud.net.cn/question/139765)
  + iOS平台 修复 从本地相册中选择慢动作视频引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/149219)
  + iOS平台 修复 视频播放 video 的 seek 方法传入小于当前播放时间值无效的Bug [详情](https://ask.dcloud.net.cn/question/148781)
  + iOS平台 修复 打开包含视频播放 video 控件的页面会打断其他App后台音乐播放的Bug [详情](https://ask.dcloud.net.cn/question/146719)
* 【uni小程序SDK】
  + iOS平台 修复 未开启后台运行，多次切换小程序和原生界面可能导致小程序返回按钮无效的Bug

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
* 【uni-app插件】
  + App平台 新增 uni.getSystemSetting 获取手机系统的定位、蓝牙、wifi开关等设置 [详情](https://uniapp.dcloud.io/api/system/getsystemsetting)
  + App平台 新增 uni.getAppAuthorizeSetting 获取应用权限状态，是否被授予定位、相册等权限 [详情](https://uniapp.dcloud.io/api/system/getappauthorizesetting)
  + App平台 新增 uni.createPushMessage 创建本地通知栏消息 [详情](https://uniapp.dcloud.io/api/plugins/push.html#createpushmessage)
  + App平台 修复 vue3 项目 首次启动调用 uni.getPushClientId 获取不到cid的Bug
  + App平台 修复 vue2 项目 nvue 页面访问 process.env 报错的Bug [详情](https://ask.dcloud.net.cn/question/147948)
  + App、Web平台 修复 vue3 项目 uni.openLocation 未配置 latitude longitude 时不触发 fail 回调的Bug
  + App-Android平台 修复 nvue map 组件放大地图时标记点气泡 callout 不显示的Bug [详情](https://ask.dcloud.net.cn/question/148741)
  + App-iOS平台 修复 nvue image 组件 src 属性更新使用 gif 格式图片时无法切换的Bug [详情](https://ask.dcloud.net.cn/question/148807)
  + App-iOS平台 修复 nvue 组件动态修改 border-radius 样式可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/144709)
  + 百度小程序平台 修复 vue3 项目 uni.login 失效的Bug [详情](https://ask.dcloud.net.cn/question/117304)
* 【uniCloud插件】
  + 【重要】新增 JQL Cache Redis。将 MongoDB 查询结果缓存到 Redis [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-cache-redis.html)
  + 新增 云对象支持URL化 [详情](https://uniapp.dcloud.net.cn/uniCloud/http.html#cloudobject)
  + 新增 云对象支持定时触发 [详情](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#cloudobject)
  + 新增 uniCloud web控制台支持对服务空间进行成员管理 [详情](https://uniapp.dcloud.io/uniCloud/concepts/space.html#collaboration)
  + 修复 JQL操作成功时新增返回`errCode: 0`，兼容uniCloud响应体规范
  + 调整 uni-id-common 仍将token存储在用户表的token字段内，与旧版本uni-id保持一致
  + 修复 uni-id-common 部分情况下报read property 'reduce' of undefined的Bug
  + 优化 uni-admin 应用管理模块可管理App下载地址、小程序二维码等更多应用信息 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#app-manager)
  + 调整 uni-admin 内置 统一发布页（uni-portal）插件 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#uni-portal)
  + 调整 uni-admin 内置 App升级中心（uni-upgrade-center）插件，并支持多应用商店更新 [详情](https://uniapp.dcloud.io/uniCloud/admin.html#uni-upgrade-center)
  + 新增 uni-id-pages 允许覆盖uni-id-co内置校验规则 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#custom-validator)
  + 修复 uni-id-pages uni-id-co的logout接口时没有删除token的Bug
  + 修复 uni-id-pages app端 clientInfo.appVersionCode 为数字导致 uni-id-co 校验无法通过的Bug
  + 修复 uni-id-pages 微信小程序调用uni-id-co接口报错的Bug [详情](https://ask.dcloud.net.cn/question/148877)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 支持穿山甲GroMore广告 包括开屏、信息流、插屏、全屏视频、激励视频广告
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.472.1342 版；快手广告SDK Android为 3.3.27 版，iOS为 3.3.26 版；快手内容联盟SDK Android为 3.3.30 版；百度百青藤广告SDK Android为 9.223 版，iOS为 4.883 版；Sigmob广告联盟SDK Android为 4.4.0 版；华为广告SDK Android为 13.4.54.300 版
  + iOS平台 修复 3.5.0版本引出的 plus.runtime.restart 重启应用后页面返回按钮失效的Bug
  + iOS平台 修复 3.5.0版本引出的 uni-AD 开通基础广告首次安装可能卡在启动页面的Bug [详情](https://ask.dcloud.net.cn/question/149192)
  + iOS平台 修复 plus.runtime.openWeb 在 iOS15.4 及以上设备打开页面导航栏显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/148585)
  + iOS平台 修复 标题栏 titleNView 更新按钮样式导致布局错位的Bug [详情](https://ask.dcloud.net.cn/question/148542)
  + iOS平台 修复 plus.navigator.getOrientation 在设备横屏状态时返回值不正确的Bug [详情](https://ask.dcloud.net.cn/question/148843)
  + iOS平台 修复 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
* 【Uni小程序SDK】
  + iOS平台 修复 偶现内存泄漏可能引起应用崩溃的Bug
  + iOS平台 修复 直达二级页面后再打开此页面，关闭时会直接返回首页的Bug

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
* 【uni-app插件】
  + 修复 vue3 项目 编译器清空输出目录可能报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3650)
  + App、Web平台 优化 movable-view 组件触摸过程中支持设置 disabled 属性 [详情](https://github.com/dcloudio/uni-app/issues/2384)
  + App平台 修复 map 组件在部分设备显示黑色边框的Bug [详情](https://ask.dcloud.net.cn/question/145449)
  + App平台 修复 vue3 项目 input 绑定动态 type 报错的Bug
  + App平台 修复 vue3 项目 nvue 页面组件插槽样式可能不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3632)
  + App平台 修复 vue3 项目 vue 页面在 iOS 平台内存不足导致白屏未自动恢复的Bug [详情](https://ask.dcloud.net.cn/article/35913)
  + App平台 修复 vue3 项目 nvue 页面 webview 组件 onPostMessage 事件无效的Bug [详情](https://ask.dcloud.net.cn/question/144731)
  + App-Android平台 修复 nvue 页面为首页时在部分特定手机启动界面关闭过慢的Bug
  + App-Android平台 修复 nvue image 组件在部分设备可能报空指针错误的Bug [详情](https://ask.dcloud.net.cn/question/147965)
  + App-iOS平台 优化 IAP 支付逻辑 补充手动关闭订单策略，解决自动关单但后续报错可能造成丢单的Bug [详情](https://uniapp.dcloud.net.cn/api/plugins/payment.html#iap)
  + App-iOS平台 修复 uni.getSystemInfo 获取某些设备型号不正确的Bug [详情](https://ask.dcloud.net.cn/question/148344)
  + App-iOS平台 修复 动态设置 tabBar 隐藏再显示后高斯模糊效果失效的Bug [详情](https://ask.dcloud.net.cn/question/146478)
  + App-iOS平台 修复 nvue bindingx 在滚动视图中使用 transform.translateY 结果有偏差的Bug [详情](https://ask.dcloud.net.cn/question/144209)
  + App-iOS平台 修复 nvue input 组件嵌套在 list 中时，页面上下滑动 v-model 绑定的值会置空的Bug [详情](https://ask.dcloud.net.cn/question/146246)
  + App-iOS平台 修复 nvue textarea 组件设置 auto-height 为 true 时初始高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/146688)
  + Web平台 补齐 vue2 项目支持 uni.getLaunchOptionsSync [详情](https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html)
  + Web平台 补齐 vue2 项目支持 uni.getEnterOptionsSync [详情](https://uniapp.dcloud.net.cn/api/getEnterOptionsSync.html)
  + Web平台 优化 hover-class 支持鼠标事件
  + Web平台 优化 map 组件 markertap 事件支持返回坐标信息
  + Web平台 修复 map 组件 tap 事件重复触发的Bug
  + 小程序平台 优化 vue2 项目 slot name 支持动态赋值 [详情](https://ask.dcloud.net.cn/question/82506)
  + 小程序平台 修复 vue3 项目部分情况下，编译后组件 js 文件名不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3629)
  + 小程序平台 修复 vue3 项目部分情况下，数据更新后，页面未渲染的Bug [详情](https://github.com/dcloudio/uni-app/issues/3648)
  + 小程序平台 修复 vue2 项目命名插槽使用 v-if 编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/2635)
  + 微信小程序、支付宝小程序平台 新增 vue3 项目 manifest.json 支持 mergeVirtualHostAttributes 配置，用于合并虚拟节点外部样式 [详情](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + 百度小程序、字节小程序平台 修复 vue3 项目 部分情况下，组件 ref 获取不到的Bug [详情](https://github.com/dcloudio/uni-app/issues/3615)
  + 百度小程序、字节小程序平台 修复 vue3 项目 组件事件名包含`-`或`:`时，无法触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3616)
  + 微信小程序平台 修复 vue3 项目 input 组件动态 type 在 iOS 平台不生效的Bug [详情](https://ask.dcloud.net.cn/question/147787)
  + 微信小程序平台 修复 vue3 项目 微信开发者工具中配置编译模式丢失的Bug [详情](https://github.com/dcloudio/uni-app/issues/3655)
  + 微信小程序平台 修复 vue3 项目 project.config.json 更新可能导致开发者工具报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3524)
  + 百度小程序平台 修复 vue3 项目 事件触发可能混乱的Bug[详情](https://github.com/dcloudio/uni-app/issues/3647)
  + 字节小程序平台 修复 vue3 项目 部分情况下，组件未更新的Bug [详情](https://github.com/dcloudio/uni-app/issues/3625)
* 【uniCloud插件】
  + 【重要】新增 uni-push2.0 全端支持（App、小程序、web）的云端一体的统一推送服务 [详情](https://uniapp.dcloud.io/unipush-v2.html)
  + 新增 腾讯云平台 数据万象，对云存储文件进行图片缩放、增加水印等计算功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage.html#%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86)
  + 新增 keepRunningAfterReturn 配置云函数是否能在 return 后继续运行，仅腾讯云 nodejs12 生效 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#keep-running)
  + 新增 Redis扩展库 增加 quit 接口用于断开 redis 连接 [详情](https://uniapp.dcloud.net.cn/uniCloud/redis.html#quit)
  + 新增 JQL数据库管理 支持使用更新操作符 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#update-command)
  + 修复 uniIdRouter 在 loginPage 为 tabbar 页面时无法自动跳转的Bug
  + 调整 云函数 context 内增加 `uniIdToken`、`FUNCTION_TYPE` [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-callfunction.html#context)
  + 调整 云对象 cloudInfo 内增加 functionName、functionType [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-cloud-info)
  + 调整 云对象 clientInfo 内增加 source [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + 修复 本地调试插件 使用运行菜单运行云函数时可能出现日志顺序错误的Bug
  + 修复 本地调试插件 项目AppId由无权使用调整为有权使用时（重新获取AppId或获得所有者授权）重启项目不生效的Bug
  + 调整 本地调试插件 云函数本地运行时配置的运行参数clientInfo内字段调整 [详情](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#mock-client-info)
  + 新增 HBuilderX opendb schema文件 右键菜单增加【opendb检查更新】，支持从云端更新 opendb schema文件，并生成 JQL 升级迁移文件用于数据迁移
  + 修复 HBuilderX 打开云对象子目录下的文件时按 Ctrl+r 运行菜单无运行云对象选项的Bug
  + 【重要】调整 uni统计2 版本记录复用 uni升级中心 的 opendb-app-versions表，废弃 uni-stat-app-versions表 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html#upgrade)
  + uni统计2 新增 启动时上报设备各种参数入库 opendb-device 表（目前没有可视化报表，开通 uni-push2.0 与 uni统计2.0 自动上报 push_clientid 到 opendb-device表）
  + uni统计2 新增 admin端 app崩溃统计页面，补充崩溃率统计
  + uni统计2 修复 admin端 js报错统计页面，错误率计算不准确的Bug
  + uni统计2 修复 admin端 切换版本或者修改时间等操作后，趋势图状态显示不正确的Bug
  + uni统计2 修复 admin端 部分页面首次进入时界面闪烁的问题
* 【App插件(含5+App和uni-app的App端)】
  + 优化 uni-AD 激励视频和信息流广告支持并发请求
  + Android平台 新增 Google Pay 支持配置支付网关信息 buildTokenizationSpecification [详情](https://uniapp.dcloud.io/tutorial/app-payment-google.html#%E4%BD%BF%E7%94%A8google%E6%94%AF%E4%BB%98)
  + Android平台 更新 腾讯X5内核为 4.3.0.299 版
  + Android平台 新增 Facebook 登录 SDK 为 12.0.0 版，解决登录受限的问题 [详情](https://ask.dcloud.net.cn/question/147788)
  + Android平台 修复 3.5.0 版本引出的 uni-AD 特定情况可能只展示同一广告源广告的Bug
  + Android平台 修复 uploader 上传文件请求返回错误响应码时，无法获取服务器返回数据的Bug
  + Android平台 修复 setBadgeNumber 设置角标在新荣耀设备不生效的Bug [详情](https://ask.dcloud.net.cn/question/140910)
  + iOS平台 新增 IAP支付 手动关闭订单、获取未关闭订单列表等功能，以解决自动关闭订单在某些情况引发的订单丢失的Bug [详情](https://uniapp.dcloud.io/tutorial/app-payment-aip.html)
  + iOS平台 修复 3.5.0 版本引出的 uni-AD 穿山甲开屏广告偶现 bottomView 没有关闭的Bug
  + iOS平台 修复 首次启动 App 获取安全区域高度可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/148277)
  + iOS平台 修复 设备型号名称 model、deviceModel 返回值不规范的Bug
* 【Uni小程序SDK】
  + Android平台 修复 getAppRuningForAppid 在部分场景可能报空指针错误的Bug
  + iOS平台 修复 小程序未开启后台运行，前台运行时调用 open 方法直达页面无效的Bug

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
* 【uni-app插件】
  + 新增 App-Android平台 manifest.json 支持最低要求 webview 配置，系统 webview 低于指定版本时，弹出提示或者下载 x5 内核后继续启动 [详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
  + 新增 vue2项目 支持使用 `@/pages.json` 引用条件编译后的 `pages.json` 文件
  + 修复 3.4.17 版本引发的 vue3 项目 运行在小程序平台 `<script setup>`中使用 const 定义 reactive 对象访问出错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3606)
  + App、Web平台 修复 3.4.10 版本引出的 vue2项目 image 组件 load 事件图像大小信息不准确的Bug [详情](https://ask.dcloud.net.cn/question/147174)
  + App平台 优化 slot name 支持动态赋值 [详情](https://ask.dcloud.net.cn/question/95109)
  + App-Android平台 修复 tabbar 启用高斯模糊后获取 windowBottom 错误的Bug [详情](https://ask.dcloud.net.cn/question/146583)
  + App-iOS平台 修复 uni.request 访问特定接口可能数据解析出现乱码的Bug [详情](https://ask.dcloud.net.cn/question/145530)
  + 微信小程序、支付宝小程序 新增 vue2 项目 manifest.json 支持 mergeVirtualHostAttributes 配置，用于合并虚拟节点外部样式 [详情](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + 百度小程序平台 修复 vue3 项目 组件嵌套使用时响应式可能失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3612)
* 【uniCloud插件】
  + 【重要】uni-id重构。`uni-id公共模块` + `uni-id-cf云函数` 的组合不再更新，取而代之的是 `uni-id-common公共模块` + `uni-id-pages云端一体模板`
    - 新增 uni-id-common公共模块。更小巧的公共模块，负责 uni-id 的 token 管理和权限校验 [详情](https://uniapp.dcloud.io/uniCloud/uni-id-common.html)
    - 新增 uni-id-pages云端一体页面模板。包括一组前端页面 + uni-id-co云对象。包括用户注册、登录、忘记密码、个人中心等功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
  + 新增 uniIdRouter路由管理。在 pages.json 里直接定义哪些页面需要登录后才能访问 [详情](https://uniapp.dcloud.io/uniCloud/uni-id-summary.html#uni-id-router)
  + 新增 uniCloud.onNeedLogin/offNeedLogin 用于监听/移除监听需要登录事件，需搭配 `uniIdRouter` 使用 [详情](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-need-login)
  + 新增 uniCloud.onRefreshToken/offRefreshToken 用于监听/移除监听 token 更新事件 [详情](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-refresh-token)
  + 调整 HBuilderX 中创建 uniCloud 项目时默认导入 `uni-id-common公共模块`，不再导入老版 `uni-id公共模块`
  + 调整 clientDB 优先依赖 `uni-id-common`，在没有 `uni-id-common` 时依赖老版 `uni-id公共模块`
  + 修复 本地调试插件 HBuilderX 3.4.12引出的运行项目时部分场景下访问非关联服务空间云函数报错的Bug
  + 修复 本地调试插件 部分app平台、web平台切换云端云函数/本地云函数无效的Bug [详情](https://ask.dcloud.net.cn/question/147633)
  + 修复 clientDB action 的 after 内抛出错误不能被另一个 action 的 after 接收到的Bug [详情](https://ask.dcloud.net.cn/question/147099)
  + 修复 项目内无 uni-id 时运行 jql 文件报错的Bug
  + uniCloud控制台 新增 Redis 数据可视化管理
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】uni-AD 新增 激励视频广告支持实时竞价 [详情](https://uniapp.dcloud.io/uni-ad.html#bidding)
  + Android平台 更新 云端打包环境 Gradle 为 7.3.3，Android Gradle plugin 为 4.2.0，compileSdkVersion 为 31
  + Android平台 新增 云端打包支持设置 dataBinding、viewBinding [文档](https://uniapp.dcloud.io/collocation/manifest.html#buildfeatures)
  + Android平台 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备在 Android12 设备可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/146849)
  + Android平台 修复 UniPush 存在监听`ACTION_BOOT_COMPLETED`广播行为，可能违反应用市场上架合规检测问题 [详情](https://ask.dcloud.net.cn/question/147319)
  + Android平台 修复 UniPush 调用 plus.runtime.restart 后无法创建本地通知消息的Bug [详情](https://ask.dcloud.net.cn/question/146470)
  + Android平台 修复 从本地相册选择大图片预览时可能引起应用崩溃的Bug
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK为 4.5.1.6 版
  + iOS平台 更新 百度定位SDK为 2.0.0 版，百度地图SDK为 6.5.0 版
  + iOS平台 修复 5+App项目获取 5G 网络类型错误的Bug
* 【Uni小程序SDK】
  + Android平台 修复 启动小程序直达页面参数与文档规范不一致的Bug

## 3.4.17.20220614-alpha
* 修复 Windows 终端开启时，工具栏搜索分类，鼠标移动上去后，悬停列表自动消失的Bug [详情](https://ask.dcloud.net.cn/question/146695)
* 修复 App 原生App-云打包 某些情况下，点击打包没有提交到云端打包的bug
* 修复 uniCloud 前端网页托管 上传网站到服务器，非项目成员进行上传操作，编辑器闪退的Bug
* 【uni-app插件】
  + 修复 vue3 项目 onError 生命周期不生效的Bug
  + App、Web平台 修复 vue3 项目 uni.setTabBarItem 设置 pagePath 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3592)
  + App平台 优化 video 组件支持 show-mute-btn 配置
  + App平台 优化 vue3 项目 rich-text 组件支持服务端渲染
  + App平台 修复 3.4.10 版本引出的 scopeId 污染 slot 导致样式异常的Bug [详情](https://ask.dcloud.net.cn/question/145366)
  + App平台 修复 调试时调用 uni.getSystemInfo 报错的Bug [详情](https://ask.dcloud.net.cn/question/146611)
  + App平台 修复 vue3 项目 Windows 系统上，运行至手机或模拟器时，可能多次同步文件的Bug
  + App平台 修复 vue3 项目 nvue 页面 onPageScroll，onReachBottom 不触发的Bug [详情](https://ask.dcloud.net.cn/question/145873)
  + App平台 修复 vue3 项目 uni.getVideoInfo 成功回调不执行Bug
  + App-Android平台 修复 nvue web-view 组件 user-agent 不正确导致加载H5页面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/146877)
  + App-Android平台 修复 nvue 组件同时设置 box-shadow、elevation 样式在部分特殊场景可能会出现渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/147041)
  + iOS平台 修复 nvue ad-content-page 组件暂停后展示其它视频类广告，关闭广告可能引起组件后台自动播放的Bug
  + Web平台 修复 vue3 项目 pc端 createSelectorQuery 获取 top 错误Bug
  + 小程序平台 修复 vue3 项目 v-for 嵌套使用 slot 时，渲染不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3587)
  + 微信小程序平台 修复 3.4.13 版本引出的 manifest.json 文件缺少 mp-weixin 节点编译报错的Bug [详情](https://ask.dcloud.net.cn/question/146580)
* 【uniCloud插件】
  + 修复 本地调试插件 3.4.0版本引出的客户端连接本地云函数时获取客户端 userAgent 为`HBuilderX`的Bug
  + 修复 本地调试插件 云函数内使用`console.timeEnd`输出日志错乱的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 开屏广告在部分小米手机可能会卡在启动界面的Bug
  + iOS平台 更新 uni-AD 快手广告SDK为 3.3.25 版，快手内容联盟SDK为 3.3.29 版，解决调用系统相册可能引起崩溃的问题

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
* 【uni-app插件】
  + App、H5平台 新增 uni.getDeviceInfo [详情](https://uniapp.dcloud.io/api/system/getDeviceInfo.html)
  + App、H5平台 新增 uni.getAppBaseInfo [详情](https://uniapp.dcloud.io/api/system/getAppBaseInfo.html)
  + App、H5平台 新增 uni.getWindowInfo [详情](https://uniapp.dcloud.io/api/system/getWindowInfo.html)
  + App、H5平台 新增 uni.getSystemInfo 添加 devicePixelRatio、deviceOrientation、appLanguage 等字段 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + App、H5平台 修复 uni.canIUse 获取某些 api 使用情况，值不正确的Bug [详情](https://uniapp.dcloud.io/api/caniuse.html)
  + App平台 新增 uni.getSystemInfo 添加 romName、romVersion 字段 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + App平台 修复 3.4.10 版本引出的 view 组件使用 wxs/renderjs 报错的Bug
  + App-Android平台 修复 使用谷歌地图时，mapContext 对象调用 moveAlong 移动 marker 动画过程中拖拽地图会产生偏移的Bug
  + App-Android平台 修复 nvue view 组件 hover-class 属性动态改变组件大小时无效的Bug [详情](https://ask.dcloud.net.cn/question/145677)
  + App-iOS平台 修复 nvue 页面滚动视图中设置 position 属性为 sticky 样式显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/144303)
  + H5平台 修复 vue3 项目 当 App.vue 使用 setup 时，发行后页面空白的Bug [详情](https://ask.dcloud.net.cn/question/146011)
  + H5平台 修复 3.4.10 版本引发的 vue3 项目在 left/top/right window 页面使用 match-media 报错的Bug [详情](https://ask.dcloud.net.cn/question/146126)
  + 小程序平台 修复 uni.getLocale 获取值不统一的Bug [详情](https://uniapp.dcloud.io/api/ui/locale.html)
  + 微信小程序平台 修复 vue3 项目 ad-custom 组件无法使用的Bug [详情](https://ask.dcloud.net.cn/question/145883)
* 【uniCloud插件】
  + 新增 uniCloud.onResponse/offResponse 接口用于监听云函数、云对象及clientDB的响应结果 [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk.html#on-response)
  + 新增 uniCloud响应体规范 添加 newToken 字段，用于token续期。云对象会自动将token持久化存储 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)
  + 修复 uniCloud虚拟目录、以及uni_modules下的云对象目录，右键菜单，没有运行-本地云对象、调试运行-本地云对象的菜单的Bug
  + uniCloud控制台 新增 腾讯云云存储支持上传文件夹
  + uni-admin 新增 uni统计 可通过选择「应用版本」查询数据
  + uni-admin 新增 uni统计 原生 app 崩溃页部分功能
  + uni-admin 修复 uni统计 渠道页 table 表格最后一列空白的 bug
  + uni-admin 修复 uni统计 场景分析页趋势图有数据却显示为 0 的 bug
  + uni-admin 修复 系统设置中权限只能加载 20 条的 bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 新增 原生隐私政策提示框支持 hrefLoader 属性，配置提示框中点击 href 链接的打开方式 [详情](https://uniapp.dcloud.io/tutorial/app-privacy-android)
  + Android平台 修复 uni-AD 腾讯优量汇广告联盟部分下载类广告下载成功之后无法安装的Bug
  + iOS平台 更新 一键登录 使用的个验SDK为 2.2.0.0 版，个推核心组件SDK为 1.2.7.0 版
  + iOS平台 修复 音频播放 audio 设置 startTime 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/146028)
  + iOS平台 修复 视频播放 video 播放 rtmp 协议直播流视频时声音只能通过扬声器播放的Bug [详情](https://ask.dcloud.net.cn/question/129703)
  + iOS平台 修复 视频播放 video 播放 rtmp/rtsp 协议视频时 timeupdate 事件返回当前播放时间 currentTime 始终为 0 的Bug
* 【Uni小程序SDK】
  + Android平台 修复 小程序应用资源更新可能引起页面卡顿的Bug
  + iOS平台 修复 存在自定义 UIWindow 时 toast 可能无法显示的Bug

## 3.4.12.20220523-alpha
* 修复 3.4.10 引出的 项目管理器 项目名称后面没有显示Git分支信息的Bug [详情](https://ask.dcloud.net.cn/question/145569)
* 修复 5+App、wap2App项目 制作应用wgt包失败的Bug
* 【uniCloud插件】
  + 修复 HBuilderX 3.4.10 引起的关联服务空间运行云函数错误的Bug [详情](https://ask.dcloud.net.cn/question/145551)

## 3.4.11.20220520-alpha
* 优化 HBuilderX 启动速度
* 修复 3.4.10引出的 欢迎页面 状态栏选择语言后出现崩溃的Bug
* 修复 3.4.10引出的 php文件 代码没有着色的Bug
* 新增 uniCloud 新建DB Schema 模板列表 支持搜索
* 【uni-app插件】
  + App平台 修复 nvue 页面 switch 组件切换状态无限闪动的Bug [详情](https://ask.dcloud.net.cn/question/145272)
  + App平台 修复 纯 nvue 编译模式 uni_modules 内静态资源未拷贝的Bug
  + App-iOS平台 修复 vue3 项目 nvue 页面 swiper 组件面板指示点无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/145097)
  + H5平台 新增 vue3 项目 unicloud-db 组件属性 ssr-key [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db.html#ssrkey)
  + H5平台 修复 vue3 项目 unicloud-db 组件 使用 ssr 时 页面存在2个以上组件时数据显示错乱的Bug [详情](https://ask.dcloud.net.cn/question/139537)
  + H5平台 修复 3.4.10 版本引出的 vue2 项目启用摇树优化缺失 view 组件的Bug [详情](https://ask.dcloud.net.cn/question/145286)
  + 小程序平台 修复 vue3 项目 在模板中使用 wxs、sjs 插值表达式不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3527)
  + 支付宝小程序平台 修复 vue3 项目 全局组件不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3525)
  + 支付宝小程序平台 修复 vue3 项目 sjs 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3527)
* 【uniCloud插件】
  + uni-admin 优化 首页增加uni统计的设备概览、注册用户概览
  + uni-admin 优化 登录速度
  + uni-admin 修复 从「首页」跳转「概况」时，url 的 query 丢失的 bug  
  + uni-admin 修复 路由改变后面包屑未响应的 bug
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 今日头条穿山甲SDK Android为 4.5.1.1 版；腾讯优量汇SDK iOS为 4.13.65 版；快手广告SDK Android为 3.3.24 版，iOS为 3.3.24 版；百度百青藤广告SDK Android为 9.212 版，iOS为 4.87 版；Sigmob广告联盟SDK Android为 3.5.9 版

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
* 【uni-app插件】
  + 【重要】新增 uni统计2.0版本发布，开源、私有部署、易定制 [详情](https://uniapp.dcloud.net.cn/uni-stat-v2.html)
  + 【重要】uniAD 支持微信小程序平台，降低开通流量主门槛 [详情](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + 【重要】App平台 优化 vue2 项目 view 组件实现方式，提高渲染性能。建议相关开发者升级
  + 新增 uni.getSystemInfo 支持获取更多属性 [详情](https://uniapp.dcloud.io/api/system/info.html)
  + 优化 vue3 项目 兼容 pnpm@7.0.0
  + 修复 vue3 项目 部分情况下错误信息不准确的Bug
  + 修复 vue3 项目 vite.config.js 配置 build.minify 为 terser 不生效的Bug [详情](https://ask.dcloud.net.cn/question/144992)
  + App、H5平台 优化 image 组件减少网络请求
  + App、H5平台 修复 canvas transform 渲染时没有使用高清处理的Bug [详情](https://ask.dcloud.net.cn/question/144676)
  + App平台、微信小程序平台 新增 vue3 ad-rewarded-video 激励视频广告组件，更加易用 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + App平台、微信小程序平台 新增 vue3 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App平台 新增 vue3 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App平台 修复 vue3 项目使用录音时报错的Bug [详情](https://ask.dcloud.net.cn/question/144821)
  + App平台 修复 vue3 项目 纯 nvue 项目编译报错的Bug
  + App平台 修复 nvue 页面列表删除渲染卡顿的Bug [详情](https://ask.dcloud.net.cn/question/144110)
  + App平台 修复 nvue 页面 transition 包含多个属性时编译报错的Bug [详情](https://ask.dcloud.net.cn/question/89110)
  + App-Android平台 补齐 tabBar 和 navigationBar 支持高斯模糊效果 [详情](https://uniapp.dcloud.io/tutorial/app-blureffect)
  + H5平台 修复 rich-text 组件部分标签没有加上 scopeId 导致样式应用不上的Bug [详情](https://ask.dcloud.net.cn/question/144042)
  + H5平台 修复 vue3 项目使用 picker 组件报错的Bug [详情](https://ask.dcloud.net.cn/question/144073)
  + H5平台 修复 vue3 项目 当页面同时存在 vue、nvue 时，样式不正确的Bug [详情](https://ask.dcloud.net.cn/question/144687)
  + H5平台 修复 vue3 项目 App.vue 使用 setup 不生效的Bug [详情](https://ask.dcloud.net.cn/question/144672)
  + H5平台 修复 vue3 项目 使用 Vue.js devtools 查看页面状态不显示的Bug [详情](https://github.com/dcloudio/uni-app/issues/3492)
  + 小程序平台 修复 vue3 项目 部分情况下代码分割错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3491)
  + 微信小程序平台 调整 ad 广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad.html#weixin)
* 【uniCloud插件】
  + 新增 本地云函数调用云端redis，方便开发调试 [详情](https://uniapp.dcloud.net.cn/uniCloud/redis.html#lcoal-function)
  + 新增 uni-cloud-jql 扩展库 databaseForJQL 方法支持传递 clientInfo，以便于在云对象中使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-cloud.html#use-in-object)
  + 修复 本地运行插件 HBuilderX 3.4.8 引发的运行云函数时如未绑定服务空间会导致运行进程卡住的Bug
  + 修复 云对象 _before 内抛出错误后 _after 不执行的Bug [详情](https://ask.dcloud.net.cn/question/145046)
  + uni-id 调整 绑定、解绑邮箱手机号接口，只要传递 code 参数就进行验证码校验即使传递的值为undefined
  + uni-id 调整 用户表 `register_env` 内增加 `os_name` 字段用于区分注册时的客户端系统类型
  + uni-id 修复 addUser 接口添加的用户无法使用密码登录的Bug [详情](https://ask.dcloud.net.cn/question/144670)
  + uni-id 修复 config 文件语法错误时报`this.t is not a function`的Bug
  + uni-captcha 新增 集成：创建、刷新、显示验证码的云端一体组件 [详情](https://ext.dcloud.net.cn/plugin?id=4048)
  + uni-starter 新增 短信验证码登陆、绑定手机号码，防刷逻辑；当短信验证码输入错误超过2次，弹出图形验证码进行人机校验。[详情](https://ext.dcloud.net.cn/plugin?id=5057)
  + uni-admin 新增 uni统计数据报表功能 [详情](https://ext.dcloud.net.cn/plugin?id=3268)
* 【Uni小程序SDK】
  + Android平台 修复 多进程模式下微信分享过程中手动返回页面显示异常的Bug 
  + Android平台 修复 3.4.7版本引出的 宿主事件回调格式异常的Bug

## 3.4.9.20220508-alpha
* 修复 语言服务 uni-app pages.json easycom节点配置错误时，uview-ui没有代码提示的Bug
* 【uni-app插件】
  + uni统计 修复 3.4.8 版本引发的上报数据不正常的Bug [详情](https://ask.dcloud.net.cn/question/144408)
  + App-iOS平台 修复 nvue textarea 组件默认换行不生效的Bug [详情](https://ask.dcloud.net.cn/question/143784)
  + App-iOS平台 修复 nvue map 组件开启标记点聚合时，调用 removeMarkers 移除所有 marker 引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/143991)
* 【App插件(含5+App和uni-app的App端)】
  + 修复 音频播放 AudioPlayer 暂停后设置播放倍速大于 0 会自动触发播放的Bug [详情](https://ask.dcloud.net.cn/question/143757)
  + Android平台 修复 uni-AD 开屏广告开通腾讯优量汇可能引起应用启动白屏的Bug
  + iOS平台 修复 登录鉴权、分享的 authorize 方法传入认证参数 options 不生效的Bug
* 【uniCloud插件】
  + 【重要】调整 vue2版本客户端App平台对应的`context.PLATFORM`值由 `app-plus` 改为 `app`。此调整对 uni-id 有影响，详情请参考文档：[uni-id preferedAppPlatform](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#prefered-app-platform)
  + 修复 云对象 自动展示交互界面时未能显示 loading 标题的Bug [详情](https://ask.dcloud.net.cn/question/144526)
  + 调整 客户端将上报所有`getSystemInfoSync`返回的内容供云端使用，参考文档：[云函数内获取客户端信息](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#client-info)，[云对象内获取客户端信息](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + uni-id 新增 getWeixinUserInfo 用于获取app平台微信登录用户的用户信息 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#get-weixin-user-info)
  + uni-id 新增 addUser 用于手动添加用户 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#add-user)
  + uni-id 新增 resetPwdBySms 用于使用短信验证码重置密码 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#reset-pwd-by-sms)
  + uni-id 调整 用户注册时记录用户注册环境到 register_env 字段 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#user-table)
  + uni-id 调整 用户注册时将注册 ip 移至 register_env 内

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
* 【uni-app插件】
  + 新增 vue3 项目内置支持 pinia [详情](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)
  + 修复 3.4.6 版本引发的 vue3 项目使用 pinia 报错的Bug [详情](https://ask.dcloud.net.cn/question/143578)
  + 修复 3.4.6 版本引发的 vue3 项目部分情况编译变慢的Bug [详情](https://github.com/dcloudio/uni-app/issues/3458)
  + App平台、H5平台 修复 canvas 组件画图裁剪异常的Bug [详情](https://ask.dcloud.net.cn/question/142494)
  + App平台、微信小程序平台 新增 vue2 ad-rewarded-video 激励视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + App平台、微信小程序平台 新增 vue2 ad-fullscreen-video 全屏视频广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App平台、微信小程序平台 新增 vue2 ad-interstitial 插屏广告组件 [详情](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App平台 修复 vue3 nvue 页面引用的静态资源编译后可能不存在的Bug
  + App平台 修复 vue3 nvue 页面事件无法冒泡的Bug
  + App平台 修复 vue3 nvue input，textarea 组件的 v-model 不生效的Bug [详情](https://ask.dcloud.net.cn/question/143547)
  + App平台 修复 navigator 组件 animation-type、animation-duration 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/143377)
  + App平台 修复 vue3 nvue movable 组件使用异常的Bug [详情](https://ask.dcloud.net.cn/question/143742)  
  + App平台 修复 3.4.2 版本引发的 ArrayBuffer 类型判断错误的Bug [详情](https://ask.dcloud.net.cn/question/143534)
  + App-Android平台 修复 3.4.6版本 引出的 nvue 页面在部分设备可能出现渲染闪烁的Bug [详情](https://ask.dcloud.net.cn/question/143657)
  + App-Android平台 修复 3.4.6版本 引出的 nvue 页面 boxShadow 在部分情况下可能渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/143727)
  + App-Android平台 修复 bindingx 执行 getComputedStyle 方法返回异常的Bug [详情](https://ask.dcloud.net.cn/question/143697)
  + App-iOS平台 修复 nvue swiper 组件与页面返回手势冲突的Bug [详情](https://ask.dcloud.net.cn/question/137505)
  + H5平台 修复 vue3 项目 html 原生标签（如div）renderjs/wxs 事件监听无法获取 ownerInstance 的Bug [详情](https://github.com/dcloudio/uni-app/issues/3436)
  + H5平台 修复 vue3 项目运行到浏览器，本地服务端口校验可能报错的Bug [详情](https://ask.dcloud.net.cn/question/143504)
  + H5平台 修复 vue3 项目 map 组件 polyline、circles 颜色设置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3433)
  + 小程序平台 修复 vue3 项目当 style 样式值为数字，部分情况下丢失的Bug [详情](https://github.com/dcloudio/uni-app/issues/3456)
  + 小程序平台 修复 v-if 内连用多个逻辑表达式编译出错的Bug [详情](https://ask.dcloud.net.cn/question/129122)
  + 微信小程序平台 修复 vue3 项目当 input 事件函数返回 Promise 时，输入框显示错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3462)
  + 微信小程序平台 修复 uni.getSystemInfoSync() 获取的 safeAreaInsets.bottom 为负数的Bug [详情](https://ask.dcloud.net.cn/question/133479)
  + uni-ui 新增 uni-data-select 组件 [详情](https://ext.dcloud.net.cn/plugin?id=7993)
  + uni-ui 新增 uni-breadcrumb 组件 [详情](https://ext.dcloud.net.cn/plugin?id=7992)
  + uni-ui 新增 uni-tooltip 组件 [详情](https://ext.dcloud.net.cn/plugin?id=8020)
* 【uniCloud插件】
  + 修复 云对象 自动展示错误提示界面时 toast 图标错误的Bug [详情](https://ask.dcloud.net.cn/question/142246)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.462.1332 版，iOS为 4.13.63 版；今日头条穿山甲SDK iOS为 4.4.0.5 版；快手广告SDK Android为 3.3.23 版，iOS为 3.3.23 版；快手内容联盟SDK iOS为 3.3.28 版；百度百青藤广告SDK iOS为 4.861 版；Sigmob广告联盟SDK iOS为 4.1.0 版
  + Android平台 更新 高德地图SDK为 9.2.0 版， 解决在部分设备使用地图引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/143573)
  + Android平台 修复 uni-AD 离线打包开通开屏广告可能引起应用崩溃的Bug
  + iOS平台 修复 3.4.6版本 引出的 获取底部安全区域高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/143633)
* 【Uni小程序SDK】
  + iOS平台 修复 调用 closeWithCompletion 方法关闭小程序后紧接着在打开小程序可能引起崩溃的Bug

## 3.4.6.20220416-alpha
* 修复 语言服务 uni-app，vue文件，class转到定义，无法转到在App.vue @import引入的公共css文件的Bug
* 修复 语言服务 html文件，引用外部的css文件，当文件地址带有?时，css选择器无法转到定义的Bug
* 修复 语言服务 vue3 API，defineProps、defineExpose，无法提示数据类型的Bug
* 优化 语言服务 vue3，style节点，支持提示:deep、:global
* 修复 语言服务 ts文件，无法提示代码块的Bug
* 调整 markdown一键分享 生成的html文件 调整代码区代码着色
* 修复 3.4.5引出的 当一个文件存在多种换行符时，eslint自动修复替换出错的Bug
* 修复 3.4.0引出的 uni-app 运行 控制台右键菜单点击停止运行，不起作用的Bug
* 【uni-app插件】
  + 优化 vue3 项目 支持导出 onSaveExitState 生命周期 [详情](https://github.com/dcloudio/uni-app/issues/3427) 
  + 修复 vue3 项目 错误信息行号可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/143075)
  + App平台 修复 vue3 项目 nvue map 组件部分属性无效的Bug [详情](https://ask.dcloud.net.cn/question/142159)
  + App平台 修复 InnerAudioContext 某些情况下 paused 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
  + App平台 修复 vue3 项目使用 vue-i18n 运行报错的Bug [详情](https://ask.dcloud.net.cn/question/142911)
  + App平台 修复 vue3 项目 renderjs 在低版本手机可能运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3366)
  + App-Android平台 修复 uni.saveImageToPhotosAlbum 在部分手机可能无法正常保存到系统相册的Bug [详情](https://ask.dcloud.net.cn/question/143125)
  + App-Android平台 修复 uni.getScreenBrightness 获取屏幕亮度始终返回 -1 的Bug [详情](https://ask.dcloud.net.cn/question/142726)
  + App-Android平台 修复 nvue 页面调用 dom.scrollToElement 滚动到 list 组件指定元素位置可能无效的Bug [详情](https://ask.dcloud.net.cn/question/143035)
  + App-iOS平台 修复 video 不支持 enable-play-gesture 属性的Bug [详情](https://ask.dcloud.net.cn/question/141862)
  + App-iOS平台 修复 nvue input 组件 confirm-hold 属性默认值不正确的Bug
  + App-iOS平台 修复 nvue ad-content-page 显示位置可能偏移的Bug
  + H5平台 修复 input 组件启用 password 后在小米手机钉钉内置浏览器无法弹出键盘的Bug [详情](https://ask.dcloud.net.cn/question/142834)
  + 小程序平台 修复 vue3 项目 pages.json 配置国际化信息显示错误的Bug
  + 小程序平台 修复 vue3 项目在 Windows 系统上生成的依赖文件可能错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3425)
  + QQ小程序平台 修复 vue3 项目部分情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3419)
  + 微信小程序平台 修复 vue3 项目发行为混合分包运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3416)
* 【uniCloud插件】
  + 【重要】阿里云 调整 单次数据库查询最大超时时间由1秒调整为3秒，需要重新上传云函数触发更新
  + 【重要】云对象 调整 默认自动显示请求相关ui（等待loading，错误弹框） [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#auto-ui)
  + JQL 修复 部分情况下过度限制了权限的Bug [详情](https://ask.dcloud.net.cn/question/142457)
  + 本地调试插件 修复 HBuilderX 2.4.5 版本引出的部分场景下访问本地云函数误报公共模块冲突的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 3.4.5版本 引出的 关闭页面动画异常的Bug [详情](https://ask.dcloud.net.cn/question/142797)
  + iOS平台 修复 音频播放 AudioPlayer 获取暂停状态不准确的Bug [详情](https://ask.dcloud.net.cn/question/141832)
  + iOS平台 修复 音频播放 AudioPlayer 暂停后再恢复播放倍速会重置为1的Bug [详情](https://ask.dcloud.net.cn/question/142848)
  + iOS平台 修复 视频播放控件 video 在刘海屏设备全屏播放时进度条可能无法拖动的Bug [详情](https://ask.dcloud.net.cn/question/141862)
  + iOS平台 修复 视频播放控件 video 设置 show-fullscreen-btn 属性为 false 时可能显示不正确的Bug
* 【Uni小程序SDK】
  + Android平台 新增 支持自定义实现获取匿名设备标识符OAID

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
* 【uni-app插件】
  + 优化 vue3 项目 支持 vitest 测试框架 [详情](https://github.com/dcloudio/uni-app/issues/3398)
  + 优化 vue3 项目 全平台支持使用 props 接收页面参数 [详情](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#url-search-params)
  + 修复 vue3 项目 App.vue 中的 provide 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3404)
  + App平台 新增 InnerAudioContext、BackgroundAudioManager 支持倍速播放
  + App平台 修复 vue3 项目 App.vue 中的 css 可能编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3403)
  + App平台 修复 uni.getEnv 在 nvue webview 中返回值不准确的Bug [详情](https://uniapp.dcloud.net.cn/component/web-view.html#getenv)
  + App-Android平台 修复 3.4.3版本 引出的 nvue 组件设置 box-shadow 后 border 可能显示异常的Bug
  + App-Android平台 修复 3.4.3版本 引出的 tabBar 设置 iconPath 且未设置 selectedIconPath 可能引起图标无法正常显示的Bug
  + App-Android平台 修复 nvue 页面 flex 布局在部分设备可能出现换行计算不正确的Bug
  + App-iOS平台 修复 在页面生命周期 onLoad 方法中调用 lockOrientation 锁定屏幕方向可能引起布局异常的Bug
  + App-iOS平台 修复 3.4.4版本 引出的 tabBar 图标显示错位的Bug [详情](https://ask.dcloud.net.cn/question/142685)
  + H5平台 修复 vue3 项目同时使用 style 节点和 style scoped 节点时，样式可能错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3410)
  + 小程序平台 优化 vue3 项目支持动态导入静态资源 [详情](https://github.com/dcloudio/uni-app/issues/3376)
  + 小程序平台 修复 vue3 项目 slot 在部分复杂情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3346)
  + 小程序平台 修复 vue2 项目 v-if 中同时包含成员表达式和逻辑表达式编译出错的Bug [详情](https://ask.dcloud.net.cn/question/142293)
  + 微信小程序平台 优化 uni.showActionSheet 支持 title 参数
  + 支付宝小程序平台 修复 vue3 项目部分情况下渲染错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3408)
* 【uniCloud插件】
  + 修复 3.4.4版本 引出的 clientDB 本地运行报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 腾讯优量汇插屏广告在 onLoad 回调中执行 show 可能引起广告无法正常显示的Bug
  + iOS平台 修复 安心打包使用 swift 开发的uni原生插件时上传 AppStore 报`ITMS-90426: Invalid Swift Support`错误的Bug [详情](https://ask.dcloud.net.cn/question/142611)
  + iOS平台 修复 在 iOS15.4 及以上设备系统时间设置为12小时制 pickDate 返回值异常的Bug [详情](https://ask.dcloud.net.cn/question/141906)

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
* 【uni-app插件】
  + App平台、H5平台 新增 input 组件配置 ignoreCompositionEvent 属性 [详情](https://uniapp.dcloud.io/component/input?id=input)
  + App平台 新增 tabbar 支持配置 iconfont [详情](https://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbaritem)
  + App平台 修复 vue2 nvue 页面文本首尾回车符占用高度的Bug [详情](https://ask.dcloud.net.cn/question/95429)
  + App平台 修复 vue3 项目 uni.getSavedFileList、uni.getSavedFileInfo、uni.removeSavedFile、uni.getFileInfo 无效的Bug  [详情](https://ask.dcloud.net.cn/question/142428)
  + App-Android平台 修复 nvue list 组件横向滚动不会触发 loadmore 事件的Bug
  + App-Android平台 修复 连续调用 uni.chooseImage 在部分手机可能引起应用闪退的Bug
  + App-Android平台 修复 3.4.3 引出的 tabBar 的列表项未设置 iconPath 会导致文字显示不全的Bug [详情](https://ask.dcloud.net.cn/question/142250)
  + App-iOS平台 修复 video 组件 vslide-gesture-in-fullscreen 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/138299)
  + App-iOS平台 修复 nvue image 组件不支持 gif 图片中设置循环次数参数的Bug [详情](https://ask.dcloud.net.cn/question/140176)
  + 小程序平台 修复 vue3 项目 v-model.number 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3381)
  + 小程序平台 修复 vue3 项目页面复杂时可能编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3397)
  + 微信小程序平台 修复 vue3 项目 input 事件 return 一个字符串没有同步到输入框的Bug [详情](https://github.com/dcloudio/uni-app/issues/3371)
  + 百度小程序平台 修复 vue3 项目 onInit 生命周期不触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3384)
  + 支付宝小程序平台 修复 vue2 项目插件内组件部分事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/142048)
  + 支付宝小程序平台 修复 vue3 项目 默认分享功能失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3377)
* 【uniCloud插件】
  + 修复 3.4.0版本引出的云函数子目录内文件引用公共模块失败的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 音频播放 AudioPlayer 支持 playbackRate 设置倍速播放 [文档](https://www.html5plus.org/doc/zh_cn/audio.html#plus.audio.AudioPlayer.playbackRate)
  + Android平台 更新 高德定位SDK为 6.0.1 版，高德地图SDK为 9.0.1 版；UniPush 使用的个推SDK为 3.2.9.0 版，小米厂商推送库SDK为 3.1.1 版；Google地图SDK为 18.0.2 版
  + Android平台 优化 二维码扫码检测到 QR 码时自动放大，提升扫码识别率 [详情](https://ask.dcloud.net.cn/question/142209)
  + 【重要】Android平台 修复 uni-AD 穿山甲广告联盟在部分设备可能提示`应用的uni-AD业务状态异常`的Bug
  + iOS平台 修复 视频播放控件 video 播放视频音量与系统音量不一致的Bug

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
* 【uni-app插件】
  + 【重要】App平台 nvue 页面支持 vue3（需要项目的 Vue 版本切换为3）[详情](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)
  + App平台、H5平台 新增 map 组件支持 polygons [详情](https://uniapp.dcloud.io/component/map)
  + App平台、小程序平台 修复 vue3 项目配置 base 后资源路径可能错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3362)
  + App平台 新增 打开微信客服功能 [详情](https://uniapp.dcloud.io/api/plugins/share.html)
  + App平台 修复 vue3 项目内联样式引用静态资源可能错误的Bug [详情](https://ask.dcloud.net.cn/question/141278)
  + App平台 新增 nvue ad-content-page 组件支持内容播放状态事件start、pause、resume、complete [规范](https://uniapp.dcloud.io/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + App-Android平台 优化 nvue 组件 box-shadow 渲染逻辑，解决在部分设备可能出现排版异常及闪烁的问题 [详情](https://uniapp.dcloud.io/tutorial/nvue-css.html#android-box-shadow)
  + App-Android平台 修复 nvue swiper 组件设置 circular 为 true 时首次启动可能先显示最后一项的Bug [详情](https://ask.dcloud.net.cn/question/140931)
  + App-Android平台 修复 nvue swiper 组件在特定环境下可能出现页面空白的Bug [详情](https://ask.dcloud.net.cn/question/140942)
  + App-iOS平台 修复 nvue swiper 组件内嵌 list-waterfall 时，横向滑动的同时列表还可以竖向滚动的Bug [详情](https://ask.dcloud.net.cn/question/134909)
  + App-iOS平台 修复 nvue 页面内存在可滚动子组件时，开启 enablePullDownRefresh 下拉刷新功能无效的Bug
  + App平台 修复 vue3 组件 picker-view 调整列数据时渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/140609)
  + H5平台 修复 vue3 项目配置 base 发行后资源路径可能错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3354)
  + 小程序平台 优化 vue3 项目自定义组件支持 v-bind="" 语法 [详情](https://github.com/dcloudio/uni-app/issues/3330)
  + QQ小程序平台 修复 vue3 项目 appid 配置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3339)
  + 字节跳动小程序平台 修复 vue3 项目部分情况下数据不响应的Bug [详情](https://github.com/dcloudio/uni-app/issues/3340)
  + 字节跳动小程序平台 修复 vue3 项目 options 方式配置 provide/inject 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3360)
  + 支付宝小程序平台 修复 vue3 项目分包页面事件响应不正常的Bug [详情](https://ask.dcloud.net.cn/question/140742)
* 【uniCloud插件】
  + 修复 公共模块右键管理依赖的公共模块不生效的Bug
  + 修复 修复本地运行云函数调用云对象报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + uni-AD 新增 百度百青藤广告联盟支持信息流广告
  + Android平台 更新 uni-AD 百度百青藤广告SDK 为 9.202 版
  + Android平台 修复 在部分设备识别国际化语言不正确的Bug [详情](https://ask.dcloud.net.cn/question/141688)
* 【Uni小程序SDK】
  + Android平台 修复 微信登录连续多次调用可能会导致失败的Bug
  + Android平台 修复 转场动画在 Android12 设备可能失效的Bug
  + Android平台 修复 调用 startActivityForUniMPTask 在 Android8 以下设备可能会引起应用崩溃的Bug

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
* 【uni-app插件】
  + App平台 新增 vue 页面支持 live-pusher 组件 [详情](https://uniapp.dcloud.net.cn/component/live-pusher)
  + App平台 修复 uni.request、uni.onSocketMessage 等接口返回的 ArrayBuffer 类型不可用 instanceof 做类型判断的Bug 
  + App平台 修复 vue3 项目 wxs/renderjs 监听事件运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3324)
  + App-Android平台 修复 nvue map组件使用高德地图时，频繁调用 addMarkers 增加聚合点可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/140461)
  + App-Android平台 修复 nvue map组件使用谷歌地图时，调用 moveAlong 移动 marker 可能出现偏移的Bug
  + App-iOS平台 补齐 uni-AD 支持 nvue ad-content-page组件 [文档](https://uniapp.dcloud.net.cn/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + App-iOS平台 修复 nvue 组件 userInteractionEnabled 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/140838)
  + App-iOS平台 修复 nvue refresh 组件 pullingdown 事件触发时机不正确的Bug [详情](https://ask.dcloud.net.cn/question/138962)
  + H5平台 修复 vue3 项目 wxs/renderjs 热刷新不生效的Bug [详情](https://ask.dcloud.net.cn/question/140800)
  + H5平台 修复 vue3 项目特定情况下拉刷新后页面跳转的Bug [详情](https://github.com/dcloudio/uni-app/issues/3326)
  + 小程序平台 修复 vue3 项目模板中 style 属性包含换行符时编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3320)
  + 支付宝小程序平台 优化 vue3 项目默认开启 es6=>es5 [详情](https://ask.dcloud.net.cn/question/140742)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 新增 Google支付支持 isReadyToPay 方法 [文档](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.PaymentChannel.isReadyToPay)

## 3.4.1.20220308-alpha
* 修复 3.4.0引出的 uni-app 新建页面，修改pages.json内容，导致编辑器闪退的Bug [详情](https://ask.dcloud.net.cn/question/140732)
* 【uni-app插件】
  + App平台 修复 uni.getBackgroundAudioManager 的 onPrev onNext 事件无效Bug [详情](https://ask.dcloud.net.cn/question/107325)
  + App平台 修复 3.4.0 引发的 vue2 项目 canvas 组件 fillText 失效的Bug [详情](https://ask.dcloud.net.cn/question/140786)
  + App平台 修复 3.4.0 引发的 vue2 项目 nvue 页面的 uni.createLivePusherContext 无效Bug [详情](https://ask.dcloud.net.cn/question/140743)
  + App平台 修复 vue3 项目 navigator 组件和 rich-text 组件嵌套使用时 scopeId 值不一致导致的样式Bug [详情](https://ask.dcloud.net.cn/question/140644)
  + App-iOS平台 修复 nvue map 组件 marker 的 joinCluster 为 false 时 removeMarkers 方法不生效的Bug [详情](https://ask.dcloud.net.cn/question/140648)
  + App-iOS平台 修复 nvue rich-text 组件 text-overflow 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/140586)
  + H5平台 修复 部分情况下 input 组件显示数值错误的Bug [详情](https://ask.dcloud.net.cn/question/140366)
  + 小程序平台 修复 vue3 项目部分情况下视图更新延迟的Bug [详情](https://github.com/dcloudio/uni-app/issues/3311)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 3.4.0 引出的 UniPush模块使用 Oppo 厂商通道时云端打包失败的Bug [详情](https://ask.dcloud.net.cn/question/140765)
* 【Uni小程序SDK】
  + iOS平台 修复 小程序SDK中设置 user-agent 影响宿主原生页面中 Webview 的Bug

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
* 【uni-app插件】 
  + 新增 vue2 项目支持发布到 京东小程序
  + 修复 vue3 项目兼容 vite@2.8.x [详情](https://ask.dcloud.net.cn/question/139311)
  + 修复 vue3 项目兼容 vite-plugin-eslint [详情](https://github.com/dcloudio/uni-app/issues/3247)
  + App平台、H5平台 优化 取消全局 canvas 高清处理，支持配置单个 canvas 组件 hidpi 属性
  + App平台、H5平台 修复 自定义组件监听 tap.native 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3259)
  + App平台、H5平台 修复 vue3 项目 uni.pageScrollTo 的 duration 为0时不生效的Bug [详情](https://ask.dcloud.net.cn/question/139432)
  + App平台、H5平台 修复 vue3 项目 input 组件类型为 number 时在低版本 webview 失去焦点时报错的Bug [详情](https://ask.dcloud.net.cn/question/138088)
  + App平台 新增 地图支持 Google地图 [详情](https://uniapp.dcloud.net.cn/app-maps)
  + App平台 新增 支付支持 Paypal、Stripe、Google Pay [详情](https://uniapp.dcloud.io/app-payment-paypal)
  + App平台 新增 登录支持 Google、Facebook [详情](https://uniapp.dcloud.io/api/plugins/login?id=app-oauth)
  + App平台 新增 vue 页面 video 组件支持 vslide-gesture、vslide-gesture-in-fullscreen 属性 [详情](https://uniapp.dcloud.io/component/video)
  + App平台 新增 pages.json 支持在 style 配置 disableSwipeBack 以禁用 iOS 侧滑返回
  + App平台 修复 uni.addPhoneContact 重复添加联系人的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I4NY6C)
  + App平台 修复 vue3 项目使用 html 原生标签（如div）时，事件监听报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3240)
  + App-Android平台 修复 nvue image 组件 mode 属性设置为 widthFix/HeightFix 时可能导致图片无法显示的Bug [详情](https://ask.dcloud.net.cn/question/139541)
  + App-Android平台 修复 nvue list 组件插入列表项可能引起页面闪烁的Bug [详情](https://ask.dcloud.net.cn/question/139424)
  + App-Android平台 修复 nvue web-view 组件 progress 颜色值不支持3位十六进制格式字符串的Bug [详情](https://ask.dcloud.net.cn/question/138670)
  + App-Android平台 修复 nvue web-view 组件 无法正常加载使用非受信任证书网页的Bug [详情](https://ask.dcloud.net.cn/question/134287)
  + App-Android平台 修复 nvue animation 动画切到后台可能无法执行的Bug [详情](https://ask.dcloud.net.cn/question/137868)
  + App-Android平台 修复 nvue map 组件 marker 设置 joinCluster 为 true 时导致 callouttap 事件不响应的Bug [详情](https://ask.dcloud.net.cn/question/136381)
  + App-Android平台 修复 nvue text 组件 font-style 设置 italic 在部分设备可能无效的Bug [详情](https://ask.dcloud.net.cn/question/120801)
  + App-Android平台 修复 nvue 页面切换可能导致 plus.key.addEventListener 监听 keydown 事件不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/140203)
  + App-iOS平台 修复 vue3 项目 调试时启动白屏的Bug
  + H5平台 优化 vue3 项目 navigator 组件使用 a 标签渲染以利于SEO
  + H5平台 修复 vue3 项目 html 中引入 static 目录的 js 文件包含 ifdef 编译报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3201)
  + H5平台 修复 vue3 项目 renderjs 发行后不正常的Bug [详情](https://ask.dcloud.net.cn/question/137832)
  + H5平台 修复 vue3 项目 dataset 不支持对象类型错误的Bug [详情](https://ask.dcloud.net.cn/question/139181)
  + H5平台 修复 vue3 项目 禁用摇树后，uni.showModal 等弹窗缺少样式的Bug [详情](https://ask.dcloud.net.cn/question/139593)
  + H5平台 修复 vue3 项目 热刷新编译报错的Bug [详情](https://ask.dcloud.net.cn/question/135765)
  + H5平台 修复 vue3 项目 text 组件使用 v-if 时显示错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/3225)
  + H5平台 修复 map 组件 marker 不能设置 id 为 0 的Bug
  + 小程序平台 修复 vue3 项目 uni.getSystemInfo 无法获取 deviceId 的Bug [详情](https://ask.dcloud.net.cn/question/139733)
  + 小程序平台 修复 vue3 项目 不支持 v-html 的Bug [详情](https://ask.dcloud.net.cn/question/138290)
  + 小程序平台 修复 vue3 项目 v-if 中使用 wxs 等模块时报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3199)
  + 小程序平台 修复 vue3 项目 defineEmits 事件名包含 - 分隔符时无法正常监听的Bug [详情](https://github.com/dcloudio/uni-app/issues/3210)
  + 小程序平台 修复 vue3 项目 setup 手动引入组件不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3213)
  + 小程序平台 修复 vue3 项目 v-for 嵌套使用时部分情况运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3263)
  + 小程序平台 修复 vue3 项目 wxs 调用 callMethod 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3218)
  + 小程序平台 修复 vue3 项目 全局组件路径解析错误的Bug [详情](https://ask.dcloud.net.cn/question/138662)
  + 小程序平台 修复 vue3 项目 全局 mixin 分享 onShareAppMessage，onShareTimeline 不生效的Bug [详情](https://ask.dcloud.net.cn/question/140351)
  + 微信小程序平台 修复 vue2 项目 v-for 遍历部分表达式时 stop 修饰符无效的Bug [详情](https://ask.dcloud.net.cn/question/138684)
  + 微信小程序平台 修复 vue3 项目 canvas 监听 touch 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3209)
  + 微信小程序平台 修复 vue3 项目部分情况下事件监听错乱的Bug [详情](https://github.com/dcloudio/uni-app/issues/3228)
  + 微信小程序平台 修复 vue3 项目使用小程序插件组件无法传递属性的Bug [详情](https://github.com/dcloudio/uni-app/issues/3257)
  + 支付宝小程序平台 修复 vue2 项目小程序组件事件监听失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/2273)
  + 支付宝小程序平台 修复 vue2 项目小程序插件中组件事件监听失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/2410)
  + 【重要】hello uniCloud 新增云对象基础使用示例[详情](https://ext.dcloud.net.cn/plugin?id=4082)
* 【uniCloud】
  + 【重要】新增`云对象`。将callfunction函数调用升级为模块化方式，网络不再传递json，前端对象化使用云API [详情](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj)
  + 【调整】发送短信API 从内置库剥离为扩展库 uni-cloud-sms [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms?id=extension)
  + 【调整】一键登录API 从内置库剥离为扩展库 uni-cloud-verify [详情](https://uniapp.dcloud.net.cn/uniCloud/univerify?id=extension)
  + 【调整】uniCloud本地调试插件 云函数右键本地运行时，此云函数内的callFunction由调用云端云函数改为调用本地云函数
  + 新增 jql语法 允许在 getTemp 联表查询的虚拟联表内使用 groupBy distinct [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?  id=lookup-with-temp)
  + 优化 HBuilderX新建云函数的界面支持选择模板和依赖
  + 修复 阿里云 云函数删除文件接口返回数据格式不正确的Bug
  + 修复 uni-cloud-jql扩展库 权限校验失败等场景未抛出错误的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 支持Google地图 [详情](https://uniapp.dcloud.io/app-maps?id=google%e5%9c%b0%e5%9b%be)
  + 【重要】uni-AD 新增 百度百青藤广告联盟 支持开屏、插屏、激励视频广告 [详情](https://ask.dcloud.net.cn/article/36769)
  + 【重要】Android平台 新增 uni-AD 支持华为广告联盟 包括开屏、信息流、插屏、激励视频广告 [详情](https://ask.dcloud.net.cn/article/36769)
  + Android平台 更新 UniPush 使用的个推SDK版本为3.2.7.0，个推核心组件SDK版本为3.1.7.0，优化云端打包按需包含厂商通道SDK
  + Android平台 优化 应用启动首页可能出现上下抖动的Bug [详情](https://ask.dcloud.net.cn/question/138243)
  + Android平台 修复 使用 X5 内核调用 plus.key.addEventListener 监听 keyup 事件不触发回调的Bug
  + Android平台 修复 Android8及以上设备 plus.navigator.createShortcut 无法创建桌面快捷图标的Bug [详情](https://ask.dcloud.net.cn/question/125119)
  + Android平台 修复 视频播放控件 video 边缘可能出现黑线的Bug [详情](https://ask.dcloud.net.cn/question/138320)
  + Android平台 修复 在部分设备调用 plus.runtime.restart 可能引起应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/138965)
  + Android平台 修复 系统语言设置为土耳其语时，tabbar 切换选项可能导致不显示的Bug [详情](https://ask.dcloud.net.cn/question/139313)
  + Android平台 修复 本地相册选择视频设置 compressed 为 false 时依然会压缩的Bug [详情](https://ask.dcloud.net.cn/question/140417)
  + iOS平台 新增 uni原生插件支持 applicationMain 获取 main 函数启动参数 argc、argv [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=hook%e7%b3%bb%e7%bb%9f%e4%ba%8b%e4%bb%b6)
  + iOS平台 修复 Webview窗口标题栏 titleNView无法动态更新网络页面标题的Bug [详情](https://ask.dcloud.net.cn/question/138958)
  + iOS平台 修复 compressVideo 视频压缩可能出现尺寸错乱的Bug [详情](https://ask.dcloud.net.cn/question/138303)
  + iOS平台 修复 微博分享 type 为 web 时无法正常分享的Bug [详情](https://ask.dcloud.net.cn/question/138830)
  + iOS平台 修复 播放背景音频时系统锁屏界面音乐播放器的进度条可能显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/140101)
* 【uni小程序SDK】
  + Android平台 优化 混淆配置规则，解决 zip4j 可能与其他的库冲突的Bug
  + Android平台 修复 3.3.5 引出的 微信支付回调可能会引起崩溃的Bug
  + Android平台 修复 多个小程序分别配置使用 vue2、vue3， 同时打开可能引起白屏的Bug [详情](https://ask.dcloud.net.cn/question/138576)
  + Android平台 修复 关闭小程序后台运行模式，重复操作打开/关闭小程序可能导致小程序无法正常运行的Bug
  + Android平台 修复 小程序切换到后台，直达页面启动时出现闪屏的Bug
  + iOS平台 修复 关闭小程序后快速启动小程序并直达页面，重复操作偶现崩溃的Bug

## 3.3.12.20220222-alpha
* 修复 HBuilderX CLI发行微信小程序，某些情况下，HBuilderX出现出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/139189)
* 【uni-app插件】
  + App平台、H5平台 修复 vue3 项目两个开启了下拉刷新的页面跳转后返回，下拉刷新不触发 onPullDownRefresh 生命周期的Bug [详情](https://github.com/dcloudio/uni-app/issues/3187)
  + App平台 修复 vue3 项目 nvue 页面使用 map 组件时部分方法不生效的Bug [详情](https://ask.dcloud.net.cn/question/138515)
  + App-Android平台 修复 picker 组件选择选项后同页面 input 组件可能无法正常获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/138237)
  + App-Android平台 修复 vue3 项目 安卓低版本时使用 type=number 的 input 组件输入报错的Bug [详情](https://ask.dcloud.net.cn/question/138088)
  + App-iOS平台 修复 3.3.2 版本引出的支持多个音频同时播放引发iOS影响静音开关的问题，默认不支持同时播放多个文件，如果需要可手动设置 sessionCategory
  + App-iOS平台 修复 vue3 项目 canvas 组件绘制本地图像后无法导出到本地到Bug
  + H5平台 优化 uni.chooseLocation 支持传入坐标
  + H5平台 修复 vue2 项目开启摇树后 ad 组件失效的Bug
  + H5平台 修复 vue3 项目 image 组件 mode=heightFix 图像大小显示错误的Bug
  + H5平台 修复 vue3 项目 button 组件发行后 loading 不显示的Bug
  + 支付宝小程序平台 修复 触发自定义事件报错的Bug [详情](https://ask.dcloud.net.cn/question/138706)
* 【uniCloud】
  + 修复 JQL语法 getTemp 返回结果传递给组件属性时在微信小程序端报错的Bug [详情](https://ask.dcloud.net.cn/question/138308)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.450.1320 版，iOS为 4.13.50 版；今日头条穿山甲SDK Android为 4.3.0.1 版， iOS为 4.3.0.2 版；快手广告SDK Android为 3.3.21 版，iOS为 3.3.21 版
  + Android平台 修复 一键登录 授权页面服务协议自定义复选框状态图片设置不正确的Bug [详情](https://ask.dcloud.net.cn/question/139830)
  + iOS平台 修复 Downloader 下载图片文件可能失败的Bug [详情](https://ask.dcloud.net.cn/question/116101)
  + iOS平台 修复 geitImageInfo 可能不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/139361)
* 【uni小程序SDK】
  + iOS平台 修复 动态切换横竖屏导致页面布局异常的Bug

## 3.3.8.20220114-alpha
* 修复 MacOSX 3.3.7-alpha引出的 uniCloud虚拟目录，点击后提示没有权限的Bug
* 【uniCloud】
  + 修复 3.3.7-alpha引出的JQL数据库管理无法正常使用的Bug [详情](https://ask.dcloud.net.cn/question/138139)
* 【uni-app插件】
  + App-Android平台 修复 3.3.7 版本引出的 nvue list 组件滚动后也会触发 click 事件的Bug
  + 小程序平台 修复 vue3 项目 组件使用 id 属性不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3179)
  + 小程序平台 修复 vue3 项目 部分情况 defineExpose 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3180)
  + 小程序平台 修复 vue3 项目 兼容 unocss 插件 [详情](https://ask.dcloud.net.cn/question/138021)
  + 微信小程序平台 修复 vue3 项目 当 v-for 循环变量名为 index 时渲染不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3193)
  + 微信小程序平台 修复 vue3 项目无法自动开启开发工具窗口的Bug
  + 支付宝小程序平台 修复 vue3 项目 mixin 中包含 props 运行报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3191)

## 3.3.7.20220112-alpha
* 新增 HBuilderX CLI 支持发行uni-app到微信小程序 [详情](https://hx.dcloud.net.cn/cli/publish-mp-weixin)
* 新增 HBuilderX CLI 支持发行uni-app到H5 [详情](https://hx.dcloud.net.cn/cli/publish-h5)
* 修复 MacOSX 某些情况下，项目管理器项目无法展开的Bug
* 调整 内置浏览器 地理位置设置 经纬度支持设置6位小数
* 修复 App 真机运行 部分Windows电脑运行App到iOS15以上手机失败的Bug
* 修复 App 真机运行 部分Android 11系统，同步文件失败的Bug
* 修复 uni-app 安心打包 没有生成iOS符号表文件的Bug
* 调整 uni-app 发行到微信小程序，支持自动上传代码到微信平台，无需再通过微信开发者工具上传发行 [详情](https://hx.dcloud.net.cn/Tutorial/App/uni-app-publish-mp-weixin)
* 【uni-app插件】
  + App平台、H5平台 新增 textarea、input 组件支持 confirm-hold 属性 [详情](https://uniapp.dcloud.io/component/input)
  + App平台、H5平台 优化 image 组件 draggable 属性默认值改为 false
  + App平台 优化 uni.request 请求参数支持 ArrayBuffer 类型
  + App平台 修复 vue3 项目 发行后 renderjs 调用 ownerInstance.callMethod 失效的Bug [详情](https://ask.dcloud.net.cn/question/137832)
  + App平台 修复 vue3 项目 picker 组件默认语言固定为英文的Bug [详情](https://ask.dcloud.net.cn/question/136954)
  + App-Android平台 修复 nvue input 组件不支持自定义字体的Bug [详情](https://ask.dcloud.net.cn/question/135514)
  + App-Android平台 修复 nvue list 组件不支持 click 事件的Bug [详情](https://ask.dcloud.net.cn/question/136754)
  + App-iOS平台 修复 nvue swiper-list 组件滚动条无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/136261)
  + H5平台 修复 右键单击事件 contextmenu 丢失 clientX、clientY 属性的Bug [详情](https://ask.dcloud.net.cn/question/136530)
  + 小程序平台 修复 模板中包含转义引号时在小程序开发工具中编译报错或显示异常的Bug
  + 微信小程序平台 修复 多页面，组件内使用插槽数据时，差量编译丢失插槽信息的Bug [详情](https://ask.dcloud.net.cn/question/136258)
* 【uniCloud】
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在临时表内使用 as 或其他运算操作 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在虚拟联表内使用 foreignKey 方法指定要使用的 foreignKey 的归属的字段 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + 新增 web控制台 阿里云 前端网页托管支持为指定路径开启 uni-app history 路由跳转模式支持 [详情](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=routing)
  + 新增 uni-id 支持自定义国际化语言支持 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=custom-i8n)
  + 修复 uni-id 一键登录时未校验重复手机号是否已验证的Bug
  + 修复 uni-id Apple 登录时用户邮箱为空时报错的Bug
  + 修复 uni-id 用户名密码登录时多个应用出现重复用户名登录报错的Bug
  + 修复 本地调试插件 打开非云函数根目录文件时使用运行菜单本地运行云函数报错的Bug
  + 修复 本地调试插件 部分情况下客户端连接启用了 JQL 扩展的本地云函数报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】新增 Payment 模块支持 Paypal支付、Stripe支付、Google支付 [文档](https://uniapp.dcloud.io/app-payment)
  + 【重要】新增 Push 模块支持 Google推送 Firebase Cloud Push (FCM) [文档](https://uniapp.dcloud.io/app-push-fcm)
  + 【重要】新增 Statistic 模块支持 Google统计 [文档](https://uniapp.dcloud.io/app-statistic-google)
  + 新增 一键登录 支持 closeIcon 属性设置自定义关闭按钮图片 [文档](https://uniapp.dcloud.io/univerify)
  + 更新 uni-AD 快手广告SDK Android为 3.3.20 版，iOS为 3.3.20 版；快手内容联盟SDK Android为 3.3.27 版， iOS为 3.3.27 版
  + Android平台 修复 调用 plus.runtime.restart 重启应用后 user-agent 会清空的Bug [详情](https://ask.dcloud.net.cn/question/136105)
  + Android平台 修复 plus.downloader.enumerate 可能获取不到下载任务的Bug [详情](https://ask.dcloud.net.cn/question/137548)
  + Android平台 修复 一键登录 在部分 Android 8.0、8.1 设备无法弹出登录框的Bug
  + Android平台 修复 一键登录 设置登录界面 logo 图片可能不生效的Bug
  + Android平台 修复 视频播放控件 VideoPlayer 设置 object-fit 属性可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/137150)
  + Android平台 修复 使用系统定位模块执行 watchPosition 后再执行 getCurrentPosition 可能失败的Bug [详情](https://ask.dcloud.net.cn/question/137586)
  + Android平台 修复 Push模块 createMessage 在安卓系统8以下系统可能无法创建通知栏消息的Bug [详情](https://ask.dcloud.net.cn/question/137923)
  + Android平台 修复 图片选择界面设置 crop 属性在部分手机和模拟器上可能引起黑屏崩溃的Bug [详情](https://ask.dcloud.net.cn/question/136969)
  + Android平台 修复 图片选择界面未勾选`原图`时图片方向可能发生变化的Bug [详情](https://ask.dcloud.net.cn/question/137358)
  + iOS平台 修复 uni-AD 使用自定义 storyboard 时开屏广告底部应用图标、名称可能不显示的Bug
* 【uni小程序SDK】
  + 新增 小程序 wgt 资源文件支持加密 [文档](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=installWgt)
  + Android平台 修复 不设置任何参数初始化小程序SDK可能会引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/137175)
  + Android平台 修复 启动使用 vue3 的小程序可能出现白屏的Bug
  + iOS平台 修复 小程序未开启后台运行，通过手势关闭小程序后快速打开小程序偶现崩溃的Bug
  + iOS平台 修复 在隐藏小程序的回调方法中再次打开同一小程序无效的Bug
  + iOS平台 修复 同时打开多个小程序 getCurrentPageUrl 获取当前显示的小程序页面路径不正确的Bug

## 3.3.6.20211231-alpha
* 【uni-app插件】
  + 【重要】App平台 修复 uni.getLocation 参数 type 配置不生效的Bug [详情](https://ask.dcloud.net.cn/article/39552)
  + 优化 vue3 项目 vite.config.js 支持自定义 isCustomElement，isNativeTag  [详情](https://github.com/dcloudio/uni-app/issues/3133)
  + 优化 vue3 项目 vite.config.js 支持自定义 scss additionalData [详情](https://github.com/dcloudio/uni-app/issues/3135)
  + 修复 vue3 项目 static 目录不支持按平台编译的Bug [详情](https://github.com/dcloudio/uni-app/issues/3132)
  + App平台 修复 nvue 页面使用 scss/sass 时条件编译不生效的Bug
  + App平台 修复 vue3 项目 input/textarea 组件使用 v-model 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3107)
  + App平台 修复 vue3 项目 picker-view 组件报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3130)
  + App-Android平台 修复 nvue input组件 maxlength 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/137031)
  + App-Android平台 修复 3.3.1 版本引出的 nvue video 组件 cover-view 全屏后排版不正确的Bug [详情](https://ask.dcloud.net.cn/question/136812)
  + H5平台 修复 vue3 项目 在首页执行 reLaunch 时，首页内的组件未销毁的Bug [详情](https://github.com/dcloudio/uni-app/issues/3114)
  + H5平台 修复 vue3 项目 manifest.json 中配置 devServer 不生效的Bug [详情](https://ask.dcloud.net.cn/question/133429)
  + 小程序平台 优化 运行时启用压缩代码后，移除代码注释，减少包体积大小
  + 小程序平台 优化 vue3 项目 支持在页面 setup 中使用 onShareTimeline，onShareAppMessage，onPageScroll [详情](https://github.com/dcloudio/uni-app/issues/3097)
  + 小程序平台 修复 vue3 项目 差量编译时组件模板内容被清空的Bug [详情](https://github.com/dcloudio/uni-app/issues/3122)
  + 小程序平台 修复 vue3 项目 分包静态资源未复制到输出目录的Bug [详情](https://github.com/dcloudio/uni-app/issues/3123)
  + 微信小程序平台 修复 vue3 项目 textarea 组件 input 事件在 iOS 平台不触发的Bug [详情](https://github.com/dcloudio/uni-app/issues/3090)
  + 微信小程序 修复 vue3 项目 v-for 中绑定事件可能错乱的Bug [详情](https://ask.dcloud.net.cn/question/137217)
  + 百度小程序 修复 vue3 项目 对象类型数据差量更新时报错的Bug [详情](https://ask.dcloud.net.cn/question/137222)
  + 支付宝小程序平台 修复 vue3 项目 button 组件 getPhoneNumber 事件报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3116)
* 【uniCloud】
  + 修复 app 端使用腾讯云作为服务商时 在高版本 iOS 安装后第一次启动无法连接云函数的Bug [详情](https://ask.dcloud.net.cn/question/136725)
  + 修复 uniCloud本地调试插件 云函数内使用腾讯云自定义登录调用 createTicket 接口报错的Bug
  + 修复 uniCloud本地调试插件 启动调试服务时错误的提示集合未初始化的Bug
  + 修复 clientDB getTemp 联表时部分情况下 where 方法无法正确筛选数据的Bug
  + 修复 JQL扩展库 使用 getTemp 联表查询时报错的Bug [详情](https://ask.dcloud.net.cn/question/137089)
  + 修复 multiSend 和 unicloud-db 组件搭配使用报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 二维码扫码在部分设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/137114)
  + Android平台 修复 targetSdkVersion 设置为 31 在 Android 12 设备可能无法安装的Bug [详情](https://ask.dcloud.net.cn/question/137233)

## 3.3.2.20211218-alpha
* 【uni-app插件】
  + 修复 vue3 项目 部分组合式 API 参数缺少类型的Bug [详情](https://github.com/dcloudio/uni-app/issues/3076#issuecomment-994557108)
  + App平台、H5平台 修复 vue2 项目缺失 uni.previewImage.cancel 国际化的Bug [详情](https://ask.dcloud.net.cn/question/136054)
  + App平台 修复 vue3 项目 部分样式在低版本手机上不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3073)
  + App-Android平台 修复 3.3.1 版本引出的 input 组件在执行 uni.chooseLocation 返回结果后可能无法获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/136394)
  + App-iOS平台 修复 nvue map 组件当聚合簇中只有1个 marker 时，markertap 事件返回的 id 不正确的Bug [详情](https://ask.dcloud.net.cn/question/136245)
  + H5平台 修复 vue3 项目 运行至内置浏览器时，控制台日志输出没有文件行号的Bug
  + H5平台 修复 vue3 项目 运行模式下热刷新报错的Bug
  + H5平台 修复 vue3 项目 发行模式下 rpx 不生效的Bug [详情](https://ask.dcloud.net.cn/question/136238)
  + H5平台 修复 vue3 项目 vite.config.js host 配置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3083)
  + 小程序平台 修复 vue3 项目 使用 behaviors 报错的Bug [详情](https://ask.dcloud.net.cn/question/131622)
  + 小程序平台 修复 vue3 项目 引入小程序组件（如wxcomponents）不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3071)
  + 小程序平台 修复 vue3 项目 defineExpose 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3074)
  + 小程序平台 修复 vue3 项目 部分情况下生成模板语法不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/3080)
  + 小程序平台 修复 vue3 项目 pages.json condition 启动模式配置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3079#issuecomment-995515310)
  + 微信小程序平台、支付宝小程序平台 修复 vue3 项目 分包内引入插件不生效的Bug [详情](https://ask.dcloud.net.cn/question/136465)
  + 微信小程序平台 修复 vue3 项目 页面 defineProps 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3079)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 支持设置是否关闭个性化推荐功能 [文档](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setPersonalizedAd)
  + 优化 定位模块默认使用 wgs84 坐标系，优先使用系统定位 
  + Android平台 修复 uni-AD 开屏广告部分情况下点击事件可能透传的Bug
  + Android平台 修复 爱加密等安全检测平台报StrandHogg漏洞的Bug
  + 【重要】iOS平台 更新 云端打包环境 XCode 为 13.2.1 版、iOS SDK 为 15.2 版，解决提交 AppStore 审核报 ITMS-90901 警告的问题 [详情](https://ask.dcloud.net.cn/question/136405) 
  + iOS平台 修复 uni-AD 后台切前台时开屏广告展示间隔时间设置无效及可能重复展示的Bug

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
* 【uni-app插件】
  + App平台 修复 vue3 项目使用 uni.canvasGetImageData 报错的Bug [详情](https://ask.dcloud.net.cn/question/134355)
  + App平台 修复 vue3 项目使用 uni.showLoading 方法在不调用 hideLoading 时会运行两秒左右自动关闭的Bug [详情](https://ask.dcloud.net.cn/question/135551)
  + App平台 修复 vue3 项目 开发期间页面热刷新不生效的Bug
  + App平台 修复 vue3 项目 开发期间页面直达不生效的Bug
  + App-Android平台 修复 uni.getBackgroundAudioManager 触发 seek、pause后再播放 onTimeUpdate 可能不触发的Bug [详情](https://ask.dcloud.net.cn/question/134439)
  + App-Android平台 修复 nvue waterfall/list 组件横竖屏切换导致滚动偏移位置回到顶部的Bug [详情](https://ask.dcloud.net.cn/question/135845)
  + App-Android平台 修复 nvue input/textarea 组件使用中文输入法切换到英文时无法输入的Bug [详情](https://ask.dcloud.net.cn/question/133523)
  + App-Android平台 修复 nvue map 组件调用 addMarkers 设置 clear 参数不生效的Bug [详情](https://ask.dcloud.net.cn/question/132127)
  + App-Android平台 修复 nvue map 组件 marker 中 callout 首次显示位置可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/135351)
  + App-iOS平台 修复 nvue rich-text 组件在页面中动态创建时可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/135136)
  + H5平台 修复 vue3 项目 picker 组件无法动态赋值的Bug [详情](https://ask.dcloud.net.cn/question/135418)
  + H5平台 修复 vue3 项目 uni.previewImage 长按按钮显示英文的Bug [详情](https://ask.dcloud.net.cn/question/135557)
  + H5平台 修复 vue3 项目 safe-area-inset-* css 变量失效的Bug [详情](https://ask.dcloud.net.cn/question/134249)
  + 小程序平台 修复 vue3 项目 import 文件不加后缀 .js 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3041)
  + 小程序平台 修复 vue3 项目 不支持 Template Refs 的Bug [详情](https://github.com/dcloudio/uni-app/issues/3031)
  + 小程序平台 修复 vue3 项目 组件 props 不支持复杂对象的Bug [详情](https://github.com/dcloudio/uni-app/issues/3037)
  + 小程序平台 修复 vue3 项目 manifest.json 部分平台配置不生效的Bug
  + 微信小程序平台、支付宝小程序平台 修复 vue3 项目 引用插件不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3035)
  + 支付宝小程序 修复 vue3 项目 组件自定义事件触发报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/3053)
  + 字节小程序 修复 vue3 项目 page-meta 组件 报错的Bug [详情](https://ask.dcloud.net.cn/question/135769)
* 【uniCloud】
  + 新增 支持云函数内使用 JQL 语法操作数据库的扩展库 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-cloud)
  + 修复 腾讯云 geoNear 聚合阶段 maxDistance、minDistance 参数无法正常生效的Bug
  + 修复 app 端 nvue 页面无法连接本地云函数的Bug [详情](https://ask.dcloud.net.cn/question/135703)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.431.1301 版；快手广告SDK Android为 3.3.19 版，iOS为 3.3.19 版；快手内容联盟SDK Android为 3.3.25 版， iOS为 3.3.25 版；Sigmob广告联盟SDK Android为 3.5.3 版
  + 【重要】Android平台 新增 支持未同意隐私政策模式，解决应用市场上架合规检测违反“App不得因用户不同意提供非必要个人信息，而拒绝用户使用其基本功能服务”问题 [详情](https://uniapp.dcloud.io/app-disagreemode)
  + Android平台 修复 3.2.13 版本引出的 更新UniPush使用的个推SDK导致出现App相同权限安装失败的Bug [详情](https://ask.dcloud.net.cn/question/135963)
  + Android平台 修复 视频播放控件 VideoPlayer 设置 objectFit 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/134278)
  + Android平台 修复 视频播放控件 VideoPlayer 播放部分 rtsp 格式视频时加载进度条展示异常的Bug [详情](https://ask.dcloud.net.cn/question/135060)
  + Android平台 修复 直播推流 LivePusher 设置宽高为100%时视频流可能变形的Bug [详情](https://ask.dcloud.net.cn/question/135749)
  + Android平台 修复 设置 targetSdkVersion 为 31 时本地相册选择图片压缩失败的Bug [详情](https://ask.dcloud.net.cn/question/134897)
  + iOS平台 修复 plus.nativeUI.showWaiting 在暗黑模式下默认文字颜色不正确的Bug
  + iOS平台 修复 二维码扫码 pdf417 码时识别中文字符为乱码的Bug
  + iOS平台 修复 本地相册选择进入编辑界面可能出现点击完成按钮无响应的Bug [详情](https://ask.dcloud.net.cn/question/135653)
* 【uni小程序SDK】
  + Android平台 修复 手动安装wgt模式下不支持 vue3 的Bug
  + Android平台 修复 热启动模式下直达页面参数不生效的Bug

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
* 【uni-app插件】
  + 【重要】小程序平台 优化 vue3 项目使用 vite 编译，提供更快的编译速度 [详情](https://ask.dcloud.net.cn/article/37834)
  + App平台、H5平台 新增 uni.request 支持 PATCH 方法
  + App平台、H5平台 修复 swiper 组件开启衔接滑动点击指示器时切换问题 [详情](https://github.com/dcloudio/uni-app/issues/2985)
  + App平台 优化 nvue 页面默认文字大小更改为 16px
  + App平台 优化 innerAudioContext 支持多个音频同时播放
  + App-Android平台 修复 nvue input 组件 placeholder-class 样式中 font-size 不支持 rpx 单位的Bug [详情](https://ask.dcloud.net.cn/question/134764)
  + App-iOS平台 修复 nvue 页面固定横屏启动时 rpx 计算错误的Bug [详情](https://ask.dcloud.net.cn/question/134971)
  + H5平台 修复 map 组件 @callouttap 失效的Bug [详情](https://ask.dcloud.net.cn/question/134803)
  + H5平台 新增 vue3 版本 page-meta 标签下支持浏览器原生head，方便进行 seo 优化 [详情](https://uniapp.dcloud.net.cn/component/page-meta?id=head)
  + 小程序平台 修复 百度小程序 login 组件 @getphonenumber 无参数的问题 [详情](https://ask.dcloud.net.cn/question/130022)
* 【uniCloud】
  + 新增 批量短信 发送功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + 新增 uniCloud DB Schema 支持国际化 [详情](https://uniapp.dcloud.net.cn/collocation/i18n?id=schema)
  + 新增 腾讯云redis
* 【App插件(含5+App和uni-app的App端)】
  + 新增 拍照和本地相册选择 crop 裁剪编辑图片支持 saveToAlbum 属性设置是否保存编辑后的图片到相册 [文档](https://www.html5plus.org/doc/zh_cn/camera.html#plus.camera.CameraCropStyles)
  + 新增 uni-AD 基础开屏广告支持 gif 图
  + 新增 系统定位模块，无需商业授权 [详情](https://uniapp.dcloud.io/app/geolocation)
  + 更新 uni-AD 腾讯优量汇SDK iOS为 4.13.31 版；今日头条穿山甲SDK iOS为 4.1.0.1 版；快手广告SDK Android为 3.3.18 版；快手内容联盟SDK Android为 3.3.24 版；Sigmob广告联盟SDK iOS为 3.5.0 版
  + 修复 微信分享场景参数 scene 默认值不正确的Bug
  + Android平台 新增 云端打包支持配置 packagingOptions [文档](https://ask.dcloud.net.cn/article/94#packagingOptions)
  + Android平台 更新 高德定位SDK为 5.6.1 版，高德地图SDK为 8.1.0 版；UniPush使用的个推SDK为 3.2.5.0 版，个推核心组件SDK为 3.1.6.0 版
  + Android平台 优化 录音保存为 mp3 格式的音质
  + Android平台 修复 uni-AD 加载激励视频广告可能触发申请访问设备信息、读写手机存储等权限的Bug
  + Android平台 修复 二维码扫码 pdf417 码时竖向无法识别、识别中文字符为乱码的Bug
  + Android平台 修复 视频播放控件 VideoPlayer 在 Android8 以下设备动态切换 src 可能会导致黑屏的Bug [详情](https://ask.dcloud.net.cn/question/134171)
  + iOS平台 修复 uni-AD setSplashAd 关闭开屏广告可能不生效的Bug
  + iOS平台 修复 拍照和本地相册选择 crop 裁剪编辑图片 resize 参数默认值不正确的Bug
  + iOS平台 修复 uni原生插件 validArchitectures 配置不正确可能导致云端打包失败的Bug
* 【uni小程序SDK】
  + Android平台 修复 在部分红米设备可能无法触发关闭小程序回调的Bug

## 3.2.15.20211120-alpha
* 调整 uniCloud admin 改名为 uni-admin [详情](https://uniapp.dcloud.net.cn/uniCloud/admin)
* 【uni-app插件】
  + App-Android平台 修复 showTabBarRedDot 设置红点可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/134420)
  + App-Android平台 修复 nvue waterfall 中 cell 组件横竖屏切换后可能出现排版不正常的Bug [详情](https://ask.dcloud.net.cn/question/133738)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 上架某些应用市场审核检测可能检测到收集已安装应用列表行为的Bug
  + Android平台 修复 3.2.13 版本引出的 webview页面作为子窗口时 WebviewStyles 的 top 属性不生效的Bug
  + 【重要】iOS平台 修复 应用启动时间统计在网络服务异常时可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/article/39448)

## 3.2.14.20211112-alpha
* 修复 Windows 11 真机运行提示wmic错误的Bug
* 修复 App manifest.json 勾选使用原生隐私政策提示框 再次打开manifest.json后 此选项没有被勾选的Bug
* 【uni-app插件】
  + App平台、H5平台 修复 3.2.13 版本引出的 swiper 无法轮播的Bug [详情](https://ask.dcloud.net.cn/question/134100)
  + App平台 修复 3.2.13 版本引出的 webview 页面无法显示的Bug [详情](https://ask.dcloud.net.cn/question/134109)

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
* 【uni-app插件】
  + App平台、H5平台 新增 rich-text 组件支持 itemclick 事件 [详情](https://uniapp.dcloud.io/component/rich-text)
  + App平台、H5平台 新增 uni.setClipboardData 支持配置是否弹出提示 [详情](https://uniapp.dcloud.io/api/system/clipboard?id=setclipboarddata)
  + App平台、H5平台 新增 异步触发 uni.chooseImage 时，会进入失败回调 [详情](https://ask.dcloud.net.cn/question/130768)
  + App平台、H5平台 修复 picker-view 滚动时会触发页面下拉刷新的Bug [详情](https://ask.dcloud.net.cn/question/113718)
  + App平台、H5平台 修复 swiper 组件动态加载内容时，触摸造成显示异常的Bug [详情](https://ask.dcloud.net.cn/question/100684)
  + App平台 新增 NVUE map API poiSearchNearBy 支持 offset，poiKeywordsSearch 支持 offset、cityLimit [详情](https://uniapp.dcloud.net.cn/api/location/map?id=poisearchnearby)
  + App平台 新增 cover 组件支持嵌套 [详情](https://uniapp.dcloud.io/component/cover-view?id=cover-view)
  + App平台 新增 nvue 页面支持 dynamicRpx 配置，用于 rpx 适配屏幕大小动态变化 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + App平台 修复 在 slot 使用 v-for 无法渲染的Bug [详情](https://ask.dcloud.net.cn/question/130258)
  + App平台 修复 editor 组件 a 标签 href 填写相对地址时渲染错误的Bug  [详情](https://github.com/dcloudio/uni-app/issues/2218)
  + App平台 修复 editor、rich-text 组件 img 本地路径图片渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/117245)
  + App-Android平台 修复 在 Android4.4 设备默认显示为英文的Bug
  + App-Android平台 修复 nvue web-view 组件网络请求与其它网络请求 user-agent 不一致的Bug
  + App-Android平台 修复 nvue list 组件中 cell 过多导致排版错误，可能抛出错误日志或引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/133072)
  + App-Android平台 修复 nvue map 组件中 Marker 标签 rotate 属性旋转方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/133418)
  + App-Android平台 修复 subNvue 原生子窗体 style 样式设置 top 属性值后可能出现排版不正确的Bug [详情](https://ask.dcloud.net.cn/question/132913)
  + App-iOS平台 修复 editor 组件设置字体格式时，placeholder 显示异常的Bug [详情](https://ask.dcloud.net.cn/question/106127)
  + App-iOS平台 修复 uni.request 请求与其它网络请求 user-agent 不一致的Bug
  + App-iOS平台 修复 nvue cover-view 组件样式可能存在异常的Bug
  + App-iOS平台 修复 nvue image 组件请求网络图片与其它网络请求 user-agent 不一致的Bug
  + App-iOS平台 修复 nvue video 中 cover-view 组件的点击事件会透传到 video 中的Bug [详情](https://ask.dcloud.net.cn/question/132936)
  + App-iOS平台 修复 nvue map 组件设置 marker-callout-textAlign 属性为 center 不生效的Bug [详情](https://ask.dcloud.net.cn/question/133264)
  + H5平台 优化 map 组件 marker label 支持 borderWidth、borderColor、bgColor 等配置
  + H5平台 修复 使用 uni.setClipboardData 时，会出现文本框的Bug
  + H5平台 修复 map 组件 marker label 坐标设置不生效的Bug [详情](https://ask.dcloud.net.cn/question/102514)
  + H5平台 修复 map 组件 marker callout 失效的Bug [详情](https://ask.dcloud.net.cn/question/133590)
  + H5平台 修复 vue3 项目 picker-view 组件显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/132418)
  + 微信小程序平台、支付宝小程序平台 新增 小程序导出到插件 [详情](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html#%E5%AF%BC%E5%87%BA%E5%88%B0%E6%8F%92%E4%BB%B6)
* 【uniCloud】
  + 客户端sdk 修复 使用callback形式调用接口时 success 回调内抛出错误会触发 fail 回调的Bug
  + uni-pay 新增 苹果应用内购凭证校验接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/unipay?id=verifyreceipt)
  + JQL数据库管理 修复 multiSend 接口报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 一键登录 服务协议项样式支持 checkBoxSize 属性设置复选框大小 [详情](https://uniapp.dcloud.io/univerify)
  + 新增 closePreviewImage 方法关闭预览图片界面 [规范](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.closePreviewImage)
  + 更新 uni-AD 腾讯优量汇SDK Android为4.422.1292版；快手广告SDK Android为 3.3.17 版，iOS为 3.3.17 版；快手内容联盟SDK Android为 3.3.23 版；Sigmob广告联盟SDK Android为 3.5.1 版
  + 【重要】Android平台 更新 云端打包默认 targetSdkVersion 为 28 [文档](https://ask.dcloud.net.cn/article/193#targetsdkversion)
  + Android平台 修复 uploader 上传文件请求中 user-agent 不正确的Bug
  + Android平台 修复 plus.os.language 获取系统语言可能不正确的Bug
  + Android平台 修复 部分设备在静止情况下监听获取到的方向数据出现波动的Bug [详情](https://ask.dcloud.net.cn/question/132154)
  + iOS平台 新增 云端打包支持生成符号表 dsym 文件 [详情](https://uniapp.dcloud.io/app/ios/dsym)
  + iOS平台 更新 友盟统计SDK UMCommon 为 7.3.5 版，UMAPM 为 1.5.2 版
  + iOS平台 修复 基础开屏广告可能重复显示的Bug
  + iOS平台 修复 图片/视频选择界面中选择iCloud视频可能报错的Bug [详情](https://ask.dcloud.net.cn/question/133635)
  + iOS平台 修复 plus.navigator.getSignature 获取签名标识在应用通过 AppStore 或 Testflight 安装时 返回空值的Bug [详情](https://ask.dcloud.net.cn/question/133881)

## 3.2.12.20211028-alpha
* 修复 uniCloud 关联项目解除关联后，重启HBuilderX后项目管理器还显示关联项目的Bug
* 修复 uniCloud 关联项目 发行到H5 某些情况下，提示未关联服务空间的Bug
* 优化 uniCloud 新建DB Schema，选择非默认模板，自动填充模板名称到新建文件名输入框
* 优化 uniCloud 云函数上传ContentAccessDenied错误，控制台增加解决方法 [详情](https://hx.dcloud.net.cn/Tutorial/Questions/win10-defender-contentaccessdenied)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 开通增强广告在部分设备首次启动可能误报`应用的uni-AD业务状态异常（-9001）`提示的Bug
  + Android平台 修复 上架某些应用市场审核检测可能误报存在收集安装列表行为的Bug [详情](https://ask.dcloud.net.cn/question/132948)
  + iOS平台 更新 uni-AD 今日头条穿山甲广告SDK 为4.1.0.0版

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
* 【uni-app插件】
  + App平台、H5平台 修复 vue3 项目 picker-view 组件部分情况下 value 错误的Bug [详情](https://ask.dcloud.net.cn/question/132545)
  + App-Android平台 修复 uni.setLocale 设置应用语言后无法正确获取系统语言的Bug
  + App-Android平台 修复 nvue image 组件无法显示 webp 动图的Bug [详情](https://ask.dcloud.net.cn/question/132750)
  + App-iOS平台 修复 应用长时间后台运行再回到前台 tabbar 页面可能显示白屏的Bug
  + App-iOS平台 修复 nvue textarea 组件 padding 样式显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/131761)
  + App-iOS平台 修复 nvue list 中 header 组件在 iOS15 设备上存在默认 padding-top 的Bug [详情](https://ask.dcloud.net.cn/question/132524)
  + 小程序平台 修复 3.2.10 版本引出的 vue3 项目运行报错的Bug [详情](https://ask.dcloud.net.cn/question/132368)
  + 新增 Hello i18n 国际化示例项目 [详情](https://ext.dcloud.net.cn/plugin?id=6462)
* 【uniCloud】
  + clientDB 新增 调用 uniCloud.database 时传入其他服务空间配置，获取其他服务空间的数据库实例 [详情](https://uniapp.dcloud.net.cn/uniCloud/init?id=init-db)
  + clientDB 调整 自动保存 uni-id 刷新用户token返回的token及过期时间到storage内  [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=refreshtoken)
  + unicloud-db组件 新增 spaceInfo 参数，用于指定要使用的服务空间信息 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + mixinDatacom 新增 spaceInfo 参数，用于指定要使用的服务空间信息 [详情](https://uniapp.dcloud.net.cn/component/datacom?id=mixindatacom)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD Sigmob广告联盟SDK Android为3.4.1版，iOS为3.4.2版
  + 修复 geolocation 设置 timeout 参数时无法获取位置信息并且在控制报错的Bug
  + Android平台 新增 屏幕亮度参数值 -1 支持设置应用屏幕亮度与系统屏幕亮度保持一致
  + Android平台 修复 3.2.2 版本引出的 toast 提示框设置图标后无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/131445)
  + iOS平台 修复 显示模态弹窗如 actionSheet 引起系统状态栏文字颜色会自动变成黑色的Bug [详情](https://ask.dcloud.net.cn/question/132444)
  + iOS平台 修复 打开悬浮红包广告可能引起崩溃或无法关闭广告页面的Bug [详情](https://ask.dcloud.net.cn/question/132543)
  + iOS平台 修复 图片选择界面在 iOS15 设备上导航栏会显示白色的Bug [详情](https://ask.dcloud.net.cn/question/132528)

## 3.2.10.20211013-alpha
* 新增 uniCloud云函数断点调试 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=debug)
* 新增 代码提示 鼠标悬停 显示代码帮助悬浮窗口 [详情](https://hx.dcloud.net.cn/Tutorial/Language/Overview?id=hover-code-assist)
* 新增 终端 支持点击URL跳转到浏览器 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/terminal?id=open-links)
* 修复 终端 当输入内容超过一定长度时，换行显示错误的Bug
* 修复 控制台或终端，创建多个时，HBuilderX整体窗口超出屏幕范围的Bug
* 修复 代码格式化导致编辑器上的书签丢失的Bug
* 修复 uniCloud 某些情况下，无法绑定其它项目服务空间的Bug
* 优化 原生App-云打包 当项目下uniCloud未关联服务空间时，提交打包，增加弹窗提示
* 【uni-app插件】
  + App平台、H5平台 新增 支持设置动态配置 tabBarItem 显示隐藏 [详情](https://uniapp.dcloud.io/api/ui/tabbar?id=settabbaritem)
  + App平台、H5平台 新增 uni.showModal 支持配置是否显示输入框 [详情](https://uniapp.dcloud.io/api/ui/prompt?id=showmodal)
  + App平台、H5平台 修复 3.2.8 版本引出的 scroll-view 组件内部元素部分样式失效的Bug [详情](https://ask.dcloud.net.cn/question/131736)
  + App平台 新增 nvue map 组件 API MapContext.on [详情](https://uniapp.dcloud.net.cn/api/location/map?id=createmapcontext)
  + APP-Android平台 修复 3.2.8 版本引出的 nvue 页面横屏时字体大小不正常的Bug [详情](https://ask.dcloud.net.cn/question/132200)
  + App-Android平台 修复 nvue scroll-view 组件设置 scroll-y 为 false 时引起横向滚动失效的Bug [详情](https://github.com/dcloudio/uni-app/issues/1487)
  + App-Android平台 修复 nvue textarea 组件设置 v-model 时使用手写输入法出现异常的Bug [详情](https://ask.dcloud.net.cn/question/122239)
  + App-iOS平台 修复 nvue list 组件在 iOS15 设备上可能出现空白内容的Bug [详情](https://ask.dcloud.net.cn/question/131714)
  + App-iOS平台 修复 nvue textarea 组件默认存在 padding 的Bug [详情](https://ask.dcloud.net.cn/question/131761)
  + App-iOS平台 修复 nvue map 组件 marker 的 label 属性值格式不正确时可能引起崩溃的Bug
  + H5平台 新增 支持配置和使用谷歌地图 [详情](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfigmaps)
  + H5平台 修复 rich-text 组件 nodes 节点的 class 样式不生效的Bug  [详情](https://ask.dcloud.net.cn/article/36661)
  + 小程序平台 修复 使用 uniIDHasRole、uniIDHasPermission 报错的Bug [详情](https://ask.dcloud.net.cn/question/125165)
  + 支付宝小程序平台 新增 默认启用小程序基础库 2.x 构建 [详情](https://uniapp.dcloud.net.cn/collocation/manifest?id=mp-alipay)
  + 修复 unicloud-db 组件在某些情况下修改 page-size 无效的Bug [详情](https://github.com/dcloudio/uniCloud-admin/issues/8)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 支付宝SDK为 15.8.03 版；高德地图SDK为 8.0.1 版，高德定位SDK为 5.5.0 版
  + Android平台 修复 previewImage 预览图片无法按照图片正确方向显示的Bug[详情](https://ask.dcloud.net.cn/question/131446)
  + Android平台 修复 3.2.8 版本引出的 视频播放控件 VideoPlayer 不能播放 AES-128 模式 m3u8 视频的Bug [详情](https://ask.dcloud.net.cn/question/131768)
  + Android平台 修复 视频播放控件 VideoPlayer 不能播放 rtsp 视频的Bug [详情](https://ask.dcloud.net.cn/question/131816)
  + Android平台 修复 视频播放控件 VideoPlayer 设置 objectFit 属性为 fill 时 poster 封面显示效果不正确的Bug [详情](https://ask.dcloud.net.cn/question/129760)
  + Android平台 修复 视频播放控件 VideoPlayer 在部分设备全屏显示可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/131547)
  + iOS平台 更新 腾讯优量汇SDK为 4.13.11 版
  + iOS平台 修复 在 iOS15 设备配置使用广告标识 IDFA 首次启动可能不弹 AppTrackingTransparency 权限框的Bug
  + iOS平台 修复 在 iOS15 部分设备使用`标准运行基座`真机运行可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/131198)
  + iOS平台 修复 wgt热更新资源后再整包覆盖安装 App 导致获取不到之前 storage 保存的数据的Bug
  + iOS平台 修复 sqlite 在页面关闭时可能会自动关闭数据库的Bug [详情](https://ask.dcloud.net.cn/question/131917)
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 poster 后点播放按钮封面消失后播放器可能出现黑屏的Bug [详情](https://ask.dcloud.net.cn/question/131740)

## 3.2.8.20210923-alpha
* 修复 3.2.7-alpha引出的 设置，显示换行符，编辑器文件换行符渲染错误的Bug
* 修复 3.2.7-alpha引出的 vue3-cli项目，background-color代码提示错误的Bug
* 【uni-app插件】
  + App平台 修复 生命周期 onLaunch、onShow 不触发的Bug [详情](https://ask.dcloud.net.cn/question/131152)
  + App平台 修复 picker 组件按钮显示文本错误的Bug [详情](https://ask.dcloud.net.cn/question/131204)
  + App-Android平台 修复 3.2.7 引出的 Android8及以上设备默认语言设置为英文的Bug [详情](https://ask.dcloud.net.cn/question/131302)
  + App-iOS平台 修复 search 类型的 input 组件在 iOS15 默认显示搜索图标的Bug [详情](https://ask.dcloud.net.cn/question/129259)

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
* 【uni-app插件】
  + App平台、H5平台 新增 uni.onLocaleChange 接口，用于监听应用语言切换 [详情](https://uniapp.dcloud.io/api/ui/locale)
  + App平台、H5平台 修复 canvas 组件 重复触发 resize 导致延迟绘图时 canvas 改变的Bug [详情](https://github.com/dcloudio/uni-app/issues/2847)
  + App平台 新增 uni.configMTLS 支持 https 请求配置自签名证书 [详情](https://uniapp.dcloud.io/api/request/request?id=configmtls)
  + App-iOS平台 修复 3.2.6 引出的 nvue 页面 css 伪类样式失效的Bug [详情](https://ask.dcloud.net.cn/question/130879)
  + App-iOS平台 修复 tabbar 设置选中项图片为 gif 时动画速度太慢的Bug [详情](https://ask.dcloud.net.cn/question/125824)
  + 支付宝小程序平台 新增 支持在 App.vue 文件内监听 onShareAppMessage 事件 [#2844](https://github.com/dcloudio/uni-app/pull/2844)
  + 字节小程序平台 修复 差量编译失效的Bug
* 【uniCloud】
  + 本地调试插件 新增 设置启动调试参数（.hbuilderx/launch.json）关闭系统日志 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 本地调试插件 优化 公共模块查找逻辑，减少调试错误
  + clientDB 新增 action 依赖公共模块的功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=common-for-action)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 登录鉴权 支持Google登录和Facebook登录 [详情](http://ask.dcloud.net.cn/article/192)
  + 新增 微信分享 支持打开微信客服功能 [规范](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService.openCustomerServiceChat)
  + 更新 uni-AD 今日头条穿山甲广告SDK Android为4.0.0.1版；腾讯优量汇SDK Android为4.410.1280版；快手广告SDK Android为3.3.14版，iOS为3.3.15.1版；快手内容联盟SDK iOS为3.3.23.1版
  + 更新 微信SDK Android为6.7.9版，iOS为1.9.2版
  + Android平台 更新 友盟统计SDK为9.4.2版
  + Android平台 优化 compressVideo 视频压缩性能，支持 resolution 参数
  + Android平台 修复 系统相册中存在大量图片时图片选择界面操作卡顿的Bug[详情](https://ask.dcloud.net.cn/question/130582)
  + Android平台 修复 视频播放控件 VideoPlayer 在 Android11 设备播放视频可能崩溃的Bug [详情](https://ask.dcloud.net.cn/question/129108)
  + Android平台 修复 原生隐私政策提示框切换到横屏是显示异常的Bug [详情](https://ask.dcloud.net.cn/question/130403)
  + Android平台 修复 Orientation 方向传感器在部分平板设备可能无法方向信息的Bug
  + iOS平台 优化 compressVideo 视频压缩速度
  + iOS平台 修复 一键登录 授权页面服务协议复选框不好点击的Bug [详情](https://ask.dcloud.net.cn/question/130881)
  + iOS平台 修复 视频播放控件 VideoPlayer 播放直播视频无法触发 timeupdate 事件的Bug [详情](https://ask.dcloud.net.cn/question/129955)
  + iOS平台 修复 视频播放控件 VideoPlayer 可能无法正常播放m3u8视频流的Bug [详情](https://ask.dcloud.net.cn/question/129884)

## 3.2.6.20210901-alpha
* 新增 HBuilderX 支持本地语言扩展 (菜单【工具】，可切换其它语言) [详情](https://github.com/dcloudio/hbuilderx-language-packs)
* 【uni-app插件】
  + App平台 修复 3.2.1 引出的 uni.chooseImage 无法压缩拍照图像的Bug [详情](https://ask.dcloud.net.cn/question/129238)
  + 字节小程序平台 修复 部分事件无法触发的Bug [#2774](https://github.com/dcloudio/uni-app/issues/2774)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 图片选择界面设置 filter 为 video 时仍然显示`原图`按钮的Bug
  + iOS平台 修复 二维码扫码在应用横屏模式时预览画面被旋转了的Bug [详情](https://ask.dcloud.net.cn/question/116187)
* 【uniCloud】
  + 【重要】clientDB 新增 支持使用 getTemp 对主表、副表过滤后再联表查询，大幅提升联表查询性能 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-with-temp)

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
* 【uni-app插件】
  + App平台、H5平台 新增 uni.getLocale、uni.setLocale 接口，用于获取和设置应用语言 [详情](https://uniapp.dcloud.io/api/ui/locale)
  + App平台、H5平台 修复 scroll-view 组件滚动过快时 scroll 事件回调返回信息不正确的Bug [详情](https://ask.dcloud.net.cn/question/128573)
  + App平台、H5平台 修复 canvas 组件 createPattern 方法无效的Bug [详情](https://ask.dcloud.net.cn/question/128793)
  + App平台 优化 nvue 页面排版机制，解决横竖屏切换可能引起页面显示不正常的Bug
  + App平台 修复 nvue 页面 rich-text 组件解析块元素出现多余换行的Bug [详情](https://ask.dcloud.net.cn/question/116518)
  + App-Android平台 新增 nvue 页面适配支持折叠屏手机
  + App-Android平台 修复 nvue 页面 text 组件 line-height 高度失真引起 picker-view 无法对齐的Bug [详情](https://ask.dcloud.net.cn/question/128610)
  + App-Android平台 修复 nvue 页面 list、swiper、waterfall 组件嵌套时，包含的 header 组件可能无法正常显示Bug [详情](https://ask.dcloud.net.cn/question/128578)
  + App-iOS平台 修复 nvue 页面 textarea 组件的 blur 事件回调参数中缺少 cursor 属性数据的Bug [详情](https://ask.dcloud.net.cn/question/129023)
  + App-iOS平台 修复 nvue 页面 video 组件上方存在其他组件时可能引起显示错乱的Bug [详情](https://ask.dcloud.net.cn/question/129662)
  + App-iOS平台 修复 uni.openDocument 部分情况下回调错误的Bug
  + H5平台 修复 导航栏 searchInput 输入框出现两个清空 icon 的Bug [详情](https://ask.dcloud.net.cn/question/129225)
  + H5平台 修复 titleNView 配置 type 为 transparent 时，float 为 left 的 button 不居中的Bug [详情](https://ask.dcloud.net.cn/question/129598)
  + 支付宝小程序平台 修复 uni.chooseImage 在模拟器上不返回 tempFiles 的Bug [详情](https://ask.dcloud.net.cn/question/128732)
  + 字节小程序平台 修复 同名文件内引用同一个组件作用域插槽渲染错误的Bug [详情](https://ask.dcloud.net.cn/question/127962)
  + 字节小程序平台 修复 使用 .sync 更新父子组件间的值失效的Bug [详情](https://ask.dcloud.net.cn/question/127397)
  + QQ小程序平台 修复 真机运行报错的Bug [#2648](https://github.com/dcloudio/uni-app/issues/2648)
* 【uniCloud】
  + uniCloud本地调试插件 修复 云函数日志 文件路径存在中文时无法点击跳转的Bug
  + uniCloud本地调试插件 修复 阿里云事务执行 updateAndReturn 报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD Sigmob广告联盟支持激励视频广告 [文档](https://uniapp.dcloud.io/api/a-d/rewarded-video)
  + 更新 uni-AD 腾讯优量汇SDK Android为4.400.1270版，iOS为4.13.02版；快手广告联盟SDK Android为3.3.13版， iOS为3.3.14版；快手内容联盟SDK Android为3.3.22版，iOS为3.3.22版
  + 优化 uni-AD 基础开屏广告填充率
  + 【重要】Android平台 新增 Android Support Library 升级迁移到 AndroidX 
  + Android平台 新增 原生隐私政策提示框内容中的链接支持本地 html 页面地址 [详情](https://ask.dcloud.net.cn/article/36937)
  + Android平台 更新 云端打包环境 compileSdkVersion 版本为 30，buildToolsVersion 版本为 29.0.3
  + Android平台 修复 图片选择不设置 sizeType 时默认不显示`原图`按钮，选择图片会进行压缩的Bug [详情](https://ask.dcloud.net.cn/question/129156)
  + iOS平台 修复 3.2.0 版本引出的 微信登录、分享、支付，QQ登录、分享在部分设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/129378)
  + iOS平台 修复 视频播放控件 VideoPlayer 视频带有方向属性时 poster 封面图会被旋转的Bug [详情](https://ask.dcloud.net.cn/question/129090)
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 objectFit 为 cover 时封面显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/127991)
  + iOS平台 修复 新浪分享模块在某些安全平台检测可能误报使用 UIWebview APIs 的Bug
  + iOS平台 修复 二维码扫码部分图片可能无法识别的Bug

## 3.2.1.20210811-alpha
* 【重要】新增 uni-app 支持运行和发布到 快手小程序
* 新增 项目管理器 对被自定义编辑器关联的文件，增加“打开方式”菜单（【设置】源码视图，增加自定义编辑器文件关联配置）
* 新增 插件市场 导入uniapp原生SDK项目 导入HBuilderX后，自动将appid和pluginID绑定 
* 修复 App 真机运行 某些情况下，获取iOS自定义基座版本号错误，导致每次修改代码都会重新安装基座到手机的Bug
* 优化 uni-app 新建项目 包含付费云函数的项目 自动拉起初始化向导
* 新增 uni-app 插件大赛一等奖获奖作品内置到新建项目模板中 [详情](https://ask.dcloud.net.cn/article/39133)
* 【uni-app插件】
  + App-Andriod平台 优化 uni.chooseImage 图片选择界面增加`原图`按钮
  + App-Android平台 修复 3.2.0 版本引出的 uni.scanCode 可能无法正常使用的Bug [详情](https://ask.dcloud.net.cn/question/128311)
  + App-Android平台 修复 uni.saveFile 保存通过 uni.chooseImage 选择的图片在 Android11 设备上可能失败的Bug [详情](https://ask.dcloud.net.cn/question/128442)
  + App-iOS平台 修复 uni.chooseImage 图片选择界面`原图`按钮操作逻辑不正确的Bug
  + 小程序平台 修复 作用域插槽内使用事件后默认使用新版作用域插槽编译模式的Bug [详情](https://ask.dcloud.net.cn/question/127297)
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】Android平台 新增 androidPrivacy.json 文件配置隐私政策提示框 [详情](https://ask.dcloud.net.cn/article/36937)
  + Android平台 修复 3.1.19 版本引出的 直播推流 LivePusher 无法全屏预览的Bug [详情](https://ask.dcloud.net.cn/question/127987)
  + Android平台 修复 5+App项目打包后提交华为应用市场审核会误报包含三方广告SDK的Bug [详情](https://ask.dcloud.net.cn/question/126498)
  + Android平台 修复 申请权限被用户拒绝后，引导用户跳转设置界面开启权限后返回应用依然无法获取权限的Bug [详情](https://ask.dcloud.net.cn/question/128369)
  + iOS平台 修复 3.2.0 版本引出的 图片选择界面中部分按钮文字在系统语言为中文时依然显示英文的Bug [详情](https://ask.dcloud.net.cn/question/128285)
  + iOS平台 修复 Downloader 下载文件名称出现乱码或包含特殊字符，导致保存文件无法读取的Bug

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
* 【uni-app插件】
  + App平台、H5平台 新增 input 组件 type 支持 tel 类型
  + App平台、H5平台 新增 input 组件支持 text-content-type 属性
  + App平台、H5平台 修复 3.1.22 版本引出的 scroll-view 组件下拉刷新失效的Bug
  + App-iOS平台 修复 压缩后的视频无法通过 plus.io 接口操作的Bug
  + App-iOS平台 修复 3.1.22 版本引出的 softinputMode 配置为 adjustResize 无效的Bug
  + App-iOS平台 修复 nvue map 组件 marker 设置 label 的 bgColor 为透明值无效的Bug [详情](https://ask.dcloud.net.cn/question/126459)
  + H5平台 优化 导航栏搜索框增加清除按钮
  + 支付宝小程序平台 修复 部分内置组件事件当做自定义事件处理的Bug
  + 【重要】 uniad广告的ad组件 支持h5平台  [详情](https://uniapp.dcloud.net.cn/component/ad)
  + 【重要】 uni ui 支持 vue3 [详情](https://ext.dcloud.net.cn/plugin?id=55)
  + HBuilder官方预置项目全面支持 vue3，包括hello uni-app、hello uniCloud、uniCloud admin、uni-starter等
  + 新增 VUE3 条件编译，方便一套代码同时兼容vue2和vue3 [详情](https://uniapp.dcloud.net.cn/platform?id=preprocessor)
  + uni-ui uni-collapse 修复 由1.2.0版本引起的 change 事件返回 undefined 的Bug
  + uni-ui uni-collapse 优化 组件示例
  + uni-ui uni-collapse 新增 组件折叠动画
  + uni-ui uni-collapse 新增 value\v-model 属性 ，动态修改面板折叠状态
  + uni-ui uni-collapse 新增 title 插槽 ，可定义面板标题
  + uni-ui uni-collapse 新增 border 属性 ，显示隐藏面板内容分隔线
  + uni-ui uni-collapse 新增 title-border 属性 ，显示隐藏面板标题分隔线
  + uni-ui uni-collapse 修复 resize 方法失效的Bug
  + uni-ui uni-collapse 修复 change 事件返回参数不正确的Bug
  + uni-ui uni-collapse 优化 H5、App 平台自动更具内容更新高度，无需调用 reszie() 方法
  + uni-ui uni-data-checkbox 优化 在uni-forms组件，与label不对齐的问题
  + uni-ui uni-data-checkbox 修复 单选默认值为0不能选中的Bug
  + uni-ui uni-easyinput 优化 errorMessage 属性支持 Boolean 类型
  + uni-ui uni-file-picker 修复 return-type为object下，返回值不正确的Bug
  + uni-ui uni-file-picker 修复（重要） H5 平台下如果和uni-forms组件一同使用导致页面卡死的问题
  + uni-ui uni-file-picker 优化 h5平台下上传文件导致页面卡死的问题
  + uni-ui uni-forms 修复 vue2 下条件编译导致destroyed生命周期失效的Bug
  + uni-ui uni-forms 修复 1.2.1 引起的示例在小程序平台报错的Bug
  + uni-ui uni-forms 修复 动态校验表单，默认值为空的情况下校验失效的Bug
  + uni-ui uni-forms 修复 不指定name属性时，运行报错的Bug
  + uni-ui uni-forms 优化 label默认宽度从65调整至70，使required为true且四字时不换行
  + uni-ui uni-forms 优化 组件示例，新增动态校验示例代码
  + uni-ui uni-forms 优化 组件文档，使用方式更清晰
  + uni-ui uni-list 修复 与其他组件嵌套使用时，点击失效的Bug
  + uni-ui uni-swipe-action 修复 跨页面修改组件数据 ，导致不能滑动的问题
  + hello-uniapp 新增 同时适配 vue2 和 vue3（HBuilder X 3.2.0+ 支持 vue3）
  + uniCloud admin 新增 同时适配 vue2 和 vue3（HBuilder X 3.2.0+ 支持 vue3）
  + uniCloud admin 新增 应用管理功能，管理用户可登录的应用，如某账户只能登录管理端、不能登录用户端（uni-id@3.3.1+ 支持）
  + uniCloud admin 新增 升级系统管理 list 页的表格功能，支持数据排序、筛选、搜索等功能
  + uniCloud admin 修复 刷新页面时，左侧菜单丢失高亮状态的 bug
  + uniCloud admin 修复 修改密码失败的 bug
  + 新增 插件市场 支持前端文件加密 限付费的云端一体项目类型的前端文件 [详情](https://ask.dcloud.net.cn/article/35408)
* 【uniCloud】
  + 云数据库 新增 updateAndReturn 方法，可以更新并返回更新后的值（仅可在云函数中使用） [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=update-and-return)
  + uniCloud本地调试插件 修复 部分情况下项目启动时报 npm 安装失败的Bug
  + uni-id 新增 多系统（如管理端、用户端）的配置隔离 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-config)
  + uni-id 新增 多系统用户管理，如某账户只能登录管理端，不能登录用户端 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=isolate-user)
    - 此版本升级需要开发者处理历史用户数据，请参考 [补齐用户dcloud_appid字段](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid)
  + uni-id 新增 QQ登录、注册相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=qq)
  + uni-id 调整 不再支持绑定手机、邮箱时不填验证码直接绑定
* 【App插件(含5+App和uni-app的App端)】
  + 新增 一键登录 服务协议项样式支持设置复选框图标 [详情](https://uniapp.dcloud.io/univerify)
  + 优化 新浪微博 登录、分享 模块配置，去掉appsecret参数
  + 修复 一键登录 应用横屏显示时打开一键登录页面UI显示异常的Bug [详情](https://ask.dcloud.net.cn/question/126597)
  + Android平台 更新 uni-AD 今日头条穿山甲广告SDK为3.8.0.6版；腾讯优量汇广告SDK为4.380.1250版；快手广告联盟SDK为3.3.12版，快手内容联盟SDK为3.3.20版
  + Android平台 更新 腾讯X5内核版本为 4.3.0.176_44076，解决在部分设备无法加载使用X5内核的问题
  + Android平台 更新 UniPush 使用的个推SDK版本为3.2.2.0，个推核心组件SDK版本为3.1.2.0
  + Android平台 修复 3.1.22 版本引出的 template 原生隐私政策提示框内容过多时显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/127582)
  + Android平台 修复 3.1.19 版本引出的 UniPush 云端打包设置 GooglePlay(AAB) 渠道，getClientInfo 无法获取推送标识信息的Bug [详情](https://ask.dcloud.net.cn/question/127434)
  + Android平台 修复 页面中 input 标签 type 为 file 时，应用没有读写手机存储权限不会主动申请导致无法正常使用的Bug
  + Android平台 修复 VideoPlayer 播放带方向信息的视频源，暂停时显示方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/125783)
  + Android平台 修复 VideoPlayer 播放部分视频源，暂停时可能显示黑边的Bug [详情](https://github.com/dcloudio/uni-app/issues/2779)
  + Android平台 修复 LivePusher 推流设置的本地缓冲池过大导致延迟时间过长的Bug
  + iOS平台 更新 QQ 登录、分享SDK版本为V3.5.3；新浪微博 登录、分享SDK版本为3.3.1；微信 登录、分享、支付SDK版本为1.9.1
  + iOS平台 更新 UniPush 使用的个推SDK为2.5.10.0无IDFA版
  + iOS平台 修复 一键登录 设置服务协议复选框默认不勾选时授权按钮背景颜色显示不正确的Bug
  + iOS平台 修复 Downloader 下载文件返回的请求头 Content-Range 数据为空时引起应用崩溃的Bug
  + iOS平台 修复 百度语音识别在用户拒绝录音权限时没有返回错误回调的Bug
  + iOS平台 修复 在 iOS14 设备使用 5G 网络可能引起崩溃的Bug

## 3.1.22.20210707-alpha
* 修复 插件开发 Windows 控制台日志部分路径无法打开的Bug
* 修复 MacOSX 3.1.20引出的 右键菜单快捷键没有显示在菜单中的Bug
* 修复 uniCloud 下载所有DB Schema及校验函数，勾选全部应用，编辑器闪退的Bug
* 【uni-app插件】
  + 【重要】调整 App平台、H5平台 input 组件 number 类型在 iOS 平台改用仅数字键盘（九宫格），如需输入负数和小数请改用 digit 类型
  + App平台、H5平台 修复 image 组件使用 transform 样式后，大小计算错误的Bug [详情](https://ask.dcloud.net.cn/question/125987)
  + App平台、H5平台 修复 scroll-view 下拉刷新错误触发的Bug [详情](https://ask.dcloud.net.cn/question/124430)
  + App平台、H5平台 优化 input 组件移除 verifyNumber 属性，改由框架自动处理
  + App-Android平台 修复 nvue  页面 swiper 组件嵌套 list 组件时 source 信息错误的Bug [详情](https://ask.dcloud.net.cn/question/121039)
  + App-iOS平台 修复 iOS14.6 键盘弹出卡顿的Bug [详情](https://ask.dcloud.net.cn/question/125870)
  + H5平台 修复 input 组件设置 confirm-type 为 search 时，无法自动获取焦点的Bug
  + 小程序平台 修复 v-for 嵌套 slot 编译报错的Bug [详情](https://ask.dcloud.net.cn/question/125108)
  + 小程序平台 修复 v-for 中含有复杂表达式时，事件接收的 item 参数错误的Bug
  + 小程序平台 修复 部分数值变更无法更新的Bug [#2696](https://github.com/dcloudio/uni-app/issues/2696)
  + 小程序平台 修复 新版作用域插槽编译模式嵌套自定义组件不显示的Bug [详情](https://ask.dcloud.net.cn/question/126058)
  + 字节小程序平台 修复 新版开发者工具中 uni.request 发送请求失败的Bug
* 【uniCloud】
  + 【重要】云函数支持创建时选择 nodejs 版本 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=runtime)
  + 新增 内容安全公共模块，包含图片鉴黄、文字内容违规检测，免费且全端可用 [详情](https://ext.dcloud.net.cn/plugin?id=5460)
  + clientDB 新增 multiSend 接口，用于多个clientDB联网请求合并为一次联网 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + unicloud-db组件和API 新增 getTemp 接口，用于在 multiSend 内使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=multi-send)
  + uni-id 调整 3.1.1版本发布，使用兼容 uniCloud 响应体规范的新错误码格式 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=errcode)
  + uniCloud本地调试插件 修复 部分情况下出现 MaxListenersExceededWarning 警告的Bug
  + uniCloud本地调试插件 修复 项目内存在项目外文件的软链时，修改无法实时生效的Bug
  + JQL数据库管理 修复 部分情况下执行数据库操作无响应的Bug
  + 客户端 修复 nvue 页面无法触发 App.vue 内注册的 db.on('error')、db.on('refreshToken') 等回调的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 优化 通知栏操作逻辑，解决提交 Google Play 审核可能提示 Implicit PendingIntent Vulnerability 的问题 [详情](https://ask.dcloud.net.cn/question/126207)
  + Android平台 优化 template 原生隐私政策提示框UI样式
  + iOS平台 修复 uni-AD 开屏广告在部分应用中可能引起曝光率较低的Bug
  + iOS平台 修复 在部分情况下 WKWebView 同步共享 cookie 可能引起崩溃的Bug

## 3.1.21.20210624-alpha
* 【uni-app插件】
  + App平台 修复 3.1.20 引出的 uni.showToast 接口 icon 固定为 error 类型的Bug [详情](https://ask.dcloud.net.cn/question/125773)

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
* 【uni-app插件】
  + App平台、H5平台 修复 input 组件同时设置 type=number 和 maxlength 时，部分情况 value 同步错误的Bug
  + App平台、H5平台 修复 textarea 组件设置 min-height 后高度异常的Bug
  + App平台 新增 uni.showToast 接口 icon 支持 error 类型
  + App平台 优化 nvue 页面中去除 display:flex 相关警告
  + App平台 优化 uni.chooseLocation 搜索结果按综合排序 [详情](https://ask.dcloud.net.cn/question/125044)
  + App-Android平台 优化 快速频繁操作应用启动/关闭可能出现白屏现象的问题
  + App-Android平台 修复 uni.previewImage 长按保存图片可能失败的Bug [详情](https://ask.dcloud.net.cn/question/125357)
  + App-iOS平台 修复 调用 uni.hideKeyboard 后点击页面任意位置 input 组件自动聚焦的Bug [详情](https://ask.dcloud.net.cn/question/125233)
  + App-iOS平台 修复 nvue textarea 组件不设置 padding 时 placeholder 显示位置不正常的Bug [详情](https://ask.dcloud.net.cn/question/122376)
  + 百度小程序 修复 部分 class 写法编译后失效的Bug
  + QQ小程序 修复 默认启用 nodeModules 导致作用域插槽编译后运行报错的Bug
* 【uniCloud】
  + 新增 uniCloud响应体规范，方便前端拦截器统一处理、方便国际化 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-response-format)
  + 客户端 新增 添加拦截器、移除拦截器API [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=add-interceptor)
  + 客户端 修复 HBuilderX 3.1.17-alpha 引出的 db.on("error") 回调不执行的Bug
  + 客户端 修复 leftWindow、topWindow 中使用 uniCloud 腾讯云报错的Bug [详情](https://ask.dcloud.net.cn/question/125039)
  + DB Schema 调整 enum 属性最大可枚举500条数据
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 快手广告联盟SDK Android为3.3.10.2版，iOS为3.3.10 版；快手内容联盟SDK Android为3.3.18.1版，iOS为3.3.19版
  + Android平台 修复 手机语言设置为阿拉伯文后无法操作页面返回的Bug [详情](https://ask.dcloud.net.cn/question/124914)
  + Android平台 修复 H5页面中 intent:// 协议无法拉起三方App的Bug [详情](https://ask.dcloud.net.cn/question/124597)
  + Android平台 修复 云端打包 提交 Google Play 审核提示包含无法识别的语言的Bug [详情](https://ask.dcloud.net.cn/question/125203)
  + Android平台 修复 getVideoInfo 方法调用无响应的Bug [详情](https://ask.dcloud.net.cn/question/122739)
  + Android平台 修复 3.1.14版本引出的 微博登录取消授权后再次调用无响应的Bug [详情](https://ask.dcloud.net.cn/question/125273)
  + Android平台 修复 targetSdkVersion 设置为 30 在部分 Android 11 设备可能无法正常拉起支付App的Bug
  + iOS平台 新增 安全区域配置 safearea 支持 backgroundDark 属性设置暗黑模式的背景颜色 [详情](https://ask.dcloud.net.cn/article/36995#safearea)
  + iOS平台 更新 云端打包环境为XCode12.5，解决在 iOS15 设备无法安装的Bug

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
* 【uni-app插件】
  + App平台、H5平台 新增 input 组件添加 verifyNumber 属性 [详情](https://uniapp.dcloud.io/component/input)
  + App平台、H5平台 修复 insertImage 多次触发 input 事件的Bug [详情](https://ask.dcloud.net.cn/question/124809)
  + App平台 新增 一键登录自定义按钮添加 provider 属性，用于动态生成 buttons 时区分按钮 [详情](https://uniapp.dcloud.io/univerify?id=用户点击一键登录自定义按钮)
  + App平台 新增 uni.chooseImage 支持 crop 配置 [详情](https://uniapp.dcloud.io/api/media/image?id=chooseimage)
  + App平台 新增 video 组件支持 header 配置 [详情](https://uniapp.dcloud.io/component/video)
  + App-Android平台 修复 uni.request 请求 header 中设置自定义 content-type 会添加 charset 的Bug [详情](https://ask.dcloud.net.cn/question/123961)
  + App-Android平台 修复 websocket 请求过多可能引起崩溃的Bug
  + App-Android平台 修复 nvue webview 组件设置 background 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/117845)
  + App-Android平台 修复 nvue video 组件暂定播放后可能出现黑边的Bug [详情](https://ask.dcloud.net.cn/question/124152)
  + 小程序平台 优化 作用域插槽内支持使用作用域外数据 [#495](https://github.com/dcloudio/uni-app/issues/495)
  + 百度小程序平台 修复 基础库 3.290.33 以上页面 mounted 执行两次的Bug [#2642](https://github.com/dcloudio/uni-app/issues/2642)
  + 百度小程序平台 修复 使用 usingComponents 后代码上传报错的Bug [#2652](https://github.com/dcloudio/uni-app/issues/2652)
  + 支付宝小程序平台 优化 支持 useDynamicPlugins 配置 [详情](https://ask.dcloud.net.cn/article/39114)
  + 字节小程序平台 修复 基础库 2.0 以上组件关系错乱的Bug [#2651](https://github.com/dcloudio/uni-app/issues/2651)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 拍照和本地相册选择 支持设置 crop 裁剪编辑图片 [规范](https://www.html5plus.org/doc/zh_cn/camera.html#plus.camera.CameraOptions)
  + 新增 视频播放控件 VideoPlayer 播放http/https协议视频资源时支持设置请求的 header [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + 新增 登录鉴权服务对象支持 nativeClient 属性标识依赖的客户端App是否已安装 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.nativeClient)
  + Android平台 更新 LivePusher 直播推流模块基于开源项目[yasea](https://github.com/begeekmyfriend/yasea)，支持 srs4.x
  + Android平台 更新 uni-AD 穿山甲SDK 为3.7.0.2版
  + Android平台 修复 storage 数据存储键值 key 中包含特殊字符时可能存取失败的Bug
  + Android平台 修复 getFileInfo 在 Android11 设备上可能无法正常获取文件信息的Bug [详情](https://ask.dcloud.net.cn/question/124440)
  + iOS平台 更新 uni-AD 腾讯优量汇SDK 为4.12.71版
  + iOS平台 更新 视频播放控件 VideoPlayer 使用的 FFmpeg 版本为 ff4.0--ijk0.8.8--20210426--001
  + iOS平台 修复 uni-AD 应用从后台切换到前台开屏广告可能被其它界面覆盖的Bug
  + iOS平台 修复 plus.sqlite.isOpenDatabase 不传入参数可能引起卡死或崩溃的Bug [详情](https://ask.dcloud.net.cn/question/114091)
  + iOS平台 修复 Geolocation 定位模块在用户未授权或设备关闭定位功能时返回错误码与规范不一致的Bug
* 【UniMPSDK】
  + iOS平台 修复 push 方式打开小程序手势返回关闭后偶现无法再次打开小程序页面的Bug
  + iOS平台 修复 动态设置 titleNView 样式后可能导致胶囊菜单按钮弹出的 actionSheet 部分 item 显示空白的Bug

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
* 【uni-app插件】
  + App-Android平台 新增 nvue ad-content-page组件支持页面内显示快手短视频内容联盟 [规范](https://uniapp.dcloud.net.cn/component/ad-content-page)
  + App-Android平台 修复 nvue map 组件 marker 上的 label 可能会被 marker 本身覆盖的Bug [详情](https://ask.dcloud.net.cn/question/122872)
  + uni-ui uni-data-checkbox 新增 map 属性，可以方便映射text/value属性
  + uni-ui uni-data-checkbox 修复 不关联服务空间的情况下组件报错的Bug
  + uni-ui uni-data-picker 修复 上个版本引出的本地数据无法选择带有children的2级节点
  + uni-ui uni-forms 修复 动态删减数据导致报错的问题
  + uni-ui uni-forms 新增 modelValue 属性 ，value 即将废弃
  + uni-ui uni-forms 新增 uni-forms-item 可以设置单独的 rules
  + uni-ui uni-forms 新增 validate 事件增加 keepitem 参数，可以选择那些字段不过滤
  + uni-ui uni-forms 优化 submit 事件重命名为 validate
  + uni-ui uni-data-picker 修复 无法加载云端数据的问题
  + uni-ui uni-data-picker 修复 v-model无效问题
  + uni-ui uni-data-picker 修复 loaddata 为空数据组时加载时间过长问题
  + uni-ui uni-datetime-picker 修复 图标在小程序上不显示的 bug
  + uni-ui uni-datetime-picker 优化 重命名引用组件，避免潜在组件命名冲突
  + uni-ui uni-datetime-picker 优化 代码目录扁平化
  + uni-ui uni-tag 修复 未定义 sass 变量 "$uni-color-royal" 的bug
* 【uniCloud】
  + 修复 HBuilderX 3.1.16 引出的未关联服务空间时无法获取 uniCloud.mixinDatacom 的Bug
  + 修复 HBuilderX 3.1.16 引出的某些情况下关联腾讯云服务空间的项目运行报错的Bug
  + uniCloud本地调试插件 修复 HBuilderX 3.1.16 引出的云函数日志内的文件链接点击无法跳转到对应文件的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 优化 云端打包googleplay渠道使用 Android App Bundle (AAB) 格式 [详情](https://ask.dcloud.net.cn/article/39052)
  + iOS平台 修复 视频播放控件 VideoPlayer 调用 playbackRate 方法设置倍数播放值为 1.25、1.5 不生效的Bug [详情](https://ask.dcloud.net.cn/question/107802)
  + iOS平台 修复 扫码时息屏后再次打开引起扫描线动画停止的Bug [详情](https://ask.dcloud.net.cn/question/124001)

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
* 【uni-app插件】
  + 【重要】H5端 新增 支持在 CLI 工程使用 vue3/vite [详情](https://ask.dcloud.net.cn/article/37834)
  + 补充 addInterceptor 拦截器文档 [详情](https://uniapp.dcloud.io/api/interceptor)
  + App-Android平台 修复 nvue swiper 组件动态加载数据时会跳到第一个 swiper-item 的bug [详情](https://ask.dcloud.net.cn/question/121687)
* 【uniCloud】
  + clientDB 新增 使用副表 foreignKey 进行联表查询时增加 _value 用于存储主表关联字段原始值 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + clientDB 修复 部分情况下 action.after 会重复执行一次的bug
  + JQL数据管理 修复 使用云端 schema 时找不到 schema 的Bug [详情](https://ask.dcloud.net.cn/question/123285)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 3.1.15 版本引出的 云端打包同时勾选 UniPush 和 一键登录 模块会引起打包失败的Bug
  + iOS平台 更新 百度语音识别 SDK 为 3.0.10.0 版
  + iOS平台 优化 相册目录选择操作界面

## 3.1.15.20210518-alpha
* 修复 代码提示 try catch内，没有代码提示的Bug
* 新增 插件扩展示例webviewdialog 用于演示插件API webviewdialog的基本操作
* 修复 项目管理器 项目执行Git初始化后，项目文件状态没有刷新的Bug
* 优化 uniCloud schema文件，右键菜单，增加【schema2code】，且支持schema2code插件随着HBuilderX的升级而升级
* 优化 uniCloud schema2Code 不生成pages.json，而改成pages_init.json，差量合并新页面
* 修复 App 安心打包，当勾选原生混淆时，第二次安心打包失败的Bug
* 【uni-app插件】
  + App平台 新增 uni-AD 互动游戏，无需自行设计激励视频场景，快速嵌入激励视频变现 [详情](https://uniapp.dcloud.net.cn/api/a-d/interactive)
  + App平台 新增 激励视频服务器回调 [详情](https://uniapp.dcloud.net.cn/api/a-d/rewarded-video?id=callback)
  + App平台、H5平台 修复 3.1.10 版本引出的 textarea 组件固定 box-sizing 导致部分情况显示异常的Bug [详情](https://ask.dcloud.net.cn/question/121893)
  + App平台 修复 3.1.10 版本引出的 input 组件类型为 number 时在低版本 webview 失去焦点时报错的Bug [详情](https://ask.dcloud.net.cn/question/122328)
  + App平台 修复 3.1.0 版本引出的 dataset 使用驼峰写法时获取数据格式与其他平台不一致的Bug [详情](https://ask.dcloud.net.cn/question/119034)
  + App-Android平台 修复 3.1.14 版本引出的 nvue web-view 组件无法加载本地 html 页面的Bug [详情](https://ask.dcloud.net.cn/question/122944)
  + App-Android平台 修复 nvue map 组件 markers 中的 id 属性值重复导致标记点显示异常的Bug
  + App-iOS平台 修复 uni.downloadFile 下载文件名称存在中文时无法通过 uni.saveFile 保存的Bug [详情](https://ask.dcloud.net.cn/question/122212)
  + App-iOS平台 修复 nvue video 组件播放 mov 格式视频时显示尺寸会变小的Bug [详情](https://ask.dcloud.net.cn/question/121175)
  + H5平台 修复 3.1.0 版本引出的样式中包含媒体查询时部分 rpx 单位失效的Bug [#2600](https://github.com/dcloudio/uni-app/issues/2600)
  + uni-ui 发布新版本 1.3.1 
    * uni-badge 新增 uni-badge 的 absolute 属性，支持定位
    * uni-badge 新增 uni-badge 的 offset 属性，支持定位偏移
    * uni-badge 新增 uni-badge 的 is-dot 属性，支持仅显示有一个小点
    * uni-badge 新增 uni-badge 的 max-num 属性，支持自定义封顶的数字值，超过 99 显示99+
    * uni-badge 优化 uni-badge 属性 custom-style， 支持以对象形式自定义样式
    * uni-badge 修复 uni-badge 在 App 端，数字小于10时不是圆形的bug
    * uni-badge 修复 uni-badge 在父元素不是 flex 布局时，宽度缩小的bug
    * uni-badge 新增 uni-badge 属性 custom-style， 支持自定义样式
    * uni-datetime-picker 修复 ios 下不识别 '-' 日期格式的 bug
    * uni-datetime-picker 优化 pc 下弹出层添加边框和阴影
    * uni-datetime-picker 修复 在 admin 中获取弹出层定位错误的bug
    * uni-datetime-picker 修复 type 属性向下兼容，默认值从 date 变更为 datetime
    * uni-datetime-picker 支持日历形式的日期+时间的范围选择
    * uni-steps 修复 uni-steps 横向布局时，多行文字高度不合理的 bug
    * uni-countdown 修复 uni-countdown 不能控制倒计时的 bug
    * uni-tag 修复 royal 类型无效的bug
    * uni-tag 修复 uni-tag 宽度不自适应的bug
    * uni-tag 新增 uni-tag 支持属性 custom-style 自定义样式
    * uni-link 新增 href 属性支持 tel:|mailto:
    * uni-popup 修复 组件内放置 input 、textarea 组件，无法聚焦的问题
    * uni-popup 新增 type 属性的 left\right 值，支持左右弹出
    * uni-popup 新增 open(String:type) 方法参数 ，可以省略 type 属性 ，直接传入类型打开指定弹窗
    * uni-popup 新增 backgroundColor 属性，可定义主窗口背景色,默认不显示背景色
    * uni-popup 新增 safeArea 属性，是否适配底部安全区
    * uni-popup 修复 App\h5\微信小程序底部安全区占位不对的Bug
    * uni-popup 修复 App 端弹出等待的Bug
    * uni-popup 优化 提升低配设备性能，优化动画卡顿问题
    * uni-popup 优化 更简单的组件自定义方式
    * uni-table 修复 示例项目缺少组件的Bug
    * uni-forms 修复 自定义检验器失效的问题
    * uni-title 修复 示例项目缺少组件的Bug
    * uni-transition 修复 示例项目缺少组件的Bug
    * uni-swiper-dot 修复 示例项目缺少组件的Bug
    * uni-ui 新增 组件示例地址
* 【uniCloud】
  + 【重要】新增 uni-starter 集成商用项目开发常见功能的云端一体项目模板 [详情](https://ext.dcloud.net.cn/plugin?id=5057)
  + clientDB 修复 删除记录、统计记录数时受字段权限影响的bug [详情](https://ask.dcloud.net.cn/question/122846)
  + clientDB 修复 日期类型（date）数据校验出错的Bug [详情](https://ask.dcloud.net.cn/question/122517)
  + clientDB 修复 action、validateFunction 内打印日志无法在web控制台查看的Bug
  + unicloud-db组件 修复 联表查询时无法调用remove方法的问题 [详情](https://ask.dcloud.net.cn/question/122934)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 快手广告联盟支持插屏广告
  + 更新 uni-AD 快手广告联盟SDK 为3.3.9 版；快手内容联盟SDK 为3.3.16 版；腾讯优量汇SDK Android为4.360.1230版；穿山甲SDK Android为3.6.1.3版，iOS为3.6.1.2版
  + Android平台 更新 腾讯X5内核版本为 4.3.0.93，解决X5内核渲染页面时获取的UA中不包含 MQQBrowser 关键字的Bug
  + Android平台 更新 UniPush 使用的个推SDK版本为3.2.0.0，提升在Android高版本设备上的推送消息到达率
  + Android平台 修复 QQ登录获取用户信息 getUserInfo 返回的昵称可能出现乱码的Bug [详情](https://ask.dcloud.net.cn/question/120265)
  + iOS平台 更新 高德地图 SDK 为 1.6.4无IDFA版，适配 iOS14.5 开始 AppStore 审核要求用户许可访问IDFA数据
  + iOS平台 修复 3.1.11 版本引出的 横屏状态 toast 消息提示框 和 loading 提示框显示异常的Bug [详情](https://ask.dcloud.net.cn/question/121979)
  + iOS平台 修复 保存文件名称中存在中文时报错的Bug 
  + iOS平台 修复 一键登录 授权登录时需要读取IDFA的Bug

## 3.1.14.20210430-alpha
* 新增 Git托管服务。集成CSDN CodeChina插件。新建项目或对老项目点右键可一键托管到Git [详情](https://ext.dcloud.net.cn/plugin?id=4882)
* 修复 3.1.4版本引出的 新设备 某些情况下，首次启动，第一次点击编辑器没有反应，第二次点击才能启动的Bug
* 修复 uniCloud udb代码块 data没有提示的Bug
* 修复 App 原生App-云打包 服务器返回警告弹窗，用户点击取消，仍继续打包的Bug
* 优化 App 安心打包 使用原生插件时打包的App体积减小
* 修复 Windows App 制作应用wgt包 由于文件被占用，第二次制作失败的Bug
* 【uni-app插件】
  + App平台、小程序平台 新增 uni.getUserProfile 方法用于获取用户信息 [详情](https://uniapp.dcloud.io/api/plugins/login?id=getuserprofile)
  + App平台、H5平台 优化 progress 组件支持 duration 参数 
  + App平台 优化 uni.getVideoInfo 返回信息增加 orientation、type、bitrate 属性
  + App平台 修复 3.1.10 版本引出的 uni.chooseVideo 选取视频失败的Bug
  + App-Android平台 新增 uni.request 网络请求支持 TLS 双向认证 [详情](https://ask.dcloud.net.cn/article/38981)
  + App-Android平台 修复 nvue map 组件 marker 执行移动动画时 callout 可能不会跟随的Bug [详情](https://ask.dcloud.net.cn/question/120985)
  + App-Android平台 修复 nvue video 组件在调用分享功能返回后，视频封面会消失的Bug [详情](https://ask.dcloud.net.cn/question/121364)
  + H5平台 修复 getSystemInfoSync()获取windowBottom的高度错误 [详情](https://ask.dcloud.net.cn/question/121154)
  + 小程序平台 修复 v-for 表达式包含方法时事件编译错误的Bug
  + uni-ui 优化 为依赖 uni-icons 的 ui 组件添加依赖, 导入后自动下载依赖
  + uni-ui 修复 uni-data-picker 非树形数据有 where 属性查询报错的问题
  + uni-ui 新增 uni-datetime-picker 日历形式的日期时间选择
  + uni-ui 新增 uni-number-box v-model 双向绑定
  + uni-ui 修复 uni-number-box 浮点数运算不精确的Bug
  + uni-ui 修复 uni-number-box change 事件触发不正确的Bug
  + uni-ui 修复 uni-rate 布局变化后星星计算不准确的Bug
  + uni-ui 新增 uni-transition 通过方法自定义动画
  + uni-ui 新增 uni-transition custom-class 非 NVUE 平台支持自定义 class 定制样式
  + uni-ui 优化 uni-transition 动画触发逻辑，使动画更流畅
  + uni-ui 优化 uni-transition 支持单独的动画类型
  + uni-ui 优化 uni-transition 文档示例
* 【uniCloud】
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + clientDB 新增 联表查询支持副表foreignKey联查，即副表字段的foreignKey指向主表，把副表数据挂在主表下面 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=st-foreign-key)
  + uniCloud本地调试插件 修复 阿里云偶发启动时多请求并发报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 一键登录 全屏模式支持在登录界面添加自定义登录按钮 [详情](https://uniapp.dcloud.io/univerify)
  + 新增 获取视频信息 getVideoInfo 支持获取画面方向 orientation、视频格式 type、视频码率 bitrate [文档](https://www.html5plus.org/doc/zh_cn/io.html#plus.io.VideoInfo)
  + Android平台 优化 原生模板隐私政策提示框逻辑，解决部分应用市场检测到弹出隐私政策框之前读取mac地址和应用列表的问题 [文档](https://ask.dcloud.net.cn/article/36937)
  + Android平台 更新 新浪微博分享、授权登录 SDK 为 10.10.0 版，适配支持 Android11 设备
  + Android平台 更新 高德地图 SDK 为 7.9.1 版，高德定位 SDK 为 5.3.1 版，友盟统计 SDK 为 9.3.8 版
  + Android平台 修复 腾讯云等安全检测平台报的部分高风险漏洞 [详情](https://ask.dcloud.net.cn/article/39020)
  + Android平台 修复 uni-AD 开通基础开屏广告在弱网状态可能引起崩溃的Bug
  + Android平台 修复 uni-AD 快手联盟的信息流广告可能返回高度不正确导致显示异常的Bug
  + Android平台 修复 uni原生插件在原生模板隐私政策提示框之前可能进行初始化违规读取用户数据的Bug
  + 【重要】iOS平台 优化 广告标识 IDFA 操作逻辑，适配从 iOS14.5 开始 AppStore 审核要求用户许可收集跟踪数据 [详情](https://ask.dcloud.net.cn/article/36107)
  + iOS平台 修复 一键登录 登录和其它登录按钮的默认圆角值不一致的Bug [详情](https://ask.dcloud.net.cn/question/121572)
  + iOS平台 修复 微信授权登录调用 authorize 动态传入 appid 参数不生效的Bug [详情](https://ask.dcloud.net.cn/question/121292)

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
* 【uni-app插件】
  + App平台 新增 插屏广告 uni.createInterstitialAd [详情](https://uniapp.dcloud.net.cn/api/a-d/interstitial)
  + App平台、H5平台 新增 支持 uni.getVideoInfo 用于获取视频信息 [详情](https://uniapp.dcloud.io/api/media/video?id=getvideoinfo)
  + App平台、H5平台 优化 uni.chooseLocation 地图选点支持搜索更大范围
  + App平台、H5平台 优化 input 组件支持 cursor、selectionStart、selectionEnd 属性
  + App平台、H5平台 修复 uni.canvasToTempFilePath 参数 quality 无效的Bug [详情](https://ask.dcloud.net.cn/question/119596)
  + App平台、H5平台 修复 checkbox 组件 disabled 属性无相关样式的Bug 
  + App平台 新增 支持 uni.compressVideo 用于压缩视频 [详情](https://uniapp.dcloud.io/api/media/video?id=compressvideo)
  + App平台 优化 uni.chooseVideo 支持 compressed 参数
  + App平台 优化 video 组件支持 enable-play-gesture 属性
  + App平台 修复 image 组件加载后导致其他原生组件显示错位的Bug
  + App平台 修复 多列 picker 组件未设置 value 报错的Bug [#2561](https://github.com/dcloudio/uni-app/issues/2561)
  + App平台 修复 uni.getStorageInfo 获取信息中部分 key 未包含的Bug [#2577](https://github.com/dcloudio/uni-app/issues/2577)
  + App平台 修复 uni.getSystemInfo 返回的 system 信息未包含系统名称的Bug
  + App-Android平台 修复 部分设备 input 组件设置 focus 属性为 true 时键盘收回的Bug
  + App-Android平台 修复 nvue onLoad 事件调用 plus.navigator.hideSystemNavigation 可能出现页面高度异常的Bug
  + App-Android平台 修复 nvue list 组件中加载大量图片上下滚动可能引起崩溃的Bug
  + App-Android平台 修复 nvue map 组件中多个 marker 切换后 callout 可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100883)
  + App-Android平台 修复 nvue map 组件与页面拖拽滚动手势冲突的Bug [详情](https://ask.dcloud.net.cn/question/120600)
  + App-Android平台 修复 nvue picker-view 组件在部分设备可能显示不正常的Bug
  + App-iOS平台 修复 nvue scroll-view 组件下添加过多子组件会有明显卡顿的Bug [详情](https://ask.dcloud.net.cn/question/118444)
  + App-iOS平台 修复 nvue map 组件 marker 标注的 label 设置 anchorY 偏移值无效的Bug [详情](https://ask.dcloud.net.cn/question/120953)
  + App-iOS平台 修复 nvue image 组件加载网络图片发送请求时没有携带 cookie 的Bug
  + H5平台 优化 uni.getSystemInfo 返回的 system 信息支持 Windows、Mac、Linux
  + H5平台 修复 picker-view-column 中的元素无法触发 click 等事件的Bug [详情](https://ask.dcloud.net.cn/question/119346)
  + H5平台 修复 innerAudio.stop 触发 onCanplay 的Bug [#2538](https://github.com/dcloudio/uni-app/issues/2538)
  + 小程序平台 修复 含有逻辑运算的复杂表达式编译后和预期不一致的Bug [详情](https://ask.dcloud.net.cn/question/118651)
  + 支付宝小程序平台 修复 默认插槽默认内容一直显示的Bug [详情](https://ask.dcloud.net.cn/question/116404)
  + uni-ui 新增 uni-data-picker 支持云端非树形表结构数据 [详情](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui 修复 uni-data-checkbox nvue 下无法选中的问题 [详情](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui 修复 uni-data-picker 根节点 parent_field 字段等于null时选择界面错乱问题 [详情](https://ext.dcloud.net.cn/plugin?id=3796)
  + uni-ui 修复 uni-file-picker 选择的文件非 file-extname 字段指定的扩展名报错的Bug [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 优化 uni-file-picker file-extname 字段支持字符串写法，多个扩展名需要用逗号分隔 [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 修复 微信小程序 nv_navigator is not defined 报错的bug
  + uni-ui 修复 uni-load-more 在首页使用时，h5 平台报 'uni is not defined' 的 bug [详情](https://ext.dcloud.net.cn/plugin?id=29)
  + uni-ui 优化 uni-pagination PC 和 移动端适配不同的 ui [详情](https://ext.dcloud.net.cn/plugin?id=32)
  + uni升级中心 App端 新增 call-check-version.js，可用于单独检测是否有更新 [详情](https://ext.dcloud.net.cn/plugin?id=4542)
* 【uniCloud】
  + 【重要】clientDB联表查询策略调整，请参考此文档进行进行排查并调整：[clientDB联表查询策略调整](https://ask.dcloud.net.cn/article/38966)
  + unicloud-db组件 新增 loadtime 属性，替代 manual 属性 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
  + unicloud-db组件 新增 foreignKey 属性，用于存在多个foreignKey关系时指定要使用的foreignKey [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + uniCloud.mixinDataCom 新增 foreignKey 属性，用途同上 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup-foreign-key)
  + uni-id 修复 3.0.7 版本引出的多个用户访问时可能出现30201报错的Bug
  + uni-id 新增 bindMobile 接口支持通过一键登录的方式绑定 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=bind-mobile)
  + uni-id 调整 bindTokenToDevice 选项默认值改为 false，即默认不再与设备绑定，方便多设备登录
  + 修复 uniCloud.chooseAndUploadFile 在iOS微信小程序真机无法唤起选择文件的Bug
  + uniCloud admin 优化错误提示、键盘响应等众多细节，更新uni-id等众多依赖 [详情](https://ext.dcloud.net.cn/plugin?id=3268)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD支持插屏广告 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.createInterstitialAd)
  + 更新 uni-AD 腾讯优量汇SDK iOS为 4.12.4 版，穿山甲SDK 为 3.5.5.0 版；快手联盟SDK Android为 3.3.8 版
  + 新增 离线打包支持 AppKey 管理 [文档](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey)
  + 新增 压缩视频支持 filename 属性设置压缩后文件保存路径功能 [规范](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.CompressVideoOptions)
  + 优化 一键登录 未通过审核时云端打包后调用API返回 -7 错误 [规范](https://uniapp.dcloud.io/univerify?id=%e9%94%99%e8%af%af%e7%a0%81)
  + 修复 一键登录 授权界面显示后，调用原生模态窗口无法正常显示的Bug
  + 修复 存在开屏广告时 splashclosed 事件可能在启动界面关闭前触发的Bug
  + Android平台 更新 公共测试证书，解决某些检测机构报病毒的问题 [文档](https://ask.dcloud.net.cn/article/36522)
  + Android平台 更新 gif图片库 android-gif-drawable 为 1.2.23 版，解决安全检测报存在远程代码执行漏洞的问题
  + Android平台 修复 申请权限被用户拒绝后可能无法再次正常申请权限的Bug [详情](https://ask.dcloud.net.cn/question/120747)
  + Android平台 修复 UniPush个推模块过度申请权限的Bug [详情](https://ask.dcloud.net.cn/question/119240)
  + Android平台 修复 视频播放控件 播放 http/https 地址视频的 cookie 与 X5 内核 webview 页面没有同步共享的Bug
  + Android平台 修复 一键登录 在部分设备上服务协议文本字体显示过大的Bug
  + Android平台 修复 一键登录 显示和关闭授权界面动画时间过长的Bug
  + Android平台 修复 Downloader 下载较大文件时可能引起页面无法更新的Bug
  + Android平台 修复 部分华为手机调用相机录像成功后无法找到视频文件的Bug
  + iOS平台 修复 uni-AD 仅开通增强开屏广告可能出现无法关闭spalsh页面的Bug
  + iOS平台 修复 Apple应用内支付 IAP 某些情况丢单无法恢复的Bug [文档](https://ask.dcloud.net.cn/article/497)
  + iOS平台 修复 应用覆盖安装后可能出现启动白屏的Bug
  + iOS平台 修复 从本地相册选择保存在 iCloud 的视频在下载失败时可能引起崩溃的Bug
  + iOS平台 修复 从本地相册选择gif图片预览时不能播放的Bug
  + iOS平台 修复 在 iPhone12 系列设备未适配底部安全区域的Bug [详情](https://ask.dcloud.net.cn/question/119291)
  + iOS平台 修复 视频播放控件 播放 http/https 地址视频没有同步共享 cookie 的Bug
  + iOS平台 修复 视频播放控件 VideoPlayer 播放某些视频显示方向可能不正确的Bug

## 3.1.8.20210407-alpha
* 修复 uniCloud `uni_modules`公共模块，依赖另一个`uni_modules`公共模块，上传所有云函数、公共模块及actions，公共模块依赖关系丢失的Bug
* 【uni-app插件】
  + App-Android平台 修复 3.1.6 版本引出的 nvue scroll-view组件设置 scroll-x 为 true 时可能引起闪退的Bug [详情](https://ask.dcloud.net.cn/question/119858)
  + App-iOS平台 修复 picker 组件部分情况下显示异常的Bug [详情](https://ask.dcloud.net.cn/question/119591)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 激励视频播放超过30秒的穿山甲广告点击跳过按钮 onClose 回调中 isEnd 属性值为 false 的Bug
  + iOS平台 修复 一键登录 授权登录界面使用浅色背景可能看不到 loading 显示效果的Bug
* 【uniCloud】
  + 新增 [uni-upgrade-center](https://uniapp.dcloud.io/uniCloud/upgrade-center)，提供了简单、易用、统一的App管理、App版本管理、安装包发布管理，升级检测更新管理。
  + uniCloud本地调试插件 修复 3.1.5 版本引出的腾讯云连接本地云函数运行一段时间后报错的Bug [详情](https://ask.dcloud.net.cn/question/119089)
  + 阿里云 新增 支持对云函数设置单实例并发度 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=concurrency)
  + 阿里云 新增 支持TTL索引 [详情](https://uniapp.dcloud.net.cn/uniCloud/db-index?ttl)

## 3.1.6.20210318-alpha
* 修复 MacOSX 内置浏览器 右键菜单【查找代码中对应的DOM节点】菜单丢失的Bug [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/built-in-browser)
* 修复 插件市场 云端一体页面模板 导入HBuilderX，某些情况下，页面路径创建错误的Bug
* 【uni-app插件】
  + 百度小程序平台 修复 使用基础库 3.260+ 时，复杂表达式不显示的Bug [详情](https://ask.dcloud.net.cn/question/118213)
  + 百度小程序平台 修复 使用 usingComponents 引入部分动态库组件无效的Bug [#2526](https://github.com/dcloudio/uni-app/issues/2526)
  + App-iOS平台 修复 nvue web-view 组件在应用设置 allowsInlineMediaPlayback 为 true 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/106864)
  + App-iOS平台 修复 nvue map 组件 polyline 设置 arrowIconPath 为自定义箭头图标无效的Bug [详情](https://ask.dcloud.net.cn/question/118538)
  + 【重要】uni-ui 新增 调整为uni_modules目录规范，支持在HBuilderX里直接发布、更新、删除等; 
  + uni-ui 新增 uni-row 组件，栅格系统; 
  + uni-ui 新增 uni-datetime-picker 的 hide-second 属性、border 属性; 
  + uni-ui 修复 uni-datetime-picker 选择跟显示的日期不一样的 bug， 
  + uni-ui 修复 uni-datetime-picker change事件触发2次的 bug
  + uni-ui 修复 uni-datetime-picker 分、秒 end 范围错误的 bug
  + uni-ui 新增 uni-tr selectable 属性，用于 type=selection 时，设置某行是否可由全选按钮控制
  + uni-ui 新增 uni-data-checkbox 新增 disabled属性，支持nvue
  + uni-ui 优化 uni-data-checkbox  无选项时提示“暂无数据”
  + uni-ui 优化 uni-data-checkbox  默认颜色显示
  + uni-ui 新增 uni-link href 属性支持 tel:|mailto:
  + uni-ui 新增 uni-table 示例demo
  + uni-ui 修复 uni-data-picker 微信小程序某些情况下无法选择的问题，事件无法触发的问题
  + uni-ui 修复 uni-nav-bar easycom 下，找不到 uni-status-bar 的bug
  + uni-ui 修复 uni-easyinput 示例在 qq 小程序上的bug
  + uni-ui 修复 uni-forms 动态显示uni-forms-item的情况下，submit 方法获取值错误的Bug
  + uni-ui 修复 uni-forms schema 默认提示语不准确的问题
  + uni-ui 修复 uni-forms 偶发性获取表单值错误的Bug
  + uni-ui 修复 uni-forms 校验 uni-data-picker value 为 0 时，返回值错误的Bug
  + uni-ui 修复 uni-forms uni-forms-item 组件隐藏时依然触发校验的bug
  + uni-ui 修复 uni-forms 偶发性获取表单值错误的Bug
  + uni-ui 调整 cli 项目 建议使用 easycom 方式引用组件，如使用按需引用，需手动维护组件内部引用
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 3.1.0 版本引出的 wap2app 应用无法正常运行的Bug
  + Android平台 修复 一键登录 在部分双卡设备可能无法调起授权页面的Bug [详情](https://ask.dcloud.net.cn/question/117826)
* 【wap2app】
  + iOS平台 默认模板和hello wap2app模板默认使用UIWebview内核
  + iOS平台 默认模板和hello wap2app模板适配安全区域

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
* 【uni-app插件】
  + App平台、H5平台 优化 uni.showModal、uni.showActionSheet 等 API 内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 优化 应用退出提示内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 优化 uni.scanCode、uni.previewImage 等 API 内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
  + App平台 修复 SelectorQuery.exec 在安卓 4.x 系统报错的 Bug
  + App-iOS平台 修复 nvue ad-draw 组件播放优量汇视频广告可能无声音的Bug
  + App-iOS平台 修复 subNVue input 组件获取焦点后隐藏页面时软键盘不会关闭的Bug [详情](https://ask.dcloud.net.cn/question/117872)
  + H5平台 优化 picker、video 组件内置国际化支持 [详情](https://uniapp.dcloud.io/collocation/i18n)
* 【uniCloud】
  + unicloud-db组件 add、update、remove方法新增可选参数needConfirm、needLoading、loadingTitle [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + unicloud-db组件 新增 load 事件支持 pagination [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=loadevent)
  + DB Schema 修复 exclusiveMinimum|exclusiveMaximum 默认验证提示语不准确的问题
  + uniCloud本地调试插件 修复 公共模块修改之后无法立即生效的Bug
  + schema2code 新增 导出 uni_modules
  + schema2code 修复 生成 uni-file-picker 组件的属性 file-extname 类型错误的问题
  + schema2code 优化 导出 admin list页面的批量删除逻辑，没有选择项时禁用批量删除按钮
  + schema2code 优化 生成的前端 list 页面，增加无数据提示语 "没有更多数据"
* 【App插件(含5+App和uni-app的App端)】
  + 新增 相册选择界面的预览界面中补充图片编辑功能，支持裁剪、涂鸦、马赛克、添加文字等。无需调用API，升级新版即可。
  + 新增 一键登录 支持全屏模式
  + 新增 uni-AD 支持快手内容联盟 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.showContentPage)
  + 新增 plus.zip.compressVideo 支持压缩视频功能 [规范](https://www.html5plus.org/doc/zh_cn/zip.html#plus.zip.compressVideo)
  + 更新 uni-AD 腾讯优量汇SDK Android为4.333.1203版；穿山甲SDK iOS为3.4.2.8版；快手联盟SDK Android为3.3.7版
  + Android平台 更新 QQ 分享、登录SDK版本为3.5.2，解决在 Android11 设备无法分享图片的Bug [详情](https://ask.dcloud.net.cn/question/118510)
  + Android平台 优化 云端打包 启动界面样式为自定义启动图时的显示速度
  + Android平台 优化 一键登录 服务协议复选框勾选操作不灵敏的Bug [详情](https://ask.dcloud.net.cn/question/118305)
  + Android平台 修复 一键登录 在部分设备服务协议项超过两行可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/116873)
  + Android平台 优化 视频播放控件 设置 playStrategy 属性m3u8视频播放速度 [详情](https://ask.dcloud.net.cn/question/117115)
  + Android平台 修复 视频播放控件 动态设置 controls 属性延时生效的Bug [详情](https://ask.dcloud.net.cn/question/117457)
  + Android平台 修复 视频播放控件 播放 http/https 地址视频没有同步共享 cookie 的Bug
  + Android平台 修复 Webview窗口在部分场景加载 html 页面可能出现 plus 对象为空的Bug
  + iOS平台 新增 uni原生插件云端打包支持iOS Extension [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/package?id=ios-extension)
  + iOS平台 修复 从系统相册选择视频文件返回的大小和宽高不正确的Bug [详情](https://ask.dcloud.net.cn/question/117975)
  + iOS平台 修复 在 iOS14 系统返回安全区域的top不正确引起界面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/117849)
* 【UniMPSDK】
  + Android平台 修复 部分直达nvue页面中本地路径图片无法正常加载显示的Bug

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
* 【uni-app插件】
  + App平台 修复 nvueStyleCompiler 设置为 uni-app 时 subNvue 页面根节点 class 无效的 Bug
  + App平台 修复 nvueStyleCompiler 设置为 uni-app 时 nvue 页面样式中 !important 前不含空格时报错的Bug [详情](https://ask.dcloud.net.cn/question/117212)
  + H5平台 修复 部分情况下获取 wxs 实例错误的的Bug [详情](https://ask.dcloud.net.cn/question/117097)
* 【uniCloud】
  + clientDB 修复 数据库运算方法in报错的Bug
  + clientDB 修复 jql非运算表现异常的Bug
  + clientDB 优化 部分场景下getCount性能
  + clientDB 优化 部分场景下jql联表查询性能
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 微信分享本地图片在部分 Android11 设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/117050)
  + Android平台 修复 页面中 input 标签 type 为 tel/email 时，弹出软键盘上方的辅助输入栏内容可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/118051)
  + iOS平台 修复 保存 gif 图片到系统相册可能引起卡死或崩溃的Bug [详情](https://ask.dcloud.net.cn/question/117814)

## 3.1.3.20210219-alpha
* 修复 App manifest.json App原生插件配置 云端插件 含输入框配置项没有显示的Bug
* 修复 uniCloud uni_modules下的云函数, 依赖项目根目录uniCloud下的公共模块时，上传失败的Bug
* 修复 uni_modules 项目模板无法从插件市场更新的Bug
* 【uni-app插件】
  + App平台、H5平台 修复 3.1.0 版本引出的 canvasGetImageData、canvasToTempFilePath 获取高度错误Bug [详情](https://ask.dcloud.net.cn/question/117082)
  + App平台、H5平台 修复 3.1.0 版本引出的获取自定义组件 dataset 数据缺失的Bug [详情](https://ask.dcloud.net.cn/question/117206)
  + App平台 修复 input 组件在安卓设备上 focus 事件触发错乱的Bug [详情](https://ask.dcloud.net.cn/question/116576)
  + App-Android平台 修复 3.1.0 版本引出的 nvue input 组件设置 ajust-position 为 false 后，keyboardheightchange 事件返回软键盘高度为0的Bug [详情](https://ask.dcloud.net.cn/question/117295)
  + App-Android平台 修复 nvue input 组件 focus 事件可能触发两次的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 3.1.0 版本引出的 wap2app 项目真机运行页面标题栏无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/117278)

## 3.1.2.20210206-alpha
* 修复 uniCloud 云函数，上传部署，依赖的uni_modules公共模块没有上传的Bug
* 【uni-app插件】
  + App平台 修复 nvueStyleCompiler 配置为 uni-app 时 list 组件内 class 动态更新失效的Bug [详情](https://ask.dcloud.net.cn/question/116913)
  + H5平台 修复 应用初始化以前调用 uni.getSystemInfoSync 报错的Bug [详情](https://ask.dcloud.net.cn/question/116612)

## 3.1.1.20210204-alpha
* 优化 uniCloud 前端网页托管 文件上传效率，速度提升数倍
* 修复 uniCloud 云函数管理公共模块依赖当uni_modules名称长度比较大时UI上出现名称重叠的Bug
* 修复 uniCloud 云函数管理公共模块依赖某些情况下不显示uni_modules下的公共模块的Bug
* 优化 uniCloud 下载所有云函数、公共模块及actions, 控制台增加相关日志
* 修复 uni_modules 删除 module 下的 database 时，项目根目录的 uniCloud目录没有自动刷新的Bug
* 修复 uni_modules easycom模式 代码助手无法提示 modules 下 components 的Bug
* 修复 uni_modules 从插件市场更新插件时，部分情况更新失败的Bug
* 【uni-app插件】
  + 【重要】App平台 新增 nvue 组件支持 render-whole 属性。可以按组件整体渲染，而不是从上到下逐行渲染 [详情](https://uniapp.dcloud.io/nvue-outline?id=render-whole)
  + App平台 新增 manifest.json 支持 nvue css 编译新旧版本配置 app-plus -> nvueStyleCompiler。可切换老版的nvue css 编译器 [详情](https://ask.dcloud.net.cn/article/38751)
  + App平台 修复 纯 nvue 编译模式下 pages.json 缺少 style 节点编译报错的Bug
  + App平台 修复 3.1.0 版本引出的 nvue 页面中样式与 app.vue 样式冲突的Bug [详情](https://ask.dcloud.net.cn/question/116787)
  + App平台 修复 3.1.0 版本引出的 nvue 页面中 border-color 使用 rgb 类型时解析报错的Bug [详情](https://ask.dcloud.net.cn/question/116746)
  + H5平台 新增 image 组件支持 draggable 属性
  + H5平台 优化 swiper、movable 组件拖动时禁止 click 事件触发
* 【uniCloud】
  + 修复 uniCloud.getCurrentUserInfo 报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 uni-AD 腾讯优量汇SDK为4.332.1202版

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
* 【uni-app插件】
  + 新增 uni.getSystemInfo 支持获取 deviceId 作为设备标识。App 端根据设备信息生成，非 App 端由 uni-app 框架生成基于随机数的 id
  + App平台、H5平台 优化 dataset 获取逻辑，完善非 string 类型支持
  + App平台、H5平台 修复 css 媒体查询内的 rpx 单位不生效的Bug [详情](https://ask.dcloud.net.cn/question/112279)
  + App平台、H5平台 修复 picker 组件特定情况下设置 start、end 表现异常的Bug [详情](https://ask.dcloud.net.cn/question/114223)
  + App平台、H5平台 修复 部分时机获取 input、textarea 组件值不正确的Bug [详情](https://ask.dcloud.net.cn/question/115897)
  + 【重要】App平台 新增 nvue css 支持组合选择器（相邻兄弟选择器、普通兄弟选择器、子选择器、后代选择器）
  + App平台 新增 manifest.json 支持全屏配置 app-plus -> fullscreen
  + App平台 新增 支持 uni.offNetworkStatusChange 方法
  + App平台 新增 支持 uni.offKeyboardHeightChange 方法
  + App平台 新增 input、textarea 组件支持 keyboardheightchange 事件
  + App平台 新增 nvue map 组件支持展示 POI 点、建筑物、个性化地图等新特性 [详情](https://uniapp.dcloud.io/component/map)
  + App平台 新增 video 组件新增属性 codec、http-cache、play-strategy
  + 【重要】App平台 优化 nvue 支持更多简写样式：border、border-top、border-right、border-bottom、border-left、border-style、border-width、border-color、border-radius、flex-flow、font、background
  + App平台 优化 uni.getNetworkType 支持获取 5g 网络类型
  + App平台 优化 uni.saveImageToPhotosAlbum 支持返回保存路径
  + App平台 修复 uni.canvasToTempFilePath 配置的大小超过 canvas 大小时获取的图像空白的Bug [详情](https://ask.dcloud.net.cn/question/111225)
  + App平台 修复 cover-view 样式动态变更未生效的Bug
  + App平台 修复 部分情况下组件递归调用内部 v-for 报错的Bug
  + App平台 修复 特定分辨率（iPhone12 Pro）下文字换行错误的Bug [详情](https://ask.dcloud.net.cn/question/114636)
  + App平台 修复 部分情况下 v-for 渲染列表事件错乱的Bug [详情](https://ask.dcloud.net.cn/question/112100)
  + App平台 修复 v-for 渲染 Map、Set 数据类型错乱的Bug [详情](https://ask.dcloud.net.cn/question/115506)
  + App平台 修复 uni.compressImage 传入本地路径失败的Bug [详情](https://ask.dcloud.net.cn/question/115315)
  + App-Android平台 修复 页面生命周期 onshow 中调用 getLocation 可能会引起死循环的Bug
  + App-Android平台 修复 软键盘弹出后，切换输入法软键盘高度发生变化时不会正常触发 onKeyboardHeightChange 事件的Bug
  + App-Android平台 修复 软键盘弹出后，返回到之前的页面可能显示高度不正确的bug [详情](https://ask.dcloud.net.cn/question/115772)
  + App-Android平台 修复 previewImage 预览网络图片长按保存到系统相册失败的Bug [详情](https://ask.dcloud.net.cn/question/115727)
  + App-Android平台 修复 subNVues 设置 popup 模式后，再设置 left 执行动画会卡顿的Bug [详情](https://ask.dcloud.net.cn/question/114631)
  + App-Android平台 修复 nvue css 中设置 transform 属性值中使用百分比无效的Bug [详情](https://ask.dcloud.net.cn/question/115728)
  + App-Android平台 修复 nvue live-pusher 组件横屏预览时上传视频方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/115673)
  + App-Android平台 修复 nvue map 组件动态绘制 polyline 路径轨迹可能会闪烁的Bug [详情](https://ask.dcloud.net.cn/question/90676)
  + App-Android平台 修复 nvue input 组件设置 cursor-spacing 属性无效的Bug
  + App-Android平台 修复 3.0.7 版本引出的 canvas 组件绘制网络图片失败的Bug
  + App-iOS平台 修复 nvue css 中设置 transform 执行动画可能引起崩溃的Bug
  + App-iOS平台 修复 nvue 使用 animation 对组件执行动画期间，组件绑定的点击事件可能不触发的Bug [详情](https://ask.dcloud.net.cn/question/98554)
  + App-iOS平台 修复 nvue ad-draw 组件加载快手联盟广告时，在 list 中滚动后可能无法正常显示的Bug
  + App-iOS平台 修复 nvue image 组件在 iOS14 系统设置 placeholder 后无法正常显示 src 图片的Bug [详情](https://ask.dcloud.net.cn/question/115531)
  + App-iOS平台 修复 nvue video 组件使用 exitFullScreen 无法正常退出全屏的Bug [详情](https://ask.dcloud.net.cn/question/111855)
  + App-iOS平台 修复 nvue web-view 组件加载的网页中 a 标签 target 属性值为 _blank 时，点击 a 标签链接无反应的Bug [详情](https://github.com/dcloudio/hello-uniapp/issues/37)
  + H5平台 新增 EditorContext 支持 blur、getSelectionText、scrollIntoView 方法
  + H5平台 新增 getTopWindowStyle、getLeftWindowStyle、getRightWindowStyle 方法 [详情](https://uniapp.dcloud.net.cn/api/ui/adapt)
  + H5平台 修复 ActionSheet 数据量多无法滚动的Bug
  + H5平台 修复 特定情况下 uni.showModal 内容区域出现横向滚动条的Bug
  + H5平台 修复 image 组件使用 require 方式引用的资源在配置基础路径为相对路径时，编译后不显示的Bug
  + 【重要】小程序平台 新增 发行时支持混合分包模式，将 uni-app 项目发行为小程序分包，集成到已有的原生开发的小程序 [详情](https://uniapp.dcloud.net.cn/hybrid)
  + 小程序平台 修复 事件回调内 arguments 获取到多余参数的Bug [#2270](https://github.com/dcloudio/uni-app/issues/2270)
  + 小程序平台 修复 修复 v-for 循环 wxs 模块内容报错的Bug [详情](https://ask.dcloud.net.cn/question/115658)
  + 支付宝平台、头条小程序平台 修复 部分情况下无法正确编译模板中 class 的Bug [#2294](https://github.com/dcloudio/uni-app/pull/2294)
  + 支付宝小程序平台 优化 组件支持 vue 事件监听方式（需启用 component2）[详情](https://ask.dcloud.net.cn/question/110978)
  + 支付宝小程序平台 修复 内置组件部分事件无法监听的Bug [#2185](https://github.com/dcloudio/uni-app/issues/2185)
  + 【重要】百度小程序平台 新增 支持 onInit 生命周期
  + 百度小程序平台 优化 支持使用 usingComponents 引入插件（原名称 usingSwanComponents 仍然保留）
  + 【重要】uni-ui 新增 所有组件适配 PC 端，适配宽屏、拖动、支持enter和esc按键响应 [详情](https://hellouniapp.dcloud.net.cn/pages/extUI/badge/badge)
  + uni-ui 新增 uni-file-picker 文件直传uniCloud云空间的组件 [详情](https://ext.dcloud.net.cn/plugin?id=4079)
  + uni-ui 优化 uni-forms、uni-easyinput、uni-group 兼容 nvue 页面
  + 【重要】新增 云端一体搜索模板。无需自行开发搜索 [详情](https://ext.dcloud.net.cn/plugin?id=3851)
  + 【重要】新增 uni-captcha 基于uniCloud的图片验证码 [详情](https://ext.dcloud.net.cn/plugin?id=4048)
  + 【重要】新增 网赚游戏合成猫项目模板 [详情](https://ext.dcloud.net.cn/plugin?id=4095)
  + 【重要】hello uniCloud 新增 clientDB、schema2code示例 [详情](https://ext.dcloud.net.cn/plugin?id=4082)
  + 新增 uniCloud-banner模板 支持管理员上传修改banner [详情](https://ext.dcloud.net.cn/plugin?id=4117)
  + 云端一体登录模板 新增 用户名密码连续登录失败时要求输入图形验证码
* 【uniCloud】
  + 【重要】客户端 新增 uniCloud.mixinDatacom 混入，方便快速开发datacom组件，无需自行处理云数据绑定 [详情](https://uniapp.dcloud.net.cn/component/datacom?id=mixindatacom)
  + 客户端 新增 uniCloud.chooseAndUploadFile API，选文件后直接上传到uniCloud云存储 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=chooseanduploadfile)
  + 【重要】uni-id 新增 在token内默认缓存角色权限，云端获取角色权限不再查库，提升clientDB性能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
  + uni-id 新增 支持苹果登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=loginbyapple)
  + uni-id 新增 客户端获取用户信息接口，包括权限角色 [详情](https://uniapp.dcloud.net.cn/uniCloud/client-sdk?id=client-getcurrentuserinfo)
  + 云函数 新增 获取客户端标识 deviceId [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=intro)
  + 阿里云 新增 云函数支持 uploadFile 接口（本地调试暂不支持）[详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=clouduploadfile)
  + 阿里云 新增 云数据库 add update 可以传入日期对象
  + 阿里云 新增 getTempFileURL 接口（仅为抹平和腾讯云的接口差异）[详情](https://uniapp.dcloud.net.cn/uniCloud/storage?id=cloudgettempfileurl)
  + web控制台 阿里云 新增 慢查询日志，有助于分析数据库设计缺陷
  + uniCloud本地调试插件 新增 支持 uni_modules
  + uniCloud本地调试插件 修复 cli 项目无法使用 uniCloud 本地调试的Bug
  + uniCloud本地调试插件 修复 客户端连接本地云函数时云函数内 callFunction 返回格式不正确的Bug
  + DB Schema 字段类型bsonType 新增 file、date类型 [详情](https://uniapp.dcloud.io/uniCloud/schema?id=bsontype)
  + DB Schema 字段类型bsonType 为 array 时，新增 arrayType 子类型，描述数组里项目的类型。比如 arrayType 设为 file，表示一组文件 [详见](https://uniapp.dcloud.io/uniCloud/schema?id=arraytype)
  + DB Schema 新增 fieldRules 用于描述字段之间的关系，如字段“开始时间”需小于字段“结束时间” [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=field-rules)
  + DB Schema 新增 count 权限 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=col-permission)
  + DB Schema 新增 validateFunction 配置是否在客户端生效 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=validatefunction)
  + clientDB 新增 数据库运算符，可在 where、field、groupBy、groupField 以及 DB Schema 的 fieldRules 内使用 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=where)
  + clientDB 新增 支持 groupBy 对数据进行分组统计 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=groupby)
  + clientDB 新增 支持 distinct 对数据进行去重 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=distinct)
  + clientDB 修复 JQL 写法内使用下标访问数组内的元素报错的Bug
  + unicloud-db组件 add、update 方法支持调用 action云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=add)
  + schema2code 新增 生成前端页面时补充list.vue、detail.vue页面
  + schema2code 调整 之前的 component 改名为 componentForEdit，并新增 componentForShow 。一个字段可以分别控制它在表单页面（add、edit）和展示页面（list、detail）所使用的组件
  + schema2code 新增 展示页面可直接显示bool值为√或×，显示DB Schema里enum的text内容。
* 【App插件(含5+App和uni-app的App端)】
  + uni-AD 更新 腾讯优量汇SDK Android为4.330.1200版、iOS为4.12.3版；穿山甲SDK iOS为3.4.2.3版；快手联盟SDK iOS为3.3.6版
  + 一键登录 新增 defaultCheckBoxState 属性设置默认是否勾选同意使用服务条款框
  + 微信分享 新增 分享音乐支持 href 属性设置音乐网页地址
  + Android平台 新增 视频播放控件支持 codec 属性设置是否开启硬解码，解决某些视频播放不清晰的问题 [详情](https://ask.dcloud.net.cn/question/95568)
  + Android平台 新增 视频播放控件支持 httpCache 属性设置是否开启缓存，解决重复播放网络视频无法复用缓存的问题 [详情](https://ask.dcloud.net.cn/question/105515)
  + Android平台 新增 视频播放控件支持 playStrategy 属性设置视频优化策略，解决播放在线高清视频卡顿、音视频脱轨的问题 [详情](https://ask.dcloud.net.cn/question/116249)
  + Android平台 修复 视频播放控件 seek 跳转不准确的Bug [详情](https://ask.dcloud.net.cn/question/115171)
  + Android平台 修复 微信分享图片在 Android11 设备可能失败的Bug [详情](https://ask.dcloud.net.cn/question/115153)
  + Android平台 修复 设置应用角标数字时没有同步状态到 UniPush 服务器的Bug
  + iOS平台 优化 uni-AD 信息流广告内存管理机制，解决显示广告过多时内存泄露引起崩溃的Bug
  + iOS平台 修复 uni-AD 调用 plus.ad.releaseAdData 释放广告数据可能引起崩溃的Bug
  + iOS平台 更新 高德地图SDK为 7.8.0 版，解决在 iOS14 系统拖动地图时卡顿的Bug [详情](https://ask.dcloud.net.cn/question/113674)
  + iOS平台 修复 QQ分享音乐，点击分享内容跳转到的是音乐播放页面而不是 href 设置的音乐网页的Bug
  + iOS平台 修复 图片轮播控件 ImageSlider 设置样式可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/116068)
  + iOS平台 修复 从系统相册选择 iCloud 视频文件没有触发回调的Bug [详情](https://ask.dcloud.net.cn/question/115448)
  + iOS平台 修复 视频播放控件横向全屏播放后，调用 exitFullScreen 退出全屏可能界面显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/115775)
  + iOS平台 修复 视频播放控件拖动进度条可能引起进度显示不正常，不触发 timeupdate 事件的Bug [详情](https://ask.dcloud.net.cn/question/115300)
* 【UniMPSDK】
  + iOS平台 修复 关闭当前小程序立刻打开另一个小程序后，小程序可能无法关闭的Bug [详情](https://ask.dcloud.net.cn/question/115243)
  + iOS平台 新增 小程序页面关闭时支持动态设置原生导航栏的显隐方法 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=SetNavigationBarHidden)

## 3.0.7.20210109-alpha
* 【重要】新增 iOS App 安心打包，无需提交代码和证书到云打包机。更安全、更快捷 (仅支持MacOSX，不支持windows) [详情](https://ask.dcloud.net.cn/article/37979)
* 修复 插件API hx.window.createWebViewDialog 设置窗口大小无效的Bug
* 修复 3.0.4 版本引出的 当编辑器没有打开项目下任何文件，直接在项目管理器选中项目，按下Ctrl+R，HBuilderX闪退的Bug [详情](https://ask.dcloud.net.cn/question/114619)
* 修复 App 真机运行，某些情况下，HBuilderX闪退的Bug
* 修复 App manifest.json App原生插件配置，本地插件，带`.`的key值写入文件异常的Bug
* 修复 App Android 安心打包，某些情况下，打包失败的Bug
* 【uni-app插件】
  + App平台 修复 windows 系统部分情况下，查找 Chrome 失败，导致无法正常 debug 的Bug
  + App平台 修复 包含微信小程序组件时，部分情况下首次编译触发热刷新的Bug
  + App-Android平台 修复 nvue list 组件调用 setSpecialEffects 设置吸顶后，input 子组件无法获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/114511)
  + App-Android平台 修复 nvue list/waterfall 组件使用 refresh 并设置 background-color 属性后会出现白边的Bug [详情](https://ask.dcloud.net.cn/question/105800)
  + App-iOS平台 修复 nvue refresh 组件处于刷新状态时显示位置向下偏移0.5像素的Bug
  + 快应用 修复 华为快应用IDE V3.0.2无法识别项目类型的Bug
* 【uniCloud】
  + DB Schema 新增 支持对 string 类型数据配置 trim ，可自动对字符串去除前后空白字符 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=trim)
  + DB Schema 修复 部分情况下使用 enum 报错的Bug
  + DB Schema 修复 exclusiveMinimum、exclusiveMaximum 无效的bug
  + clientDB 修复 查询树形结构时使用 startWith 某些写法导致报错的Bug
  + clientDB 修复 field 内使用JQL联表查询语法时多个右花括号连续出现导致报错的Bug
  + clientDB 修复 field 中包含`-`时报错的Bug
  + uniCloud本地调试插件 修复 部分日志导致本地调试服务崩溃的Bug
  + unicloud-db组件 支持tree查询，新增属性 gettree、startwith、limitlevel [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db?id=props)
* 【App插件(含5+App和uni-app的App端)】
  + 一键登录 优化 错误回调返回数据格式，添加 appid、metadata、uid 属性，便于排查错误 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.ErrorCallback)
  + Android平台 更新 uni-AD 快手联盟SDK为3.3.6版，腾讯优量汇SDK为4.310.1180版，今日头条穿山甲SDK为3.4.1.0版
  + Android平台 更新 腾讯X5内核版本为 v4.3.0.67_43967 [详情](https://ask.dcloud.net.cn/article/36806)
  + Android平台 更新 UniPush 华为厂商推送 SDK 版本为 v4:2.0.0，适配 HMS4.0+ [详情](https://ask.dcloud.net.cn/article/35622#huawei)
  + Android平台 调整 应用主 Activity 为 FragmentActivity [详情](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + Android平台 修复 native.js 调用 requestPermissions 请求的权限已被允许可能引起其它功能无法正常申请系统权限的Bug [详情](https://ask.dcloud.net.cn/question/114645)
  + Android平台 修复 云端打包 更新 com.android.tools.build:gradle 版本后可能引起安装包文件变大、运行显示白屏的Bug [详情](https://ask.dcloud.net.cn/question/114496)
  + Android平台 修复 uploader 上传文件监听上传进度变化返回数据不准确的Bug [详情](https://ask.dcloud.net.cn/question/101035)
  + Android平台 修复 监听按键事件 keydown、keyup 不触发回调的Bug
  + Android平台 修复 video 封面图片 poster 拉伸变形显示的Bug [详情](https://ask.dcloud.net.cn/question/114952)
  + Android平台 修复 video 设置显示默认播放控件 controls 属性为 false 时手势操作失效的Bug
  + Android平台 修复 previewImage 预览图片可能显示模糊的Bug [详情](https://ask.dcloud.net.cn/question/113520)
  + Android平台 修复 2.9.9版本引出的 native.js 获取到原生对象可能无法执行器内部函数的Bug [详情](https://ask.dcloud.net.cn/article/38648)
  + iOS平台 修复 previewImage 预览网络图片地址中包含query参数过多可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/98259)
  + iOS平台 修复 audio 音频资源地址中包含中文字符时无法正常播放的Bug [详情](https://ask.dcloud.net.cn/question/103421)
  + iOS平台 修复 video 动态更新 src 属性值域名相同时无法正常切换视频的Bug [详情](https://ask.dcloud.net.cn/question/110386)
  + iOS平台 修复 video 视频资源地址中包含中文字符时无法正常播放的Bug
  + iOS平台 修复 titleNView 标题文字在隐藏软键盘时可能出现抖动的Bug

## 3.0.4.20201230-alpha
* 修复 前端网页托管 上传文件，控制台打印日志时，无法切换到其它控制台的Bug
* 修复 MacOSX uniCloud 某些情况下，关联项目后解除关联，文件夹没有刷新的Bug
* 修复 uniCloud 迁移cloudfunctions目录 当项目存在cloudfunctions_init.json时，迁移后云函数package.json文件dependencies字段内容丢失的Bug
* 【uniCloud】
  + uniCloud本地调试插件 修复 调试时较早请求云函数且无法连接本地调试服务时报错的Bug
  + uniCloud本地调试插件 修复 部分日志格式错误的Bug
  + uniCloud本地调试插件 修复 本地云函数向云数据库插入值为 null 的字段会报错的Bug
  + uniCloud本地调试插件 调整 输出调整复杂类型时调整最大展示层级为20级
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 云端打包 com.android.tools.build:gradle 版本为 4.1.1，适配Android11，修复无法准确检查uni原生插件需要兼容启用AndroidX [详情](https://nativesupport.dcloud.net.cn/NativePlugin/course/android?id=%e6%b3%a8%e6%84%8f)
  + iOS平台 修复 uni-AD 快手联盟 激励视频广告的奖励倒计时完成后关闭广告事件 onClose 的 isEnded 属性值可能为 false 的Bug

## 3.0.3.20201228-alpha
* 修复 3.0.0 版本引出的 HBuilderX标准版 首次启动后 某些情况下，代码块无法正常使用的Bug
* 【uni-app插件】
  + App-iOS平台 修复 nvue video 组件动态更新 src 属性无法播放本地视频的Bug [详情](https://ask.dcloud.net.cn/question/113920)
  + H5平台 修复 unicloud-db 组件 开发环境下 设置属性 :getone="true" 时报错的Bug
  + 微信小程序平台 修复 unicloud-db 组件某些情况下无效的Bug
  + 字节小程序平台 新增 支持分包加载 [详情](https://uniapp.dcloud.io/collocation/pages?id=subpackages)
* 【uniCloud】
  + clientDB API 新增 树形数据查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=gettree)
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 保存路径中包含特殊字符的图片到系统相册失败的Bug [详情](https://ask.dcloud.net.cn/question/113990)
  + iOS平台 修复 一键登录 设置多个自定义服务协议时中文语法不正确的Bug

## 3.0.2.20201225-alpha
* 【uni-app插件】
  + App平台 修复 一键登录 univerifyStyle 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/113997)
* 【uniCloud】
  + clientDB 新增 数据库错误 error 事件 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=error)
  + clientDB 调整 refreshToken 事件由 db.auth 移至 db ，旧写法仍兼容 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=refreshtoken)
  + uniCloud本地调试插件 修复 本地运行云函数运行结果显示不全的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 支付宝SDK为15.8.00，解决提交 GooglePlay 审核报存在不安全的加密模式的Bug [详情](https://ask.dcloud.net.cn/question/114053)
  + Android平台 修复 uni-AD 开屏广告在部分设备可能触发崩溃的Bug
* 【uni小程序SDK】
  + iOS平台 修复 小程序跳转其他原生页面再返回小程序时，对应生命周期事件 onShow、onHide 没有触发的Bug

## 3.0.1.20201223-alpha
* 新增 插件API hx.window.createWebViewDialog 创建内容区可由HTML编写的模态对话框 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=createwebviewdialog)
* 修复 uni-app 新建页面 选择分包后，`在pages.json中注册`复选框，去掉勾选再次点击，导致HBuilderX崩溃的Bug [详情](https://ask.dcloud.net.cn/question/113869)
* 修复 Windows App manifest.json App常用其它配置 勾选CPU类型，列表框变成白色背景Bug
* 修复 App 原生打包窗口 勾选广告后，manifest.json中自定义的广告数据被清除的Bug
* 【uni-app插件】
  + App平台 修复 3.0.0 版本引出的 match-media 组件失效的Bug
  + App-Android平台 修复 nvue image 组件加载图片过多可能引起内存溢出导致页面滚动卡顿的Bug
  + App-iOS平台 修复 3.0.0 版本引出的 nvue image 组件在iOS14以下系统 webp 格式图片无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/113840)
  + App-iOS平台 修复 3.0.0 版本引出的 iOS13.7 设备上 canvas 组件绘制图像会导致应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/113820)
  + 微信小程序平台 修复 unicloud-db 组件无效的Bug
* 【uniCloud】
  + uniCloud本地调试插件 修复 windows 平台未打印输出对应的文件名和行号的Bug
  + uniCloud本地调试插件 优化 多参数的 console.log 输出展现
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 3.0.0版本引出的 native.js 获取 runtimeMainActivity 对象执行 registerReceiver 不生效的Bug [详情](https://ask.dcloud.net.cn/question/113807)
  + iOS平台 新增 mediaPlaybackRequiresUserAction 属性控制H5页面支持自动播放音频 [详情](https://ask.dcloud.net.cn/article/94)
  + iOS平台 修复 3.0.0版本引出的 获取当前地理位置弹出系统授权框时，用户拒绝授权后没有触发失败回调的Bug [详情](https://ask.dcloud.net.cn/question/113696)
  + iOS平台 修复 一键登录授权界面自定义样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/113894)

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
* 【uni-app插件】
  + App、H5平台 优化 input 组件 number 和 digit 类型支持输入负数（注意之前依赖键盘不能输入负数而没有校验输入内容应用应补充校验规则） [详情](https://ask.dcloud.net.cn/question/62987)
  + App、H5平台 修复 slider 组件 step 设置为小数时精度丢失的Bug [详情](https://ask.dcloud.net.cn/question/112749)
  + App平台 新增 uni-AD 支持 Draw信息流广告 [详情](https://uniapp.dcloud.net.cn/component/ad-draw)
  + App平台 新增 uni-AD ad 组件支持 adclicked 事件
  + App平台 优化 input、textarea 组件去除隐藏键盘自动失去焦点的逻辑并开放相关属性：auto-blur [详情](https://ask.dcloud.net.cn/question/111152)
  + App平台 优化 uni.compressImage 支持 width、height 设置
  + App平台 优化 uni.canvasGetImageData、uni.canvasSetImageData 等接口执行效率（注意：需更新自定义基座或离线SDK） [详情](https://ask.dcloud.net.cn/question/110948)
  + App平台 优化 uni.previewImage 弹出菜单底部的取消按钮文字根据系统语言进行国际化适配
  + App平台 修复 uni.setNavigationBarColor 部分时机不生效的Bug [详情](https://ask.dcloud.net.cn/question/110894)
  + App平台 修复 非 popup 类型的 subnvue 对象调用 setStyle 方法报错的Bug [详情](https://ask.dcloud.net.cn/question/110922)
  + App平台 修复 nvue progress组件 设置属性 active=true 时报错的Bug [详情](https://ask.dcloud.net.cn/question/113041)
  + App平台 修复 mainfest.json 配置 flex-direction:row 时部分内置组件样式错乱的Bug [详情](https://ask.dcloud.net.cn/question/102195)
  + App-Android平台 修复 页面存在 subnvue 时 web-view 组件无法返回的Bug [详情](https://ask.dcloud.net.cn/question/111213)
  + App-Android平台 修复 应用版本名称包含中文时，uni.request 可能引起请求失败的Bug [详情](https://ask.dcloud.net.cn/question/112326)
  + App-Android平台 修复 nvue map 组件 getScale 获取地图缩放等级可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/85722)
  + App-Android平台 修复 nvue input 组件不设置 confirm-type 属性时 confirm 事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/112729)
  + App-iOS平台 修复 生物认证 人脸识别 在未录入FaceID的情况下可能检查为已录入的Bug [详情](https://ask.dcloud.net.cn/question/112383)
  + App-iOS平台 修复 nvue text 组件设置相同的字体大小，不同文字内容高度不一致的Bug [详情](https://ask.dcloud.net.cn/question/112175)
  + App-iOS平台 修复 调用 getScreenBrightness、setScreenBrightness 会触发 onShow、onHide 的Bug
  + H5平台 优化 tabBar 支持配置更多属性，如：fontSize、height、midButton
  + H5平台 修复 canvas 组件绘制跨域图像后调用 uni.canvasToTempFilePath 失败的Bug
  + H5平台 修复 uni.chooseFile 在微信小程序内置浏览器失效的Bug
  + H5平台 修复 使用 uni.chooseLocation 时摇树优化报错的Bug [详情](https://ask.dcloud.net.cn/question/111785)
  + H5平台 修复 picker 组件在 PC 版 Chrome 浏览器点击不显示的Bug
  + H5平台 修复 picker-view 组件 indicator-class 设置不生效的Bug
  + H5平台 修复 iOS9 平台浏览器访问报错的Bug [#2320](https://github.com/dcloudio/uni-app/issues/2320)
  + 小程序平台 修复 for 循环中遍历数组表达式时部分事件编译后执行报错的Bug [详情](https://ask.dcloud.net.cn/question/110706)
  + uni-ui 新增 uni-easyinput 组件，提供更强大、易用的输入框封装组件，内置表单校验 [详情](https://ext.dcloud.net.cn/plugin?id=3455)
  + uni-ui 新增 uni-data-checkbox 组件，简化单选复选框的使用 [详情](https://ext.dcloud.net.cn/plugin?id=3456)
  + uni-ui 修复 forms、list、dateformat、indexed-list等组件的问题 [详情](https://ext.dcloud.net.cn/plugin?id=55)
  + hello uni-app 新增 App端一键登录示例（API分类login示例中）
  + 前后一体登录项目模板 新增 App端一键登录、修改密码
* 【uniCloud】
  + 【重要】调整 前端内置了`<unicloud-db>`组件，无需再人工引入插件市场的[clientDB组件插件](https://ext.dcloud.net.cn/plugin?id=3256) [规范](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
  + 【重要】新增 uniCloud 本地服务。支持前端项目在控制台切换连接云环境还是本地服务。本地修改直接生效，不用上传即可联调 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=calllocalfunction)
  + 【重要】调整 uniCloud 项目目录结构调整。根目录下为uniCloud目录，其下有二级目录 cloudfunctions 和 database。database目录存放数据表schema和扩展验证函数。并提供了目录结构迁移向导 [详情](https://ask.dcloud.net.cn/article/38028)
  + 【重要】新增 HBuilderX 本地编写 DB Schema，即数据表的表结构。支持新建、上传、下载表结构，支持代码提示。
  + 【重要】新增 `<unicloud-db>`组件（即之前的clientDB组件）支持代码提示。可提示JQL语法，在本地有schema的情况下可提示数据库表名字段。大幅提升开发效率 
  + HBuilderX 新增 编写 validateFunction，即数据库扩展校验函数。支持新建、上传、下载validateFunction
  + HBuilderX 优化 uniCloud 关联云服务空间的选择方式。并支持关联其它项目服务空间，实现多个项目连接一个服务空间 [详情](https://ask.dcloud.net.cn/article/37949)
  + HBuilderX 新增 可视化管理公共模块依赖 （对云函数点右键->管理公共模块依赖）
  + HBuilderX 优化 上传uni-id公共模块时，增加校验，对比配置密钥是否一致
  + HBuilderX 修复 云函数本地运行 控制台日志打印`null`和`undefined`值错误的Bug
  + HBuilderX 修复 前端网页托管 某些情况下，上传网站到服务器，控制台显示(0 MB)大于上传限制(0 MB)的Bug [详情](https://ask.dcloud.net.cn/question/111228)
  + uni-id 新增 App端一键登录 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=univerify)
  + 其他云端更新日志另见：[https://uniapp.dcloud.io/uniCloud/release](https://uniapp.dcloud.io/uniCloud/release)
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】新增 一键登录，运营商网关认证，免短信验证获取手机号、一键免密登录 [详情](https://uniapp.dcloud.net.cn/univerify)
  + 新增 UniPush 华为手机，厂家通道离线推送可在服务端设置角标[参考插件](https://ext.dcloud.net.cn/plugin?id=1680)
  + 新增 uni-AD 编程控制开屏广告的开启或关闭 [规范](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.setSplashAd)
  + 新增 uni-AD 激励视频、全屏视频、信息流广告支持监听点击广告事件
  + 新增 4个安全类API，推荐客户端安全要求较高的应用（如使用了激励视频），使用如下4个API并且搭配js原生混淆和App加固，防止客户端被篡改
    * 新增 plus.navigator.getSignature 获取应用签名标识。可用于判断App的证书是否被重签 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)
    * 新增 plus.navigator.isSimulator 判断App是否运行在模拟器环境 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)
    * 新增 plus.navigator.isRoot 判断设备是否被root [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)
    * 新增 plus.networkinfo.isSetProxy 判断设备的网络是否设置了代理 [规范](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)
  + 新增 QQ登录获取授权信息支持获取用户统一标识 unionid 属性 [规范](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.UserInfo)
  + 更新 uni-AD 快手联盟SDK为3.3.5版
  + Android平台 优化 应用启动时申请读写手机存储权限策略默认值为 once [详情](https://ask.dcloud.net.cn/article/36549) 
  + Android平台 修复 系统分享 sendWithSystem 分享应用资源图片可能失败的Bug [详情](https://ask.dcloud.net.cn/question/111836)
  + Android平台 修复 在Android10及以上设备无法保存视频文件到相册的Bug [详情](https://ask.dcloud.net.cn/question/112970)
  + Android平台 修复 相册选择图片视频时超过 180M 的文件无法显示的Bug 
  + Android平台 修复 UniPush 第一次启动可能无法获取clientid的Bug [详情](https://ask.dcloud.net.cn/question/112318)
  + Android平台 修复 UniPush 消息对象 payload 属性值可能没有转换为JSON对象的Bug
  + Android平台 修复 Downloader 下载的链接地址无效时不会触发回调的Bug [详情](https://ask.dcloud.net.cn/question/111826)
  + Android平台 修复 getCookie setCookie等操作 与 X5 内核 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/111426)
  + Android平台 修复 设置窗口标题栏搜索框失去焦点时，光标仍然显示的Bug [详情](https://ask.dcloud.net.cn/question/111045)
  + Android平台 修复 关闭窗口页面动画在部分设备上可能出现闪烁的Bug [详情](https://ask.dcloud.net.cn/question/112882)
  + iOS平台 修复 QQ分享进入安全校验后，可能无法再次拉起手机QQ完成分享操作的Bug [详情](https://ask.dcloud.net.cn/question/103383)
  + iOS平台 修复 iPhone12、iPad 系列设备获取手机设备信息的 model 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/112922)
  + iOS平台 修复 iOS14 第一次获取位置信息弹出系统授权提示框时无法获取详细地址的Bug  [详情](https://ask.dcloud.net.cn/question/111570)
  + iOS平台 修复 iOS13 打开文档文件名称没有后缀时无任何响应的Bug
  + iOS平台 修复 真机运行时 plus.runtime.getProperty 返回的 appid 属性值不正确的Bug
  + iOS平台 修复 设置应用角标数字时没有同步状态到 UniPush 服务器的Bug
  + iOS平台 修复 从微信小程序打开App时，plus.runtime.launcher 属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/111212)
  + iOS平台 修复 设置窗口标题栏搜索框失去焦点时，搜索框内容会被清除掉的Bug [详情](https://ask.dcloud.net.cn/question/111045)
  + iOS平台 修复 视频播放控件 VideoPlayer 播放时进度条可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/112150)
  + iOS平台 修复 uni原生插件开发可能出现 SimplePing 类冲突的Bug
* 【uni小程序SDK】
  + iOS平台 新增 小程序的打开方式支持 push 方式 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%90%af%e5%8a%a8%e6%96%b9%e5%bc%8f)
  + iOS平台 新增 支持开启侧滑手势关闭小程序 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e4%be%a7%e6%bb%91%e6%89%8b%e5%8a%bf%e5%85%b3%e9%97%ad%e5%b0%8f%e7%a8%8b%e5%ba%8f)

## 2.9.11.20201121-alpha
* 修复 Android App 安心打包 某些情况下，原生插件打包失败的Bug
* 修复 Android App 安心打包 勾选原生混淆，打包失败的Bug
* 修复 Android App 安心打包 GooglePlay渠道包上线谷歌市场失败的Bug
* 【uniCloud】
  + clientDB 新增 jql写法支持在field内写别名 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=alias)
  + clientDB 新增 schema内enum支持使用云端数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema?id=enum)
  + clientDB 新增 schema内bsonType支持password，设置后所有用户均不可读取此字段
  + clientDB 优化 索引冲突时返回更友好的提示及错误码 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=returnvalue)

## 2.9.10.20201117-alpha
* 修复 MacOSX Big Sur系统，HBuilderX启动后CPU使用率过高的Bug
* 【uni-app插件】
  + App平台 修复 atob 解码 base64 字符串返回结果可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/110758)
  + App-Android平台 修复 nvue ad 组件频繁打开、关闭页面操作可能引起崩溃的Bug
  + App-iOS平台 修复 2.9.9版本引出的 nvue swiper 组件中嵌套 video 后页面无法滑动的Bug [详情](https://ask.dcloud.net.cn/question/111145)
  + App-iOS平台 修复 nvue input 组件设置 focus 为 true 时频繁打开、关闭页面操作可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/110809)
  + hello uni-app 修复 在 H5 下【设置 tabBar】示例页面设置背景色时颜色错误的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 视频播放控件 VideoPlayer 支持 show-mute-btn 属性设置是否显示静音按钮 [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles) 
  + Android平台 修复 Android11上调用相机录像后无法播放视频文件的Bug [详情](https://ask.dcloud.net.cn/question/110762)
  + iOS平台 修复 扫描部分二维码无法识别的Bug [详情](https://ask.dcloud.net.cn/question/110878)
  + iOS平台 修复 窗口标题栏 titleNView 设置 type 为 transparent 时，在 ActionSheet 上显示的按钮样式异常的Bug
* 【uni小程序SDK】
  + iOS平台 修复 窗口标题栏 titleNView 设置 type 为 transparent 时，在 ActionSheet 上显示的按钮样式异常的Bug
  + iOS平台 修复 从相册选择视频后调用 uni.navigateBack() 关闭页面时会退出小程序的Bug

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
* 【uni-app插件】
  + App、H5平台 新增 vue 页面中的 input、textarea 在新版浏览器内核（Chrome81+、Safari13.7+）中 confirm-type（即键盘右下角按钮文字）支持更多配置（send、next、done）
  + App、H5平台 新增 网络请求相关接口 uni.request、uni.uploadFile、uni.downloadFile 支持 timeout 参数
  + App、H5平台 修复 slider 组件显示最大值时拖动不跟手的Bug
  + App-Android平台 修复 uni 原生插件扩展 Component 组件 bindData 回调不触发的Bug
  + App-Android平台 修复 华为更新系统后 canvas 绘制本地图像跨域的Bug [详情](https://ask.dcloud.net.cn/question/110676)
  + App-Android平台 修复 uni.request 请求超时不准确的Bug，优化请求最大并发数为10 [详情](https://ask.dcloud.net.cn/question/109996)
  + App-Android平台 修复 websocket 在5.0以下设备强制使用 LTSv1.2 导致无法建立连接的Bug [详情](https://ask.dcloud.net.cn/question/110367)
  + App-Android平台 修复 nvue input组件设置 focus 属性值为 false 时依然会自动获取焦点的Bug [详情](https://ask.dcloud.net.cn/question/110553)
  + App-iOS平台 修复 input 组件在点击时取消禁用无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/110491)
  + App-iOS平台 修复 canvas 组件绘制字体部分属性未生效的Bug [详情](https://ask.dcloud.net.cn/question/110227)
  + App-iOS平台 修复 nvue video 组件的子组件点击事件会透传到 video 组件上的Bug [详情](https://ask.dcloud.net.cn/question/110601)
  + App-iOS平台 修复 uni.openLocation 页面使用 Apple 地图导航目的地错误的Bug
  + H5平台 新增 custom-tab-bar 组件，可自由定义 tabBar 的位置和样式，比如在宽屏浏览器上显示在 topWindow 中 [详情](https://uniapp.dcloud.io/component/custom-tab-bar)
  + H5平台 新增 uni.chooseFile 接口。用于替代 input type=file [详情](https://uniapp.dcloud.io/api/media/file)
  + H5平台 优化 uni.getLocation 支持通过 IP 定位
  + H5平台 优化 uni.chooseLocation、uni.openLocation 在大屏模式的显示效果
  + H5平台 优化 日期类型 picker 组件在PC版Chrome和FireFox上使用浏览器自带日期选择控件
  + H5平台 优化 单列 picker 组件在大屏设备默认使用 select 样式
  + H5平台 修复 topWindow 存在时，下方window页面的 navigationBar 无法显示的Bug
  + H5平台 修复 picker 组件在宽屏模式显示错位的Bug
  + H5平台 修复 tabBar 的 iconPath 使用带协议的图像路径不显示的Bug
  + 微信小程序平台 优化 跳转页面路径中不再自动增加 __id__ 参数
  + hello uni-app 优化 适配PC宽屏，参考：[https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)
* 【uniCloud】
  + 阿里云支持事务（startTransaction方式，暂不支持runTransaction）[详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=starttransaction)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 QQ分享支持 type 为 web 类型分享网页链接
  + 修复 打开新页面后，手机无障碍功能的屏幕阅读器可浏览到底层页面元素的Bug [详情](https://ask.dcloud.net.cn/question/109916)
  + Android平台 新增 设置应用图标角标数字 plus.runtime.setBadgeNumber 支持 vivo 手机 [文档](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.setBadgeNumber)
  + Android平台 修复 多次调用 getImageInfo 获取网络图片信息返回的路径可能会重复的Bug [详情](https://ask.dcloud.net.cn/question/110487)
  + Android平台 修复 压缩图片 plus.zip.compressImage 在Android10上可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/110303)
  + Android平台 修复 storage 存储中文数据内容后读取可能出现乱码的Bug
  + Android平台 修复 频繁多次调用 Audio 播放音频可能引起崩溃的Bug
  + iOS平台 修复 2.9.1版本引出的 高德定位设置 geocode 为 true 无法返回地址信息的Bug [详情](https://ask.dcloud.net.cn/question/110474)
  + iOS平台 修复 关闭页面窗口时底部区域可能出现闪动的Bug [详情](https://ask.dcloud.net.cn/question/110153)
  + iOS平台 修复 打开系统内置地图导航时，传入的位置和名称与地图实际显示不一致的Bug [详情](https://ask.dcloud.net.cn/question/109998)
  + iOS平台 修复 native.js 使用 plus.ios.invoke 调用方法时传入参数为 jsonObject 不执行的Bug

## 2.9.7.20201103-alpha
* 修复 新建项目 某些情况下，普通项目模板，第二次创建失败的Bug
* 修复 MacOSX 2.9.6版本引出的 项目管理器右上角菜单列表样式异常的Bug
* 修复 uniCloud 2.9.6版本引出的 新建公共模块，编辑器出现闪退的Bug

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
* 【uni-app插件】
  + 【重要】 更新文档 2.9.0+ 后 rpx、rem 样式变形的处理办法 [详情](https://ask.dcloud.net.cn/article/37911)
  + App平台、H5平台 新增 支持 uni.offCompassChange、uni.offAccelerometerChange 用于移除相关事件监听
  + App平台 优化 uni.connectSocket 支持配置 header
  + App-Android平台 修复 部分设备 uni.chooseVideo 无法选择视频的Bug [详情](https://ask.dcloud.net.cn/question/109301)
  + App-Android平台 修复 nvue map 组件 markers 的 width、height属性不生效的bug [详情](https://ask.dcloud.net.cn/question/108778)
  + App-Android平台 修复 nvue map 组件 translateMarker 方法中 rotate 参数值设置 `px` 单位后无法正常执行的Bug [详情](https://ask.dcloud.net.cn/question/109630)
  + App-Android平台 修复 2.9.5版本引出的 nvue 部分组件 border-radius 属性设置圆角无效的Bug [详情](https://ask.dcloud.net.cn/question/109597)
  + App-iOS平台 修复 iOS14 上新页面自动获取焦点导致页面变形的Bug [详情](https://ask.dcloud.net.cn/question/107820)
  + App-iOS平台 修复 nvue web-view 组件加载 html 页面中 js 调用 alert 不显示提示框的Bug [详情](https://ask.dcloud.net.cn/question/109791)
  + H5平台 优化 鼠标事件支持返回坐标信息
  + H5平台 优化 uni.showToast 在 宽屏的显示效果
  + H5平台 优化 弹出类接口和组件支持响应 esc、enter 按键
  + H5平台 修复 启用 leftWindow 后 web-view 组件显示错位的Bug
* 【uniCloud】
  + 新增 `<uni-clientDB>`组件支持remove方法，封装了删除确认框、删除数据库、删除前端data等操作，开发更便利 [详情](https://uniapp.dcloud.io/uniCloud/uni-clientdb-component?id=%e6%96%b9%e6%b3%95)
  + 优化 提升云函数执行速度几十毫秒。非冷启动时与传统服务器性能拉齐（需重新部署云函数）
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 腾讯广点通视频开屏广告可能造成应用闪退，或关闭广告后点击屏幕部分区域仍然打开落地页的Bug
  + Android平台 修复 UniPush 云端打包 GooglePlay 渠道默认添加定位权限的Bug [详情](https://ask.dcloud.net.cn/question/105068)
  + iOS平台 新增 二维码扫码支持 autoDecodeCharset 参数，解决非UTF-8编码数据出现乱码的问题 [详情](https://ask.dcloud.net.cn/question/66886)
  + iOS平台 修复 微信登录用户选择拒绝授权可能不触发失败回调的Bug [详情](https://ask.dcloud.net.cn/question/109305)
  + iOS平台 修复 无法保存文件路径包含中文的图片到系统相册的Bug [详情](https://ask.dcloud.net.cn/question/109168)

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
* 【uni-app插件】
  + App平台、H5平台 修复 Safari 14 输入组件禁用状态文字颜色变浅的Bug [详情](https://ask.dcloud.net.cn/question/109013)
  + App平台 新增 全屏视频 uni.createFullScreenVideoAd [详情](https://uniapp.dcloud.net.cn/api/a-d/full-screen-video)
  + App-Android平台 修复 uni.request 请求 cookie 与 X5 内核 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/108639)
  + App-Android平台 修复 nvue image 组件 mode 设置为 widthFix、heightFix 不生效的Bug
  + App-Android平台 修复 nvue map 组件使用 translateMarker 移动 maker 后气泡文本没有跟随移动的Bug [详情](https://ask.dcloud.net.cn/question/95239)
  + App-Android平台 修复 nvue map 组件动态删除 marker 的 callout 属性不生效的Bug
  + App-iOS平台 修复 canvas 组件绘制 uni.getImageInfo 临时路径跨域的Bug [详情](https://ask.dcloud.net.cn/question/108817)
  + App-iOS平台 修复 nvue scroll-view 组件使用下拉刷新 refresh 隐藏时没有动画效果的Bug [详情](https://ask.dcloud.net.cn/question/108681)
  + App-iOS平台 修复 nvue image 组件 mode 设置为 widthFix、heightFix 时透明区域填充红色背景的Bug [详情](https://ask.dcloud.net.cn/question/108774)
  + App-iOS平台 修复 web-view 组件加载的页面 title 为空时，返回按钮不显示的Bug [详情](https://ask.dcloud.net.cn/question/108887)
  + H5平台 修复 Chrome 使用自动填充时 placeholder 仍然可见的Bug
  + uni-ui 新增 uni-forms 组件，支持表单校验 [详情](https://ext.dcloud.net.cn/plugin?id=2773)
  + uni-ui 新增 uni-group 组件，用于表单项分组显示 [详情](https://ext.dcloud.net.cn/plugin?id=3281)
  + uni-ui 新增 uni-table 组件 [详情](https://ext.dcloud.net.cn/plugin?id=3270)
  + uni-ui 新增 uni-dateformat 组件，支持各种日期格式化，以及1分钟前、刚刚等形式 [详情](https://ext.dcloud.net.cn/plugin?id=3279)
* 【uniCloud】
  + 【重要】新增 clientDB 支持 `jql` 查询语法，大幅降低数据库操作难度 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=jsquery)、大幅简化联表查询 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup)
  + 【重要】新增 uni-clientDB 组件，在前端通过组件直接获得云数据库内容，并直接绑定到界面上，大幅提升开发效率 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component)
  + 【重要】调整 clientDB内置，云端不再需要单独的clientDB云函数，前端无需引用clientDB的js sdk，直接在前端写`const db = uniCloud.database()`即可 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb)
  + 【重要】调整 uni-clientDB-actions 目录调整到 cloudfunctions 根目录 [详情](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=action)
  + 【重要】调整 clientDB云函数的permission和validator子目录废除，只需在 DB Schema 中书写permission和validator内容，保存即可直接生效，无需再次导出
  + 【重要】新增 `uniCloud Admin 基础框架`（HBuilderX新建项目可选择该模板） [详情](https://uniapp.dcloud.net.cn/uniCloud/admin)
  + 【重要】新增 web控制台 云数据库配置 DB Schema 后，可直接生成前端工程，含数据表单新增、修改页面，以及校验规则。大幅提升开发效率
  + 【重要】腾讯云 正式商用 [详见](https://uniapp.dcloud.net.cn/uniCloud/price)
  + 新增 web控制台 云数据库支持导出db_init.json
  + 新增 web控制台 服务空间改名
  + 新增 web控制台 云数据库支持`扩展校验函数`，可自主编程实现更复杂的数据校验逻辑，同时在 DB Schema 中引用这些`扩展校验函数`
  + 修复 阿里云 数据库set方法表现不正确的Bug
  + uni-id 新增 开发者callFunction时可自行传入uniIdToken，此时不再从storage获取token
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 支持全屏视频广告 [详情](https://ask.dcloud.net.cn/article/36718#fullscreenvideo)
  + 优化 uni-AD 基础开屏广告显示效果，适配各种分辨率屏幕设备
  + Android平台 新增 二维码扫码支持 autoDecodeCharset 参数，解决非UTF-8编码数据出现乱码的问题 [详情](https://ask.dcloud.net.cn/question/66886)
  + Android平台 更新 高德地图SDK为7.6.0版
  + Android平台 更新 uni-AD 快手联盟SDK为3.3.4.2版
  + Android平台 修复 uni-AD 应用从后台切换到前台显示开屏广告时，系统状态栏可能遮挡跳过按钮的Bug
  + Android平台 修复 多次调用二维码扫码时，因复用扫码提示音频播放对象导致概率闪退的Bug [详情](https://ask.dcloud.net.cn/question/108776)
  + Android平台 修复 获取屏幕亮度 getBrightness 在小米手机上可能返回数据异常的Bug [详情](https://ask.dcloud.net.cn/question/108691)
  + Android平台 修复 storage 存储数据内容超过 2M 后可能无法正常存取非ASCII字符的Bug
  + Android平台 修复 Geolocation 定位模块默认添加后台定位权限 ACCESS_BACKGROUND_LOCATION 的Bug [详情](https://ask.dcloud.net.cn/question/109442)
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK为3.3.0.0版、快手联盟SDK为3.3.3版
  + iOS平台 更新 云端打包环境XCode为12.1版，uni原生插件兼容支持swift代码
  + iOS平台 优化 本地相册选择照片界面，新增支持 permissionAlert 参数配置权限检测，适配 iOS14 上用户设置为访问`选中的照片`权限时引导修改为访问`所有照片` [文档](http://www.html5plus.org/doc/zh_cn/gallery.html#plus.gallery.GalleryOptions)
  + iOS平台 修复 本地相册选择照片界面，在 iOS14 上如果选中的图片在 iCloud 会触发刷新导致排序混乱的Bug [详情](https://ask.dcloud.net.cn/question/108502)
  + iOS平台 修复 本地相册选择照片界面，选择视频文件出现错误提示框，预览视频文件只显示首帧的Bug
  + iOS平台 修复 本地相册选择照片界面，设置 filename 参数后选中多张图片后返回路径不正确的Bug
  + iOS平台 修复 获取当前地理位置设置 geocode 为 true 时可能无法返回数据的Bug [详情](https://ask.dcloud.net.cn/question/109170)
  + iOS平台 修复 获取图片信息 getImageInfo 返回的 width、height 值类型不正确的Bug [详情](https://ask.dcloud.net.cn/question/108893)
  + iOS平台 修复 视频播放控件横向全屏时唤起软键盘还是竖屏模式的Bug [详情](https://ask.dcloud.net.cn/question/107036)
  + iOS平台 修复 蓝牙订阅特征值 notifyBLECharacteristicValueChange 方法设置 state 属性不生效的Bug
  + iOS平台 修复 蓝牙同时读取和订阅特征值可能引起数据返回混乱的Bug [详情](https://ask.dcloud.net.cn/question/108107)
  + iOS平台 修复 Webview窗口标题栏搜索框的光标在 iOS13+ 上显示位置不正确的Bug [详情](https://ask.dcloud.net.cn/question/103205)

## 2.9.2.20200913-alpha
* 新增 插件API CustomEditor 支持自定义编辑器  [详情](https://hx.dcloud.net.cn/customeditor)
* 优化 快捷键-VSCode方案的全部保存, 修改为`ctrl+k, s`
* 修复 已打开的文件，改变文件后缀名，状态栏语言类型没有改变的Bug
* 修复 Windows 2.9.0版本引出的 uni-app新建页面，导入模版，在根目录下生成空文件夹的Bug
* 修复 MacOS SVN 1.14.0版本 项目管理器文件内容变化后，SVN状态图标没有显示的Bug
* 新增 uni-app uniCloud付费插件的试用引导
* 优化 uni-app 新建页面窗口，获取pages.json文件方式，更快加载pages.json内容
* 优化 uni-app 在分包的目录上，右键菜单点击新建页面，自动在新建页面选择对应的分包目录
* 【uni-app插件】
  + App平台、H5平台 修复 获取节点信息未包含 computedStyle 的Bug [详情](https://ask.dcloud.net.cn/question/108387)
  + App平台 修复 高频调用 uni.saveFile 保存失败的Bug [详情](https://ask.dcloud.net.cn/question/106233)
  + App-Android平台 修复 系统 webview 更新到 Chrome84 后 canvas 组件绘制本地图像 uni.canvasToTempFilePath 报错的Bug
  + App-Android平台 修复 nvue web-view 组件部分https地址页面无法加载http地址资源的Bug [详情](https://ask.dcloud.net.cn/question/108527)
  + App-iOS平台 修复 nvue image 组件 mode 设置 widthFix、heightFix 不生效的Bug [详情](https://ask.dcloud.net.cn/question/98827)
  + App-iOS平台 修复 nvue map 组件中添加 polyline 边线总是带个箭头的Bug [详情](https://ask.dcloud.net.cn/question/91041)
  + H5平台 调整 picker 组件宽屏下默认垂直居中
  + H5平台 调整 uni.showActionSheet 宽屏下默认垂直居中，支持 popover 参数调节位置
  + H5平台 修复 image 组件 mode="heightFix" 图像变形的Bug [详情](https://ask.dcloud.net.cn/question/107022)
  + H5平台 修复 rich-text 组件无法渲染 section 等标签的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 uni-AD 今日头条穿山甲SDK版本为3.3.0.0，快手联盟SDK版本为3.3.4
  + Android平台 修复 2.9.0 版本引出的 选择文件或拍照后可能会显示开屏广告的Bug
  + Android平台 修复 蓝牙订阅特征值 notifyBLECharacteristicValueChange 方法设置 state 属性不生效的Bug
  + Android平台 修复 压缩图片 plus.zip.compressImage 在Android10上报传入参数错误的Bug [详情](https://ask.dcloud.net.cn/question/108010)
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.11
  + iOS平台 修复 wgt热更新后 plus.runtime.getProperty 获取的 versionCode 不正确的Bug [详情](https://ask.dcloud.net.cn/question/108425)
  + iOS平台 修复 云端打包不支持最新WWDR中间证书生成的企业版证书的Bug [详情](https://ask.dcloud.net.cn/question/106866)

## 2.9.1.20200927-alpha
* 修复 Windows 2.9.0版本引出的 在网络不好的情况下，uni-app新建页面，导致编辑器卡顿的Bug 
* 【uni-app插件】
  + App平台 修复 tabbar 动态显示或隐藏时可能出现闪白的Bug [详情](https://ask.dcloud.net.cn/question/80898)
  + App-iOS平台 修复 2.9.0版引出的 nvue image 组件动态设置样式在 iOS14 以下设备图片不显示的Bug [详情](https://ask.dcloud.net.cn/question/107884)
  + App-iOS平台 修复 tabbar 中的文本在 iOS14 上无法完整显示的Bug [#2146](https://github.com/dcloudio/uni-app/issues/2146)
  + H5平台 修复 2.9.0 版本引出的内置 css 变量 --window-bottom 在 部分浏览器中失效的Bug [详情](https://ask.dcloud.net.cn/question/107976)
  + H5平台 修复 2.9.0 版本引出的部分事件写法编译报错的Bug [详情](https://ask.dcloud.net.cn/question/107940)
  + 小程序平台 修复 属性值为空的对象表达式时编译报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 高德定位SDK版本为5.2.0
  + iOS平台 更新 高德地图SDK版本为7.6.0、高德定位SDK版本为2.6.7，解决 iOS14 上显示地图时申请 `连接到本地网络上的设备` 权限的问题
  + iOS平台 修复 uni-AD 腾讯广点通的信息流广告样式可能不正确的Bug
  + iOS平台 修复 获取通讯录 plus.contacts.getAddressBook 在 iOS14 上导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/107339)

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
* 【uni-app插件】
  + 【重要】新增 大屏适配指南 [详情](https://uniapp.dcloud.net.cn/adapt)
  + 【重要】新增 leftWindow、rightWindow、topWindow，用于宽屏适配 [详情](https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow)
  + 【重要】新增 match-media 媒体查询适配组件，用于动态屏幕适配 [详情](https://uniapp.dcloud.net.cn/component/match-media)
  + 新增 支持 uni.createMediaQueryObserver 方法 [详情](https://uniapp.dcloud.net.cn/api/ui/media-query-observer)
  + 【重要】App平台、H5平台 新增 rpx 配置，默认限定了 rpx 生效的最大屏幕宽度为 px。可在 pages.json -> globalStyle 配置 rpxCalcMaxDeviceWidth、rpxCalcBaseDeviceWidth、rpxCalcIncludeWidth 等参数 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + 【重要】App平台、H5平台 优化 调整根字体大小为系统默认大小与微信小程序平台一致 [详情](https://ask.dcloud.net.cn/article/37911)
  + App平台、H5平台 新增 支持 uni.getSelectedTextRange 方法 [详情](https://uniapp.dcloud.io/api/key?id=getselectedtextrange)
  + App平台、H5平台 修复 部分 base64 路径的图像无法显示的Bug [详情](https://ask.dcloud.net.cn/question/106591)
  + App平台 修复 weex 编译模式 vue 页面中的 picker 组件 change 事件有时无法触发的Bug [#1774](https://github.com/dcloudio/uni-app/issues/1774)
  + App平台 修复 低版本系统上 canvas 组件绘制坐标比实际值小的Bug [详情](https://ask.dcloud.net.cn/question/105866)
  + App平台 修复 canvasContext.measureText 无效的Bug [详情](https://ask.dcloud.net.cn/question/107032)
  + App平台 修复 data-set 部分数据为 String 类型时显示错误的Bug [详情](https://ask.dcloud.net.cn/question/100073)
  + App平台 修复 蓝牙事件监听可以重复添加的Bug [#1988](https://github.com/dcloudio/uni-app/issues/1988)
  + App平台 修复 云打包后某些情况下启动白屏的Bug [详情](https://ask.dcloud.net.cn/question/107332)
  + App平台 修复 获取系统外观样式 plus.navigator.getUIStyle 无法调用的Bug [详情](https://ask.dcloud.net.cn/question/103886)
  + App-Android平台 修复 系统 webview 更新到 Chrome85+ 后 canvas 组件绘制本地图像 uni.canvasToTempFilePath 报错的Bug [详情](https://ask.dcloud.net.cn/question/103303)
  + App-Android平台 修复 web-view 组件内 input 被软键盘遮挡的Bug [详情](https://ask.dcloud.net.cn/question/92008)
  + App-Android平台 修复 uni.request 请求 firstIpv4 属性可能不生效的Bug
  + App-Android平台 修复 2.8.4版引出的 uni.request 重定向后 cookie 可能丢失的Bug [详情](https://ask.dcloud.net.cn/question/106697)
  + App-Android平台 修复 2.8.4版引出的 uni.request tcp连接没有复用的Bug [详情](https://ask.dcloud.net.cn/question/106167)
  + App-Android平台 修复 2.8.11版引出的 uni-AD 腾讯广点通SDK更新后在X86模拟器上无法正常启动的Bug [详情](https://ask.dcloud.net.cn/question/106532)
  + App-Android平台 修复 nvue v-if 切换 template 可能出现 tap 事件无法触发的Bug [详情](https://ask.dcloud.net.cn/question/106258)
  + App-iOS平台 修复 nvue 使用await请求网络赋值后页面无法渲染的bug [详情](https://ask.dcloud.net.cn/question/107670)
  + App-iOS平台 修复 iPhoneX 横屏启动时页面宽度异常Bug
  + App-iOS平台 修复 iOS12 以下 :adjust-position="false" 不生效的Bug
  + App-iOS平台 修复 部分情况 input 事件未触发的Bug [详情](https://ask.dcloud.net.cn/question/101135)
  + App-iOS平台 修复 nvue video 组件无法播放相对路径的本地视频的Bug [详情](https://ask.dcloud.net.cn/question/107215)
  + App-iOS平台 修复 uni原生插件 UniPluginProtocol 协议方法可能不触发回调的Bug
  + App-iOS平台 修复 uni原生插件可能与内部方法名称冲突导致部分功能异常的Bug
  + App-iOS平台 修复 离线打包使用 XCode12 编译运行到 iOS14 上 nvue 页面图片无法显示的Bug [详情](https://ask.dcloud.net.cn/question/107320)
  + H5平台 修复 video 组件全屏时 slot 不显示的Bug [详情](https://ask.dcloud.net.cn/question/105724)
  + H5平台 修复 iOS9 系统 uni.uploadFile 传入 base64 报错的Bug
  + 新闻模版 适配PC宽屏 (新建uni-app项目可选择该模板体验)
  + 小程序平台 新增 cli版本支持 vue3 [详情](https://ask.dcloud.net.cn/article/37834)
  + 小程序平台 修复 部分事件使用箭头函数表达式执行报错的Bug [#2132](https://github.com/dcloudio/uni-app/issues/2132)
* 【uniCloud】
  + 【重要】新增 腾讯云 云函数固定出口IP，可用于微信公众号开发等要求配置ip的场景 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=eip)
  + 【重要】uni-clientDB 2.0 重大更新，可完整方便的控制权限和数据验证。大多数场景不再需要编写云函数 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB)
  + 【重要】uni-id 新增 角色权限相关功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=rbac)
  + 【重要】云数据库支持JSON Schema规范，可在Web控制台数据库管理界面对数据进行格式描述 [详情](https://uniapp.dcloud.net.cn/uniCloud/schema)
  + 阿里云 去除客户端上传文件类型限制
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 支持应用从后台切换到前台显示开屏广告，并默认启用 [详情](https://ask.dcloud.net.cn/article/36718#splash_fr)
  + 新增 uni-AD 支持快手联盟的信息流广告，增加信息流的广告填充
  + 新增 原生导航标题栏 titleNView 的 searchInput 搜索框支持 color 属性设置文本颜色 [规范](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewSearchInputStyles)
  + 新增 视频播放控件 VideoPlayer 支持 show-loading 属性设置是否显示loading控件 [规范](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerStyles)
  + Android平台 适配 Android10+系统 `分区存储` 机制 [详情](https://ask.dcloud.net.cn/article/36199)
  + Android平台 更新 uni-AD 穿山甲SDK为3.2.5.1版；腾讯广告联盟SDK为4.270.1140版、快手联盟SDK为3.3.1版
  + Android平台 修复 视频播放控件 VideoPlayer 设置 show-progress 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/106150)
  + Android平台 修复 Webview窗口设置 videoFullscreen 不生效的Bug [详情](https://ask.dcloud.net.cn/question/106499)
  + Android平台 修复 页面中 input 标签 type 为 file 且 accept 为 video 时点击打开不是启动摄像的Bug [详情](https://ask.dcloud.net.cn/question/104931)
  + Android平台 修复 File 文件对象的 slice 方法无法获取指定数据内容的Bug [详情](https://ask.dcloud.net.cn/question/106427)
  + Android平台 修复 设置targetversion为29+时，在Android10及以上设备调用 uni.shareWithSystem 分享图片可能报 `多文件分享只支持照片` 的Bug
  + Android平台 修复 安全检测可能报apk安装包的Activity、Service组件存在导出风险的Bug
  + 【重要】iOS平台 适配 iOS14 解决应用启动时申请 `连接到本地网络上的设备` 权限导致无法通过AppStore审核的问题 [详情](https://ask.dcloud.net.cn/question/107530)
  + iOS平台 适配 iOS14 下拉刷新的雪花样式调整问题
  + iOS平台 更新 支付宝Alipay SDK版本为15.7.9，解决 iOS14 上应用启动时提示读取剪切板的问题
  + iOS平台 优化 uni-AD 快手联盟SDK引用库，减少安装包ipa大小约20M
  + iOS平台 修复 视频播放控件 VideoPlayer 调用 exitFullScreen 可能导致页面横屏设置失效的Bug [详情](https://ask.dcloud.net.cn/question/105520)
  + iOS平台 修复 从本地相册选择图片在 iOS14 上可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/107745)
  + iOS平台 修复 2.7.12版引出的 原生控件对象 plus.nativeObj.View 调用 drawRichText 设置 align 属性为 center 不居中显示的Bug [详情](https://ask.dcloud.net.cn/question/103328)
* 【uni小程序SDK】
  + iOS平台 修复 小程序前后台切换或跳转其他原生页面再返回小程序页面时，对应的应用生命周期 onShow、onHide 没有触发的Bug
  + iOS平台 修复 安装App后偶现首次无法正常启动小程序的Bug

## 2.8.11.20200904-alpha
* 【uni-app插件】
  + App-Android 修复 2.8.9版引出的 uni-AD 小概率出现获取广告配置数据失败导致无法显示开屏广告的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 2.8.9版升级 QQ SDK引出的 在部分手机上无法正常分享到 QQ 的Bug [详情](https://ask.dcloud.net.cn/question/103383)

## 2.8.10.20200903-alpha
* 修复 项目管理器 TypeScript、xml、word、xslt文件图标错误的Bug
* 修复 Windows 资源管理器，选中多个文件，右键点击Open with HBuilderX，造成编辑器崩溃的Bug
* 新增 HBuilderX 支持跳转到指定的行和列 [详情](https://ask.dcloud.net.cn/article/37732)
* 修复 跨高分屏缩放引起的窗口拖拽的Bug
* uni-app 发行 h5界面 uniCloud云服务空间 增加新建和刷新功能
* 【uni-app插件】
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求默认超时时间过长的Bug
* 【uniCloud】
  + 修复 某些情况下，上传公共模块，UI卡顿的Bug
  + 调整 阿里云放开文件上传类型限制

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
* 【uni-app插件】
  + 新增 uni.navigateTo 增加参数 events 支持页面间通信 [详情](https://uniapp.dcloud.net.cn/api/router?id=navigateto)
  + App平台、H5平台 优化 image 组件支持 mode="heightFix"
  + App平台 优化 uni.canvasToTempFilePath 提高执行速度
  + App平台 修复 app.vue 生命周期 onshow 某些情况下无参数的Bug [详情](https://ask.dcloud.net.cn/question/103903)
  + App平台 修复 input 组件修改 password 属性后 adjust-position 配置失效的Bug [详情](https://ask.dcloud.net.cn/question/103435)
  + App平台 修复 临时文件未清理的Bug [详情](https://ask.dcloud.net.cn/question/103456)
  + App平台 修复 nvue refresh 组件偶现下拉刷新结束后不复位的Bug [详情](https://github.com/dcloudio/uni-app/issues/1107)
  + App-Android平台 修复 Android11 设备运行白屏的Bug [详情](https://ask.dcloud.net.cn/question/105319)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求 cookie 与 webview 页面没有同步共享的Bug [详情](https://ask.dcloud.net.cn/question/103956)
  + App-Android平台 修复 2.8.4版引出的 nvue 无法加载网络字体图标文件 iconfont 的Bug [详情](https://ask.dcloud.net.cn/question/104655)
  + App-Android平台 修复 调用监听加速度、陀螺仪等 API 可能报`e.setInterval is not a function`错误的Bug [详情](https://ask.dcloud.net.cn/question/105584)
  + App-Android平台 修复 没有获取到位置权限时，调用 uni.chooseLocation 可能导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/105312)
  + App-iOS平台 修复 scroll-view 组件在 iOS13 触摸交互卡顿的Bug [详情](https://ask.dcloud.net.cn/question/98881)
  + App-iOS平台 修复 nvue map 组件 controltap 事件返回数据参数名不正确的Bug [详情](https://ask.dcloud.net.cn/question/99769)
  + H5平台 优化 uni.previewImage 支持手势缩放
  + H5平台 修复 多个 editor 组件会重复加载依赖的Bug
  + H5平台 修复 从首页调用 uni.redirectTo 切换其他页面后首页未销毁的Bug [详情](https://ask.dcloud.net.cn/question/103503)
  + H5平台 修复 切换页面导致 textarea 组件 auto-height 属性失效的Bug
  + 小程序平台 修复 v-for 遍历复杂表达式不显示的Bug [#2012](https://github.com/dcloudio/uni-app/issues/2012)
* 【uniCloud】
  + 新增 本地运行 加入显示调试行号等信息
  + 修复 当npm镜像源为淘宝源时，某些云函数或公共模块上传失败的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 支持快手联盟的开屏和激励视频广告
  + 修复 下载文件设置的临时存储文件名过长时无法正常下载的Bug [详情](https://ask.dcloud.net.cn/question/103336)
  + Android平台 修复 UniPush 在部分魅族手机可能无法获取cid的Bug [详情](https://ask.dcloud.net.cn/question/102774)
  + Android平台 修复 设置targetversion为29时，从相册选择图片返回路径不正确的Bug [详情](https://ask.dcloud.net.cn/question/105269)
  + Android平台 修复 设置targetversion为29时，在部分 Android10 设备无法正常定位的Bug
  + iOS平台 更新 QQ 分享、登录SDK版本为3.3.9-Lite，解决分享到 QQ 显示未授权应用的问题
  + iOS平台 修复 设置页面横屏 landscape 显示时，在 iPad 设备上不显示状态栏的Bug [详情](https://ask.dcloud.net.cn/question/103386)
  + iOS平台 修复 视频播放控件 VideoPlayer 动态修改 objectFit 属性不生效的Bug

## 2.8.7.20200820-alpha
* 新增 MarkDown 一键分享 [详情](https://ask.dcloud.net.cn/article/37573)
* 修复 文档结构图 显示隐藏操作 导致编辑器焦点丢失的Bug
* 修复 外部命令 当命令数组为空时保存，编辑器崩溃以及无法启动的Bug
* 修复 未命名文件保存和其它文件另存为操作，没有更新导航栏的Bug
* 新增 控制台 URL链接内容 右键菜单 增加复制链接
* 修复 uniCloud进行上传操作后，内置浏览器、内置终端运行异常的Bug
* 【uni-app插件】
  + App-Android平台 修复 调用 plus.io.requestFileSystem 概率性出现`Failed to find taskCenter`错误信息的Bug [详情](https://ask.dcloud.net.cn/question/103902)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求 cookie 未正确处理可能引起网络请求失败的Bug [详情](https://ask.dcloud.net.cn/question/105139)
  + App-Android平台 修复 2.8.4版引出的 uni.request 请求返回的 http 响应头数据中 key 名称变成小写的Bug [详情](https://ask.dcloud.net.cn/question/103995)
  + 小程序平台 修复 v-for 中事件使用部分复杂的表达式编译报错的Bug
  + 小程序平台 修复 v-for 中嵌套 v-if 时部分复杂表达式编译后运行报错的Bug [#2011](https://github.com/dcloudio/uni-app/issues/2011)
  + 小程序平台 修复 修复部分自定义事件无参数时报错的Bug [#2021](https://github.com/dcloudio/uni-app/issues/2011)
  + 微信小程序平台 修复 属性使用复杂的对象表达式小程序开发工具编译报错的Bug [详情](https://ask.dcloud.net.cn/question/103944)
* 【uniCloud】
  + 优化 云函数插件支持写入components、js_sdk、static目录
  + web控制台 阿里云 新增 数据库集合导入导出功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-database?id=export)
  + web控制台 腾讯云 新增 资源概况页面
  + 短信发送 新增 3个通知类短信模板 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
* 【App插件(含5+App和uni-app的App端)】
  + uni-AD 新增 信息流和激励视频的多广告源在App同次启动时随机穿插，可提升广告收益
  + uni-AD 新增 设置开屏全屏显示
  + Android平台 修复 uni-AD 开屏显示穿山甲广告点击跳过按钮后，再点击splash页面可能导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/103601)
  + iOS平台 更新 UniPush 使用的个推SDK版本为2.4.5.1，解决在部分设备上获取唯一标识可能重复的问题
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.10，今日头条穿山甲SDK版本为3.1.0.5
  + iOS平台 修复 直播推流 LivePusher 监听事件后不触发回调的Bug

## 2.8.4.20200805-alpha
* 修复 windows 2.8.1版引出的 内置浏览器 右键菜单无法显示的Bug
* 修复 文档结构图 同时打开多个文件，文档结构图出现跳转错误，并造成编辑器崩溃的Bug
* 修复 某些情况下，启动HBuilderX后，立即关闭内置资源管理器标签卡导致编辑器崩溃的Bug
* 【uni-app插件】
  + App平台、H5平台 优化 uni.setTabBarItem 支持 pagePath 配置
  + App平台、H5平台 修复 picker 组件设置 value 为 -1 时表现异常的Bug [#1553](https://github.com/dcloudio/uni-app/issues/1553)
  + App平台、H5平台 修复 editor 组件粘贴文字报错的Bug [详情](https://ask.dcloud.net.cn/question/102948)
  + App平台 新增 支持蓝牙相关接口 uni.setBLEMTU、uni.getBLEDeviceRSSI
  + App平台 优化 uni.request 支持返回 cookies 属性与微信小程序拉齐（基础库版本 2.10.0+）
  + App平台 修复 ibeacon 相关事件回调不触发的Bug [详情](https://ask.dcloud.net.cn/question/102136)
  + App平台 修复 当前 tab 页面不是配置的首页时，热刷新后 tabBar 消失的Bug [详情](https://ask.dcloud.net.cn/question/101612)
  + App平台 修复 从 nvue 页面调用 uni.reLaunch 切换到 vue 页面后无法设置状态栏的Bug [详情](https://ask.dcloud.net.cn/question/102594)
  + App-Android平台 更新 网络请求底层实现库 OKHttp 版本为3.12.11，提升 websocket 传输效率
  + 【重要】App-Android平台 修复 targetSdkVersion 设置为 29 时在 Android10 运行白屏的Bug，满足谷歌应用商店上架对targetSdkVersion的要求 [详情](https://ask.dcloud.net.cn/question/103166)
  + App-Android平台 修复 nvue input组件绑定值带小数点时显示异常的Bug [详情](https://ask.dcloud.net.cn/question/97745)
  + App-iOS平台 修复 nvue 页面 在 iOS9 系统白屏的Bug
  + H5平台 修复 picker 组件配置 mode="date" 且 fields="year" 时报错的Bug [#1687](https://github.com/dcloudio/uni-app/issues/1687)
  + 小程序平台 修复 v-for 中方法使用复杂表达式报错的Bug [#373](https://github.com/dcloudio/uni-app/issues/373)
  + 小程序平台 修复 v-for 中模板插值使用复杂表达式报错的Bug [详情](https://ask.dcloud.net.cn/question/102443)
  + 小程序平台 修复 v-for 遍历对象表达式报错的Bug [#449](https://github.com/dcloudio/uni-app/issues/449)
  + 小程序平台 修复 v-for 中属性值为对象表达式报错的Bug [#1450](https://github.com/dcloudio/uni-app/issues/1450)
  + 小程序平台 修复 v-for 遍历数值时模板中有复杂表达式不显示的Bug
  + 小程序平台 修复 v-if="false" 时标签内部的方法和过滤器仍然会执行的Bug [#334](https://github.com/dcloudio/uni-app/issues/334)
  + 微信小程序平台、QQ小程序平台、字节跳动小程序平台 优化 自定义组件支持 v-show 指令 [#1724](https://github.com/dcloudio/uni-app/issues/1724)
  + 支付宝小程序平台 修复 v-for 部分情况 key 不生效的Bug
  + 支付宝小程序平台 修复 支持 uni.getSavedFileList 接口
  + 支付宝小程序平台 修复 sjs 中 callMethod 不能正确调用的Bug
  + 头条小程序平台 修复 修复解构插槽不显示的Bug [详情](https://ask.dcloud.net.cn/question/80187)
  + uni-ui 新增 uni-list 组件的 clickable 属性，是否开启点击反馈
  + uni-ui 新增 uni-list 组件的 link 属性，显示右侧箭头并开启点击反馈
  + uni-ui 新增 uni-list 组件的 to 属性，直接跳转到指定页面
  + uni-ui 新增 uni-list 组件的 border 属性，是否显示列表分割线
  + uni-ui 新增 uni-rate 组件的 disabled 属性，可设置组件禁用状态（之前版本的不可点击状态）
  + uni-ui 新增 uni-rate 组件的 disabledColor 属性，可设置禁用颜色
  + uni-ui 新增 uni-rate 组件的 readonly 属性，可设置组件只读属性
  + uni-ui 新增 uni-rate 组件的 allowHalf 属性，可设置组件是否开启半星选择
  + uni-ui 新增 uni-rate 组件的 touchable 属性，可设置组件是否支持滑动手势
  + uni-ui 修复 uni-rate 组件动态传值不更新的问题
  + uni-ui 优化 uni-rate 组件的 value 属性可使用 v-model 双向绑定数据
  + uni-ui 优化 uni-popup 组件的扩展组件支持 easycom
  + uni-ui 新增 uni-swipe-action 组件的左侧滑动使用方式
  + uni-ui 新增 uni-swipe-action 组件的插槽使用方式
  + uni-ui 新增 uni-swipe-action 组件的 threshold 属性，可以控制滑动缺省值
  + uni-ui 修复 uni-swipe-aciotn 组件的滚动页面时触发滑动的Bug
  + uni-ui 优化 uni-swipe-action 组件的长列表滚动性能
* 【uniCloud】
  + 阿里云 新增 支持协作者本地运行云函数
  + 修复 HBuilderX 2.8.0引出的 公共模块右键菜单 更新依赖本模块的云函数菜单丢失的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 蓝牙设置最大传输单元 setBLEMTU，获取设备信号强度 getBLEDeviceRSSI 等功能 [文档](https://www.html5plus.org/doc/zh_cn/bluetooth.html#plus.bluetooth.setBLEMTU)
  + 修复 Webview窗口标题栏 titleNView 设置为透明样式时按钮的背景区域无法自适应的Bug
  + Android平台 更新 UniPush 使用的个推SDK国内渠道版本为2.14.1.0，提升消息推送到达率
  + Android平台 调整 UniPush 和 个推推送 谷歌渠道默认不显示隐私政策提示框 [详情](https://ask.dcloud.net.cn/article/36479)
  + Android平台 修复 UniPush 谷歌渠道设置不显示隐私政策提示框可能导致获取推送标识信息失败的Bug
  + Android平台 优化 native.js 自动回收对象 autoCollection 机制，避免应用长时间运行内存回收不及时的问题
  + Android平台 修复 从相册图片中扫描二维码识别率低的Bug [详情](https://ask.dcloud.net.cn/question/88500)
  + Android平台 修复 保存部分视频文件添加至相册可能无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/102669)
  + Android平台 修复 自定义基座 wap2app 真机运行 tab 无法切换的Bug [详情](https://ask.dcloud.net.cn/question/102492)
  + iOS平台 修复 直播推流 LivePusher 设置 whiteness 美白属性值不生效的Bug [详情](https://ask.dcloud.net.cn/question/102761)
  + iOS平台 修复 状态栏样式设置为非沉浸式在 iPad 设备上横屏时状态栏显示不正常的Bug
* 【uni小程序SDK】
  + Android平台 优化 小程序后台运行功能，支持关闭多任务窗口 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/API/android?id=setenablebackground)
  + Android平台 修复 小程序在manifest.json配置固定横屏或竖屏方向无效的Bug

## 2.8.3.20200727-alpha
* 修复 目录内字符搜索结果界面右侧预览的vue、less等语言不着色的Bug [详情](https://ask.dcloud.net.cn/question/102438)
* 修复 菜单 显示左侧视图，菜单名称出现错别字的Bug
* 修复 插件API webView，引出的SFTP视图，右键菜单无法显示的Bug [详情](https://ask.dcloud.net.cn/question/102493)
* 【uni-app插件】
  + H5平台 修复 启用摇树优化后 audio 组件编译报错的Bug [#1943](https://github.com/dcloudio/uni-app/issues/1943)

## 2.8.2.20200724-alpha
* 修复 插件API WebView 某些情况下, 旧的html内容没有被彻底清除的Bug
* 【uni-app插件】
  + 支付宝小程序平台 修复 使用 await/async 报错的Bug [详情](https://ask.dcloud.net.cn/question/101714)
  + App-iOS平台 修复 2.8.1版引出的 nvue video 组件中 cover-view 无法覆盖显示的Bug [详情](https://ask.dcloud.net.cn/question/102165)
  + App-iOS平台 修复 nvue textarea 组件设置 auto-height 为 true 时传入初始值高度没有自适应的Bug [详情](https://github.com/dcloudio/uni-app/issues/992)
  + App-iOS平台 修复 nvue textarea 组件 linechange 事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/91477)
* 【uniCloud】
  + 阿里云 修复 本地运行时云函数互调报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 previewImage 预览图片在 iOS14 上导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/100379)
* 【uni小程序SDK】
  + Android平台 修复 2.8.1版引出的 通过 DCUniMPSDK.getInstance().startApp 运行小程序丢失启动参数的Bug

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
* 【uni-app插件】
  + App平台 修复 audio 组件不显示的Bug
  + App平台 修复 backgroundAudioManager onCanPlay 事件失效的Bug
  + App-Android平台 修复 部分平板设备 rpx 计算错误的Bug  [#1848](https://github.com/dcloudio/uni-app/issues/1848)
  + App-Android平台 修复 系统日期选择框 pickDate 设置默认、最大、最小日期不生效的Bug [详情](https://ask.dcloud.net.cn/question/95065)
  + App-Android平台 修复 2.8.0版引出的 页面切换后 input 组件设置 focus 属性可能无法正常输入的Bug [详情](https://ask.dcloud.net.cn/question/100771)
  + App-Android平台 修复 2.8.0版引出的 uni.request 请求部分网络接口可能失败的Bug
  + App-Android平台 修复 tabBar 页面首次启动可能显示区域不正常的Bug [详情](https://ask.dcloud.net.cn/question/100898)
  + App-Android平台 修复 软键盘弹出时执行 uni.reLaunch 在Android10上会导致应用闪退的Bug [详情](https://github.com/dcloudio/uni-app/issues/1895)
  + App-Android平台 修复 subNvue 原生子窗体动态显示隐藏可能引起 map 组件显示异常的Bug
  + App-iOS平台 修复 2.8.0版引出的 页面中使用 video 组件跳转到其他页面会导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/100806)
  + App-iOS平台 修复 nvue video 组件在页面关闭后仍在后台播放，再次打开页面出现播放异常的Bug [详情](https://ask.dcloud.net.cn/question/100943)
  + App-iOS平台 修复 nvue 页面开启下拉刷新 enablePullDownRefresh 后，配置自定义导航栏显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100506)
  + 小程序平台 修复 组件的部分写法编译报错的Bug [详情](https://ask.dcloud.net.cn/question/101132)
  + 小程序平台 修复 作用域插槽中定义的 class 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/100724)
  + 小程序平台 修复 修复组件嵌套时解构插槽内事件报错的Bug [详情](https://ask.dcloud.net.cn/question/99063)
  + 小程序平台 修复 匿名插槽和具名插槽 default 不等同的Bug
  + 微信小程序平台 新增 支持生命周期 onUnhandleRejection、onShareTimeline（分享小程序到朋友圈）、onAddToFavorites
  + 微信小程序平台 优化 支持作用域插槽当作普通插槽使用 [详情](https://ask.dcloud.net.cn/question/98634)
  + 支付宝小程序平台 修复 作用域插槽不显示的Bug [#1253](https://github.com/dcloudio/uni-app/issues/1253)
  + 新建uni-app项目模板，新增来自插件市场腾讯云提供的discus!Q模板 [详情](https://ext.dcloud.net.cn/plugin?id=2336)
* 【uniCloud】
  + 【重要】新增 本地运行云函数，可连接远程数据库和云存储，大幅提升开发效率，同时方便数据导入导出 [详情](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=runlocal)
  + 【重要】新增 插件市场支持云函数付费销售，欢迎插件作者们提交高质量可售卖插件
  + 【重要】新增 uniCloud.sendSms 短信发送能力，可方便、便宜的发送验证码短信 [详情](https://uniapp.dcloud.net.cn/uniCloud/send-sms)
  + 修复 2.7.12版本引出的支付宝小程序、百度小程序下使用 uniCloud 报错的Bug
  + 修复 2.7.12版本引出的H5端 main.js 内使用 uniCloud 导致 uniCloud 不可使用的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 uni-AD 更新 360广告SDK版本为5.17.3157
  + Android平台 修复 视频播放 VideoPlayer 的 src 属性无法切换相同ip不同端口的流媒体链接地址的Bug [详情](https://ask.dcloud.net.cn/question/95951)
  + Android平台 修复 消息提示框 toast 在 MIUI12 显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/100601)
  + Android平台 修复 Webview窗口的 iframe 中调用请求权限 requestPermissions 报错的Bug [详情](https://ask.dcloud.net.cn/question/100592)
  + Android平台 修复 Webview窗口设置 scrollIndicator 属性可能不生效的Bug
  + Android平台 修复 连接蓝牙设备 createBLEConnection 设置 timeout 属性无效的Bug
  + Android平台 修复 获取蓝牙设备指定服务特征值的 write 属性值可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/99149) 
  + iOS平台 修复 uni-AD 开屏广告点击特定基础广告时可能引起应用卡死的Bug
  + iOS平台 修复 连接多个蓝牙设备时，特征值变化事件 onBLECharacteristicValueChange 回调触发异常的Bug [详情](https://ask.dcloud.net.cn/question/99858)
  + iOS平台 修复 sqlite 执行查询SQL语句读取 big integer 类型数据不准确的Bug [详情](https://ask.dcloud.net.cn/question/100234)
  + iOS平台 修复 音频 audio 连接 airpods 等外接设备时依然使用手机扬声器播放的Bug [详情](https://ask.dcloud.net.cn/question/100719)
* 【uni小程序SDK】
  + Android平台 优化 小程序进程为应用私有进程，名称调整为`宿主包名:io.dcloud.unimp`，防止其他APP调用
  + Android平台 修复 小程序启动界面可能出现闪屏的Bug
  + iOS平台 优化 小程序启动流程，Hello uni-app 示例应用启动速度提升2倍，在iPhone11设备实测400ms内打开应用首页
  + iOS平台 修复 发送短信 sendMessage API无效的Bug

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
* 【uni-app插件】
  + 优化 编译错误提示更准确，新增采集未知的编译器错误
  + App平台 修复 uni.hideLoading 会把 uni.showToast 隐藏掉的Bug
  + App平台 修复 uploadTask.abort 无效的Bug [详情](https://ask.dcloud.net.cn/question/99364)
  + App平台 修复 nvue 页面 Promise 不支持 finally 方法的Bug
  + App平台 修复 局部组件 props 中的 id 会覆盖根节点 id 属性的问题 [详情](https://ask.dcloud.net.cn/question/99900)
  + 【重要】App-Android平台 调整 JS引擎默认从 jscore 改为 V8，提升运算性能 [详情](https://ask.dcloud.net.cn/article/37465)
  + App-Android平台 新增 支持DNS解析时优先使用ipv4 [详情](https://uniapp.dcloud.net.cn/api/request/request)
  + App-Android平台 修复 启动分包后云端打包可能出现页面无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/100023)
  + App-Android平台 修复 map 组件 position 样式设置为 fixed 后可能出现地图控件无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/100128)
  + App-Android平台 修复 tabbar 页面中 webview 组件在 wgt 升级后可能出现白屏的Bug [详情](https://ask.dcloud.net.cn/question/99253)
  + App-Android平台 修复 nvue 页面使用 video 组件切换到其它 vue 页面后 input 组件无法唤起软键盘的Bug [详情](https://ask.dcloud.net.cn/question/97197)
  + App-Android平台 修复 nvue input、textarea 组件设置 adjust-position 为 false 后切换页面可能无法唤起软键盘的Bug [详情](https://ask.dcloud.net.cn/question/99416)
  + App-Android平台 修复 nvue webview 组件设置 webview-styles 的 progress 属性值后进度条显示不正常的Bug
  + App-Android平台 修复 全面屏手机横屏时页面宽高可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/99365)
  + App-iOS平台 修复 iOS12以下版本 切换到深色背景页面出现闪白的Bug。需注意当 pages.json 文件中配置窗口背景色与页面 style 节点设置背景色不一致时仍可能会闪屏 [详情](https://ask.dcloud.net.cn/question/99453)
  + App-iOS平台 修复 video 组件中使用 cover-image 退出全屏后不显示的Bug [详情](https://ask.dcloud.net.cn/question/98498)
  + App-iOS平台 修复 nvue map 组件 moveToLocation 方法不触发回调的Bug [详情](https://ask.dcloud.net.cn/question/99638)
  + App-iOS平台 修复 nvue web-view 组件 schemes 无法跳转打开其他应用的Bug [详情](https://ask.dcloud.net.cn/question/99331)
  + App-iOS平台 修复 nvue 页面 picker-view 组件滚动错位的Bug
  + H5平台 修复 onPageNotFound 生命周期无效的Bug [#1743](https://github.com/dcloudio/uni-app/issues/1743)
  + H5平台 修复 iOS微信内置浏览器打开位置相关页面后无法后退的Bug [#1789](https://github.com/dcloudio/uni-app/issues/1789)
  + 微信小程序 修复 多个 v-for 嵌套时部分情况下绑定事件报错的Bug [详情](https://gitee.com/dcloud/uni-app/issues/I1KNYW)
  + 登录模版 升级 集成 uni-id 补充云函数，实现前后一体、功能完整的登录注册模板 [详情](https://github.com/dcloudio/uni-template-login)
* 【uniCloud】
  + 【重要】新增[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)，实现简单、统一、可扩展的用户中心，推荐每个 uniCloud 开发者使用
  + 新增 callfunction时自动携带`uni-id`的token，无需自行开发token管理方案
  + 新增 web控制台 腾讯云 云数据库备份和恢复功能 [详情](https://uniapp.dcloud.io/uniCloud/cf-database?id=backup)
  + 新增 web控制台 腾讯云 云数据库集合名称修改功能
  + 修复 云函数内获取客户端系统类型可能为空的Bug
  + 修复 HBuilderX 导入包含common目录的云函数模板，导致原common目录被覆盖的Bug
  + 优化 HBuilderX 新建公共模块增加名称不能包含大写字母的限制
  + 修复 HBuilderX 某些情况下，上传公共模块，出现npm install失败的Bug
  + 修复 HBuilderX 公共模块 右键菜单出现两个上传公共模块菜单的Bug
  + 修复 HBuilderX 上传公共模块没有填写appid时的错误提示与上传云函数不一致的Bug
* 【App插件(含5+App和uni-app的App端)】
  + uni-AD 更新 穿山甲SDK Android更新为3.1.0.0版、iOS更新为3.1.0.1版；腾讯广告联盟SDK Android更新为4.232.1102版、iOS更新为4.11.9版。请使用广告的开发者尽早升级，老版本在部分新手机上有闪退现象
  + Android平台 修复 请求权限 plus.android.requestPermissions 传入无效权限可能引起应用崩溃的Bug
  + Android平台 修复 视频播放 安卓9及以下的刘海屏手机上全屏播放引起闪退的Bug [详情](https://ask.dcloud.net.cn/question/99064)
  + Android平台 修复 从系统相册选择文件设置最多选择图片数量 maximum 后不会触发 onmaxed 事件的Bug [详情](https://ask.dcloud.net.cn/question/100062)
  + 【重要】iOS平台 新增 云端打包支持配置自定义storyboard启动界面 [详情](https://ask.dcloud.net.cn/article/37475)
  + iOS平台 修复 uni-AD 同时并发调用多次获取信息流广告可能导致无法返回广告数据的Bug
  + iOS平台 修复 应用首页加载网络页面在启动时可能偶现白屏的Bug [详情](https://ask.dcloud.net.cn/question/99572)
  + iOS平台 修复 Webview窗口直接加载mp4视频可能显示错误页面的Bug
  + iOS平台 修复 sqlite 执行查询SQL语句读取 blob 类型数据返回乱码的Bug [详情](https://ask.dcloud.net.cn/question/98721)
  + iOS平台 修复 连接蓝牙设备 createBLEConnection 超时不触发错误回调的Bug
  + iOS平台 修复 连接蓝牙设备后 可能无法写入数据的Bug
  + iOS平台 修复 连接蓝牙设备断开后 可能无法再次连接的Bug
* 【uni小程序SDK】
  + iOS平台 新增 预加载小程序功能，可提升初次启动速度 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e9%a2%84%e5%8a%a0%e8%bd%bd%e5%b0%8f%e7%a8%8b%e5%ba%8f)
  + iOS平台 新增 小程序支持后台运行功能，可提升二次启动速度 [详情](https://nativesupport.dcloud.net.cn/UniMPDocs/Sample/ios?id=%e5%bc%80%e5%90%af%e5%90%8e%e5%8f%b0%e8%bf%90%e8%a1%8c)

## 2.7.13.20200615-alpha
* 【uni-app插件】
  * App-nvue平台 修复 HBuilderX 2.7.12 alpha 版引发的 纯 nvue 项目编译出错的Bug [详情](https://ask.dcloud.net.cn/question/99356)
  * App-Android平台 修复 nvue web-view 组件 schemes 无法跳转打开其它应用的Bug [详情](https://ask.dcloud.net.cn/question/99331)

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
* 【uni-app插件】
  + 【重要】新增 自动化测试 [详情](https://uniapp.dcloud.io/collocation/auto/quick-start)
  + 【重要】新增 运行和发布到快应用联盟 [详情](https://uniapp.dcloud.io/quickstart?id=quickapp-webview)
  + App-nvue平台、H5平台 新增 API uni.preloadPage 预加载页面 [详情](https://uniapp.dcloud.net.cn/api/preload-page)
  + App-vue平台 新增 分包支持，可提升大型App启动速度 [详情](https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization)
  + 补充 uni-app 部署 H5 到相对路径/使用file协议教程 [详情](https://ask.dcloud.net.cn/article/37432)
  + App平台、H5平台 修复 -1rpx、-1upx被错误的计算为1px的Bug [详情](https://ask.dcloud.net.cn/question/98270)
  + App平台 修复 map 组件 markers 无 id 时无法移除的Bug
  + App平台 修复 map 组件 监听 regionchange 事件报错的Bug
  + App平台 修复 textarea 组件初始化时配置 focus 属性无法获取焦点的Bug
  + App-Android平台 修复 map 组件可能无法正常显示的Bug
  + App-Android平台 修复 nvue map 组件 markers 上的气泡 callout 会跟随旋转的Bug [详情](https://ask.dcloud.net.cn/question/98195)
  + App-Android平台 修复 nvue web-view 组件中 input 标签设置 type 为 file 时选择拍照后可能无法返回图片路径的Bug
  + App-iOS平台 修复 uni.request 参数 data 为非字符串时请求失败的Bug
  + App-iOS平台 修复 uni.showToast 部分情况文本显示不全的Bug [详情](https://ask.dcloud.net.cn/question/98349)
  + H5平台 修复 picker-view 组件某些情况设置 value 不生效的Bug
  + hello uni-app 新增 在navigator示例和日历扩展ui示例中增加页面预载示例
* 【uniCloud】
  + 【重要】新增 前端网页部署。uni-app的H5页面或普通html网站，均可免费部署到uniCloud，不用再购买传统云，高速、省钱、省心。 [详情](https://uniapp.dcloud.io/uniCloud/hosting)
* 【App插件(含5+App和uni-app的App端)】
  * Android平台 修复 uni-AD 腾讯广点通开屏广告可能出现填充率过低的Bug
  * Android平台 修复 uni-AD 创建多个激励视频广告引起 onLoad onClose onError 事件回调错乱的Bug
  * Android平台 修复 选择按钮框 actionSheet 设置 title 并且 buttons 设置过多可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/98476)
  * Android平台 修复 原生导航标题栏 titleNView 的 searchInput 搜索框动态更新后可能触发多次输入内容更新事件的Bug [详情](https://ask.dcloud.net.cn/question/98190)
  * Android平台 修复 音频 audio 的 seek 操作不触发 seeked 事件的Bug [详情](https://ask.dcloud.net.cn/question/78711)
  * Android平台 修复 图片预览 previewImage 无法显示bmp格式图片文件的Bug
  * Android平台 修复 HBuilderX2.6.11 引出的 Webview窗口设置 background 为 transparent 不生效的Bug
  * iOS平台 修复 视频播放 VideoPlayer 与 直播推流 LivePusher 同时使用时没有声音的Bug [详情](https://ask.dcloud.net.cn/question/97479)
  * iOS平台 修复 搜索蓝牙设备 startBluetoothDevicesDiscovery 可能不触发 onBluetoothAdapterStateChange 事件的Bug
  * iOS平台 修复 搜索蓝牙设备 startBluetoothDevicesDiscovery 连续调用多次触发失败回调的Bug

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
* 【uni-app插件】
  + 【重要】支持运行和发布到 华为快应用 [详情](https://uniapp.dcloud.io/matter?id=quickapp-webview-huawei)
  + App平台 修复 使用小程序组件时局部组件不显示的Bug
  + App平台 修复 canvasContext.fillText 部分设备多次调用失败的Bug [详情](https://ask.dcloud.net.cn/question/97609)
  + App平台 修复 canvasContext.drawImage 无法绘制 base64 格式图像的Bug [详情](https://ask.dcloud.net.cn/question/95050)
  + App平台 修复 videoContext.stop 无效的Bug
  + App-Android平台 修复 HBuilderX2.7.8引出的 tabBar 页面无法动态更新原生导航标题栏 titleNView 的Bug
  + App-Android平台 修复 uni.reLaunch 关闭所有页面打开应用内某个页面后，uni.hideTabBar失效的Bug [详情](https://ask.dcloud.net.cn/question/97140)
  + App-Android平台 修复 uni.scanCode 二维码扫描预览界面在横屏状态下变形的Bug [详情](https://ask.dcloud.net.cn/question/96473)
  + App-Android平台 修复 uni.setNavigationBarTitle 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/97791)
  + App-Android平台 修复 wgt热更新后 uni.navigateTo 可能返回找不到访问页面错误的Bug [详情](https://ask.dcloud.net.cn/question/97930)
  + App-Android平台 修复 nvue video 组件 controls 设置为 false 时 click 事件在非全屏状态下无法触发的Bug [详情](https://ask.dcloud.net.cn/question/97439)
  + App-Android平台 修复 nvue video 组件 seek 后再设置 src 属性会导致进度跳到视频末尾的Bug [详情](https://ask.dcloud.net.cn/question/97439)
  + App-Android平台 修复 nvue livepusher 组件 device-position 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/96784)
  + App-Android平台 修复 nvue webview 组件加载网页中使用 schemes 跳转就会报错的Bug [详情](https://ask.dcloud.net.cn/question/97271)
  + App-iOS平台 修复 nvue waterfall、list、scroll-view 组件中的 loading 组件可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/93128)
  + App-iOS平台 修复 nvue video 组件在 list 中滑动后视频可能无法正常播放的Bug
  + H5平台 修复 启用摇树优化后部分 es6 语法未转换成 es5 的Bug [详情](https://ask.dcloud.net.cn/question/98104)
  + H5平台 修复 PC 端获取屏幕宽高错误的Bug [详情](https://ask.dcloud.net.cn/question/97721)
  + 支付宝小程序 修复 nvue 页面编译后部分样式失效的Bug
  + 钉钉小程序 修复 真机使用 uni.request 发送 content-type 为 application/json 的请求时报错的Bug [详情](https://ask.dcloud.net.cn/question/97570)
* 【uniCloud】
  + 新增 HBuilderX 支持上传所有云函数及公共模块 （cloudfunctions目录，右键菜单，上传所有云函数及公共模块）
  + 新增 HBuilderX 限制新建云函数名称不能为common，避免与公共模块冲突
  + 修复 钉钉小程序真机上传文件到云存储报错的Bug [详情](https://ask.dcloud.net.cn/question/97570)
  + 腾讯云 优化 HBuilderX开发调试期间访问云函数的性能
  + 腾讯云 修复 上传文件时不进入onUploadProgress的Bug [详情](https://ask.dcloud.net.cn/question/97532)
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】Android平台 新增 UniPush 支持谷歌推送FCM [文档](https://ask.dcloud.net.cn/article/37356)
  + Android平台 修复 uni-AD 腾讯广点通信息流广告可能显示不全的Bug [详情](https://ask.dcloud.net.cn/question/97376)
  + Android平台 修复 uni-AD 今日头条穿山甲点击广告开始下载后不能暂停或取消的Bug
  + Android平台 修复 uni-AD 创建信息流广告控件 createAdView 没有设置 id 时可能导致在当前页面无法再次创建的Bug
  + Android平台 修复 软键盘状态变化事件 keyboardchange 监听后回调不触发的Bug [详情](https://ask.dcloud.net.cn/question/97070)
  + iOS平台 修复 原生导航标题栏动态更新按钮样式 setTitleNViewButtonStyle 可能导致图标显示异常的Bug [详情](https://ask.dcloud.net.cn/question/96426)

## 2.7.8.20200525-alpha
* 【uni-app插件】
  + 小程序平台 修复 组件 class 属性无值时报错的Bug
  + uni统计 修复 2.7.0.20200501-alpha 引出的统计数据上报不完整，导致uni统计日活偏少的Bug
  + App-Android平台 修复 tabbar 页面在部分手机可能高度显示不正确的Bug

## 2.7.7.20200522-alpha
* 修复 插件API WorkspaceFolder.uri类型没有转换到正确的Uri类型上的Bug
* 【uni-app插件】
  + App平台 修复 HBuilderX 2.7.6 引出的纯nvue项目编译出错的Bug [详情](https://ask.dcloud.net.cn/question/97264)
  + App-Android平台 修复 HBuilderX2.7.0 引出的 uni.request 网络请求 header 设置参数设置 content-type 无效的Bug [详情](https://ask.dcloud.net.cn/question/97246)
  + App-iOS平台 修复 pages.json 设置窗口背景色 backgroundColor 可能引起页面背景色不正确的Bug

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
* 【uni-app插件】
  + 【重要】支持运行和发布到 360小程序 [详情](https://uniapp.dcloud.io/matter?id=mp-360)
  + App平台 修复 class 名称中含有 rpx、upx 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/96981)
  + App-Android平台 修复 HBuilderX2.7.0 引出的 uni.hideTabBar 隐藏 tabbar 后页面高度可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/96244)
  + App-Android平台 修复 nvue textarea 组件获取焦点后在部分手机可能会被软键盘遮挡的Bug [详情](https://ask.dcloud.net.cn/question/96914)
  + App-Android平台 修复 nvue live-pusher 组件调用 pause 方法暂停推流后依然录音的Bug [详情](https://ask.dcloud.net.cn/question/96411)
  + App-Android平台 修复 nvue web-view 组件中 input 标签设置 type 为 file 时无法选择文件的Bug [详情](https://ask.dcloud.net.cn/question/95220)
  + App-iOS平台 修复 vue 页面回弹无效果的Bug [详情](https://ask.dcloud.net.cn/question/91356)
  + App-iOS平台 修复 nvue ad 组件在 list 中使用可能引起滚动卡顿的Bug
  + App-iOS平台 修复 nvue web-view 组件在页面关闭时可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/97064)
  + H5平台 修复 配置基础路径为 ./ 打包后 image 组件显示异常的Bug [详情](https://ask.dcloud.net.cn/question/96767)
* 【uniCloud】
  + 【重要】 腾讯云开放，不再需要邮件申请
* 【App插件(含5+App和uni-app的App端)】
  + 新增 原生导航标题栏 titleNView 的 titleIconWidth 支持设置标题图标宽度
  + 新增 原生导航标题栏 titleNView 的 searchInput 搜索框支持清除按钮
  + 修复 原生导航标题栏 titleNView 的 titleIcon 设置 base64 图标无法支持 gif 格式图片的Bug
  + Android平台 更新 uni-AD 腾讯广点通SDK版本为4.211.1081
  + Android平台 更新 UniPush 使用的个推SDK版本为4.3.8.0
  + Android平台 修复 uni-AD 腾讯广点通开屏广告可能拉伸变形显示的Bug
  + Androad平台 修复 uni-AD 开屏广告在刘海屏手机上跳过按钮可能被遮挡的Bug
  + Android平台 修复 视频播放 video 全屏时在刘海屏手机上控制栏可能被遮挡的Bug
  + Android平台 修复 页面中 input 标签 type 为 file 点击打开的选择页面不支持国际化的Bug
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK版本为3.0.0.1
  + iOS平台 修复 初始化蓝牙模块 openBluetoothAdapter 可能在没有打开蓝牙时也会返回成功回调的Bug
  + iOS平台 修复 previewImage 预览图片连续快速滑动时可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/96445)
  + iOS平台 修复 原生导航标题栏 titleNView 动态设置 type 为 transparent 可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/96556)

## 2.7.4.20200515-alpha
* 【uni-app插件】
  + App-Android平台 修复 真机运行时提示HBuilderX版本与手机端SDK版本不匹配的Bug
* 【uniCloud】
  + 阿里云 优化 云函数冷启动时间，经测试冷启动时间平均减少800ms

## 2.7.3.20200514-alpha
* 修复 Windows 运行项目到内置浏览器，某些情况下日志重复打印的Bug
* 【uni-app插件】
  + App平台 修复 css 中静态资源路径解析不正确的Bug
  + App-iOS平台 修复 HBuilderX2.7.0 引出的配置底部安全区原生占位后，tabbar 动态更新 backgroundColor、backgroundImage 不生效的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.8，解决在部分设备可能出现启动时崩溃的Bug

## 2.7.2.20200513-alpha
* 优化 新建插件项目时，增加项目名称合法性校验
* 修复 插件Api onDidChangeTextDocument 的回调中doc对象缺失某些属性的Bug
* 修复 插件Api executeCommand 内部命令同步执行时存在超时的Bug
* 修复 设置 运行设置，百度、QQ小程序开发者工具下载链接显示不正确的Bug
* 修复 uni-app easycom组件模式，因校验规则变动，导致代码提示错误的Bug
* 【uni-app插件】
  + 优化 pages.json 兼容 subPackages 与 subpackages 写法
  + App平台、H5平台 修复 swiper 组件设置 current 时滚动方向错误的Bug [详情](https://ask.dcloud.net.cn/question/94961)
  + App平台 修复 页面 onLoad 参数部分情况不正确的Bug
  + App平台 修复 cover-image 组件部分情况显示不全的Bug [详情](https://ask.dcloud.net.cn/question/94554)
  + App平台 修复 storage 中读取 Array 类型数据解析不正确的Bug [详情](https://ask.dcloud.net.cn/question/96139)
  + App-Android平台 修复 v3版本 真机运行修改代码保存后应用重启，可能无法直接显示应用重启前页面的Bug
  + App-iOS平台 修复 nvue richtext 组件 lines、text-overflow 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/94667)
  + App-iOS平台 修复 tabBar 同时设置 blurEffect 和 backgroundColor 时 uni.getSystemInfo 获取到 windowBottom 错误的Bug
  + H5平台 优化 video 组件支持 show-center-play-btn 配置
  + H5平台 修复 storage 中读取 Date 类型数据解析不正确的Bug [#1661](https://github.com/dcloudio/uni-app/issues/1661)
  + H5平台 修复 Safari 浏览器横屏状态获取宽度错误的Bug [详情](https://ask.dcloud.net.cn/question/95997)
  + 微信小程序平台 修复 页面中同一个组件多个实例相同作用域插槽异常的Bug [#1662](https://github.com/dcloudio/uni-app/issues/1662)
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 修复 音频 audio 播放网络音频资源缓冲时间过长的Bug [详情](https://ask.dcloud.net.cn/question/93427)
* 【uni小程序SDK】
  + iOS平台 修复 video 组件退出全屏后页面布局错位的Bug

## 2.7.1.20200510-alpha
* 修复 HBuilderX内未保存的文档，在外部修改后，HBuilderX出现多个弹框的Bug
* 修复 vue文件，带有-的标签，某些情况下着色异常的Bug
* 修复 html文件，带有-->的字符串，着色异常Bug
* 优化 插件运行时，Ctrl+r可直接运行和停止插件，不再弹出运行菜单
* 修复 插件市场，云函数模板包含__MACOSX文件夹时，HBuilderX导入错误的Bug
* 调整 App真机运行基座的图标，从红色改为绿色，与HBuilderX图标主色保持一致
* 【uni-app插件】
  + 修复 easycom 组件优先级高于用户组件同名组件的Bug
  + App平台 新增 tabbar 支持 backgroundImage 属性设置背景图片及渐变色
  + App平台 优化 短时间内调用 uni.navigateTo 避免重复跳转页面
  + App平台 修复 页面生命周期 onUnload 部分表现与旧版表现不一致的Bug [详情](https://ask.dcloud.net.cn/question/94649)
  + App平台 修复 picker 组件点击事件不冒泡的Bug [详情](https://ask.dcloud.net.cn/question/95716)
  + App平台 修复 picker 组件打包后不显示的Bug [详情](https://ask.dcloud.net.cn/question/96014)
  + App平台 修复 video 组件打包后不显示进度条的Bug [详情](https://ask.dcloud.net.cn/question/95946)
  + App平台 修复 editor 组件 br 标签不解析的Bug [详情](https://ask.dcloud.net.cn/question/95819)
  + H5平台 修复 tabBar 页面 redirectTo 到其他页面，tabBar 仍然显示的Bug [详情](https://ask.dcloud.net.cn/article/36364)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 Webview窗口标题栏 titleNView 的 titleIcon 支持 GIF 格式动图
  + Android平台 修复 数据库执行查询SQL语句读取 REAL、BIGINT 等类型数值丢失精度的Bug [详情](https://ask.dcloud.net.cn/question/92964)
  + Android平台 修复 plus.gallery.save 保存网络图片成功后在系统相册中可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/75901)
  + Android平台 修复 使用 X5 Webview 内核渲染时，标题栏搜索框 searchinput 设置 autoFocus 为 true 可能无法自动获取焦点的Bug
  + Android平台 修复 使用 X5 Webview 内核渲染时，广告、视频等原生组件可能无法滚动的Bug
  + iOS平台 修复 在 iPad 设备横屏时 getSafeAreaInsets 获取安全区域的 top 值不正确的Bug [详情](https://ask.dcloud.net.cn/question/95645)
  + iOS平台 修复 Webview窗口标题栏搜索框 searchinput 动态修改 align 属性不生效的Bug

## 2.7.0.20200501-alpha
* 【重要】新增 插件开放API，用js编写HBuilderX插件，打造更顺手的开发利器 [详情](https://hx.dcloud.net.cn/)
* 新增 新建项目 普通项目下提供插件扩展开发示例
* 新增 支持从[插件市场](https://ext.dcloud.net.cn/?cat1=7)一键导入云函数分类模板
* 调整 ide不再内置账户注册功能，注册会引导到网页注册，并且未验证邮箱将不再允许登录HBuilderX
* 修复 windows 内置浏览器分离后再最大化，部分窗口被任务栏遮盖的Bug
* 修复 部分电脑 检查更新，弹框消息显示不完整的Bug
* 【uni-app插件】
  * 【重要】 调整 App平台 自定义组件编译模式下线，应用默认以v3编译模式运行。并在manifest去除相关概念。包体积减少3M [详情](https://ask.dcloud.net.cn/article/36988)
  * 【重要】 调整 uni统计默认不再自动开启，需要此服务请手动在manifest中打开 [详情](https://ask.dcloud.net.cn/article/37234)
  * uni-app cli版支持发行到快应用平台 [详情](https://ask.dcloud.net.cn/article/37182)
  * App平台、H5平台 修复 textarea 组件 word-break 样式不生效的Bug [详情](https://ask.dcloud.net.cn/question/95172)
  * App平台、H5平台 新增 支持 onNavigationBarSearchInputFocusChanged 生命周期
  + App平台 优化 在去掉自定义组件模式的情况下保证 weex 编译模式仍然可用（nvueCompiler：weex）。但推荐开发者尽快迁移到uni-app编译模式
  + App平台 修复 input、textarea 组件快速输入时光标抖动的Bug [详情](https://ask.dcloud.net.cn/question/90460)
  + App平台 修复 pages.json 缺少 globalStyle 节点白屏的Bug
  + App平台 修复 picker 组件日期模式缺少 start 或 end 无法选择的Bug
  + App平台 修复 uni.onKeyboardHeightChange 重复监听的Bug [详情](https://ask.dcloud.net.cn/question/91818)
  + App平台 修复 downloadTask.abort 不生效的Bug [详情](https://ask.dcloud.net.cn/question/93342)
  + App平台 修复 uni.showModal 方法 content 不可为空的Bug [详情](https://ask.dcloud.net.cn/question/87180)
  + App平台 修复 nvue button 组件某些情况下 loading 样式异常的Bug [详情](https://ask.dcloud.net.cn/question/95422)
  + App平台 新增 nvue scrollview、list、waterfall、recycle-list等组件支持 scroll-top、scroll-left 属性
  + App平台 新增 video 组件支持 controlstoggle 事件
  + H5平台 修复 启用摇树优化后可能导致uniCloud功能不正常的Bug [详情](https://ask.dcloud.net.cn/question/94993)
  + 支付宝小程序 修复 uni.scanCode 设置 scanType 无效的Bug [#1578](https://github.com/dcloudio/uni-app/issues/1578)
  + uni-ui 新增 uni-drawer 组件 width 属性（仅在 vue 页面生效）、maskClick 属性，点击遮罩是否关闭抽屉
  + uni-ui 新增 uni-goods-nav 组件角标的前景色和背景色设置
  + uni-ui 新增 uni-popup 组件的信息提示、对话框、底部分享示例三种组件扩展样式
  + uni-ui 优化 uni-drawer 组件废弃 visible 属性，改用 open()、close() 方法开关抽屉，避免在某些场景不能正常关闭的 Bug
  + uni-ui 优化 uni-popup 组件部分代码逻辑，可支持自定义扩展组件
  + uni-ui 修复 uni-drawer 组件 close 回调执行两遍的 Bug
  + uni-ui 修复 uni-goods-nav 组件 buttonGroup 属性修改 color 颜色不生效的 Bug 
  + uni-ui 修复 uni-popup 组件内放置 input/textarea 获取不到焦点的 Bug
  + uni-ui 修复 uni-swipe-action 组件在 iOS13 中按钮点击失效或点击错位的 Bug
* 【uniCloud】
  + web控制台 调整 取消云存储文件类型限制。可用于托管App的apk或wgt下载
  + 阿里云 修复 某些情况下 neq 操作符无法正常使用的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 修复 Webview窗口标题栏 titleNView 调用 setTitleNViewButtonStyle 动态更新按钮属性可能不生效的Bug
  + 【重要】Android平台 调整 云端打包时默认不再包含 x86 CPU类型库，减少apk包体积 [详情](https://ask.dcloud.net.cn/article/36195#nox86)
  + Android平台 更新 uni-AD 腾讯广点通SDK版本为4.191.1061，今日头条穿山甲SDK版本为2.9.5.5，360广告SDK版本为4.14.3151
  + Android平台 更新 UniPush 使用的个推SDK版本为2.14.0.0，解决由于部分厂商推送SDK版本过低导致在新设备无法接收离线推送消息的问题
  + Android平台 优化 提交应用市场检查可能误报 Trojan-Dropper.AndroidOS.Agent 病毒的问题
  + Android平台 修复 storage 存储数据内容超过 2M 后无法正常获取的Bug [详情](https://ask.dcloud.net.cn/question/93875)
  + Android平台 修复 input 输入框获取焦点后可能无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/95119)
  + Android平台 修复 setUserAgent 设置 UA 可能引起应用概率性卡死的Bug [详情](https://ask.dcloud.net.cn/question/94668)
  + Android平台 修复 previewImage 预览图片界面顶部数字指示器在刘海屏手机上被遮挡的Bug [详情](https://ask.dcloud.net.cn/question/90222)
  + Android平台 修复 应用锁定横屏或竖屏后 previewImage 预览图片界面仍然可以横竖屏切换的Bug [详情](https://ask.dcloud.net.cn/question/94686)
  + iOS平台 修复 Webview窗口标题栏 titleNView 上按钮设置 select 属性，点击后下拉指示图标消失的Bug [详情](https://ask.dcloud.net.cn/question/92505)
  + iOS平台 修复 pick 从相册选择视频文件时只能使用默认压缩模式，无法选取原始视频的Bug [详情](https://ask.dcloud.net.cn/question/93738)
  + iOS平台 修复 在 iPad 设备横屏时状态栏消失的Bug [详情](https://ask.dcloud.net.cn/question/95284)

## 2.6.16.20200427-alpha
* 修复 Sublime Text 快捷键文件语法错误的Bug [详情](https://ask.dcloud.net.cn/question/94359)
* 【uni-app插件】
  + App平台、H5平台 修复 text 组件调整换行解析导致兼容问题的Bug [详情](https://ask.dcloud.net.cn/question/94473)
  + App平台、H5平台 修复 input、textarea 组件失去焦点时导致页面滚动到顶部的Bug [详情](https://ask.dcloud.net.cn/question/94065)
  + App平台、H5平台 修复 部分组件文本前后出现多余空格或换行的Bug [详情](https://ask.dcloud.net.cn/question/94802)
  + App平台 修复 非v3编译模式小程序组件事件监听报错的Bug [详情](https://ask.dcloud.net.cn/question/94377)
  + H5平台 修复 manifes.json 内 template 配置的模板文件不存在时框架样式错误的Bug
  + H5平台 修复 uni.chooseImage 返回的 tempFilePaths 为空Bug [详情](https://ask.dcloud.net.cn/question/94805)
* 【uniCloud】
  + 修复 某些情况下，公共模块上传失败的Bug [详情](https://ask.dcloud.net.cn/question/93580)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 使用 X5 Webview 内核渲染 plus.navigator.getUserAgent 获取 UA 不正确的Bug
  + Android平台 修复 新浪微博登录时选择不授权，返回后无法再次调用登录授权的Bug [详情](https://ask.dcloud.net.cn/question/93971)
* 【uni小程序SDK】
  + Android平台 修复 小程序启动直达 nvue 页面 query 参数丢失的Bug

## 2.6.14.20200420-alpha
* 修复 因eslint新版插件导致validate-html、validate-stylelint插件失效的Bug
* 修复 某些Node.js插件，npm install失败，再次安装，引发编辑器闪退的Bug
* 【uni-app插件】
  + 【重要】App平台 修复 v3版本 组件之间样式隔离，解决历史项目升级v3后，部分样式错乱问题 [详情](https://ask.dcloud.net.cn/question/91501)
  + App平台、H5平台 新增 EditorContext.insertImage 支持 width、height、extClass、data 配置
  + App平台、H5平台 修复 scroll-view 子元素使用百分比尺寸时大小不正确的Bug
  + App平台、H5平台 修复 input 组件设置 value 为 null 时显示不正确的Bug [详情](https://ask.dcloud.net.cn/question/93729)
  + App平台、H5平台 修复 iOS设备键盘收起可能引起页面显示与点击位置错位的Bug [详情](https://ask.dcloud.net.cn/question/93818)
  + App平台 优化 v3版本 事件对象，支持 json 序列化输出 [详情](https://github.com/dcloudio/uni-app/issues/1559)
  + App平台 修复 vue 页面与 nvue 页面引用相同组件，条件编译失效的Bug
  + App平台 修复 v3版本 button 组件 open-type 为 feedback 不生效的Bug 
  + App平台 修复 v3版本 picker-view 组件嵌套在 uni-pop 组件内渲染不正确的Bug [详情](https://ask.dcloud.net.cn/question/93606)
  + App平台 修复 v3版本 webview 组件 src 为空时显示错误页面的Bug
  + App平台 修复 v3版本 map 组件更新 marker 影响 polyline 的Bug [详情](https://ask.dcloud.net.cn/question/93944)
  + App平台 修复 v3版本 image 组件 widthFix 模式动态修改大小时不生效的Bug [详情](https://ask.dcloud.net.cn/question/93874)
  + App平台 修复 uni.openLocation 显示位置错误的Bug [详情](https://ask.dcloud.net.cn/question/85402)
  + App-Android平台 修复 nvue rich-text 组件 img 标签可能不显示的Bug [详情](https://ask.dcloud.net.cn/question/93388)
  + App-Android平台 修复 nvue input 组件 font-size 值设置过大时光标可能不显示的Bug [详情](https://ask.dcloud.net.cn/question/93283)
  + App-Android平台 修复 vue map 组件 marker 属性打包后图片不显示的Bug [详情](https://ask.dcloud.net.cn/question/92358)
  + App-Android平台 修复 nvue 页面跳转到 vue 页面后，input 组件获得焦点时可能无法弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/89769)
  + App-iOS 修复 uni.onBLEConnectionStateChange 不触发的bug
  + App-iOS 修复 uni.chooseImage 从相机选择图片分辨率过低的Bug [详情](https://ask.dcloud.net.cn/question/91502)
  + 小程序平台 修复 map 组件 @markertap 事件获取不到 markerId 的Bug
* 【App插件(含5+App和uni-app的App端)】
  + iOS平台 更新 uni-AD 腾讯广点通SDK版本为4.11.6
  + iOS平台 修复 uni-AD 腾讯广点通的信息流视频广告自动播放时没有静音的Bug
  + iOS平台 修复 iOS 13.4.1及以上版本在 iPad 设备应用第一次启动获取不到所有窗口对象的Bug [详情](https://ask.dcloud.net.cn/question/93308)
  + iOS平台 修复 视频播放控件 VideoPlayer 全屏时在 iPhoneX 可能出现亮度控制视图位置错乱的Bug [详情](https://ask.dcloud.net.cn/question/87370)
* 【uni小程序SDK】
  + iOS平台 补齐 wgt 编译版本与js框架版本校验，不一致会弹窗提示 [详情](https://ask.dcloud.net.cn/article/35627)
  + iOS平台 修复 小程序内 wgt 热更新资源后启动会显示一下 LaunchScreen.storyboard 页面的Bug

## 2.6.13.20200414-alpha
* 修复 内置浏览器运行时，某些数据类型在HBuilderX控制台显示错误的Bug
* 【uni-app插件】
  + 支付宝小程序平台 修复 部分情况下编译失败的Bug
  + App-Android平台 修复 v2版本apk使用wgt升级资源后，用v3版本apk覆盖安装无法进入应用的Bug [详情](https://ask.dcloud.net.cn/question/93426)
* 【App插件(含5+App和uni-app的App端)】
  + 修复 打包模块勾选 iOS UIWebview/Android X5 Webview 后，wgt升级更新失败触发错误回调的Bug [详情](https://ask.dcloud.net.cn/question/93447)
  + Android平台 修复 确认模态框 confirm 显示时会弹出软键盘的Bug [详情](https://ask.dcloud.net.cn/question/93574)
  + iOS平台 修复 HBuilderX2.6.8 引出的Webview窗口 userAgent 不正确可能导致加载的页面内部逻辑不正确的Bug [详情](https://ask.dcloud.net.cn/question/93284)
  + iOS平台 修复 uni-AD 腾讯广点通部分视频激励广告点击关闭按钮触发 onClose 事件参数中 isEnded 属性可能为 false 的Bug

## 2.6.12.20200412-alpha
* 新增 【重要】内置浏览器运行时，将日志直接输出到HBuilderX控制台
* 新增 内置web服务器 支持自定义端口 （菜单【设置】【运行配置】）
* 新增 FTP插件 支持通过commands在【自定义快捷键】中配置快捷键 [详情](https://ask.dcloud.net.cn/article/37081)
* 新增 项目管理器 增加刷新功能
* 修复 内部资源管理器 当未安装终端插件时，运行外部命令导致编辑器闪退的Bug
* 修复 Mac 内置浏览器分离后，点击关闭按钮，编辑器崩溃的Bug
* 修复 Mac 导入vue课程源码时，提示npm install失败的Bug
* 新增 uni-app 支持自定义uniapp编译器node启动内存（菜单【设置】【运行配置】）
* 【uni-app插件】
  + App平台 修复 无法获取音频暂停状态的Bug [详情](https://ask.dcloud.net.cn/question/92714)
  + App平台 修复 renderjs 中未绑定到 change:prop 的数据变更也会触发 change 事件的Bug [详情](https://ask.dcloud.net.cn/question/91887)
  + App平台 修复 v3版本 uni.arrayBufferToBase64 某些参数无法支持的Bug [详情](https://ask.dcloud.net.cn/question/92720)
  + App平台 修复 v3版本 使用小程序组件在低版本系统报错的Bug [详情](https://ask.dcloud.net.cn/question/92561)
  + App平台 修复 v3版本 text 组件首尾换行解析不正确的Bug
  + App平台 修复 v3版本 uni.canvasToTempFilePath 在低版本系统报错的Bug [详情](https://ask.dcloud.net.cn/question/92189)
  + App平台 修复 v3版本 调用 socketTask.close 不传参数报错的Bug
  + App平台 修复 v3版本 RecorderManager 事件重复执行的Bug [详情](https://ask.dcloud.net.cn/question/91885)
  + App平台 修复 v3版本 form 组件 submit 事件内无法获取 picker 值的Bug [#1545](https://github.com/dcloudio/uni-app/issues/1545)
  + App平台 修复 v3版本 uni.createBLEConnection 没有被 Promisify 的Bug [#1543](https://github.com/dcloudio/uni-app/issues/1543)
  + App-Android平台 修复 uni.sendSocketMessage 无法发送某些 bytebuffer 数据的Bug [详情](https://ask.dcloud.net.cn/question/92700)
  + App-Android平台 修复 nvue list/waterfall 组件底部使用 loading 加载更多时，无法正常触发 @loading 事件的Bug [详情](https://ask.dcloud.net.cn/question/93190)
  + App-Android平台 修复 nvue list 组件 @scroll 事件返回参数 contentOffset.y 值域不正确的Bug [详情](https://ask.dcloud.net.cn/question/92872)
  + App-Android平台 修复 nvue input 组件设置 type 为 digit/number 时弹出键盘类型不正确的问题
  + App-Android平台 修复 tabBar 页面设置 titleNView 的 type 为 transparent 滚动时标题栏透明度不发生变化的Bug
  + App-iOS平台 修复 nvue video 组件设置 @click 事件后，视频底部控制栏上除进度条以外的其他按钮失效的Bug [详情](https://ask.dcloud.net.cn/question/92727)
  + App-iOS平台 修复 v3模式 movable-area 组件嵌套 scroll-view 组件点击事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/92638)
  + H5平台 优化 uni.request 增加 withCredentials 参数，支持配置跨域请求时是否携带凭证（cookies）
  + H5平台 优化 uni.uploadFile 增加 files 参数，支持上传多个文件
  + H5平台 优化 uni.uploadFile 增加 file 参数，支持上传原始 File 对象
  + H5平台 优化 uni.chooseVideo、uni.chooseImage 支持返回原始 File 对象
  + H5平台 修复 base为相对路径 ./ 时，相对路径的静态资源加载失败的Bug [详情](https://ask.dcloud.net.cn/question/92910)
  + 小程序平台 修复 条件编译中引用静态资源始终生效的Bug [#1542](https://github.com/dcloudio/uni-app/issues/1542)
  + 小程序平台 修复 启用分包优化后，当分包路径相似时 vendor 生成不正确Bug [#1440](https://github.com/dcloudio/uni-app/issues/1440)
  + 支付宝小程序平台 修复 uni.getFileInfo 提示参数不正确的Bug
* 【uniCloud】
  + 阿里云 新增 支持云函数定时触发
  + 阿里云 新增 HBuilderX内置浏览器运行H5项目时，可在前端控制台直接打印云函数的日志
  + 阿里云 优化 云函数上传并运行时有时不能立即生效的问题
  + 阿里云 修复 字节跳动小程序iOS端上传文件失败的Bug [详情](https://ask.dcloud.net.cn/question/93130)
* 【App插件(含5+App和uni-app的App端)】
  + 新增 原生导航标题栏的 titleIcon 支持 base64 图标，方便页面里已经存在的图标在滚动时绘制在原生导航栏上
  + 新增 actionSheet 取消按钮文字国际化（如设置按钮文字，则以设置文字为准，如未设置，则根据手机系统的语言显示）
  + Android平台 新增 pop-in/pop-out 动画时通过 animationAlphaBGColor 设置动画蒙层背景色，可用于避免暗色风格页面转场动画的蒙层偏白 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewStyles)
  + Android平台 修复 uni-AD 腾讯广点通部分视频激励广告播放 30 秒后点击关闭按钮触发 onClose 事件参数中 isEnded 属性可能为 false 的Bug
  + Android平台 修复 Webview窗口对象 loadURL 方法没有触发 overrideUrlLoading 拦截回调函数的Bug [详情](https://ask.dcloud.net.cn/question/92689)
  + Android平台 修复 显示系统软键盘 plus.key.showSoftKeybord 多次调用会触发关闭软键盘的Bug
  + Android平台 修复 storage存储键值通过 setItem 方法传入 value 为空字符串后，通过 getItem 方法返回 null 的Bug
  + Android平台 修复 同时创建两个音频播放对象，其中一个音频暂停后另一个无法播放的Bug
  + Android平台 修复 视频播放控件 VideoPlayer 播放部分 rtmp 链接可能无声音的Bug
  + iOS平台 修复 原生导航标题栏 设置 type 为 float 时，backgroundColor 的半透明效果显示不正确的Bug

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
* 【uni-app插件】
  + 【重要】 App平台 调整 manifest中默认的编译模式为v3模式。如需要切换为老版自定义组件模式，需要在 manifest可视化界面 - App其他常用设置 中，去掉v3编译模式
  + 【重要】 App平台 新增 v3版本 支持纯 nvue 编译模式。两种模式不再互斥
  + 【重要】 App平台 调整 v3版本 template 节点中引用静态资源文件时（如：图片），调整查找策略为【基于当前文件的路径搜索】，与其他平台保持一致
  + App平台、H5平台 优化 v3版本 uni.moveToLocation 支持 latitude、longitude 参数
  + App平台、H5平台 修复 多列 picker 组件部分情况修改 value 不生效的Bug
  + App平台 新增 激励视频广告支持服务器回调 [详情](https://uniapp.dcloud.io/api/ad/rewarded-video-ad)
  + App平台 优化 控制台日志支持打印数组类型
  + App平台 修复 自定义组件编译模式使用 easycom 后在低版本设备白屏的Bug [详情](https://ask.dcloud.net.cn/question/92473)
  + App平台 修复 v3版本 判断浏览器专用 API（如：navigator）报错的Bug
  + App平台 修复 v3版本 uni.openLocation 点击导航栏返回后退2次的Bug [#1465](https://github.com/dcloudio/uni-app/issues/1465)
  + App平台 修复 v3版本 uni.moveToLocation 不执行回调的Bug
  + App平台 修复 v3版本 webview 组件无法收到 @message 的Bug [详情](https://ask.dcloud.net.cn/question/92296)
  + App平台 修复 v3版本 navigation-bar 组件 非首页某些属性无效的Bug
  + App-Android平台 修复 v3版本 SocketTask.onMessage 接收数据类型为 ArrayBuffer 时解析错误的Bug
  + App-Android平台 修复 nvue web-view 组件 src 属性的链接地址中带 query 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/92043)
  + App-Android平台 修复 nvue web-view、image 等组件 src 属性资源地址为_doc、_download路径时可能无法正常载入的Bug
  + App-iOS平台 修复 textarea 组件在 iOS13.4 系统报错的Bug
  + App-iOS平台 修复 nvue web-view 组件 src 属性加载本地 html 文件路径中带 query 参数时无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/91311)
  + App-iOS平台 修复 锁定横屏后打开 nvue 页面使用 plus.screen 获取屏幕宽高值不对的Bug
  + App-iOS平台 修复 v3版本 uni.canvasToTempFilePath 在 ios 9.3.4 报错的Bug [详情](https://ask.dcloud.net.cn/question/92189)
  + H5平台 修复 image 组件 某些情况下相对路径无法显示的Bug [详情](https://ask.dcloud.net.cn/question/92366)
  + 小程序平台 修复 调用取消事件监听类接口报错的Bug [#1511](https://github.com/dcloudio/uni-app/issues/1511)
* 【uniCloud】
  + 修复 使用阿里云时运行到App端不输出运行日志的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 uni-AD 激励视频广告支持服务器回调（限今日头条穿山甲广告） [文档](https://ask.dcloud.net.cn/article/37108)
  + 新增 Webview窗口标题栏 titleNView 的 titleIcon 支持网络图标路径
  + 新增 获取当前屏幕宽高信息接口 plus.screen.getCurrentSize [文档](https://www.html5plus.org/doc/zh_cn/device.html#plus.screen.getCurrentSize)
  + Android平台 修复 Webview窗口对象 loadURL 方法 headers 参数设置无效的Bug [详情](https://ask.dcloud.net.cn/question/87597)
  + Android平台 修复 在Android10上第一次安装后启动可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/90361)
  + Android平台 修复 应用标识 AppID 使用www结尾时导致部分资源无法正常载入的Bug [详情](https://ask.dcloud.net.cn/question/91217)
  + Android平台 修复 百度语音识别时在部分设备可能返回 4004 app name unknown 错误的Bug [详情](https://ask.dcloud.net.cn/question/90982)
  + Android平台 修复 设置应用图标显示角标数字 plus.runtime.setBadgeNumber 在部分设备超过100时仍然显示99的Bug [详情](https://ask.dcloud.net.cn/question/91452)
  + Android平台 修复 文件系统目录对象 DirectoryEntry 的 getFile 方法返回错误信息不准确的Bug
  + Android平台 修复 调用 plus.gellay.pick 通过QQ浏览器选择图片或视频在部分设备可能无响应的Bug
  + Android平台 修复 HBuilderX2.5.4引出的获取Cookie值 plus.navigator.getCookie 返回数据不正确的Bug
  + iOS平台 新增 Webview窗口使用WKWebview内核在iOS11及以上设备支持js原生混淆 [详情](https://ask.dcloud.net.cn/article/36437#wkwebview)
  + iOS平台 更新 支付宝Alipay SDK版本为15.7.4，解决AppStore审核报使用废弃UIWebview APIs的问题
  + iOS平台 更新 新浪微博登录、分享SDK版本为3.2.7，解决AppStore审核报使用废弃UIWebview APIs的问题
  + iOS平台 更新 今日头条穿山甲广告SDK版本为V2.9.5.0
  + iOS平台 修复 iOS 13.3及以上版本在 iPad 设备 plus.webview.all 无法获取所有Webview窗口的Bug [详情](https://ask.dcloud.net.cn/question/90517)
  + iOS平台 修复 iOS 13.3及以上版本在 iPad 设备 mui.openWindow 设置的窗口参数获取不到的Bug [详情](https://ask.dcloud.net.cn/question/91746)
  + iOS平台 修复 iOS 13及以上版本视频播放控件 VideoPlayer 全屏时可能出现亮度控制视图位置错乱的Bug [详情](https://ask.dcloud.net.cn/question/87370)
  + iOS平台 修复 视频播放控件 VideoPlayer 在下拉通知栏页面后依然播放的Bug [详情](https://ask.dcloud.net.cn/question/90627)
  + iOS平台 修复 预览图片 plus.nativeUI.previewImage 传入长图时显示不清楚的Bug [详情](https://ask.dcloud.net.cn/question/92083)
  + iOS平台 修复 应用安装后第一次启动 splash 界面显示不正常的Bug
  + iOS平台 修复 Webview窗口 setStyle 设置 {titleNView: false} 后通过 getSytle 获取的 titleNView 数据不正确的Bug
  + iOS平台 修复 Webview窗口标题栏 titleNView 动态设置 titleText 在某些情况下可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/92494)
* 【uni小程序SDK】
  + 新增 宿主与小程序通讯机制 [详情](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37122)
  + iOS平台 修复 在监听小程序被关闭的方法中紧接着在打开小程序可能会崩溃的Bug
  + iOS平台 修复 uni.chooseImage 引起内存泄露的Bug

## 2.6.7.20200326-alpha
* 新增 FTP插件，支持FTP/SFTP协议 [详情](https://ask.dcloud.net.cn/article/37081)
* 兼容 Mac 因微信开发者工具最新1.02.2003250版本调整cli路径，HBuilderX找不到微信开发者工具路径错误的Bug
* 修复 eslint插件 保存同步时，偶发请求超时的Bug
* 修复 当HBuilderX安装目录路径带有@符号时，编辑器布局UI显示异常的Bug
* 修复 App manifest.json screenOrientation规范放置节点错误的Bug
* 【uni-app插件】
  + App平台 新增 v3版本 支持动态插槽名
  + App平台 新增 v3版本 navigation-bar 组件 titleNView 配置 [详情](https://uniapp.dcloud.io/component/navigation-bar)
  + App平台 修复 v3版本 部分情况自定义组件内事件监听无效的Bug [详情](https://ask.dcloud.net.cn/question/91519)
  + App平台 修复 v3版本 动态绑定ref报错的Bug [#1458](https://github.com/dcloudio/uni-app/issues/1458)
  + App平台 修复 v3版本 textarea 组件 placeholder-class 无默认值的Bug [详情](https://ask.dcloud.net.cn/question/91373)
  + App平台 修复 v3版本 cover-view、cover-image 组件无法在自定义组件内使用的Bug [详情](https://ask.dcloud.net.cn/question/91345)
  + App平台 修复 v3版本 低功耗蓝牙某些接口在返回 ArrayBuffer 时被转为 base64 的Bug
  + App平台 修复 v3版本 uni.canvasPutImageData 无法正常使用的Bug [详情](https://ask.dcloud.net.cn/question/91672)
  + App平台 修复 v3版本 video 组件 timeupdate 事件回调错误的Bug [详情](https://ask.dcloud.net.cn/question/91769)
  + App-Android平台 修复 国产安卓模拟器 uni.getSystemInfo 获取设备宽高错误的Bug [详情](https://ask.dcloud.net.cn/question/90270)
  + App-Android平台 修复 HBuilderX2.6.6引出的 tabBar 设置图标云端打包后可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/91426)
  + App-iOS平台 修复 设备上使用第三方输入法收起键盘输入框无法失去焦点的Bug [详情](https://ask.dcloud.net.cn/question/91254)
  + App-iOS平台 修复 部分情况 page 设置 height 为 100% 无法全屏的Bug
  + App-iOS平台 修复 含 tabBar 页面使用原生占位时在 iPhoneX 获取窗口高度错误的Bug
  + App-iOS平台 修复 picker 设置 value 过大时会滚动到空白位置的Bug [详情](https://ask.dcloud.net.cn/question/89539)
  + App-iOS平台 修复 nvue 页面中加载 base64 格式 iconfont 文件在iOS13.4系统崩溃的Bug [详情](https://ask.dcloud.net.cn/question/91721)
  + H5平台 修复 带参数 url 直达部分情况参数解析失败的Bug [#1082](https://github.com/dcloudio/uni-app/issues/1082)
  + H5平台 修复 editor 组件 input 事件重复触发的Bug [详情](https://ask.dcloud.net.cn/question/91453)
  + H5平台 修复 editor 组件 statuschange 事件无法触发的Bug [详情](https://ask.dcloud.net.cn/question/91314)
  + H5平台 修复 picker 组件未设置 value 时报错的Bug [#1422](https://github.com/dcloudio/uni-app/issues/1422)
  + H5平台 修复 textarea 组件 placeholder-class 配置无效的Bug [详情](https://ask.dcloud.net.cn/question/86851)
* 【uniCloud】
  + 新增 腾讯云（限受邀内测用户）
  + 新增 uniCloud 支持通过模板创建公共模块（common目录，右键菜单，新建公共模块）
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 系统选择按钮框底部取消按钮UI显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/91265)
  + iOS平台 修复 云端打包启动页面中应用图标显示不清晰的Bug [详情](https://ask.dcloud.net.cn/question/91032)

## 2.6.6.20200320-alpha
* 优化 eslint一键修复，调整为文件保存时自动修复，无需再手动点修复按钮 [详情](https://ask.dcloud.net.cn/article/37070)
* 修复 Mac 内置浏览器touch事件无效的Bug
* 修复 设置自动换行后，重启编辑器第一次点击自动换行不生效的Bug [详情](https://ask.dcloud.net.cn/question/89953)
* 优化 svn/git导入，URL包含%时，本地路径解析为实际中文名称
* 【uni-app插件】
  + 优化 静态资源引入方式 [详情](https://uniapp.dcloud.io/frame?id=resource)
  + 修复 内联 wxs 里包含“!”符号时报错的Bug [详情](https://ask.dcloud.net.cn/question/90581)
  + 修复 TypeScript 项目部分情况(存在 easycom 组件)，内置组件报未注册的Bug [#1400](https://github.com/dcloudio/uni-app/issues/1400)
  + 修复 uni.scss 内条件编译失效的Bug [详情](https://ask.dcloud.net.cn/question/90454)
  + 修复 vue.config.js 设置 transpileDependencies 失效的Bug [详情](https://ask.dcloud.net.cn/question/90068)
  + App平台、H5平台 修复 createAnimation 时 backgroundColor无效的Bug [详情](https://ask.dcloud.net.cn/question/91190)
  + App平台 调整 v3版本 使用 wx.xxx 方式调用接口不进行 Promise 封装
  + App平台 修复 热刷新页面参数被 encode 多次的Bug
  + App平台 修复 vue 页面 ad 组件 无法销毁的Bug
  + App平台 修复 uni.setNavigationBarColor 无法设置返回按钮的颜色的Bug
  + App平台 修复 tabBar 的 midButton 点击高出tabBar高度区域无响应的Bug [详情](https://ask.dcloud.net.cn/question/87821)
  + App平台 修复 纯 nvue 模式 uni.relaunch 会导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/89364)
  + App平台 修复 非v3编译模式 uni.getImageInfo 返回 path 不是本地路径的Bug [详情](https://ask.dcloud.net.cn/question/90689)
  + App平台 修复 v3版本 部分情况组件事件监听混乱，导致页面渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/91169)
  + App平台 修复 v3版本 fast 模式 storage相关API报错的Bug [详情](https://ask.dcloud.net.cn/question/90554)
  + App平台 修复 v3版本 通过 v-if 切换部分组件时报错的Bug [详情](https://ask.dcloud.net.cn/question/90200)
  + App平台 修复 v3版本 css 条件编译为非 nvue 页面报错 may not be supported 的Bug [详情](https://ask.dcloud.net.cn/question/90523)
  + App平台 修复 v3版本 await this.$nextTick() 触发时机不正确的Bug [详情](https://ask.dcloud.net.cn/question/87434)
  + App平台 修复 v3版本 切换到已显示 tabBar 页面时触发该页面 onHide 的Bug [详情](https://ask.dcloud.net.cn/question/91106)
  + App平台 修复 v3版本 从非 tabBar 页面调用 uni.switchTab 切换到一个已存在的 tabBar 页面，onShow 不执行的Bug
  + App平台 修复 v3版本 nvue 页面 swiper 组件的 @transition 事件在某些情况下回调不正确的Bug [详情](https://ask.dcloud.net.cn/question/88906)
  + App平台 修复 v3版本 swiper 组件作为插槽内容在其他组件中表现不正常的Bug [详情](https://ask.dcloud.net.cn/question/89853)
  + App平台 修复 v3版本 map 组件 @markertap、@callouttap 事件回调值错误的Bug [详情](https://ask.dcloud.net.cn/question/88656)
  + App平台 修复 v3版本 map 组件 @regionchange 事件无效的Bug [详情](https://ask.dcloud.net.cn/question/88656)
  + App平台 修复 v3版本 nvue 页面 map 相关API：getRegion，getCenterLocation 无效的Bug [详情](https://ask.dcloud.net.cn/question/90327)
  + App平台 修复 v3版本 canvas 组件宽度或高度为0时报错的Bug [详情](https://ask.dcloud.net.cn/question/90647)
  + App平台 修复 v3版本 部分情况下绘制 canvas 组件报错的Bug [详情](https://ask.dcloud.net.cn/question/90328)
  + App平台 修复 v3版本 uni.canvasToTempFilePath 配置 fileType 参数不生效的Bug [详情](https://ask.dcloud.net.cn/question/89273)
  + App平台 修复 v3版本 uni.previewImage 参数 longPressActions 无效的Bug
  + App平台 修复 v3版本 uni.sendSocketMessage 发送 ArrayBuffer 类型数据报错的Bug [详情](https://ask.dcloud.net.cn/question/90434)
  + App平台 修复 v3版本 socketTask.onOpen 内调用 socketTask.send 报错的Bug
  + App平台 修复 v3版本 uni.createBLEConnection 回调不触发的Bug
  + App平台 修复 v3版本 uni.readBLECharacteristicValue 无法读取特征值数据的Bug
  + App平台 修复 v3版本 uni.writeBLECharacteristicValue 写入二进制数据报错的Bug
  + App平台 修复 v3版本 subNvue style 内的 mask 属性被错误的应用在 subNvue 上的Bug [详情](https://ask.dcloud.net.cn/question/91097)
  + App平台 新增 nvue 页面 list 组件支持 setSpecialEffects 方法，实现 swiper-list 吸顶滚动效果 [文档](https://uniapp.dcloud.io/component/list?id=setSpecialEffects)
  + App平台 修复 nvue 页面 v-slot:slotname 值为空时报错的Bug
  + App平台 修复 nvue 页面 修复部分情况下 createLivePusherContext 无法正确获取 live-pusher 上下文的Bug
  + App平台 修复 nvue 页面 map 组件 markers、polyline、polygons、circles 属性无法重置的Bug [详情](https://ask.dcloud.net.cn/question/86786)
  + App平台 修复 nvue 页面 自定义组件中无法正常使用 video 相关 API 的Bug [详情](https://ask.dcloud.net.cn/question/90877)
  + App-Android平台 优化 storage 相关 API 性能 [注意事项](https://ask.dcloud.net.cn/article/37071)
  + App-Android平台 修复 pages.json 内配置 softinputMode 为 adjustResize 部分情况下失效的Bug [详情](https://ask.dcloud.net.cn/question/90145)
  + App-Android平台 修复 nvue video 组件在页面中存在多个且包含 cover-view 全屏播放时闪退的Bug [详情](https://ask.dcloud.net.cn/question/88718)
  + App-Android平台 修复 nvue video 组件设置 click 事件后视频操作按钮无法触发的Bug [详情](https://ask.dcloud.net.cn/question/90291)
  + App-Android平台 修复 nvue waterfall 组件加入 Refresh 后item排版错乱的Bug [详情](https://ask.dcloud.net.cn/question/83130)
  + App-Android平台 修复 tabBar 的 midButton 设置 backgroundImage 显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/89800)
  + App-Android平台 修复 v3版本 map 组件绑定宽高后无法动态修改的Bug [详情](https://ask.dcloud.net.cn/question/89771)
  + App-Android平台 修复 v3版本 nvue 为首页时 autoclose 设置为 false 也会自动关闭启动页的Bug [详情](https://ask.dcloud.net.cn/question/90080)
  + App-iOS平台 新增 API uni.onUIStyleChange 监听系统主题状态变化（限v3） [详情](https://uniapp.dcloud.io/api/system/theme?id=onuistylechange)
  + App-iOS平台 优化 API uni.showActionSheet 在 iPad 设备支持 popover 设置弹出指示区域（限v3）
  + App-iOS平台 修复 HBuilderX2.6.4引出的调用 API uni.setClipboardData 可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/90439)
  + App-iOS平台 修复 HBuilderX2.6.4引出的调用 uni.showToast 可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/90520)
  + App-iOS平台 修复 配置底部安全区原生占位后，非 tabBar 页面获取的窗口高度错误的Bug
  + H5平台 优化 支持 manifest.json 配置 h5->router->base 值为 "./" 部署到相对路径
  + H5平台 修复 pages.json 配置 navigationBarShadow 无效的Bug [#607](https://github.com/dcloudio/uni-app/issues/607)
  + H5平台 修复 配置 transparentTitle 为 always 失效的Bug [详情](https://ask.dcloud.net.cn/question/91135)
  + H5平台 修复 解决PC模式图像预览页面滑动会关闭的Bug
  + H5平台 修复 部分情况下 webview 组件位置不正确的Bug [详情](https://ask.dcloud.net.cn/question/90987)
  + H5平台 修复 picker 组件 mode=time 失效的Bug [#1421](https://github.com/dcloudio/uni-app/issues/1421)
  + 微信小程序平台 修复 组件缺少 script 节点时运行报错的Bug [#1411](https://github.com/dcloudio/uni-app/issues/1411)
  + hello uni-app 新增 swiper-list 模板
* 【uniCloud】
  + 新增 公共函数功能 [详情](https://uniapp.dcloud.io/uniCloud/quickstart?id=common)
  + 修复 客户端上传文件在web控制台显示大小为0的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 新增 原生标题栏支持自定义返回按钮角标、标题图标、副标题等功能 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + 修复 Webview窗口的 WebviewEvent 事件回调函数参数没有 target 属性的Bug [详情](https://ask.dcloud.net.cn/question/90403)
  + Android平台 优化 本地数据存储 plus.storage 性能，新增异步操作接口 [注意事项](https://ask.dcloud.net.cn/article/37071)
  + Android平台 修复 uni-AD 激励视频云端打包勾选穿山甲，广告平台没有通过审核时可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/91251)
  + Android平台 修复 提交华为应用市场检查可能误报 TrojanDropper.Agent.EIY 病毒的Bug
  + Android平台 修复 页面中a标签设置非法链接后，点击可能出现应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/90425)
  + Android平台 修复 在部分华为手机上修改文件名之后，使用input标签type为file时获取文件名称可能为随机数字的Bug
  + Android平台 修复 Webview窗口标题栏（titleNView）设置type为transparent时，其它原生控件（如VideoPlayer）可能会覆盖标题栏的Bug [详情](https://github.com/dcloudio/uni-app/issues/1298)
  + Android平台 修复 页面中input标签触发软键盘收回时可能影响 WebviewStyles 中的top属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/91003)
  + Android平台 修复 HBuilderX2.6.4引出的Webview窗口标题栏（titleNView）动态修改 titleColor 不生效的Bug
  + Android平台 修复 获取UA值 plus.navigator.getUserAgent 返回为空的Bug [详情](https://ask.dcloud.net.cn/question/89762)
  + Android平台 修复 视频播放控件 VideoPlayer 跳转到指定位置之后，弹幕仍然按照之前的进度播放的Bug
  + Android平台 修复 视频播放控件 VideoPlayer 未指定 direction 时没有根据视频的宽高自动选择 direction 的Bug [详情](https://ask.dcloud.net.cn/question/89600)
  + Android平台 修复 地图控件 setCenter 后不触发 onstatuschanged 事件的Bug [详情](https://ask.dcloud.net.cn/question/48182)
  + Android平台 修复 在Android4.4系统设备无法正常运行的Bug
  + 【重要】iOS平台 新增 UIWebview独立模块，默认不再包含UIWebview相关代码 [详情](https://ask.dcloud.net.cn/article/36348#uiwebview)
  + iOS平台 新增 系统选择按钮框 plus.nativeUI.actionSheet 在iPad设备支持 popover 设置弹出指示区域 [文档](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.ActionSheetStyles)
  + iOS平台 新增 本地数据存储 plus.storage 异步操作接口 [文档](https://www.html5plus.org/doc/zh_cn/storage.html)
  + iOS平台 更新 友盟统计SDK版本为6.1.0
  + iOS平台 更新 微信登录、分享、支付SDK版本为1.8.6.2
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 show-center-play-btn 属性不生效的Bug [详情](https://ask.dcloud.net.cn/question/90673)
  + iOS平台 修复 Webview窗口标题栏（titleNView）中 button 按钮设置 colorPressed 不生效的Bug [详情](https://ask.dcloud.net.cn/question/90616)
  + iOS平台 修复 新浪微博分享 type 为 web 类型时 pictures 属性不生效的Bug
  + iOS平台 修复 系统选择按钮框 plus.nativeUI.actionSheet 显示后不关闭，通过HBuilderX真机运行更新资源可能引起崩溃的Bug
* 【uni小程序SDK】
  + 新增 获取当前显示小程序页面直达Url方法（用于启动直达二级页面）[iOS](https://ask.dcloud.net.cn/article/37068#getCurrentPageUrl)、[Android](https://ask.dcloud.net.cn/article/36984#getCurrentPageUrl)
  + 新增 获取已部署的小程序资源版本信息方法 [iOS](https://ask.dcloud.net.cn/article/37068#getUniMPVersionInfo)、[Android](https://ask.dcloud.net.cn/article/36984#getAppVersionInfo)
  + 新增 胶囊按钮添加点击效果
  + 开放 小程序内部调用 plus.runtime.install 热更新wgt资源 [详情](https://ask.dcloud.net.cn/article/35667)
  + iOS平台 修复 原生工程勾选 'Hide status bar' 导致小程序页面导航栏被系统状态栏挡住的Bug
  + iOS平台 修复 pickDate、pickTime 无法显示的Bug

## 2.6.4.20200310-alpha
* 修复 App manifest.json 可视化界面配置模块权限时发生崩溃的Bug
* 【uni-app插件】
  + App平台 新增 uni.shareWithSystem 调用系统分享组件发送分享消息 [详情](https://uniapp.dcloud.io/api/plugins/share?id=sharewithsystem)
  + App平台 修复 非 v3编译模式 webview 组件高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/89683)  
  + App平台 修复 v3版本 uni.request 的 header 内使用小写的 content-type 会报错的Bug [详情](https://ask.dcloud.net.cn/question/90214)
  + App平台 修复 v3版本 vue 页面热刷新时 onLoad 参数被重复编码的Bug
  + App平台 修复 v3版本 vue map 组件 scale 属性和 tap 事件无效问题 [详情](https://ask.dcloud.net.cn/question/89491)
  + App-Android平台 修复 v3版本 wgt热更新后无法打开新增页面的Bug [详情](https://ask.dcloud.net.cn/question/88829)
  + App-iOS平台 修复 v3版本 wgt热更新后 plus.runtime.restart 卡在启动页的Bug [详情](https://ask.dcloud.net.cn/question/89966)
  + App-iOS平台 修复 v3版本 video 组件部分情况无法显示的bug
  + App-iOS平台 修复 nvue web-view 组件加载本地文件显示空白的Bug [详情](https://ask.dcloud.net.cn/question/90114)
* 【5+App插件】
  + 优化 uni-AD 激励视频广告内部加载逻辑，完善错误信息 [详情](https://ask.dcloud.net.cn/article/36718#rewarderror)

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
* 【uni-app插件】
  + 新增 页面属性配置节点 page-meta [详情](https://uniapp.dcloud.io/component/page-meta)
  + App平台、H5平台 调整 canvas 组件大小改变时不再丢失内容
  + App平台 【重要】 老版自定义组件编译模式将于4月1日下线 [详情](https://ask.dcloud.net.cn/article/36988)
  + App平台 【重要】 新增 vue页面引用的js，支持原生混淆（限v3） [详情](https://ask.dcloud.net.cn/article/36437)
  + App平台 新增 video 组件全屏点击事件 fullscreenclick
  + App平台 优化 真机运行时，强化错误提示，输出vue警告日志（限v3）[详情](https://ask.dcloud.net.cn/question/89193)
  + App平台 优化 vue 页面 input、textarea 组件支持 show-confirm-bar 属性（限v3）
  + App平台 优化 picker 组件支持 fields 属性
  + App平台 优化 支持更多 crypto 加密库 [详情](https://ask.dcloud.net.cn/question/89334)
  + App平台 修复 v3版本 uni.getStorage 部分情况下获取数据格式错误的Bug [详情](https://ask.dcloud.net.cn/question/87866)
  + App平台 修复 v3版本 $nextTick 无法返回 Promise 的Bug
  + App平台 修复 v3版本 点击 tabBar 会重复触发 onShow 的Bug [详情](https://ask.dcloud.net.cn/question/87497)
  + App平台 修复 v3版本 input、textarea 组件 cursor-spacing 属性为字符串时报错的Bug
  + App平台 修复 v3版本 picker-view 组件内的 navigator 组件无法跳转的Bug [详情](https://ask.dcloud.net.cn/question/87794)
  + App平台 修复 v3版本 input 组件使用 v-model 后 input 事件会重复触发的Bug
  + App平台 修复 v3版本 多个 tabBar 页面同时使用 subNvue 时，点击蒙层关闭不正常的Bug [详情](https://ask.dcloud.net.cn/question/89050)
  + App平台 修复 v3版本 部分情况组件渲染不正确的Bug [#1334](https://github.com/dcloudio/uni-app/issues/1334)
  + App平台 修复 v3版本 部分情况文本节点渲染不正确的Bug [详情](https://ask.dcloud.net.cn/question/89557)
  + App平台 修复 v3版本 vue map 组件动态修改 v-if 无效隐藏的Bug [详情](https://ask.dcloud.net.cn/question/89986)
  + App平台 修复 v3版本 nvue map API translateMarker 无效的Bug
  + App平台 修复 v3版本 cover-view 组件部分样式渲染不正确的Bug [详情](https://ask.dcloud.net.cn/question/89609)
  + App平台 修复 v3版本 使用 renderjs 后，低版本系统运行异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/1373)
  + App平台 修复 v3版本 真机运行 修改 pages.json 触发多次同步手机端文件的Bug
  + App平台 修复 非v3模式 app.vue 中使用 css 变量不生效的Bug [详情](https://ask.dcloud.net.cn/question/89367)
  + App平台 修复 uni.uploadFile 的 formData 属性中不能包含数值类型的Bug [详情](https://ask.dcloud.net.cn/question/87951)
  + App平台 修复 nvue页面 movable-view 组件 inertia 属性不生效的Bug
  + App平台 修复 uni.request 在 content-type 为 application/json 时自动对 data 序列化 [详情](https://ask.dcloud.net.cn/question/89474)
  + App平台 修复 某些情况下事件接收参数不正确的Bug [详情](https://ask.dcloud.net.cn/question/89818)
  + App-Android平台 修复 nvue map 组件不设置 markers 属性导致tap事件不触发的Bug
  + App-Android平台 修复 云打包后 uni.getImageInfo() 获取本地图片信息可能会触发失败回调的Bug
  + App-iOS平台 修复 nvue image 组件使用相对路径加载图片可能会不显示的Bug [详情](https://ask.dcloud.net.cn/question/89117)
  + App-iOS平台 修复 video 组件设置 muted 为0静音后再设置为1时无法重新开启声音的bug [详情](https://ask.dcloud.net.cn/question/89106)
  + H5平台 优化 内置组件响应鼠标事件，可在PC浏览器正常拖动和滚动
  + H5平台 优化 “网络不给力”现象，调整页面加载超时时间和提示文案
  + H5平台 优化 修改代码后提升页面热更新速度
  + H5平台 修复 picker 组件设置 fields 属性后返回值格式错误的Bug
  + H5平台 修复 picker 组件设置 value 部分情况无法触发视图更新的Bug [#1162](https://github.com/dcloudio/uni-app/issues/1162)
  + H5平台 修复 uni.createSelectorQuery 返回的节点信息中 bottom 值错误的Bug [详情](https://ask.dcloud.net.cn/question/85968)
  + H5平台 修复 map 组件无法同时加载多个实例的Bug [详情](https://ask.dcloud.net.cn/question/88735)
  + H5平台 修复 movable-view 组件限制移动方向后，拖动操作会出现中断的Bug
  + H5平台 修复 tranparentTitle 失效的Bug [详情](https://ask.dcloud.net.cn/question/89354)
  + H5平台 修复 部分浏览器中 uni.getSystemInfo 获取 windowTop、windowHeight 值错误的Bug [#1348](https://github.com/dcloudio/uni-app/issues/1348)
  + H5平台 修复 在页面 onReady 生命周期内绘制canvas 绘制内容会一闪消失的Bug [详情](https://ask.dcloud.net.cn/question/81675)
  + 小程序平台 修复 easycom 无法正常使用驼峰式命名组件的Bug [详情](https://ask.dcloud.net.cn/question/87925)
  + 小程序平台 修复 App.vue 包含 template 节点时，导致 app.json 生成错误的Bug [#1351](https://github.com/dcloudio/uni-app/issues/1351)
  + 微信小程序平台 修复 控制台没有输出生命周期内异常的Bug [详情](https://ask.dcloud.net.cn/question/89440)
  + 钉钉小程序平台 调整 uni.request 在 content-type 为 application/json 时自动序列化 data
  + uni-ui 修复 NoticeBar 通告栏组件关闭按钮不显示的Bug
  + uni-ui 修复 IndexedList 索引列表组件非全屏显示时，右侧索引位置与点击位置偏移的Bug
* 【5+App插件】
  + 新增 原生标题栏支持自定义返回按钮、标题居左、标题栏背景图、背景渐变色等功能 [文档](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + 新增 视频播放控件 VideoPlayer 支持全屏播放时点击事件 fullscreenclick [文档](https://www.html5plus.org/doc/zh_cn/video.html#plus.video.VideoPlayerEvents)
  + Android平台 新增 原生隐私与政策提示框配置 [详情](https://ask.dcloud.net.cn/article/36937)
  + Android平台 优化 云端打包默认需要的系统权限，支持配置是否自动添加第三方SDK需要的权限 [详情](https://ask.dcloud.net.cn/article/36982)
  + Android平台 优化 Webview窗口加载可缩放页面时默认隐藏系统缩放控制条 [详情](https://ask.dcloud.net.cn/question/89088)
  + Android平台 修复 获取系统语言信息 plus.os.language 字符中没有包含地区信息的Bug
  + iOS平台 新增 适配iOS13+引入的暗黑模式 DarkMode [文档](https://ask.dcloud.net.cn/article/36995)
  + iOS平台 新增 应用使用Push（消息推送）模块后启动时不弹出“发送通知”系统授权框的配置方法 [详情](https://ask.dcloud.net.cn/article/36955#push)
  + iOS平台 修复 视频播放控件 VideoPlayer 设置 objectFit 属性不生效的bug [详情](https://ask.dcloud.net.cn/question/88221)
  + iOS平台 修复 使用WKWebview内核 plus.orientation.getCurrentOrientation 无法获取设备方向信息的Bug
  + Hello H5+ 新增 标题栏自定义返回按钮、标题居左、背景图、背景渐变色等示例
  + Hello H5+ 修复 iOS平台 使用WKWebview导致微信和支付宝支付示例总是提示获取订单失败的Bug
* 【uni小程序SDK】
  + 新增 启动小程序支持传入参数及直达指定页面 [详情](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37010)
  + 新增 关闭当前小程序方法及小程序关闭回调方法 [详情](https://ask.dcloud.net.cn/docs/#https://ask.dcloud.net.cn/article/37014)
  + 新增 获取当前运行的小程序appid方法
  + Android平台 修复启动小程序后调用扫码可能引起的闪退问题 [详情](https://ask.dcloud.net.cn/question/89827)

## 2.5.11.20200212-alpha
* 新增 uniCloud 云函数全部上传、批量上传功能
* 新增 uniCloud 云数据库初始化的功能（右键db_init.json）
* 修复 全部替换后，按下`Ctrl+S`, 替换内容没有保存的Bug
* 修复 某些情况下，`Ctrl+W`关闭标签卡后，编辑器焦点丢失的Bug
* 优化 Mac 新建项目窗口UI
* 【uni-app插件】
  + App平台 新增 API uni.createRewardedVideoAd，激励视频广告 [详情](https://uniapp.dcloud.io/component/ad-rewarded-video)
  + hello uni-app 新增 ad 组件示例
  + hello uni-app 新增 激励视频广告 API示例
* 【5+App插件】
  + 新增 uni-AD 支持激励视频广告 [文档](https://www.html5plus.org/doc/zh_cn/ad.html#plus.ad.createRewardedVideoAd)
  + 新增 推送 支持异步获取客户端推送标识接口 plus.push.getClientInfoAsync，解决同步接口可能返回空数据的问题 [文档](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.getClientInfoAsync)
  + iOS平台 修复 HBuilderX2.5.8引出的视频播放控件无法播放直播地址的Bug [详情](https://ask.dcloud.net.cn/question/88393)
  + Hello H5+ 新增 激励视频广告演示示例

## 2.5.10.20200205-alpha
* 新增 Mac 内置浏览器支持跨域请求
* 修复 uniCloud 项目导入HBuilderX后第一次选择云服务空间后无法正常运行、发行的Bug
* 优化 uniCloud 项目通过右键菜单绑定服务空间之后，不再需要在代码中初始化
* 【uni-app插件】
  + APP平台、H5平台 优化 默认请求超时时间（request、connectSocket、uploadFile、downloadFile）对齐微信小程序由6秒改为60秒
* 【5+App插件】
  + Android平台 修复 调用系统分享消息 plus.share.sendWithSystem 标题不支持国际化的Bug [详情](https://ask.dcloud.net.cn/question/87936)

## 2.5.9.20200203-alpha
* 【uni-app插件】
  + uniCloud 支持 H5平台的发布
  + uniCloud 支持设置协作者，多人使用相同AppID的项目，可绑定同一服务空间。方法：[开发者中心](https://dev.dcloud.net.cn) -> 选择应用 -> 项目成员管理。
  + uniCloud 修复 H5平台 main.js 内使用 uniCloud 报错的Bug
  + uniCloud 修复 App平台 callback 方式调用云函数报错的Bug
  + uniCloud 修复 上传 mp3 文件报错的Bug
  + uni-ui 新增 uni-combox 组合框组件

## 2.5.8.20200128-alpha
* 修复 免打扰模式，搜索后，某些搜索相关的按钮无法点击的Bug
* 修复 js 注释内无法输入中文标点的Bug
* 修复 js async修饰箭头函数时，参数不提示的Bug
* 修复 uni-app pages.json easycom配置autoscan导致组件无法提示的Bug
* 【uni-app插件】
  + 【重要】uniCloud公测。serverless模式，全端云开发，js编写后端代码 [详情](https://uniapp.dcloud.io/uniCloud/README)
  + App-Android平台 修复 tabBar 设置 midButton 可能显示不全的Bug [详情](https://ask.dcloud.net.cn/question/87744)
  + App-iOS平台 修复 video 组件未播放时调用 seek 可能导致界面不正常的bug [详情](https://ask.dcloud.net.cn/question/80013)
  + App-iOS平台 修复 nvue input 组件 placeholder-style 和 placeholder-class 设置 fontSize 不生效的Bug
  + App-iOS平台 修复 页面中使用字体图标时可能无法正常显示的Bug
* 【5+App插件】
  + iOS平台 修复 视频播放控件 VideoPlayer 暂停播放后手势快进或后退操作时，没有更新进度条上显示时间的Bug

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
* 【uni-app插件】
  + App平台 修复 v3版本 原生组件 fixed 定位无效的Bug [详情](https://ask.dcloud.net.cn/question/87475)
  + App平台 修复 v3版本 uni.createSelectorQuery 无法查询到 id 的Bug [详情](https://ask.dcloud.net.cn/question/87644)
  + App平台 修复 v3版本 非 tab 首页（nvue）显示 tabBar 的Bug [详情](https://ask.dcloud.net.cn/question/87536)
  + App平台 修复 v3版本 div、span 等 H5 组件样式不生效的Bug
  + App平台 修复 v3版本 videoContext.requestFullScreen 不生效的Bug [详情](https://ask.dcloud.net.cn/question/87202)
  + App平台 修复 v3版本 vue map 组件 API 不支持通过 $getAppMap 获取原生 map 对象的Bug
  + App-Android平台 修复 nvue map 组件 markers 更新频繁可能出现失败的Bug [详情](https://ask.dcloud.net.cn/question/87625)
  + H5平台 修复 启用摇树优化后 页面样式错乱的Bug [详情](https://ask.dcloud.net.cn/question/87495)
  + uni-ui 修复 v3版本 app-vue 页面中 swipe-action 组件无法滑动的Bug
* 【5+App插件】
  + Android平台 优化 uni-AD 使用今日头条穿山甲广告，在Android8及以上版本华为手机没有访问设备信息权限时只显示抖音广告的Bug
  + Android平台 修复 音频播放对象 AudioPlayer 触发end事件之后，调用 stop 和 destroy 方法会出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/73227)

## 2.5.6.20200113-alpha
* 【uni-app插件】
  + App平台 修复 非v3编译模式 自定义组件失效的Bug [#1271](https://github.com/dcloudio/uni-app/issues/1271)
  + App平台 修复 v3版本 组件 dataset 属性可能导致运行报错的Bug
  + App平台 优化 v3版本 uni.request API 失败回调中返回详细信息
  + App-Android平台 修复 nvue textarea 组件设置 maxlength 为 -1 时无法输入文字的Bug [详情](https://ask.dcloud.net.cn/question/87503)
  + App-iOS平台 修复 nvue list 组件设置 bounce 为 false 可能导致页面无法滚动的Bug
  + H5平台 修复 input 组件设置 placeholder 的 top 样式显示错位的Bug [#1222](https://github.com/dcloudio/uni-app/issues/1222)
* 【5+App插件】
  + 新增 Webview窗口样式支持设置禁止调用plus属性 disablePlus，解决加载外部页面时可能调用plus对应用造成危害的隐患 [详情](https://ask.dcloud.net.cn/question/85390)

## 2.5.5.20200111-alpha
* 新增 内部资源管理器。大幅提升资源管理器效率（目前仅支持Windows） [详情](https://ask.dcloud.net.cn/article/36828)
* 新增 项目管理器 支持单击目录不展开/折叠（在项目管理器右上角的菜单中可配置）
* 新增 项目管理器 增加彩色图标主题 （在项目管理器右上角的菜单中可配置）
* 优化 关闭代码提示后，将不再启动代码助手服务，可减少内存占用（在【设置】-【编辑器配置】，启用或关闭代码助手服务；默认开启）
* 修复 某些RGBA颜色值，颜色预览显示错误的Bug
* 新增 uni-app easycom组件模式，支持代码提示、转到定义
* 【uni-app插件】
  + 【重要】easycom 支持自动扫描组件，符合目录规则的组件，无需在pages.json配置即可直接使用 [详情](https://uniapp.dcloud.io/collocation/pages?id=easycom)
  + 【重要】App平台、H5平台 新增 支持 renderjs，替代 wxs ，以 vue 组件的写法运行在视图层 [详情](https://uniapp.dcloud.io/frame?id=renderjs)
  + App平台、H5平台、字节跳动小程序平台 新增 swiper 组件支持 disable-touch 属性
  + App平台 修复 自定义组件模式 vue 文件不包含 script 节点时运行报错的Bug [详情](https://ask.dcloud.net.cn/question/87323)
  + APP平台 修复 nvue 页面 picker 组件时间、日期类型使用默认值报错的Bug [详情](https://ask.dcloud.net.cn/question/87203)
  + APP平台 修复 nvue 页面 appear、disappear 事件不返回 direction 的Bug
  + App平台 修复 v3版本 vue 页面 map 组件 部分API无效及属性无法动态更新的Bug [详情](https://ask.dcloud.net.cn/question/86872)
  + App平台 修复 v3版本 uni.request 在 content-type 为 urlencoded 时传入非 Object 的 data 时参数处理不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/1218)
  + App平台 修复 v3版本 alwaysShowBeforeRender 为 false 时无法关闭启动界面的Bug [详情](https://ask.dcloud.net.cn/question/87038)
  + App平台 修复 v3版本 InnerAudioContext 对象的 seek、onTimeUpdate 方法无效的Bug [详情](https://ask.dcloud.net.cn/question/86891)
  + App-Android平台 修复 uni.request 在 responseType 为 arraybuffer 时，返回数据可能不准确的Bug [详情](https://ask.dcloud.net.cn/question/86405)
  + App-iOS平台 修复 tabBar 自定义高度时红点和角标显示位置不正确的Bug [详情](https://ask.dcloud.net.cn/question/87344)
  + H5平台 修复 启用摇树优化后 easycom 组件失效的Bug [详情](https://ask.dcloud.net.cn/question/87170)
  + H5平台 修复 启用摇树优化后 uni.previewImage 失效的Bug [#1168](https://github.com/dcloudio/uni-app/issues/1168)
  + H5平台 修复 启用摇树优化后 animation 属性失效的Bug [#1231](https://github.com/dcloudio/uni-app/issues/1231)
  + H5平台 修复 部分浏览器上 Object.assign 报错的Bug [#1116](https://github.com/dcloudio/uni-app/issues/1116)
  + H5平台 修复 部分浏览器上 uni.canvasToTempFilePath 报错的Bug [详情](https://ask.dcloud.net.cn/question/87032)
  + Hello uni-app 优化 canvas 组件示例使用renderjs实现
* 【5+App插件】
  + 新增 数据库执行SQL语句 plus.sqlite.executeSql 支持一次传入多条语句，解决Android平台一条SQL语句中不支持以分号分割多条命令的需求 [详情](https://ask.dcloud.net.cn/article/36810)
  + Android平台 修复 在定时器回调函数中调用 plus.screen.lockOrientation 可能会引起应用闪退的Bug
  + Android平台 修复 在部分手机上获取OAID可能触发错误回调，错误信息提示不支持的Bug [详情](https://ask.dcloud.net.cn/question/87441)
  + iOS平台 修复 调用 plus.gallery.pick 选择相册中的照片后, 连续快速点击完成按钮可能会引起应用崩溃的bug [详情](https://ask.dcloud.net.cn/question/87123)

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
* 【uni-app插件】
  + 【重要】新增 easycom 组件模式，简化组件使用。无需在页面里引入和注册组件，打包时会自动剔除没有使用的组件 [详情](https://uniapp.dcloud.io/collocation/pages?id=easycom)
  + 【重要】新增 uni-AD 广告联盟。整合App、小程序等多端广告，整合腾讯广点通、头条穿山甲、360广告联盟等众多SDK [详情](https://uniad.dcloud.net.cn/)
  + 【重要】App平台 新增 ad 组件，支持信息流、banner等应用内自定义广告 [详情](https://uniapp.dcloud.io/component/ad)
  + 【重要】App平台 优化 v3版本 运行时修改 vue 页面，手机端重启后可直达修改页面，无需手动配置 condition
  + 优化 非 scoped 样式支持 >>>、/deep/、::v-deep 语法[详情](https://github.com/dcloudio/uni-app/issues/1143)
  + App平台、H5平台、微信小程序 新增 uni.getSystemInfo 返回数据支持属性 safeAreaInsets
  + App平台 优化 调试控制台日志输出
  + App平台 优化 支持 CSS 变量 --window-top
  + App平台 优化 uni.getSystemInfo 获取的 windowHeight 不含 windowTop、windowBottom
  + App平台 修复 v3版本 行内样式设置背景图无效的Bug [详情](https://ask.dcloud.net.cn/question/86898)
  + App平台 修复 v3版本 app-plus 下配置 pullToRefresh 无效的Bug
  + App平台 修复 v3版本 subNvue mask 无法遮盖 tabBar 的Bug
  + App平台 修复 v3版本 vue map 组件动态更新中心点 latitude、longitude 无效的Bug [详情](https://ask.dcloud.net.cn/question/86963)
  + App-Android平台 修复 HBuilderX2.4.7引出的 nvue swiper 组件设置 autoplay 属性时最后一页会跳掉不显示的Bug [详情](https://ask.dcloud.net.cn/question/86856)
  + App-Android平台 修复 websocket 发送内容中包含特殊字符可能导致发送失败的Bug [详情](https://ask.dcloud.net.cn/question/86670)
  + App-Android平台 修复 nvue 页面中组件设置 hover-class 后，页面关闭可能出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/87016)
  + App-Android平台 修复 nvue video 组件下使用 cover-view 后，视频全屏后可能出现排版混乱的Bug [详情](https://ask.dcloud.net.cn/question/86879)
  + App-iOS平台 修复 nvue map 组件使用 controls 控件提交云端打包后可能会引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/86521)
  + App-iOS平台 修复 v3版本 部分情况下 rpx 计算错误的Bug
  + H5平台 修复 video 组件销毁报错的Bug [详情](https://ask.dcloud.net.cn/question/86959)
  + H5平台 修复 audio 组件无法显示的Bug [详情](https://ask.dcloud.net.cn/question/87045)
  + H5平台 修复 uni.chooseVideo 在微信内置浏览器无法触发回调的Bug [详情](https://ask.dcloud.net.cn/question/86968)
  + 新增 uni-ui 项目模板。该项目通过 easycom 引入所有 uni-ui 组件，可方便的开发项目
* 【5+App插件】
  + 【重要】新增 uni-AD 广告联盟。整合App、小程序等多端广告，整合腾讯广点通、头条穿山甲、360广告联盟等众多SDK [详情](https://uniad.dcloud.net.cn/)
  + 【重要】新增 plus.ad 广告模块，支持信息流、banner等应用内自定义广告 [文档](https://www.html5plus.org/doc/zh_cn/ad.html)
  + 【重要】Android平台 新增 腾讯X5内核。可解决rom自定义主题字体适配、低端机浏览器兼容性等问题 [详情](https://ask.dcloud.net.cn/article/36806)
  + Android平台 修复 Webview窗口创建并显示后立即关闭可能出现闪退的Bug [详情](https://ask.dcloud.net.cn/question/86918)
  + iOS平台 修复 在非刘海屏手机获取应用的安全区域 plus.navigator.getSafeAreaInsets 返回 deviceTop 数据可能不正确的Bug
  + Hello H5+ 新增 应用内广告示例 uni-AD 页面

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
* 【uni-app插件】
  + App平台 新建项目默认使用v3编译器，如不需要v3编译，请在【manifest-App常用其他配置】取消
  + App平台 新增 v3版本 支持配置 nvue 首页 fast 启动模式，即不等待逻辑层初始化完毕，直接启动渲染层 [详情](https://uniapp.dcloud.io/collocation/manifest?id=app-plus)
  + App平台 修复 v3版本 globalStyle 内配置页面动画不生效的Bug [详情](https://ask.dcloud.net.cn/question/85654)
  + App平台 修复 v3版本 无法读取非v3版本存储的 storage 数据的Bug
  + App平台 修复 picker 组件内容为空字符串时排版错位的Bug [详情](https://ask.dcloud.net.cn/question/85682)
  + App-iOS平台 修复 tabbar及标题栏上设置字体图标可能无法正常显示的Bug
  + App-iOS平台 修复 nvue map 组件不设置 marker 的 title 及 callout 时会显示空白标注的Bug [详情](https://ask.dcloud.net.cn/question/85874)
  + App-iOS平台 修复使用 uni.hideKeyboard 输入框无法失去焦点的Bug [详情](https://ask.dcloud.net.cn/question/85681)
  + H5平台 新增 video 组件支持 @loadedmetadata、@progress 事件
  + H5平台 优化 video 组件全屏展示效果 [详情](https://ask.dcloud.net.cn/question/85223)
  + H5平台 优化 canvas 组件内存占用
  + H5平台 修复 globalStyle 下 h5 节点配置不生效的Bug
  + H5平台 修复 editor 组件未配置图像控件时报错的Bug
  + H5平台 修复 在不支持 localStorage 的环境运行时框架报错的Bug [#1155](https://github.com/dcloudio/uni-app/issues/1155)
  + 支付宝小程序平台 新增 支持 onBackPress [详情](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%E9%A1%B5%E9%9D%A2%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
  + 支付宝小程序平台 修复 使用 createSelectorQuery().in(this) 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/1190)
  + 支付宝小程序平台 新增 支持配置 mini.project.json (manifest.json->mp-alipay) [#1164](https://github.com/dcloudio/uni-app/issues/1164)
  + uni-ui 新增vue doc，在HBuilderX中可以给予更完善的代码提示 [什么是vue doc](https://ask.dcloud.net.cn/article/35814)
* 【5+App插件】
  + Android平台 修复 HBuilderX2.4.9引出的在无网环境下应用启动可能崩溃的Bug
  + Android平台 修复 真机运行默认将日志保存到SD卡中，长时间运行可能出现日志文件过大的Bug
  + iOS平台 修复 录音对象（AudioRecorder）录制mp3格式音频设置 channels 参数值为 mono 不生效的Bug [详情](https://ask.dcloud.net.cn/question/85493)
  + iOS平台 修复 录音对象（AudioRecorder）设置音频播放模式 setSessionCategory 可能不生效的Bug
  + iOS平台 修复 iOS13调用 plus.screen.setBrightness 方法可能会导致页面失去响应的Bug

## 2.4.9.20191223-alpha
* 【uni-app插件】
  + App平台 修复 v3版本 uCharts 某些图表类型无法显示的Bug
  + App-Android平台 修复 HBuilderX2.4.8引出的 nvue list 组件的下拉刷新功能无法使用的Bug
  + App-Android平台 修复 tabBar 动态设置某一项的内容会导致选中状态失效的Bug [详情](https://ask.dcloud.net.cn/question/80941)

## 2.4.8.20191220-alpha
* 新增 当关闭编辑器时，记录文件的折叠状态
* 修复 某些情况下，CSS color渲染错误的Bug
* 优化 es6部分语法 代码提示、转到定义
* 修复 js、html文件，关联JavaScript(ES6+)、HTML（es6+）后，右键菜单【验证本文档语法】失效的Bug
* 修复 在独立单行内容上，按下折叠快捷键，行尾出现折叠指示器的Bug
* 【uni-app插件】
  + App平台 修复 v-for 中监听事件某些情况参数不正确的Bug
  + App平台 修复 uni.login 微信登录提示“没有这些scope权限”的Bug [详情](https://ask.dcloud.net.cn/question/85417)
  + App-Android平台 修复 nvue map 组件中标注点设置 translateMarker 旋转角度后，点气泡也会随之旋转的Bug [详情](https://ask.dcloud.net.cn/question/84676)
  + App-Android平台 修复 nvue 页面中使用 animation 动画，关闭页面可能会闪退的Bug [详情](https://ask.dcloud.net.cn/question/84902)
  + App-Android平台 优化 应用退出后不清掉后台，反复热启动导致底层通信timeout引起的白屏问题
  + App-Android平台 修复 nvue scroll-view 组件中嵌套 list 组件，list高度大于scroll-view剩余高度时高度可能不正常的Bug [详情](https://ask.dcloud.net.cn/question/85496)
  + App-iOS平台 新增 nvue 普通 view 组件支持设置高斯模糊（毛玻璃）效果 [详情](https://ask.dcloud.net.cn/article/36617#view)
  + H5平台 优化 发行时 index.css 文件名包含 hash 以便更好的控制缓存 [详情](https://ask.dcloud.net.cn/question/84990)
  + H5平台 修复 tabBar 文字较多时角标（红点）错位的Bug [详情](https://ask.dcloud.net.cn/question/83293)
  + H5平台 修复 textarea 组件未设置 line-height 时 linechange 事件 lineCount 值错误的Bug [#1123](https://github.com/dcloudio/uni-app/issues/1123)
  + H5平台 修复 swiper 组件动画过程中销毁组件会报错的Bug [#1123](https://github.com/dcloudio/uni-app/issues/1127)
  + H5平台 修复 image 组件 src 包含英文括号时无法正常的Bug [#1090](https://github.com/dcloudio/uni-app/pull/1090)
  + 支付宝小程序平台 修复 使用 createIntersectionObserver 报错的Bug
* 【5+App插件】
  + Android平台 更新 高德地图SDK（7.1.0）
  + iOS平台 修复 应用切换到后台，从其它应用传参数激活到前台时 plus.runtime.arguments 可能不更新的Bug 

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
* 【uni-app插件】
  + 【重要】H5平台、QQ小程序 支持运行微信小程序组件 [详情](https://uniapp.dcloud.io/h5/pages/template/vant-button/vant-button)
  + 【重要】App平台 新增 pages.json 配置屏幕方向。横屏应用请在这里配置，app.vue里生效较晚 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + App平台 优化 选择位置 支持在搜索结果中选择
  + App平台 优化 picker 组件按钮文字增加多语言支持
  + App平台 优化 v3版本 支持微信小程序组件
  + App平台 修复 v3版本 uni.getBackgroundAudioManager 不触发 onTimeUpdate 回调的Bug
  + App平台 修复 v3版本 onTabItemTap 生命周期不触发的Bug
  + App平台 修复 image 组件初始值为空字符串时会执行一次@error事件的Bug
  + App平台 修复 input 组件失焦时会触发一次@input的Bug [详情](https://ask.dcloud.net.cn/question/84456)
  + App平台 修复 webview 组件在非沉浸式状态栏下高度不正确的Bug
  + App平台 修复 chooseImage 传入字符串格式 sizeType 导致报错的Bug
  + App平台 修复 纯 nvue 环境 uni.request 数据格式错误的Bug [#1100](https://github.com/dcloudio/uni-app/issues/1100)
  + App平台 修复 nvue input 组件动态设置 password 属性不生效的Bug
  + App-Android平台 新增 nvue 通用属性 elevation 设置组件的层级阴影，解决 box-shadow 样式在设置圆角或动画时显示不正常的问题 [详情](https://uniapp.dcloud.io/use-weex?id=android平台阴影box-shadow问题)
  + App-Android平台 修复 部分使用64位CPU的手机上可能出现白屏的Bug [详情](https://ask.dcloud.net.cn/question/83611)
  + App-Android平台 修复 nvue image 组件在部分手机上设置 fade-show 属性值为false可能仍然会闪烁的Bug 
  + App-Android平台 修复 nvue swipe 组件设置 circular 属性值为true时从首页直接跳到最后一页可能出现页面无法正常渲染的Bug
  + App-Android平台 修复 tabbar 的 midButton 不设置图片时显示默认图片的Bug [详情](https://ask.dcloud.net.cn/question/84908)
  + 【重要】App-iOS平台 新增 uni.login 支持Apple登录 [详情](https://ask.dcloud.net.cn/article/36651)
  + App-iOS平台 修复 nvue input 组件设置 maxlength 属性后，@input事件返回value值与实际显示值不一致的Bug [详情](https://github.com/dcloudio/uni-app/issues/1073)
  + H5平台 新增 支持 editor 组件 [详情](https://uniapp.dcloud.io/h5/pages/component/editor/editor)
  + H5平台 新增 支持使用 nodesRef.context 获取 VideoContext、CanvasContext 和 MapContext 对象
  + H5平台 修复 css 变量 --window-bottom 在全面屏设备不准确的Bug [详情](https://ask.dcloud.net.cn/question/83069)
  + H5平台 修复 canvasContext.measureText 报错的Bug [详情](https://ask.dcloud.net.cn/question/84858)
  + H5平台 修复 uni.createAnimation 动画不正确的Bug [详情](https://ask.dcloud.net.cn/question/84862)
  + H5平台 修复 webview 页面调用 uni API 无效的Bug [详情](https://ask.dcloud.net.cn/question/84977)
  + hello uni-app 新增 canvas 组件示例(App端使用wxs实现高性能动画)
* 【5+App插件】
  + Android平台 修复 Webview窗口关闭后可能出现内存占用不释放的Bug [详情](https://ask.dcloud.net.cn/question/83587)
  + 【重要】iOS平台 新增 支持苹果授权登录（Sign in with Apple） [教程](https://ask.dcloud.net.cn/article/36651)
  + iOS平台 修复 音频播放对象（AudioPlayer）播放网络音频时，缓存完成恢复播放时没有触发 onPlay 事件的Bug
  + iOS平台 修复 Webview窗口的titleUpdate事件可能不触发导致无法修改页面标题的Bug [详情](https://ask.dcloud.net.cn/question/84115)
  + iOS平台 修复 Webview窗口的标题栏（titleNView）设置titleSize属性不生效的Bug
  + iOS平台 修复 系统日期选择框（plus.nativeUI.pickDate）、时间选择框（plus.nativeUI.pickTime）在横屏时显示不正常的Bug

## 2.4.4.20191129-alpha
* 【uni-app插件】
  + App平台 优化 选择位置，全新UI、新增参数 latitude、longitude，一键到达当前位置
  + App平台 修复 真机运行指定页面为首页时白屏的Bug
  + App平台 修复 v3版本 webview 组件返回不正确的Bug
  + App平台 修复 v3版本 uni.request header 属性 Content-Type=application/x-www-form-urlencoded 时请求异常的Bug
  + App平台 修复 v3版本 隐藏原生导航栏的 tabBar 页面状态栏颜色不正确的Bug
  + App平台 修复 weex 编译模式 uni.scanCode 打开扫码页面空白的Bug [详情](https://ask.dcloud.net.cn/question/83820)
  + App平台 修复 nvue 页面导航栏 titleNView 的 type 属性设置为 transparent 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/66907)
  + App-Android平台 修复 首页为 nvue 时反复启动应用后可能出现假死状态的Bug [详情](https://ask.dcloud.net.cn/question/83611)
  + App-iOS平台 新增 tabbar 支持设置高斯模糊（毛玻璃）效果 [详情](https://ask.dcloud.net.cn/article/36617)
  + App-iOS平台 修复 网络请求 uni.request 设置请求的 header 中存在非字符串值可能会引起崩溃的Bug
  + H5平台 新增 uni.chooseImage 、uni.chooseVideo 支持返回文件名
  + H5平台 新增 支持使用 uni.loadFontFace 加载字体
* 【5+App插件】
  + iOS平台 修复 苹果应用内支付IAP恢复购买接口（restoreComplateRequest）有可能不会返回恢复购买凭证的Bug
  + iOS平台 修复 预览图片（previewImage）可能无法正常显示部分网络地址图片的Bug [详情](https://ask.dcloud.net.cn/question/83542)

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
* 【uni-app插件】
  + 【重要】App端重大架构升级 “v3编译器”，更快的启动速度、更好的性能、更多vue语法支持、可webview调试视图层。可通过设置`manifest.json`文件中`app-plus`节点下的`compilerVersion:3 `启用新架构 [详情](https://ask.dcloud.net.cn/article/36599)
  + 新增 支持在页面文件调用 `App.vue` 中定义的函数方法 [#665](https://github.com/dcloudio/uni-app/issues/665)
  + 修复 发行模式下使用 scss ，部分情况条件编译不生效的 Bug [1013](https://github.com/dcloudio/uni-app/issues/1013)
  + 优化 `babel.config.js` 文件里的 `@vue/babel-preset-app` 支持配置 `modules:false` ，让打包出来的代码体积更小，运行更快 [#929](https://github.com/dcloudio/uni-app/issues/929)
  + App平台 新增 uni-app编译模式的nvue页面 控制是否自动包裹 scroll 组件（通过 pages.json 里 style 的 `disableScroll` 属性配置页面) [详见](https://uniapp.dcloud.io/collocation/pages?id=style)
  + App平台 新增 uni-app编译模式的nvue页面 webview 组件加载的HTML支持调用部分uni API [详情](https://ask.dcloud.net.cn/question/83399)
  + App平台 修复 nvue 页面中 picker 组件多次打开后无法关闭的Bug [详情](https://ask.dcloud.net.cn/question/83417)
  + App-Android平台 优化 应用退出后不清掉后台，再热启动可能出现白屏的问题 [详情](https://ask.dcloud.net.cn/question/77397)
  + App-Android平台 修复 应用在 tabbar 页面跳转到其它页面在Android10上可能出现图片闪烁的Bug
  + App-Android平台 修复 nvue scroll-view 组件无法触发 touchstart/touchend 事件及动态设置 scroll-left 属性可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/83256)
  + App-Android平台 修复 nvue input 组件设置 autofocus 属性为 true 在subnvue页面可能出现软键盘弹出后自动隐藏的Bug [详情](https://ask.dcloud.net.cn/question/83014)
  + App-Android平台 修复 nvue map 组件下的view子节点不显示的Bug [详情](https://ask.dcloud.net.cn/question/83719)
  + App-Android平台 修复 nvue live-pusher 组件推流成功后拉流可能显示绿屏或卡在首帧的Bug [详情](https://ask.dcloud.net.cn/question/83198)
  + App-iOS平台 修复 nvue view 组件设置 border 属性可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/83206)
  + App-iOS平台 修复 iOS 13 系统中 textarea 输入的内容，比 placeholder 偏左一点的Bug [详情](https://ask.dcloud.net.cn/question/83373)
  + App-iOS平台 修复 faceID 识别成功时不能正确触发成功回调的Bug [详情](https://ask.dcloud.net.cn/question/83068)
  + H5平台 修复 webview 组件 加载的HTML中调用 uni.getEnv 错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/1011)
  + H5平台 修复 h5 平台组件的自定义事件无法接收多个参数的Bug [#1016](https://github.com/dcloudio/uni-app/issues/1016)
  + H5平台 修复 在企业微信中 uni.chooseImage 无法使用的Bug [详情](https://github.com/dcloudio/uni-app/issues/82872)
  + 小程序平台 修复 不能直接在模版内使用 $emit 的 Bug [详情](https://ask.dcloud.net.cn/question/82865)
  + 微信小程序平台 修复在发行模式使用 lodash@4.17.15 ，运行报错的 Bug[#994](https://github.com/dcloudio/uni-app/issues/994)
  + 支付宝小程序平台 修复 for 循环中 ref 生成的多个组件数组长度不准确的Bug [#930](https://github.com/dcloudio/uni-app/issues/930)
  + 字节跳动小程序平台 修复 当 rpx 后跟着 !important 时，发行模式下 rpx 未被编译成px的Bug [#1014](https://github.com/dcloudio/uni-app/issues/1014)
  + 百度小程序平台 修复 页面 onShow 只能触发一次的Bug
  + uni-ui 新增 uni-transition 过渡动画组件
  + uni-ui 新增 uni-fab 悬浮按钮支持nvue
  + uni-ui 修复 uni-calendar 动态获取 selected 属性就会导致切换不了月份的Bug
  + uni-ui 修复 uni-calendar H5 端选择月份按钮不能点击的Bug
  + uni-ui 优化 uni-calendar 切换月份必选中每月1号的Bug
  + uni-ui 优化 uni-calendar 视图样式,优化逻辑代码实现,使性能更好
  + uni-ui 优化 uni-calendar 切换月份返回事件
  + uni-ui 修复 uni-grid 正方形宫格显示不正确的Bug
  + uni-ui 修复 uni-grid 动态数据不渲染的Bug
  + uni-ui 优化 uni-grid 用户可自定义宫格内容，如添加角标、红点、修改背景色等
  + uni-ui 优化 uni-load-more 支持调整图标大小
  + uni-ui 修复 uni-popup 点击蒙版关闭后，再次打开弹框失败的Bug
  + uni-ui 修复 uni-popup type 属性为静态值时导致弹出层错误的Bug
  + uni-ui 优化 uni-popup 弹出层动画，使动画更流畅
  + uni-ui 修复 uni-swipe-action autoClose 属性开启状态下滑动不正常的Bug
  + uni-ui 优化 uni-swipe-action 组件间联动效果更流畅
* 【5+App插件】
  + Android平台 优化 启动时申请手机存储权限，若用户拒绝则会弹出说明文字。满足部分应用商店要求的权限申请需申明的要求 [详情](https://ask.dcloud.net.cn/article/36549#externalstorage)
  + Android平台 修复 Webview窗口设置drag滑屏操作手势，快速滑动操作可能引起白屏的Bug [详情](https://ask.dcloud.net.cn/question/82668)
  + Android平台 修复 视频播放控件（VideoPlayer）可能无法播放某些本地视频文件的Bug
  + Andrpid平台 修复 数据库执行SQL语句（plus.sqlite.executeSql）传入错误sql语句时，可能在控制台输出错误日志且不触发错误回调的Bug [详情](https://ask.dcloud.net.cn/question/83203)
  + iOS平台 新增 Webview窗口原生标题栏样式属性 blurEffect，支持模糊毛玻璃）效果 [详情](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + iOS平台 补齐 直播推流（LivePusher）控件支持设置最小码率（min-bitrate）和最大码率（max-bitrate）
  + iOS平台 修复 Webview窗口原生标题栏的搜索框（searchInput）获取焦点会导致placeholder文字移位的Bug [详情](https://ask.dcloud.net.cn/question/83027)
  + iOS平台 修复 图片预览（plus.nativeUI.previewImage）可能出现长图片不能滚动的Bug [详情](https://ask.dcloud.net.cn/question/82455)
  + iOS平台 修复 使用UniPush或个推推送在后台统计数据中没有展示数和点击数的Bug [详情](https://ask.dcloud.net.cn/question/83292)
  + iOS平台 修复 用户拒绝访问相机后，调用摄像头拍照或录像时不会触发错误回调的Bug
  + iOS平台 修复 配置使用高德或百度地图后，定位默认没有使用gcj02坐标的Bug
  + iOS平台 修复 系统日期（plus.nativeUI.pickDate）、时间（plus.nativeUI.pickTime）选择框与系统提示框遮罩颜色不一致的Bug
* 【mui】
  + iOS平台 wkwebview下，plusready未触发时调用mui.ajax，在控制台输出正确的告警提醒

## 2.4.2.20191115-alpha
* 【uni-app插件】
  + APP平台 修复 当`manifest.json`中`nvueCompiler`配置项不是`weex`时，picker 组件文字超出无法隐藏的Bug [详情](https://ask.dcloud.net.cn/question/83048)
  + APP平台 修复 当`manifest.json`中`nvueCompiler`配置项不是`weex`时，uni.scanCode 接口无法回调的Bug [详情](https://ask.dcloud.net.cn/question/82984)
  + APP平台 修复 当`manifest.json`中`nvueCompiler`配置项不是`weex`时，uni.chooseLocation 接口无法回调的Bug [详情](https://ask.dcloud.net.cn/question/82988)
  + App-Android平台 修复 nvue barcode 组件设置 autostart 为true时在部分设备可能出现黑屏的Bug
  + App-iOS平台 修复 纯nvue项目 侧滑关闭后无法触发上个页面生命周期 onShow 的Bug [详情](https://ask.dcloud.net.cn/question/81830)
  + H5平台 修复 uni.getImageInfo 回调信息中 path 错误的Bug [详情](https://ask.dcloud.net.cn/question/82793)
  + H5平台 修复 路由后退时弹出的 picker 无法自动关闭的Bug [详情](https://ask.dcloud.net.cn/question/82684)
  + H5平台 修复 在夸克浏览器（iOS）onReachBottom 生命周期只触发一次的Bug [详情](https://ask.dcloud.net.cn/question/67636)
  + H5平台 修复 在手机QQ浏览器 onReachBottom 无法触发的Bug [详情](https://ask.dcloud.net.cn/question/82795)
  + H5平台 修复 在网络断开的情况下 SocketTask.send 回调不正确的Bug [#744](https://github.com/dcloudio/uni-app/issues/744)
  + 微信小程序 调整微信基础库版本为2.9.2，解决微信2.9.3基础库input事件不触发的Bug [详情](https://developers.weixin.qq.com/community/develop/doc/000a067cd0c6102d0d79558e65bc00?highLine=bindinput)
  + 钉钉小程序 修复 多层组件嵌套的情况下，子组件生命周期不触发的Bug
  + 百度小程序 修复 onShow在onLoad之前触发的Bug [详情](https://ask.dcloud.net.cn/question/82822)
* 【5+App插件】
  + iOS平台 修复 创建本地消息（plus.push.createMessage）在iOS10及以上系统只显示最后一条的Bug [详情](https://ask.dcloud.net.cn/question/82560)

## 2.4.1.20191114-alpha
* 新增 鼠标悬停在迷你地图的非当前页区域时，小窗预览指示文档
* 优化 更新逻辑，非app用户不会收到app插件更新通知
* 【uni-app插件】
  + App-iOS平台 修复 picker 组件 range 数据量较大时无法打开的Bug

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
* 【uni-app插件】
  + 【重要】nvue文件编译模式默认从 weex 模式修改为 uni-app 模式。推荐使用多端可用、更成熟、组件更丰富的 uni-app 模式。如仍需使用 weex 模式，需在manifest中手动配置
  + 【重要】uni ui 新版正式发布，同时兼容vue和nvue。欢迎插件市场作者也升级自己的组件，同时兼容nvue [详情](https://uniapp.dcloud.io/component/README?id=uniui)
  + 【重要】自定义组件模式新增 crypto.getRandomValues 方法，获取符合密码学要求的安全随机值
  + H5平台 修复 wxs getDataset() 函数获取不到参数的Bug。uni ui 的 swiperaction 组件的问题也因此得到修复 [详情](https://ask.dcloud.net.cn/question/82718)
  + APP平台 新增 nvue picker 组件支持多列
  + APP平台 优化 picker、扫码、选择位置、打开位置API的界面通过原生实现，提升性能体验（nvue为weex编译模式时未优化）
  + APP平台 修复 swiper 设置为autoplay时滑动导致速度加快的BUG [详情](https://ask.dcloud.net.cn/question/82431)
  + App-iOS平台 修复 nvue页面在iOS13及以上系统默认字体不对的Bug
  + App-iOS平台 修复 nvue list 组件 scroll 事件返回的 isDragging 属性不正确的Bug [详情](https://github.com/dcloudio/uni-app/issues/932)
  + App-iOS平台 修复 nvue swiper 组件动态修改 current 属性触发 transition 事件返回的参数不准确的Bug
  + 百度小程序平台 修复 新版百度小程序生命周期下组件内mounted不触发的BUG
  + uni ui 优化 uni-swipe-action 组件在nvue中使用 BindingX ，使跟手动画更流畅
  + uni ui 优化 uni-list 组件在nvue中使用原生list组件，提升性能
  + 新闻模板 优化 顶部tab栏目增加下滑横线（支持app-nvue、app-vue、h5、微信小程序、qq小程序，其他端暂无下滑横线）
* 【5+App插件】
  + Android平台 新增 获取移动智能设备标识公共服务平台提供的匿名设备标识符[OAID](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getOAID)、开发者匿名设备标识符VAID、及应用匿名设备标识符AAID，可用于解决Android10无法获取设备标识（如IMEI、IMSI、Wi-Fi MAC地址等）的问题
  + Android平台 修复 创建视频播放控件（VideoPlayer）时，没有开始播放视频也会停止后台背景音频的Bug [详情](https://ask.dcloud.net.cn/question/82034)
  + Android平台 优化 视频播放的操作条的拖动误触和图标美化问题
  + iOS平台 修复 平台绝对路径转换成本地URL路径（plus.io.convertAbsoluteFileSystem）可能返回null的Bug [详情](https://ask.dcloud.net.cn/question/51954)

## 2.3.9.20191104-alpha
* 修复 Mac git/svn点击提交时，导致编辑器崩溃闪退的Bug
* 【uni-app插件】
  + App平台 修复 uni.requestPayment API 回调结果中没有支付收据的Bug [详情](https://github.com/dcloudio/uni-app/issues/621#issuecomment-518001954)
  + App-Android平台 修复 tabBar 页面真机运行可能无法同步更新的Bug

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
* 【uni-app插件】
  + 【重要】 公告：非自定义组件模式停止支持 [详情](https://ask.dcloud.net.cn/article/36385)
  + App平台 新增 生物认证API，包括指纹和 Apple Face ID [详情](https://uniapp.dcloud.io/api/system/authentication)
  + App-Android平台 修复 64位专用包 启动时概率出现白屏的Bug [详情](https://ask.dcloud.net.cn/question/79556)
  + App-Android平台 优化 weex原生渲染引擎的圆角和边框绘制效率
  + App-Android平台 修复 input 组件在部分场景获取焦点可能引起软键盘闪现后自动关闭的Bug [详情](https://ask.dcloud.net.cn/question/81642)
  + App-Android平台 修复 nvue input 组件密码框焦点切换时可能出现自动关闭软键盘的Bug [详情](https://ask.dcloud.net.cn/question/81779)
  + App-Android平台 修复 nvue map 组件在真机运行同步更新时可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/81364)
  + App-Android平台 修复 nvue video 组件在应用首页中可能无法正常播放视频的Bug [详情](https://ask.dcloud.net.cn/question/81877)
  + App-Android平台 修复 nvue video 组件前后台切换不触发 onShow/onHide 事件的Bug [详情](https://ask.dcloud.net.cn/question/81812)
  + App-Android平台 修复 websocket 传输数据类型为 ArrayBuffer 某些情况下报错的Bug [详情](https://ask.dcloud.net.cn/question/81687)
  + App-iOS平台 修复 uni.hideKeyboard 不能收起软键盘的Bug [#903](https://github.com/dcloudio/uni-app/issues/903)
  + App-iOS平台 修复 picker 组件可能被软键盘遮挡的Bug [#888](https://github.com/dcloudio/uni-app/issues/888)
  + App-iOS平台 修复 input 组件输入中文时失焦导致文字消失的Bug [#888](https://github.com/dcloudio/uni-app/issues/888)
  + App-iOS平台 修复 nvue text 组件设置 line-height 属性可能引起显示不正确的Bug
  + App-iOS平台 修复 nvue list 组件滚动时 scrollStart/scrollEnd 事件返回参数值为负数的Bug
  + App-iOS平台 修复 nvue live-pusher 组件设置 whiteness 属性为false不生效的Bug
  + App-iOS平台 修复 nvue barcode 组件动态修改属性不生效的Bug
  + H5平台 修复 picker 组件初始值不是合法日期/时间的情况下返回值不正确的Bug
  + 百度小程序 修复 页面 onShow 触发两次的Bug [详情](https://ask.dcloud.net.cn/question/81243)
  + 百度小程序 修复 3.105.17 以上的调试库页面 onReady 事件比 onLoad 事件执行的要早的Bug [详情](https://ask.dcloud.net.cn/question/81504)
  + uni ui 修复 uniNoticeBar跑马灯组件，在Android平台webview版本高于66时，且在隐藏的tabbar的vue页面中使用，造成App卡顿的Bug [详情](https://ask.dcloud.net.cn/article/36537)
  + hello uni-app 新增 生物认证API示例
* 【5+App插件】
  + Android平台 新增 在manifest中配置 App 启动时申请设备IMEI等信息的权限策略，默认调整为应用第一次启动时申请 [详情](https://ask.dcloud.net.cn/article/94#permissionPhoneState)
  + Android平台 新增 Webview窗口支持暂停（[pause](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.pause)）和恢复（[resume](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewObject.resume)）操作，解决页面中如果存在持续渲染隐藏后可能引起卡顿的Bug [详情](https://ask.dcloud.net.cn/article/36537)
  + Android平台 新增 文件上传支持配置分块上传参数[chunkSize](https://www.html5plus.org/doc/zh_cn/uploader.html#plus.uploader.UploadOptions)，解决不能真实返回上传进度的Bug [详情](https://ask.dcloud.net.cn/question/79930)
  + Android平台 修复 Webview子窗口先隐藏（hide）再添加（append）到父窗口依然显示的Bug [详情](https://ask.dcloud.net.cn/question/81427)
  + Android平台 修复 二维码（Barcode）扫描在设备横屏时显示异常的Bug [详情](https://ask.dcloud.net.cn/question/79997)
  + Android平台 修复 在部分设备上插拔usb硬件设备可能引起应用重启的Bug [详情](https://ask.dcloud.net.cn/question/81362)
  + iOS平台 修复 Webview窗口使用WKWebview内核时截屏绘制（draw）设置 clip 参数无效的Bug [详情](https://ask.dcloud.net.cn/question/45969)
  + iOS平台 修复 Webview窗口全部关闭（close）时可能引起应用崩溃的Bug
  + iOS平台 修复 Webview窗口设置自定义标题栏按钮点击时可能引起应用崩溃的Bug
  + iOS平台 修复 视频播放（VideoPlayer）控件无法自动识别视频方向的Bug [详情](https://ask.dcloud.net.cn/question/79320)
  + iOS平台 修复 调用摄像头拍照（captureImage）时设置resolution参数为high、low、medium时可能引起图片显示方向不正确的Bug [详情](https://ask.dcloud.net.cn/question/80814)
  + iOS平台 修复 系统相册选择图片（plus.gallery.pick）可能返回不是选中图片的Bug [详情](https://ask.dcloud.net.cn/question/81055)
  + iOS平台 修复 文件下载暂停后再继续文件名后面会自动添加数字的Bug [详情](https://ask.dcloud.net.cn/question/66523)
  + iOS平台 修复 设置应用屏幕常亮（plus.device.setWakelock）在iOS13.1.3系统可能引起崩溃的Bug
  + iOS平台 修复 Native.JS获取当前Webview窗口的原生实例对象（plus.ios.currentWebview）可能返回为空的Bug [详情](https://ask.dcloud.net.cn/question/81037)

## 2.3.7.20191024-alpha
* 修复 Vuex mapState mapActions mapMutations 映射的函数属性无法转到定义和无法提示的Bug
* 修复 html 连续编写有默认值的属性时(例如 autocomplete accesskey等)， 覆盖位置不对的Bug
* 优化 uni-app globaldata代码提示及转到定义
* 新增 App打包 对manifest中的iOS通用链接进行前置校验
* 【uni-app插件】
  + 修复 在 App.vue 的 onLaunch 中，不支持 this.globalData 的 Bug
  + H5平台 修复 开启 treeShaking 后 picker 组件无法使用的Bug [#841](https://github.com/dcloudio/uni-app/issues/841)
  + App-Android平台 修复 input组件使用特定输入法（如搜狗）时，无法正常切换键盘模式的Bug [详情](https://ask.dcloud.net.cn/question/80172)
  + App-iOS平台 修复 nvue map组件的标记点（markers）的 iconPath 属性值设置为相对路径时可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/79444)
  + hello uni-app 新增 websocket示例
  + hello uni-app 新增 组件通讯示例
* 【5+App插件】
  + Android平台 修复 微信分享内容包含网络图片时，第二次操作分享会失败的Bug [详情](https://ask.dcloud.net.cn/question/81234)
  + iOS平台 修复 图片预览（plus.nativeUI.previewImage）3张图片且current属性设置为2时显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/79564)
  + 5+引擎开源，开发者可自主编译自己的引擎，[Android地址](https://github.com/dcloudio/H5P.Android)、[iOS引擎地址](https://github.com/dcloudio/H5P.iOS)

## 2.3.6.20191021-alpha
* 【uni-app插件】
  + App平台 修复 nvue bindingx API bind 参数导致异常的Bug [详情](https://ask.dcloud.net.cn/question/80735)
  + App平台 修复 tabBar 设置 borderStyle 为 black 不生效的Bug [详情](https://ask.dcloud.net.cn/question/80921)
  + App平台 修复 tabBar 使用默认高度时 uni.getSystemInfo 获取的 windowHeight 不正确的Bug [详情](https://ask.dcloud.net.cn/question/80888)
  + App-Android平台 修复 tabBar 调用 uni.setTabBarItem 动态设置tabBar某一项内容导致选中状态失效的Bug [详情](https://ask.dcloud.net.cn/question/80941)
  + App-iOS平台 修复 tabBar 页面因内存不足而白屏后无法自动恢复的Bug [详情](https://ask.dcloud.net.cn/question/80927)
  + App-iOS平台 修复 tabBar 设置 icon 图标可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/80946)
  + App-iOS平台 修复 nvue list组件 scroll 事件返回的参数缺少 isDragging 属性的Bug [详情](https://ask.dcloud.net.cn/question/80928)
* 【5+App插件】
  + Android平台 修复 HBuilderX2.3.4引出的上传文件 uploadFile 可能失败的Bug [详情](https://ask.dcloud.net.cn/question/80815)

## 2.3.5.20191018-alpha
* 【5+App插件】
  + 【重要】Android平台 修复 MIUI11中toast背景为白色，导致前景色无法看清的Bug [详情](https://ask.dcloud.net.cn/question/80328)
  + iOS平台 修复 系统相册选择图片文件时如果相册中没有图片返回时loading界面不消失的Bug

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
* 【uni-app插件】
  + 【重要】App平台 重构 tabBar，原生支持 midButton（中间凸起），支持高度调节（App、H5默认高度统一为50px），降低内存占用，避免iOS白屏。注意不再支持通过 plus API 操作 tabBar [详情](https://uniapp.dcloud.io/collocation/pages?id=tabbar)
  + App平台 新增 nvue 云打包支持原生混淆源码 [详情](https://ask.dcloud.net.cn/article/36437)
  + App平台 新增 nvue （uni-app编译模式）内置 bindingx 模块，可以免安装node模块直接使用
  + App平台 新增 nvue API uni.createSelectorQuery(仅支持id选择器)
  + App平台 修复 nvue swiper组件纵向滚动时，transition 事件属性值不正确的Bug [详情](https://ask.dcloud.net.cn/question/79694)
  + App平台 修复 nvue swiper组件设置 current 后滑动不触发 change 事件的Bug [详情](https://ask.dcloud.net.cn/question/79469)
  + App平台 修复 nvue 部分机型样式 width 设置为 750rpx 不会占满整个屏幕的Bug [详情](https://ask.dcloud.net.cn/question/79565)
  + App平台 修复 nvue barcode组件扫码成功触发 marked 事件返回参数条码数据为空的Bug [详情](https://ask.dcloud.net.cn/question/79475)
  + App平台 修复 uni.canvasGetImageData 和 uni.canvasPutImageData 位置大小不正确的Bug [详情](https://ask.dcloud.net.cn/question/79273)
  + App平台 修复 使用 plus.webview API 手工创建webview时，默认注入uni-app组件样式，导致干扰html页面样式的Bug
  + App-Android平台 修复 WebSocket 在Android4.4手机上使用 ws 协议时无法连接服务器的Bug [详情](https://ask.dcloud.net.cn/question/79534)
  + App-Android平台 修复 WebSocket 传输二进制数据时 uni.onSocketMessage 返回为字符串数据的Bug
  + App-Android平台 修复 nvue video组件的 show-progress 属性值设置为 false 不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/788)
  + App-Android平台 修复 nvue video组件在 swiper 中实现仿抖音效果时滑动不灵敏的Bug
  + App-Android平台 修复 nvue live-pusher组件动态设置 beauty whiteness 属性值无效的Bug [详情](https://ask.dcloud.net.cn/question/80285)
  + App-Android平台 修复 nvue live-pusher组件没有开始推流时无法切换摄像头的Bug
  + App-Android平台 修复 nvue image组件的 src 属性值为空时 placeholder 无法正常显示的Bug
  + App-iOS平台 新增 nvue live-pusher组件支持 orientation 属性设置画面方向 
  + App-iOS平台 修复 nvue map组件的点击控件事件 @controltap 不响应的Bug [详情](https://ask.dcloud.net.cn/question/80170)
  + 百度小程序 修复 开发时修改保存页面，百度模拟器页面无法正常刷新的Bug
  + uni统计 修复 关闭统计的情况下，统计系统事件（如：登录、分享）还能上报数据的 Bug
  + uni ui 实现nvue化，首批支持的组件已更新到hello uni-app新版示例中
* 【5+App插件】
  + 【重要】Android平台 更新 个推/UniPush SDK（4.3.7.0），解决无法上架谷歌应用市场（GooglePlay）的问题 [详情](https://ask.dcloud.net.cn/article/36479)
  + Android平台 更新 微信登录、分享、支付SDK（5.4.3），适配Android10
  + Android平台 更新 QQ登录、分享SDK（3.3.5），新浪微博登录、分享SDK（4.4.1）
  + Android平台 更新 高德地图SDK（6.8.0），解决在部分手机上可能出现黑屏的Bug
  + Android平台 修复 数据库查询SQL语句（plus.sqlite.selectSql）返回结果中的浮点数据类型精度丢失的Bug [详情](https://ask.dcloud.net.cn/question/79541)
  + Android平台 修复 在双卡手机上获取国际移动用户识别码（IMSI）只能返回一个值的Bug [详情](https://ask.dcloud.net.cn/question/79863)
  + Android平台 修复 Android10设备上获取设备唯一标识（UUID）为空的Bug [详情](https://ask.dcloud.net.cn/question/80200)
  + Android平台 修复 上传任务（plus.uploader.createUpload）提交的请求头中包含多个Cookie的Bug [详情](https://ask.dcloud.net.cn/question/74619)
  + Android平台 修复 蓝牙断开设备连接（plus.bluetooth.closeBLEConnection）可能不触发onBLEConnectionStateChange事件的Bug
  + Android平台 修复 微信分享图片无法加载带重定向的url链接的Bug
  + Android平台 修复 Webview窗口动画在特定情况下可能会将pop-in/out动画自动变为slide-in/out-right的Bug
  + iOS平台 更新 微信登录、分享、支付SDK（1.8.6.1），适配iOS13，需要配置通用链接（Universal Links）[详情](https://ask.dcloud.net.cn/article/36445)
  + iOS平台 更新 QQ登录、分享SDK（3.3.6），新浪微博登录、分享SDK（3.2.5）
  + iOS平台 修复 iOS13上配置后台播放音乐可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/80253)
  + iOS平台 修复 图片压缩（plus.zip.compressImage）设置缩放图片的宽度（width）和高度（height）无效的Bug [详情](https://ask.dcloud.net.cn/question/79993)
  + iOS平台 修复 iPhone11上查询设备是否为刘海屏（plus.navigator.hasNotchInScreen）返回值不正确的Bug [详情](https://ask.dcloud.net.cn/question/80291)
  + iOS平台 修复 视频播放（VideoPlayer）控件设置 show-progress 属性不生效的Bug
  + iOS平台 修复 视频播放（VideoPlayer）控件设置 autoplay 属性值为 true 后加载雪花可能显示不正常的Bug
  + iOS平台 修复 指纹识别（Fingerprint）判断当前设备是否支持（plus.fingerprint.isSupport）返回值可能不正确的Bug
  + iOS平台 修复 Webview窗口设置软键盘模式（softinputMode）为adjustResize时，新开页面并弹出软键盘后返回可能白屏的Bug
  + iOS平台 修复 数据库（SQLite）多次打开数据库后，调用判断数据库是否打开（plus.sqlite.isOpenDatabase）返回值可能不正确的Bug
  + iOS平台 修复 数据库（SQLite）在HX中真机运行可能出现SQL语句操作（plus.sqlite.executeSql）无法正常执行的Bug

## 2.3.3.20190924-alpha
* 【uni-app插件】
  + App-Android平台 新增 uni.request 网络请求增加参数 sslVerify，配置是否验证 ssl 证书。但建议使用普遍受信的证书而不是忽略证书校验。[详情](https://uniapp.dcloud.io/api/request/request)
  + App-iOS平台 调整 非自定义组件模式 逻辑层默认从 WKWebview 切回 UIWebview，避免 uni.request 无法跨域的问题。但仍建议开发者尽快升级自定义组件模式
  + App-iOS平台 新增 非自定义组件模式 iOS13上页面无法滚动的问题，如不能很快升级为自定义组件模式，可临时使用本文的方案2来解决，[详情](https://ask.dcloud.net.cn/article/36410)
  + App-iOS平台 修复 nvue swiper组件包含子组件少于3个时布局可能不正确的Bug
  + App-iOS平台 修复 nvue video组件退出全屏动画会闪现底层组件的Bug 
  + H5端 修复 监听页面滚动（onPageScroll）后切换页面报错的Bug [详情](https://ask.dcloud.net.cn/question/78955)
* 【5+App插件】
  + iOS平台 修复 iOS13上保存图片到系统相册（plus.gallery.save）失败的Bug

## 2.3.2.20190921-alpha
* 修复 uni-app iOS13以下系统 无法启动debugger的Bug
* 修复 uni-app manifest中未设置组件编译模式时无法启动debugger的Bug
* 【uni-app插件】
  + App平台 修复 uni.writeBLECharacteristicValue 无法写入数据的Bug [详情](https://ask.dcloud.net.cn/question/79204)
  + App平台 修复 调用 uni.pageScrollTo 时页面内元素 fixed 定位失效的Bug [详情](https://ask.dcloud.net.cn/question/73179)
  + App平台 修复 调用 uni.switchTab 某些情况下白屏的Bug
  + App平台 修复 nvue map组件的点击标记点事件（@markertap）参数中markerId属性不正确的Bug
  + App平台 修复 调用 uni.setNavigationBarColor 导致其他页面状态栏颜色一起改变的Bug
  + App平台 修复 应用启动后立刻调用 uni.hideTabBar 导致页面高度错误的Bug [详情](https://ask.dcloud.net.cn/question/77611)
  + App-iOS平台 修复 调用 uni.setNavigationBarColor 导致隐藏状态的导航栏显示的Bug
  + App-iOS平台 修复 nvue swiper组件 垂直滑动且高度较低时内容可能出现重叠的Bug 
  + App-iOS平台 修复 nvue refresh组件 某些情况下闪退的Bug
  + H5平台 修复 longpress 事件消息对象的 touches/changedTouches 属性不正确的Bug [详情](https://ask.dcloud.net.cn/question/79149)
  + uni统计 修复 网络异常时，上报重试机制失效的Bug
* 【5+App插件】
  + Android平台 修复 系统相册选择文件（plus.gallery.pick）设置selected参数时多次选择失效的Bug [详情](https://ask.dcloud.net.cn/question/78931)
  + iOS平台 修复 视频播放（VideoPlayer）控件退出全屏后状态栏方向不对的Bug [详情](https://ask.dcloud.net.cn/question/79171)
  + iOS平台 修复 iOS13上获取系统状态栏样式（plus.navigator.getStatusBarStyle）总是反馈dark的Bug。此问题同时会导致uni-app状态栏颜色混乱的Bug [详情](https://ask.dcloud.net.cn/question/79189)
  + iOS平台 修复 iOS13上获取系统状态高度不正确的Bug [详情](https://ask.dcloud.net.cn/question/79219)
  + iOS平台 修复 iOS13上WKWebview的input组件设置自动聚焦无效的Bug

## 2.3.1.20190920-alpha
* 【uni-app插件】
  + App平台 修复 vue页面 scroll-view 组件在 iOS13 无法滚动的 Bug [详情](https://ask.dcloud.net.cn/question/78627)
  + H5平台 修复 uni.request 方法发起 GET 请求之前出现 OPTIONS 预检请求的 Bug
  + 头条小程序 修复 this.$refs 部分场景无法获取组件引用的 Bug [#791](https://github.com/dcloudio/uni-app/issues/791)
  + uni统计 修复 小程序端发行后所有页面都添加 onShareAppMessage 的 Bug [#792](https://github.com/dcloudio/uni-app/issues/792)

## 2.3.0.20190919-alpha
* 新增 Eclipse快捷键方案切换【菜单-工具-快捷键切换】
* 修复 调用npm运行时npm路径初始化不正确的bug
* 修复 已关闭工程列表展开状态下关闭程序, 再次启动程序后已关闭工程列表位置显示错误的Bug
* 优化 断电时正在写入的文件损坏的概率
* 新增 App manifest可视化界面 增加iOS13的蓝牙配置项
* 新增 uni-app manifest可视化界面 增加nvue页面编译模式
* 【uni-app插件】
  + App平台 修复 nvue 页面 picker-view 组件初次渲染可能错乱的 Bug
  + App-iOS平台 修复 nvue video标签设置自动播放（autoplay）为true不生效的Bug
* 【5+App插件】
  + iOS平台 新增 云打包支持配置Capabilities，如通用链接（Universal Link）[详情](https://ask.dcloud.net.cn/article/36393)
  + iOS平台 修复 使用录音对象（AudioRecorder）时如果用户不允许访问麦克风（未授权）不触发失败回调的Bug
  + iOS平台 修复 视频播放（VideoPlayer）控件在iOS13上退出全屏后显示位置不正确的Bug

## 2.2.7.20190917-alpha
* 修复 Mac iOS13真机运行 提示mdb缺少某些依赖库的Bug
* 优化 Mac 通过WiFi连接的iOS手机不再显示在运行列表中
* 【uni-app插件】
  + 【重要】App平台 优化 不显示的Tab页面，释放渲染内存占用，提升窗体动画和页面滚动的平滑度
  + 【重要】uni统计 优化 统计接口上报性能，已启用uni统计的历史项目，请在小程序后台request安全域名中新增（不是替换）：tongji.dcloud.io
  + 修复 兼容sass-loader 8.0.0版本 [#776](https://github.com/dcloudio/uni-app/issues/776)
  + App平台 新增 nvue 中支持 uni.scss
  + App平台 修复 setNavigationBarTitle不生效的Bug
  + hello uni-app 优化 cover-view 组件示例(App端使用nvue实现)，支持在视频全屏界面覆盖遮罩物
  + hello uni-app 优化 video 组件示例，新增播放、暂停、设置倍速等能力演示
* 【5+App插件】
  + Android平台 修复 uni-app自定义组件模式下websocket连接报some error occur错误的Bug [详情](https://ask.dcloud.net.cn/question/78789)
  + Android平台 修复 nvue页面中input标签设置adjust-position属性不生效，及KeyboardHeightChange事件不触发的Bug [详情](https://ask.dcloud.net.cn/question/78796)
  + iOS平台 新增 创建本地消息（plus.push.createMessage）支持设置标题（title）和副标题（subtitle） [详情](https://ask.dcloud.net.cn/question/78475)
  + iOS平台 修复 蓝牙（Bluetooth）开始搜索后不停止直接关闭页面可能会引起应用崩溃的Bug

## 2.2.6.20190914-alpha
* 新增 Windows 程序关闭前，提示是否创建桌面快捷方式
* 新增 代码提示 支持支付宝小程序数据、更新微信小程序最新数据。在uni-app项目中自动加载，在其他项目中，手动在状态栏的代码提示库中选择
* 修复 HTML文件中javascript字符串多行显示时着色不对的Bug
* 修复 javascript模板字符串在酷黑主题下着色不对的Bug
* 新增 真机运行 支持iOS13
* 新增 真机运行 nvue文件支持差量同步，提升修改后界面刷新速度
* 修复 真机运行 iOS模拟器 nvue文件同步后界面不刷新的Bug
* 【uni-app插件】
  + 【重要】 App平台 优化使用Tab时应用的内存占用，提升窗体动画和页面滚动的平滑度（自定义组件模式）
  + 【重要】 公告：非自定义组件模式，将于11月1日起，停止支持。请开发者尽快升级 [详情](https://ask.dcloud.net.cn/article/36385)
  + 新增 编译时增加警告信息（不影响运行）
  + 修复 静态资源过大时编译报错的 Bug
  + 修复 部分样式编译时未自动增加 webkit 前缀的 Bug [#769](https://github.com/dcloudio/uni-app/issues/769)
  + App平台/H5平台 新增 支持导航栏透明配置（transparentTitle） [详情](https://uniapp.dcloud.io/collocation/pages?id=style)
  + App平台/H5平台 修复 input、textarea 组件禁用状态黑色文字在 iOS 颜色变浅的 Bug
  + App平台 新增 导航栏支持配置图片（titleImage） [详情](https://uniapp.dcloud.io/collocation/pages?id=style)
  + App平台 新增 nvue 环境支持 recycle-list 组件 [详情](https://uniapp.dcloud.io/component/recycle-list)
  + App平台 新增 nvue 环境支持 picker-view 组件
  + App平台 修复 nvue 环境 movable-area 组件手势和滚动冲突的 Bug
  + App平台 优化 websocket 支持创建多个连接，支持收发 ArrayBuffer 类型数据
  + App平台 修复 键盘高度变化事件不生效的 Bug
  + App平台 修复 页面中 web-view 组件的页面加载完成之前标题栏会显示 null 的 Bug
  + H5平台 新增 支持导航栏点击穿透配置（titlePenetrate） [详情](https://uniapp.dcloud.io/collocation/pages?id=style)
  + H5平台 修复 rich-text 内部节点包含多个 class 时渲染不正确的 Bug [#756](https://github.com/dcloudio/uni-app/issues/756)
  + uni统计 运行测试时不再上报数据，仅发行后才报数
  + uni统计 修复预览模式自定义统计（uni.report）报错的问题
* 【5+App插件】
  + 【重要】Android平台 优化 窗体动画popin/popout的效率，Android6+加入老窗体透明alpha效果（同时注意此时动画时长设置不再生效）
  + Android平台 修复 nvue页面中video标签设置control属性为false时，未播放状态下仍然显示控制栏的Bug
  + iOS平台 更新 个推&UniPush推送SDK（2.4.1.0）适配iOS13
  + iOS平台 修复 Webview窗口使用WKWebview内核时overrideUrlLoading方法无效的Bug [详情](https://ask.dcloud.net.cn/question/78173)
  + iOS平台 修复 直播推流（LivePusher）控件设置视频模式（mode）属性和宽高比（aspect）属性可能不生效的Bug
  + iOS平台 修复 nvue页面中input组件设置adjust-position属性值为false无效的Bug [详情](https://ask.dcloud.net.cn/question/78472)
  + iOS平台 修复 nvue页面中webSocket模块设置多个协议（protocol）导致连接服务器失败的Bug
  + iOS平台 修复 nvue页面中bindingx在uni-app编译模式下拖拽组件时偏移系数不正确的Bug

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
* 【uni-app插件】
  + 【重要】新增 nvue 页面支持 vuex 的使用 [详情](https://uniapp.dcloud.io/use-weex?id=vue-%e5%92%8c-nvue-%e5%85%b1%e4%ba%ab%e7%9a%84%e5%8f%98%e9%87%8f%e5%92%8c%e6%95%b0%e6%8d%ae)
  + 【重要】调整 App平台 iOS下，vue及nvue页面的uni-app编译模式下，web-view组件从UIWebview改为WKWebview。[详情](https://ask.dcloud.net.cn/article/36348)
  + 优化 wxs 支持script方式写法，方便着色、格式化、语法校验 [详情](https://uniapp.dcloud.io/frame?id=wxs)
  + 优化 image 组件支持自闭合写法 [#625](https://github.com/dcloudio/uni-app/issues/625)
  + 优化 autoprefixer 目标浏览器兼容，减少生成的 css 代码
  + 修复 部分模板写法导致编译器报错的Bug [#604](https://github.com/dcloudio/uni-app/issues/604)
  + 修复 mode 不正确导致 cli 下读取 .env 错误的Bug [#710](https://github.com/dcloudio/uni-app/issues/710)
  + 修复 for 循环中绑定多个事件方法，参数获取不正确的Bug [#720](https://github.com/dcloudio/uni-app/issues/720)
  + App/H5平台 新增 uni.getSystemInfo 支持返回安全区信息（safeArea）
  + App/H5平台 新增 swiper 组件支持 transition 事件
  + App平台 优化 tab切换减少白屏概率
  + App平台 优化 页面背景样式生效时机，解决深色背景等特定场景下，页面切换时闪白的问题
  + App平台 修复 iOS13 页面无法滚动的Bug [详情](https://ask.dcloud.net.cn/question/77877)
  + App平台 新增 uni.getSystemInfo 支持返回手机品牌信息（brand） [详情](https://ask.dcloud.net.cn/question/77313)
  + App平台 修复 纯nvue项目中 uni.scanCode、uni.chooseLocation 接口不触发回调的Bug
  + App平台 修复 纯nvue项目中 uni.stopPullDownRefresh 不生效的Bug
  + App平台 修复 纯nvue项目中 开发运行期间新增 nvue 页面，热更新白屏的Bug
  + App平台 优化 nvue Android版switch的样式与性能
  + App平台 优化 nvue button 组件内部支持嵌套 text 组件
  + H5平台/支付宝平台 新增 导航栏配置项titleImage（导航栏标题图） [详情](https://uniapp.dcloud.io/collocation/pages?id=style)
  + H5平台 修复 input 组件的 change 事件会冒泡到父组件的Bug [详情](https://ask.dcloud.net.cn/question/77962)
  + H5平台 修复 svg 或非base64格式的 Data URI 无法使用的Bug [#668](https://github.com/dcloudio/uni-app/issues/668)
  + 小程序平台 新增 uni.getMenuButtonBoundingClientRect 接口，可获取导航栏右上角胶囊按钮的布局位置信息 [详情](https://uniapp.dcloud.io/api/ui/menuButton?id=getmenubuttonboundingclientrect)
  + 小程序平台 优化 发行时压缩 css 代码
  + 百度/头条小程序平台 修复 开发工具 sourcemap 无效的Bug [#724](https://github.com/dcloudio/uni-app/issues/724)
  + 支付宝小程序 新增 button 组件 open-type 属性支持 getPhoneNumber
  + hello uni-app 新增 nvue地图 组件及API示例
  + hello uni-app 新增 全屏视频上下滑动 示例模板
  + uni-ui 新增 SearchBar 搜索输入框
  + uni-ui 新增 GoodsNav 商品详情页底部购物车、购买导航条
  + uni-ui 新增 Fav 收藏按钮
  + uni-ui 优化 SwipeAction 滑动操作组件，App平台、H5 平台、微信小程序平台使用 wxs 实现跟手式流畅拖动
  + uni-ui 优化 Collapse 折叠面板在低配设备中动画卡顿的问题
  + uni-ui 优化 LoadMore 加载图标可按平台配置或由用户指定，Android平台默认circle，iOS平台默认雪花
  + uni-ui 优化 SwipeDot 优化指示器样式
  + uni-ui 修复 Icons 组件在 H5 平台不显示的BUG。老用户请更新Icons组件 [详情](https://ask.dcloud.net.cn/article/36404)
  + 新闻模板 优化 拖动标签卡时更快的渲染页面、无网络时引导用户设置
  + uni统计 修复 页面标题和页面 url 不匹配的Bug
  + uni统计 修复 选项卡页面 url 上报不正确的Bug
* 【5+App插件】
  + 【重要】iOS平台 默认Webview从UIWebview改为WKWebview。从iOS13开始苹果将UIWebview列为过期API。[详情](https://ask.dcloud.net.cn/article/36348)
  + Android平台 修复 uni-app中网络请求设置method为DELETE时请求参数丢失的Bug [详情](https://ask.dcloud.net.cn/question/77624)
  + Android平台 修复 部分平板设备横屏显示时可能出现灰色区域的Bug [详情](https://ask.dcloud.net.cn/question/77055)
  + Android平台 修复 图片压缩转换（plus.zip.compressImage）后exif头信息丢失的Bug [详情](https://github.com/dcloudio/uni-app/issues/437)
  + Android平台 修复 获取图片信息（plus.io.getImageInfo）传入网络图片地址无法下载图片时控制台输出Unexpected identifier错误的Bug [详情](https://ask.dcloud.net.cn/question/77363)
  + Android平台 修复 设置应用全屏显示（plus.navigator.setFullscreen）时在部分刘海屏设备显示区域可能不正确的Bug
  + Android平台 修复 Webview窗口动画在Android6以下设备可能出现残影的Bug
  + Android平台 修复 使用plus.io.resolveLocalFileSystemURL方法传入路径非'/'结尾是获取目录对象entry不正确，导致entry.getDirectory创建子目录路径不对的Bug
  + Android平台 修复 nvue页面中map组件中添加的子组件无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/78307)
  + iOS平台 更新 友盟统计SDK（6.0.5）适配iOS13，注意：新版本要求应用使用广告标识IDFA [详情](https://ask.dcloud.net.cn/article/74)
  + iOS平台 修复 Webview窗口设置滑屏（drag）后，侧滑返回操作可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/77462)
  + iOS平台 修复 应用仅配置横屏时调用系统相册选择图片（plus.gallery.pick）时引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/77394)
  + iOS平台 修复 图片压缩转换（plus.zip.compressImage）处理图片分辨率过高可能造成内存溢出引起应用崩溃的Bug [详情](https://github.com/dcloudio/uni-app/issues/713)
  + iOS平台 修复 图片预览（plus.nativeUI.previewImage）显示高分辨率图片可能超出内存溢出引起应用崩溃的Bug
  + iOS平台 修复 直播推流（LivePusher）控件配置开启摄像头（enable-camera）属性导致无法推视频流的Bug
  + iOS平台 修复 获取图片信息（plus.io.getImageInfo）传入网络图片地址无法下载图片时触发成功回调的Bug
  + iOS平台 修复 Webview窗口背景设置为深色时，Tab栏上面会出现白条的Bug [详情](https://ask.dcloud.net.cn/question/77442)
  + iOS平台 修复 nvue页面中swipe组件高度动态变化后切页显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/77500)
  + iOS平台 修复 nvue页面中video标签设置封面图片（poster）后动态修改src属性可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/77353)
  + iOS平台 修复 nvue页面中video标签中退出全屏后覆盖元素显示不正常的Bug
  + iOS平台 修复 uni原生插件实现代理方法（application:handleOpenURL:）不触发，导致无法获取第三方应用返回数据的Bug
  + Hello H5+ 适配iOS平台二维码扫描页面在WKWebview中position定位问题（fixed调整为absolute）

## 2.2.4.20190823-alpha
* 【uni-app插件】
  + 【重要】App/微信小程序平台 新增 支持wxs，支付宝小程序平台支持SJS，百度小程序平台支持Filter [详情](https://uniapp.dcloud.io/frame?id=wxs)
  + App平台 修复 微信自定义组件运行时报错的Bug [详情](https://ask.dcloud.net.cn/question/77358)
* 【5+App插件】
  + Android平台 优化 窗口动画效率，提升页面显示/关闭动画流畅度
  + iOS平台 修复 subNVue页面可能无法接收到父页面通过subNVue.postMessage发送的消息的Bug [详情](https://ask.dcloud.net.cn/question/77312)
  + iOS平台 修复 uni原生插件实现代理方法（application:openURL:options:）后与第三方应用交互（如调用微信登录）引起应用崩溃的Bug
  + iOS平台 修复 获取网络gif图片信息（plus.io.getImageInfo）引起应用崩溃的Bug

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
* 【uni-app插件】
  + 【重要】uni统计平台上线，一份报表，掌握业务全景 [详情](https://tongji.dcloud.net.cn)
  + App平台 新增 uni.onKeyboardHeightChange 支持监听键盘高度变化
  + App平台 优化 renderer配置为native的纯nvue项目，uni.request 发起网络请求时，Content-Type 默认设置为 application/json
  + App平台 优化 input 组件 @focus 事件支持获取键盘高度
  + App平台 优化 uni.request 自动去除 url 首尾空白字符
  + App平台 修复 解决 scroll-view、movable-view 组件触摸滑动时会触发下拉刷新的 Bug
  + H5平台 新增 支持 icon 组件。注意此功能会与老版的uni ui的icon组件重名 [详情](https://ask.dcloud.net.cn/article/36404)
  + H5平台 优化 uni.getNetworkType 支持 Safari 浏览器
  + H5平台 修复 input 组件 confirm-type 值为 search 时文字垂直不居中的 Bug
  + H5平台 修复 animation 属性中部分动画不生效的 Bug
  + 微信小程序平台 修复 当使用小程序插件后，调用数组方法修改数组未触发界面渲染的 Bug [#694](https://github.com/dcloudio/uni-app/issues/694)
  + 支付宝小程序平台 新增 支持分包加载功能
* 【5+App插件】
  + 修复 nvue页面在非自定义组件模式下module（模块）只能触发一次回调事件（如webSockets的onMessage事件）的Bug
  + Android平台 修复 HBuilderX2.2.0引出的uni原生插件调用（uni.requireNativePlugin）使用时报错的Bug [详情](https://ask.dcloud.net.cn/question/76962)
  + Android平台 修复 nvue页面中web-view组件无法使用定位功能的Bug [详情](https://ask.dcloud.net.cn/question/76909)
  + Android平台 修复 nvue页面中textarea、input组件首次触发focus事件时无法获取键盘高度的Bug [详情](https://ask.dcloud.net.cn/question/76923)
  + iOS平台 修复 音频播放对象（AudioPlayer）的setStyles方法设置开始播放位置（startTime）不准确，isPaused方法获取播放状态不准确的Bug [详情](https://ask.dcloud.net.cn/question/76201)
  + iOS平台 修复 视频播放（VideoPlayer）控件无法播放带身份认证的rtsp地址的Bug [详情](https://ask.dcloud.net.cn/question/76526)
  + iOS平台 修复 蓝牙（Bluetooth）停止搜索设备后再开始可能无法返回之前搜索到的设备，及搜索设置allowDuplicatesKey参数无效的Bug。
  + iOS平台 修复 nvue页面在iPhoneX设备软键盘弹出时页面偏移位置不准确的Bug [详情](https://ask.dcloud.net.cn/question/76783)
  + iOS平台 修复 nvue页面中map组件添加的子组件可能无法显示的Bug [详情](https://ask.dcloud.net.cn/question/76719)

## 0.1.50.20180918-alpha
* 【uni-app插件】
    +  优化 下拉刷新配置
    +  修复 uploadFile 参数 files 不生效
    +  修复 组件内联 style 中使用 background-image 相对路径不生效
    +  修复 组件 picker-view 无法正确选中
    +  修复 部分历史创建的uni-app项目在iOS平台真机运行报错的bug
    +  修复 模板 索引列表在微信小程序平台，滑动右侧索引导致整体界面跟随滑动的bug

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
* 【uni-app插件】
    + 【重要】 新增 upx 作为响应式尺寸单位，px 变为传统的物理像素，历史项目升级参考 [教程](https://ask.dcloud.net.cn/article/35014)
    + 新增 支持注册全局组件 [文档](https://uniapp.dcloud.io/use?id=%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6)
    + 新增 pages.json app-plus 支持pullToRefresh配置 [文档](https://uniapp.dcloud.io/collocation/pages?id=下拉刷新)
    + 优化 iOS平台 从UIWebview切换为WKWebview，提升页面图片渲染速度
    + 新增 小程序平台 分包预下载（hello uni-app示例为方便分包调整了目录结构）
    + 修复 css 变量 var(--status-bar-height) 部分情况不生效 
    + 修复 组件嵌套 slot 无法传递 props
    + 优化 组件 input 支持focus属性，自动弹出键盘（目前iOS部分版本仍有兼容问题）
    + 优化 组件 input 支持confirm-type=search属性，键盘右下角显示为搜索样式
    + 优化 组件 swiper 在iOS平台屏幕边缘的滑动体验
    + 修复 uni.openLocation无法调用系统导航的问题
    + 修复 iOS setNavigationBarColor 改变frontColor时未修改状态栏颜色
    + 修复 组件 picker-view value属性不生效的bug
    + 修复 页面onLoad事件内立即执行reLaunch不生效的bug
    + 优化 back逻辑，优先关闭当前显示的 loading 或 toast，再关闭页面
    + hello uni-app 新增 input 示例新增自动弹出键盘、搜索框
    + hello uni-app 新增 侧滑导航示例
    + hello uni-app 新增 多列选择、联动选择示例（含城市选择）
    + hello uni-app 新增 自定义导航栏示例
    + hello uni-app 优化 导航栏示例中App原生按钮的写法和样式
    + hello uni-app 新增 load more（加载更多）示例
    + hello uni-app 新增 segment control（分段选择器）示例
    + hello uni-app 新增 indexed-list（索引列表）示例
    + hello uni-app 新增 图片懒加载示例
    + hello uni-app 新增 手势图片锁屏示例
    + hello uni-app 新增 IM chat示例（感谢网友xcecd@qq.com）
* 【5+App插件】
    + 新增 Webview窗口titleNView的按钮类型（type），内置支持"前进"、"后退"、"分享"、"收藏"、"主页"、"菜单"、"关闭"按钮图标
    + 完善 直播推流（LivePusher）控件，可支持推流前显示预览（preview）摄像头画面
    + 完善 Webview窗口下拉刷新支持通过WebviewStyles的pullToRefresh属性设置，添加"pullToRefresh"事件（下拉刷新时触发）
    + 修复 微信登录授权可能存在的安全隐患，补充authorize方法获取授权code避免泄露appsecret数据
    + Android平台 修复 云端打包自定义targetSdkVersion后可能无法获取定位信息的问题
    + Android平台 修复 部分设备可能出现无法通过微信分享图片的问题
    + Android平台 修复 视频播放控件timeupdate事件返回参数不正确的问题
    + Android平台 修复 视频播放控件缓冲事件仅触发一次的问题
    + Android平台 修复 视频播放控件全屏后可能显示虚拟键盘的问题
    + Android平台 修复 Webview配置titleNView分割线可能不显示的问题
    + Android平台 修复 地图resize后自动全屏显示的问题
    + Android平台 修复 调用plus.runtime.launchApplication方法将应用激活到前台不触发newintent事件的问题（新增参数newTask控制）
    + Android平台 修复 部分手机上可能出现二维码扫码崩溃的问题
    + Android平台 修复 多点触摸滑动操作可能引起应用假死的问题
    + iOS平台 新增 支持摄像头录像（plus.camera.startVideoCapture）设置视频长度（videoMaximumDuration）。Android视频录制时长控制请使用Native.js，[参考](https://ask.dcloud.net.cn/question/45756)
    + iOS平台 新增 支持分别设置Webview窗口顶部（backgroundColorTop）和底部（backgroundColorBottom）的回弹区域背景颜色
    + iOS平台 修复 视频播放控件不触发缓冲事件的问题
    + iOS平台 修复 系统相册选择文件不支持gif图片的问题
    + iOS平台 修复 原生View控件中使用富文本可能引起程序崩溃的问题
    + iOS平台 完善 Webview下拉刷新控件支持配置雪花和文字颜色（"pullToRefresh":{"color":"#ff0000"}）
    + iOS平台 修复 真机运行时可能出现数据（plus.storage.setItem）丢失的问题
    + iOS平台 修复 模拟器运行可能出现JS异常错误的问题
    + iOS平台 修复 使用WKWebview内核时页面中input无法主动设置焦点弹出软键盘的问题


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
* 【uni-app插件】
    + 更新 mpvue 相关插件至最新
    + 新增 小程序平台 分包加载，参考[pages.json配置说明](https://uniapp.dcloud.io/collocation/pages?id=subpackages)
    + 新增 TypeScript 预编译器支持，实现了 <script lang="ts" src="xx.ts"></script> 引用方式的自动识别
    + 新增 内置 autoprefixer ，自动处理css兼容性(iOS>=8,Android>=4)，修复iOS8上部分组件变形的问题
    + 新增 App平台 二级页面支持单独取消原生导航栏，支持定义导航栏为透明渐变模式
    + 新增 组件 picker-view，规范参考[picker-view](https://uniapp.dcloud.io/component/picker-view)
    + 修复 uni.switchTab跳转的bug，注意switchTab跳转后会关闭所有非tabbar页面。可用于初始页为欢迎页、登陆页，之后switchTab到业务首页的场景
    + 修复 uni.request 未返回 header 的问题
    + 修复 组件 textarea 有时无法输入汉字的问题
    + 修复 组件 input 数字类型无法输入小数点的问题
    + 修复 启动后立即切换tab，可能卡死的问题
    + hello uni-app 页面跳转 新增switchTab、reLaunch演示
    + hello uni-app 新增 EChart图标示例
    + hello uni-app 新增 可拖动九宫格示例
    + hello uni-app 新增 自定义导航栏（透明渐变、自定义按钮）示例
    + hello uni-app 优化 列表到详情模板 详情页改为透明渐变导航
    + hello uni-app 新增 图片、头像剪切示例（感谢网友杨大宝）
    + hello uni-app 新增 二维码生成示例（感谢网友诗小柒）
    + 更多三方扩展，参考[https://ask.dcloud.net.cn/explore/category-12__is_recommend-1](https://ask.dcloud.net.cn/explore/category-12__is_recommend-1)
    + 新增 应用模板：图片浏览App模板
    + 新增 应用模板：登录注册模板
    + 新增 [mpvue项目（组件）迁移指南、示例及资源汇总](https://ask.dcloud.net.cn/article/34945)
* 【5+App插件】
    + 修复 Webview窗口创建后无法动态添加titleNView的问题
    + Android平台 补充 录音支持aac音频格式文件
    + Android平台 优化 打开较多窗口后可能导致窗口动画掉帧的问题
    + Android平台 修复 微信小程序分享图片可能变虚的问题
    + Android平台 修复 无法上传中文名文件的问题
    + iOS平台 修复 模拟器不支持视频播放&直播推流控件的问题
    + iOS平台 修复 等待框自定义高度时垂直方向没有居中的问题
    + iOS平台 修复 微信分享可能不触发回调的问题
    + iOS平台 修复 操作storage可能引起卡顿的问题
    + iOS平台 修复 播放控件（VideoPlayer）不触发ended事件的问题
    + iOS平台 修复 在iPhoneX获取状态栏高度不正确的问题
    + iOS平台 修复 启用js原生混淆后使用Webview的appendJsFile方法失效的问题
    + iOS平台 修复 启用js原生混淆后使用wgt升级后无法运行的问题
    + iOS平台 优化 下拉刷新的样式改为与iOS邮件一致。下拉区域的背景色可在webviewStyle的bounceBackground设置
    + iOS平台 修复 Webview窗口titleNView更新标题文字颜色后返回按钮颜色没有同步更新的问题

## 0.1.47.20180823-alpha
* 【uni-app插件】
    + 修复 通过<style lang="less"></style>方式使用less、scss、stylus预编译语言开发，云端打包时编译报错的问题
* 【5+App插件】
    + 修复 Android平台修复真机运行uni-app录制音频可能引起崩溃的问题
    
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
* 【uni-app插件】
    + 新增 支持vue里通过<style lang="less"></style>方式使用less、scss、stylus这3种预编译语言。需先在HBuilderX插件安装中安装对应编译插件
    + 新增 pages.json 中 globalStyle, style 节点支持分平台配置，可在App侧单独定义titleNView。[参考pages.json说明](https://uniapp.dcloud.io/collocation/pages?id=app-plus)
    + 新增 App中监听原生Title的按钮点击事件onNavigationBarButtonTap
    + 优化 编译的错误日志提示语
    + 补充 启动时指定关闭Splash的延时时间
    + 新增 uni.canvasToTempFilePath，可把canvas区域保存为图片
    + 支持 iPhone X 安全区域配置（默认：App 包含 tabBar 时，自动启用底部安全区域，背景色为 tabBar 背景色，无 tabBar 时，不启用安全区域。也可在App侧参考5+的manifest规范配置）
    + 修复 非首页配置 navigationBarTextStyle 不生效
    + 修复 组件 video show-play-center-btn 不生效
    + 修复 组件 input 标签属性 value="" 导致运行时显示为 true
    + 修复 组件 input 类型为 number 时输入报错
    + 修复 组件 input 在 iOS 平台焦点错乱，快速输入异常，删除时光标错乱
    + 修复 组件 input 数字类型输入非法字符时 placeholder 不消失
    + 修复 组件 map 的 translateMarker 方法不生效
    + 修复 uni.navigateBack delta 参数不生效
    + 修复 uni.getSystemInfo/uni.getSystemInfoSync 返回 platform 不正确
    + 修复 uni.reLaunch 参数丢失
    + 修复 onLoad 事件内立刻调用 uni.startPullDownRefresh 不生效
    + 修复 App 生命周期 onShow,onHide 在 app 切换到前台、后台不触发的问题
    + 新增 新项目模板默认添加 mp-weixin->appid 节点
    + hello uni-app：支持app端首页单独设置原生导航栏，并在右上角增加关于介绍按钮
    + hello uni-app：新增 接口 媒体 文件示例
    + hello uni-app：新增 模板 markdown渲染富文本（用于图文新闻、资讯、笔记快速渲染）
    + hello uni-app：新增 模板 问题反馈
* 【5+App插件】
    + 新增 视频播放控件支持视频长度（duration）、静音播放（muted）、是否显示视频中间的播放按钮（show-center-play-btn）等功能
    + Android平台 修复 拍照后返回可能引起卡顿的问题
    + Android平台 修复 系统等待框自定义Loading图片不支持相对路径的问题
    + Android平台 修复 真机运行修改css/js可能无法同步刷新的问题
    + iOS平台 补齐 支持不设置应用Splash图片时自动使用默认应用图标的开屏界面
    + iOS平台 新增 支持设置录音声道（channels）功能，调整默认录音为单声道
    + iOS平台 修复 使用高德地图后可能导致应用无法启动的问题
    + iOS平台 修复 不支持设置iPhone5&6横屏开屏图片的问题

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
* 【uni-app插件】
    + 修复 Android4.4、5.0的兼容问题
    + 修复 不支持iOS模拟器的问题
    + 优化 iOS上的运行性能，尤其是示例中模板tab示例的卡顿
    + 升级 mpvue至1.0.13
    + 修复 uniapp的appid为空时真机运行白屏的问题
    + 优化 部分手机上splash关闭过早造成白屏的问题
    + 新增 css变量var(—status-bar-height)，微信小程序固定为25px，App环境为真实状态栏高度，[详见](https://uniapp.dcloud.io/frame?id=css%E5%8F%98%E9%87%8F)
    + 修复 pages.json修改page的style不编译的问题
    + 优化 video组件从HTML5 video改为原生video
    + 修复 解决大部分情况下，页面data数据未重置导致的页面显示旧数据
    + 修复 reLaunch每次都会出现启动splash的问题
    + 更新 对接最新的5+分享接口，支持小程序分享
    + 修复 禁用 .babelrc 对编译器的影响
    + 更新 扫码支持 onlyFromCamera、scanType 参数
    + 修复 有时运行到微信模拟器未生成project.config.json的问题
    + 优化 previewImage
    + 优化 dns.js(localhost)报错提示
    + 更新 调整App运行时的userAgent
    + 更新 调整 input 组件数字输入，身份证输入，带小数点的数字键盘对应的类型
    + hello uni-app：新增商品列表模板
* 【5+App插件】
    + 新增 视频播放控件（plus.video.VideoPlayer）支持弹幕、设置全屏方向等功能
    + 更新 微信分享SDK，新增支持分享音频、视频、**小程序**等
    + 更新 新浪微博分享SDK，新增支持分享视频
    + 更新 QQ分享SDK，新增支持分享音乐
    + Android平台新增 不设置应用Splash图片时自动使用默认应用图标的开屏界面，取消大H Splash
    + Android平台修复 Webview为子窗口时通过无法通过setStyle更新大小及位置的问题
    + Android平台修复 获取文件信息（plus.io.File）返回的type类型不正确的问题
    + iOS平台修复 真机运行同步刷新页面引起程序卡死/崩溃的问题
    + iOS平台修复 百度地图无法显示内容的问题
    + iOS平台修复 设置状态栏样式可能不生效的问题
    + iOS平台修复 视频播放控件未设置自动播放时可能会自动播放的问题


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
* 【App插件】iOS平台修复获取支付通道状态未及时更新的问题

## 0.1.43.20180625-alpha
* 修复内置浏览器、内置终端插件配置错误的问题
* 解决某些情况下编辑器右键"在项目管理器中定位"不生效的问题

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
* 【云服务】云端打包校验应用属主权限，减少appid乱用，详见[https://ask.dcloud.net.cn/article/13413](https://ask.dcloud.net.cn/article/13413)

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
* 智能双击强化 双击-、_、.这3个连字符，选中相连的词。例如class="mui-table-view mui-table-view-chevron"

## 0.1.35.20180519-alpha
* 紧急修复运行浏览器和真机的一些问题

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
* 【App插件】优化manifest校验提示

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
* 优化HBuilderX文件目录结构，减少文件数量

## 0.1.32.20180424-alpha
* 新增Ctrl+鼠标右键移除点击位置的多光标/选区
* 新增js、css等分号结尾的语言中，双击分号选择该段内容的功能
* 修复酷黑主题搜索输入框字体颜色看不清的问题
* 修复某些情况下代码块不提示的问题
* 【App插件】修改某些情况下真机运行Uni-App/快应用时，修改单文件同步结果不正确的问题

## 0.1.31.20180420-alpha
* 新增文档结构图/大纲功能【Alt+w】（mac是Ctrl+w）
* 智能双击：HTML中新增双击=选中Tag属性、Css中新增双击类名左侧选中整个类、优化js中function等关键字双击末尾则选中该词
* 优化酷黑主题体验，修复nss,njs等文件酷黑主题下没有高亮的问题
* 新增Ctrl+鼠标滚轮缩放字体的开关配置项:editor.mouseWheelZoom
* 修复二进制文件预览的一些错误
* 修复某些情况下升级过慢的问题

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
* 【App插件】快应用/Uni-App真机运行基座升级到1.0.16

## 0.1.29.20180409-alpha
* 紧急更新某些情况下内置web服务器打开html显示404的问题
* 【App插件】小程序to快应用/Uni-App转换器增加最小版本描述，解决提交到快应用平台失败的问题

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
* 【App插件】小程序to快应用/Uni-App转换器优化部分组件及样式转换，增加template的样式转换

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
* 【App插件】新建5+App时提供模板项目 

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
* 【重要】小程序to快应用/Uni-App转换器开源了！[GitHub地址](https://github.com/dcloudio/uni-migration)

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
* 在快捷键设置界面新增HBuilderX快捷键的理念说明

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
* 优化文件夹内搜索

## 0.1.21.20180225-alpha
* 解决css提示内容不全的问题
* 解决jshint语法验证时，没有错误却弹出控制台的问题
* 解决有时HBuilderX退出时会报错的问题

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
祝大家新春快乐

## 0.1.17.20180122-alpha
* 【重要】需求墙上线了，喜欢HBuilder X的朋友们请移步[https://dev.dcloud.net.cn/wish/](https://dev.dcloud.net.cn/wish/)投票，提出你的想法
* 添加项目手动排序功能（通过鼠标拖动项目管理器里的项目上下移动）
* 添加项目管理器内文件拖拽移动功能
* 添加拖拽外部文件复制到项目管理器功能
* 解决高分屏下保存框字太大的问题
### App相关
* 【真机运行插件】解决真机运行手机失去连接后，保存代码有可能会导致崩溃的问题
* 【真机运行插件】解决某些情况下检测不到手机的问题
* 【真机运行插件】更新快应用调试基座

## 0.1.16.20180117-alpha
* 解决同名文件标签卡无法区分的问题
* 新建无标题文档并粘贴一段json后，文档格式将自动调整为json，同时格式化该文档
* 项目管理器里的文件，打开后HBuilderX标题栏显示其磁盘全路径url。
* 赞助者登录后，用户名处显示赞助信息

## 0.1.15.20180115-alpha
* 修复html文档中，tab不触发emmet的问题

## 0.1.14.20180112-alpha
* HBuilderX内测开始，欢迎大家使用。
