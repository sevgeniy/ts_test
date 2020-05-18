const gulp = require("gulp");
const server = require("browser-sync").create();
var ts = require("gulp-typescript");

gulp.task("scripts", function () {
  return gulp
    .src("src/ts/*.ts")
    .pipe(
      ts({
        noImplicitAny: true,
        outFile: "index.js",
      })
    )
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
