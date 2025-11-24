# CLI uni-app 运行 - 小程序@launch-miniProgram

> HBuilderX cli 命令行工具

通过 CLI 运行到各平台小程序的 uni-app 应用，支持微信、支付宝、百度、字节跳动、QQ、360、京东、快手、飞书、小红书、鸿蒙元服务、快应用等平台。

## 命令说明

### launch mp-weixin

运行到小程序-微信

**用法：**

```shell
./cli launch mp-weixin --help
```

**参数：**

| 参数名称            | 描述                                                            |
| ------------------- | --------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                               |
| --project           | HBuilder X 里导入的项目名称或绝对路径                           |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false         |
| --runtime-log       | 回显运行时日志，取值：true 或 false，默认值为 false             |

**使用示例：**

```shell
# 运行到微信小程序
./cli launch mp-weixin --project 项目名称

# 运行到微信小程序（编译模式）
./cli launch mp-weixin --project 项目名称 --compile true

# 运行到微信小程序（回显运行时日志）
./cli launch mp-weixin --project 项目名称 --runtime-log true

# 运行到微信小程序（编译错误后继续运行）
./cli launch mp-weixin --project 项目名称 --continue-on-error true

# 运行到微信小程序（组合参数：编译模式 + 回显运行时日志）
./cli launch mp-weixin --project 项目名称 --compile true --runtime-log true
```

### launch mp-alipay

运行到小程序-支付宝(仅适用于 uni-app)

**用法：**

```shell
./cli launch mp-alipay --help
```

**参数：**

| 参数名称            | 描述                                                            |
| ------------------- | --------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                               |
| --project           | HBuilder X 里导入的项目名称或绝对路径                           |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false         |
| --runtime-log       | 回显运行时日志，取值：true 或 false，默认值为 false             |

**使用示例：**

```shell
# 运行到支付宝小程序
./cli launch mp-alipay --project 项目名称

# 运行到支付宝小程序（编译模式）
./cli launch mp-alipay --project 项目名称 --compile true

# 运行到支付宝小程序（回显运行时日志）
./cli launch mp-alipay --project 项目名称 --runtime-log true

# 运行到支付宝小程序（编译错误后继续运行）
./cli launch mp-alipay --project 项目名称 --continue-on-error true

# 运行到支付宝小程序（组合参数：编译模式 + 回显运行时日志）
./cli launch mp-alipay --project 项目名称 --compile true --runtime-log true
```

### launch mp-baidu

运行到小程序-百度(仅适用于 uni-app)

**用法：**

```shell
./cli launch mp-baidu --help
```

**参数：**

| 参数名称            | 描述                                                            |
| ------------------- | --------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                               |
| --project           | HBuilder X 里导入的项目名称或绝对路径                           |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false         |
| --runtime-log       | 回显运行时日志，取值：true 或 false，默认值为 false             |

**使用示例：**

```shell
# 运行到百度小程序
./cli launch mp-baidu --project 项目名称

# 运行到百度小程序（编译模式）
./cli launch mp-baidu --project 项目名称 --compile true

# 运行到百度小程序（回显运行时日志）
./cli launch mp-baidu --project 项目名称 --runtime-log true

# 运行到百度小程序（编译错误后继续运行）
./cli launch mp-baidu --project 项目名称 --continue-on-error true

# 运行到百度小程序（组合参数：编译模式 + 回显运行时日志）
./cli launch mp-baidu --project 项目名称 --compile true --runtime-log true
```

### launch mp-toutiao

运行到小程序-抖音(仅适用于 uni-app)

**用法：**

```shell
./cli launch mp-toutiao --help
```

**参数：**

| 参数名称            | 描述                                                            |
| ------------------- | --------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                               |
| --project           | HBuilder X 里导入的项目名称或绝对路径                           |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false         |
| --runtime-log       | 回显运行时日志，取值：true 或 false，默认值为 false             |

**使用示例：**

```shell
# 运行到抖音小程序
./cli launch mp-toutiao --project 项目名称

# 运行到抖音小程序（编译模式）
./cli launch mp-toutiao --project 项目名称 --compile true

# 运行到抖音小程序（回显运行时日志）
./cli launch mp-toutiao --project 项目名称 --runtime-log true

# 运行到抖音小程序（编译错误后继续运行）
./cli launch mp-toutiao --project 项目名称 --continue-on-error true

# 运行到抖音小程序（组合参数：编译模式 + 回显运行时日志）
./cli launch mp-toutiao --project 项目名称 --compile true --runtime-log true
```

