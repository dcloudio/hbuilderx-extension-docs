#### HBuilderX Project Type

HBuilderX supports multiple project types, and different types of projects run differently.

The following is a list of various project types that can be run.

|                       | web | uniapp | 5+ App| wap2app | QuickApp | WeChat |
| --------------------- | ------- | ------ | ---------- | ------- | ------ | ---------- |
| Run to phone or emulator | ×       | √      | √          | √       | √      | ×          |
| Run to browser           | √       | √      | √          | √       | ×      | ×          |
| Run to mini program           | ×       | √      | ×          | ×       | ×      | √          |
| Run to the terminal          | √      | √      | ×          | ×       | ×      | ×          |

- If your project type is wrong, you cannot run to the specified platform.
- The judgment of the project type is based on the file characteristics in the project root directory, such as manifest.json. If the project imported into HBuilderX has one more parent directory, the correct project type cannot be recognized
- Select the item, click the right button, you can identify the type of Project.
- Menu tool-"HBuilderX icon" is selected in the icon theme of the project manager, and the project type can be displayed intuitively according to the icon.

As follows, legends of different project types:

<img src="/static/snapshots/tutorial/ProjectType.png" style="zoom: 70%;border: 1px solid #eee;" />

#### Notes

1. Markdown files can be previewed in the built-in browser of HBuilderX
2. If a file is opened separately (that is, there is no project in the project manager on the left), it cannot be run on mobile phones, applets, simulators, browsers, etc. (Except html, html can be opened in the built-in browser).
3.  For web projects and uni-app projects, if there is package.json under the project, such as `vue cli project`, you can run it in the terminal