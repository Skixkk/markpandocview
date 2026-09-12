<!--
 - @Author: Skixkk <166358870+Skixkk@users.noreply.github.com>
 - @Date: 2026-08-24 04:49:26
 * @LastEditors: Skixkk <166358870+Skixkk@users.noreply.github.com>
 * @LastEditTime: 2026-09-12 18:56:13
 - @FilePath: \markpandocview\README.md
 - @Description: README
-->

# markpandocview

> VSCode 插件：使用 pandoc 渲染 Markdown，在 WebView 实时预览文档

## Features

- 调用本地 pandoc 命令，将 Markdown 转为 Word & pdf，在 VSCode WebView 内预览
- 实时监听 Markdown 文件变更，自动刷新预览窗口
- 支持 pandoc 语法：脚注、引用、表格、公式、yaml 元数据、自定义模板
- 可配置 pandoc 命令参数、输出模板、资源根目录
- 预览窗口支持打开多个，独立控制

## Requirements

1. 本地安装 pandoc，并配置环境变量，保证终端可以直接调用 `pandoc`
2. VSCode >= 1.137.0

> 下载 pandoc：[https://pandoc.org/installing.html](https://pandoc.org/installing.html)

## Dev： Extension Settings

This extension contributes the following settings:

- `markpandocview.pandocPath`: pandoc 可执行文件路径，不填则使用系统 PATH 内的 pandoc
- `markpandocview.extraArgs`: 传递给 pandoc 的额外命令行参数（数组）
- `markpandocview.templatePath`: 自定义 pandoc html 模板文件路径
- `markpandocview.autoReload`: 文件修改时自动刷新预览，默认为 true
- `markpandocview.openInNewTab`: 每次预览打开独立 WebView 标签，默认为 false

## Commands

- `markpandocview.openPreview`: 打开 Markdown Pandoc 预览

## Known Issues

- 图片路径依赖 pandoc 转换逻辑，相对路径解析受工作目录影响
- 预览依赖本地 pandoc，未安装 pandoc 会直接报错
- 复杂 latex 公式需要额外安装 pandoc 依赖（如 texlive）

## Release Notes

### 0.0.1

Initial release of markpandocview

- 基础 WebView 预览
- 文件变更自动刷新
- pandoc 参数自定义配置

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

- [Extension Guidelines]([https://code.visualstudio.com/api/references/extension-guidelines](https://code.visualstudio.com/api/references/extension-guidelines))

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

- Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
- Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
- Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

- [http://code.visualstudio.com/docs/languages/markdown](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference]([https://help.github.com/articles/markdown-basics/](https://help.github.com/articles/markdown-basics/))

--Enjoy!--
