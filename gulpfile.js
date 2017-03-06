'use strict';

// Includes packages
var gulp                = require('gulp');
var sass                = require('gulp-sass');
var autoprefixer        = require('gulp-autoprefixer');
var mergeMediaQueries   = require('gulp-merge-media-queries');
var cleanCss            = require('gulp-clean-css');
var notify              = require('gulp-notify');

// Paths variables
var paths = {
    dist       : 'dist',
    mainsass   : ['src/style.scss'],
    sass       : ['src/**/*.scss' ]
};


// Compile SASS
gulp.task('sass', function () {
    return gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['IE 8', 'IE 9', 'last 5 versions']}))
        .pipe(mergeMediaQueries())
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.dist))
        .pipe(notify({ message: 'Task SASS. Compiled successful.', onLast: true}));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
});


// Run default task
gulp.task('default', ['sass', 'watch']);