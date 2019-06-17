/*---------------------------------------------------------
 * Copyright (C) 2019 - Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/

import { ScribanSnippet } from "./types";

export const language: ScribanSnippet[] = [
    {
        "name": "ifelse",
        "description": "If/else conditional statement",
        "validationRegEx": "",
        "template": [
            "{{ if ${1:condition} }}",
            "\t$2",
            "{{ else }}",
            "\t$3",
            "{{ end }}"
        ],
        "pipeTemplate": "",
    },
    {
        "name": "if",
        "description": "If conditional statement",
        "validationRegEx": "",
        "template": [
            "{{ if ${1:condition} }}",
            "\t$2",
            "{{ end }}"
        ],
        "pipeTemplate": "",
    },
    {
        "name": "else",
        "description": "A part of conditional statements",
        "validationRegEx": "",
        "template": [
            "{{ else }}",
            "\t"
        ],
        "pipeTemplate": "",
    },
    {
        "name": "elseif",
        "validationRegEx": "",
        "description": "A part of conditional statement",
        "template": [
            "{{ else if ${1:condition} }}",
            "\t$2"
        ],
        "pipeTemplate": "",
    },
    {
        "name": "while",
        "description": "Loop while <condition> is true",
        "validationRegEx": "",
        "template": [
            "{{ while ${1:condition} }}",
            "\t$2",
            "{{ end }}"
        ],
        "pipeTemplate": "",
    },
    {
        "name": "case",
        "description": "Execute code branch depending on the <variable> value.",
        "validationRegEx": "",
        "template": [
            "{{ case ${1:variable} }}",
            "\t{{ when ${2:value1} }}",
            "\t\t$3",
            "\t{{ when ${4:value2} }}",
            "\t\t$5",
            "\t{{ else }}",
            "\t\t$6",
            "{{ end }}"
        ],
        "pipeTemplate": "",
    },
    {
        "name": "when",
        "description": "Execute code branch depending on the <variable> value. Part of {{ case }} statement.",
        "validationRegEx": "",
        "template": [
            "{{ when ${2:value1} }}",
            "$3",
        ],
        "pipeTemplate": "",
    },
    {
        "name": "for",
        "description": "For loop, iterating over collection",
        "validationRegEx": "",
        "template": [
            "{{ for ${1:item} in ${2:collection} }}",
            "\t$3",
            "{{ end }}"
        ],
        "pipeTemplate": "",
    },
    {
        "name": "limit",
        "description": "Allows to limit the iteration of the loop to the specified max count",
        "validationRegEx": "[{][^}\\n]+\\sfor\\s[^}\\n]+$",
        "template": "limit:${1:max}",
        "pipeTemplate": "",
    },
    {
        "name": "offset",
        "description": "Allows to start the iteration of the loop at the specified zero-based index",
        "validationRegEx": "[{][^}\\n]+\\sfor\\s[^}\\n]+$",
        "template": "offset:${1:max}",
        "pipeTemplate": "",
    },
    {
        "name": "reversed",
        "description": "Allows to reverse the iteration on the elements",
        "validationRegEx": "[{][^}\\n]+\\sfor\\s[^}\\n]+$",
        "template": "reversed",
        "pipeTemplate": "",
    },
    {
        "name": "break",
        "description": "The break statement allows to exit a loop early",
        "validationRegEx": "",
        "template": "break",
        "pipeTemplate": "",
    },
    {
        "name": "continue",
        "description": "The continue statement allows to skip the rest of a loop and continue on the next step",
        "validationRegEx": "",
        "template": "continue",
        "pipeTemplate": "",
    },
    {
        "name": "tablerow",
        "description": "This function generates HTML rows compatible with an HTML table. Must be wrapped in an opening and closing HTML tags.",
        "validationRegEx": "",
        "template": [
            "{{ tablerow ${1:variable} in ${2:expression} }}",
            "\t$3",
            "{{ end }}"
        ],
        "pipeTemplate": "",
    },
    {
        "name": "capture",
        "description": "The capture <variable> ... end statement allows to capture the template output of the enclosed statement to a variable",
        "validationRegEx": "",
        "template": [
            "{{ capture ${1:storeInVariable} }}",
            "\t$3",
            "{{ end }}"
        ],
        "pipeTemplate": "",
    },
    {
        "name": "readonly",
        "description": "The readonly statement prevents a variable for subsequent assignments:",
        "validationRegEx": "",
        "template": "readonly ${1:variable}",
        "pipeTemplate": "",
    },
    {
        "name": "with",
        "description": "The statement will open a new object context with the passed variable, all assignment will result in setting the members of the passed object.",
        "validationRegEx": "",
        "template": [
            "{{ with ${1:variable} }}",
            "\t$3",
            "{{ end }}"
        ],
        "pipeTemplate": "",
    },
    {
        "name": "ret",
        "description": "The return statement is used to abort further rendering.",
        "validationRegEx": "",
        "template": "ret",
        "pipeTemplate": "",
    },
    {
        "name": "",
        "description": "",
        "validationRegEx": "",
        "template": [
            "",
            "\t"
        ],
        "pipeTemplate": "",
    },
]