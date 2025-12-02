# CLI Native App - Create Application wgt Package@wgt

> HBuilderX 3.4.3-alpha, supports using CLI to export wgt packages.

Through this method, you can complete the wgt package export for uni-app, Wap2App, and 5+App projects in command line or other CI tools.

## CLI Command Syntax@cmd

```shell
# Export wgt package, default options
cli publish --platform APP --type wgt --project project_name

# Export wgt package, perform native obfuscation on configured js/nvue files
cli publish --platform APP --type wgt --project project_name --confuse true

# Export wgt package, custom export path and name
cli publish --platform APP --type wgt --project project_name --path export_path --name export_name
```

| Parameter  | Description                                                 |
| ---------- | ---------------------------------------------------- |
| --platform | Required, [APP] Native App                                  |
| --type     | Required, [wgt] Create application wgt package                            |
| --project  | Required, project name                                       |
| --name     | Export name (default is: AppID.wgt if not specified)                    |
| --path     | Export path (default is: project_root/unpackage/release if not specified) |
| --confuse  | Perform native obfuscation on configured js/nvue files; boolean, default: false   |
