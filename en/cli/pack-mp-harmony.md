# CLI uni-app Pack - Mp-Harmony Pack@packMpHarmony

> HBuilderX 4.81-alpha supports local packaging for HarmonyOS AtomicService platform using CLI.

This method allows you to complete local packaging of uni-app projects for the HarmonyOS AtomicService platform in command line or other CI tools.

## Basic Usage@usage

1. First, you need to start HBuilderX. (Navigate to HBuilderX installation root directory, enter `cli.exe open` in terminal)
2. For CLI operation, enter in terminal:
```shell
cli pack mp-harmony --project project-name
```

## Command Parameters@params

| Parameter  | Description              |
| ---------- | ------------------------ |
| --help     | Command help            |
| --project  | Required, project name  |


## Usage Examples@example
```shell
# View command help
cli pack mp-harmony --help

# Perform local packaging for HarmonyOS AtomicService platform
cli pack mp-harmony --project demo-app
```
