import browserSync from "browser-sync";
import fileInclude from "gulp-file-include";
import gulp from "gulp";

const server = browserSync.create();

gulp.task("build", () => {
  return gulp.src("src/pages/**/*.html")
    .pipe(fileInclude({
      prefix: "@@",
      basepath: "src/components"
    }))
    .pipe(gulp.dest(".")); // build ra root
});

gulp.task("serve", () => {
  server.init({
    server: { baseDir: "./" },
    index: "index.html",
    notify: false,
    open: false,
    reloadOnRestart: true
  });

  // Watch với callback để đảm bảo reload hoạt động đúng
  gulp.watch("src/**/*.html", gulp.series("build")).on('change', () => {
    server.reload();
  });
  
  gulp.watch("8pm-assest/**/*").on('change', () => {
    server.reload();
  });
  
  // Thêm watch cho CSS và JS files
  gulp.watch("css/**/*.css").on('change', () => {
    server.reload();
  });
  
  gulp.watch("js/**/*.js").on('change', () => {
    server.reload();
  });
});

gulp.task("default", gulp.series("build", "serve"));
