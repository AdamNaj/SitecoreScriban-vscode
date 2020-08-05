/*---------------------------------------------------------
 * Copyright (C) 2019 - Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';
import { provideGlobalCompletionItems, provideFunctionCompletionItems } from './autoCompletion';

export function activate(context: vscode.ExtensionContext) {


    let rootProvider = vscode.languages.registerCompletionItemProvider('scriban', {

        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
            return provideGlobalCompletionItems(document, position, token, context);
        },
    });


    const methodProvider = vscode.languages.registerCompletionItemProvider(
        'scriban',
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                return provideFunctionCompletionItems(document, position);
            }
        },
        '.' // triggered whenever a '.' is being typed
    );

}
