var gulp = require('gulp'),
    bs = require('browser-sync').create(),
    livereload = require('gulp-livereload'),
      refresh = require('gulp-refresh')

/*
  Watches for changes on html and csss
*/
gulp.task('watch',function(){
  gulp.watch('./app/**/*.{html,css}', ['reload']);
});

/*
  Starts browser-sync watching the angular app folder for changes on html and css
*/
gulp.task('browser-sync',function() {
  bs.init({
    server: {"basedDir": "/app"},
    files: ["/app/*.html"],
    startPath: "/app"
  });
});


gulp.task('reload', function(){
  bs.reload({stream: true});
})

gulp.task('default', ['browser-sync','watch']);
