import { language } from "./languageSyntax";
/*---------------------------------------------------------
 * Copyright (C) Adam Najmanowicz. All rights reserved.
 *--------------------------------------------------------*/
export const sitecoreFunctions = [
    {
        "name": "sc_field",
        "description": "Renders Sitecore Field",
        "validationRegEx": "",
        "template": "sc_field ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:FieldName}'",
        "pipeTemplate": "sc_field '${2:FieldName}'",
    },
    {
        "name": "sc_field",
        "description": "Renders Sitecore Field falling back to next field on the list if the previous one is empty",
        "validationRegEx": "",
        "template": "sc_field ${1|i_item,i_datasource,i_home,i_page,i_site|} ['${2:FieldName1}','${3:FieldName2}']",
        "pipeTemplate": "sc_field ['${2:FieldName1}','${3:FieldName2}']",
    },
    {
        "name": "sc_field",
        "description": "Renders Sitecore Field with added parameters to tags for e.g. image or link",
        "validationRegEx": "",
        "template": "sc_field ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:FieldName}' [['${3:data-attribute1}','${4:value1}'],['${5:data-attribute2}','${6:value2}']]",
        "pipeTemplate": "sc_field '${2:FieldName}' [['${3:data-attribute1}','${4:value1}'],['${5:data-attribute2}','${6:value2}']]",
    },
    {
        "name": "sc_decorate",
        "description": "Outputs component decoration with styles, grid classes and attributes needed by creative exchange",
        "validationRegEx": "",
        "template": "sc_decorate",
        "pipeTemplate": "",
    },
    {
        "name": "sc_decorate",
        "description": "Outputs component decoration with styles, grid classes and attributes needed by creative exchange",
        "validationRegEx": "",
        "template": "sc_decorate ['${1:css-class}']",
        "pipeTemplate": "",
    },
    {
        "name": "sc_translate",
        "description": "Translate a label to the context language or the language specified as a parameter using the site dictionary.",
        "validationRegEx": "",
        "template": "sc_translate '${1:phrase}' ${2:'languagename'?}",
        "pipeTemplate": "sc_translate ${1:\"languagename\"}",
    },
    {
        "name": "sc_editframe",
        "description": "Wrapping block for an edit frame",
        "validationRegEx": "",
        "template": ["{{ sc_editframe ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:FrameName}' }}",
        "$3",
        "{{ sc_endeditframe }}"],
        "pipeTemplate": "",
    },
    {
        "name": "sc_execute",
        "description": "Renders variant beneath the current script providing item to the pipeline",
        "validationRegEx": "",
        "template": "sc_execute ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:SubVariantName}'",
        "pipeTemplate": "sc_execute '${1:SubVariantName}'",
    },
    {
        "name": "sc_evaluate",
        "description": "Evaluates a rule stored in an item beneath the scriban script - allows specifying item for evaluation. Returns boolean value",
        "validationRegEx": "",
        "template": "sc_evaluate ${1|i_item,i_datasource,i_home,i_page,i_site|} '${2:Rule Name}'",
        "pipeTemplate": "sc_evaluate '${1:Rule Name}'",
    },
    {
        "name": "",
        "description": "",
        "validationRegEx": "",
        "template": "",
        "pipeTemplate": "",
    },
];
