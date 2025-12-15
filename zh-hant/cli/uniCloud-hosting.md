# 前端網頁託管@hosting

前端網頁託管基於uniCloud的能力，爲開發者的html網頁提供更快速、更安全、更省心、更便宜的網站發佈。

- 更快速：不經過web server，頁面和資源直接上cdn，就近訪問，速度更快。
- 更安全：不存在傳統服務器各種操作系統、web server的漏洞，不用天天想着打補丁。不怕DDoS攻擊，永遠打不垮的服務。
- 更省心：無需再購買虛擬機、安裝操作系統、配置web服務器、處理負載均衡、處理大併發、處理DDoS攻擊......您什麼都不用管，只需上傳您寫的頁面文件
- 更便宜：uniCloud由DCloud聯合阿里雲和騰訊雲推出，其中阿里雲版本完全免費。

[前端網頁託管功能詳情](https://uniapp.dcloud.io/uniCloud/hosting)


### CLI注意事項@note

- HBuilderX 3.4.18及之前的版本僅支持阿里雲；HBuilderX 3.5.1-alpha起，支持騰訊雲。
- 所有操作，均需要HBuilderX處於登錄狀態
- uniCloud前端網頁託管功能，需要處於開通狀態。[如何開通前端網頁託管？](https://uniapp.dcloud.io/uniCloud/hosting?id=%e5%bc%80%e9%80%9a)

### 上傳項目或文件@upload

```shell
cli hosting deploy [--prj 項目名稱] --space 雲空間名稱或id --provider 服務商代號 [--source 指定項目下源目錄] [--prefix 指定雲空間目錄前綴]
```

說明:

- 當指定了項目名稱(--prj), --source參數不填則從項目的根目錄上傳所有內容
- 如果沒有指定項目名稱，則--source必須爲文件或目錄的全路徑

**示例**

```shell

# 上傳特定路徑文件到雲端, 並重命名
cli hosting deploy --provider aliyun --space spacename --source /a.txt --prefix /b.txt

# 上傳特定路徑文件到雲端特定目錄下(比如static目錄)
cli hosting deploy --provider aliyun --space spacename --source /a.txt --prefix /static/

# 上傳目錄到雲端根目錄
cli hosting deploy --provider aliyun --space spacename --source /Users/hx/test/ --prefix /

# 上傳項目(比如test-project)到雲端根目錄
cli hosting deploy --provider aliyun --space spacename --prj test-project --prefix /

```

### 列舉雲空間下的文件及文件夾@list

```shell
cli hosting list --space 雲空間名稱或id --provider 服務商代號  [--prefix 指定雲空間目錄前綴]
```

**示例**

```shell

# 列表根目錄下的文件
cli hosting list  --provider aliyun --space spacename

# 列表指定目錄下的文件
cli hosting list  --provider aliyun --space spacename --prefix /img/
```

### 刪除雲空間下的文件及文件夾@delete

```shell
cli hosting delete --space 雲空間名稱或id --provider 服務商代號 --path 雲空間文件或文件夾路徑，文件夾須以/結尾
```

**示例**

```shell

# 刪除文件夾
cli hosting delete  --provider aliyun --space spacename --path /img/

# 刪除指定文件
cli hosting delete  --provider aliyun --space spacename --path /img/1.png
```