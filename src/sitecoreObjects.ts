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
		"description": "The current item within the rendering variant context. Often, this is an equivalent to the `i_datasource`.\n\nIf your Scriban template was embedded within a _Query_ or _Reference_ rendering variant field, `i_item` will be exactly the item that other rendering variant fields would use for their rendering process",
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
	},
	{
		"name": "o_context",
		"template": "o_context",
		"description": "Sitecore Context",
	},
	{
		"name": "o_pagemode",
		"template": "o_pagemode",
		"description": "Sitecore Page Mode",
	}
]

export const methods =
	[
		{
			"name": "...",
			"template": "",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Name of the field to render. (if the field name contains spaces or special characters use `sc_field` function instead)",
		},
		{
			"name": "children",
			"template": "children",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns the children of the item as an `Item` list",
		},
		{
			"name": "display_name",
			"template": "display_name",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns the `Display Name` of the item",
		},
		{
			"name": "id",
			"template": "id",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns the `ID` of the item",
		},
		{
			"name": "has_children",
			"template": "has_children",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns `true` if the item has children",
		},
		{
			"name": "has_layout",
			"template": "has_layout",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns `true` if the item has layout",
		},
		{
			"name": "language",
			"template": "language",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns the language code of the item",
		},
		{
			"name": "media_url",
			"template": "media_url",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns the media URL to the item",
		},
		{
			"name": "name",
			"template": "name",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns the `Name` of the item",
		},
		{
			"name": "parent",
			"template": "parent",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns parent of the item as an `Item` object",
		},
		{
			"name": "path",
			"template": "path",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns the path of the item",
		},
		{
			"name": "template_id",
			"template": "template_id",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns the ID of the item template as a `string` object",
		},
		{
			"name": "template_name",
			"template": "template_name",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns the name of the item template as a `string` object",
		},
		{
			"name": "url",
			"template": "url",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns the URL to the item using the site `LinkProvider`",
		},
		{
			"name": "version",
			"template": "version",
			"prefix": "i_item.",
			"validationRegEx": "(i_[\\w]*[.])$",
			"description": "Returns the version number of the item",
		},





		{
			"name": "raw",
			"template": "raw",
			"prefix": "i_item.field.",
			"validationRegEx": "(i_\\w*\\.\\w*\\.[\\w\\.]*)$",
			"description": "Returns the raw value of a field. For example, to render an ID to an item that you use in your JavaScript or for buttons that should not be editable",
		},
		{
			"name": "target",
			"template": "target",
			"prefix": "i_item.field.",
			"validationRegEx": "(i_\\w*\\.\\w*\\.[\\w\\.]*)$",
			"description": "Returns an item selected in a field that can store links to items. If the field can contain links to multiple items, the first item in the list is returned. If the field is empty, the function returns a null value",
		},
		{
			"name": "targets",
			"template": "targets",
			"prefix": "i_item.field.",
			"validationRegEx": "(i_\\w*\\.\\w*\\.[\\w\\.]*)$",
			"description": "Returns an array of items selected in a field that can store links to items. If the field is empty, the function returns an empty list",
		},





		{
			"name": "is_debugging",
			"template": "is_debugging",
			"prefix": "o_pagemode.",
			"validationRegEx": "(o_pagemode\\.[\\w]*)$",
			"description": "Returns `True' if the page is rendered in debug mode",
		},
		{
			"name": "is_experience_editor",
			"template": "is_experience_editor",
			"prefix": "o_pagemode.",
			"validationRegEx": "(o_pagemode\\.[\\w]*)$",
			"description": "Returns `True' if the page is rendered within Experience Editor",
		},
		{
			"name": "is_experience_editor_editing",
			"template": "is_experience_editor_editing",
			"prefix": "o_pagemode.",
			"validationRegEx": "(o_pagemode\\.[\\w]*)$",
			"description": "Returns `True' if the page is rendered within Experience Editor in Edit mode",
		},
		{
			"name": "is_normal",
			"template": "is_normal",
			"prefix": "o_pagemode.",
			"validationRegEx": "(o_pagemode\\.[\\w]*)$",
			"description": "Returns `True' if the page is rendered for a visitor",
		},
		{
			"name": "is_preview",
			"template": "is_preview",
			"prefix": "o_pagemode.",
			"validationRegEx": "(o_pagemode\\.[\\w]*)$",
			"description": "Returns `True' if the page is rendered within Experience Editor in Preview mode",
		},
		{
			"name": "is_simulated_device_previewing",
			"template": "is_simulated_device_previewing",
			"prefix": "o_pagemode.",
			"validationRegEx": "(o_pagemode\\.[\\w]*)$",
			"description": "Returns `True' if the page is rendered within Experience Editor in Simulated Preview mode",
		},
		{
			"name": "is_profiling",
			"template": "is_profiling",
			"prefix": "o_pagemode.",
			"validationRegEx": "(o_pagemode\\.[\\w]*)$",
			"description": "Returns `True' if the page is rendered with profiling information",
		},





		{
			"name": "is_administrator",
			"template": "is_administrator",
			"prefix": "o_context.",
			"validationRegEx": "(o_context\\.[\\w]*)$",
			"description": "Returns `True' if the current user is an administrator",
		},
		{
			"name": "user",
			"template": "user",
			"prefix": "o_context.",
			"validationRegEx": "(o_context\\.[\\w]*)$",
			"description": "User in whose context the request is performed",
		},
		{
			"name": "domain",
			"template": "domain",
			"prefix": "o_context.",
			"validationRegEx": "(o_context\\.[\\w]*)$",
			"description": "Domain of the user in whose context the request is performed",
		},
		{
			"name": "database",
			"template": "database",
			"prefix": "o_context.",
			"validationRegEx": "(o_context\\.[\\w]*)$",
			"description": "Database from which the request sources the data",
		},





		{
			"name": "poi_type_id",
			"template": "poi_type_id",
			"prefix": "o_geospatial.",
			"validationRegEx": "(o_geospatial\\.[\\w]*)$",
			"description": "Guid of the POI type",
		},
		{
			"name": "poi_icon",
			"template": "poi_icon",
			"prefix": "o_geospatial.",
			"validationRegEx": "(o_geospatial\\.[\\w]*)$",
			"description": "POI icon URL",
		},
		{
			"name": "latitude",
			"template": "latitude",
			"prefix": "o_geospatial.",
			"validationRegEx": "(o_geospatial\\.[\\w]*)$",
			"description": "Latitude of the POI that is rendered",
		},
		{
			"name": "longitude",
			"template": "longitude",
			"prefix": "o_geospatial.",
			"validationRegEx": "(o_geospatial\\.[\\w]*)$",
			"description": "Longitude of the POI that is rendered",
		},
		{
			"name": "unit",
			"template": "unit",
			"prefix": "o_geospatial.",
			"validationRegEx": "(o_geospatial\\.[\\w]*)$",
			"description": "Kilometers, miles",
		},
	];
