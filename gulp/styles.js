/**
* Compiles SCSS to CSS
**/

'use strict';

var config = require('../config.js'),
    sass = require('./_styles.js'),
    gulp = require('gulp'),
    scsslint = require('gulp-scss-lint'),
    beautify = require('gulp-beautify'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    onError = require('./on-error.js');

// Paths
var watchPath = config.paths.src.styles + '/**/*.scss',
    destPath = config.paths.docs.styles;

var projectName = config.projectName;

gulp.task('styles', function() {
  return runSequence('styles:lint', 'styles:compile', 'styles:clean');
});

gulp.task('styles:compile', function() {
  return sass(watchPath, destPath, gulp);
});

gulp.task('styles:clean', function() {
  return gulp.src(destPath + '/' + projectName + '.css')
    .pipe(clean());
});

gulp.task('styles:lint', function() {
  return runSequence('styles:lint-base', 'styles:lint-with-report');
});

gulp.task('styles:lint-base', function() {
  return gulp.src([
    watchPath,
    '!' + config.paths.src.styles + '/lib/components/icon/_icon-fonts.scss',
    '!' + config.paths.src.styles + '/lib/vendors/reset/_reset.scss'
  ]).pipe(scsslint({
      'maxBuffer': 1000000,
      'reporterOutput': 'scss-report.json'
    }));
});

gulp.task('styles:lint-with-report', function() {
  return gulp.src('scss-report.json')
    .pipe(beautify())
    .pipe(gulp.dest('.'));
});

gulp.task('styles:watch', function() {
  return gulp.watch(watchPath).on('change', function() {
    runSequence('styles', 'browser-sync-reload');
  });
});
