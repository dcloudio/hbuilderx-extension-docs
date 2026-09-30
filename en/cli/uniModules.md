# uni_modules CLI Command Usage Guide@uniModules

The `uni_modules` CLI covers the whole plugin development workflow: creating a plugin, publishing a new version, maintaining marketplace profile, installing plugin dependencies, pre-publish validation, and downloading, updating and listing plugins in a project.

## Prerequisites@requirement

- **HBuilderX version**: creating a plugin, publishing a plugin, updating plugin info, installing dependencies and pre-publish validation require HBuilderX 5.31 or later; `--download`, `--upgrade` and `--list` work on HBuilderX 5.0 and later.
- **Signed in with a plugin author account**: networked commands such as publish, download and update need a plugin author account. The command tells you when you are not signed in; see [User account operations](/cli/user).

All examples below use `cli` for the command line tool inside the HBuilderX installation directory (on Windows it is `cli.exe`, on macOS and Linux it is `cli`), consistent with the [CLI overview](/cli/README). Replace `D:\projects\my-uniapp` in the examples with your own project path, and `yourname-demo` with your own plugin ID, where `yourname` is the author ID placeholder.

## Command List@overview

| Command | Purpose | Requires plugin author sign-in | Version |
| --- | --- | --- | --- |
| `--create` | Create a uni_modules plugin | No | 5.31+ |
| `--publish` | Publish a plugin to the marketplace | Yes | 5.31+ |
| `--updateInfo` | Update the basic info of a published plugin | Yes | 5.31+ |
| `--install` | Install the dependencies declared by a plugin | Yes | 5.31+ |
| `--validate` | Validate a plugin before publishing | Yes | 5.31+ |
| `--download` | Download a plugin from the marketplace into a project | Yes | 5.0+ |
| `--upgrade` | Update a plugin in a project from the marketplace | Yes | 5.0+ |
| `--list` | List the plugins installed in a project | No | 5.0+ |

Notes:

- Except for `--list`, every command needs `--project` with the absolute path of a project; only one command can run at a time.
- Networked commands such as publish and download use the plugin author account, so sign in inside HBuilderX first; the command tells you when you are not signed in.
- `--create` and `--list` work fully offline and do not require sign-in.

## Common Parameters@common

| Parameter | Description |
| --- | --- |
| `--project <path>` | Absolute path of the project; supports uni-app, uni-app x and their CLI projects; required for every command except `--list` |
| `--json` | Prints a single stable JSON result without progress logs, suitable for CI/CD |
| `--dryRun` | Validates and packs only: no marketplace data is submitted and nothing is written to the project; supported by `--create`, `--publish` and `--updateInfo` |
| `--force` | Allows overwriting conflicting plugin files; supported by `--download`, `--upgrade` and `--install` |

> Commands also accept a small set of internal parameters used by callers such as HBuilderV to organize messages by calling environment; they are not listed in help, so command line users can follow this document.

### Execution Log@log

Commands print progress logs while running, covering reading plugin info, validating, packing or downloading, and submitting. How long downloading and uploading take depends on the network and plugin size, so please wait; the final result is printed when the command ends.

### JSON Output@json

With `--json` only one JSON object is printed, which is easy for scripts to parse.

On success:

```json
{"success":true,"result":{"action":"publish","pluginId":"yourname-demo","version":"1.0.1","outcome":"published"}}
```

On failure:

```json
{"success":false,"error":{"code":"SERVER_REJECTED","stage":"submit","message":"插件发布失败。","suggestion":"请根据服务端提示修正插件信息；确认版本未发布后再重试。","issues":[]}}
```

- `code`: stable error identifier for script branching
- `stage`: failing stage, such as `arguments` (parameters), `validate` (validation) and `submit` (submission)
- `message`, `suggestion`: the reason and the suggested action
- `issues`: list of validation problems, each item contains the field, the reason and the suggested action

## Help@help

```shell
# Command overview
cli uni_modules --help

# Full usage of one command (parameters, examples, side effects)
cli uni_modules --publish help

# Help as JSON, for tool integration
cli uni_modules --publish help --json
```

## Create Plugin@create

Creates the skeleton of a uni_modules plugin in a project from a template, including the plugin directory, `package.json`, `readme.md`, `changelog.md` and the files of the template.

#### Syntax

```shell
cli uni_modules --create <plugin id> --template <template type> --project <project path> [--dryRun] [--json]
```

