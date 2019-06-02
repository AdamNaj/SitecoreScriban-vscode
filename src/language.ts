/*---------------------------------------------------------
 * Copyright (C) Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/

export const language = [
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
        "codeBlock" : "{{ if condition }}\n...\n{{else}}\n...\n{{end}}",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
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
        "codeBlock" : "{{ if condition }}\n...\n{{end}}",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
    },
    {
        "name": "else",
        "description": "A part of conditional statements",
        "validationRegEx": "",
        "template": [
            "{{ else }}",
            "\t"
        ],
        "codeBlock" : "...\n{{else}}\n...",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
    },
    {
        "name": "elseif",
        "validationRegEx": "",
        "description": "A part of conditional statement",
        "template": [
            "{{ else if ${1:condition} }}",
            "\t$2"
        ],
        "codeBlock" : "...\n{{ else if condition }}\n...",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
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
        "codeBlock" : "{{ while condition }}\n...\n{{ end }}",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
    },
    {
        "name": "case",
        "description": "Execute code branch depending on the <variable> value.",
        "validationRegEx": "",
        "template": [
            "{{ case ${1:variable} }}",
            "\t{{ when ${2:value1} }}",
            "\t\t$3",
            "\t{{ when ${3:value2} }}",
            "\t\t$4",
            "\t{{ else }}",
            "\t\t$5",
            "{{ end }}"
        ],
        "codeBlock" : "{{ case variable }}\n\t{{when value1}}\n\t...\n\t{{when value2}}\n\t...\n\t{{else}}\n\t...\n{{ end }}",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
    },
    {
        "name": "when",
        "description": "Execute code branch depending on the <variable> value. Part of {{ case }} statement.",
        "validationRegEx": "",
        "template": [
            "{{ when ${2:value1} }}",
            "$3",
        ],
        "codeBlock" : "{{when value1}}\n\t...",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
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
        "codeBlock" : "{{ for item in collection }}\n\t...\n{{ end }}",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
    },
    {
        "name": "limit",
        "description": "Allows to limit the iteration of the loop to the specified max count",
        "validationRegEx": "[{][^}\\n]+\\sfor\\s[^}\\n]+$",
        "template": "limit:${1:max}",
        "codeBlock" : "{{ for item in collection limit: max }}",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
    },
    {
        "name": "offset",
        "description": "Allows to start the iteration of the loop at the specified zero-based index",
        "validationRegEx": "[{][^}\\n]+\\sfor\\s[^}\\n]+$",
        "template": "offset:${1:max}",
        "codeBlock" : "{{ for item in collection offset: start }}",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
    },
    {
        "name": "reversed",
        "description": "Allows to reverse the iteration on the elements",
        "validationRegEx": "[{][^}\\n]+\\sfor\\s[^}\\n]+$",
        "template": "reversed",
        "codeBlock" : "{{ for item in collection reversed }}",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
    },
    {
        "name": "break",
        "description": "The break statement allows to exit a loop early",
        "validationRegEx": "",
        "template": "break",
        "codeBlock" : "\n{{ break }}\n",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
    },
    {
        "name": "continue",
        "description": "The continue statement allows to skip the rest of a loop and continue on the next step",
        "validationRegEx": "",
        "template": "continue",
        "codeBlock" : "\n{{ continue }}\n",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
    },
    {
        "name": "",
        "description": "",
        "validationRegEx": "",
        "template": [
            "",
            "\t"
        ],
        "codeBlock" : "\n...\n",
        "pipeTemplate": "",
        "pipeCodeBlock" : "",
    },
]