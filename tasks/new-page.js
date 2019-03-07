const gulp = require('gulp');
const rename = require('gulp-rename');
const argv = require('./helper/arguments').argv;


module.exports = function newPage() {
  if (!argv.name) {
    console.log('ERROR: You need to add a name for the new page!');
    console.log('For example:');
    console.log('gulp create --name pageName');
    return false;
  } else {
    return gulp.src('source/templates/html.tpl')
      .pipe(rename(argv.name + '.html'))
      .pipe(gulp.dest('source/pages'))
      .pipe(gulp.src('source/templates/scss.tpl'))
      .pipe(rename(argv.name + '.scss'))
      .pipe(gulp.dest('source/assets/scss'));
  }
};
