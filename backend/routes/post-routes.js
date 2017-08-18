var express = require('express');
var router = express.Router();

var testPosts = [];
router.post('/', (req, res, next) => {
    testPosts.push({
        title: req.body.title,
        text: req.body.text,
        user: req.body.user
    });
});


router.get('/', (req, res, next) => {
    res.send(testPosts);
});


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