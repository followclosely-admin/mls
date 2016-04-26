'use strict';

import config       from '../config';
import gulp         from 'gulp';
import handleErrors from '../util/handleErrors';
import browserSync  from 'browser-sync';

gulp.task('html', ['htmlViews'], function () {

  return gulp.src(config.html.src)
    .on('error', handleErrors)
    .pipe(gulp.dest(config.html.dest))
    .pipe(browserSync.stream());
});


gulp.task('htmlViews', function(){

	return gulp.src(config.html.viewsSrc)
		.on('error', handleErrors)
		.pipe(gulp.dest(config.html.viewsDest))
		.pipe(browserSync.stream());

});