/**
 * Created by sht-home on 22.05.2017.
 */

var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');







gulp.task('autoprefixer', function () {
    return gulp.src('style/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: true
        }))
        // .pipe(cssmin())
        .pipe(gulp.dest('style/'));

});


