#### HBuilderX Project Type

HBuilderX supports multiple project types and each type can run in multiple environments.

The following is a list of various project types and the environments in which they can run.

|                       | web | uniapp | 5+ App| wap2app | QuickApp | WeChat |
| --------------------- | ------- | ------ | ---------- | ------- | ------ | ---------- |
| Run to phone or emulator | ×       | √      | √          | √       | √      | ×          |
| Run to browser           | √       | √      | √          | √       | ×      | ×          |
| Run to mini program           | ×       | √      | ×          | ×       | ×      | √          |
| Run to the terminal          | √      | √      | ×          | ×       | ×      | ×          |

- The project cannot be run on the specified platform because of wrong type.
- The project type is determined by manifest.json located in the root directory of the project. If the manifest.json file is in the wrong location/folder, HBuilderX will not be able to recognize the project type.
- Click the project name, then right-click and choose "Redetect Project Type", HBuilderX can recognize the project type.
- From menu "Tool->File Icon Theme", choose "HBuilderX Icon" and each file of the project will display an icon according to the file type.

See the following image for project types:

<img src="/static/snapshots/tutorial/ProjectType.png" style="zoom: 70%;border: 1px solid #eee;" />

#### Notes

1. Markdown files can be previewed in the built-in browser of HBuilderX.
2. If a file is opened separately (that is, there is no project in the project manager on the left), it cannot be run on mobile phones, wechat apps, simulators, browsers, etc. (Except html, html can be opened in the built-in browser).
3. For web projects and uni-app projects, if there is package.json under the project, such as `vue cli project`, you can run it in the terminal.
