const { src, dest, watch, series, parallel } = require('gulp');
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');

const paths = {
  html: 'index.html',
  css: 'styles/**/*.css',
  js: 'scripts/**/*.js'
};

const lintJS = () => {
  return src(paths.js)
    .pipe(eslint())
    .pipe(eslint.format());
};

const lintCSS = () => {
  return src(paths.css)
    .pipe(stylelint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    }));
};


const transpileJS = () => {
  return src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('scripts/'))
    .pipe(connect.reload());
};

const serve = (done) => {
  connect.server({
    root: '.',
    livereload: true
  });
  done();
};

const watchFiles = () => {
  watch(paths.js, series(lintJS, transpileJS));
  watch(paths.css, lintCSS);
  watch([paths.html, paths.css, paths.js], () => {
    return src(paths.html).pipe(connect.reload());
  });
};

exports.default = series(
  parallel(lintJS, lintCSS, transpileJS),
  serve,
  watchFiles
);
