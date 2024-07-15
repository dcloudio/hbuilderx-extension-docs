# 通过软链优化日常开发体验

**注意**: 软链功能目前仅支持 HBuilderX 4.21.0 及以上版本
* 通过软链功能, 可以将多个 uni-app 项目的页面、组件、API 等目录软链到当前项目, 方便开发者在一个项目中同时开发多个项目的页面、组件、API 等, 提高开发效率。
* 目前支持uniapp项目和uniappx项目

## 使用方法

1. 准备一个已有的 **uniappx** 项目
    * 此处使用项目 `hello-uni-app-x` 和 `uni-app` 作为示例
    * `hello-uni-app` 项目地址: <https://gitcode.net/dcloud/hello-uni-app-x.git>
    * `uni-app` 项目地址: <http://git.dcloud.io/uni-app-x/uni-app.git>
2. 通过 **HBuilderX** 新建一个默认的 **uniappx** 项目
3. 在项目根目录创建 `link.json` 文件, 修改其内容为软链映射关系表

```json
{
    // 当前项目目录与源目录的软链映射关系表
    // key 为当前项目的目录结构，value 为源目录
    "uni_modules": ["/Users/xxx/uni-app/api"], // uni-app 主仓库 uni_modules 实现的 api 根目录
    "components": ["/Users/xxx/hello-uni-app-x/components"], // hello uni-app x 根目录的 components 目录
    "pages/API": ["/Users/xxx/hello-uni-app-x/pages/API"] // hello uni-app x 的 API 页面根目录
    // ... 其他自定义映射
}
```

3. 使用命令行工具切换到该项目根目录(HBuilderX 中右键项目`使用命令行窗口打开打开所在目录`)
4. 执行命令`npx @dcloudio/toolkit link page-head system-info --clear`
    * 如果出现无法修改文件的情况, 请使用管理员模式或者使用`sudo`命令
    * 可以修改`system-info`为自己想要软链的 api 或页面名称，可模糊匹配，也支持传递多个
    > 执行后，该项目会软链 hello uni-app 仓库的`pages/API/get-system-info/get-system-info`、`components/page-head/page-head.vue`及 uni-app 仓库的`uni-getSystemInfo`
5. 运行当前项目，即可修改调试对应示例页面及 API 源码，修改测试完成后，即可在原有仓库提交改动。

> **注意**: uniapp项目的使用方式和uniappx项目的使用方式一致，只是源目录不同
> uniapp项目可以使用 **HBuilderX** 在项目模板中获取 `Hello uniapp` 项目作为源目录

### 更多命令参数说明

- `--clear` 可以清空之前的软链和 pages.json 配置，方便根据 link 命令来重新初始化
> 示例：`npx @dcloudio/toolkit link --clear`，也可以同时指定新的需要软链的目录
- `--config` 可以指定`link.json`文件路径，解决多项目共享相同`link.json`的问题
> 示例：`npx @dcloudio/toolkit link --config /Users/xxx/uni/link.json`
