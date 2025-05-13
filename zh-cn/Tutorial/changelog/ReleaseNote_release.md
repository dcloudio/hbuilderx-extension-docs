## 4.65.2025051206
* 新增 uni-app manifest可视化界面，支持百度地图配置入口
* 修复 4.64版本引发的 在HBuilderX内，运行uni-app-cli Vue2项目编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17535)    
* 调整 真机运行插件 项目中启用了push、一键登录模块的时候，若服务尚未开通不会阻断构建和运行

## 4.64.2025042916
* 调整 windows HBuilder调整为64位，不再支持32位系统 [详情](https://hx.dcloud.net.cn/Tutorial/install/windows)
* 新增 HBuilderX 用户登录窗口，增加手机号密码登录方式
* 新增 控制台支持字符搜索 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/ConsoleViewSearch)
* 修复 运行控制台打印日志时会清空选中区域的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15814)
* 修复 编辑器右键【选择相同变量】不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16413)
* 修复 项目管理器下项目过多时，批量关闭项目可能导致卡死和崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16410)
* 修复 当打开一个比较大的压缩文件时，若该文件错误校验时产生错误较多，会导致编辑器卡顿的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16411)
* 修复 某些情况下中文标点自动转换不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16220&ask_id=206467)
* 修复 macosx HBuilderX升级后点立即重启，某些情况下无法正常重启的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16399)
* 修复 macosx arm 右键菜单不显示快捷键的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16414)
* 修复 macosx arm Git提交界面自动全屏的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15910)
* 修复 Git/SVN插件 4.52版本引发的 Git/SVN导入项目, 提示下载Tortoise Git/SVN工具的链接不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16407)
* 修复 Git插件 操作命令时控制台乱报无意义日志的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16408)
* 新增 swift、kotlin等插件市场扩展的语言，支持智能编辑、智能配对、折叠、格式化等功能 [详情](https://hx.dcloud.net.cn/Tutorial/Language/uts_hybrid_support)
* 新增 语言服务 转到定义支持多结果 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/goto?id=goto-definition)
* 新增 语言服务 uts插件 支持swift混编时的代码提示 [详情](https://hx.dcloud.net.cn/Tutorial/Language/uts_hybrid_support)
* 新增 语言服务 uni-app x项目 条件编译支持置灰非活动平台代码块 [详情](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support)
* 优化 语言服务 uni-app x项目 条件编译下，提升转到定义性能
* 修复 语言服务 uni-app x项目 uvue文件使用computed定义的变量，在template区域提示不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15813)
* 修复 语言服务 uni-app x项目 对vue文件路径无法转到定义的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16879)
* 修复 语言服务 快速打开和关闭文件时语言服务提示Could not find source file的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16804)
* 新增 uni-app x Android平台debug 支持uvue及uts插件混编kotlin文件的断点调试 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug.html)
* 新增 uni-app x 鸿蒙平台debug，支持调试uts、uvue、uts插件混编arkts文件 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-harmony.html)
* 新增 manifest 通过交互界面配置鸿蒙的数字签名证书，支持自动申请调试证书 [详情](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#signing-configs)
* 新增 真机运行插件 运行到鸿蒙时可以选择构建过程的缓存策略 [详情](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#run)
* 调整 真机运行插件 内置adb从29.0.4升级到35.0.2（该版本支持无线adb）
* 优化 uni-app (x) 运行到Android 设备列表显示设备品牌和型号
* 调整 uni-app (x) 运行到Android和鸿蒙时 已安装基座由`卸载安装`调整为`覆盖安装` [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16397)
* 调整 安心打包 apktool更新为2.11.1，解决安心打包时android:foregroundServiceType的参数值会被改变的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16895)

## 4.57.2025032507
* 修复 uniapp框架的一些Bug

## 4.56.2025031210
* 修复 uniapp框架的一些Bug

## 4.55.2025030718
* 新增 macOS 支持arm版。x86版无法升级到arm版，需单独下载
* 新增 用户登录界面，增加手机号验证码登录方式
* 新增 ets文件 即 `ArkTs` 语法高亮插件 [详情](https://ext.dcloud.net.cn/plugin?id=21741)
* 新增 HBuilderX CLI uni-app H5发行，增加--ssrHost和--ssrProvider参数 [详情](https://hx.dcloud.net.cn/cli/publish-h5)
* 调整 HBuilderX CLI uni-app H5发行，--provider参数支持更多服务商[aliyun|alipay|tcb] [详情](https://hx.dcloud.net.cn/cli/publish-h5)
* 新增 增加配置项 控制项目移除或者关闭时，自动关闭该项目下已打开的标签卡 (菜单【设置-常用配置】)
* 修复 macOS `alt + tab`打开切换标签卡面板时，按`alt + shift + tab`进行反向选择时，会在编辑器插入`\t`的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14977)
* 修复 3.99版本引发的 项目下存在.editorconfig时，打开的文件无法关闭代码地图的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14863)
* 修复 4.31版本引发的 ctrl+f触发搜索栏后，某些情况下按下esc后HBuilderX崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14978)
* 修复 新建文件时，选择模版会将已输入的文件名重置的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14847)
* 修复 某些文件打开时编码识别不对导致乱码的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12395)
* 修复 4.44引发的自定义代码块未定义生效范围(scope)时不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14982)
* 修复 4.31版本引发的 hover出现代码提示框后，双击hover代码无法选中代码的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15055)
* 修复 emmet uni-app (x) vue文件下, `隐式标签名称` 语法补全项不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14374)
* 新增 运行调试 uni-app x 支持web-view组件中网页日志及错误打印到HBuilderX控制台 [文档](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#%E8%BF%90%E8%A1%8C)
* 新增 语言服务 uni-app (x) uts插件 在uts文件中支持混编时导入的kotlin文件的代码提示、转到定义等功能 [详情](https://hx.dcloud.net.cn/Tutorial/Language/uts_hybrid_support)
* 优化 语言服务 uni-app x 语言服务刚启动时的初始化速度
* 修复 语言服务 uni-app x 在template使用ref定义的变量时报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14968)
* 修复 语言服务 uni-app vue3+ts不提示全局globalProperties属性或方法的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14972)
* 修复 语言服务 uni-app (x) uts插件 覆写class中的属性时，部分原生平台的类型和ts类型校验误报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15172)
* 修复 语言服务 uni-app (x) uts插件 三目运算表达式中，部分原生平台的类型和ts类型校验误报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15173)
* 调整 语言服务 uni-app x 下uni api代码提示时会自动填充对象字面量参数大括号
* 修复 语言服务 vue文件下，id和class在某些情况下, 查找引用获取结果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15171)
* 修复 uni_modules插件 macOS 发布插件到插件市场对话框，点击选择截图，在弹出的文件选择对话框上点击取消后，对话框的层级不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14979)

