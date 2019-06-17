/*---------------------------------------------------------
 * Copyright (C) 2019 - Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';
import { languageObjects } from './languageObjects';
import { itemMethods, embeddedItemCompletions, fieldMethods } from './sitecoreObjects';
import { sitecoreFunctions } from './sitecoreFunctions';
import { language } from './languageSyntax';
import { isInFunctionCompletion, codeBlockFromTemplate, stripFunctionNameFromLine, isInFieldCompletion, isInScriban } from './regularExpressions';
import { snippetCompletion, objectFunctionCompletion } from './autoCompletionItem';

const documentStart = new vscode.Position(0, 0);

export function getCodeBlockFromSnippet(snippet: string, includeBrackets: boolean = true) {

    let codeBlock = snippet.replace(codeBlockFromTemplate, "$2");

    if (includeBrackets) {
        return "{{ " + codeBlock + " }}";
    } else {
        return codeBlock;

    }
}

export function provideGlobalCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

    let linePrefix = document.lineAt(position).text.substr(0, position.character);

    var results: vscode.CompletionItem[] = [];

    if (isInFunctionCompletion.test(linePrefix)) {
        return results; //provideFunctionCompletionItems(document,position);
    }

    if (!linePrefix.endsWith(".")) {
        // a completion item that can be accepted by a commit character,
        // the `commitCharacters`-property is set which means that the completion will
        // be inserted and then the character will be typed.

        // scriban objects: array, date, string, object ...
        for (let embeddedObject of languageObjects) {
            const commitCharacterCompletion = new vscode.CompletionItem(embeddedObject.name);
            commitCharacterCompletion.kind = vscode.CompletionItemKind.Class;
            commitCharacterCompletion.insertText = embeddedObject.name;
            commitCharacterCompletion.commitCharacters = ['.'];
            commitCharacterCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            results.push(commitCharacterCompletion);
        }

        // sitecore functions: sc_field, sc_translate ...
        snippetCompletion(sitecoreFunctions, linePrefix, results, vscode.CompletionItemKind.Function);

        //language structures: for, while, if ...
        snippetCompletion(language, linePrefix, results, vscode.CompletionItemKind.Snippet);

    }
    return results;
}

export function provideFunctionCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

    // all text from beginning of the document to cursor position
    let documentPrefix = document.getText(new vscode.Range(documentStart, position))

    if (!isInScriban.test(documentPrefix)) {
        return;
    }

    // all text from beginning of the line to cursor position
    let linePrefix = document.lineAt(position).text.substr(0, position.character);

    linePrefix = linePrefix.replace(stripFunctionNameFromLine, "$1");

    var results: vscode.CompletionItem[] = [];

    // scriban object properties: array.add, date.format ...
    for (let embeddedObject of languageObjects) {
        var objectName = embeddedObject.name + ".";
        if (linePrefix.endsWith(objectName)) {
            if (linePrefix.endsWith('| ' + objectName)) {
                // after pipe |
                embeddedObject.methods.forEach(element => {
                    var description = element.description + "... [more](https://github.com/lunet-io/scriban/blob/master/doc/builtins.md#" + embeddedObject.name + element.name + ")";
                    results.push(objectFunctionCompletion(objectName, element.name, element.pipeTemplate, description, vscode.CompletionItemKind.Method))
                });
            }
            else {
                // straight invocation
                embeddedObject.methods.forEach(element => {
                    var description = element.description + "... [more](https://github.com/lunet-io/scriban/blob/master/doc/builtins.md#" + embeddedObject.name + element.name + ")";
                    results.push(objectFunctionCompletion(objectName, element.name, element.template, description, vscode.CompletionItemKind.Method))
                });
            }
        }
    }

    // embedded variables: i_item, i_home, i_datasource ...
    for (let item of embeddedItemCompletions) {
        const commitCharacterCompletion = new vscode.CompletionItem(item.name);
        commitCharacterCompletion.kind = vscode.CompletionItemKind.Variable;
        commitCharacterCompletion.insertText = item.name;
        commitCharacterCompletion.commitCharacters = ['.'];
        commitCharacterCompletion.documentation = new vscode.MarkdownString(item.description);
        commitCharacterCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
        results.push(commitCharacterCompletion);
    }

    // embedded item functions
    if (isInFunctionCompletion.test(linePrefix)) {
        var prefix = "i_item.";
        itemMethods.forEach(element => {
            results.push(objectFunctionCompletion(prefix, element.name, element.template, element.description, vscode.CompletionItemKind.Property))
        });
    }

    // embedded item functions and field functions
    if (isInFieldCompletion.test(linePrefix)) {
        var prefix = "i_item.field.";
        fieldMethods.forEach(element => {
            results.push(objectFunctionCompletion(prefix, element.name, element.template, element.description, vscode.CompletionItemKind.Property))
        });
    }

    return results;
}
