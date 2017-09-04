var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

//載入'gulp-load-plugins'就不用再載入以下套件
// var jade = require('gulp-jade');
// var sass = require('gulp-sass');
// var plumber = require('gulp-plumber');
// var postcss = require('gulp-postcss');
// var sourcemaps = require('gulp-sourcemaps');
// var babel = require('gulp-babel');
// var concat = require('gulp-concat');
var autoprefixer = require('autoprefixer');
var mainBowerFiles = require('main-bower-files');
var browserSync = require('browser-sync').create();

// gulp.task('copyHTML', function () {
//   return gulp.src('./src/**/*.html')
//     .pipe(gulp.dest('./public/'))
// })

gulp.task('jade', function () {
  // var YOUR_LOCALS = {};

  gulp.src('./src/**/*.jade')
    .pipe($.plumber())
    .pipe($.jade({
      // locals: YOUR_LOCALS
      pretty: true
    }))
    .pipe(gulp.dest('./public/'))
    .pipe(browserSync.stream())
});

gulp.task('sass', function () {
  var plugins = [
    autoprefixer({ browsers: ['last 2 version'] }),
  ];
  return gulp.src('./src/scss/**/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.postcss(plugins))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});

gulp.task('babel', () =>{
gulp.src('./src/js/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel({
        presets: ['env']
    }))
    .pipe($.concat('all.js'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream());
  });

// gulp.task('bower', function() {
//   return gulp.src(mainBowerFiles({
//     "overrides": {
//       "vue": {                       // 套件名稱
//           "main": "dist/vue.js"      // 取用的資料夾路徑
//       }
//     }
//   }))
//       .pipe(gulp.dest('./.tmp/vendors'))
//       cb(err)
// });

// gulp.task('vendorJS', ['bower'], function() {
//   return gulp.src('./.tmp/vendors/**/**.js')
//     .pipe($.order([
//       'jquery.js',
//       'bootstrap.js'
//     ]))
//     .pipe($.concat('vendors.js'))
//     .pipe(gulp.dest('./public/js'))
// });

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: './public'
      }
  });
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.jade', ['jade']);
  gulp.watch('./src/js/**/*.js', ['babel']);
});

gulp.task('default', ['browser-sync', 'jade', 'sass', 'babel', /*'vendorJS',*/ 'watch']);