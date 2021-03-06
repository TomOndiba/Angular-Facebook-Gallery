var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
// custom
var connect = require('gulp-connect');
var watch = require('gulp-watch');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('dev', function() {
  // watch for sass changes
  gulp.watch(paths.sass, ['sass']);
  // start a connect server to test app locally
  connect.server({
    root: 'public',
    port: 3000,
    livereload: true
  });
  // Watch HTML and JS for live-reload
  watch({
    glob: ['./www/**/*.html', './www/**/*.js']
  })
    .pipe(connect.reload());
});

gulp.task('default', ['dev']);