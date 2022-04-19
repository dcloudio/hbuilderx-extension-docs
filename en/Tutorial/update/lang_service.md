# HBuilderX 语言服务重大调整

- 语言服务由Java调整为Node
- App打包，Java按需调用，不再常驻后台。

### 语言服务说明

**改进：**
- 更好的支持typescript（独立typescript项目、vue中typescript）
- 更完善的支持d.ts（d.ts解析、types自动下载），更好的支持node_modules的代码提示等相关功能
- 完善（vue标签、easycom组件、css、less、scss、ts）的Hover支持
- JS支持自动导包
- JS import {}.. from '|'或require('|')时自动提示已安装的npm模块名
- JS完善对象解构支持（代码提示、转到定义、Hover）
- emmet支持代码提示预览
- uniapp-cli项目按照对应的uniapp版本进行代码提示
- 修复easycom组件某些情况下提示不及时的问题
- API可转到定义到对应的d.ts
- uni-app manifest.json 源码视图 支持代码提示
- HBuilderX 设置 settings.json 源码视图 支持代码提示

**调整：**
- 语法库数据源换成了vscode的数据源
- HTML下的script仅提示和转到定义当前文件引用的js内定义的变量和函数，不再提示项目下所有全局的变量和函数
- 【全提示】代码提示时不再提示项目下的所有API列表