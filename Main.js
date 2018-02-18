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
            var strTmp = ""
            for(var i = 2; i < strArray.length; i++){
                
                strTmp += strArray[i];
                console.log(strTmp);
            }
            console.log(strArray[1]);
            if(strArray[1] == "YouTube"){
                console.log(strTmp);
                var execute = exec('py Youtube.py open Youtube '+strTmp, (error, stdout, stderr) => {
                    console.log('${stdout}');
                    console.log('${stderr}');
                    if (error !== null) {
                        console.log('exec error: ${error}');
                    }
                });
            }
            else if(strArray[1] == "Google"){
                var execute = exec('py Google.py open Google '+strTmp, (error, stdout, stderr) => {
                    console.log('${stdout}');
                    console.log('${stderr}');
                    if (error !== null) {
                        console.log('exec error: ${error}');
                    }
                });
            }
        }
        else if(strArray[0] == "pause"){
            var execute = exec('py pause.py video pause', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "resume"){
            var execute = exec('py pause.py video continue', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "fullscreen"){
            var execute = exec('py Screen.py screen full', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "normal"){
            var execute = exec('py Screen.py screen normal', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "next"){
            var execute = exec('py pause.py video next', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "back"){
            var execute = exec('py pause.py video previous', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        /*else if(strArray[0] == "search"){
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
        }*/
        else if(strArray[0] == "left"){
            var execute = exec('py Left.py', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "right"){
            var execute = exec('py Right.py', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "up"){
            var execute = exec('py Up.py', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "down"){
            var execute = exec('py Down.py', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
        }
        else if(strArray[0] == "space"){
            var execute = exec('py Space.py', (error, stdout, stderr) => {
                console.log('${stdout}');
                console.log('${stderr}');
                if (error !== null) {
                    console.log('exec error: ${error}');
                }
            });
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