#### Parameters

| Parameter | Description |
| --- | --- |
| `--create <plugin id>` | Required. Plugin ID in the form "author ID-plugin name"; only letters, digits, underscores and hyphens are allowed; regular accounts cannot use the reserved prefixes `uni`, `dcloud` and `uts` |
| `--template <template type>` | Required. See the template table below |
| `--project <project path>` | Required. Absolute path of the project |
| `--dryRun` | Validates and lists the files that would be created without writing them |
| `--json` | Prints JSON |

#### Template Types

| Template type | Plugin category | Supported projects |
| --- | --- | --- |
| `component-vue` | Front-end component - Vue component | uni-app, uni-app x |
| `component-mp` | Front-end component - Mini program component | uni-app, uni-app x |
| `sdk-js` | JS SDK | uni-app, uni-app x |
| `uts` | UTS plugin - API plugin | uni-app, uni-app x |
| `component-uts` | UTS plugin - uni-app compatible mode component (formerly "component plugin") | uni-app, uni-app x |
| `uts-vue-component` | UTS plugin - standard mode component | uni-app x only |
| `uniapp-template-page` | Front-end page template | uni-app, uni-app x |
| `unicloud-template-function` | Cloud function template | uni-app, uni-app x |
| `unicloud-template-page` | Cloud integrated page template | uni-app, uni-app x |
| `unicloud-admin` | uniCloud Admin plugin | uni-app, uni-app x |
| `unicloud-database` | DB Schema and validation functions | uni-app, uni-app x |
| `uasm` | UASM plugin | uni-app x only |

#### Examples

```shell
# Create a Vue component plugin
cli uni_modules --create yourname-demo --template component-vue --project D:\projects\my-uniapp

# Create a UTS API plugin in a uni-app x project
cli uni_modules --create yourname-uts --template uts --project D:\projects\my-uniappx

# Only preview the files that would be created
cli uni_modules --create yourname-demo --template sdk-js --project D:\projects\my-uniapp --dryRun
```

#### Notes

- The plugin is created in `uni_modules/<plugin id>` of the project; if a plugin with the same ID already exists the command fails and never overwrites it.
- `uts-vue-component` (UTS plugin - standard mode component) and `uasm` (UASM plugin) only support uni-app x projects. The project type is detected from `manifest.json` in the project root; using these templates in a regular uni-app project asks you to choose another template.
- The plugin is not published automatically; sign in with a plugin author account and run `--publish` when you are ready.

## Publish Plugin to the Marketplace@publish

Publishes a plugin as a new version, and can upload plugin screenshots after a successful publish.

#### Syntax

```shell
cli uni_modules --publish <plugin id> --project <project path> [--changeLog <changelog>] [--imageFile <image path> ...] [--imageDir <image directory>] [--example] [--dryRun] [--json]
```

#### Parameters

| Parameter | Description |
| --- | --- |
| `--publish <plugin id>` | Required. Local plugin ID to publish |
| `--project <project path>` | Required. Absolute path of the project |
| `--changeLog <changelog>` | Changelog text for this release; when omitted, the content of `changelog.md` in the plugin root is used |
| `--imageFile <image path>` | Plugin screenshots uploaded after a successful publish; repeat the parameter for several images; JPG, JPEG and PNG are supported, up to 1 MB per image |
| `--imageDir <image directory>` | Reads JPG, JPEG and PNG files from the directory and uploads them ordered by file name; cannot be combined with `--imageFile` |
| `--example` | Also packs the example project; not supported by project plugins and IDE plugins |
| `--dryRun` | Validates and packs without submitting marketplace data |
| `--json` | Prints JSON |

#### Examples

```shell
# Publish a new version; the changelog comes from changelog.md
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp

# Pass the changelog on the command line
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp --changeLog "Fix the redirect failure after the login state expires"

# Publish and upload two screenshots
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp --imageFile D:\shots\1.png --imageFile D:\shots\2.png

# Publish and upload every image in a directory
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp --imageDir D:\shots

# Only validate and pack, without submitting marketplace data
cli uni_modules --publish yourname-demo --project D:\projects\my-uniapp --dryRun
```

#### Changelog

- The changelog comes from `changelog.md` in the plugin root. The CLI writes the current version heading automatically (in the form `## 1.0.1 (2026-09-23)`), so you only fill in what changed in this release.
- With `--changeLog`, the parameter value is written into `changelog.md` as the content of the current version.
- When `changelog.md` has no publishable content, the command reports "未填写本次发布的更新日志，无法继续发布。" (no changelog for this release); add the content or use `--changeLog`.

