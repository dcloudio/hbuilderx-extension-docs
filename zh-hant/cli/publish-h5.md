# CLI 發行uni-app到H5@h5

> HBuilderX 3.3.7-alpha，支持使用CLI發行uni-app項目到H5。

通過此種方式，可在命令行或其它CI工具中，完成uni-app項目到H5的編譯、上傳。

## 命令語法@cmd

```shell
# 僅編譯uni-app項目到H5，不上傳uniCloud前端網頁託管
cli publish --platform h5 --project 項目名稱

# 編譯uni-app項目到H5，並上傳到前端網頁託管
cli publish --platform h5 --project 項目名稱 --webHosting true --provider aliyun --spaceId xxxxxxx
```

|參數			|說明																	|
|--				|--																		|
|--platform		|必填，發行平臺(MP-WEIXIN)												|
|--project		|必填，項目名稱															|
|--ssr			|ssr發行，值爲 ture 時使用，默認爲 false(項目使用vue3時配置此項才生效)	|
|--webDomain	|網站域名(發行類型爲H5時可配置此項)										|
|--webTitle		|網站標題(發行類型爲H5時可配置此項，不指定默認爲項目名稱)				|
|--webHosting	|前端網頁託管，值爲 true 時使用，默認爲 false							|
|--provider		|uniCloud 服務商代號(當前僅支持aliyun,不填寫默認爲aliyun),不支持騰訊雲	|
|--spaceId		|uniCloud 雲空間id												|

注意事项：使用CLI命令，上传文件到前端网页托管，如果云端已存在此文件，会使用本地文件覆盖云端的文件。

# 拓展@expand

- [前端網頁託管功能詳情](https://uniapp.dcloud.io/uniCloud/hosting)