import * as vscode from 'vscode';
import { languageObjects } from './languageObjects';
import { itemMethods, embeddedItems, embeddedItemCompletions } from './sitecoreObjects';
import { sitecoreFunctions } from './sitecoreFunctions';
import { ScribanSnippet } from './types';
import { language } from './languageSyntax';
import { isInFunctionCompletion, codeBlockFromTemplate, stripFunctionNameFromLine } from './regularExpressions';
import { snippetCompletion, objectFunctionCompletion } from './autoCompletionItem';


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
            //commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');
            commitCharacterCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            results.push(commitCharacterCompletion);
        }

        // sitecore functions: sc_field, sc_translate ...
        snippetCompletion(sitecoreFunctions, linePrefix, results, vscode.CompletionItemKind.Function);

        //language structures: for, while, if ...
        snippetCompletion(language, linePrefix, results, vscode.CompletionItemKind.Snippet);

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
    }
    return results;
}

export function provideFunctionCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

    // get all text until the `position` and check if it reads `console.`
    // and iff so then complete if `log`, `warn`, and `error`
    let linePrefix = document.lineAt(position).text.substr(0, position.character);

    linePrefix = linePrefix.replace(stripFunctionNameFromLine, "$1");
    // var textUntilPosition = document.getText(new vscode.Range(new vscode.Position(0,0), position));

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

    // embedded items
    for (let embeddedItem of embeddedItems) {
        var itemPrefix = embeddedItem + ".";
        if (linePrefix.endsWith(itemPrefix)) {
            itemMethods.forEach(element => {
                results.push(objectFunctionCompletion(embeddedItem, element.name, element.template, element.name, vscode.CompletionItemKind.Property))
            });

        }
    }

    return results;
}
