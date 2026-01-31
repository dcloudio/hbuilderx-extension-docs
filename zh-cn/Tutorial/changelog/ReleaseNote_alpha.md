## 5.0.2026013113-alpha
* 【重要】新增 AI Chat 插件。支持Claude Code、Gemini、Copilot等CLI工具集成 [文档](https://hx.dcloud.net.cn/Tutorial/AI/AIChat) <https://issues.dcloud.net.cn/pages/issues/detail?id=25161>
* 【重要】新增 Copilot for HBuilder 插件。支持AI代码补全 [文档](https://hx.dcloud.net.cn/Tutorial/AI/github-copilot) <https://issues.dcloud.net.cn/pages/issues/detail?id=24781>
* 新增 uni-app (x)运行 通过`CLI launch`运行，方便AI自动修复问题 [文档](https://hx.dcloud.net.cn/cli/launch-app) <https://issues.dcloud.net.cn/pages/issues/detail?id=24793>
* 新增 command(workbench.action.autoUpdate)支持用户配置快捷键自动更新 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26043)
* 修复 mac平台 酷黑和雅蓝主题下，底部控制台的tooltip看不清 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20959)
* 修复 插件调试时切换激活断点导致UI状态和实际debug状态不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21306)
* 修复 单项目窗口(多窗口)在某些情况下，会导致项目错乱 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23011)
* 修复 调试视图UI和实际不同步，调用堆栈单击节点时跳转断点无高亮，有时退出调试高亮没清除 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24773)
* 修复 3.87版本引发的 windows 使用字体文件的插件会卸载失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24783)
* 修复 内置文件系统切换到大图标，点击任一文件后晃动鼠标会有图标跟随，长时间晃动鼠标造成程序崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24868)
* 修复 插件注册的快捷键有时不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25346)
* 修复 切换用户登录，当密码输入错误时，偶现会在登录页面上重复弹出一个登录页面 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26041)
* 修复 4.81版本引发的 控制台选择链接文本，触发链接跳转，导致快捷键复制的是非预期内容 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25094)
* 修复 项目管理器 使用esc取消重命名文件夹，导致当前位置折叠/展开失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23070)
* 修复 4.84版本引发的 新建页面窗口自动缓存所有模板文件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26038)
* 修复 多文件搜索 搜索结果不能替换为空 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24792)
* 修复 多文件搜索 windows 替换后没有及时更新结果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24794)
* 修复 多文件搜索 windows 替换文本错误弹出一致性提示框 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24796)
* 修复 多文件搜索 windows Dirty文件存在两份搜索结果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24802)
* 修复 查看打开文件的本地历史记录，历史记录却存在其他同名但文件类型不同的文件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21079)
* 修复 多光标选区 迷你地图导致左侧部分位置取消多光标选区失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23065)
* 修复 代码着色 条件编译置灰时折叠代码块，悬浮预览显示着色异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23021)
* 修复 代码着色 条件编译的小括号着色错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25443)
* 修复 代码着色 js、ts、uts文件在酷黑主题下的部分语法高亮缺失 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26037)
* 修复 代码着色 vue文件 v-bind的省略语法，导致语法高亮错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23004)
* 修复 4.66版本引发的 语言服务 px转rpx补全项不提示了 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24340)
* 新增 语言服务 uni-app x项目支持externalClasses [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/style-isolation.html#external-class) <https://issues.dcloud.net.cn/pages/issues/detail?id=25784>
* 新增 语言服务 UTS插件根路径下文件支持条件编译 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20869)
* 新增 语言服务 UTS插件Harmony平台支持原生文件混编语法提示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21727)
* 新增 语言服务 UTS插件开发环境支持条件编译 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22069)
* 修复 语言服务 UTS插件包名条件编译未兼容app-js平台，导致报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21886)
* 修复 语言服务 平台兼容性显示错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22520)
* 修复 语言服务 在条件编译注释文本上悬浮，会提示弹出条件编译置灰提示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22739)
* 新增 语言服务 easycom组件支持withDefault+defineProps设置默认值 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22763)
* 新增 语言服务 vue slots支持 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23696)
* 新增 语言服务 鸿蒙平台开启蒸汽模式支持引用C++文件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24390)
* 修复 语言服务 组件的bool类型属性，补全的结果不对 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22771)
* 修复 语言服务 css属性的值，悬浮的结果不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23511)
* 修复 语言服务 uni-app x项目HTML文件无法提示DOM API [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21429)
* 修复 语言服务 特殊值域String缺失CSSString [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22425)
* 修复 语言服务 在某些情况下，导致项目无法删除 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22526)
* 修复 语言服务 pages.json的subPackages中的root和path没有代码提示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22864)
* 修复 内置浏览器 mac平台 深色主题下打开内置浏览器闪白屏 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26039)
* 修复 内置浏览器 从外部拖入的文件会自动打开内容 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26042)
* 修复 内置浏览器 右键菜单，复制、粘贴、审查元素首次显示后，再次打开右键菜单时，菜单项不会显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26045)
* 新增 AI插件 uni-app x 安卓内存泄漏自动分析功能 [文档](https://ext.dcloud.net.cn/plugin?id=23720) <https://issues.dcloud.net.cn/pages/issues/detail?id=24785>
* 修复 可视化配置多个Associated Domains关联域后回显失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25448)
* 新增 uni-app (x) pages.json页面筛选，快速运行到指定页面 [文档](https://uniapp.dcloud.net.cn/tutorial/run/pages-json-filter.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=25453>
* 新增 uni-app (x) 新建页面云端一体系列内置模板支持 uni_modules 类型 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26040)
* 修复 uni-app x 项目的manifest.json处于非源码视图时无法响应切换视图和切换标签卡 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24780)
* 修复 调整运行菜单项顺序，将支付宝小程序调整到微信小程序后面 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26044)
* 修复 4.83.2025101713-alpha版本鸿蒙平台热更新有概率会导致白屏 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22570)
* 修复 App真机运行 4.84版本引发的 运行到Android uts调试断点不能生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24799)
* 修复 uniCloud 关联服务空间时提示“服务空间不存在” [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23596&ask_id=215483)
* 修复 uniCloud 4.87版本引发的 创建uniCloud项目后提示“缺少appid,请在manifest.json中设置appid” [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24935)
* 修复 uniCloud 4.76版本引发的 无法下载所有公共模块 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25160)
* 修复 uniCloud 使用schema2code生成代码，不能生成到关联项目中，只能当前项目用，而且每次生成的操作界面会弹出两次 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25576)
* 新增 uni_modules 插件补充cli模式，平台兼容性增加小红书小程序平台 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25850)

