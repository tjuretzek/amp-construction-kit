const gulp = require('gulp');
const inlinesource = require('gulp-inline-source');
const inject = require('gulp-inject-string');

module.exports = function injection() {
  return gulp.src('tmp/*.html')
    .pipe(inlinesource())
    .pipe(inject.after('<style', ' amp-custom'))
    .pipe(gulp.dest('dist'));
};
