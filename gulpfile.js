var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');


//css

gulp.task('concat-min-css', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("main-min.css"))
    .pipe(gulp.dest('minCss'));
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css-min'));
});

// gulp.task('minify-css', function() {
//   return gulp.src('minCss/main-min.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest('css-min'));
// });



// html
gulp.task('html', function (){
	gulp.src('index.html')
});

gulp.task('watch', function(){
	gulp.watch('css/*css',['concat-min-css'])
});














































// var gulp = require('gulp'),
//     watch = require('gulp-watch');
//     // wiredep = require('wiredep').stream;
//     // useref = require('gulp-useref');





// gulp.task('default', function() {
//   // place code for your default task here
// });

// gulp.task('stream', function () {
//     return gulp.src('css/**/*.css')
//         .pipe(watch('css/**/*.css'))
//         .pipe(gulp.dest('build'));
// });
 
// gulp.task('callback', function (cb) {
//     watch('css/**/*.css', function () {
//         gulp.src('css/**/*.css')
//             .pipe(watch('css/**/*.css'))
//             .on('end', cb);
//     });
// });









// //Слежка
// gulp.task('watch',function (){
// 	gulp.watch([
// 		'app/*.html',
// 		'app/js/**/*.js',
// 		'app/css/**/.css'
// 		]).on('change',browserSync.reload);
// 	gulp.watch('bower.json',['wiredep']);
// });


// gulp.task('default',['server','watch']);


// //Следим за bower
// gulp.task('wiredep',function(){
// 	gulp.src('app/*.html');
// 	.pipe(wiredep())
// 	.pipe(gulp.dest('app/'))
// });

// gulp.task('default', function () {
//     return gulp.src('app/*.html')
//         .pipe(useref())
//         .pipe(gulp.dest('dist'));
// });