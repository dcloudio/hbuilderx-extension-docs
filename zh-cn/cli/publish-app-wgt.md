# CLI 原生App-制作应用wgt包@wgt

> HBuilderX 3.4.3-alpha，支持使用CLI导出wgt包。

通过此种方式，可在命令行或其它CI工具中，完成uni-app、Wap2App、5+App项目的wgt包导出。

## CLI命令语法@cmd

```shell
# 导出wgt包，默认选项
cli publish --platform APP --type wgt --project 项目名称

# 导出wgt包，对配置的js/nvue文件进行原生混淆
cli publish --platform APP --type wgt --project 项目名称 --confuse true

# 导出wgt包，自定义导出路径和名称
cli publish --platform APP --type wgt --project 项目名称 --path 导出路径 --name 导出名称
```

| 参数       | 说明                                                 |
| ---------- | ---------------------------------------------------- |
| --platform | 必填，[APP] 原生App                                 |
| --type     | 必填，[wgt] 制作应用wgt包                            |
| --project  | 必填，项目名称                                       |
| --name     | 导出名称(不指定默认为：AppID.wgt)                    |
| --path     | 导出路径(不指定默认为：项目根路径/unpackage/release) |
| --confuse  | 对配置的js/nvue文件进行原生混淆；布尔值，默认为：false)   |
