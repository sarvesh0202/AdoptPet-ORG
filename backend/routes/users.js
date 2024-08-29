var express = require('express');
var router = express.Router();
var AdminModel = require("../db/adminsDB")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) {


});

module.exports = router;
