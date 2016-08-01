/**
* Watches all the files for changes
**/

'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync');

// list of gulp tasks
var tasks,
    watches;

tasks = [
  'styles',
  'scripts',
  'views',
  'icon-fonts'
];

watches = tasks.map(function(element) {
  return element + ':watch';
});

gulp.task('compile', tasks);
gulp.task('watch', watches);
