# CLI uni-app Run Logs - WEB@launch-web

> HBuilderX cli command line tool

> Requires HBuilderX 4.87+ version

> You can also use this feature through npm package: [@dcloudio/hbuilderx-cli](https://www.npmjs.com/package/@dcloudio/hbuilderx-cli)

View uni-app application logs running on Web or Mobile H5 through CLI. [Learn about HBuilderX CLI](/cli/README?id=cli)

You can add cli to the environment variables, so you can call cli anytime, anywhere in any directory or terminal, without having to use it by entering the absolute path of cli. [Details](/cli/env)

## Command Description

### logcat web

View logs for running on Web or Mobile H5

**Usage:**

```shell
./cli logcat web --help
```

**Parameters:**

| Parameter | Description                                                                       |
| --------- | --------------------------------------------------------------------------------- |
| --help    | Display cli command help                                                          |
| --project | Project name or absolute path imported in HBuilder X                             |
| --browser | Browser type, values: Built, Chrome, Firefox, Ie, Edge, Safari, default is Built (HBuilderX built-in browser) |
| --mode    | Log mode, values: full, lastBuild, prevBuild, default is prevBuild               |

**Usage Examples:**

```shell
# View Web logs (using default browser)
./cli logcat web --project ProjectName

# View Web logs (specify Chrome browser)
./cli logcat web --project ProjectName --browser Chrome

# View Web logs (specify Firefox browser)
./cli logcat web --project ProjectName --browser Firefox

# View Web logs (specify Edge browser)
./cli logcat web --project ProjectName --browser Edge

# View Web logs (specify Safari browser)
./cli logcat web --project ProjectName --browser Safari

# View Web logs (specify IE browser)
./cli logcat web --project ProjectName --browser Ie

# View Web logs (specify log mode)
./cli logcat web --project ProjectName --mode full

# View Web logs (combined parameters: specify browser + log mode)
./cli logcat web --project ProjectName --browser Chrome --mode lastBuild
```

**CLI Practical Usage Examples**

```shell
# Mac: Use cli to view hello-uni-app-x project running on Chrome logs
/Applications/HBuilderX.app/Contents/MacOS/cli logcat web --project hello-uni-app-x --browser Chrome

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat web --project /User/apple/Desktop/hello-uni-app-x --browser Chrome

# Windows: Use cli to view hello-uni-app-x project running on Chrome logs
D:\ide\HBuilderX\cli.exe logcat web --project hello-uni-app-x --browser Chrome
```

<img src="https://web-ext-storage.dcloud.net.cn/hx/cli/cli-logcat-web.jpg?t=1" style="zoom: 40%;" />

## Using CLI through npm scripts@npm

We need to install [@dcloudio/hbuilderx-cli](https://www.npmjs.com/package/@dcloudio/hbuilderx-cli) in the project, which serves as a bridge that allows us to call HBuilderX's powerful features through the command line (such as starting test processes).

#### Add npm Script Support

```shell
# First, make sure there is a package.json file in your project root directory. If not, you can quickly generate it with the following command:
npm init -y

# Then, install hbuilderx-cli as a development dependency:
npm install @dcloudio/hbuilderx-cli --save-dev
```

#### View Logs Using npm Commands

```shell
# View uni-app(x) HBuilderX built-in browser run logs
npm run logcat:web

# View uni-app(x) Chrome run logs
npm run logcat:web -- --browser Chrome

# View uni-app(x) Safari run logs
npm run logcat:web -- --browser Safari
```