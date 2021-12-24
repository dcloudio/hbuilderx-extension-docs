# Frontend Web Hosting

The front-end web hosting is based on the ability of uniCloud to provide developers with faster, safer, more worry-free, and cheaper website publishing for developers' html web pages.

- Faster: Without going through the web server, the pages and resources are directly uploaded to the CDN, which can be accessed nearby, and the speed is faster.
- Safer: There are no vulnerabilities in the various operating systems and web servers of traditional servers, so there is no need to think about patching every day. A service that will never be defeated without fear of DDoS attacks.
- More worry-free: no need to buy virtual machines, install operating systems, configure web servers, handle load balancing, handle large concurrency, handle DDoS attacks... You don’t have to worry about anything, just upload the page files you write
- Cheaper: uniCloud is launched by DCloud in conjunction with Alibaba Cloud and Tencent Cloud, and the Alibaba Cloud version is completely free.

[Details of front-end web hosting](https://uniapp.dcloud.io/uniCloud/hosting)


### CLI note@note

- Only supports Alibaba Cloud, not Tencent Cloud.
- All operations require HBuilderX to be logged in
- The uniCloud front-end web hosting needs to be activated. [How to register front-end web hosting? ](https://uniapp.dcloud.io/uniCloud/hosting?id=%e5%bc%80%e9%80%9a)

### upload project or file@upload

```shell
cli hosting deploy [--prj project name] --space Cloud space name or id --provider Service provider code [--source the source directory of specify project] [--prefix Specify cloud space directory prefix]
```

Instruction:

- When the project name (--prj) is specified, if the --source parameter is not filled in, all content will be uploaded from the root directory of the project.
- If the project name is not specified, --source must be the full path of the file or directory.

**Example**

```shell

# Upload a file with a specific path to the cloud, and rename it
cli hosting deploy --provider aliyun --space spacename --source /a.txt --prefix /b.txt

# Upload files with a specific path to a specific directory in the cloud (such as a static directory)
cli hosting deploy --provider aliyun --space spacename --source /a.txt --prefix /static/

# Upload directory to cloud root directory
cli hosting deploy --provider aliyun --space spacename --source /Users/hx/test/ --prefix /

# Upload the project (such as test-project) to the cloud root directory
cli hosting deploy --provider aliyun --space spacename --prj test-project --prefix /

```

### List files and folders in the cloud space @list

```shell
cli hosting list --space Cloud space name or id --provider Service provider code  [--prefix Specify cloud space directory prefix]
```

**Example**

```shell

# List files in the root directory
cli hosting list  --provider aliyun --space spacename

# List files in the specified directory
cli hosting list  --provider aliyun --space spacename --prefix /img/
```

### Delete files and folders in the cloud space @delete

```shell
cli hosting delete --space Cloud space name or id --provider Service provider code --path Cloud space file or folder path, the folder must end with /
```

**Example**

```shell

# Delete folder
cli hosting delete  --provider aliyun --space spacename --path /img/

# Delete specified file
cli hosting delete  --provider aliyun --space spacename --path /img/1.png
```
