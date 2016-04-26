var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass    = require('gulp-compass'),
    concat     = require('gulp-concat');

gulp.task('log', function() {
  gutil.log('Pizza order forms are awesome!');
});

var jsSources = [
  'components/scripts/ie10-viewport-bug-workaround.js',
  'components/scripts/form-validation.js'
];

var sassSources = ['components/sass-stylesheets/main.scss'];

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'));
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass-stylesheets',
      image: 'builds/development/images',
      font: 'builds/development/fonts',
      style: 'expanded'
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest('builds/development/css'));
});

gulp.task('default', ['js', 'compass']);