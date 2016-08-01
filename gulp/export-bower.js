var config = require('../config.js'),
    sass = require('./_styles.js'),
    gulp = require('gulp'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    plumber = require('gulp-plumber'),
    onError = require('./on-error.js');

// Paths
var watchPath = config.paths.src.styles + '/**/*.scss',
    destPath = config.paths.bower.root,
    bowerSrcPath = config.paths.src.bower;

// gulp.task('bower', ['bower:scss', 'bower:css', 'bower:bower-configs', 'bower:icons', 'bower:icon-fonts']);

gulp.task('bower', function() {
  return runSequence('bower:clean', ['bower:scss', 'bower:css', 'bower:bower-configs', 'bower:icons', 'bower:icon-fonts', 'bower:scripts']);
});

gulp.task('bower:clean', function() {
  return gulp.src([destPath]).pipe(clean());
});

gulp.task('bower:scss', function() {
  return runSequence(
    'bower:scss-export',
    'bower:scss-change-name',
    'bower:scss-clean',
    'bower:clean-style'
  );
});

gulp.task('bower:scss-export', function() {
  return gulp.src([watchPath])
    .pipe(gulp.dest(destPath));
});

gulp.task('bower:scss-change-name', function() {
  return gulp.src([destPath + '/watson-components.scss'])
    .pipe(rename('_watson-components.scss'))
    .pipe(gulp.dest(destPath));
});

gulp.task('bower:scss-clean', function() {
  return gulp.src([destPath + '/watson-components.scss'])
    .pipe(clean());
});

gulp.task('bower:css', function() {
  return runSequence('bower:css-normal', 'bower:css-min');
});

gulp.task('bower:css-normal', function() {
  return sass(watchPath, destPath, gulp);
});

gulp.task('bower:css-min', function() {
  return gulp.src([destPath + '/watson-components.css'])
    .pipe(rename('watson-components.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(destPath));
});

gulp.task('bower:clean-style', function() {
  return gulp.src([destPath + '/style.scss', destPath + '/style.css'])
    .pipe(clean());
});

gulp.task('bower:scripts', ['bower:scripts-lib', 'bower:scripts-unminify', 'bower:scripts-minify']);

gulp.task('bower:scripts-lib', function() {
  return gulp.src([config.paths.src.scripts + '/lib/**/*.js'])
    .pipe(gulp.dest(config.paths.bower.scripts));
});

gulp.task('bower:scripts-unminify', function() {
  return gulp.src([config.paths.src.scripts + '/lib/vendors/*.js', config.paths.src.scripts + '/lib/components/*.js', config.paths.src.scripts + '/lib/script.js'])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(concat('watson-components.js'))
    .pipe(gulp.dest(config.paths.bower.root));
});

gulp.task('bower:scripts-minify', function() {
  return gulp.src([config.paths.src.scripts + '/lib/vendors/*.js', config.paths.src.scripts + '/lib/components/*.js', config.paths.src.scripts + '/lib/script.js'])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(concat('watson-components.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.bower.root));
});

gulp.task('bower:bower-configs', ['bower:bower-src']);

gulp.task('bower:bower-src', function() {
  return gulp.src([bowerSrcPath + '/**/**.*'])
    .pipe(gulp.dest(destPath));
});

gulp.task('bower:icons', function() {
  return gulp.src(config.paths.src.icons + '/**.*')
    .pipe(gulp.dest(destPath + '/icons'));
});
gulp.task('bower:icon-fonts', function() {
  return gulp.src(config.paths.build.iconFonts + '/**.*')
    .pipe(gulp.dest(destPath + '/icons-fonts'));
});

gulp.task('bower:watch', function() {
  return gulp.watch(watchPath).on('change', function() {
    runSequence('bower', 'browser-sync-reload');
  });
});
