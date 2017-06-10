var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function(req,res) {
	console.log('get /');
	res.sendFile(path.resolve(__dirname+'/index.html'));
});

app.post('/query', function(req, res) {
	console.log('get query');	
	url = "http://"+req.body.url+"?key1="+req.body.key1+"&key2="+req.body.key2+"&key3="+req.body.key3;
	console.log("redirect to "+url);
	res.redirect(url);
});

port = process.env.PORT || 8080
app.listen(port, function() {
	console.log("App listening on port: "+port);
});
