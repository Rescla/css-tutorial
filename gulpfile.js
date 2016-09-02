// The main Gulp depedency, so we can register tasks
var gulp = require('gulp');

// Browser-sync for easy html and css syncing
var browserSync = require('browser-sync').create();

// Gulp sass for easy sass compilation from gulp
var sass = require('gulp-sass');

// Gulp sourcemaps to keep track of changes between scss and css
var sourcemaps = require('gulp-sourcemaps');

// Gulp inject to dynamically insert links to subfolders in the root index.html
var inject = require('gulp-inject');

// Define the default task, is run when you simply run 'gulp'
gulp.task('default', ['serve']);

// Define the 'serve' task. This is the task you should run, and is available to run in every tutorial folder
gulp.task('serve', ['sass'], function(){
    browserSync.init({
        server: process.cwd()       // Serve from the current working directory
    });

    // For more info about globs, see: https://github.com/isaacs/node-glob#glob-primer
    gulp.watch("**/*.scss", ['sass']);                          // Watch for changes for all scss files and compile
    gulp.watch("**/*.html").on('change', browserSync.reload);   // Watch for changes for all html files and refresh
});

// Define the 'sass' task to compile all scss files to their css counterparts
gulp.task('sass', function() {
    return gulp.src( process.cwd() + '/**/*.scss')  // Define source files using glob notation and working directory
        .pipe(sourcemaps.init())                    // Initialize sourcemapping
        .pipe(sass().on('error', sass.logError))    // Pipe it to gulp-sass
        .pipe(sourcemaps.write())                   // Compile sourcemaps based on changes done by sass
        .pipe(gulp.dest('./'))                      // Define destination, use the same location as the source
        .pipe(browserSync.stream());                // Make sure browserSync knows about the update
});

// Use this to update the subfolder links if you add a new folder
gulp.task('update-links', function() {
    return gulp.src('index.html')
        .pipe(inject(
            gulp.src('./*/index.html',{read: false, nosort: false}),
            {
                transform: function(filepath){
                    return '<li><a href="' + filepath + '">' + filepath + '</a></li>';
                }
            }
        ))
        .pipe(gulp.dest('./'));
});