var express = require('express');
var bodyParser =require('body-parser');


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

// app.get('/geturl', function(req, res){
// 	var val=req.query.url;
// 	console.log(val);

// 	res.send(val);

// });


app.listen(3000);
console.log("Application started. now listening 127.0.0.1 port 3000");

