var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let fAttribute = {
    title: 'Fairtech Summit 2021',
    description : 'General Summit - Fairtech',
    author : 'FT Author'
  }
  res.render('index', { title: 'Fairtech Summit 2021' });
});

module.exports = router;
