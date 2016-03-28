/**
 * Created by zc1415926 on 2016/3/28.
 */
// get the dependencies
var gulp = require('gulp');
var childProcess = require('child_process');
var electron = require('electron-prebuilt');
var mysql = require('mysql');
var jetpack = require('fs-jetpack');

gulp.task('run', function () {
    childProcess.spawn(electron, ['.', '--remote-debugging-port=8888'], { stdio: 'inherit' });
});

gulp.task('database', function(){

    var obj = jetpack.read('env.json', 'json');

    var connection = mysql.createConnection({
        host: obj.database.host,
        user: obj.database.username,
        password: obj.database.password,
        database: obj.database.database
    });

    connection.connect();

    connection.query('select * from users', function(error, rows){
        if(error){
            console.log(error);
        }else{
            console.log(rows);
        }
    });

    connection.end();
});