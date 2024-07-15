# Optimize daily development experience through soft links

**Note**: The soft link function currently only supports HBuilderX 4.21.0 and above
* Through the soft link function, you can soft link the pages, components, APIs and other directories of multiple uni-app projects to the current project, making it easier for developers to develop pages, components, APIs, etc. of multiple projects in one project at the same time, improving development efficiency.
* Currently supports uniapp project and uniappx project

## Usage

1. Prepare an existing **uniappx** project

* Here we use the projects `hello-uni-app-x` and `uni-app` as examples

* `hello-uni-app` project address: <https://gitcode.net/dcloud/hello-uni-app-x.git>

* `uni-app` project address: <http://git.dcloud.io/uni-app-x/uni-app.git>

2. Create a default **uniappx** project through **HBuilderX**

3. Create a `link.json` file in the project root directory, and modify its content to the soft link mapping relationship table

```json
{
    // Soft link mapping relationship table between the current project directory and the source directory
    // key is the directory structure of the current project, value is the source directory
    "uni_modules": ["/Users/xxx/uni-app/api"], // uni-app main warehouse uni_modules Implemented api root directory
    "components": ["/Users/xxx/hello-uni-app-x/components"], // components directory of hello uni-app x root directory
    "pages/API": ["/Users/xxx/hello-uni-app-x/pages/API"] // API page root directory of hello uni-app x
    // ... other custom mappings
}
```

3. Use the command line tool to switch to the project root directory (right-click the project in HBuilderX and click `Open the directory with the command line window`)

4. Execute the command `npx @dcloudio/toolkit link page-head system-info --clear`
* If the file cannot be modified, please use the administrator mode or use the `sudo` command
* You can modify `system-info` to the api or page name you want to soft link, which can be fuzzy matched and supports passing multiple
> After execution, the project will soft link hello uni-app `pages/API/get-system-info/get-system-info`, `components/page-head/page-head.vue` in the repository and `uni-getSystemInfo` in the uni-app repository

5. Run the current project to modify and debug the corresponding sample page and API source code. After the modification and testing are completed, you can submit the changes in the original repository.

> **Note**: The usage of uniapp project is the same as that of uniappx project, except that the source directory is different
> The uniapp project can use **HBuilderX** to obtain the `Hello uniapp` project as the source directory in the project template

### More command parameter descriptions

- `--clear` can clear the previous soft link and pages.json configuration, which is convenient for reinitialization according to the link command
> Example: `npx @dcloudio/toolkit link --clear`, and you can also specify a new directory that needs a soft link at the same time
- `--config` can specify the `link.json` file path to solve the problem of multiple projects sharing the same `link.json`
> Example: `npx @dcloudio/toolkit link --config /Users/xxx/uni/link.json`
