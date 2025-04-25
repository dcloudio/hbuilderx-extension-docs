## 外部命令能干什么呢？

外部命令可以让您在HBuilderX中通过菜单、快捷键等方式调用外部程序或命令行

## 使用场景

- 压缩文件与解压
- 压缩图片 
- 文档转换（比如markdown转pdf）
- 调用python、shell脚本
- 打开本地的某个程序
- 传输文件到服务器
- 操作服务器的某些服务（如启动、停止、重启nginx)
- 下载文件
- 安装apk到手机
- 上传应用到应用分发网站（比如蒲公英）
- 批量压缩
- 其它的自动化操作
- 上传文件到七牛云、阿里云等

## 外部命令在哪里？

菜单【工具】-->【外部命令】

如下图，您可以看到几个例子

<img src="/static/snapshots/tutorial/menu_tool/externalCommands.png" />

点击菜单【工具】-->【外部命令】-->【自定义外部命令】，就可以自定义外部命令，格式为json。

## 外部命令示例

### 例子1：压缩、解压

windows例子:

> 注意： windows的软件大部分安装在`Program Files`目录，需要注意空格与斜杠。如下例子

```shell
[{
    "name": "文件: 压缩7z格式",
    "command": "\"C:/Program\ Files/7-Zip/7z.exe\" a ${file}.7z ${file}",
    "type": "process",
    "key": ""
  },
  {
    "name": "文件: 压缩zip格式",
    "command": [
      "C:/Program Files/7-Zip/7z.exe",
      "a",
      "${file}.zip",
      "${file}"
    ],
    "type": "process",
    "key": ""
  },
  {
    "name": "文件: 解压",
    "command": "\"C:/Program Files/7-Zip/7z.exe\" x ${file}",
    "type": "shell",
    "key": ""
  }
]

```

Mac例子：

```shell
[
  {
    "name": "压缩目录为bz2",
    "command": "cd ${fileDir} && tar -jcvf ${fileBasename}.tar.bz2 ${fileBasename}",
    "type": "terminal",
    "key": "alt+shift+e"
  },
  {
    "name": "解压zip包",
    "command": "unzip ${file}",
    "type": "terminal",
    "key": "alt+shift+e"
  }
]
```

### 例子2：调用外部python、shell等脚本

```
[{
  "name":"调用python脚本",
  "command":"python script.py",
  "type" : "terminal",
  "key":"alt+shift+p"
  }]
```

### 例子3： 调用TinyPNG无损压缩图片

