# cli config

> HBuilderX 5.21+ 支持 `cli config get`、`cli config set`。

`cli config` 用于通过命令行读取或设置 HBuilderX 配置项，适合在持续集成、Linux CLI 等自动化场景中预先写入运行、发行所需配置。

执行命令前，请先启动 HBuilderX。

## 获取配置项

```shell
cli config get --key <配置项Key>
```

参数说明：

| 参数 | 说明 |
| --- | --- |
| `--key` | 配置项的 Key |

示例：

```shell
cli config get --key uts-development-android.gradleHome
```

## 设置配置项

```shell
cli config set --key <配置项Key> --value <配置项值> [--type <值类型>]
```

参数说明：

| 参数 | 说明 |
| --- | --- |
| `--key` | 配置项的 Key |
| `--value` | 需要设置的配置项值 |
| `--type` | 配置项的值类型，可选值为 `number`、`boolean`、`string`，不填默认为 `string` |

示例：

```shell
# 设置字符串配置项
cli config set --key uts-development-android.gradleHome --value /opt/gradle/gradle-8.7/bin/gradle

# 设置数字配置项
cli config set --key editor.fontSize --value 16 --type number

# 设置布尔配置项
cli config set --key editor.wordWrap --value true --type boolean
```

更多说明请参考：[Linux CLI 环境配置](/cli/linux-env)。
