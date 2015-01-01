/// <vs />
var gulp = require("gulp");
var browserify = require("gulp-browserify");
var concat = require('gulp-concat');

gulp.task('browserify' , function () {
    return gulp.src(['app/js/app.js'])
        .pipe(browserify({ transform: 'reactify' }))
        .pipe(concat('bundle.js'))
    .pipe(gulp.dest('app/js'));
});

gulp.task('copy' ,['browserify'], function () {
    return gulp.src('app/**/*.*')
        .pipe(gulp.dest('../ToDo.Server/app/'));

});

 gulp.task('default', ['browserify', 'copy', 'watch']);

gulp.task('watch', function () {
    gulp.watch('app/js/**/*.jsx', { maxListeners: 999 } , ['default']);
    gulp.watch(['app/js/**/*.js', 'app/**/*.css', 'app/img/*.*' , '!app/js/bundle.js'], { maxListeners: 999 }, ['default']);
});
