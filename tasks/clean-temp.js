const gulp = require('gulp');
const rimraf = require('gulp-rimraf');

module.exports = function cleanTmp() {
  return gulp.src('tmp', {
    allowEmpty: true,
    read: false
  })
  .pipe(rimraf());
};
