# CLI uni-app 發行 - WEB@h5

> HBuilderX cli 命令行工具

通過 CLI 發行 uni-app 項目到 H5，支持編譯、上傳等操作。

## 命令說明

### publish h5

發行到 Web/H5

**參數：**

| 參數          | 說明                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| --platform    | 必填，發行平臺(H5)（HBuilderX 4.67-alpha+ 支持 web）                      |
| --project     | 必填，項目名稱                                                            |
| --ssr         | SSR 發行，值爲 true 時使用，默認爲 false(項目使用 vue3 時配置此項才生效)  |
| --ssrHost     | SSR 發行時，網頁託管的服務商配置多個域名的情況下，需指定域名地址（4.51+） |
| --ssrProvider | SSR 發行時，項目下存在多個 uniCloud 服務商，需指定服務商代號（4.51+）     |
| --webDomain   | 網站域名(發行類型爲 H5 時可配置此項)                                      |
| --webTitle    | 網站標題(發行類型爲 H5 時可配置此項，不指定默認爲項目名稱)                |
| --webHosting  | 前端網頁託管，值爲 true 時使用，默認爲 false                              |
| --provider    | uniCloud 服務商代號[aliyun、alipay、tcb]（4.51 之前版本只支持 aliyun）    |
| --spaceId     | uniCloud 雲空間 id                                                        |

**使用示例：**

```shell
# 僅編譯uni-app項目到H5，不上傳uniCloud前端網頁託管
cli publish --platform h5 --project 項目名稱

# 編譯uni-app項目到H5，並上傳到前端網頁託管
cli publish --platform h5 --project 項目名稱 --webHosting true --provider aliyun --spaceId xxxxxxx

# 編譯uni-app項目到H5，自定義網站域名和標題
cli publish --platform h5 --project 項目名稱 --webDomain 域名地址 --webTitle 網站標題

# 編譯uni-app項目到H5，SSR發行
cli publish --platform h5 --project 項目名稱 --ssr true

# 編譯uni-app項目到H5，SSR發行並指定域名和服務商
cli publish --platform h5 --project 項目名稱 --ssr true --ssrHost 域名地址 --ssrProvider aliyun

# 編譯uni-app項目到H5，組合參數：前端網頁託管 + 自定義域名標題
cli publish --platform h5 --project 項目名稱 --webHosting true --provider aliyun --spaceId xxxxxxx --webDomain 域名地址 --webTitle 網站標題

# 發行到Web（HBuilderX 4.67-alpha+）
cli publish web --project 項目名稱

# 發行到Web並上傳到前端網頁託管（HBuilderX 4.67-alpha+）
cli publish web --project 項目名稱 --webHosting true --provider aliyun --spaceId xxxxxxx
```

**注意事項：**

> HBuilderX 4.67-alpha 開始 platform 支持 web 平臺

> 使用 CLI 命令，上傳文件到前端網頁託管，如果雲端已存在此文件，會使用本地文件覆蓋雲端的文件。

**擴展閱讀：**

-   [前端網頁託管功能詳情](https://uniapp.dcloud.io/uniCloud/hosting)
