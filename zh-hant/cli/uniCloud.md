# uniCloud cli 雲開發@uniCloud

> uniCloud cli僅支持HBuilderX 3.1.9+

## 列舉資源信息@list

#### 命令語法

```shell
cli cloud functions --list 資源類型代號 --prj 項目名稱或序號 --provider 雲服務商代號 --unimod uni_module模塊名稱 [--cloud]
```

說明：

- 資源類型代號爲 `cloudfunction`、`common`、`db`、`vf`、`action` 或 `space` 其中之一
	- `cloudfunction` 指雲函數
	- `common` 指雲函數的公共模塊
	- `db` 指數據集合Schema
	- `vf` 指數據庫校驗函數
	- `action` 指數據庫觸發條件
	- `space` 指雲空間
- 項目名稱或序號爲cli命令 project list中列舉的項目名稱或序號
- 雲服務商代號爲aliyun(指阿里雲)或tcb(指騰訊雲)
- uni_module模塊名稱在無需要時可以不輸入--unimod參數
- cloud 參數代表列舉的是雲端的資源，如果沒有這個參數則列舉的是本地項目相關的內容

#### 示例

```shell
# 列舉與項目myproject 相關的阿里雲服務空間
cli cloud functions --list space --prj myproject --provider aliyun

# 列舉項目myproject阿里雲空間目前的雲函數
cli cloud functions --list cloudfunction --prj myproject --provider aliyun --cloud 
```

## 上傳資源@upload

#### 命令語法

```shell
cli cloud functions --upload 資源類型代號 --prj 項目名稱或序號 --provider 雲服務商代號 --name 資源名稱 --unimod uni_module模塊名稱 [--force]
```

**注意**：當使用cli雲開發方式操作時，上傳下載默認使用`強制跳過`的方式，即如果目標已經存在同名資源，操作時將`自動跳過`

說明：

- 資源類型代號爲 `cloudfunction`、`common`、`db`、`vf`、`action` 或 `all` 其中之一
	- `cloudfunction`: 指雲函數
	- `common`: 指雲函數的公共模塊
	- `db`: 指數據集合Schema
	- `vf`: 指數據庫校驗函數
	- `action`:  指數據庫觸發條件
	- `all`: 指上傳所有云函數、公共模塊及actions,此時無需輸入--unimod參數
- 項目名稱或序號爲cli命令 project list中列舉的項目名稱或序號
- 雲服務商代號爲aliyun(指阿里雲)或tcb(指騰訊雲)
- 資源名稱，當上傳資源爲雲函數時資源名稱爲雲函數的目錄名，當上傳資源爲數據集合Schema時資源名稱爲文件名(如:xxxx.schema.json),如此類推 
- uni_module模塊名稱在無需要時可以不輸入--unimod參數
- force參數代表強制*覆蓋*無提示

#### 示例

> 示例項目名稱：hello-uniapp 雲服務商：aliyun

```shell
# 上傳所有云函數、公共模塊及actions
cli cloud functions --upload all --prj hello-uniapp --provider aliyun

# 上傳雲函數add
cli cloud functions --upload cloudfunction --prj hello-uniapp --provider aliyun --name add

# 上傳uni_modules下雲函數add 
cli cloud functions --upload cloudfunction --prj hello-uniapp --provider aliyun --name add --unimod <uni_modules名稱>

# 上傳公共模塊hello-common
cli cloud functions --upload common --prj hello-uniapp --provider aliyun --name hello-common

# 上傳uni-clientDB-actions目錄下的action文件，比如test.js
cli cloud functions --upload action --prj hello-uniapp --provider aliyun --name test.js

# 上傳database目錄下的book.schema.json文件
cli cloud functions --upload db --prj hello-uniapp --provider aliyun --name book.schema.json

# 上傳database/validateFunction目錄下的擴展校驗函數v.js文件
cli cloud functions --upload vf --prj hello-uniapp --provider aliyun --name v.js
```

## 下載資源@download

#### 命令語法

```shell
cli cloud functions --download 資源類型代號 --prj 項目名稱或序號 --provider 雲服務商代號 --name 資源名稱 --unimod uni_module模塊名稱 [--force]
```

**注意**：當使用cli雲開發方式操作時，上傳下載默認使用`強制跳過`的方式，即如果目標已經存在同名資源，操作時將`自動跳過`

說明：

- 資源類型代號爲 `cloudfunction`、`common`、`db`、`vf`、`action` 或 `all` 其中之一
	- `cloudfunction`: 雲函數
	- `common`: 雲函數的公共模塊
	- `db`: 數據集合Schema
	- `vf`: 數據庫校驗函數
	- `action`: 數據庫觸發條件
	- `all`: 下載所有云函數、公共模塊及actions,此時無需輸入--unimod參數
- 項目名稱或序號爲cli命令 project list中列舉的項目名稱或序號
- 雲服務商代號爲`aliyun`(指阿里雲)或`tcb`(指騰訊雲)
- 資源名稱，當下載資源爲雲函數時資源名稱爲雲函數的目錄名，爲數據集合Schema時資源名稱爲文件名(如:xxxx.schema.json),如此類推，action不支持按名稱下載，不支持--name參數
- uni_module模塊名稱在無需要時可以不輸入--unimod參數
- force參數代表強制*覆蓋*無提示

#### 示例 

> 示例項目名稱：hello-uniapp 雲服務商：aliyun

```shell
# 下載所有云函數、公共模塊及actions
cli cloud functions --download all --prj hello-uniapp --provider aliyun

# 下載雲函數add
cli cloud functions --download cloudfunction --prj hello-uniapp --provider aliyun --name add

# 下載uni_modules下雲函數add 
cli cloud functions --download cloudfunction --prj hello-uniapp --provider aliyun --name add --unimod <uni_modules名稱>

# 下載公共模塊hello-common
cli cloud functions --download common --prj hello-uniapp --provider aliyun --name hello-common

# 下載uni-clientDB-actions目錄下的action文件，比如test.js
cli cloud functions --download action --prj hello-uniapp --provider aliyun --name test.js

# 下載database目錄下的book.schema.json文件
cli cloud functions --download db --prj hello-uniapp --provider aliyun --name book.schema.json

# 下載database/validateFunction目錄下的擴展校驗函數v.js文件
cli cloud functions --download vf --prj hello-uniapp --provider aliyun --name v.js
```

## 初始化數據庫@initdatabase

#### 命令語法

```shell
cli cloud functions --prj 項目名稱或序號 --provider 雲服務商代號 --initdatabase
```

#### 示例

> 示例項目名稱：hello-uniapp 雲服務商：aliyun

```shell
cli cloud functions --prj hello-uniapp --provider aliyun --initdatabase
```

## 指定雲空間@assignspace

#### 命令語法

```shell
cli cloud functions --prj 項目名稱或序號 --provider 雲服務商代號 --assignspace 空間名稱id或序號
```
#### 示例

> 示例項目名稱：hello-uniapp 雲服務商：aliyun 空間序號：1 （該序號來自cloud functions --list space 命令）
> 空間id：99999999-9999-9999-9999-999999999999 （該id來自cloud functions --list space 命令）
> 空間名稱：myspace（該名稱來自cloud functions --list space 命令）

```shell
cli cloud functions --prj hello-uniapp --provider aliyun --assignspace 1
cli cloud functions --prj hello-uniapp --provider aliyun --assignspace 99999999-9999-9999-9999-999999999999
cli cloud functions --prj hello-uniapp --provider aliyun --assignspace myspace
```