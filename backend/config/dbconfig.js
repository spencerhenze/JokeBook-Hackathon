var mongoose = require("mongoose");
var connection = mongoose.connection;

var status = `Connecting to database - `;


mongoose.connect("mongodb://booyah:booyah@ds149433.mlab.com:49433/hackathon1", {

    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', (err) => {
    status += `[FAIL]`;
    console.log(status);
});


connection.once('open', (err) => {
    status += `[ OK ]`;
    console.log(status);
})