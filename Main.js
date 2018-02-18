var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app).listen(8080);
var io = require('socket.io')(server);

io.sockets.on('connection', function(socket){
    
    console.log("connected...");

    const exec = require('child_process').exec;
    socket.on('Voice Detected', function (str) {

        var str2 = "";
        for(var i = 0; i < str.length; i++){
            str2 += str[i];
        }

        var strArray = str2.split(" ");
        //var strArray
        console.log(strArray[0]);

        if(strArray[0] == "open"){
            console.log(str);
            console.log('Opening Youtube...');
            var execute = exec('open '+ strArray[1], (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });

        }
        else if(strArray[0] == "pause"){
            var execute = exec('', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "resume"){
            var execute = exec('', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "fullscreen"){
            var execute = exec('', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "skip"){
            var execute = exec('', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "prev"){
            var execute = exec('', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "search"){
            if(strArray[1] == "image"){
                var execute = exec('', (error, stdout, stderr) => {
                    console.log('${stdout}');
                    console.log('${stderr}');
                    if (error !== null) {
                        console.log('exec error: ${error}');
                    }
                });
            }
            else {
                var execute = exec('', (error, stdout, stderr) => {
                    console.log('${stdout}');
                    console.log('${stderr}');
                    if (error !== null) {
                        console.log('exec error: ${error}');
                    }
                });
            }
        }
        else{
            var execute = exec('say sorry', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
            socket.emit('No Command', "Sorry Didn't Catch That");
        }

    });

});