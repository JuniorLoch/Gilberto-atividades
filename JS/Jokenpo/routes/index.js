var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jokenpo');
});


router.get('/jokenpo', function(req, res, next) {
  res.redirect('/');
});


module.exports = router;
