# 版本要求
> HBuilderX 版本需 ≥ 4.36

# 问题原因

Node.js 支持通过 Node-API (N-API) 或 V8 的 Native Addons 编写和加载 C++ 扩展。在HBuilder X中运行uni app项目使用的是内置的Node.js。
依赖了C++扩展的三方模块，在使用本地的Node.js安装项目依赖，如果和HBuilder X内置的Node.js的版本不一致，会有可能导致运行失败。此时需要使用内置的npm来安装项目依赖。

# 功能入口

非cli项目，在项目管理中项目下的package.json文件上右键会出现，使用内置的npm安装依赖，点击会拉起终端执行安装依赖。
![](installDependencies_files/1.jpg)

**注意**

cli项目从HBuilder X 4.36版本调整为使用本地的Node.js执行编译，所以不存在上述问题。
