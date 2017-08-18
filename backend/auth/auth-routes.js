var router = require('express').Router();
var Users = require('../models/user.js');



router.post("/register", (req, res) => {
    req.body.email = req.body.email.toLowerCase();
    Users.create(req.body).then((user) => {
        req.session.uid = user._id;
        req.session.save();
        user.password = null;
        delete user.password;
        res.send({
            message: "created account OK",
            data: user
        });
    }).catch((err) => {
        res.send({ error: err });
    });


});


router.post("/login", (req, res) => {
    //first check if username is a email or username
    if (res.body.login.includes("@", 1) && res.body.login.includes("."), res.body.login.find("@") + 1) {
        Users.findOne({ email: req.body.email.toLowerCase() }).then((valid) => {
            if (!valid) {
                return res.send({ error: 'Invalid login or Password ' });
            }
            req.session.uid = user._id;
            req.session.save(); //save session
            user.password = null;

            delete user.password;

            res.send({
                message: 'success',
                data: user
            });
        }).catch(err => {
            res.send({ error: err || 'Invalid login or password' }); //if false alarm return the regular thing.
        });
    } else {
        Users.findOne({ userName: req.body.userName }).then((valid) => {
            if (!valid) {
                return res.send({ error: 'Invalid login or Password ' });
            }
            req.session.uid = user._id;
            req.session.save(); //save session
            user.password = null;

            delete user.password;

            res.send({
                message: 'success',
                data: user
            });
        }).catch(err => {
            res.send({ error: err || 'Invalid login or password' }); //if false alarm return the regular thing.
        });
    }
});


router.delete('/logout', (req, res) => {
    req.session.destroy();
    res.send({
        message: "goodbye"
    });
});