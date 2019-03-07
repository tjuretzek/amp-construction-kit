const browsersync = require("browser-sync").create();
const clean = require('./tasks/clean');
const cleanTmp = require('./tasks/clean-temp');
const connect = require('gulp-connect');
const css = require('./tasks/css');
const gulp = require('gulp');
const images = require('./tasks/images');
const injection = require('./tasks/injection');
const newPage = require('./tasks/new-page');
const panini = require('panini');
const templates = require('./tasks/templates');


function templateRefresh() {
  panini.refresh();
  return templates()
}

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist"
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function server() {
  return connect.server({
    root: 'dist',
    port: 3000
  });
}

function watchFiles() {
  gulp.watch('source/assets/scss/**/*', gulp.series(css, templateRefresh, injection));
  gulp.watch('source/data/*.json', gulp.series(templateRefresh, injection));
  gulp.watch('source/**/*.html', gulp.series(templateRefresh, injection));
  gulp.watch('source/assets/images/**/*', images);
  gulp.watch('dist/**/*', browserSyncReload);
}

gulp.task('create',
  gulp.series(
    newPage,
    css,
    templates,
    injection
  )
);

gulp.task('new-page',
  gulp.series(
    newPage,
    css,
    templates,
    injection
  )
);

gulp.task('build',
  gulp.series(
    clean,
    gulp.parallel(
      css,
      images
    ),
    templates,
    injection,
    cleanTmp
  )
);

gulp.task('watch',
  gulp.series(
    clean,
    gulp.parallel(
      css,
      images
    ),
    templates,
    injection,
    gulp.parallel(
      watchFiles,
      browserSync
    )
  )
);

gulp.task('test',
  gulp.series(
    clean,
    gulp.parallel(
      css,
      images
    ),
    templates,
    injection,
    server
  )
);