const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile scss into css files
gulp.task('sass', () => {
    return gulp.src(['sass/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

// Watch for the changes
gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: './'
    });
    gulp.watch(['sass/*.scss'], ['sass']);
    gulp.watch(['*.html','js/*.js']).on('change', browserSync.reload);
});

// Execute
gulp.task('default', ['serve']);