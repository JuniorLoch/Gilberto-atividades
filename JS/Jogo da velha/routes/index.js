var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/velha', function(req, res, next) {
  res.render('velha');
});

router.get('/velha', function(req, res, next) {
  res.redirect('/');
});


module.exports = router;
