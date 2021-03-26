# uniCloud cli 云开发

> uniCloud cli仅支持HBuilderX 3.1.7+

## 列举资源信息

#### 命令语法

```shell
cli cloud functions --list 资源类型代号 --prj 项目名称或序号 --provider 云服务商代号 --unimod uni_module模块名称 [--cloud]
```

说明：

- 资源类型代号为 `cloudfunction`、`common`、`db`、`vf`、`action` 或 `space` 其中之一
	- `cloudfunction` 指云函数
	- `common` 指云函数的公共模块
	- `db` 指数据集合Schema
	- `vf` 指数据库校验函数
	- `action` 指数据库触发条件
	- `space` 指云空间
- 项目名称或序号为cli命令 project list中列举的项目名称或序号
- 云服务商代号为aliyun(指阿里云)或tcb(指腾讯云)
- uni_module模块名称在无需要时可以不输入--unimod参数
- cloud 参数代表列举的是云端的资源，如果没有这个参数则列举的是本地项目相关的内容

#### 示例

```shell
# 列举与项目myproject 相关的阿里云服务空间
cli cloud functions --list space --prj myproject --provider aliyun

# 列举项目myproject阿里云空间目前的云函数
cli cloud functions --list cloudfunction --prj myproject --provider aliyun --cloud 
```

## 上传资源

#### 命令语法

```shell
cli cloud functions --upload 资源类型代号 --prj 项目名称或序号 --provider 云服务商代号 --name 资源名称 --unimod uni_module模块名称 [--force]
```

**注意**：当使用cli云开发方式操作时，上传下载默认使用`强制跳过`的方式，即如果目标已经存在同名资源，操作时将`自动跳过`

说明：

- 资源类型代号为 `cloudfunction`、`common`、`db`、`vf`、`action` 或 `all` 其中之一
	- `cloudfunction`: 指云函数
	- `common`: 指云函数的公共模块
	- `db`: 指数据集合Schema
	- `vf`: 指数据库校验函数
	- `action`:  指数据库触发条件
	- `all`: 指上传所有云函数、公共模块及actions,此时无需输入--unimod参数
- 项目名称或序号为cli命令 project list中列举的项目名称或序号
- 云服务商代号为aliyun(指阿里云)或tcb(指腾讯云)
- 资源名称，当上传资源为云函数时资源名称为云函数的目录名，当上传资源为数据集合Schema时资源名称为文件名(如:xxxx.schema.json),如此类推 
- uni_module模块名称在无需要时可以不输入--unimod参数
- force参数代表强制*覆盖*无提示

#### 示例

> 示例项目名称：hello-uniapp 云服务商：aliyun

```shell
# 上传所有云函数、公共模块及actions
cli cloud functions --upload all --prj hello-uniapp --provider aliyun

# 上传云函数add
cli cloud functions --upload cloudfunction --prj hello-uniapp --provider aliyun --name add

# 上传uni_modules下云函数add 
cli cloud functions --upload cloudfunction --prj hello-uniapp --provider aliyun --name add --unimod <uni_modules名称>

# 上传公共模块hello-common
cli cloud functions --upload common --prj hello-uniapp --provider aliyun --name hello-common

# 上传uni-clientDB-actions目录下的action文件，比如test.js
cli cloud functions --upload action --prj hello-uniapp --provider aliyun --name test.js

# 上传database目录下的book.schema.json文件
cli cloud functions --upload db --prj hello-uniapp --provider aliyun --name book.schema.json

# 上传database/validateFunction目录下的扩展校验函数v.js文件
cli cloud functions --upload vf --prj hello-uniapp --provider aliyun --name v.js
```

## 下载资源

#### 命令语法

```shell
cli cloud functions --download 资源类型代号 --prj 项目名称或序号 --provider 云服务商代号 --name 资源名称 --unimod uni_module模块名称 [--force]
```

**注意**：当使用cli云开发方式操作时，上传下载默认使用`强制跳过`的方式，即如果目标已经存在同名资源，操作时将`自动跳过`

说明：

- 资源类型代号为 `cloudfunction`、`common`、`db`、`vf`、`action` 或 `all` 其中之一
	- `cloudfunction`: 云函数
	- `common`: 云函数的公共模块
	- `db`: 数据集合Schema
	- `vf`: 数据库校验函数
	- `action`: 数据库触发条件
	- `all`: 下载所有云函数、公共模块及actions,此时无需输入--unimod参数
- 项目名称或序号为cli命令 project list中列举的项目名称或序号
- 云服务商代号为`aliyun`(指阿里云)或`tcb`(指腾讯云)
- 资源名称，当下载资源为云函数时资源名称为云函数的目录名，为数据集合Schema时资源名称为文件名(如:xxxx.schema.json),如此类推，action不支持按名称下载，不支持--name参数
- uni_module模块名称在无需要时可以不输入--unimod参数
- force参数代表强制*覆盖*无提示

#### 示例 

> 示例项目名称：hello-uniapp 云服务商：aliyun

```shell
# 下载所有云函数、公共模块及actions
cli cloud functions --download all --prj hello-uniapp --provider aliyun

# 下载云函数add
cli cloud functions --download cloudfunction --prj hello-uniapp --provider aliyun --name add

# 下载uni_modules下云函数add 
cli cloud functions --download cloudfunction --prj hello-uniapp --provider aliyun --name add --unimod <uni_modules名称>

# 下载公共模块hello-common
cli cloud functions --download common --prj hello-uniapp --provider aliyun --name hello-common

# 下载uni-clientDB-actions目录下的action文件，比如test.js
cli cloud functions --download action --prj hello-uniapp --provider aliyun --name test.js

# 下载database目录下的book.schema.json文件
cli cloud functions --download db --prj hello-uniapp --provider aliyun --name book.schema.json

# 下载database/validateFunction目录下的扩展校验函数v.js文件
cli cloud functions --download vf --prj hello-uniapp --provider aliyun --name v.js
```

## 初始化数据库

#### 命令语法

```shell
cli cloud functions --prj 项目名称或序号 --provider 云服务商代号 --initdatabase
```

#### 示例

> 示例项目名称：hello-uniapp 云服务商：aliyun

```shell
cli cloud functions --prj hello-uniapp --provider aliyun --initdatabase
```

## 指定云空间

#### 命令语法

```shell
cli cloud functions --prj 项目名称或序号 --provider 云服务商代号 --assignspace 空间名称id或序号
```
#### 示例

> 示例项目名称：hello-uniapp 云服务商：aliyun 空间序号：1 （该序号来自cloud functions --list space 命令）
> 空间id：99999999-9999-9999-9999-999999999999 （该id来自cloud functions --list space 命令）
> 空间名称：myspace（该名称来自cloud functions --list space 命令）

```shell
cli cloud functions --prj hello-uniapp --provider aliyun --assignspace 1
cli cloud functions --prj hello-uniapp --provider aliyun --assignspace 99999999-9999-9999-9999-999999999999
cli cloud functions --prj hello-uniapp --provider aliyun --assignspace myspace
```