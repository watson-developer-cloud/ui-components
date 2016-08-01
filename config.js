'use strict';

var src = './src',
    build = './build',
    bower = './bower';

module.exports = {
  paths: {
    src: {
      root: src,
      styles: src + '/scss',
      scripts: src + '/js',
      views: src + '/views',
      bower: src + '/bower',
      icons: src + '/icons'
    },
    build: {
      root: build,
      styles: build + '/css',
      scripts: build + '/js',
      iconFonts: build + '/fonts/icon-fonts',
      icons: build + '/images/icons'
    },
    bower: {
      root: bower,
      stylesheets: bower + '/stylesheets',
      scripts: bower + '/js'
    }
  }
};
