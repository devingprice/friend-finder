var express = require('express')
var router = express.Router()
var friends = require('../data/friends')

router.use(function timeLog(req, res, next) {
    //console.log('Time: ', Date.now())
    next();
})

router.get('/', function (req, res) {
    res.send('API route')
})
router.get('/friends', function (req, res) {
    res.json({'friends':friends.list})
})
router.post('/friends', function (req, res) { // post survey results and return closest friend
    var newFriend = req.body;
    var results = friends.newFriend(newFriend);
    var closest = friends.closest(results);
    // res.json( {results: results})
    res.json({ likelyFriend: closest })
})

module.exports = router;