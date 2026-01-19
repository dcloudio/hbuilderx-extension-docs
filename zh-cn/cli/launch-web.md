# CLI uni-app 运行 - WEB@launch-web

> 需HBuilderX 5.0+ 版本

> 您也可以通过 npm 包使用此功能：[@dcloudio/hbuilderx-cli](https://www.npmjs.com/package/@dcloudio/hbuilderx-cli)

通过 CLI 运行到 Web 或手机 H5 的 uni-app 应用。[HBuilderX CLI](/cli/README?id=cli)

## 命令说明

### launch web

运行到 Web 或手机 H5

**用法：**

```shell
./cli launch web --help
```

**参数：**

| 参数名称            | 描述                                                                       |
| ------------------- | -------------------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                                          |
| --project           | HBuilder X 里导入的项目名称或绝对路径                                      |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false            |
| --browser           | 浏览器类型，取值：Built、Chrome、Firefox、Ie、Edge、Safari，默认值为 Built |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false                    |

**使用示例：**

```shell
# 运行到Web（使用默认浏览器）
./cli launch web --project 项目名称

# 运行到Web（指定Chrome浏览器）
./cli launch web --project 项目名称 --browser Chrome

# 运行到Web（指定Firefox浏览器）
./cli launch web --project 项目名称 --browser Firefox

# 运行到Web（指定Edge浏览器）
./cli launch web --project 项目名称 --browser Edge

# 运行到Web（指定Safari浏览器）
./cli launch web --project 项目名称 --browser Safari

# 运行到Web（指定IE浏览器）
./cli launch web --project 项目名称 --browser Ie

# 运行到Web（编译模式运行）
./cli launch web --project 项目名称 --compile true

# 运行到Web（编译错误后继续运行）
./cli launch web --project 项目名称 --continue-on-error true

# 运行到Web（组合参数：指定Chrome浏览器 + 编译模式）
./cli launch web --project 项目名称 --browser Chrome --compile true

# 运行到Web（组合参数：编译模式 + 编译错误后继续运行）
./cli launch web --project 项目名称 --compile true --continue-on-error true
```

## 通过npm scripts使用CLI@npm

我们需要在项目中安装 [@dcloudio/hbuilderx-cli](https://www.npmjs.com/package/@dcloudio/hbuilderx-cli),它是一个桥梁，让我们可以通过命令行来调用 HBuilderX 的强大功能（如启动测试流程）。

#### 添加 npm 脚本支持

```shell
# 首先，请确保你的项目根目录下有 package.json 文件。如果没有，可以通过以下命令快速生成：
npm init -y

# 然后，安装 hbuilderx-cli 作为开发依赖：
npm install @dcloudio/hbuilderx-cli --save-dev
```

#### 使用npm命令运行应用

```shell
# 运行到 Web（使用默认浏览器）
npm run launch:web

# 运行到 Web（指定Chrome浏览器）
npm run launch:web -- --browser Chrome

# 运行到 Web（编译模式运行）
npm run launch:web -- --compile true
```
