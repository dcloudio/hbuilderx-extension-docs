# uniCloud cli uniCloud@uniCloud

> Supported from HBuilderX 3.1.9+

## List@list

#### command

```shell
cli cloud functions --list Resource type code --prj project name or id --provider Cloud service provider code --unimod uni_module module name [--cloud]
```

Instruction:

- Resource type code: `cloudfunction`、`common`、`db`、`vf`、One of `action` or `space`
	- `cloudfunction` : the cloud functions
	- `common` :the public module of cloud functions
	- `db` :the data collection schema
	- `vf` :the database verification function
	- `action` :the database trigger condition
	- `space` :the cloud space
- The project name or serial number of cli command in project list
- The cloud service provider code: aliyun(Alibaba Cloud) or tcb(Tencent Cloud)
- The uni_module module name can be omitted when it is not needed unimod parameter.
- The cloud parameter represents the list of resources in the cloud, if there is no such parameter, the list is related to the local project.

#### Examples

```shell
# List the Alibaba Cloud service spaces related to the project myproject
cli cloud functions --list space --prj myproject --provider aliyun

# List the current cloud functions of the project myproject
cli cloud functions --list cloudfunction --prj myproject --provider aliyun --cloud 
```

## Upload Resources@upload

#### command

```shell
cli cloud functions --upload resource type code --prj project name or serial number --provider Cloud service provider code --name resource name --unimod uni_module module name [--force]
```

**Note**：当使用cli云开发方式操作时，上传下载默认使用`强制跳过`的方式，即如果目标已经存在同名资源，操作时将`自动跳过` When using the cli cloud development method to operate, upload and download use the `force skip` method by default, that is, if the target already has a resource with the same name, it will be `auto skipped` during operation.

Instruction:

- Resource type code: `cloudfunction`、`common`、`db`、`vf`、One of `action` or `all`
	- `cloudfunction` : the cloud functions
	- `common` :the public module of cloud functions
	- `db` :the data collection schema
	- `vf` :the database verification function
	- `action` :the database trigger condition
	- `all`: All cloud functions, public modules and actions, no need to enter the --unimod parameter
- The project name or serial number of cli command in project list
- The cloud service provider code: aliyun(Alibaba Cloud) or tcb(Tencent Cloud)
- Resource name, when the uploaded resource is a cloud function, the resource name is the directory name of the cloud function. When the uploaded resource is a data collection schema, the resource name is the file name (such as xxxx.schema.json)
- The uni_module module name can be omitted when it is not needed unimod parameter.
- The force parameter represents mandatory * cover * no prompt

#### Examples

> Name：hello-uniapp Cloud Service Provider: aliyun

```shell
# Upload all cloud functions, public modules and actions
cli cloud functions --upload all --prj hello-uniapp --provider aliyun

# Upload cloud function add
cli cloud functions --upload cloudfunction --prj hello-uniapp --provider aliyun --name add

# Upload the cloud function add under uni_modules 
cli cloud functions --upload cloudfunction --prj hello-uniapp --provider aliyun --name add --unimod <uni_modules name>

# Upload public modules hello-common
cli cloud functions --upload common --prj hello-uniapp --provider aliyun --name hello-common

# Upload the action file in the uni-clientDB-actions directory, such as test.js
cli cloud functions --upload action --prj hello-uniapp --provider aliyun --name test.js

# Upload the book.schema.json file in the database directory
cli cloud functions --upload db --prj hello-uniapp --provider aliyun --name book.schema.json

# Upload the extended validation function v.js file in the database/validateFunction directory
cli cloud functions --upload vf --prj hello-uniapp --provider aliyun --name v.js
```

## Download@download

#### command

```shell
cli cloud functions --download resource type code --prj project name or serial number --provider cloud service provider --name resouce name --unimod uni_module module name [--force]
```

**Note**: When using the cli cloud development method, upload and download use the `force skip` method by default. If the target already has a resource with the same name, the operation will be `auto skip`.

Instruction:

- Resource type code: `cloudfunction`、`common`、`db`、`vf`、One of `action` or `all`
	- `cloudfunction` : the cloud functions
	- `common` :the public module of cloud functions
	- `db` :the data collection schema
	- `vf` :the database verification function
	- `action` :the database trigger condition
	- `all`: All cloud functions, public modules and actions, no need to enter the --unimod parameter
- The project name or serial number of cli command in project list
- The cloud service provider code: aliyun(Alibaba Cloud) or tcb(Tencent Cloud)
- Resource name. When the downloaded resource is a cloud function, the resource name is the directory name of the cloud function. When the resource is a data collection schema, the resource name is the file name (such as xxxx.schema.json). Action does not support downloading by name, not support --name paramete.
- The uni_module module name can be omitted when it is not needed unimod parameter.
- The force parameter represents mandatory * cover * no prompt

#### Examples 

> Name: hello-uniapp Cloud Service Provider: aliyun

```shell
# Download all cloud functions, public modules and actions
cli cloud functions --download all --prj hello-uniapp --provider aliyun

# Download cloud function add
cli cloud functions --download cloudfunction --prj hello-uniapp --provider aliyun --name add

# Download the cloud function add uni_modules
cli cloud functions --download cloudfunction --prj hello-uniapp --provider aliyun --name add --unimod <uni_modules name>

# Download public modules hello-common
cli cloud functions --download common --prj hello-uniapp --provider aliyun --name hello-common

# Download the action file in the uni-clientDB-actions directory, such as test.js
cli cloud functions --download action --prj hello-uniapp --provider aliyun --name test.js

# Download the book.schema.json file in the database directory
cli cloud functions --download db --prj hello-uniapp --provider aliyun --name book.schema.json

# Download the extended validation function v.js file in the database/validateFunction directory
cli cloud functions --download vf --prj hello-uniapp --provider aliyun --name v.js
```

## Initialize database@initdatabase

#### command

```shell
cli cloud functions --prj project name or serial number --provider cloud service provider code --initdatabase
```

#### Examples

> Name: hello-uniapp Cloud service provider: aliyun

```shell
cli cloud functions --prj hello-uniapp --provider aliyun --initdatabase
```

## Assigned cloud space@assignspace

#### command

```shell
cli cloud functions --prj project name or serial number --provider cloud service provider code --assignspace space id or serial number
```
#### Examples

> Name:hello-uniapp Cloud service provider: aliyun Space serial number:1 （
The serial number comes from the cloud functions --list space command）
> space id: 99999999-9999-9999-9999-999999999999 （The id comes from the cloud functions --list space command）
> space name: myspace（The name comes from the cloud functions --list space command）

```shell
cli cloud functions --prj hello-uniapp --provider aliyun --assignspace 1
cli cloud functions --prj hello-uniapp --provider aliyun --assignspace 99999999-9999-9999-9999-999999999999
cli cloud functions --prj hello-uniapp --provider aliyun --assignspace myspace
```
