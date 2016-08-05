/**
* Compiles HTML
**/

'use strict';

var config = require('../config.js'),
    gulp = require('gulp'),
    nunjucksRender = require('gulp-nunjucks-render'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    plumber = require('gulp-plumber'),
    onError = require('./on-error.js');

// Paths
var viewsPath = config.paths.src.views,
    srcPath = config.paths.src.views + '/pages/**/*.nunjucks',
    watchPath = viewsPath + '/**/*.nunjucks',
    destPath = config.paths.docs.root;

gulp.task('views', function() {
  return gulp.src([srcPath])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(nunjucksRender({
      path: [viewsPath]
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('views:watch', function() {
  return gulp.watch([watchPath]).on('change', function() {
    runSequence('views', 'browser-sync-reload');
  });
});
