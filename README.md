# eleventy-shortcode-keystone-document

This is an [Eleventy](https://www.11ty.dev/) plugin that adds a `keystoneDocument` shortcode that renders your [Keystone 6](https://keystonejs.com/) document fields inside your Eleventy site.

Keystone's `@keystone6/document-renderer` is a React component. This shortcode renders the React component to HTML and exports static HTML in your template.

## Installation

```
npm add https://github.com/larryhudson/eleventy-shortcode-keystone-document
```

Add to your `.eleventy.js`:

```
const keystoneDocumentPlugin = require("eleventy-shortcode-keystone-document");

// inside the eleventyConfig function:
module.exports = function(eleventyConfig) {

// add keystoneDocument shortcode
eleventyConfig.addPlugin(keystoneDocumentPlugin)
}

```

## Usage

The plugin adds a `keystoneDocument` [universal shortcode](https://www.11ty.dev/docs/shortcodes/#universal-shortcodes) that can be used in Liquid, Nunjucks, Handlebars or JavaScript.

To use it in Nunjucks:

```
{% keystoneDocument keystonePage.content.document %}
```
