var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TARCE 2021', title2: 'Emma'});
});

module.exports = router;
