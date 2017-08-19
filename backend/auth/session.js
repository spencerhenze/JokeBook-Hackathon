var session = require('express-session');
var dbStore = require('connect-mongodb-session')(session);

var store = new dbStore({
    uri: "mongodb://booyah:booyah@ds149433.mlab.com:49433/hackathon1",
    collection: 'Sessions'
});

store.on('error', function(error) {
    console.error("Failed to build session: ", error);
});


module.exports = session({
    secret: "983V!$eM9oQuBatCH3c!#@b9Bklj$lyqRAdH!$JW&iAas86J#W",
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
    store: store,
    resave: true,
    saveUninitialized: true
});