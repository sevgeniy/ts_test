const gulp = require("gulp");
const server = require("browser-sync").create();
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("scripts", function () {
  return gulp
    .src("src/ts/*.ts")
    .pipe(sourcemaps.init())
    .pipe(
      ts({
        noImplicitAny: true,
        outFile: "index.js",
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("src/js"));
});

gulp.task("server", function () {
  server.init({
    server: {
      baseDir: "src/",
    },
  });

  gulp.watch("src/ts/*").on("change", gulp.series("scripts"));
  gulp.watch("src/**/*").on("change", server.reload);
});

gulp.task("build", gulp.series("scripts"));
gulp.task("start", gulp.series("build", "server"));
