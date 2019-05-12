//server.js
var express = require('express');  
var app = express();  
app.use(express.static('public'));  

app.get('/', function (req, res) {  
   console.log("Got a GET request for the homepage");  
   res.send('<h1>Welcome </h1>');  
});

app.get('/insert.html', function (req, res) {    
   res.sendFile( __dirname +"/"+"insert.html" );    
});

app.listen(5009);

//insert.html
<!doctype html>
<head>
<script type="text/javascript">
var k=parseInt(prompt("enter a number",1));
var sq=k*k;
var sq_string=sq.toString();
if(sq_string.endsWith(k.toString()))
{
	alert("automorphic");
}
else
{
	alert("not automorphic");
}
</script>
</head>
</html>
