const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = function css() {
  return gulp
    .src('source/assets/scss/*.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('tmp/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('tmp/css/'));
};