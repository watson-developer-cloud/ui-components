/**
* Compiles SCSS to CSS
**/

'use strict';

var config = require('../config.js'),
    sass = require('./_styles.js'),
    gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    onError = require('./on-error.js');

// Paths
var watchPath = config.paths.src.styles + '/**/*.scss',
    destPath = config.paths.build.styles;

gulp.task('styles', function() {
  return sass(watchPath, destPath, gulp);
});

gulp.task('styles:watch', function() {
  return gulp.watch(watchPath).on('change', function() {
    runSequence('styles', 'browser-sync-reload');
  });
});