## 4.87.2025112602-alpha
* 新增 uni-app (x)运行 通过`CLI logcat`命令行获取运行日志，方便AI调取运行日志自动修复问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22250)
* 修复 4.84版本引发的 App真机运行 特定情况下不能运行到iOS26模拟器 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23348)

## 4.86.2025110715-alpha
* 修复 4.84版本引发的 uni-app (x) 项目，在分包下新建页面，取消勾选在pages.json中注册后点击创建显示选择的文件位置和分包不匹配的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22990)
* 修复 uni-app (x) 项目，运行到微信小程序 特定版本微信开发者工具下项目未自动导入问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22962)

## 4.84.2025102304-alpha
* 修复 4.81版本引发的 uni-app (x) 运行/发行在部分情况下引发HBuilderX闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22573)

## 4.83.2025101713-alpha
* 修复 4.81版本引发的 App真机运行 运行到iOS 重签基座不弹框 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22469)
* 修复 uni-app x项目在鸿蒙平台打包时报错找不到UniAppRuntime.har文件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21877)

## 4.82.2025093004-alpha
* 新增 支持macOS 26 的图标风格 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22025)
* 修复 4.81版本引发的 项目管理器 多显示器情况下，不同缩放比时项目别名显示不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21920)
* 修复 预览vue3 cli创建的web项目时，内置浏览器无法关闭 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21471)
* 修复 manifest.json 可视化->原生插件配置，json格式不对时，选择插件后编辑器崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22042)
* 修复 App真机运行 运行到iOS iOS26模拟器，安装调试基座失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21734)
* 修复 4.81版本引发的 App真机运行 运行到iOS 混编没有调试按钮 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22041)
* 修复 鸿蒙项目目录在非mac文件系统时自动删除资源分叉文件以避免鸿蒙工具链执行异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20975)
* 修复 4.71版本引发的 App云打包 manifest.json 配置 initPrivacyAuthorization 为 disagree 无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20236)
* 新增 uni_modules UTS API插件、标准模式组件支持鸿蒙平台 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21997)

