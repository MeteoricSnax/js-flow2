var express = require('express');
var router = express.Router();

var model = {
  title: "Site with a simple joke api",
  howToUse: "Get a random joke with: /api/random"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', model);
});

module.exports = router;
