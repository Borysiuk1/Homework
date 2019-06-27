'use strict'

const gulp = require('gulp');
const minifyCSS = require('gulp-sass');
//const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('minifyCSS', () => {
    gulp.src('*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('minified-css'));

});
gulp.task('imagemin', () => 
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('imgcompressed'))
);

sass.compiler = require('node-sass');
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});