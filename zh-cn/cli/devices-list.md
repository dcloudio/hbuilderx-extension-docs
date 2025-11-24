# CLI 获取设备列表

> HBuilderX cli 命令行工具

通过 CLI 获取可用的设备列表。

## 命令说明

### devices list

获取设备列表

**用法：**

```shell
./cli devices list --help
```

**参数：**

| 参数名称   | 描述                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------- |
| --help     | 显示 cli 命令帮助                                                                             |
| --platform | 设备类型，取值：android、ios-iPhone、ios-simulator、mp-harmony、app-harmony，默认值为 android |

**使用示例：**

```shell
# 获取Android设备列表（默认）
./cli devices list

# 获取Android设备列表（指定平台）
./cli devices list --platform android

# 获取iPhone设备列表
./cli devices list --platform ios-iPhone

# 获取iOS模拟器列表
./cli devices list --platform ios-simulator

# 获取鸿蒙元服务设备列表
./cli devices list --platform mp-harmony

# 获取鸿蒙App设备列表
./cli devices list --platform app-harmony
```
