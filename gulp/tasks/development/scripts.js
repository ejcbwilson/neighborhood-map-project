var gulp   = require('gulp');
var stylish = require('jshint-stylish')
var jshint = require('gulp-jshint');
var config = require('../../config').development.lint;

//todo lint not running on subfolders
gulp.task('lint', function() {
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish), {beep: true}); 
});