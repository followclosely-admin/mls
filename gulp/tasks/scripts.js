'use strict';

import config       from '../config';
import gulp         from 'gulp';
import gulpif       from 'gulp-if';
import sourcemaps   from 'gulp-sourcemaps';
import handleErrors from '../util/handleErrors';
import browserSync  from 'browser-sync';

gulp.task('scripts', function () {

  return gulp.src(config.scripts.src)
    .on('error', handleErrors)
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(browserSync.stream());

});

  // const createSourcemap = !global.isProd || config.scripts.prodSourcemap;

  // return gulp.src(config.scripts.src)
  //   .pipe(gulpif(createSourcemap, sourcemaps.init()))
  //   .pipe(sass({
  //     sourceComments: !global.isProd,
  //     outputStyle: global.isProd ? 'compressed' : 'nested',
  //     includePaths: config.scripts.sassIncludePaths
  //   }))
  //   .on('error', handleErrors)
  //   .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
  //   .pipe(gulpif(
  //     createSourcemap,
  //     sourcemaps.write( global.isProd ? './' : null ))
  //   )
  //   .pipe(gulp.dest(config.scripts.dest))
  //   .pipe(browserSync.stream());

// });
