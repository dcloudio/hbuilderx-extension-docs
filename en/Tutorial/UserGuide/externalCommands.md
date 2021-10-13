## What can external commands do?

External commands allow you to call external programs or command lines through menus, shortcut keys, etc. in HBuilderX.

## Use of Scenario

- Compress and decompress file
- Compress images 
- Document converter（For example, markdown to pdf format）
- Call python and shell scripts
- Open a local application
- Transfer files to the server
- Execute certain services of the server (such as start, stop, restart nginx)
- Download files
- Install apk
- Upload apps to the distribution website (such as https://www.pgyer.com/)
- Batch compression
- Other automated operations
- Upload files to Qiniu Cloud, Alibaba Cloud, etc.

## Where is external commands

From the figure below, you can find several examples through the menu [Tools] --> [External Commands]

<img src="/static/snapshots/tutorial/menu_tool/externalCommands_en.png" class="hd-img" />

Click the menu [Tools] --> [External Commands] --> [Custom External Commands], you can customize the external commands, json format.

## Example

### Example 1: Compress and decompress

**windows:**

> Most applications are installed in the "Program Files" directory, pay attention to spaces and slashes. Look at the following example,

```shell
[{
    "name": "Compressed to 7z file",
    "command": "\"C:/Program\ Files/7-Zip/7z.exe\" a ${file}.7z ${file}",
    "type": "process",
    "key": ""
  },
  {
    "name": "Compressed to zip file",
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
    "name": "Decompress",
    "command": "\"C:/Program Files/7-Zip/7z.exe\" x ${file}",
    "type": "shell",
    "key": ""
  }
]

```

**Mac: **

```shell
[
  {
    "name": "Compressed to bz2 directory",
    "command": "cd ${fileDir} && tar -jcvf ${fileBasename}.tar.bz2 ${fileBasename}",
    "type": "terminal",
    "key": "alt+shift+e"
  },
  {
    "name": "Decompress zip file",
    "command": "unzip ${file}",
    "type": "terminal",
    "key": "alt+shift+e"
  }
]
```

### Example 2: Call external python or shell script

```
[{
  "name":"run python script",
  "command":"python script.py",
  "type" : "terminal",
  "key":"alt+shift+p"
  }]
```

### Example 3:  Call TinyPNG to losslessly compress images

For most websites, images need to be compressed to open the website faster and save data usage.
Recommendation: [TinyPNGg官网](https://tinypng.com) lossless compression, a good website, the first 500 pictures are free.
```
[{
      "name":"Call TinyPNG",
      "command":"curl --user api:YOUR_API_KEY --data-binary @${file} -i https://api.tinify.com/shrink --output ${file}",
      "type" : "terminal",
      "key":"alt+shift+m"
  }]
```
Note: curl is a built-in command of Mac, but Windos must download curl (https://curl.haxx.se/windows/) if needed.

### Example 4: Download File

The commands for downloading files on mac are: `wget`, `curl`

The command to download files on windows is: `bitsadmin.exe`

```
[{
      "name":"Download File",
      "command":"wget -c ${userInput: url}",
      "type" : "terminal",
      "key":"alt+shift+m"
  }]
```

Note: `$(userInput:Box description)` will pop up on the current screen, you can input content

### Example 5: Mac: scp file to linux

`scp` is a command that can only be used on linux and mac, not on windows.

```
[{
      "name":"scp file to linux",
      "command":"scp -r ${projectDir} user@ip:server_path",
      "type" : "terminal",
      "key":"alt+shift+m"
  }]
```

### Example 6:  Remote linux server, reload/start nginx service

```
[{
      "name":"linux: reload nginx",
      "command":"ssh user@ip '/opt/nginx/sbin/nginx -s reload'",
      "type" : "terminal",
      "key":""
  },
{
      "name":"linux: start nginx",
      "command":"ssh user@ip '/opt/nginx/sbin/nginx'",
      "type" : "terminal",
      "key":""
  }]
```

### Example 7:  Convert markdown to pdf, doc, html with pandoc

What is pandoc? Pandoc is a software that can convert various file formats to each other. Pandoc is a swiss-army knife on files conversion. 

After installation, it can be invoked through commands. [pandoc official website](http://www.pandoc.org)

**pandoc Example**

```
[{
    "name": "Pandoc: md to pdf",
    "command": "pandoc ${file} -o ${fileBasename}.pdf",
    "type": "terminal",
    "key": ""
  },
  {
    "name": "Pandoc: md to doc",
    "command": "pandoc ${file} -o ${fileBasename}.docx",
    "type": "terminal",
    "key": ""
  },
  {
    "name": "Pandoc: md to html",
    "command": "pandoc ${file} -o ${fileBasename}.html",
    "type": "terminal",
    "key": ""
  }
]
```

### Example 8:  Install apk to Android phone

```
[
  {
    "name": "install apk",
    "command": "adb install ${file}",
    "type": "terminal",
    "key": ""
    }
]
```

### Example 9:  Beta application testing

```
[{  
    "name": "Beta application testing on pgyer [https://www.pgyer.com/]",  
    "command": "curl -F 'file=@${file}' -F 'uKey=xxxxxxx' -F '_api_key=xxxxxx'    https://upload.pgyer.com/apiv1/app/upload",
      "type": "terminal",
      "key": "alt+shift+m"  
}]  
```
Note：You need to apply `uKey`、`_api_key`. Website：https://www.pgyer.com/doc/api

### Example 10：ftp
see document [http://ask.dcloud.net.cn/article/35459](http://ask.dcloud.net.cn/article/35459)

###  Example 11：Color Picker
The plugin currently does not require external command configuration, see its documentation for details：[http://ext.dcloud.net.cn/plugin?id=146](http://ext.dcloud.net.cn/plugin?id=146)

### Example 12： Batch compress js files

find is a command on mac. windows please write your own batch
```
[{  
    "name": "js batch compression",  
    "command": "for i in `find ${projectDir} -path ${projectDir}'/unpackage' -prune -o -name '*.js' -and ! -iname '*.min.js'`;do `/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/compress-babel-minify/node_modules/.bin/minify ${i} --out-file ${i%.js*}.min.js 2>/dev/null`;[ $? -ne 0 ] && echo && echo 'Compress the wrong file:'${i}; done",  
    "type": "shell",  
    "key": "alt+shift+e"  
}]  
```


## Shortcut keys

Shortcut keys for external commands, for example:

```
{
      "name":"scp",
      "command":"scp -r ${projectDir} user@ip:server_path",
      "type" : "terminal",
      "key":"alt+shift+m"
  }
```


## Variable description of external commands

Due to variables and shortcut keys, external commands are powerful.

```
"command"、"workingDir": Use predefined variables to get the path information of the current file
${file}	The full path of the current file，Example: D:\files\test.txt
${fileName}	The file name of the current file，Example: test.txt
${fileExtension}	The extension of the current file，Example: txt
${fileBasename}	The file name without extension，Example: test
${fileDir} The full path of the directory where the current file is located，Example: D:\files
${projectDir} The full path of the project where the current file is located
```
