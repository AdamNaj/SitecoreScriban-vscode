/*---------------------------------------------------------
 * Copyright (C) Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/

export const languageObjects = [
	{
		"name": "array",
		"methods": [
			{
				"name": "add",
				"template": "add ${1:<list>} ${2:<value>}",
				"description": "Adds a <__value__> to the input <__list__>",
				"pipeTemplate": "add ${1:<value>}",
				"pipeDescription": "Adds a <*value*> to the input list from pipeline"
			},
			{
				"name": "add_range",
				"template": "add_range ${1:<list2>}",
				"description": "Appends <__list2__> to another list from pipeline",
				"pipeTemplate": "add_range ${1:<list1>} ${2:<list2>}",
				"pipeDescription": "Appends <__list2__> to <__list1__>"
			},
			{
				"name": "compact",
				"template": "compact ${1:<list>}",
				"description": "Removes all null values from the input <__list__>",
				"pipeTemplate": "compact",
				"pipeDescription": "Removes all null values from the input list"
			},
			{
				"name": "concat",
				"template": "concat ${1:<list2>}",
				"description": "Appends <__list2__> to another list from pipeline",
				"pipeTemplate": "concat ${1:<list1>} ${2:<list2>}",
				"pipeDescription": "Appends <__list2__> to <__list1__>"
			},
			{
				"name": "cycle",
				"template": "cycle ${1:<list>} ${2:<group>?}",
				"description": "Loops through a group of strings and outputs them in the order that they were passed as parameters. Each time cycle is called, the next string that was passed as a parameter is output.\n It accepts a parameter called cycle group in cases where you need multiple cycle blocks in one template. If no name is supplied for the cycle group, then it is assumed that multiple calls with the same parameters are one group.",
				"pipeTemplate": "cycle <group>?",
				"pipeDescription": "Loops through a group of strings and outputs them in the order that they were passed as parameters. Each time cycle is called, the next string that was passed as a parameter is output.\n It accepts a parameter called cycle group in cases where you need multiple cycle blocks in one template. If no name is supplied for the cycle group, then it is assumed that multiple calls with the same parameters are one group."
			},
			{
				"name": "first",
				"template": "first ${1:<list>}",
				"description": "Returns the first element of the input list",
				"pipeTemplate": "first",
				"pipeDescription": "Returns the first element of the input list"
			},
			{
				"name": "insert_at",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "join",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "last",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "limit",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "map",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "offset",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "remove_at",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "reverse",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "size",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "sort",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "uniq",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "contains",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
		]
	},
	{
		"name": "date",
		"methods": [
			{
				"name": "year",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "month",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "day",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "day_of_year",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "hour",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "minute",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "second",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "millisecond",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
		]
	},
	{
		"name": "html",
		"methods": [
			{
				"name": "strip",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "escape",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "url_encode",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "url_escape",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
		]
	},
	{
		"name": "math",
		"methods": [
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
		]
	},
	{
		"name": "object",
		"methods": [
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
		]
	},
	{
		"name": "regex",
		"methods": [
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
		]
	},
	{
		"name": "string",
		"methods": [
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
		]
	},
	{
		"name": "timespan",
		"methods": [
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "",
				"template": "",
				"description": "",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
		]
	},
	{
		"name": "for",
		"methods": [
			{
				"name": "index",
				"template": "index",
				"description": "The current index of the for loop",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "rindex",
				"template": "rindex",
				"description": "The current index of the for loop starting from the end of the list",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "first",
				"template": "first",
				"description": "A boolean indicating whether this is the first step of the loop",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "last",
				"template": "last",
				"description": "A boolean indicating whether this is the last step of the loop",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "even",
				"template": "even",
				"description": "A boolean indicating whether this is an even step of the loop",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "odd",
				"template": "odd",
				"description": "A boolean indicating whether this is an odd row in the loop",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "changed",
				"template": "changed",
				"description": "A boolean indicating whether a current value of this iteration changed from previous step",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
		]
	},
	{
		"name": "while",
		"methods": [
			{
				"name": "index",
				"template": "index",
				"description": "The current index of the for loop",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "first",
				"template": "first",
				"description": "A boolean indicating whether this is the first step of the loop",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "even",
				"template": "even",
				"description": "A boolean indicating whether this is an even step of the loop",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
			{
				"name": "odd",
				"template": "odd",
				"description": "A boolean indicating whether this is an odd row in the loop",
				"pipeTemplate": "",
				"pipeDescription": ""
			},
		]
	},
];
