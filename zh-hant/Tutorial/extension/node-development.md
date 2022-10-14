# node-development使用手册

> HBuilderX 3.4.10版本起支持

本插件支持调试或运行nodejs项目，也可以自定义运行或调试`js`单文件或者`js`项目，结合`webpack`或者`tsc`也可以调试`ts`。

## 安装node-development插件

HBuilderx, 顶部菜单【工具 - 插件安装】，安装新插件，找到Node插件，点击安装。

## 普通调试-js运行当前文件

打开js文件: ①运行菜单 -> ②使用node运行当前文件

<img src="/static/snapshots/node_development/1.jpg" />

## 普通调试-js调试当前文件

打开js文件: ①双击行号打断点 -> ②运行菜单 -> ③使用node调试当前文件

<img src="/static/snapshots/node_development/1.jpg" />

## 自定义运行调试-js项目调试

打开js项目: ①运行菜单 -> ②自定义node运行

点击菜单【自定义Node运行】后，会在项目根目录下创建文件`.hbuilderx/launch.json`

<img src="/static/snapshots/node_development/1.jpg" />

### launch.json

launch.json中目前支持的变量 `${workspaceFolder}` 指当前项目的根目录

   ```json
	 {
	     "configurations": [ // 配置项
	         {
	             "mode": "debug", // 运行模式
	             "name": "自定义调试文件", //运行菜单的名称(需要唯一)
	             "outFiles": [ // 如果启用了源映射，这些glob模式将指定生成的JavaScript文件。如果模式以开头！文件被排除在外。如果未指定，则生成的代码应与其源位于同一目录中
	                 "${workspaceFolder}/dist/**/*.js"
	             ],
	             "program": "${workspaceFolder}/dist/app.js", //程序运行的入口文件(编译后的)
	             "skipFiles": [ // 调试时要跳过的文件或文件夹名称数组或路径globs
	                 "<node_internals>/**/*.js"
	             ],
	             "sourceMap": false, // 是否启用sourceMap
	             "sourceMapPathOverrides": { // 一组映射，用于将sourceMap文件的位置从源映射中的内容重写到它们在磁盘上的位置。
	             },
	             "type": "node" // 类型:node(固定)
	         }
	     ],
	     "version": "0.1"// 版本号
	 }
   ```
launch.json中`configurations`配置项说明:

|  字段名   | 类型  | 描述 |
|  ----  | ----  | ---- |
| mode  | 'run' 、 'debug' 、 'attach' | 'debug':调试; <br> 'run': 运行; <br> 'attach': 附加启动的nodejs进程进行调试。 |
| name  | String | 运行菜单的名称(需要唯一) |
| outFiles  | Array<String> | 如果启用了sourceMap，这些glob模式将指定生成的JavaScript文件。如果模式以!开头文件被排除在外。如果未指定，则生成的代码应与其源位于同一目录中。 |
| program  | String | 程序运行的入口,'run'和'debug'模式需要。 |
| skipFiles  | Array<String> | 调试时要跳过的文件或文件夹名称数组或路径globs。 |
| sourceMap  | Boolean | 是否启用sourceMap。 |
| sourceMapPathOverrides  | Object | 一组映射，用于将sourceMap文件的位置从源映射中的内容重写到它们在磁盘上的位置。 |
| type  | 'node' | 自定义launch类型, 固定传入'node'。 |
| port  | Number | 要附加到的调试端口, mode为'attach'必传。 |
| cwd  | String | 正在调试的程序的工作目录的绝对路径, 可以使用`${workspaceFolder}`变量, mode为'attach'时必传。|

### express脚手架项目配置

