'use strict';

import config       from '../config';
import gulp         from 'gulp';
import browserSync  from 'browser-sync';

gulp.task('lib', function () {

  return gulp.src('app/assets/lib/**/*')
    .pipe(gulp.dest('build/assets/lib'))
    .pipe(browserSync.stream());
});