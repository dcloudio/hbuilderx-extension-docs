> HBuilderX cli命令行工具, 僅適用於HBuilderX 3.1.5+版本

開發者可以通過cli命令行指示HBuilderX進行啓動、打包、登錄等操作。

#### cli程序@cli

命令行工具所在位置:

- Windows: HBuilderX安裝目錄根目錄, `cli.exe`
- MacOSX
    - 正式版 `/Applications/HBuilderX.app/Contents/MacOS/cli`
    - Alpha版 `/Applications/HBuilderX-Alpha.app/Contents/MacOS/cli`
- Linux: HBuilderX安裝目錄根目錄, `cli`

特別注意：本文所有命令示例，均以cli代替cli.exe，請根據不同操作系統，實際應用。

此外，您可以將`cli`加入到`環境變量`，這樣您就可以在任意目錄、任意終端上，隨時隨地調用cli， 而無需通過輸入cli絕對路徑的方式來使用它。

[配置環境變量](/cli/env)

#### Linux CLI

2025年1月初，推出了Linux HBuilderX CLI，歡迎大家試用反饋。 [詳情](https://ask.dcloud.net.cn/article/41469)

cli的用途是讓開發者可以在linux服務器上調用HBuilderX cli，來實現程序化操作打包app、上傳unicloud雲函數等，爲持續集成、自動化發佈、類saas業務的自動化給客戶部署等業務提供支持。

請注意是cli程序，不是HBuilderX可視化編輯器。僅適用於Linux命令行調用。

目前我們僅在Ubuntu系統上進行了測試，並沒有在其它Linux發行版上測試，如有問題，請及時反饋。

擴展：[Linux 安裝插件市場插件](/cli/linux-install-market-plugin)

#### 查看幫助文檔

> 查看幫助文檔，需要先啓動HBuilderX。

```shell
cli --help
cli help
```

#### 查看cli版本號

```shell
cli ver
```

#### 啓動/關閉HBuilderX

```shell
# 啓動HBuilderX程序
cli open

# 關閉HBuilderX程序
cli app quit
```

#### 更多命令

|cli命令												|詳情													|
|--															|--														|
|用戶賬號操作，登錄、退出等			|[詳情](/cli/user)						|
|文件操作，打開文件並跳轉指定行列				|[詳情](/cli/file)					|
|項目操作，導入、關閉項目				|[詳情](/cli/project)					|
|app打包												|[詳情](/cli/pack)						|
|uniCloud操作，比如雲函數上傳等	|[詳情](/cli/uniCloud)				|
|uniCloud 前端網頁託管					|[詳情](/cli/uniCloud-hosting)|
