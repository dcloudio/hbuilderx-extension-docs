# CLI uni-app Pack - App-Harmony Pack@packAppHarmony

> HBuilderX 4.67-alpha supports local packaging for HarmonyOS platform using CLI.

This method allows you to complete local packaging of uni-app(x) projects for the HarmonyOS platform in command line or other CI tools.

## Basic Usage@usage

1. First, you need to start HBuilderX. (Navigate to HBuilderX installation root directory, enter `cli.exe open` in terminal)
2. For CLI operation, enter in terminal:
```shell
cli pack app-harmony --project project-name
```

## Command Parameters@params

| Parameter  | Description              |
| ---------- | ------------------------ |
| --help     | Command help            |
| --project  | Required, project name  |


## Usage Examples@example
```shell
# View command help
cli pack app-harmony --help

# Perform local packaging for HarmonyOS platform
cli pack app-harmony --project demo-app
```