## 4.81.2025091909-alpha
* 新增 HBuilder主菜单增加重启功能，菜单位置：【文件】-【重启】 [文档](https://issues.dcloud.net.cn/pages/issues/detail?id=20854) <https://issues.dcloud.net.cn/pages/issues/detail?id=20854>
* 新增 HBuilder核心插件版本校验，保证插件版本和HBuilder版本匹配 [文档](https://issues.dcloud.net.cn/pages/issues/detail?id=20862) <https://issues.dcloud.net.cn/pages/issues/detail?id=20862>
* 修复 运行控制台向上滚动看日志时，当有新内容输出时又自动滚动到底部问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20331)
* 修复 鼠标双击行号打断点时，断点位置和预期不符 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20823)
* 修复 4.66版本引发的 以 UTF-8(BOM) 编码另存文件时，另存文件的内容空白 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21373)
* 修复 4.73版本引发的 在其他软件内编辑HBuilder中已打开的文件时，有时会引发HBuilder崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20825)
* 修复 4.61版本引发的 控制台搜索某些情况下会引发崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20826)
* 修复 特定场景下，左侧资源管理器字体大小不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21030)
* 修复 特定场景下，大纲字体大小不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21169)
* 修复 uni-app (x) 新建页面 在pages.json文本框中敲击回车键后导致合并后的pages.json中出现 \r和\t 字符，引发的pages.json出现语法错误的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17766)
* 修复 4.57版本引发的 uni-app (x) 新建页面 不能在分包的子文件夹中新建的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17947)
* 修复 uni-app (x) 新建页面 可能会引发的软件崩溃的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19888)
* 修复 uni-app (x) 删除页面时，点击状态栏同步到pages.json的消息并跳转到page.json编辑器时，可能会引发软件崩溃的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20936)
* 修复 多文件搜索 性能与稳定性优化 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18860)
* 修复 多文件搜索 搜索结果与当前文件搜索结果高亮冲突 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20839)
* 修复 多文件搜索 搜索完成后继续编辑文档，然后再替换文本时，无文档变更提示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20840)
* 修复 多文件搜索 当前目录和打开目录时候输入框可编辑 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20841)
* 修复 多文件搜索 未发起搜索时，直接点替换时没有反应和提示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20842)
* 修复 编译器的字符搜索历史，记录不完整 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21184)
* 修复 多文件搜索 UTF8带BOM头时，文件搜索错位 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21244)
* 修复 多文件搜索 windows平台下搜索记录在重启ide后消失 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21500)
* 修复 macOS markdown文件 粘贴表格功能失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16419)
* 修复 markdown文件 特定场景下，按下Tab切换无序列表后，输入文字乱码 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20689)
* 修复 css文件 特定场景下，反注释不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21178)
* 修复 特定场景下，智能双击标签，选区不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18702)
* 修复 4.03版本引发的 已打开的文件，删除其所在目录后，编辑器打开的文件没有同步关闭 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19394)
* 新增 语言服务 支持系统API自动显示平台兼容性 [文档](https://hx.dcloud.net.cn/Tutorial/Language/jsdoc?id=uniplatform) <https://issues.dcloud.net.cn/pages/issues/detail?id=18641>
* 新增 语言服务 UTS插件 鸿蒙平台支持har包解析，import后支持代码提示等功能 [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-for-harmony.html#%E9%85%8D%E7%BD%AEuts%E6%8F%92%E4%BB%B6%E4%BE%9D%E8%B5%96) <https://issues.dcloud.net.cn/pages/issues/detail?id=20861>
* 修复 语言服务 存在多个转到定义项时，偶发点击跳转无反应 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20793)
* 修复 语言服务 特定写法下，json转type数据缺失 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19806)
* 修复 语言服务 关闭vue引用文件后，引用位置报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19992)
* 修复 语言服务 连续触发转到定义后，语言服务无响应 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20694)
* 修复 语言服务 id和class的校验逻辑进行了修改, 仅校验定义的id或class未使用 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20843)
* 修复 语言服务 uni-app(x) 项目引用UTS插件时，不支持按条件编译区分平台 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20853)
* 修复 语言服务 uni-app x 条件编译置灰不支持uniVersion、VUE2、VUE3 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20864)
* 修复 语言服务 特定场景下，HBuilder退出时，语言服务缓存资源没有被清理 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21179)
* 修复 语言服务 uts文件 string类型赋值给联合类型时报红 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20846)
* 修复 语言服务 uts文件 可选参数赋值给联合类型时报红 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20847)
* 修复 语言服务 uts文件 UTSJSONObject类型下的属性如果为null时，string类型赋值给这个属性时报红 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20850)
* 修复 语言服务 uts文件 utssdk根目录下，使用装饰符报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20868)
* 修复 语言服务 uts文件 匿名类下的方法添加override时报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20873)
* 修复 语言服务 uts文件 必选参数在可选参数后边时会报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20874)
* 修复 语言服务 uts插件 iOS平台 使用String.contains时报错找不到该属性 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20875)
* 修复 语言服务 vue文件 标签校验时vueModifier校验不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19669)
* 修复 语言服务 vue文件 标签校验时作用域插槽，定义属性的语法误报黄 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19713)
* 修复 语言服务 uvue文件 defineMixin下定义的变量，在模板中使用报错找不到该变量 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20852)
* 修复 语言服务 uvue文件 props下的数组类型与any类型数组赋值时报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20855)
* 修复 语言服务 uvue文件 data下的变量，如果类型不一致进行赋值时，会报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20858)
* 修复 语言服务 uvue文件 data下定义空对象，在模板中使用该对象下的任意属性时，报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20867)
* 修复 语言服务 uvue文件 使用多层嵌套的mixins时，属性和方法误报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20871)
* 修复 语言服务 uvue文件 computed返回值中如果包含this时，template区域无法补全提示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20876)
* 修复 语言服务 uvue文件 computed不支持set、get [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21128)
* 修复 语言服务 uni-app(x) 项目引用vue文件自动导包路径不对 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21459)
* 修复 AI修复，点击修复链接，弹窗提示下载插件的情况下，取消插件下载后，鼠标在控制台晃动引起文本选择 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20116)
* 修复 4.72版本引发的 AI修复，某些情况下修复过程中HBuilder崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20838)
* 修复 4.72版本引发的 AI修复，对比界面新内容没有代码着色 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20883)
* 修复 Linux HBuilder cli 国外账号登录错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17471)
* 新增 manifest.json 支持可视化配置【鸿蒙App配置】的微信登录、微信分享 [文档](https://uniapp.dcloud.net.cn/collocation/manifest.html#app-harmony) <https://issues.dcloud.net.cn/pages/issues/detail?id=19316>
* 新增 manifest.json uni-app x Android平台启动界面背景颜色支持配置暗色模式颜色 [文档](https://issues.dcloud.net.cn/pages/issues/detail?id=19668) <https://issues.dcloud.net.cn/pages/issues/detail?id=19668>
* 新增 manifest.json 支持鸿蒙元服务的证书配置 [文档](https://uniapp.dcloud.net.cn/collocation/manifest.html#mp-harmony) <https://issues.dcloud.net.cn/pages/issues/detail?id=19805>
* 新增 manifest.json uni-app x Android平台可选模块配置uni-push [文档](https://issues.dcloud.net.cn/pages/issues/detail?id=18885) <https://issues.dcloud.net.cn/pages/issues/detail?id=20860>
* 新增 manifest.json uni-app x Android平台可选模块配置uni-barcode-scanning [文档](https://issues.dcloud.net.cn/pages/issues/detail?id=18903) <https://issues.dcloud.net.cn/pages/issues/detail?id=20865>
* 新增 manifest.json 支持可视化配置【鸿蒙App配置】的华为登录 client_id [文档](https://uniapp.dcloud.net.cn/collocation/manifest.html#app-harmony) <https://issues.dcloud.net.cn/pages/issues/detail?id=20974>
* 修复 manifest.json web配置中未开启https,但可视化默认勾选了启用https [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19743)
* 新增 App真机运行 uni-app x 编译和运行报错后提供上报Bug功能 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20878)
* 新增 App真机运行 运行到Android 支持自动检测内存泄漏数据显示到运行控制台 [文档](https://uniapp.dcloud.net.cn/tutorial/run/memory-leak.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=18528>
* 修复 App真机运行 运行到Android 在开启Android Studio的情况下无法使用调试 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21181)
* 修复 App真机运行 运行到iOS iOS17+系统无法自启动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21183)
* 新增 App真机运行 鸿蒙平台构建打包时把manifest.json里面的weixin配置组装到鸿蒙工程里 [文档](https://uniapp.dcloud.net.cn/collocation/manifest.html#app-harmony) <https://issues.dcloud.net.cn/pages/issues/detail?id=19315>
* 新增 App真机运行 集成鸿蒙 Hot Reload 能力，实现热重载 [文档](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#hot-reload) <https://issues.dcloud.net.cn/pages/issues/detail?id=20972>
* 新增 App真机运行 集成鸿蒙元服务的热更新能力 [文档](https://uniapp.dcloud.net.cn/tutorial/mp-harmony/intro.html#ascf-serve) <https://issues.dcloud.net.cn/pages/issues/detail?id=20980>
* 修复 App真机运行 uni-app x 鸿蒙平台debug 如果监视区域存在表达式时app可能闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21171)
* 新增 App真机运行 支持iOS原生混编联调 [文档](https://doc.dcloud.net.cn/uni-app-x/native/debug/ios.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=19433>
* 新增 App真机运行 支持iOS17+系统断点调试 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21182)
* 修复 App真机运行 iOS调试停止后调试进程没有退出的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20172)
* 修复 App云打包 uni-app 提交打包后有一定概率引发HBuilder崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20851)
* 新增 App云打包 uni-app (x) 国外广告新增applovin渠道 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20877)
* 修复 App云打包 "运行-运行到手机或模拟器-选择制作自定义基座"，打包界面制作自定义调试基座选项，未被自动打勾 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19745)
* 新增 支持 CLI 打包鸿蒙元服务 [文档](https://hx.dcloud.net.cn/cli/pack-mp-harmony) <https://issues.dcloud.net.cn/pages/issues/detail?id=21467>
* 修复 uni_modules插件 云端平台兼容性选项默认选中bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20781)

## 4.76.2025073103-alpha
* 修复 4.66版本引发的 语言服务 当项目下css class比较多时，代码提示class时很慢 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19456&ask_id=211211)
* 修复 4.64版本引发的 修改版本号后安心打包失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18447)
* 修复 uni-app (x) 运行/发行 Android平台 Gradle配置正确却提示不是可执行程序 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19938)
* 修复 uniCloud 本地运行 uniapp cli 项目，修改uni_modules下的云函数代码不会实时更新 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19772)
* 修复 uniCloud 本地调试启用了IP防刷导致本地云函数响应变慢 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19867)

