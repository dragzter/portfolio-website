var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

// gulp.task('js', function() {
//   return gulp.src('assets/js/script.js')
//     .pipe(jshint('./.jshintrc'))
//     .pipe(jshint.reporter('jshint-stylish'));
// });

gulp.task('sass', function () {
    return sass('assets/sass/style.scss', {
      sourcemap: true,
      style: 'compressed'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('assets/js/**/*', ['js']);
  gulp.watch(['assets/sass/**/*'], ['sass']);
});

gulp.task('webserver', function() {
    gulp.src('')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['sass', 'watch', 'webserver']);
