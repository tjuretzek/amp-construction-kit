const gulp = require('gulp');
const panini = require('panini');

module.exports = function templates(options) {
  return gulp.src('source/pages/**/*.html')
    .pipe(panini({
      root: 'source/pages',
      layouts: 'source/layouts/',
      partials: 'source/partials/',
      data: 'source/data/'
    }))
    .pipe(gulp.dest('tmp'));
};