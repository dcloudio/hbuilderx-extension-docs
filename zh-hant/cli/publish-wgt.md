# CLI 原生App-制作應用wgt包@wgt

> HBuilderX 3.4.3-alpha，支持使用CLI導出wgt包。

通過此種方式，可在命令行或其它CI工具中，完成uni-app、Wap2App、5+App項目的wgt包導出。

## CLI命令語法@cmd

```shell
# 導出wgt包，默認選項
cli publish --platform wgt --project 項目名稱

# 導出wgt包，對配置的js/nvue文件進行原生混淆
cli publish --platform wgt --project 項目名稱 --confuse true

# 導出wgt包，自定義導出路徑和名稱
cli publish --platform wgt --project 項目名稱 --path 導出路徑 --name 導出名稱
```

| 參數       | 說明                                                         |
| ---------- | ------------------------------------------------------------ |
| --platform | 必填，[wgt] 原生App-制作應用wgt包                            |
| --project  | 必填，項目名稱                                               |
| --name     | 導出名稱(不指定默認爲：AppID.wgt)                                |
| --path     | 導出路徑(不指定默認爲：項目根路徑/unpackage/release)         |
| --confuse  | [true|false] 對配置的js/nvue文件進行原生混淆(默認爲：false) |
