// eslint-disable-next-line
'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass');
const scsslint = require('gulp-scss-lint');
const beautify = require('gulp-beautify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-minify-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const pkg = require('./package.json');
const nunjucksRender = require('gulp-nunjucks-render');

const reloadBrowser = (done) => {
  browserSync.reload();
  done();
};

gulp.task('scss:copy', () =>
  gulp.src(['src/scss/**/*.scss'])
    .pipe(gulp.dest('dist'))
);

gulp.task('scss', ['scss:copy'], () =>
  gulp.src('dist/main.scss')
    .pipe(rename(`_${pkg.name}.scss`))
    .pipe(gulp.dest('dist'))
);

gulp.task('css', () =>
  gulp.src('src/scss/main.scss')
    .pipe(
      sass({
        errLogToConsole: true,
        includePaths: ['./node_modules'],
        outputStyle: 'nested',
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(rename(`${pkg.name}.css`))
    .pipe(gulp.dest('dist'))
    .pipe(minifyCss())
    .pipe(rename(`${pkg.name}.min.css`))
    .pipe(gulp.dest('dist'))
);


gulp.task('styles:lint-base', () =>
  gulp.src(['src/scss/**/*'])
    .pipe(scsslint({
      maxBuffer: 1000000,
      reporterOutput: 'scss-report.json',
    }))
);

gulp.task('styles:lint-with-report', () =>
  gulp.src('scss-report.json')
    .pipe(beautify())
    .pipe(gulp.dest('.'))
);

gulp.task('styles:lint', () => ['styles:lint-base', 'styles:lint-with-report']);

gulp.task('example-css', () =>
  gulp.src('example/src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        errLogToConsole: true,
        includePaths: ['./node_modules'],
        outputStyle: 'nested',
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(rename('bundle.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('example/build'))
    .pipe(browserSync.stream())
);

gulp.task('example-js', () =>
  gulp.src('example/src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('example/build'))
);

gulp.task('example-html', () =>
  gulp.src('example/src/views/pages/**/*.nunjucks')
    .pipe(nunjucksRender({ path: ['example/src/views'] }))
    .pipe(gulp.dest('example/'))
);

// high level tasks
gulp.task('example', ['example-css', 'example-js', 'example-html']);
gulp.task('compile', ['css', 'scss', 'example']);

// default task
gulp.task('default', ['compile']);

// watch tasks
gulp.task('example-js-watch', ['example-js'], reloadBrowser);
gulp.task('example-html-watch', ['example-html'], reloadBrowser);

gulp.task('serve', ['example'], () => {
  browserSync.init({
    notify: true,
    server: './example',
  });

  gulp.watch(['example/src/scss/**/*.scss', 'src/scss/**/*.scss'], ['example-css']);
  gulp.watch(['example/src/js/**/*.js'], ['example-js-watch']);
  gulp.watch(['example/src/views/**/*.nunjucks'], ['example-html-watch']);
});
