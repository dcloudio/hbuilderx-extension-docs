# 通过软链优化日常开发体验

**注意**: 软链功能目前仅支持 HBuilderX 4.21.0 及以上版本
* 通过软链功能, 可以将多个 uni-app 项目的页面、组件、API 等目录软链到当前项目, 方便开发者在一个项目中同时开发多个项目的页面、组件、API 等, 提高开发效率。
* 目前只支持uniappx项目

## 使用方法

1. 通过 HBuilderX 新建一个默认的 uni-app x (开发鸿蒙的话, 选 uni-app vue3)项目模板
2. 在项目根目录创建`link.json`, 修改为本地的仓库路径地址

```json
{
  // 当前项目目录与源目录的软链映射关系表，key 为当前项目的目录结构，value 为源目录
  "uni_modules": ["/Users/xxx/uni-app/api"], // uni-app 主仓库 uni_modules 实现的 api 根目录
  "components": ["/Users/xxx/hello-uni-app-x/components"], // hello uni-app x 根目录的 components 目录
  "pages/API": ["/Users/xxx/hello-uni-app-x/pages/API"] // hello uni-app x 的 API 页面根目录
  // ... 其他自定义映射
}
```

3. 在命令行切换到该项目根目录(HBuilderX 中右键项目`使用命令行窗口打开打开所在目录`)
4. 执行命令`npx @dcloudio/toolkit link page-head system-info --clear`，(可以修改`system-info`为自己想要软链的 api 或页面名称，可模糊匹配，也支持传递多个)
   > 执行后，该项目会软链 hello uni-app x 仓库的`pages/API/get-system-info/get-system-info`、`components/page-head/page-head.vue`及 uni-app 仓库的`uni-getSystemInfo`
5. 运行当前项目，即可修改调试对应示例页面及 API 源码，修改测试完成后，即可在原有仓库提交改动。

### 更多命令参数说明

- `--clear` 可以清空之前的软链和 pages.json 配置，方便根据 link 命令来重新初始化
> 示例：`npx @dcloudio/toolkit link --clear`，也可以同时指定新的需要软链的目录
- `--config` 可以指定`link.json`文件路径，解决多项目共享相同`link.json`的问题