大部分情况下, 图片都是需要压缩的,为了 更快的打开网页,节省流量
推荐：[TinyPNGg官网](https://tinypng.com) 无损压缩，良心网站，每月500张免费。

如下所示：`YOUR_API_KEY`是你申请的key, --output 可以指定目录文件名，注意如果和当前图片路径一致，会覆盖原先图片
```
[{
      "name":"调用TinyPNG无损压缩图片",
      "command":"curl --user api:YOUR_API_KEY --data-binary @${file} -i https://api.tinify.com/shrink --output ${file}",
      "type" : "terminal",
      "key":"alt+shift+m"
  }]
```
注意：curl是mac自带的命令，windows上如需使用curl，请下载[curl](https://curl.haxx.se/windows/) 安装

### 例子4：下载文件
mac上下载文件的命令有：wget、curl
windows上下载文件的命令是：bitsadmin.exe
```
[{
      "name":"下载文件",
      "command":"wget -c ${userInput:输入要下载的地址url}",
      "type" : "terminal",
      "key":"alt+shift+m"
  }]
```
注意： `${userInput:弹框说明}` 会在当前屏幕弹框,可以输入内容

### 例子5： Mac: 复制项目到远程linux服务器

scp是linux和mac上才能用的命令，windows上不可以使用哦

```
[{
      "name":"scp传输项目到服务器",
      "command":"scp -r ${projectDir} 用户名@ip:服务器目录路径",
      "type" : "terminal",
      "key":"alt+shift+m"
  }]
```

### 例子6： 远程linux服务器 重启/启动nginx服务

```
[{
      "name":"远程服务器重启nginx",
      "command":"ssh 用户@ip '/opt/nginx/sbin/nginx -s reload'",
      "type" : "terminal",
      "key":""
  },
{
      "name":"远程服务器重启nginx",
      "command":"ssh 用户@ip '/opt/nginx/sbin/nginx'",
      "type" : "terminal",
      "key":""
  }]
```

### 例子7： 使用pandoc转markdown为pdf、doc、html

pandoc是什么？
pandoc是一个软件，是一个能把千奇百怪的文档格式互相转换的神器，是一把文档转换的瑞士军刀。
安装后，可以通过命令调用。[pandoc官网](http://www.pandoc.org)

**pandoc结合外部命令的例子**

```
[{
    "name": "Pandoc转md为pdf",
    "command": "pandoc ${file} -o ${fileBasename}.pdf",
    "type": "terminal",
    "key": ""
  },
  {
    "name": "Pandoc转md为doc",
    "command": "pandoc ${file} -o ${fileBasename}.docx",
    "type": "terminal",
    "key": ""
  },
  {
    "name": "Pandoc转md为html",
    "command": "pandoc ${file} -o ${fileBasename}.html",
    "type": "terminal",
    "key": ""
  }
]
```

### 例子8： 安装apk到Android手机

```
[
  {
    "name": "安装apk到android手机",
    "command": "adb install ${file}",
    "type": "terminal",
    "key": ""
    }
]
```

### 例子9： 【蒲公英】内测应用上传

```
[
{
    "name": "【蒲公英】内测应用上传",
    "command": "curl -F 'file=@${file}' -F 'uKey=xxxxxxx' -F '_api_key=xxxxxx' https://upload.pgyer.com/apiv1/app/upload",
    "type": "terminal",
    "key": "alt+shift+m"
    }
]
```
说明：`uKey`、`_api_key`需要自己申请。 网址：https://www.pgyer.com/doc/api

### 例子10：使用ftp
参考网友贡献[http://ask.dcloud.net.cn/article/35459](http://ask.dcloud.net.cn/article/35459)

###  例子11：使用颜色选择器
该插件目前无需外部命令配置，具体见其文档：[http://ext.dcloud.net.cn/plugin?id=146](http://ext.dcloud.net.cn/plugin?id=146)

### 例子12： 批量压缩js文件

find是mac上的命令。windows请自行编写批处理
```
[{  
    "name": "js批量压缩",  
    "command": "for i in `find ${projectDir} -path ${projectDir}'/unpackage' -prune -o -name '*.js' -and ! -iname '*.min.js'`;do `/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/compress-babel-minify/node_modules/.bin/minify ${i} --out-file ${i%.js*}.min.js 2>/dev/null`;[ $? -ne 0 ] && echo && echo '压缩错误的文件:'${i}; done",  
    "type": "shell",  
    "key": "alt+shift+e"  
}]  
```

## 外部命令配置快捷键

如上的例子，key，可以配置快捷键哦

```
{
      "name":"scp传输项目到服务器",
      "command":"scp -r ${projectDir} 用户名@ip:服务器目录路径",
      "type" : "terminal",
      "key":"alt+shift+m"
  }
```


## 外部命令变量说明

因为变量和快捷键，所以外部命令强大。

```
//------------外部命令 变量说明------------//
"command"、"workingDir"中可使用预定义的变量来获取当前文件的路径信息
${file}	当前文件的完整路径，比如 D:\files\test.txt
${fileName}	当前文件的文件名，比如 test.txt
${fileExtension}	当前文件的扩展名，比如 txt
${fileBasename}	当前文件仅包含文件名的部分，比如 test
${fileDir} 当前文件所在目录的完整路径，比如 D:\files
${projectDir} 当前文件所在项目的完整路径，只有当前文件是项目管理器中某个项目下的文件时才起作用
```