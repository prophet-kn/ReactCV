'use strict'

var gulp = require('gulp-param')(require('gulp'), process.argv)
var sass = require('gulp-sass')
var bulkSass = require('gulp-sass-bulk-import')
var sassLint = require('gulp-sass-lint')
var cssDest = './src/'
var scssSrc = './src/App.scss'
var output = 'compressed'
 
sass.compiler = require('node-sass')
 
gulp.task('sass', function () {
  return gulp.src(scssSrc)
    .pipe(bulkSass())
    .pipe(sassLint())
    .pipe(sass({
      outputStyle: output,
      precision: 10,
      includePaths: ['./src'],
    }))
    .on('error', sass.logError)
    .pipe(gulp.dest(cssDest))
})
 
gulp.task('sass:watch', ['sass'], function() {
  gulp.watch(scssSrc, ['sass'])
})

gulp.task('default', ['sass:watch'])
