/**
* Browser Sync setup and tasks
**/

'use strict';

var config = require('../config.js'),
    gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// Paths
var baseDir = config.paths.docs.root;

gulp.task('browser-sync', function () {
  browserSync.init({
    'notify': true,
    'server': {
      'baseDir': baseDir
    }
  });
});

gulp.task('browser-sync-reload', function() {
  browserSync.reload();
});
