# CLI Native App - Local Packaging (Generate Local Packaging App Resources)@appResource

> HBuilderX 3.4.3-alpha, supports using CLI to generate local packaging App resources.

Through this method, you can complete the generation of local packaging App resources for uni-app, Wap2App, and 5+App projects in command line or other CI tools.

## CLI Command Syntax@cmd

```shell
# Generate local packaging App resources
cli publish --platform APP --type appResource --project project_name
```

| Parameter  | Description                                              |
| ---------- | ------------------------------------------------- |
| --platform | Required, [APP] Native App                               |
| --type     | Required, [appResource] Local packaging (generate local packaging App resources) |
| --project  | Required, project name                                    |
