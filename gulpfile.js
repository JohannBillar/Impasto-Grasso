var gulp   = require('gulp'),
    gutil  = require('gulp-util'),
    concat = require('gulp-concat');

gulp.task('log', function() {
  gutil.log('Pizza order forms are awesome!');
});

var jsSources = [
  'components/scripts/ie10-viewport-bug-workaround.js',
  'components/scripts/form-validation.js'
];

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('builds/development/js'));
});