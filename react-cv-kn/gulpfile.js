'use strict'

var gulp = require('gulp-param')(require('gulp'), process.argv);
var sass = require('gulp-sass')
var minifyInline = require('gulp-minify-inline');
var bulkSass = require('gulp-sass-bulk-import');
var sassLint = require('gulp-sass-lint');
var cssDest = './src/'
var scssSrc = './src/App.scss'
var output = 'compressed'
 
sass.compiler = require('node-sass')
 
gulp.task('sass', function () {
  return gulp.src(scssSrc)
    .pipe(sassLint())
    .pipe(minifyInline())
    .pipe(bulkSass())
    .pipe(sass({
      outputStyle: output,
      precision: 10,
    }))
    .on('error', sass.logError)
    .pipe(gulp.dest(cssDest))
})
 
gulp.task('sass:watch', function () {
  gulp.watch(scssSrc, gulp.series(['sass']))
})

gulp.task('default', gulp.task(['sass:watch']))