## 4.75.2025070414-alpha
* 修复 4.74版本引发的 某些情况下，运行uni-app x项目，修改代码控制台频繁提示AI纠错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19386)
* 修复 4.61版本引发的 MacOS(Intel)上hx内置浏览器的 查找代码中对应的DOM节点 功能失效的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19165)
* 修复 4.41版本引发的 从issues里导入项目，弹出项目导入框显示空白 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19323)
* 修复 语言服务 4.28版本引发的 vue组合式场景下template模板中函数的类型显示为属性 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19135)
* 修复 语言服务 4.71版本引发的 uvue模板区域无法正确显示计算属性（computed）返回的变量类型 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19270)
* 调整 uniCloud 新建项目uniCloud云服务厂商排序调整 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19266)

## 4.74.2025063012-alpha
* 修复 uniapp框架的一些Bug

## 4.73.2025062714-alpha
* 【重要】新增 Linux cli [文档](https://hx.dcloud.net.cn/Tutorial/install/linux-cli)[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19148)
* 修复 语言服务 报错 Cannot read properties of undefined (reading 'getSyntacticDiagnostics') [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17048)
* 修复 语言服务 大于4M的文件下崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17195)
* 修复 语言服务 快速打开关闭文件时报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18499)
* 修复 语言服务 4.44版本引发的 uni-app x项目 easycom无提示且误报红 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19040)
* 修复 语言服务 多个重载的API，其中一个包含internal标记时，无代码提示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19058)
* 修复 语言服务 4.71版本引发的 vue文件内查找引用部分失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18927)
* 修复 4.72版本引发的 语法服务平台选择的对话框中点击更多设置没有反应 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18996)
* 修复 4.64版本引发的 运行到Android 控制台标题显示Undefined [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19083)
* 修复 4.71版本引发的 uni-app项目 发行/App-制作应用wgt包，版本号异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18893)
* 修复 鸿蒙联编调试时无法在uts中打断点 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18977)
* 升级 uni-app x AI修复插件 [详情](https://ext.dcloud.net.cn/plugin?id=23720)
* 修复 unicloud 发行网站到前端网页托管时切换项目会导致上传错服务空间 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18445)
* 修复 unicloud uni-app项目中没有uni_modules目录时无法下载所有云函数 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19105)

