var express = require('express');
var router = express.Router();

var posts = require('../models/post.js');

router.post('/', (req, res, next) => {
    testPosts.push({
        title: req.body.title,
        text: req.body.text,
        user: req.body.user,
        votes: 10
    });
    res.send({ message: "success" });
});

router.get('/top', (req, res, next) => {
    var response = [];
    posts.find({}).limit(10).sort({ totalVotes: 1 }).exec(post => {
        res.send(post);
    });

    res.send(response);
})

router.get('/', (req, res, next) => {
    res.send(testPosts);
});

router.put('/:postId/vote', (req, res, next) => {
    posts.findById(req.params.postId).then((post) => {
        post.votes[req.session.uid] = req.body.vote;

        for (vote in post.votes) {
            post.totalVotes += vote;
        }

    });
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