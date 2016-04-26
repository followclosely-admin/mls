'use strict';

import config      from '../config';
import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';

// var browserSync = require('browser-sync');
var spa         = require('browser-sync-spa');

gulp.task('browserSync', function(){

  browserSync.use(spa({
    selector: 'ng-app'
  }));

  browserSync({
    open: false,
    server: 'build/',
    files: 'build/*',
    // baseDir: config.html,
    // files:  config.buildDir,
    port: config.browserPort,
    ui: {
      port: config.UIPort
    },
    ghostMode: {
      links: false
    }
  });

});

