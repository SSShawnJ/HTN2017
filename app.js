var express = require('express');
var bodyParser =require('body-parser');
// var request = require('request');
// var cheerio = require('cheerio');


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/script', function(req,res,next){
	next();
});

    

app.get('/',function(req,res){
	res.render('index');

});

app.post('/geturl', function(req, res){
	console.log(req.body.landmark);


	reswriteHead(200, {"Content-Type": "application/json"});
	res.end(JSON.stringify({hhh:'hhhhhh'}));

});

// var http=require('http');
// var fs= require('fs');

// var server= http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type' : 'text/html'});

// 	var myReadStream=fs.createReadStream(__dirname+'/TourGuide.html','utf8');
// 	myReadStream.pipe(res); 

// });


app.listen(3000);
console.log("Application started. now listening 127.0.0.1 port 3000");

