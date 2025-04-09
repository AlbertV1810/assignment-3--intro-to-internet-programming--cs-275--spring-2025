const gulp = require("gulp");
const eslint = require("gulp-eslint");
const stylelint = require("gulp-stylelint");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();

gulp.task("lint-js", () => {
  return gulp.src("scripts/**/*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("lint-css", () => {
  return gulp.src("styles/**/*.css")
    .pipe(stylelint({
      reporters: [{ formatter: "string", console: true }]
    }));
});

gulp.task("dev", () => {
  browserSync.init({ server: "./" });

  gulp.watch("styles/**/*.css", gulp.series("lint-css", browserSync.reload));
  gulp.watch("scripts/**/*.js", gulp.series("lint-js", browserSync.reload));
});

gulp.task("build", () => {
  return gulp.src("scripts/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("prod/scripts"));
});

gulp.task("default", gulp.series("dev"));
