var express = require('express');
var router = express.Router();
var helper = require('../routes/root');

/* GET home page. */
router.get('/', function(req, res, next) {

	var sqSec = helper.getRoot();
  res.render('index', { title: 'Test Site' , data : sqSec });
});

module.exports = router;
