/*---------------------------------------------------------
 * Copyright (C) Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/

export const embeddedItems = ["item", "site", "datasource", "page"];

export const embeddedItemCompletions = [
	{
		"name": "item",
		"template": "item",
		"description": "Current Sitecore item in the Rendering Variant pipeline.",
	},
	{
		"name": "site",
		"template": "site",
		"description": "Site root item of the currently displayed Sitecore page",
	},
	{
		"name": "datasource",
		"template": "datasource",
		"description": "Sitecore item selected as the current component data source",
	},
	{
		"name": "page",
		"template": "page",
		"description": "Currently displayed Sitecore page item",
	},
	{
		"name": "model",
		"template": "model",
		"description": "Data Model for the currently rendered component",
	},
	{
		"name": "geospatial",
		"template": "geospatial",
		"description": "geospatial helper",
	}
]

export const itemMethods =
	[
		{
			"name": "template_name",
			"template": "",
			"description": "",
		},
		{
			"name": "children",
			"template": "",
			"description": "",
		},
		{
			"name": "",
			"template": "",
			"description": "",
		},
		{
			"name": "",
			"template": "",
			"description": "",
		},
	];
