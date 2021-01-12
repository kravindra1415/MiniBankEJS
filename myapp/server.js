// var express=require("express");
// var bodyParser=require("body-parser");
// const http=require('http');
// const router=require('./router/approuter');
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/BMS-Database');
// var db=mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
// console.log("connection succeeded");
// })
// var app=express();
// const server = http.createServer(requestListener = (request, response) => {
//     response.writeHead(statusCode = 200, headers = {
//         'Content-Type': 'text/HTML'
//     });
//     router.mapRoutes(request,response);
// });
// const hostname = '127.0.0.1';
// const port = 5000;
// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
// extended: true
// }));
// app.get('/', function (request, response) {
//     response.sendFile('D:/MiniBank/views/account_create.html');
// });
// app.post('/post-info', function(request,response){
// var customer_name=request.body.customer_name;
// var dob=request.body.dob;
// var nationality=request.body.nationality;
// var gender=request.body.inlineRadioOptions;

// for (var ip in request.body.ipp) {
//       if (request.body.ipp) {
//         items = request.body.ipp;      
//       }
//     }
//     var address=request.body.address;
//     var mobile_number=request.body.mobile_number;
//     var state=request.body.state;
//     var pin_code=request.body.pin_code;
//     var photo=request.body.photo;



// //req.file.filename wi


// var data = {
// "name":customer_name,
// "dob":dob,
// "gender":gender,
// "ip":items,
// "nationality":nationality,
// "address":address,
//         "mobile_number":mobile_number,
//         "state":state,
//         "pin_code":pin_code,
//         "photo":photo,
// }



// db.collection('account_create').insertOne(data,function(err, collection){
// if (err) throw err;
// console.log("Record inserted Successfully");
// });
// response.send('<h1>record inserted</h1>');
// })
// server.listen(port, hostname, listeningListener = () => {
//     console.log(`Node JS server is started at http://${hostname}:${port}`);
// });



const http = require('http');
const router = require('./router/approuter');
var mongo=require('mongodb');
var mongoose = require('mongoose');
var bodyParser=require("body-parser");
var fs=require('fs');
var MongoClient = require('mongodb').MongoClient;
 
var express=require('express');
var objExpress = express.Router();

const hostname = '127.0.0.1';
const port = 5000;

var app=express();

const server = http.createServer(requestListener = (request, response) => {
    response.writeHead(statusCode = 200, headers = {
        'Content-Type': 'text/HTML'
    });
    //application routing
    //router.mapRoutes(request,response);

});

//Import the mongoose module
//var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/BMS_Database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open',function(callback){
    console.log("connection succeeded");
})
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/', function (request, response) {
    response.sendFile('D:/MiniBankEJS/myapp/views/account_create.ejs');
});

app.post('/post_info', function(req,res){
    var customer_name = req.body.customer_name;
    var dob=req.body.dob;
    var gender=req.body.inlineRadioOptions;
    
    for (var ip in req.body.ipp) {
          if (req.body.ipp) {
            items = req.body.ipp;      
          }
        }
        var address=req.body.address;
        var mobile_number=req.body.mobile_number;
        var state=req.body.state;
        var pin_code=req.body.pin_code;
        var photo=req.body.photo;
    
    
    
    
    //req.file.filename wi
    
    
    var data = {
    "name": customer_name,
    "dob":dob,
    "gender":gender,
    "ip":items,
    "address":address,
    "mobile_number":mobile_number,
    "state":state,
    "pin_code":pin_code,
    "photo":photo,
    }
    //res.render('account_create', {data:data}); 
    //module.exports=mongoose.model(server,datas);
    db.collection('account_create').insertOne(datas,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
          
    response.send('record insertded')}) ;
   

server.listen(port, hostname, listeningListener = () => {
    console.log(`Node JS server is started at http://${hostname}:${port}`);
});