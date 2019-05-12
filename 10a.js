var express = require('express');
var app=express();
var timestamp=function(req,res,next)
{
	
	req.rt=new Date();
	req.cururl=req.protocol+'://'+req.get('host')+req.originalUrl;
	next();
}
app.use(timestamp);

app.get('/', function (req, res) { 
	var restext='requested time: '+req.rt+" url "+req.cururl; 
   	console.log(restext);  
   	res.send(restext);  
});

app.listen(5009);

// https://www.epochconverter.com/ converter for milliseconds timestamp into the human stamp (in terms of date, month, year, hours, minutes, seconds,...)
//you can keep changing the url and keep adding new urls to see different “originalUrl”
