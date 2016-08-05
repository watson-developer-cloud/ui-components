/**
 * Compiles src/js to public/js
 **/

'use strict';

var config = require('../config.js');
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require("gulp-sourcemaps");
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');
var onError = require('./on-error.js');

// Paths
var watchPath = config.paths.src.scripts + '/**/*.js',
    destPath = config.paths.docs.scripts;

gulp.task('scripts', function() {
  return gulp.src([config.paths.src.scripts + '/lib/vendors/*.js', config.paths.src.scripts + '/lib/components/*.js', config.paths.src.scripts + '/lib/script.js'])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(concat('watson-components.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destPath));
});

gulp.task('scripts:site', function() {
  return gulp.src([config.paths.src.scripts + '/page/**/*.js'])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('scripts:watch', ['scripts', 'scripts:site'], function() {
  return gulp.watch(watchPath).on('change', function() {
    runSequence('scripts', 'browser-sync-reload');
  });
});
