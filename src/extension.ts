/*
 * @Author: Skixkk <166358870+Skixkk@users.noreply.github.com>
 * @Date: 2026-09-12 23:54:36
 * @LastEditors: Skixkk <166358870+Skixkk@users.noreply.github.com>
 * @LastEditTime: 2026-09-13 11:24:38
 * @FilePath: \markpandocview\src\extension.ts
 * @Description: logic
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "markpandocview" is now active!');

	// 注册命令
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.markpandocview.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from markpandocview!');
	});

	// 测试 getCurrentFilePath 命令
	const disposableGetCurrentFilePath = vscode.commands.registerCommand('extension.markpandocview.getCurrentFilePath', (uri) => {
		vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.path : '空'}`);
	});

	// 测试 getpandocPath 命令
	// 注册命令 API，执行后会返回一个 Disposable 对象
	const disposable2 = vscode.commands.registerCommand('extension.markpandocview.getpandocPath', () => {
		vscode.window.showInformationMessage('Registration Test: extension.markpandocview.getpandocPath!');
	});

	// 所有注册类的 API 执行后都需要将返回结果放到 context.subscriptions 中去。
	context.subscriptions.push(disposable);
	context.subscriptions.push(disposableGetCurrentFilePath);
	context.subscriptions.push(disposable2);

	context.subscriptions.push(vscode.commands.registerCommand('extension.markpandocview.sayHello', () => {
		vscode.window.showInformationMessage('The extension.sayHello command was executed successfully!');
	}));

	// 编辑器命令
	context.subscriptions.push(vscode.commands.registerTextEditorCommand('extension.testEditorCommand', (textEditor, edit) => {
		console.log('You are executing an editor command！');
		console.log(textEditor, edit);
	}));

	vscode.commands.executeCommand('disposableGetCurrentFilePath', 'disposable').then(result => {
		console.log('Command result', result);
	});

	// 获取所有命令
	vscode.commands.getCommands().then(allCommands => {
		console.log('All commands: ', allCommands);
	});

	// 在VS代码中打开新文件夹
	let uri = vscode.Uri.file('D:/product/Skixkk/markpandocview');
	vscode.commands.executeCommand('vscode.openFolder', uri).then(sucess => {
		console.log('success');
	});
}

// This method is called when your extension is deactivated
/**
 * 插件被释放时触发
 */
export function deactivate() {
	console.log('The “markpandocview” extension has been released!');
}