### launch mp-qq

运行到小程序-QQ(仅适用于 uni-app)

**用法：**

```shell
./cli launch mp-qq --help
```

**参数：**

| 参数名称            | 描述                                                            |
| ------------------- | --------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                               |
| --project           | HBuilder X 里导入的项目名称或绝对路径                           |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false         |

**使用示例：**

```shell
# 运行到QQ小程序
./cli launch mp-qq --project 项目名称

# 运行到QQ小程序（编译模式）
./cli launch mp-qq --project 项目名称 --compile true

# 运行到QQ小程序（编译错误后继续运行）
./cli launch mp-qq --project 项目名称 --continue-on-error true

# 运行到QQ小程序（组合参数：编译模式 + 编译错误后继续运行）
./cli launch mp-qq --project 项目名称 --compile true --continue-on-error true
```

### launch mp-360

运行到小程序-360(仅适用于 uni-app)

**用法：**

```shell
./cli launch mp-360 --help
```

**参数：**

| 参数名称            | 描述                                                            |
| ------------------- | --------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                               |
| --project           | HBuilder X 里导入的项目名称或绝对路径                           |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false         |

**使用示例：**

```shell
# 运行到360小程序
./cli launch mp-360 --project 项目名称

# 运行到360小程序（编译模式）
./cli launch mp-360 --project 项目名称 --compile true

# 运行到360小程序（编译错误后继续运行）
./cli launch mp-360 --project 项目名称 --continue-on-error true

# 运行到360小程序（组合参数：编译模式 + 编译错误后继续运行）
./cli launch mp-360 --project 项目名称 --compile true --continue-on-error true
```

### launch mp-jd

运行到小程序-京东(仅适用于 uni-app)

**用法：**

```shell
./cli launch mp-jd --help
```

**参数：**

| 参数名称            | 描述                                                            |
| ------------------- | --------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                               |
| --project           | HBuilder X 里导入的项目名称或绝对路径                           |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false         |

**使用示例：**

```shell
# 运行到京东小程序
./cli launch mp-jd --project 项目名称

# 运行到京东小程序（编译模式）
./cli launch mp-jd --project 项目名称 --compile true

# 运行到京东小程序（编译错误后继续运行）
./cli launch mp-jd --project 项目名称 --continue-on-error true

# 运行到京东小程序（组合参数：编译模式 + 编译错误后继续运行）
./cli launch mp-jd --project 项目名称 --compile true --continue-on-error true
```

### launch mp-kuaishou

运行到小程序-快手(仅适用于 uni-app)

**用法：**

```shell
./cli launch mp-kuaishou --help
```

**参数：**

| 参数名称            | 描述                                                            |
| ------------------- | --------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                               |
| --project           | HBuilder X 里导入的项目名称或绝对路径                           |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false         |

**使用示例：**

```shell
# 运行到快手小程序
./cli launch mp-kuaishou --project 项目名称

# 运行到快手小程序（编译模式）
./cli launch mp-kuaishou --project 项目名称 --compile true

# 运行到快手小程序（编译错误后继续运行）
./cli launch mp-kuaishou --project 项目名称 --continue-on-error true

# 运行到快手小程序（组合参数：编译模式 + 编译错误后继续运行）
./cli launch mp-kuaishou --project 项目名称 --compile true --continue-on-error true
```

### launch mp-lark

运行到小程序-飞书(仅适用于 uni-app)

**用法：**

```shell
./cli launch mp-lark --help
```

**参数：**

| 参数名称            | 描述                                                            |
| ------------------- | --------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                               |
| --project           | HBuilder X 里导入的项目名称或绝对路径                           |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false         |

**使用示例：**

```shell
# 运行到飞书小程序
./cli launch mp-lark --project 项目名称

# 运行到飞书小程序（编译模式）
./cli launch mp-lark --project 项目名称 --compile true

# 运行到飞书小程序（编译错误后继续运行）
./cli launch mp-lark --project 项目名称 --continue-on-error true

# 运行到飞书小程序（组合参数：编译模式 + 编译错误后继续运行）
./cli launch mp-lark --project 项目名称 --compile true --continue-on-error true
```

### launch mp-xhs

运行到小程序-小红书(仅适用于 uni-app)

**用法：**

