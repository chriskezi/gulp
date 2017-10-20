var gulp = require ("gulp");
var sass = require ("gulp-sass");
var bower = require ("gulp-bower");
var notify = require ("gulp-notify");


gulp.task ('sass', function() {
  return gulp.src ('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));

});


gulp.task ('watch', function(){
  gulp.watch('./sass/*.scss', ['sass']);
});
gulp.task('default', ['sass', 'watch']);


// Bootsrap

var bsConfig = require("gulp-bootstrap-configurator");

// For CSS
gulp.task('make-bootstrap-css', function(){
  return gulp.src("./config.json")
    .pipe(bsConfig.css())
    .pipe(gulp.dest("./assets"));
    // It will create `bootstrap.css` in directory `assets`.
});

// For JS
gulp.task('make-bootstrap-js', function(){
  return gulp.src("./config.json")
    .pipe(bsConfig.js())
    .pipe(gulp.dest("./assets"));
    // It will create `bootstrap.js` in directory `assets`.
});
