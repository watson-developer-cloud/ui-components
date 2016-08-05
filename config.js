'use strict';

var src = './src',
    build = './docs',
    dist = './dist';

module.exports = {
  paths: {
    src: {
      root: src,
      styles: src + '/scss',
      scripts: src + '/js',
      views: src + '/views',
      dist: src + '/dist',
      icons: src + '/icons'
    },
    build: {
      root: build,
      styles: build + '/css',
      scripts: build + '/js',
      iconFonts: build + '/fonts/icon-fonts',
      icons: build + '/images/icons'
    },
    dist: {
      root: dist,
      stylesheets: dist + '/stylesheets',
      scripts: dist + '/js'
    }
  }
};