#### Pre-publish Validation

Local validation and server-side validation run before publishing; when something fails, every problem and its suggested action is listed at once. Typical checks:

| Check | Requirement |
| --- | --- |
| Manifest fields | `id`, `displayName`, `version`, `description`, `keywords` and `dcloudext.type` in `package.json` cannot be empty |
| Compliance declaration | `dcloudext.declaration.permissions` (system permissions), `.data` (data collection) and `.ads` (ads) are required; write "无" / "插件不采集任何数据" / "无广告" (none) when they do not apply |
| Compatibility | "Supported uni-app version", "minimum compatible version", "front-end platform compatibility" and "cloud platform compatibility" are validated per plugin category. Cloud function templates and DB Schema, for example, skip front-end platforms but still need at least one cloud platform |
| Plugin files | The instructions in `readme.md` need at least 30 characters; `changelog.md` must contain the changelog of the current version |
| Special categories | `uasm` (UASM plugin) must declare `dcloudext.vapor` as `"√"` (steam mode supported) |

The server also validates version status, account permissions and other rules; follow the returned suggestions and retry.

#### Notes

- After a successful publish the CLI prints the marketplace URL. Screenshots are uploaded through a separate interface after the version is published, so a failed screenshot upload does not affect the published version.
- After changing `package.json` or `changelog.md` in the plugin directory, publish again so the marketplace profile matches the local files.

## Update Plugin Info@updateInfo

Updates the basic info of a plugin that is already published, such as name, description, keywords, price and declarations. No new version is created.

#### Syntax

```shell
cli uni_modules --updateInfo <plugin id> --project <project path> [--example] [--dryRun] [--json]
```

#### Parameters

| Parameter | Description |
| --- | --- |
| `--updateInfo <plugin id>` | Required. Plugin ID already published to the marketplace |
| `--project <project path>` | Required. Absolute path of the project |
| `--example` | Also updates the example project; not supported by project plugins and IDE plugins |
| `--dryRun` | Validates and packs without submitting marketplace data |
| `--json` | Prints JSON |

#### Examples

```shell
# Update plugin profile
cli uni_modules --updateInfo yourname-demo --project D:\projects\my-uniapp

# Only validate, without submitting
cli uni_modules --updateInfo yourname-demo --project D:\projects\my-uniapp --dryRun
```

#### Notes

- When the plugin is not published yet, the command reports that the basic info cannot be updated and asks you to publish it first.
- The changes must satisfy the publish validation rules, such as manifest fields, compliance declarations and compatibility.

## Install Plugin Dependencies@install

Installs the dependencies declared in `uni_modules.dependencies` of a plugin, together with the related plugins those dependencies need.

#### Syntax

```shell
cli uni_modules --install <plugin id> --project <project path> [--force] [--json]
```

#### Parameters

| Parameter | Description |
| --- | --- |
| `--install <plugin id>` | Required. The `uni_modules.dependencies` of this plugin are read |
| `--project <project path>` | Required. Absolute path of the project |
| `--force` | Allows overwriting conflicting plugin files |
| `--json` | Prints JSON |

#### Examples

```shell
# Install the dependencies declared by the plugin
cli uni_modules --install yourname-demo --project D:\projects\my-uniapp

# Overwrite when dependencies conflict with plugins already in the project
cli uni_modules --install yourname-demo --project D:\projects\my-uniapp --force
```

#### Notes

- The command downloads the dependencies and their related plugins into the project and prints progress plus a summary (how many plugins were added, updated or skipped).
- Only uni_modules plugin dependencies are handled; `npm install` is not executed, so install npm dependencies separately.

## Validate Before Publishing@validate

Checks whether a plugin satisfies the publish requirements without publishing it or changing any remote data.

#### Syntax

```shell
cli uni_modules --validate <plugin id> --project <project path> [--json]
```

#### Parameters

| Parameter | Description |
| --- | --- |
| `--validate <plugin id>` | Required. Plugin ID to check |
| `--project <project path>` | Required. Absolute path of the project |
| `--json` | Prints JSON |

#### Examples

```shell
# Check whether the plugin can be published
cli uni_modules --validate yourname-demo --project D:\projects\my-uniapp
```

#### Notes

