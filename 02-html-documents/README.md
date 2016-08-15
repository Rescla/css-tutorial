# Basic HTML

Working with HTML requires some basic knowledge about XML like document structures. This chapter will explain those basics.

## Structure

HTML files follow a basic template, below is the default IntelliJ HTML template:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
</html>
```

## Elements

First we have elements, defined by opening and closing declarations, as a self closed element or just as the start element if it is an element without body, such as `<link>`.
```
<element></element>
<element/>
<element>
```

Elements can have attributes with a value or without value as shorthand for ```true```. Attribute values are enclosed by ```"``` (```'``` will also work, but is not recommended)

```
<element attribute="value" />
<element attribute />
<element attribute="true" />
``` 

Naming conventions for elements and attributes are kebab-case (with ```-``` characters).

While you are free to use custom elements and attributes you should be aware that older versions of IE do not play nice with custom elements or attributes. There are ways around this using javascript, or you could chose to stick to plain html elements and attributes.

## Layout

HTML files have a root ```<html />``` element with two child elements: ```<head />``` and ```<body />```.

### Document Type

The first thing in a HTML document should be the document type declaration. In this case we use `<!DOCTYPE html>` which declares the following document to be HTML5.

There are various other types of HTML documents, such as older versions of HTML, strict versions and XHTML. These are only interesting for legacy projects, new projects should use HTML5.

### HTML

This is the root element of the document, preceded only by the document type declaration.

`lang` attribute to indicate the document is written in English. This attribute is not exclusive to the `html` element, and could be set on a lower level for multi language documents (global attribute)

`lang` is used in various ways by browsers. It is used to show the google translate button in Chrome and by search bots to indicate document language, for example.

### Head
Head has no visual counterpart and can host javascript, css, external resources, metadata, etc. Since HTML files are streamed to the browser, elements which are declared first will be executed first. This means that elements don't exist yet when Javascript in the `head` is executed. At the same time, CSS is loaded before elements are rendered. Usually you don't have to concern yourself with this too much, although it is common practice to place non-essential resources (like tracking) at the bottom of the body instead of the header to prevent performance degradation.

The first thing in the `head` should be the charset. This is important to make sure special characters are rendered correctly.

* Take a look at index.html and fix the character encoding issue.

The second thing in the `head` should be the title.

* Change the title in index.html

Below is a basic example of linking to css and js.

```html
<link href="index.css" rel="stylesheet" type="text/css">
<script src="index.js" type="text/javascript"></script>
```

`link` uses `href` as resource indicator, `rel` to indicate what the resource is used for and `type` to indicate the file type and language.

`script` uses `src` as resource indicator and `type` to indicate the file type and language. Notice that that there is an explicit open and close element, this is required for javascript in `script` elements.

* Add `example.css` to index.html and verify it has loaded
    * It will display `CSS loaded!`, but you can also check using the network or resource tab.
    * Also try changing the resource, introduce a typo and see if you can debug it using the element inspector.

### Body

The body is the main document body (obviously). It contains all the visual elements, but can contain `link` or `script` elements as well.