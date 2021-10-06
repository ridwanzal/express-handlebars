var express = require('express'); // import express
var router = express.Router(); //initiation express router
 
/**
* Route contact
*/
router.get('/', function(req, res, next) {
   res.render('pages/contact', {
     title: 'Contact - Fairtech Summit 2021',
    });
});
 
module.exports = router;