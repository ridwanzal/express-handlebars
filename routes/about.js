var express = require('express'); // import express
var router = express.Router(); //initiation express router
 
/**
* Route contact
*/
router.get('/', function(req, res, next) {
   res.render('pages/about', {
     title: 'About - Fairtech Summit 2021',
    });
});
 
module.exports = router;