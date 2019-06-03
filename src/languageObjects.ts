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
			},
			{
				"name": "add_range",
				"template": "add_range ${1:<list1>} ${2:<list2>}",
				"description": "Appends <__list2__> to another list from pipeline",
				"pipeTemplate": "add_range ${1:<list2>}",
			},
			{
				"name": "compact",
				"template": "compact ${1:<list>}",
				"description": "Removes all null values from the input <__list__>",
				"pipeTemplate": "compact",
			},
			{
				"name": "concat",
				"template": "concat ${1:<list2>}",
				"description": "Appends <__list2__> to another list from pipeline",
				"pipeTemplate": "concat ${1:<list1>} ${2:<list2>}",
			},
			{
				"name": "cycle",
				"template": "cycle ${1:<list>} ${2:<group>?}",
				"description":     "Loops through a group of strings and outputs them in the order that they were passed as parameters. Each time cycle is called, the next string that was passed as a parameter is output.\n It accepts a parameter called cycle group in cases where you need multiple cycle blocks in one template. If no name is supplied for the cycle group, then it is assumed that multiple calls with the same parameters are one group.",
				"pipeTemplate": "cycle <group>?",
			},
			{
				"name": "first",
				"template": "first ${1:<list>}",
				"description": "Returns the first element of the input list",
				"pipeTemplate": "first",
			},
			{
				"name": "insert_at",
				"template": "insert_at ${1:<list>} ${2:<index>} ${3:<value>}",
				"description": "Inserts a <__value__> at the specified <__index__> in the input <__list__>.",
				"pipeTemplate": "insert_at ${1:<index>} ${2:<value>}",
			},
			{
				"name": "join",
				"template": "join ${1:<list>} ${2:<delimiter>}",
				"description": "Joins elements of a <__list__> separated by a <__delimiter__> string and return the concatenated string.",
				"pipeTemplate": "join ${1:<delimiter>}",
			},
			{
				"name": "last",
				"template": "last ${1:<list>}",
				"description": "Returns the last element of the input list",
				"pipeTemplate": "last",
			},
			{
				"name": "limit",
				"template": "limit ${1:<list>} ${2:<count>}",
				"description": "Returns the first <__count__> elments from the input <__list__>",
				"pipeTemplate": "limit ${1:<count>}",
			},
			{
				"name": "map",
				"template": "map ${1:<list>} ${2:<member>}",
				"description": "Extracts <__member__> from incoming <__list__> of objects returning a list of those member values.",
				"pipeTemplate": "map ${1:<member>}",
			},
			{
				"name": "offset",
				"template": "limit ${1:<list>} ${2:<index>}",
				"description": "Returns the elements from the input <__list__> occuring after <__index__> element",
				"pipeTemplate": "limit ${1:<index>}",
			},
			{
				"name": "remove_at",
				"template": "remove_at ${1:<list>} ${2:<index>}",
				"description": "Removes an element at the specified <__index__> from the input <__list__>. If the <__index__> is negative, it removes from the end of the <__list__>.",
				"pipeTemplate": "remove_at ${1:<index>}",
			},
			{
				"name": "reverse",
				"template": "reverse ${1:<list>}",
				"description": "Reverses the input <__list__>",
				"pipeTemplate": "reverse",
			},
			{
				"name": "size",
				"template": "size ${1:<list>}",
				"description": "Returns the number of elements in the input <__list__>",
				"pipeTemplate": "size",
			},
			{
				"name": "sort",
				"template": "sort ${1:<list>} ${2:<member>?}",
				"description": "Sorts the elements of the input <__list__> or the value of the specified <__member__> if complex objects are sorted",
				"pipeTemplate": "sort ${1:<member>?}",
			},
			{
				"name": "uniq",
				"template": "uniq ${1:<list>}",
				"description": "Returns only the unique elements of the input <__list__>.",
				"pipeTemplate": "uniq",
			},
			{
				"name": "contains",
				"template": "contains ${1:<list>} ${2:<item>}",
				"description": "Returns <__true__> if the input <__list__> contains the <__item__> element",
				"pipeTemplate": "contains ${1:<item>}",
			}
		]
	},
	{
		"name": "date",
		"methods": [
			{
				"name": "year",
				"template": "year ${1:<date_time>}",
				"description": "Returns the <__year__> part of a <__date_time__> object",
				"pipeTemplate": "year",
			},
			{
				"name": "month",
				"template": "month ${1:<date_time>}",
				"description": "Returns the <__month__> part of a <__date_time__> object",
				"pipeTemplate": "month",
			},
			{
				"name": "day",
				"template": "day ${1:<date_time>}",
				"description": "Returns the <__day__> (of the month) of a <__date_time__> object",
				"pipeTemplate": "day",
			},
			{
				"name": "day_of_year",
				"template": "day_of_year ${1:<date_time>}",
				"description": "Returns the <__day_of_year__> part of a <__date_time__> object",
				"pipeTemplate": "day_of_year",
			},
			{
				"name": "hour",
				"template": "hour ${1:<date_time>}",
				"description": "Returns the <__day_of_year__> part of a <__date_time__> object",
				"pipeTemplate": "hour",
			},
			{
				"name": "minute",
				"template": "minute ${1:<date_time>}",
				"description": "Returns the <__hour__> part of a <__date_time__> object",
				"pipeTemplate": "minute",
			},
			{
				"name": "second",
				"template": "second ${1:<date_time>}",
				"description": "Returns the <__second__> part of a <__date_time__> object",
				"pipeTemplate": "second",
			},
			{
				"name": "millisecond",
				"template": "millisecond ${1:<date_time>}",
				"description": "Returns the <__millisecond__> part of a <__date_time__> object",
				"pipeTemplate": "millisecond",
			},
			{
				"name": "now",
				"template": "now",
				"description": "Returns a <__date_time__> object of the current time, including the hour, minutes, seconds and milliseconds.",
				"pipeTemplate": "now",
			},
			{
				"name": "add_days",
				"template": "add_days ${1:<date_time>} ${2:<days>}",
				"description": "Adds the specified number of <__days__> to the input <__date_time__>.",
				"pipeTemplate": "add_days ${1:<days>}",
			},
			{
				"name": "add_months",
				"template": "add_months ${1:<date_time>} ${2:<months>}",
				"description": "Adds the specified number of <__months__> to the input <__date_time__>.",
				"pipeTemplate": "add_months ${1:<months>}",
			},
			{
				"name": "add_years",
				"template": "add_years ${1:<date_time>} ${2:<years>}",
				"description": "Adds the specified number of <__years__> to the input <__date_time__>.",
				"pipeTemplate": "add_years ${1:<years>}",
			},
			{
				"name": "add_hours",
				"template": "add_hours ${1:<date_time>} ${2:<hours>}",
				"description": "Adds the specified number of <__hours__> to the input <__date_time__>.",
				"pipeTemplate": "add_hours ${1:<hours>}",
			},
			{
				"name": "add_minutes",
				"template": "add_minutes ${1:<date_time>} ${2:<minutes>}",
				"description": "Adds the specified number of <__minutes__> to the input <__date_time__>.",
				"pipeTemplate": "add_minutes ${1:<minutes>}",
			},
			{
				"name": "add_seconds",
				"template": "add_seconds ${1:<date_time>} ${2:<seconds>}",
				"description": "Adds the specified number of <__seconds__> to the input <__date_time__>.",
				"pipeTemplate": "add_seconds ${1:<seconds>}",
			},
			{
				"name": "add_milliseconds",
				"template": "add_milliseconds ${1:<date_time>} ${2:<milliseconds>}",
				"description": "Adds the specified number of <__milliseconds__> to the input <__date_time__>.",
				"pipeTemplate": "add_milliseconds ${1:<milliseconds>}",
			},
			{
				"name": "parse",
				"template": "parse ${1:<text>}",
				"description": "Parses the specified <__text__> to a <__date_time__> object.",
				"pipeTemplate": "parse",
			},
			{
				"name": "to_string",
				"template": "to_string ${1:<date_time>} ${2:<pattern>} ${3:<culture>}",
				"description": "Converts a datetime object to a textual representation using the specified format string as described [here](https://github.com/lunet-io/scriban/blob/master/doc/builtins.md#dateto_string).",
				"pipeTemplate": "to_string",
			},
		]
	},
	{
		"name": "html",
		"methods": [
			{
				"name": "strip",
				"template": "strip ${1:<text>}",
				"description": "Removes any HTML tags from the input string.",
				"pipeTemplate": "strip",
			},
			{
				"name": "escape",
				"template": "escape ${1:<text>}",
				"description": "Escapes a HTML input string (e.g. replacing & by &amp;amp;)",
				"pipeTemplate": "escape",
			},
			{
				"name": "url_encode",
				"template": "url_encode ${1:<text>}",
				"description": "Converts any URL-unsafe characters in a string into percent-encoded characters.",
				"pipeTemplate": "url_encode",
			},
			{
				"name": "url_escape",
				"template": "url_escape ${1:<text>}",
				"description": "Identifies all characters in a string that are not allowed in URLS, and replaces the characters with their escaped variants.",
				"pipeTemplate": "url_escape",
			},
		]
	},
	{
		"name": "math",
		"methods": [
			{
				"name": "abs",
				"template": "abs ${1:<value>}",
				"description": "Returns the absolute value of a specified number.",
				"pipeTemplate": "abs",
			},
			{
				"name": "ceil",
				"template": "ceil ${1:<value>}",
				"description": "Returns the smallest integer greater than or equal to the specified number.",
				"pipeTemplate": "ceil",
			},
			{
				"name": "divided_by",
				"template": "divided_by ${1:<value>} ${2:<divisor>}",
				"description": "Divides the specified value by another value. If the divisor is an integer, the result will be floor to and converted back to an integer.",
				"pipeTemplate": "divided_by ${2:<divisor>}",
			},
			{
				"name": "floor",
				"template": "floor ${1:<value>}",
				"description": "Returns the largest integer less than or equal to the specified number.",
				"pipeTemplate": "floor",
			},
			{
				"name": "format",
				"template": "format ${1:<value>} ${2:<format>} ${3:<culture>?}",
				"description": "Formats a number value with specified [.NET standard numeric format strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)",
				"pipeTemplate": "format ${1:<format>} ${2:<culture>?}",
			},
			{
				"name": "is_number",
				"template": "is_number ${1:<value>}",
				"description": "Returns a boolean indicating if the input value is a number.",
				"pipeTemplate": "is_number",
			},
			{
				"name": "minus",
				"template": "minus ${1:<value>} ${2:<with>}",
				"description": "Substracts the <__with__> value from the input <__value__>.",
				"pipeTemplate": "minus ${1:<with>}",
			},
			{
				"name": "modulo",
				"template": "modulo ${1:<value>} ${2:<with>}",
				"description": "Performs the modulo operation of the input <__value__> with the <__with__> value",
				"pipeTemplate": "modulo ${1:<with>}",
			},
			{
				"name": "plus",
				"template": "plus ${1:<value>} ${2:<with>}",
				"description": "Adds the <__with__> value to the input <__value__>.",
				"pipeTemplate": "plus ${1:<with>}",
			},
			{
				"name": "round",
				"template": "round ${1:<value>} ${2:<precision: 0>?}",
				"description": "Rounds a <__value__> to the nearest integer or to the specified number of fractional digits.",
				"pipeTemplate": "round ${1:<precision: 0>?}",
			},
			{
				"name": "times",
				"template": "times ${1:<value>} ${2:<with>}",
				"description": "Performs the multiplication of the input <__value__> with the <__with__> value",
				"pipeTemplate": "times ${1:<with>}",
			},
		]
	},
	{
		"name": "object",
		"methods": [
			{
				"name": "default",
				"template": "default ${1:<value>} ${2:<default>}",
				"description": "The <__default__> value is returned if the input <__value__> is null or an empty string, otherwise the object value is returned. A string containing whitespace characters will not resolve to the default value.",
				"pipeTemplate": "default ${1:<default>}",
			},
			{
				"name": "format",
				"template": "format ${1:<value>} ${2:<format>} ${1:<culture>?}",
				"description": "Formats an object using specified format.",
				"pipeTemplate": "format ${1:<format>} ${2:<culture>?}",
			},
			{
				"name": "has_key",
				"template": "has_key ${1:<value>} ${2:<key>}",
				"description": "Checks if the specified <__value__> object as the <__key__> member",
				"pipeTemplate": "has_key ${1:<key>}",
			},
			{
				"name": "has_value",
				"template": "has_value ${1:<value>} ${2:<key>}",
				"description": "Checks if the specified <__value__> object as a value for the member <__key__>.",
				"pipeTemplate": "has_value ${1:<key>}",
			},
			{
				"name": "keys",
				"template": "keys ${1:<value>}",
				"description": "Gets the members/keys of the <__value__> object.",
				"pipeTemplate": "keys",
			},
			{
				"name": "size",
				"template": "size ${1:<value>}",
				"description": "Returns the size of the input object.\n* For a string - the length\n* For list - the number of elements\n*For an object - the number of members",
				"pipeTemplate": "size",
			},
			{
				"name": "typeof",
				"template": "typeof ${1:<value>}",
				"description": "Returns string representing the type of the input <__value__>. The type can be `string`, `boolean`, `number`, `array`, `iterator` or `object`",
				"pipeTemplate": "typeof",
			},
			{
				"name": "values",
				"template": "values ${1:<value>}",
				"description": "Gets the member's values of the specified value object.",
				"pipeTemplate": "values",
			},
		]
	},
	{
		"name": "regex",
		"methods": [
			{
				"name": "escape",
				"template": "escape ${1:<pattern>}",
				"description": "Escapes a minimal set of characters (`\`, `*`, `+`, `?`, `|`, `{`, `[`, `(`, `)`, `^`, `$`, `.`, `#`, and white space) by replacing them with their escape codes. This instructs the regular expression engine to interpret these characters literally rather than as metacharacters.",
				"pipeTemplate": "escape",
			},
			{
				"name": "match",
				"template": "match ${1:<text>} ${2:<pattern>} ${3:<options>?}",
				"description": "Matches an input <__text__> for a substring that matches a regular expression pattern and returns an array with the match occurences.",
				"pipeTemplate": "match ${1:<pattern>} ${2:<options>?}",
			},
			{
				"name": "replace",
				"template": "replace ${1:<text>} ${2:<pattern>} ${3:<replace>} ${4:<options>?}",
				"description": "In a specified input <__text__>, replaces strings that match a regular expression pattern with a specified replacement string.",
				"pipeTemplate": "replace ${1:<pattern>} ${2:<replace>} ${3:<options>?}",
			},
			{
				"name": "split",
				"template": "split ${1:<text>} ${2:<pattern>} ${3:<options>?}",
				"description": "In a specified input <__text__>, replaces strings that match a regular expression pattern with a specified replacement string.",
				"pipeTemplate": "split ${1:<pattern>} ${2:<options>?}",
			},
			{
				"name": "unescape",
				"template": "unescape ${1:<pattern>}",
				"description": "Converts any escaped characters in the input string.",
				"pipeTemplate": "unescape",
			},
		]
	},
	{
		"name": "string",
		"methods": [
			{
				"name": "append",
				"template": "append ${1:<text>} ${2:<with>}",
				"description": "Concatenates two strings",
				"pipeTemplate": "append ${1:<with>}",
			},
			{
				"name": "capitalize",
				"template": "capitalize ${1:<text>}",
				"description": "Converts the first character of the passed string to a upper case character.",
				"pipeTemplate": "capitalize",
			},
			{
				"name": "capitalizewords",
				"template": "capitalizewords ${1:<text>}",
				"description": "",
				"pipeTemplate": "capitalizewords",
			},
			{
				"name": "contains",
				"template": "contains ${1:<text>} ${2:<value>}",
				"description": "Returns a boolean indicating whether the input <__text__> contains the specified <__value__>.",
				"pipeTemplate": "contains ${1:<value>} ",
			},
			{
				"name": "downcase",
				"template": "downcase ${1:<text>}",
				"description": "Converts the string to lower case.",
				"pipeTemplate": "downcase",
			},
			{
				"name": "ends_with",
				"template": "ends_with ${1:<text>} ${2:<value>}",
				"description": "Returns a boolean indicating whether the input string ends with the specified string value.",
				"pipeTemplate": "ends_with ${1:<value>}",
			},
			{
				"name": "handleize",
				"template": "handleize ${1:<text>}",
				"description": "Returns a url handle from the input string.",
				"pipeTemplate": "handleize",
			},
			{
				"name": "lstrip",
				"template": "lstrip ${1:<text>}",
				"description": "Removes any whitespace characters on the __left__ side of the input <__text__>.",
				"pipeTemplate": "lstrip",
			},
			{
				"name": "pluralize",
				"template": "pluralize ${1:<number>} ${2:<singuler>} ${3:<plural>}",
				"description": "Outputs the singular or plural version of a string based on the value of a number.",
				"pipeTemplate": "pluralize ${1:<singuler>} ${2:<plural>}",
			},
			{
				"name": "prepend",
				"template": "prepend ${1:<text>} ${2:<by>}",
				"description": "Concatenates two strings by placing the <__by__> string in front of the <__text__> string",
				"pipeTemplate": "prepend ${1:<by>}",
			},
			{
				"name": "remove",
				"template": "remove ${1:<text>} ${2:<undesired>}",
				"description": "Removes all occurrences of an <__undesired__> substring from the <__text__>.",
				"pipeTemplate": "remove ${1:<undesired>}",
			},
			{
				"name": "remove_first",
				"template": "remove_first ${1:<text>} ${2:<undesired>}",
				"description": "Removes the first occurrence of an <__undesired__> substring from the <__text__>.",
				"pipeTemplate": "remove_first ${1:<undesired>}",
			},
			{
				"name": "replace",
				"template": "replace ${1:<text>} ${2:<undesired>} ${3:<desired>}",
				"description": "Replaces all occurrences of an <__undesired__> string with the <__desired__> string within <__text__>.",
				"pipeTemplate": "replace ${1:<undesired>} ${2:<desired>}",
			},
			{
				"name": "replace_first",
				"template": "replace_first ${1:<text>} ${2:<undesired>} ${3:<desired>}",
				"description": "Replaces the first occurrence of an <__undesired__> string with the <__desired__> string within <__text__>.",
				"pipeTemplate": "replace_first ${1:<undesired>} ${2:<desired>}",
			},
			{
				"name": "rstrip",
				"template": "rstrip ${1:<text>}",
				"description": "Removes any whitespace characters on the __right__ side of the input <__text__>.",
				"pipeTemplate": "rstrip",
			},
			{
				"name": "size",
				"template": "size ${1:<text>}",
				"description": "Returns the number of characters in the <__text__>.",
				"pipeTemplate": "size",
			},
			{
				"name": "slice",
				"template": "slice ${1:<text>} ${2:<start>} ${3:<length: 0>?}",
				"description": "The slice returns a substring, starting at the specified <__start__> index. An optional second parameter can be passed to specify the length of the substring. If no second parameter is given, a substring with the remaining characters will be returned.",
				"pipeTemplate": "slice ${1:<start>} ${2:<length: 0>?}",
			},
			{
				"name": "slice1",
				"template": "slice1 ${1:<text>} ${2:<start>} ${3:<length: 1>?}",
				"description": "The slice returns a substring, starting at the specified <__start__> index. An optional second parameter can be passed to specify the length of the substring. If no second parameter is given, a substring with the first characters will be returned.",
				"pipeTemplate": "slice1 ${1:<start>} ${2:<length: 0>?}",
			},
			{
				"name": "split",
				"template": "split ${1:<text>} ${2:<match>}",
				"description": "Splits the <__text__> string into a list of substrings divided based on the occurence of the <__match__> string.",
				"pipeTemplate": "split ${1:<match>}",
			},
			{
				"name": "starts_with",
				"template": "starts_with ${1:<text>} ${2:<value>}",
				"description": "Returns a boolean indicating whether the input string starts with the specified string <__value__>.",
				"pipeTemplate": "starts_with ${1:<value>}",
			},
			{
				"name": "strip",
				"template": "strip ${1:<text>}",
				"description": "Removes any whitespace characters on the __left__ and __right__ side of the input <__text__>.",
				"pipeTemplate": "strip",
			},
			{
				"name": "strip_newlines",
				"template": "strip_newlines ${1:<text>}",
				"description": "Removes any line breaks/newlines from the input <__text__>.",
				"pipeTemplate": "strip_newlines",
			},
			{
				"name": "to_int",
				"template": "to_int ${1:<text>}",
				"description": "Converts a string to a 32-bit integer.",
				"pipeTemplate": "to_int",
			},
			{
				"name": "to_long",
				"template": "to_long ${1:<text>}",
				"description": "Converts a string to a 64-bit integer.",
				"pipeTemplate": "to_long",
			},
			{
				"name": "to_float",
				"template": "to_float ${1:<text>}",
				"description": "Converts a string to a 32-bit float.",
				"pipeTemplate": "to_float",
			},
			{
				"name": "to_double",
				"template": "to_double ${1:<text>}",
				"description": "Converts a string to a 64-bit float.",
				"pipeTemplate": "to_double",
			},
			{
				"name": "truncate",
				"template": "truncate ${1:<text>} ${2:<number>} ${3:<ellipsis>?}",
				"description": "Truncates the <__text__> down to the <__number__> of characters. An ellipsis (...) is appended to the truncated string and is included in the character count",
				"pipeTemplate": "truncate ${1:<number>} ${2:<ellipsis>?}",
			},
			{
				"name": "truncatewords",
				"template": "truncatewords ${1:<text>} ${2:<number>} ${3:<ellipsis>?}",
				"description": "Truncates the <__text__> down to the <__number__> of words. An ellipsis (...) is appended to the truncated string and is included in the character count",
				"pipeTemplate": "truncate ${1:<number>} ${2:<ellipsis>?}",
			},
			{
				"name": "upcase",
				"template": "upcase ${1:<text>}",
				"description": "Converts the string to uppercase.",
				"pipeTemplate": "upcase",
			},
			{
				"name": "md5",
				"template": "md5 ${1:<text>}",
				"description": "Computes the `md5` hash of the input string",
				"pipeTemplate": "md5",
			},
			{
				"name": "sha1",
				"template": "sha1 ${1:<text>}",
				"description": "Computes the `sha1` hash of the input string",
				"pipeTemplate": "sha1",
			},
			{
				"name": "sha256",
				"template": "sha256 ${1:<text>}",
				"description": "Computes the `sha256` hash of the input string",
				"pipeTemplate": "sha256",
			},
			{
				"name": "hmac_sha1",
				"template": "hmac_sha1 ${1:<text>} ${2:<secretKey>}",
				"description": "Converts a string into a SHA-1 hash using a hash message authentication code (HMAC). Pass the secret key for the message as a parameter to the function.",
				"pipeTemplate": "hmac_sha1 ${1:<secretKey>}",
			},
			{
				"name": "hmac_sha256",
				"template": "hmac_sha256 ${1:<text>} ${2:<secretKey>}",
				"description": "Converts a string into a SHA-256 hash using a hash message authentication code (HMAC). Pass the secret key for the message as a parameter to the function.",
				"pipeTemplate": "hmac_sha256 ${1:<secretKey>}",
			},
			{
				"name": "pad_left",
				"template": "pad_left ${1:<text>} ${2:<width>}",
				"description": "Pads a string with leading spaces to a specified total length.",
				"pipeTemplate": "pad_left ${1:<width>}",
			},
			{
				"name": "pad_right",
				"template": "pad_right ${1:<text>} ${2:<width>}",
				"description": "Pads a string with trailing spaces to a specified total length.",
				"pipeTemplate": "pad_right ${1:<width>}",
			},
		]
	},
	{
		"name": "timespan",
		"methods": [
			{
				"name": "from_days",
				"template": "from_days ${1:days}",
				"description": "Returns a timespan object that represents a <__days__> interval",
				"pipeTemplate": "from_days",
			},
			{
				"name": "from_hours",
				"template": "from_hours ${1:hours}",
				"description": "Returns a timespan object that represents a <__hours__> interval",
				"pipeTemplate": "from_hours",
			},
			{
				"name": "from_minutes",
				"template": "from_minutes ${1:minutes}",
				"description": "Returns a timespan object that represents a <__minutes__> interval",
				"pipeTemplate": "from_minutes",
			},
			{
				"name": "from_seconds",
				"template": "from_seconds ${1:seconds}",
				"description": "Returns a timespan object that represents a <__seconds__> interval",
				"pipeTemplate": "from_seconds",
			},
			{
				"name": "from_milliseconds",
				"template": "from_milliseconds ${1:milliseconds}",
				"description": "Returns a timespan object that represents a <__milliseconds__> interval",
				"pipeTemplate": "from_milliseconds",
			},
			{
				"name": "parse",
				"template": "parse ${1:text}",
				"description": "Parses the specified input string into a timespan object.",
				"pipeTemplate": "parse",
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
			},
			{
				"name": "rindex",
				"template": "rindex",
				"description": "The current index of the for loop starting from the end of the list",
				"pipeTemplate": "",
			},
			{
				"name": "first",
				"template": "first",
				"description": "A boolean indicating whether this is the first step of the loop",
				"pipeTemplate": "",
			},
			{
				"name": "last",
				"template": "last",
				"description": "A boolean indicating whether this is the last step of the loop",
				"pipeTemplate": "",
			},
			{
				"name": "even",
				"template": "even",
				"description": "A boolean indicating whether this is an even step of the loop",
				"pipeTemplate": "",
			},
			{
				"name": "odd",
				"template": "odd",
				"description": "A boolean indicating whether this is an odd row in the loop",
				"pipeTemplate": "",
			},
			{
				"name": "changed",
				"template": "changed",
				"description": "A boolean indicating whether a current value of this iteration changed from previous step",
				"pipeTemplate": "",
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
			},
			{
				"name": "first",
				"template": "first",
				"description": "A boolean indicating whether this is the first step of the loop",
				"pipeTemplate": "",
			},
			{
				"name": "even",
				"template": "even",
				"description": "A boolean indicating whether this is an even step of the loop",
				"pipeTemplate": "",
			},
			{
				"name": "odd",
				"template": "odd",
				"description": "A boolean indicating whether this is an odd row in the loop",
				"pipeTemplate": "",
			},
		]
	},
];
