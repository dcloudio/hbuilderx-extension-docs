# node-development使用手册

> HBuilderX 3.4.10版本起支持

本插件支持调试或运行nodejs项目，也可以自定义运行或调试`js`单文件或者`js`项目，结合`webpack`或者`tsc`也可以调试`ts`。

## 安装node-development插件

HBuilderx, 顶部菜单【工具 - 插件安装】，安装新插件。

<img src="/static/snapshots/node_development/install_node_development.jpg" class="hd-img" />

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

### launcher.json

launch.json中目前支持的变量 `${workspaceFolder}` 指当前项目的根目录

   ```json
	 {
	     "configurations": [ // 配置项
	         {
	             "mode": "debug", // 运行模式
	             "name": "自定义调试文件", //运行菜单的名称(需要唯一)
	             "outFiles": [ // 如果是构建工具构建的，需要使用, 指明输出路径
	                 "${workspaceFolder}/dist/**/*.js"
	             ],
	             "program": "${workspaceFolder}/dist/app.js", //程序运行的入口文件(编译后的)
	             "request": "attach", //请求方式: 固定attach
	             "skipFiles": [ // 调试跳过文件
	                 "<node_internals>/**/*.js"
	             ],
	             "sourceMap": false, // 是否启用sourceMap
	             "sourceMapPathOverrides": { // sourceMap位置
	             },
	             "type": "node" // 类型:node(固定)
	         }
	     ],
	     "version": "0.1"// 版本号
	 }
   ```

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
