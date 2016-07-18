/**
* Serve site
**/

'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('serve', function (cb) {
  return runSequence(
    ['compile', 'browser-sync', 'watch'],
    cb
  );
});