## 4.72.2025061803-alpha
* 优化 AI修错 代码纠正的对比交互UI [文档](https://doc.dcloud.net.cn/uni-app-x/tutorial/bug_repair.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=18721>
* 修复 windows uni-app (x) uts插件 kotlin文件，格式化代码中文乱码 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18019)
* 修复 uni-app (x) uts插件 解析jar文件时丢失class的部分成员 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18571)

## 4.71.2025061206-alpha
* 【重要】新增 AI修错 uni-app x 运行到Android/iOS平台时，对于编译期错误可以通过AI自动修复 [详情](https://doc.dcloud.net.cn/uni-app-x/tutorial/bug_repair.html)
* 新增 语言服务 支持对符号进行重命名 [详情](https://hx.dcloud.net.cn/Tutorial/Language/refactor?id=renamesymbol)
* 修复 HBuilderX 使用AI代码补全后关闭编辑器标签卡时崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18507)
* 修复 4.62版本引发的 某些情况下，输入`(,`字符时会引发编辑器卡顿1-2s的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16804)
* 修复 4.63版本引发的 vue使用技巧介绍弹窗, 界面按钮描述不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17960)
* 修复 语言服务 4.61版本引发的 切换target后, 校验有概率不准确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17282)
* 修复 语言服务 4.61版本引发的 转到定义存在多余的结果的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17156)
* 修复 语言服务 3.94版本引发的 json部分提示项补全不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17157)
* 修复 语言服务 uni-app (x) script区域import相对路径代码提示不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16816)
* 修复 语言服务 CSS变量在行内style中转到定义下划线不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18328)
* 修复 语言服务 CSS属性没有CSS变量代码提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18334)
* 修复 语言服务 uni-app x CSS变量误报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18233)
* 修复 语言服务 uni-app x script区域使用setProperty没有变量提示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18324)
* 修复 语言服务 uni-app x 条件编译代码块置灰不支持pages.json分包写法的Bug [详情](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support?id=%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91%e4%bb%a3%e7%a0%81%e5%9d%97%e7%bd%ae%e7%81%b0)
* 新增 语言服务 uts错误信息提示框添加错误码，点击可跳转至对应的文档 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18231)
* 修复 语言服务 新增或删除uni_modules插件时 uni ext api 功能失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18434)
* 修复 uni-app (x) uts插件 swift文件，未保存代码时，格式化导致代码删除的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17821)
* 修复 uni-app (x) uts插件 kotlin文件，某些情况下，格式化代码提示失败，请检查代码中是否有语法错误的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17824)
* 修复 macOS Bug反馈 复现步骤输入框，粘贴时有时会直接粘到后方编辑器的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12911)
* 修复 4.64版本引发的 markdown内有序列表复制后回车换行，粘贴时闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18002)
* 修复 4.64版本引发的 macOS(Intel)/windows，内置资源管理器大图标查看不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18188)
* 修复 4.64版本引发的 macOS(Arm) 编辑器首次安装，选择喜欢的主题不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18186)
* 修复 4.55版本引发的 macOS(Arm) 工具栏多文件字符搜索没有反应的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18129)
* 修复 4.55版本引发的 macOS(Arm) 电脑屏幕休眠后重新打开电脑，编辑器主视图无法点击的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16829)
* 新增 manifest.json uni-app 项目 安卓/iOS模块配置->Maps，支持百度地图配置
* 【重要】新增 manifest.json uni-app x 项目 iOS、Android增加可视化配置  [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15976)
* 调整 manifest.json uni-app x 项目 鸿蒙App配置中去掉实人认证、uni-push、一键登录模块的勾选，由编译器通过摇树自动识别启用 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-harmony.html)
* 修复 manifest.json uni-app x 项目 iOS自定义storyboard无法选中storyboard.zip压缩包 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18525)
* 优化 manifest.json 配置鸿蒙签名证书，增加证书指纹显示框，以方便用户在开发者后台填报相关信息 [文档](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#signing-configs)
* 修复 manifest.json 新建项目创建同名项目时，弹出选择框并取消后，原项目manifest.json会被更改的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17850)
* 修复 uni-app 4.62版本引发的 在HBuilderX内，运行uni-app-cli Vue2项目编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17535)
* 新增 App真机运行 Android平台，支持无线ADB连接设备 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16395)
* 【重要】新增 App真机运行 Android平台，uni-app x 项目 支持原生联编，方便原生工程和uni-app x混合开发 [文档](https://doc.dcloud.net.cn/uni-app-x/native/debug/android.html)
* 【重要】新增 App真机运行 鸿蒙平台 uni-app x 项目 支持原生联编，方便原生工程和uni-app x混合开发 [文档](https://doc.dcloud.net.cn/uni-app-x/native/debug/harmony.html)
* 新增 App真机运行 在Apple芯片上运行提示安装Rosetta 2 [详情](https://hx.dcloud.net.cn/Tutorial/install/macosx-install-rosetta)
* 新增 App真机运行 鸿蒙平台 uni-app x 项目 支持 x64 平台的鸿蒙模拟器 [文档](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#compatibility)
* 优化 App真机运行 鸿蒙元服务平台运行和打包时允许用户通过自定义环境变量 `NPM_CONFIG_REGISTRY` 使用指定的公共仓库 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18315)
* 修复 App真机运行 改造调试运行鸿蒙元服务时的日志收集方式，以解决由于鸿蒙系统底层调整导致日志收集失败的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18216)
* 修复 App真机运行 改造调试运行鸿蒙元服务时调用鸿蒙工具链的方式，解决由于ascf插件调整导致的分包页面显示空白页的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18218)
* 修复 App真机运行 4.62版本引发的 uni-app 首次运行到自定义基座uts插件缓存无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17904)
* 修复 App真机运行 4.63版本引发的 5+项目在windows系统下无法热更新的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18477)
* 新增 发行 uni-app x 发行到Web、打包App 生成Sourcemap [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18208)
* 新增 发行 鸿蒙平台支持打包 App 资源 [文档](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#publish-resources)
* 新增 发行 鸿蒙平台支持 cli 打包 [文档](https://hx.dcloud.net.cn/cli/pack-app-harmony)
* 新增 发行 鸿蒙平台支持 cli 打包 App 资源 [文档](https://hx.dcloud.net.cn/cli/publish-app-harmony)
* 优化 发行 鸿蒙平台运行和打包时，如果启用了uni-push和一键登录模块而服务尚未开通或者配置参数不足则只报警不阻断 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-harmony.html)
* 调整 uni_modules插件 插件市场 平台兼容性重构 区分uni-app、uni-app x 平台 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18241)

## 4.63.2025042307-alpha
* 修复 uniapp框架的一些Bug

## 4.62.2025041603-alpha
* 调整 安心打包 apktool更新为2.11.1，解决安心打包时android:foregroundServiceType的参数值会被改变的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16895)
* 修复 Git插件 4.61版本引发的 Mac平台上使用Git提交会多打开一个终端的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16952)
* 修复 快速打开和关闭文件时语言服务提示Could not find source file的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16804)
* 修复 语言服务 uni-app x项目对vue文件路径无法转到定义的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16879)
* 优化 语言服务 uni-app x项目对条件编译置灰的代码块悬浮时提示 [详情](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support?id=%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91%e4%bb%a3%e7%a0%81%e5%9d%97%e7%bd%ae%e7%81%b0)

