'use strict';

var src = './src',
    build = './build';

module.exports = {
  paths: {
    src: {
      root: src,
      styles: src + '/scss',
      views: src + '/views'
    },
    build: {
      root: build,
      styles: build + '/css'
    }
  }
};
