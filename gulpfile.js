var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass    = require('gulp-compass'),
    connect    = require('gulp-connect'),
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
    .pipe(gulp.dest('builds/development/js'))
    .pipe(connect.reload());
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
    .pipe(gulp.dest('builds/development/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass-stylesheets/**/*', ['compass']);
});

gulp.task('default', ['js', 'compass', 'connect', 'watch']);

gulp.task('connect', function(){
  connect.server({
    root: 'builds/development',
    livereload: true
  })
} );