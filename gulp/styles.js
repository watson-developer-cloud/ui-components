/**
* Compiles SCSS to CSS
**/

'use strict';

var config = require('../config.js'),
    sass = require('./_styles.js'),
    gulp = require('gulp'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    onError = require('./on-error.js');

// Paths
var watchPath = config.paths.src.styles + '/**/*.scss',
    destPath = config.paths.build.styles;

gulp.task('styles', function() {
  return runSequence('styles:compile', 'styles:clean');
});

gulp.task('styles:compile', function() {
  return sass(watchPath, destPath, gulp);
});

gulp.task('styles:clean', function() {
  return gulp.src(destPath + '/watson-components.css')
    .pipe(clean());
});

gulp.task('styles:watch', function() {
  return gulp.watch(watchPath).on('change', function() {
    runSequence('styles', 'browser-sync-reload');
  });
});
