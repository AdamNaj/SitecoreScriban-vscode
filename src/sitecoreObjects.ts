/*---------------------------------------------------------
 * Copyright (C) Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/

export const embeddedItems = ["item", "site", "datasource", "page"];

export const embeddedItemCompletions = [
	{
		"name": "i_home",
		"template": "i_home",
		"description": "Home Page for the Site of the currently displayed Sitecore page.",
	},
	{
		"name": "i_item",
		"template": "i_item",
		"description": "Current Sitecore item in the Rendering Variant pipeline.",
	},
	{
		"name": "i_site",
		"template": "i_site",
		"description": "Site root item of the currently displayed Sitecore page",
	},
	{
		"name": "i_datasource",
		"template": "i_datasource",
		"description": "Sitecore item selected as the current component data source",
	},
	{
		"name": "i_page",
		"template": "i_page",
		"description": "Currently displayed Sitecore page item",
	},
	{
		"name": "o_language",
		"template": "o_language",
		"description": "Sitecore request context language",
	},
	{
		"name": "o_model",
		"template": "o_model",
		"description": "Data Model for the currently rendered component",
	},
	{
		"name": "o_geospatial",
		"template": "o_geospatial",
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
