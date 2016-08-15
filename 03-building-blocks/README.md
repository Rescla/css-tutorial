# Building blocks

Elements can be rendered in various ways. This chapter covers the 3 basic types: `block`, `inlinee`  and `inline-block`. These render types can be set using css, eg. `inline: block;`

Other main display types are `table` (and derivatives), `list-item` and `flex`. The `table` types are used to style various parts of tables. `list-item` is used to render default list item elements.

## Inline

The most basic example of inline styling is text. By definition inline elements take no more space than their contents and do not have fixed heights, widths, etc. They flow like text, so multiple inline elements will behave as if they are plain text.

* Take a look at index.html to see how inline elements do not affect text flow

As a rule, inline elements should only include other inline elements. Also, some elements like spans, should not be nested.

#### Technically bad
```html
<span>
    <span></span>
</span>

<a>
    <div>
    </div>
</a>
```

#### Bad
```html
<span>
    <div>
    </div>
</span>
```

## Block

Some basic examples of block elements are `<div />` and `<h1 />`. Block elements take up all the horizontal width available to them.

## Inline-block

List are the sa