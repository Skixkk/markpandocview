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
	const disposable1 = vscode.commands.registerCommand('extension.markpandocview.getCurrentFilePath', () => {
		vscode.window.showInformationMessage('Registration Test: extension.markpandocview.getCurrentFilePath!');
	});

	// 测试 getpandocPath 命令
	const disposable2 = vscode.commands.registerCommand('extension.markpandocview.getpandocPath', () => {
		vscode.window.showInformationMessage('Registration Test: extension.markpandocview.getpandocPath!');
	});
	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable1);
	context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
/**
 * 插件被释放时触发
 */
export function deactivate() {
	console.log('The “markpandocview” extension has been released!');
}
