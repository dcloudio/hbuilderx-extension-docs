# uniCloud cli 云开发
######.
> uniCloud cli仅支持HBuilderX 3.1.7+

## 当使用cli云开发方式操作时，上传下载默认使用强制覆盖的方式，即如果目标已经存在同名资源，操作时将自动覆盖

## 列举资源信息

命令语法：

```shell
cli cloud functions --list 资源类型代号 --prj 项目名称或序号 --provider 云服务商代号 --unimod uni_module模块名称 [--cloud]
```

说明：

- 资源类型代号为 `cloudfunction`、`common`、`database`、`validationFunction`、`clientDBAction` 或 `space` 其中之一
	- `cloudfunction` 指云函数
	- `common` 指云函数的公共模块
	- `database` 指数据集合Schema
	- `validationFunction` 指数据库校验函数
	- `clientDBAction` 指数据库触发条件
	- `space` 指云空间
- 项目名称或序号为cli命令 project list中列举的项目名称或序号
- 云服务商代号为aliyun(指阿里云)或tcb(指腾讯云)
- uni_module模块名称在无需要时可以不输入--unimod参数
- cloud 参数代表列举的是云端的资源，如果没有这个参数则列举的是本地项目相关的内容

示例：

```shell
# 列举与项目myproject 相关的阿里云服务空间
cli cloud functions --list space --prj myproject --provider aliyun

# 列举项目myproject阿里云空间目前的云函数
cli cloud functions --list cloudfunction --prj myproject --provider aliyun --cloud 
```

## 上传资源

命令语法：

```shell
cli cloud functions --upload 资源类型代号 --prj 项目名称或序号 --provider 云服务商代号 --name 资源名称 --unimod uni_module模块名称 
```

说明：

- 资源类型代号为 `cloudfunction`、`common`、`database`、`validationFunction`、`clientDBAction` 或 `all` 其中之一
	- `cloudfunction`: 指云函数
	- `common`: 指云函数的公共模块
	- `database`: 指数据集合Schema
	- `validationFunction`: 指数据库校验函数
	- `clientDBAction`:  指数据库触发条件
	- `all`: 指上传所有云函数、公共模块及clientDBAction,此时无需输入--unimod参数
- 项目名称或序号为cli命令 project list中列举的项目名称或序号
- 云服务商代号为aliyun(指阿里云)或tcb(指腾讯云)
- 资源名称，当上传资源为云函数时资源名称为云函数的目录名，当上传资源为数据集合Schema时资源名称为文件名(如:xxxx.schema.json),如此类推 
- uni_module模块名称在无需要时可以不输入--unimod参数

## 下载资源

命令语法：

```shell
cli cloud functions --download 资源类型代号 --prj 项目名称或序号 --provider 云服务商代号 --name 资源名称 --unimod uni_module模块名称 
```

说明：

- 资源类型代号为 `cloudfunction`、`common`、`database`、`validationFunction`、`clientDBAction` 或 `all` 其中之一
	- `cloudfunction`: 云函数
	- `common`: 云函数的公共模块
	- `database`: 数据集合Schema
	- `validationFunction`: 数据库校验函数
	- `clientDBAction`: 数据库触发条件
	- `all` : 下载所有云函数、公共模块及clientDBAction,此时无需输入--unimod参数
- 项目名称或序号为cli命令 project list中列举的项目名称或序号
- 云服务商代号为`aliyun`(指阿里云)或`tcb`(指腾讯云)
- 资源名称，当下载资源为云函数时资源名称为云函数的目录名，为数据集合Schema时资源名称为文件名(如:xxxx.schema.json),如此类推，clientDBAction不支持按名称下载 
- uni_module模块名称在无需要时可以不输入--unimod参数
	
## 初始化数据库

命令语法：

```shell
cli cloud functions --prj 项目名称或序号 --provider 云服务商代号 --initdatabase
```
