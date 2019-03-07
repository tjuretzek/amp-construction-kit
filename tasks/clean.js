const gulp = require('gulp');
const rimraf = require('gulp-rimraf');

module.exports = function clean() {
  return gulp.src(['dist', 'tmp'], { allowEmpty: true, read: false })
    .pipe(rimraf());
};
