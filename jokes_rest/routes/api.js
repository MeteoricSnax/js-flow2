var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes")

/* GET users listing. */
router.get('/random', function(req, res, next) {
  if(true){
    var err = new Error("UPPS");
    err.isJson = true;
    return next(err); 
  }
  res.json(jokes.getRandomJoke());
});

module.exports = router;
