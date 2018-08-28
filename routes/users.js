var express = require('express');
var router = express.Router();

var userCtr = require('../controllers/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    userCtr.getUserList(req, res, next);
});

module.exports = router;
