# Sitecore Experience Accelerator Scriban syntax coloring and auto completion

This extension allows to colorize Sitecore Experience Accelerator Scriban-Html scripts following the syntax of the [scriban templating language](https://github.com/lunet-io/scriban) with [SXA extensions](https://doc.sitecore.com/developers/sxa/100/sitecore-experience-accelerator/en/scriban-templates.html)

![screenshot](/screenshot.png)

## Features

- Mixed **Scriban and HTML** (using `{{` and `}}` to enter scriban) with the `.scriban` file extension.
- Supports auto complete for Scriban language auto complete including embedded objects.
- Supports auto complete for OOTB Sitecore Experience Accelerator functions and objects.

## 0.2.0
- Better detection if the Scriban wrapping moustaches (`{{` and `}}`) need to be added when using auto-completion.
- Improved `RegExp` handling.
- Support for `sc_placeholder` in auto-completion
- Description for `sc_parameter` function provided
- Added auto-completion for new functions introduced in SXA 10.0 - `sc_search`, `sc_inheritsfrom` and `sc_getitem`
- `tslint` dependency updated to deal with a low severity vulnerability in one of its dependencies.

## 0.1.2
- More accurate extension descriptions
- Improvements to snippets
- Descriptions synchonized with the documentation
- Verified and supplemented list of full extensions
- More links to documentation in auto-complete tooltips
- i_item extensions no longer erroneously appear as available options for fields auto completion.

## 0.1.0
- Support for mixed `Scriban` and `HTML` grammar
- Support for Scriban language & extension objects
- Support for Sitecore extensions