express脚手架项目配置(使用[express生成器](https://www.expressjs.com.cn/starter/generator.html)生成):
   ```json
   {
       "configurations": [
           {
               "mode": "run", //run 或者 debug
               "name": "express运行",
               "program": "${workspaceFolder}/bin/www",
               "request": "attach",
               "type": "node"
           }
       ],
       "version": "0.1"
   }
   ```

### webpack-js项目配置

webpack-js项目配置

项目结构:

<img src="/static/snapshots/node_development/2.jpg" />

   webpack.dev.config.js:
   ```js
   const path = require('path');
   module.exports = {
		entry: {
			index: './index.js'
		},
		mode: "development",
		devtool: "source-map", //开启sourcemap
		target: 'node',
		node: {
			__filename: false,
			__dirname: false
		},
		output: {
			filename: '[name].js',
			path: path.join(__dirname, 'dist')
		}
   }
   ```
  webpack-js运行和调试配置:
  ```json
  {
      "configurations": [
          {
              "mode": "debug",
              "name": "自定义调试文件",
              "outFiles": [
                  "${workspaceFolder}/dist/**/*.js"
              ],
              "program": "${workspaceFolder}/dist/index.js",
              "request": "attach",
              "skipFiles": [
                  "<node_internals>/**/*.js"
              ],
              "sourceMap": true,
              "sourceMapPathOverrides": {
  				"webpack://webpack/*": "${workspaceFolder}/*" // 这里是以`webpack://`开头+生成的source-map文件中的sources字段部分。
              },
              "type": "node"
          }
      ],
      "version": "0.1"
  }
  ```
  `sourceMapPathOverrides`: 键值对<br />
  `key`: 对应source-map中的sources字段(如下图:)

 <img src="/static/snapshots/node_development/3.jpg" />

  `value`: 可以使用`${workspaceFolder}`

### webpack-ts项目配置

webpack.dev.config.js

   ```json
   const path = require('path');

   module.exports = {
		entry: {
			index: './index.ts'
		},
		mode: "development",
		devtool: "source-map",
		target: 'node',
		resolve: {
			extensions: ['.ts'] // 文件扩展名为.ts
		},
		module: {
			rules: [
			  { test: /\.ts$/, use: 'ts-loader' } // 需要安装ts-loader
			]
		},
		node: {
			__filename: false,
			__dirname: false
		},
		output: {
			filename: '[name].js',
			path: path.join(__dirname, 'dist')
		}
   }
   ```
   webpack-ts运行和调试配置:
   ```json
   {
       "configurations": [
           {
               "mode": "debug",
               "name": "自定义调试文件",
               "outFiles": [
                   "${workspaceFolder}/dist/**/*.js"
               ],
               "program": "${workspaceFolder}/dist/index.js",
               "request": "attach",
               "skipFiles": [
                   "<node_internals>/**/*.js"
               ],
               "sourceMap": true,
               "sourceMapPathOverrides": {
   				"webpack://webpack/*": "${workspaceFolder}/*" // 这里是以`webpack://`开头+生成的source-map文件中的sources字段部分。
               },
               "type": "node"
           }
       ],
       "version": "0.1"
   }
   ```

###  tsc调试ts项目

项目根下添加[tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)文件
```json
{
	 "compilerOptions": {
	    "module": "commonjs",
		"noImplicitAny": true,
		"removeComments": true,
		"sourceMap": true, //这里一定要开启，自定义的launch.json中的sourceMap也需要开启
		"outDir": "./dist"
	}
}
```
** 要安装全局目录下的typescript(`npm i -g typescript`)

打开项目的终端，在终端中输入`tsc -w` 就可以进行项目开发

###  attach功能@attach

HBuilderX 3.6.7+，Node调试 支持附加(attach)到已经启动的node进程上断点调试。

launch.json文件，增加`attach`配置，内容如下

```json
  {
      "configurations": [
          {
              "mode": "attach", // 模式设置为attach
              "name": "attach to server",
              "port": 8080, // 要附加到的调试端口
              "cwd": "${workspaceFolder}", // 正在调试的程序的工作目录的绝对路径, 可以使用`${workspaceFolder}`变量
              "request": "attach",
              "skipFiles": [
                  "<node_internals>/**/*.js"
              ],
              "sourceMap": true,
              "type": "node"
          }
      ],
      "version": "0.1"
  }
```
