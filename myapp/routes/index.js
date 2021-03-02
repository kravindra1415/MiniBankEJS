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

 router.get('/withdrawl',function(req,res,next){
   res.render('withdrawl');
 })

 router.get('/fixed',function(req,res,next){
  res.render('fixed');
})

router.get('/transfer_money',function(req,res,next){
  res.render('transfer_money');
})

router.get('/admin',function(req,res,next){
  res.render('admin');
})

router.get('/customer',function(req,res,next){
  res.render('customer');
})

module.exports = router;
