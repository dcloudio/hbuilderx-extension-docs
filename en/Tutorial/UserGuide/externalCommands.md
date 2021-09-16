## What can external commands do?

External commands allow you to call external programs or command lines through menus, shortcut keys, etc. in HBuilderX.

## scenes to be used

- Compress and decompress file
- Compress images 
- Document conversion（For example, markdown to pdf）
- Call python, shell script
- Open a local program
- Transfer files to the server
-O perate certain services of the server (such as start, stop, restart nginx)
- download file
- Install apk to phone
- Upload the application to the application distribution website (such as Dandelion)
- Batch compression
- Other automated operations
- Upload files to Qiniu Cloud, Alibaba Cloud, etc.

## Menu

Click the menu [Tools] --> [External Commands] --> [Custom External Commands], you can customize the external commands, the format is json.

<img src="/static/snapshots/tutorial/menu_tool/externalCommands_en.png" class="hd-img" />


## Example

### Example 1: Compress and decompress

**windows:**

```shell
[{
    "name": "Compressed to 7z",
    "command": "\"C:/Program\ Files/7-Zip/7z.exe\" a ${file}.7z ${file}",
    "type": "process",
    "key": ""
  },
  {
    "name": "Compressed to zip",
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
    "name": "Compressed to bz2",
    "command": "cd ${fileDir} && tar -jcvf ${fileBasename}.tar.bz2 ${fileBasename}",
    "type": "terminal",
    "key": "alt+shift+e"
  },
  {
    "name": "Decompress zip",
    "command": "unzip ${file}",
    "type": "terminal",
    "key": "alt+shift+e"
  }
]
```

### Example 2: Call external python script

```
[{
  "name":"run python script",
  "command":"python script.py",
  "type" : "terminal",
  "key":"alt+shift+p"
  }]
```

### Example 3:  Call TinyPNG to losslessly compress images

```
[{
      "name":"Call TinyPNG",
      "command":"curl --user api:YOUR_API_KEY --data-binary @${file} -i https://api.tinify.com/shrink --output ${file}",
      "type" : "terminal",
      "key":"alt+shift+m"
  }]
```

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

### Example 6:  linux nginx start

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

### Example 7:  Use pandoc to convert markdown to pdf, doc, html

What is pandoc? Pandoc is a software, an artifact that can convert all kinds of document formats to each other, and a Swiss army knife of document conversion.

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

### Example 9:  Batch compress js files

find是mac上的命令。windows请自行编写批处理
```
[{  
    "name": "Batch compress js files",  
    "command": "for i in `find ${projectDir} -path ${projectDir}'/unpackage' -prune -o -name '*.js' -and ! -iname '*.min.js'`;do `/Applications/HBuilderX-Alpha.app/Contents/HBuilderX/plugins/compress-babel-minify/node_modules/.bin/minify ${i} --out-file ${i%.js*}.min.js 2>/dev/null`;[ $? -ne 0 ] && echo && echo '压缩错误的文件:'${i}; done",  
    "type": "shell",  
    "key": "alt+shift+e"  
}]  
```

## configuration shortcut keys

The following example: configure shortcut keys by key

```
{
      "name":"scp",
      "command":"scp -r ${projectDir} user@ip:server_path",
      "type" : "terminal",
      "key":"alt+shift+m"
  }
```


## External command variable description


```
"command"、"workingDir": Use predefined variables to get the path information of the current file
${file}	The full path of the current file，Example: D:\files\test.txt
${fileName}	The file name of the current file，Example: test.txt
${fileExtension}	The extension of the current file，Example: txt
${fileBasename}	The current file only contains part of the file name，Example: test
${fileDir} The full path of the directory where the current file is located，Example: D:\files
${projectDir} The full path of the project where the current file is located
```