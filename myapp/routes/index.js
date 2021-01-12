var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard' );
});

 router.get('/account_create',function(req,res,next){
   res.render('account_create');
 });

 router.get('/deposit',function(req,res,next){
   res.render('deposit');
 })
module.exports = router;
