var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass    = require('gulp-compass'),
    connect    = require('gulp-connect'),
    gulpif     = require('gulp-if'),
    uglify     = require('gulp-uglify'),
    htmlmin    = require('gulp-htmlmin'),
    concat     = require('gulp-concat');

var env,
    jsSources,
    sassSources,
    htmlSources,
    outputDir,
    sassStyle;

env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  outputDir = 'builds/development/';
  sassStyle = 'expanded';
} else {
  outputDir = 'builds/production/';
  sassStyle = 'compressed';
}

jsSources = [
  'components/scripts/ie10-viewport-bug-workaround.js',
  'components/scripts/form-validation.js'
];

sassSources = ['components/sass-stylesheets/main.scss'];
htmlSources = ['builds/development/*html'];

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest(outputDir + 'js'))
    .pipe(connect.reload());
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass-stylesheets',
      style: sassStyle,
      image: outputDir + 'images',
      font: outputDir + 'fonts'
    })
    .on('error', gutil.log))
    .pipe(gulp.dest(outputDir + 'css'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src(htmlSources)
    .pipe(gulpif(env === 'production', htmlmin({collapseWhitespace: true})))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass-stylesheets/**/*.scss', ['compass']);
  gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function(){
  connect.server({
    root: outputDir,
    livereload: true
  });
});

gulp.task('default', ['html', 'js', 'compass', 'connect', 'watch']);