## 4.61.2025040322-alpha
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
* 新增 语言服务 uni-app x项目条件编译支持置灰非活动平台代码块 [详情](https://hx.dcloud.net.cn/Tutorial/Language/language_service_target_support)
* 新增 语言服务 uts插件 支持swift混编时的代码提示 [详情](https://hx.dcloud.net.cn/Tutorial/Language/uts_hybrid_support)
* 新增 语言服务 转到定义支持多结果 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/goto?id=goto-definition)
* 优化 语言服务 uniapp x项目条件编译下，提升转到定义性能
* 修复 语言服务 uni-app x uvue文件使用computed定义的变量，在template区域提示不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15813)
* 新增 uni-app x 鸿蒙平台debug，支持调试uts、uvue、uts插件混编arkts文件 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-harmony.html)
* 新增 uni-app x Android平台debug 支持uvue及uts插件混编kotlin文件的断点调试 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug.html)
* 调整 真机运行插件 内置adb从29.0.4升级到35.0.2（该版本支持无线adb）
* 调整 uni-app (x) 运行到Android 设备列表显示设备品牌和型号
* 调整 uni-app (x) 运行到Android 已安装基座由`卸载安装`调整为`覆盖安装` [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16397)

## 4.57.2025032014-alpha
* 修复 uniapp框架的一些Bug

