var express = require('express'); // import express
var router = express.Router(); //initiation express router
 
/**
* Route contact
*/
router.get('/', function(req, res, next) {
   res.render('pages/book', {
     title: 'Book - Fairtech Summit 2021',
    });
});
 
router.post('/', function(req, res, next) {
    res.render('pages/booksuccess', {
      title: 'Book - Fairtech Summit 2021',
      email: req.param('email')
     });
 });
  
module.exports = router;