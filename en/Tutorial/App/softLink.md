# Enhance Your Daily Development Experience with Soft Linking

**Note:** The soft linking feature is currently only supported in HBuilderX 4.21.0 and above.

* Soft linking allows you to link multiple uni-app project directories, such as pages, components, and APIs, to the current project. This enables developers to work on multiple project pages, components, and APIs simultaneously within a single project, boosting development efficiency.
* Currently supports uni-appx projects only.

## Usage Guide

1. Create a new default uni-app x (select uni-app vue3 for HarmonyOS development) project template using HBuilderX.
2. Create a `link.json` file in the project root directory and modify it with the local repository path.

```json
{
  // Mapping table between the current project directory and the source directory structure, key is the current project directory structure, value is the source directory
  "uni_modules": ["/Users/xxx/uni-app/api"], // Root directory of api implemented by the uni-app main repository uni_modules
  "components": ["/Users/xxx/hello-uni-app-x/components"], // components directory of the root directory of hello uni-app x
  "pages/API": ["/Users/xxx/hello-uni-app-x/pages/API"] // Root directory of API pages of hello uni-app x
  // ... other custom mappings
}
```

3. Switch to the project root directory in the command line (right-click the project in HBuilderX and select "Open the containing directory in the command line window")
4. Execute the command `npx @dcloudio/toolkit link page-head system-info --clear` (you can modify `system-info` to the name of the api or page you want to soft link, support fuzzy matching, and also support passing multiple)
   > After execution, the project will soft link the `pages/API/get-system-info/get-system-info`, `components/page-head/page-head.vue` from the hello uni-app x repository and `uni-getSystemInfo` from the uni-app repository
5. Run the current project and you can modify and debug the corresponding example pages and API source code. Once the modification and testing are complete, you can commit the changes to the original repository.

### Explanation of Additional Command Parameters

- `--clear` Clears the previously linked directories and pages.json configuration, allowing you to reinitialize based on the link command.
> Example: `npx @dcloudio/toolkit link --clear`, you can also specify new directories to soft link at the same time
- `--config` Specifies the `link.json` file path to solve the problem of multiple projects sharing the same `link.json`
