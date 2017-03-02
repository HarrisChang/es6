var gulp = require('gulp');
    gulp.task('build', function(){
    });
    gulp.task('watch', function(){
        gulp.watch('./src/js/*.js', ['build']);
    });
    gulp.task('default',['build', 'watch']);