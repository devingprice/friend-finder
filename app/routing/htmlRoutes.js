var express = require('express');
var path = require('path');
var router = express.Router()

router.use(function timeLog(req, res, next) {
    next();
})

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
})
router.use( express.static(path.join(__dirname, '../public')) )

module.exports = router;