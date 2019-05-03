var express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next) {
    //console.log('Time: ', Date.now())
    next();
})

router.get('/', function (req, res) {
    res.send('API route')
})
router.get('/friends', function (req, res) {
    res.send('API get route')
})
router.post('/friends', function (req, res) {
    res.send('API post route')
})

module.exports = router;