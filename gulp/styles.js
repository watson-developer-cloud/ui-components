/**
* Compiles SCSS to CSS
**/

'use strict';

var config = require('../config.js'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    plumber = require('gulp-plumber'),
    onError = require('./on-error.js');

// Paths
var watchPath = config.paths.src.styles + '/**/*.scss',
    destPath = config.paths.build.styles;

gulp.task('styles', function() {
  return gulp.src([watchPath])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(destPath));
});

gulp.task('styles:watch', function() {
  return gulp.watch(watchPath).on('change', function() {
    runSequence('styles', 'browser-sync-reload');
  });
});
