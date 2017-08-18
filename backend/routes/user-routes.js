
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');



// get users by id route
// router.get('/:userId', function (req, res, next){
//     var userId = req.params.userId;
//     User.findById(userId)
//         .then((user) => {
//             if(user){
//                 res.send(user)
//             }
//         })
// })




// post users route with the body that handles email, password, (store in a var)

router.post('/', function (req, res, next) {
    User.create(req.body)
        .then((user) => {
            res.send({message: `User ${user.id} created successfully`})
        })
        .catch(next)
})



// put to update user password
router.put('/:userId', function (req, res, next){
    var userId = req.params.userId;
    var updatedUserObject = req.body;

    //find the user and update the record
    User.findByIdAndUpdate(userId, updatedUserObject)
        .then(user => {
            res.send(req.body);
        })
        .catch(next);
})



// default error handler (defining next)
router.use(defaultErrorHandler);

function defaultErrorHandler(err, req, res, next) {

    if (req.xhr) {
        res.json({ success: false, error: err });
    }
    else {
        res.json({ success: false, error: err.message });
    }
}

// Just gonna send iiiiiittt!
module.exports = router;