/**
 * Created by sht-home on 22.05.2017.
 */

var gulp            = require('gulp');
var autoprefixer    = require('gulp-autoprefixer');
var cssmin          = require('gulp-cssmin');
var browserSync     = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        //proxy: "mnschool"
        proxy: "localhost:63342/maket9"
        ,notify: false
    });
});






gulp.task('autoprefixer', function () {
    return gulp.src('style/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: true
        }))
        // .pipe(cssmin())
        .pipe(gulp.dest('style/'));

});


