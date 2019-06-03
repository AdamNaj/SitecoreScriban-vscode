/*---------------------------------------------------------
 * Copyright (C) Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';
import { languageObjects } from './languageObjects';
import { itemMethods, embeddedItems, embeddedItemCompletions } from './sitecoreItems';
import { sitecoreFunctions } from './sitecoreFunctions';
import { ScribanSnippet } from './types';
import { language } from './language';

export function activate(context: vscode.ExtensionContext) {

	const lineHasPipe = new RegExp(/[{]([^}\n]+)\|\s+\w+$/);
	const isInMoustaches = new RegExp(/[{]([^}]+)$/);

	let rootProvider = vscode.languages.registerCompletionItemProvider('scriban', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			let linePrefix = document.lineAt(position).text.substr(0, position.character);

			var results = [];

			if (!linePrefix.endsWith(".")) {
				// a completion item that can be accepted by a commit character,
				// the `commitCharacters`-property is set which means that the completion will
				// be inserted and then the character will be typed.
				for (let embeddedObject of languageObjects) {
					const commitCharacterCompletion = new vscode.CompletionItem(embeddedObject.name);
					commitCharacterCompletion.kind = vscode.CompletionItemKind.Function;
					commitCharacterCompletion.insertText = embeddedObject.name;
					commitCharacterCompletion.commitCharacters = ['.'];
					//commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');
					commitCharacterCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
					results.push(commitCharacterCompletion);
				}

				snippetCompletion(sitecoreFunctions, linePrefix, results, vscode.CompletionItemKind.Function);
				snippetCompletion(language, linePrefix, results, vscode.CompletionItemKind.Snippet);

				for (let item of embeddedItemCompletions) {
					const commitCharacterCompletion = new vscode.CompletionItem(item.name);
					commitCharacterCompletion.kind = vscode.CompletionItemKind.Variable;
					commitCharacterCompletion.insertText = item.name;
					commitCharacterCompletion.commitCharacters = ['.'];
					commitCharacterCompletion.documentation = new vscode.MarkdownString(item.description);
					commitCharacterCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
					results.push(commitCharacterCompletion);
				}
			}
			return results;
		},
	});

	function snippetCompletion(snippets: ScribanSnippet[], linePrefix : string, results : vscode.CompletionItem[], kind : vscode.CompletionItemKind){
		for (let snippet of snippets) {
			const commitCharacterCompletion = new vscode.CompletionItem(snippet.name);
			commitCharacterCompletion.kind = kind;
			commitCharacterCompletion.commitCharacters = ['.'];
			commitCharacterCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
			var inMoustaches = isInMoustaches.test(linePrefix);
			commitCharacterCompletion.detail = snippet.description;
			if (snippet.validationRegEx !== ""){
				var validationRegex = new RegExp(snippet.validationRegEx);
				if(!validationRegex.test(linePrefix)){
					continue;
				}
			}
			if (inMoustaches) {
				// if inside moustache block {{ }}					
				if (lineHasPipe.test(linePrefix)) {
					// if inside moustache block after a pipe {{ ... |
					if (snippet.pipeTemplate === "") {
						continue;
					}
					commitCharacterCompletion.insertText = new vscode.SnippetString(snippet.pipeTemplate + " ");
					commitCharacterCompletion.documentation = new vscode.MarkdownString("").appendCodeblock(snippet.pipeCodeBlock);
				} else {
					// if not after pipe, just within moustaches {{ ... }}
					//template must be wrapped with moustaches - those are used inside of pure-HTML snippets
					
					var template = snippet.template;
					if(Array.isArray(template))
					{
						template = template.join("\n");
					}

					if (template === "" || template.startsWith("{")) {
						continue;
					}
					commitCharacterCompletion.insertText = new vscode.SnippetString(template);
					commitCharacterCompletion.documentation = new vscode.MarkdownString("").appendCodeblock(snippet.codeBlock);
				}
			} else {

				commitCharacterCompletion.documentation = new vscode.MarkdownString("").appendCodeblock(snippet.codeBlock);

				if (typeof snippet.template === 'string') {
					commitCharacterCompletion.insertText = new vscode.SnippetString("{{ " + snippet.template + " }}");
				} else {
					commitCharacterCompletion.insertText = new vscode.SnippetString(snippet.template.join("\n"));
				}
			}
			results.push(commitCharacterCompletion);
		}
	}

	function objectFunctionCompletion(objectName: string, methodName: string, template: string, documentation: string): vscode.CompletionItem {
		const completion = new vscode.CompletionItem(methodName);
		completion.documentation = new vscode.MarkdownString(documentation).appendCodeblock("{{ "+objectName+template.replace(/(\${\d+:)|(})/g,"")+" }}");
		completion.kind = vscode.CompletionItemKind.Method;
		completion.insertText = new vscode.SnippetString(template);
		return completion;
	}

	const methodProvider = vscode.languages.registerCompletionItemProvider(
		'scriban',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				// get all text until the `position` and check if it reads `console.`
				// and iff so then complete if `log`, `warn`, and `error`
				let linePrefix = document.lineAt(position).text.substr(0, position.character);

				// var textUntilPosition = document.getText(new vscode.Range(new vscode.Position(0,0), position));

				var results: vscode.CompletionItem[] = [];

				for (let embeddedObject of languageObjects) {
					var objectName = embeddedObject.name + ".";
					if (linePrefix.endsWith(objectName)) {
						if (linePrefix.endsWith('| ' + objectName)) {
							embeddedObject.methods.forEach(element => {
								var description = element.description + "... [more](https://github.com/lunet-io/scriban/blob/master/doc/builtins.md#"+embeddedObject.name+element.name+")";
								results.push(objectFunctionCompletion(objectName, element.name, element.pipeTemplate, description))
							});
						}
						else {
							embeddedObject.methods.forEach(element => {
								var description = element.description + "... [more](https://github.com/lunet-io/scriban/blob/master/doc/builtins.md#"+embeddedObject.name+element.name+")";
								results.push(objectFunctionCompletion(objectName, element.name, element.template, description))
							});
						}
					}
				}

				for (let embeddedItem of embeddedItems) {
					var itemPrefix = embeddedItem + ".";
					if (linePrefix.endsWith(itemPrefix)) {
						itemMethods.forEach(element => {
							results.push(objectFunctionCompletion(embeddedItem, element.name, element.template, element.name))
						});

					}
				}

				return results;
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	context.subscriptions.push(rootProvider, methodProvider);
}
