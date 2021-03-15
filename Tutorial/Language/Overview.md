> HBuilderX的代码提示系统很庞大，支持多种语法提示模型。

#### 内置语法库
- web项目有内置的html、js、css语法库
- App项目有内置的plus扩展语法库
- uni-app项目有内置的uni-app语法库
- 微信小程序、快应用等项目也有对应的内置语法库

#### js框架语法库（sdocml格式）

HBuilderX中，在可以输入js的文件，比如js、html等文件里，（不含vue、ts），底部状态栏有“语法提示库”，可以加载内置的框架语法库。

<img src="/static/snapshots/tutorial/lang_1.png" />

其中node.js也是作为一种框架语法而存在的。
勾选相应js框架语法后，js区域即可提示相应语法（初次勾选需要延时几秒后才能使用）

该选择是项目级的，一旦勾选后，整个项目下可以写js的地方都会加载。
如果文件是单独打开，没有在HBuilderX左侧的项目管理器中，则无法使用本功能。

如果HBuilderX能检测到项目下有jquery或mui等常用框架，也会自动给这个项目挂载语法提示库。但有时可能检测不准，需要开发者手动引入。

#### d.ts

很多框架都内置了d.ts语法提示库。HBuilderX完整支持d.ts的语法提示。
如果项目下有某个框架的d.ts文件，HBuilderX则可以提示这个框架的语法提示。

#### jsdoc+
jsdoc是以注释方式声明方法、参数、属性，HBuilderX提供了经过扩展的jsdoc+，可实现强大的语法提示，详见：[https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129)

<img src="/static/snapshots/tutorial/lang_2.png" style="zoom:50%;" />

#### vue doc
vue组件开发者，如果想给组件使用者提供更好的使用方式，应该给组件写vue doc。
vue doc是一种类似jsdoc的方式，通过在注释里描述组件的方法、参数、属性。

详见：[vue doc](https://hx.dcloud.net.cn/Tutorial/Language/vuedoc)

#### 兼容vscode vetur插件中的vue规范
一些vue的组件库，已经按照vetur规范制作语法提示库，比如Element UI、Onsen UI、Bootstrap Vue等框架。
这些框架npm安装是在node_module下会自带一个json语法库，或在HBuilderX新建模板中选择element ui模板安装也会包含该库。有了这个语法库，就可以直接代码提示。如下图

<img src="/static/snapshots/tutorial/lang_3.png" style="zoom:50%;"/>

#### 代码块
HBuilderX支持自定义代码块，在菜单工具-代码块设置中可自行扩展。
代码块数据格式兼容vscode，并扩展了更多丰富设置。对于提高开发效率帮助很大。