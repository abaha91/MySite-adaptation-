var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var notify = require("gulp-notify");
var gls = require('gulp-live-server');


gulp.task('server', function() {
  //1. serve with default settings 
  var host = 8000
  var server = gls.static('/', host) //equals to gls.static('public', 3000); 
  livereload:true
  server.start()
    
});

//css
gulp.task('default', function () {
  return gulp.src('app/css/*.css')
    .pipe(minifyCss())
    .pipe(minifyCss("bundle.min.css"))
    .pipe(gulp.dest('app/'))
    .pipe(notify("I'm ready!!!"));

});

gulp.task('html', function (){
	gulp.src('app/index.html')
});




gulp.task('watch', function(){
	gulp.watch('app/css/*css',['default'])
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