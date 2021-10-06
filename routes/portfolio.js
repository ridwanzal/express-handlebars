var express = require('express'); // import express
var router = express.Router(); //initiation express router
 
/**
* Route contact
*/
router.get('/', function(req, res, next) {
   res.render('pages/portfolio', {
     title: 'Portfolio - Fairtech Summit 2021',
     layout: 'layouts/layout_alt'
    });
});
 
module.exports = router;