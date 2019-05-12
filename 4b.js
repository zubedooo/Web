var express = require('express')
var app = express()

app.use(express.static('public'));

app.get('/index.html', function(req, res){
	res.sendFile(__dirname + '/index.html');
})

app.get('/home.html', function(req, res){
	res.sendFile(__dirname + '/'+'home.html');
})
app.get('/contact.html', function(req, res){
	res.sendFile(__dirname + '/'+'contact.html');
})

app.get('/about.html', function(req, res){
	res.sendFile(__dirname + '/'+'about.html');
})

 app.listen(5000);
