const del = require('del');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

gulp.task('clear_public_img_folder', () => {
  return del('public/img/');
});

gulp.task('jpg_optimize', () => {
  return gulp
    .src('.grafic_sources/img/**/*.{png,jpg}')
    .pipe(imagemin([imagemin.optipng({ optimizationLevel: 3 }), imagemin.mozjpeg({ progressive: true, quality: 60 })]))
    .pipe(gulp.dest('public/img/'));
});

gulp.task('webp_create', () => {
  return gulp
    .src(`.grafic_sources/img/**/*.{png,jpg}`)
    .pipe(webp({ quality: 60 }))
    .pipe(gulp.dest(`public/img/`));
});

gulp.task('img_create', gulp.series('clear_public_img_folder', 'jpg_optimize', 'webp_create'));