## 4.54.2025030608-alpha
* 修复 uniapp框架的一些Bug

## 4.53.2025022409-alpha
* 修复 uniapp框架的一些Bug

## 4.52.2025020807-alpha
* 修复 uniapp框架的一些Bug

## 4.51.2025012123-alpha
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

## 4.45.2025010702-alpha
* 修复 语言服务 4.41版本引发的 uniapp项目下打开vue文件时语言服务偶现找不到getOptionsDiagnostics的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14778)
* 修复 macOS 4.29版本引发的 导出wgt勾选对js/nvue文件进行原生混淆导出失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14682)
* 修复 macOS 4.41版本引发的uniapp-cli项目运行到手机，部分电脑因无法获取系统node路径，导致一直卡在编译中的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14754)
* 新增 uni-app 运行到微信/百度/支付宝/抖音小程序开发者工具，支持关闭运行日志回显到HBuilder控制台 [详情](https://uniapp.dcloud.net.cn/tutorial/run/mp-log.html)
* 修复 uni-app 4.41版本引发的 某些情况下，运行到微信小程序无法启动开发者工具的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14830)
* 修复 uni-app 4.41版本引发的 运行到微信小程序，丢失之前保存的编译模式的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14822)
* 调整 HBuilderX设置 运行配置 uni-app编译器设置，node启动内存参数默认值改为3072

