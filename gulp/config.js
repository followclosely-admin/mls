'use strict';

export default {

  browserPort: 3000,
  UIPort: 3001,
  testPort: 3002,

  sourceDir: './app/',
  buildDir: './build/',

  styles: {
    src: 'app/assets/sass/*.scss',
    dest: 'build/assets/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: 'app/assets/js/**/*.js',
    dest: 'build/assets/js',
    // test: './test/**/*.js',
    gulp: 'gulp/**/*.js'
  },

  images: {
    src: 'app/assets/images/**/*',
    dest: 'build/assets/images'
  },

  fonts: {
    src: ['app/assets/fonts/**/*'],
    dest: 'build/assets/fonts'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],

  views: {
    index: 'app/index.html',
    src: 'app/assets/views/**/*.html',
    dest: 'app/assets/js'
  },

  gzip: {
    src: 'build/assets/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'build/assets',
    options: {}
  },

  // browserify: {
  //   bundleName: 'scripts.js',
  //   prodSourcemap: false
  // },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

  init: function() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();
