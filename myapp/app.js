const express = require('express');
const path = require('path');
const app = express();
var bodyParser=require("body-parser");
var multer = require("multer");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/BMS_Database');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
console.log("connection succeeded");
})
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
extended: true
}));

 

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});



app.get('/', function(req, res){
res.render('dashboard');
}) ;

app.get('/account_create',function(req,res){
res.render('account_create');
});


app.get('/withdrawl',function(req,res){
    res.render('withdrawl');
    });


app.get('/deposit',function(req,res){
        res.render('deposit');
        });
        

app.get('/fixed',function(req,res){
    res.render('fixed')
});
   
app.get('/transfer_money',function(req,res){
    res.render('transfer_money')
});

app.get('/admin',function(req,res){
    res.render('admin')
})

app.get('/customer',function(req,res){
    res.render('customer')
})

app.post('/post_account', function(req,res){
var customer_name = req.body.customer_name;
var dob=req.body.dob;
var gender=req.body.inlineRadioOptions;

for (var ip in req.body.ipp) {
      if (req.body.ipp) {
        var items = req.body.ipp;      
      }
    }

var photo = req.body.photo,
             newCover = "/uploads/" + req.file;

let upload = multer({storage : storage}).single("photo");
var address=req.body.address;
var mobile_number=req.body.mobile_number;
var state=req.body.state;
var pin_code=req.body.pin_code;
var data = {
"customer_name": customer_name,
"dob":dob,
"gender":gender,
"address":address,
"mobile_number":mobile_number,
"state":state,
"pin_code":pin_code,
"ip":items,
"photo":photo
}



db.collection('account_create').insertOne(data,function(err, collection){
if (err) throw err;
console.log("Record inserted Successfully");
});
res.send('<h1>Record inserted</h1>');
})
 
app.listen(3001, function(error){
if(error) throw error
console.log("Server created Successfully");
});

module.exports=app;