/*---------------------------------------------------------
 * Copyright (C) 2019 - Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/

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
			"name": "...",
			"template": "",
			"description": "Type the name of the field to use it. (cannot contain spaces)",
		},
		{
			"name": "template_name",
			"template": "template_name",
			"description": "",
		},
		{
			"name": "children",
			"template": "children",
			"description": "",
		},
		{
			"name": "parent",
			"template": "parent",
			"description": "",
		},
		{
			"name": "template_id",
			"template": "template_id",
			"description": "",
		},
		{
			"name": "version",
			"template": "version",
			"description": "",
		},
		{
			"name": "path",
			"template": "path",
			"description": "",
		},
		{
			"name": "language",
			"template": "language",
			"description": "",
		},
		{
			"name": "has_children",
			"template": "has_children",
			"description": "",
		},
		{
			"name": "display_name",
			"template": "display_name",
			"description": "",
		},
		{
			"name": "name",
			"template": "name",
			"description": "",
		},
		{
			"name": "url",
			"template": "url",
			"description": "",
		},
		{
			"name": "media_url",
			"template": "media_url",
			"description": "",
		}
	];

	export const fieldMethods =
	[
		{
			"name": "raw",
			"template": "raw",
			"description": "",
		},
		{
			"name": "target",
			"template": "target",
			"description": "",
		},
		{
			"name": "targets",
			"template": "targets",
			"description": "",
		},
	];
