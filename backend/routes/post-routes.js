var express = require('express');
var router = express.Router();

var posts = require('../models/post.js');

router.post('/', (req, res, next) => {
    if (req.session.uid) {
        posts.create(req.body).then(() => {
            console.log('worked');
            res.send({ message: "successfully posted" })
        }).catch(next);
    }
});

router.get('/top', (req, res, next) => {
    posts.find({}).limit(10).sort({ totalVotes: 1 }).exec(post => {
        res.send(post);
    });

})

router.get('/', (req, res, next) => {
    posts.find({}).then((result) => {
        res.send(result);
    });
});

router.put('/:postId/vote', (req, res, next) => {
    if (req.session.uid) {
        posts.findById(req.params.postId).then((post) => {
            post.votes[req.session.uid] = req.body.vote;

            for (vote in post.votes) {
                post.totalVotes += vote;
            }

        });
    } else {
        res.send({ message: "Ya done messed up a-a-ron" });
    }

})


router.use(handleError);

function handleError(err, req, res, next) {
    /**
     * the following is just data logging for these bad errors.
     * in case of an actual server attack, these might be helpful
     * especially when patching a firewall.
     */
    console.log(`User @${req.connection.remoteAddress} sent faulty request`);
    if (req.connection.encrypted) {
        console.log(`User on encrypted protocol attempting to use ${req.method}`);
    } else {
        console.log(`User on open protocol attempting to use ${req.method}`);
    }
    res.json({ success: false, error: err.message });
}

module.exports = router;