## 4.45.2025010502
* 新增 uni-app 运行到微信/百度/支付宝/抖音小程序开发者工具，支持关闭运行日志回显到HBuilder控制台，规避小程序socket通道限制的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/run/mp-log.html)
* 调整 HBuilderX设置 运行配置 uni-app编译器设置，node启动内存参数默认值改为3072
* 修复 语言服务 4.44版本引发的 uniapp项目下打开vue文件时语言服务偶现找不到getOptionsDiagnostics的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14778)
* 修复 macOS 4.29版本引发的 导出wgt勾选对js/nvue文件进行原生混淆导出失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14682)
* 修复 macOS 4.44版本引发的 uniapp-cli项目运行到手机，部分电脑因无法获取系统node路径，导致一直卡在编译中的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14754) 
* 修复 uni-app 4.44版本引发的 某些情况下，运行到微信小程序无法启动开发者工具的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14830)
* 修复 uni-app 4.44版本引发的 运行到微信小程序，丢失之前保存的编译模式的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14822)

## 4.44.2024123110
* 优化 Node插件激活时间
* 修复 新建HBuilder窗口时，某些电脑上状态栏高度异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13755)
* 修复 当打开比较大的压缩文件时，如果错误校验时错误比较多，会导致渲染卡顿的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13769)
* 修复 3.5.3版本引发的 自定义代码块中存在中文, 光标位置不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10900)
* 修复 3.94版本引发的 markdown中的code代码块区域, 折叠不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12767)
* 优化 语言服务 uni-app x 代码提示性能
* 修复 语言服务 uts校验 对象字面量类型为可选参数时，误报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13734)
* 修复 语言服务 某些情况下，字符串类型的变量提示会被识别为方法，导致误加了括号的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13763)
* 修复 语言服务 uni-app x 缓存type导致错误校验乱报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13752)
* 修复 语言服务 存在wxs的script时，代码没有代码提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13756)
* 修复 语言服务 打开tsconfig.json中忽略的文件然后再关闭该文件后，没有代码提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13760)
* 修复 语言服务 uni-app uts插件 写uvue时没有代码提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13759)
* 修复 语言服务 uni-app x App.uvue文件，使用this.globalData时，误报错找不到globalData的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13915)
* 修复 语言服务 uni-app Vue文件中this.xxx多次转到定义时，后续可能会失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14082)
* 修复 语言服务 4.29版本引发的 markdown中使用查找引用导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13739)
* 修复 语言服务 4.29版本引发的 markdown在一行写多个链接语法时, 描述位置出现代码提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13270)
* 修复 语言服务 4.31版本引发的 i18n特殊值域String可能导致ts语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13561)
* 修复 语言服务 4.31版本引发的 关闭项目时, 没有删除对应的项目缓存数据的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13750)
* 修复 语言服务 3.5.3版本引发的 URI.parse导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13738)
* 修复 语言服务 3.5.3版本引发的 组件悬浮结果超链接存在多个时, 按F1跳转了后面超链接的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13841)
* 修复 语言服务 3.5.3版本引发的 json代码提示, 反复拉取代码助手的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14030)
* 修复 语言服务 4.36版本引发的 特殊值域String, `AttrString`事件属性提示, 补全结果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14031)
* 调整 语言服务 特殊值域String `FontURIString`、`ImageURIString`、`AudioURIString`、`VideoURIString`、`PageURIString`、`NPageURIString`、`UPageURIString` 在uni-app (x)项目下, 代码提示仅支持项目相对路径
* 新增 uni-app x 运行/发行到微信小程序 [详情](https://doc.dcloud.net.cn/uni-app-x/mp)
* 新增 uni-app 运行到微信/百度/支付宝/抖音小程序开发者工具，支持日志回显到HBuilder控制台 [详情](https://uniapp.dcloud.net.cn/tutorial/run/mp-log.html)
* 新增 uni-app 运行到鸿蒙时支持日志回显到HBuilder控制台
* 新增 uni-app 运行/发行到小红书小程序
* 新增 uni-app 对项目下的package.json点右键可以使用内置npm安装依赖 [详情](https://hx.dcloud.net.cn/Tutorial/installDependencies)
* 新增 uni-app App云打包支持证书库密码配置
* 调整 uni-app 工具栏运行菜单小程序分组中除微信和鸿蒙元服务外默认不显示
* 调整 uni-app x 工具栏运行菜单只显示受支持的平台
* 调整 uni-app cli 项目运行/发行时使用系统环境变量里的node，不再默认使用内置node [详情](https://hx.dcloud.net.cn/Tutorial/configureEnvironmentVariables)
* 修复 uni-app pages.json 3.5.3版本引发的写条件编译时，代码提示项某些情况下回车替换内容不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13715)

## 4.36.2024112817
* 新增 uni-app 在HBuilderX中直接运行和发行鸿蒙应用，不再需要在鸿蒙开发工具中配置模板
* 新增 uni-app manifest可视化界面，新增鸿蒙可视化设置，原App设置改名为安卓/iOS设置
* 新增 语言服务 uts插件开发支持鸿蒙系统API的提示
* 新增 json5文件着色 [详情](https://ext.dcloud.net.cn/plugin?id=19383)
* 优化 大文档选中相同词高亮性能，避免卡顿UI
* 优化 项目管理器项目过多时，降低系统内存和资源占用
* 修复 重启hx后的切换视图文件顺序和关闭时不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11094)
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
* 修复 语言服务 uniapp项目某些情况下定义了同名属性时语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10476)
* 新增 语言服务 easycom组件 标签属性和事件提示时支持defineProps、defineEmits中的定义的属性和事件
* 修复 语言服务 uni-app x 项目下某些情况下js文件报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10014)
* 修复 语言服务 uni-app x 打开多个项目时资源没有正确释放导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11379)
* 修复 语言服务 在项目下执行`npm i`的同时触发转到定义等功能可能会导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10240)
* 修复 语言服务 某些情况下语言服务报错：`No Project.`的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11395)
* 修复 语言服务 打开某个被引用的vue文件时修改script lang后在script区域悬浮时语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12187)
* 修复 语言服务 语言服务刚初始化时，cli项目下快速转到vue文件可能会出现语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11807)
* 修复 语言服务 html文件写vue时，某些情况下语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9966)
* 修复 语言服务 uts插件开发环境下无法提示插件下文件路径的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12200)
* 修复 语言服务 自定义组件属性悬浮提示时, 可能导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12215)
* 修复 语言服务 3.8.12版本引发的 特殊值域String, `cssSelectorString`不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11764)
* 修复 语言服务 3.8.12版本引发的 特殊值域String, `VideoIdString`和`WebviewIdString`提示不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11766)
* 修复 语言服务 3.8.12版本引发的 特殊值域String, `colorString`提示结果顺序不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11769)
* 修复 语言服务 3.8.12版本引发的 特殊值域String, `cssPropertyString`提示项的排序不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11770)
* 修复 语言服务 3.8.12版本引发的 特殊值域String, 部分情况下`ScriptImportURIString`补全项不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11773)
* 修复 语言服务 3.8.0版本引发的 html文件中，document.getElementById()根据实际dom元素类型提示失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9588)
* 修复 语言服务 3.5.3版本引发的 html代码块，属性相关代码块不提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8959)
* 修复 语言服务 3.5.3版本引发的 html代码块，属性值的位置误提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8956)
* 修复 语言服务 3.5.3版本引发的 style代码块在属性选择器中误提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8953)
* 修复 语言服务 3.5.3版本引发的 script区域，部分代码块不提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8949)
* 修复 语言服务 3.5.3版本引发的 uni-app项目中html文件缺少条件编译的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8957)
* 修复 语言服务 3.5.3版本引发的 *.schema.json文件`foreignKey`字段循环引用报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9797)
* 修复 语言服务 3.5.3版本引发的 路径提示有概率导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9800)
* 修复 语言服务 3.5.3版本引发的 jsDoc提示导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10075)
* 修复 语言服务 3.5.3版本引发的 jsdoc代码块补全结果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8873)
* 修复 语言服务 3.5.3版本引发的 URI.parse可能导致的语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10108)
* 修复 语言服务 3.91版本引发的 uni-app x项目中style代码块重复的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8946)
* 修复 语言服务 4.08版本引发的 右键功能-文件查找引用无结果的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8022)
* 修复 语言服务 3.6.11版本引发的 编辑器手动指定关联语言时可能导致乱报红的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7676)
* 修复 语言服务 3.98版本引发的 manifest.json文件，在key的中间打字没有代码提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5798)
* 修复 语言服务 3.99版本引发的 废弃upx还能提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5331)
* 修复 语言服务 3.99版本引发的 style代码提示描述不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5213)
* 修复 语言服务 3.99版本引发的 class类名转到定义跳转文件不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=861)
* 修复 语言服务 3.94版本引发的 json转type功能，在特定情况下，转换结果不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3930)
* 修复 语言服务 3.6.5版本引发的 markdown的锚点链接提示不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1788)
* 修复 语言服务 uts plugin中开发安卓插件，覆写interface的方法时误报红的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10034)
* 修复 语言服务 uts插件iOS平台在windows电脑上文件查找引用和触发函数签名时状态栏报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11428)
* 调整 Windows HBuilderX"运行配置"-"kotlin编译器最大堆内存大小"默认值为2048
* 修复 uni-app 运行到微信开发者工具，偶发关闭运行控制台崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10012)
* 新增 uni-app manifest.json 可视化界面增加鸿蒙配置
* 新增 uni-app x 云打包支持aab、渠道包和广告配置
* 新增 uni-app x iOS uvue断点调试 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-ios.html)
* 新增 uni-app x 新建uni_modules插件，增加分类UTS插件-标准模式组件
* 新增 内置了 uni-im 消息通知插件，在右下角闪动未读消息

