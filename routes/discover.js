var express = require('express'); // import express
var router = express.Router(); //initiation express router
 
/**
* Route contact
*/
router.get('/', function(req, res, next) {
    res.redirect('contact');
});
 
module.exports = router;