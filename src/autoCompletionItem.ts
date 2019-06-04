import * as vscode from 'vscode';
import { languageObjects } from './languageObjects';
import { itemMethods, embeddedItems, embeddedItemCompletions } from './sitecoreObjects';
import { sitecoreFunctions } from './sitecoreFunctions';
import { ScribanSnippet } from './types';
import { language } from './languageSyntax';
import { getCodeBlockFromSnippet } from './autoCompletion';
import { isInMoustaches, lineHasPipe } from './regularExpressions';

export function snippetCompletion(snippets: ScribanSnippet[], linePrefix: string, results: vscode.CompletionItem[], kind: vscode.CompletionItemKind) {
	for (let snippet of snippets) {
		const commitCharacterCompletion = new vscode.CompletionItem(snippet.name);
		commitCharacterCompletion.kind = kind;
		commitCharacterCompletion.commitCharacters = ['.'];
		commitCharacterCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
		var inMoustaches = isInMoustaches.test(linePrefix);
		//commitCharacterCompletion.detail = snippet.description;

		// for snippets that can only be insertedin special context like "offset:" in "for" loop.
		if (snippet.validationRegEx !== "") {
			var validationRegex = new RegExp(snippet.validationRegEx);
			if (!validationRegex.test(linePrefix)) {
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
				commitCharacterCompletion.documentation = new vscode.MarkdownString(snippet.description).appendCodeblock(getCodeBlockFromSnippet(snippet.pipeTemplate)).appendCodeblock("\n \n "); // (snippet.pipeCodeBlock);
			} else {
				// if not after pipe, just within moustaches {{ ... }}
				//template must be wrapped with moustaches - those are used inside of pure-HTML snippets

				let template = snippet.template;
				if (Array.isArray(template)) {
					template = template.join("\n");
				}

				if (template === "" || template.startsWith("{")) {
					continue;
				}
				commitCharacterCompletion.insertText = new vscode.SnippetString(template);
				commitCharacterCompletion.documentation = new vscode.MarkdownString(snippet.description).appendCodeblock(getCodeBlockFromSnippet(template)).appendCodeblock("\n \n ") // snippet.codeBlock);
			}
		} else {

			let documentation;
			if (typeof snippet.template === 'string') {
				commitCharacterCompletion.insertText = new vscode.SnippetString("{{ " + snippet.template + " }}");
				documentation = getCodeBlockFromSnippet(snippet.template);
			} else {
				commitCharacterCompletion.insertText = new vscode.SnippetString(snippet.template.join("\n"));
				documentation = getCodeBlockFromSnippet(snippet.template.join("\n"), false);
			}

			commitCharacterCompletion.documentation = new vscode.MarkdownString(snippet.description).appendCodeblock(documentation).appendCodeblock("\n \n "); // snippet.codeBlock);
		}
		results.push(commitCharacterCompletion);
	}
}

export function objectFunctionCompletion(objectName: string, methodName: string, template: string, documentation: string, icon: vscode.CompletionItemKind = vscode.CompletionItemKind.Method): vscode.CompletionItem {
	const completion = new vscode.CompletionItem(methodName);
	completion.documentation = new vscode.MarkdownString(documentation).appendCodeblock("{{ " + objectName + template.replace(/(\${\d+:)|(})/g, "") + " }}");
	completion.kind = icon;
	completion.insertText = new vscode.SnippetString(template);
	return completion;
}
