const gulp = require('gulp');
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

gulp.task('lint-js', () => {
  return gulp.src('./scripts/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint-css', () => {
  return gulp.src('./styles/*.css')
    .pipe(stylelint({
      reporters: [{ formatter: 'string', console: true }]
    }));
});

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./styles/*.css', gulp.series('lint-css')).on('change', browserSync.reload);
  gulp.watch('./scripts/*.js', gulp.series('lint-js')).on('change', browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('lint-js', 'lint-css', 'watch'));

gulp.task('minify-css', () => {
  return gulp.src('./styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./prod/styles'));
});

gulp.task('minify-js', () => {
  return gulp.src('./scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./prod/scripts'));
});

gulp.task('html', () => {
  return gulp.src('./*.html')
    .pipe(gulp.dest('./prod'));
});

gulp.task('build', gulp.parallel('minify-css', 'minify-js', 'html'));

gulp.task('prod', gulp.series('build'));
