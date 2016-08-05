# To CSS or SCSS

To start with, SCSS is a superset of CSS. This is to say:
```
Any valid CSS is valid SCSS
```
This means that we can just rename a .css file to .scss, compile it, and it works just like it did before!

## Migrating existing projects

Since you can just rename CSS files to SCSS, this should be your first step. Set up your toolchain with gulp, 
webpack, or compile it by hand to css and make you are familiar with the workflow.

### Renaming css to scss

* For the purposes of this tutorial, rename example.css to index.scss
* If you are already running gulp, stop it and restart it using ``gulp``
    * If it does not work, make sure you are in the right directory and have followed all the steps detailed in 
    getting started.
    
You should now see some coloured rectangles of different sizes.

## Using nested selectors

* Take a look at the displayed webpage.

You will notice some duplication and similarities between the different rectangles.

Each of the colored rectangles represents a ``div`` which is styled using css. Some of 
these are nested, the blue and green exist 'inside' the red rectangle. This will make sense when we look at the css.

* Take a look at index.scss and read the code comments.

Notice that div.red is repeated in selectors 3 times.

* Take a look at ref/_syntax.scss and see if you can't nest those in a way that gets rid of the duplicate selectors.
* If you get stuck, take a look at ref/_index.scss.

It is up to you to determine how you actually nest the selectors, if at all. The most important thing to know is that
 the feature exists and to be familiar with how it works. Use it to make code more readable, but you don't have to 
 use it everywhere possible.
 
# Note

## _ prefix

Don't worry about ``_syntax`` starting with ``_``. It means node-sass won't compile them when looking for 
files, this will be explained in the next chapter, and is important for modularization.

## CSS?

The tutorial covers SCSS vs CSS before going into CSS. If you don't understand how selectors work, we 
will cover it later in more detail.