## 4.29.2024093009
* 修复 4.28版本引发的 h5+应用 无法制作wgt包的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9606&ask_id=198971)

## 4.28.2024092502
* 【重要】调整 Windows amazon-corretto插件 从11.0.14升级到17.0.12，从32位升级到64位 [文档](https://hx.dcloud.net.cn/Tutorial/App/notsupportJava)
* 调整 HBuilderX更新后，没有立即重启，在退出软件后，下次启动自动使用新版 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4120)
* 修复 某些情况下升级成功后，点击立即重启没有重启成功的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4118)
* 优化 语言服务 代码提示速度
* 优化 语言服务 vue文件中类型推导性能
* 调整 语言服务 uni-app x项目语法提示和校验平台支持多选 [详情](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support)
* 优化 语言服务 uni-app x项目平台兼容性信息显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2734)
* 修复 语言服务 语言服务报错 3.6.5版本引发的 uni-app项目 触发i18n key的悬浮提示时，如果缺失翻译文件，会导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2914)
* 修复 语言服务 语言服务报错 4.01版本引发的 vue文件 代码提示存在自动导包提示项时，会导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2550)
* 修复 语言服务 语言服务报错 4.11版本引发的 vue文件 使用easycom组件时，某些情况下组件的路径被识别为文件夹导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2589)
* 修复 语言服务 语言服务报错 4.11版本引发的 vue文件 template区域下，某些变量边界位置转到定义时引发语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2529)
* 修复 语言服务 语言服务报错 4.11版本引发的 重命名文件时，偶发导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3089)
* 修复 语言服务 语言服务报错 4.11版本引发的 cli项目 在有tsconfig.json文件的情况下，某些情况下导致语言服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2603)
* 修复 语言服务 语言服务报错 4.14版本引发的 语言服务队列消息顺序出错，导致tsserver服务报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2581)
* 修复 语言服务 语言服务报错 4.11版本引发的 vue文件 对某个easycom组件标签转到定义后，打开的组件文件script区域功能失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2527)
* 修复 语言服务 代码提示 4.08版本引发的 删除id和class在代码提示中依旧存在的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7293)
* 修复 语言服务 代码提示 3.95版本引发的 特殊值域String，UPageURIString和ScriptImportURIString不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5822)
* 修复 语言服务 代码提示 3.5.3版本引发的 某些情况下 html文件在转到定义后，代码提示出错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4126)
* 修复 语言服务 代码提示 3.5.3版本引发的 某些情况下 style属性选择器补全项提示不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7072)
* 修复 语言服务 代码提示 3.6.5版本引发的 伪类:before提示项缺失的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6745)
* 修复 语言服务 代码提示 3.5.3版本引发的 vue标签提示在子标签作用域下仍然提示顶级标签的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2419)
* 修复 语言服务 代码提示 3.5.3版本引发的 vue标签提示在text标签下提示出Emmet代码块的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1791)
* 修复 语言服务 代码提示 4.11版本引发的 less和scss代码提示有两个重复项的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6685)
* 修复 语言服务 代码提示 3.8.10版本引发的 vue文件 某些情况下代码助手右侧详细信息显示不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2573)
* 修复 语言服务 代码提示 4.14版本引发的 某些情况下 uvue文件代码提示缺失的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4886)
* 修复 语言服务 代码提示 4.01版本引发的 uniapp x项目 uniCloud环境下没有uniCloud相关提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2853)
* 修复 语言服务 代码提示 4.11版本引发的 uniCloud目录下，当A文件被B文件引用时，若先打开B文件再打开A文件，会导致A文件代码提示等功能失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2698)
* 修复 编辑器右下角切换语言模式时，中文输入法下导致HBuilderX崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3729)
* 修复 Markdown预览 目录层级比较深时，会导致部分图片不渲染的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=4122)
* 修复 文件收藏功能，需要按两次快捷键才能触发的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2311)
* 修复 工具栏搜索分类切换时，下拉菜单某些情况下会自动消失导致鼠标选不中的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2076)
* 修复 地址栏 显示Git分支名称时，点击项目名称后面的箭头时，弹出界面位置不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2196)
* 新增 支持通过软链接将多个uni-app (x)项目的页面、组件、API等目录链接到指定项目下 [详情](https://hx.dcloud.net.cn/Tutorial/App/softLink)
* 修复 4.0版本引发的 h5-Extension插件不存在时，uni-app打包点击H5发行无反应的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7071)
* 新增 uni-app x 项目 生成本地打包原生iOS资源 [详情](https://doc.dcloud.net.cn/uni-app-x/native/use/ios.html)
* 新增 uni-app 云打包 支持Android防重签 [详情](https://uniapp.dcloud.net.cn/tutorial/app-android-antiresigne.html)
* 移除 5+App/wap2app/uni-app的manifest.json中的百度定位和百度地图
* 调整 uts插件 Android插件开发配置项的入口改为【设置-运行配置】[文档](https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html)
* 修复 前端网页托管 3.94版本引发的 web类型项目无法发布到前端网页托管的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2901)
* 修复 uni-app 云打包 manifest.json中删除`ad`参数，打包时会重新加上`ad:{}`的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5308&ask_id=194093)
* 修复 uni-app 3.8.12引发的 运行到快应用联盟开发工具没有反应的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5588&ask_id=190535)
* 修复 uni-app (x) 运行到App 重命名项目后，运行菜单点击没有反应的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7700)
* 修复 uni-app (x) 运行到iOS(18.0)模拟器 切换项目后App内容不更新的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9027)
* 修复 uni-app 开启 uni/nvue 调试查询 getApp/getCurrentPage 返回值错误的Bug [详情](https://ask.dcloud.net.cn/question/190917)

## 4.24.2024072208
* 修复 uniapp框架的一些Bug

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

## 历史更新日志
[已归档的历史版本](/Tutorial/changelog/ReleaseNote_release_archive.md)