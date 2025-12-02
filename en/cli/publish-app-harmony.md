# CLI uni-app Publish - App-Harmony-Local Packaging App Resources@publishAppHarmony

> HBuilderX 4.71-alpha, supports using CLI to generate local packaging App resources for HarmonyOS platform.

Through this method, you can complete the generation of local packaging App resources for uni-app (x) projects in command line or other CI tools.

## Basic Usage@usage

1. First, you need to start HBuilderX. (Enter the HBuilderX installation directory root and input `cli.exe open` in the terminal)
2. Run CLI, input in terminal
```shell
cli publish app-harmony --type resource_type --project project_name
```

## Command Parameters@params

| Parameter  | Description                                                            |
| ---------- | -------------------------------------------------------------- |
| --type     | Required, resource type, values are `appResource` or `wgt`, representing packaging App resources or wgt |
| --project  | Required, project name                                                  |

## Usage Example@example
```shell
# Generate local packaging App resources
cli publish app-harmony --type appResource --project demo-app
```
