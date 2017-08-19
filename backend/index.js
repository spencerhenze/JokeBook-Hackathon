var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var cors = require('cors');
var sessions = require('./auth/session');
var serverConf = require('./config/serverconfig');
var database = require('./config/dbconfig');
var server = express();

server.use(cors());

server.use(sessions);
server.use(express.static(__dirname + "/www"));
server.use(bodyParser.json()); //JSON middleware
server.use(bodyParser.urlencoded({ extended: true }));


var commentRouter = require("./routes/comment-routes");
server.use('/api/comment', commentRouter);

var postRouter = require("./routes/post-routes");
server.use('/api/post', postRouter);


var authRouter = require("./auth/auth-routes.js");
server.use("/", authRouter);

if (serverConf.portStart < serverConf.portEnd) {
    for (var sport = serverConf.portStart; sport < serverConf.portEnd; sport++) {

        server.listen(sport, serverConf.ip, function() {
            //Success
            console.log(`Socket - [ OK ]`);
        }).on('error', function(err) {
            //fail
            console.log(err);
            console.log(`Socket - [FAIL]`);
        });
    }
    console.log(`SERVER LISTENING - BOUND ON ${serverConf.ip} ports ${serverConf.portStart} - ${serverConf.portEnd} `);
    console.log(`Multiport mode enabled on range`)


} else if (serverConf.portStart === serverConf.portEnd) {
    server.listen(serverConf.portStart, serverConf.ip, function() {
        //success
        console.log(`SERVER LISTENING - BOUND ON ${serverConf.ip} port ${serverConf.portStart}`);
    }).on("error", function(err) {
        //failure
        console.log(`Failed to create socket. This port might be used.${err}`);
    });
}
//fail
else {
    console.log("FATAL: Port end cannot be lower than the start");
}