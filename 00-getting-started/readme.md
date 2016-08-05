#Getting Started

Hello and welcome to this CSS tutorial! The contents of this tutorial is as follows:

* Useful resources for HTML and CSS
* What is SCSS and how does it compare to CSS
* Basic SCSS syntax
* TODO


But first an introduction!

## Setting up your dev environment

To work with HTML and CSS you don't need anything other than a basic text editor. But you can make your web 
development life a lot easier with file watchers and code compilation.

For this tutorial it is assumed you use the following toolchain:

* A browser
* A text editor or IDE
    * It is strongly recommended you use software with syntax highlighting for SCSS and HTML for readability
    * WebStorm (JetBrains) is my personal IDE of preference
* Node.js (and npm)
    * node-sass
    * browser-sync
    * gulp
    
Of these, node-sass is a JavaScript port of sass, originally written in Ruby and browser-sync is an easy way to set 
up a simple front-end development environment with automatic code syncing. When set up properly it will refresh the 
page when you edit HTML and inject styles on the fly without refreshing the page. Gulp is a task runner to tie it all
 together, and to make things easier for the purposes of this tutorial.

For reference, here are some more recommendations for software. They are not necessary for this tutorial.

* nvm-windows: https://github.com/coreybutler/nvm-windows
    * Node.js version management
* webpack: https://webpack.github.io/

### Installation Instructions

* Install node.js from this website: https://nodejs.org/en/

The version is not particularly important, chose whatever strikes your fancy. LTS refers to Long Time Support, is
more stable and probably has less issues with various plugins. The latest version is usually fine to use also and 
has the latest and greatest functions and better support for newer JavaScript versions (if you use it directly 
instead of as a tool runner as we do here)

* Start cmd, go to the project root directory and run the following commands:
```
$ npm install -g gulp
$ npm install
```

The first line installs gulp (with the ```-g``` flag) so you can run it directly in cmd using ```gulp```. The second 
line installs all dependencies defined in the ```package.json``` file.

* Navigate to the tutorial folder and run ```gulp``` or ```gulp serve``` to start the project.

This should open a browser window with "Hello world!". Try out browser sync's features by changing index.html or index
.scss

## Notes

Some random notes that may be of use.

### Watchers

While watchers are good for file changes, they do not automatically pick up new files when they are added. So you 
will have to restart gulp by pressing CTRL+C, Y and starting gulp again if you add new files.

Also, .css files are not watched in this tutorial project. So just edit the scss file instead. The tutorials relating
 to css files have modified watchers, so they work properly.

### Git Archive
Want to easily share the project with someone else? Use the following command to generate a zip:
```
git archive --format=zip -o css-tutorial.zip HEAD
```
If you want to include generated files and your solutions, check ``.gitignore`` and comment out the relevant lines.

For more info about git archive: https://git-scm.com/docs/git-archive

### Git Checkout
Want to quickly reset a folder to its last committed state, throwing away all changes? Use the following command:
```
git checkout ./
```
**WARNING** This will throw away all changes in the current working directory, so make sure you run it on a tutorial folder 
and 
not the entire project! 

I recommend copying the folder first, so you don't lose your old changes. Git checkout can also checkout individual 
files, if an entire folder is too much for your tastes. Simply specify the file instead of ```./```

### Comment syntax
SCSS: ``/* comment */``

HTML: ``<!-- comment -->``