```shell
./cli launch mp-xhs --help
```

**参数：**

| 参数名称            | 描述                                                            |
| ------------------- | --------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                               |
| --project           | HBuilder X 里导入的项目名称或绝对路径                           |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false         |

**使用示例：**

```shell
# 运行到小红书小程序
./cli launch mp-xhs --project 项目名称

# 运行到小红书小程序（编译模式）
./cli launch mp-xhs --project 项目名称 --compile true

# 运行到小红书小程序（编译错误后继续运行）
./cli launch mp-xhs --project 项目名称 --continue-on-error true

# 运行到小红书小程序（组合参数：编译模式 + 编译错误后继续运行）
./cli launch mp-xhs --project 项目名称 --compile true --continue-on-error true
```

### launch mp-harmony

运行到鸿蒙元服务(仅适用于 uni-app)

**用法：**

```shell
cli launch mp-harmony --help
```

**参数：**

| 参数名称            | 描述                                                                         |
| ------------------- | ---------------------------------------------------------------------------- |
| --help              | cli 命令帮助                                                                 |
| --project           | HBuilder X 里导入的项目绝对路径或目录名                                      |
| --target            | 指定要使用的设备序列号，默认使用第一个设备，可通过 devices list 获取设备列表 |
| --cleanCache        | 清理构建缓存，取值：true 或 false，默认值为 false                            |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false              |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false                      |

**使用示例：**

```shell
# 运行到鸿蒙元服务
cli launch mp-harmony --project 项目名称

# 运行到鸿蒙元服务（指定设备）
cli launch mp-harmony --project 项目名称 --target 设备序列号

# 运行到鸿蒙元服务（清理构建缓存）
cli launch mp-harmony --project 项目名称 --cleanCache true

# 运行到鸿蒙元服务（编译模式运行）
cli launch mp-harmony --project 项目名称 --compile true

# 运行到鸿蒙元服务（编译错误后继续运行）
cli launch mp-harmony --project 项目名称 --continue-on-error true

# 运行到鸿蒙元服务（组合参数：指定设备 + 清理构建缓存）
cli launch mp-harmony --project 项目名称 --target 设备序列号 --cleanCache true

# 运行到鸿蒙元服务（组合参数：编译模式 + 清理构建缓存）
cli launch mp-harmony --project 项目名称 --compile true --cleanCache true
```

### launch quickapp-webview-huawei

运行到快应用-华为(仅适用于 uni-app)

**用法：**

```shell
./cli launch quickapp-webview-huawei --help
```

**参数：**

| 参数名称            | 描述                                                            |
| ------------------- | --------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                               |
| --project           | HBuilder X 里导入的项目名称或绝对路径                           |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false         |

**使用示例：**

```shell
# 运行到华为快应用
./cli launch quickapp-webview-huawei --project 项目名称

# 运行到华为快应用（编译模式）
./cli launch quickapp-webview-huawei --project 项目名称 --compile true

# 运行到华为快应用（编译错误后继续运行）
./cli launch quickapp-webview-huawei --project 项目名称 --continue-on-error true

# 运行到华为快应用（组合参数：编译模式 + 编译错误后继续运行）
./cli launch quickapp-webview-huawei --project 项目名称 --compile true --continue-on-error true
```

### launch quickapp-webview-union

运行到快应用-联盟(仅适用于 uni-app)

**用法：**

```shell
./cli launch quickapp-webview-union --help
```

**参数：**

| 参数名称            | 描述                                                            |
| ------------------- | --------------------------------------------------------------- |
| --help              | 显示 cli 命令帮助                                               |
| --project           | HBuilder X 里导入的项目名称或绝对路径                           |
| --compile           | 编译模式运行（只编译代码），取值：true 或 false，默认值为 false |
| --continue-on-error | 编译错误后继续运行，取值：true 或 false，默认值为 false         |

**使用示例：**

```shell
# 运行到快应用联盟
./cli launch quickapp-webview-union --project 项目名称

# 运行到快应用联盟（编译模式）
./cli launch quickapp-webview-union --project 项目名称 --compile true

# 运行到快应用联盟（编译错误后继续运行）
./cli launch quickapp-webview-union --project 项目名称 --continue-on-error true

# 运行到快应用联盟（组合参数：编译模式 + 编译错误后继续运行）
./cli launch quickapp-webview-union --project 项目名称 --compile true --continue-on-error true
```