## 4.43.2024122419-alpha
* 优化 语言服务 uni-app x 代码提示性能

## 4.42.2024121808-alpha
* 修复 语言服务 4.41版本引发的 在uts中，使用setTimeout时，误报红的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14233)

## 4.41.2024121203-alpha
* 优化 Node插件激活时间
* 修复 新建HBuilder窗口时，某些电脑上状态栏高度异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13755)
* 修复 当打开比较大的压缩文件时，如果错误校验时错误比较多，会导致渲染卡顿的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13769)
* 修复 3.5.3版本引发的 自定义代码块中存在中文, 光标位置不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10900)
* 修复 3.94版本引发的 markdown中的code代码块区域, 折叠不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12767)
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

## 4.36.2024112612-alpha
* 修复 uniapp框架的一些Bug

## 4.35.2024112402-alpha
* 修复 uniapp框架的一些Bug

## 4.34.2024112020-alpha
* 修复 uniapp框架的一些Bug

## 4.33.2024111702-alpha
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

## 4.32.2024110103-alpha
* 修复 4.31版本引发 cli打包提示证书别名不能为空的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11426)
* 修复 重启hx后的切换视图文件顺序和关闭时不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11094)
* 修复 语言服务 uts插件iOS平台在windows电脑上文件查找引用和触发函数签名时状态栏报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11428)
* 优化 uniapp 运行到鸿蒙时如果检测到运行在非ARM64平台，则弹框提示该平台的鸿蒙模拟器因不支持JSVM而不可用于调试运行
* 优化 uniapp 优化鸿蒙内置模板升级时与harmony-configs中用户定制内容的冲突解决策略，避免由用户手工合并 [详情](https://uniapp.dcloud.net.cn/tutorial/run/run-app-harmony.html#configs)

## 4.31.2024102414-alpha
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
* 新增 uni-app manifest.json 可视化界面增加鸿蒙配置
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
* 修复 4.02版引出的 uni-app 控制台打印的日志跳转打开文件后不能使用json转type功能的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=999)


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