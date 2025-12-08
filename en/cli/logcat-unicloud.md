# CLI uni-app Run Logs - uniCloud

> HBuilderX cli command line tool

> Requires HBuilderX 4.87+ version

View logs for running on uniCloud through CLI. [Learn about HBuilderX CLI](/cli/README?id=cli)

You can add cli to the environment variables, so you can call cli anytime, anywhere in any directory or terminal, without having to use it by entering the absolute path of cli. [Details](/cli/env)

## Command Description

### logcat unicloud

View logs for running on uniCloud

**Usage:**

```shell
./cli logcat unicloud --project ProjectName
```

**Parameters:**

| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| --project | Project name or absolute path imported in HBuilder X |


**CLI Practical Usage Examples:**

```shell
# Mac: Use cli to view uniCloud logs for hello-uni-app-x project
/Applications/HBuilderX.app/Contents/MacOS/cli logcat unicloud --project hello-uni-app-x

# Mac: --project passing absolute path
/Applications/HBuilderX.app/Contents/MacOS/cli logcat unicloud --project /User/apple/Desktop/hello-uni-app-x

# Windows: Use cli to view uniCloud logs for hello-uni-app-x project
D:\ide\HBuilderX\cli.exe logcat unicloud --project hello-uni-app-x
```
