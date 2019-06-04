/*---------------------------------------------------------
 * Copyright (C) Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';
import { languageObjects } from './languageObjects';
import { itemMethods, embeddedItems, embeddedItemCompletions } from './sitecoreObjects';
import { sitecoreFunctions } from './sitecoreFunctions';
import { ScribanSnippet } from './types';
import { language } from './languageSyntax';
import { provideGlobalCompletionItems, provideFunctionCompletionItems } from './autoCompletion';

export function activate(context: vscode.ExtensionContext) {


	let rootProvider = vscode.languages.registerCompletionItemProvider('scriban', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			return provideGlobalCompletionItems(document,position,token,context);
		},
	});


	const methodProvider = vscode.languages.registerCompletionItemProvider(
		'scriban',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				return provideFunctionCompletionItems(document,position);
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	context.subscriptions.push(rootProvider, methodProvider);
}
