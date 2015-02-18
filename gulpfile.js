var gulp = require('gulp');
var babel = require('gulp-babel');
var deploy = require('gulp-gh-pages');

gulp.task('build', function () {
    return gulp.src('src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['build', 'copy:index', 'copy:code']);

gulp.task('copy:code', function () {
    return gulp.src('dist/*')
        .pipe(gulp.dest('gh-pages/dist'));
});

gulp.task('copy:index', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('gh-pages/'));
});

gulp.task('deploy:gh-pages', function () {
    return gulp.src('gh-pages/**/*')
        .pipe(deploy())
});

gulp.task('default', ['build']);