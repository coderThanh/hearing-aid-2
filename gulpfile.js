import browserSync from 'browser-sync'
import fileInclude from 'gulp-file-include'
import gulp from 'gulp'

const server = browserSync.create()

gulp.task('build', () => {
  return gulp
    .src('src/pages/**/*.html')
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: 'src/',
      }),
    )
    .pipe(gulp.dest('.')) // build ra root
})

gulp.task('serve', () => {
  server.init({
    server: { baseDir: './' },
    index: 'index.html',
    notify: false,
    open: false,
    reloadOnRestart: true,
  })

  // Watch với callback để đảm bảo reload hoạt động đúng
  //  If project have a lot file, to improve performance, we can watch only folder coding
  gulp.watch('src/**/*.html', gulp.series('build')).on('change', () => {
    server.reload()
  })

  // custome code
  gulp.watch('8pm-assest/css/**/*.css').on('change', () => {
    server.reload()
  })
  gulp.watch('8pm-assest/js/**/*.js').on('change', () => {
    server.reload()
  })

  // root theme
  // We dont code at root theme so dont need to watch
  // gulp.watch("css/**/*.css").on('change', () => {
  //   server.reload();
  // });

  // gulp.watch("js/**/*.js").on('change', () => {
  //   server.reload();
  // });
})

gulp.task('default', gulp.series('build', 'serve'))