- The rules match `--publish`, so it fits a manual pre-publish check or a continuous integration step.
- On success it prints "插件 yourname-demo 校验通过，版本 1.0.1。" (validation passed); on failure it lists every problem with its suggested action.

## Download Plugin@download

Downloads the specified `uni_modules` plugin from the [Plugin Marketplace](https://ext.dcloud.net.cn/) into a project.

#### Syntax

```shell
cli uni_modules --download <plugin id> --project <project path> [--version <version>] [--extType <type>] [--force] [--json]
```

#### Parameters

| Parameter | Description |
| --- | --- |
| `--download <plugin id>` | Required. Plugin ID to download |
| `--project <project path>` | Required. Absolute path of the project |
| `--version <version>` | Version to download; the latest version is downloaded when omitted |
| `--extType <type>` | License type to download: `source` for the source code licensed version, `encrypt` for the standard licensed version |
| `--force` | Allows overwriting conflicting plugin files |
| `--json` | Prints JSON |

#### Examples

```shell
# Download the latest version
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp

# Download a specific version
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --version 1.0.5

# Download the source code licensed version
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --extType source

# Overwrite the installed plugin
cli uni_modules --download uni-id-pages --project D:\projects\my-uniapp --force
```

#### Notes

- The plugin dependencies are downloaded and written into the project as well.
- A plugin author account is required; before downloading a paid plugin make sure the account owns the matching license.
- To import a plugin the way the IDE does (project selection, cloud development initialization and so on), use "Import from the plugin marketplace" in the HBuilderX UI instead.

## Update Plugin@upgrade

Checks the marketplace and updates the specified plugin in a project.

#### Syntax

```shell
cli uni_modules --upgrade <plugin id> --project <project path> [--force] [--json]
```

#### Parameters

| Parameter | Description |
| --- | --- |
| `--upgrade <plugin id>` | Required. Local plugin ID to update |
| `--project <project path>` | Required. Absolute path of the project |
| `--force` | Allows overwriting conflicting plugin files |
| `--json` | Prints JSON |

#### Examples

```shell
# Update the specified plugin to the latest version
cli uni_modules --upgrade uni-id-pages --project D:\projects\my-uniapp
```

#### Notes

- When the plugin is already up to date, the command reports that no update is needed.
- When plugin files were modified locally or conflict with dependencies, add `--force` explicitly to overwrite them.

## View Plugin List@list

Lists every `uni_modules` plugin installed in a project.

#### Syntax

```shell
cli uni_modules --list --project <project path> [--json]
```

#### Parameters

| Parameter | Description |
| --- | --- |
| `--list` | Required. Lists the installed plugins |
| `--project <project path>` | Required. Absolute path of the project |
| `--json` | Prints JSON |

#### Examples

```shell
# View the plugins installed in the project
cli uni_modules --list --project D:\projects\my-uniapp

# Print JSON for scripts
cli uni_modules --list --project D:\projects\my-uniapp --json
```

#### Notes

- A regular project is read from `uni_modules` in the project root, a uni-app CLI project from `src/uni_modules`.
- The command only reads project files and never modifies them; when the project has no plugins it prints "当前项目下不存在uni_modules插件。" (no uni_modules plugin in this project).

## FAQ@faq

**"Command not found" or "unsupported parameter".** Check that the HBuilderX version meets the requirements in the command list above (`uni_modules` ships with HBuilderX and needs no separate installation), then run the command again.

**"Not signed in".** Run `cli user login --username <username> --password <password>` to sign in with a plugin author account (see [User account operations](/cli/user)), then run the command again.

**"Version already exists".** The marketplace does not allow publishing the same version twice; change `version` in `package.json`, add the changelog for the new version and publish again.

**"No changelog for this release".** Fill in the current release note at the top of `changelog.md` in the plugin root, or pass `--publish --changeLog "what changed"`.

**How dependencies relate to npm.** `--install` only handles the plugin dependencies declared in `uni_modules.dependencies` of `package.json`; it does not run `npm install`.

**The command takes a long time.** Downloading and uploading print progress logs; if a script consumes the output, add `--json` to get a structured result.

## Related Documents@related

- [uni_modules directory specification](https://uniapp.dcloud.net.cn/plugin/uni_modules.html)
- [Plugin marketplace](https://ext.dcloud.net.cn/)
- [CLI overview](/cli/README)
- [CLI user account operations](/cli/user)
