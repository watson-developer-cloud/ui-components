'use strict';

var src = './src',
    build = './build',
    bower = './bower';

module.exports = {
  paths: {
    src: {
      root: src,
      styles: src + '/scss',
      views: src + '/views',
      bower: src + '/bower'
    },
    build: {
      root: build,
      styles: build + '/css'
    },
    bower: {
      root: bower,
      stylesheets: bower + '/stylesheets'
    }
  }
};
