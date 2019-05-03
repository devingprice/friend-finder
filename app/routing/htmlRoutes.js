var express = require('express')
var router = express.Router()

router.use(function timeLog(req, res, next) {
    next();
})

router.get('/', function (req, res) {
    res.send('static pages')
})

module.exports = router;