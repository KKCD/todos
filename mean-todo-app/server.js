/*create a server.js file that defines a web app using the Express.js framework*/
var express = require('express');
var app=express();
//var routes = require('server/routes');
//routes(app);
var PORT = process.env.PORT || 3000;

app.get('/*',function(req, res){
	res.sendFile(__dirname + '/client/views/server.html');
	/*res.send('\
		<!DOCTYPE html>\
		<html>\
			<head>\
				<title>Mean TODO APP</title>\
				<base href="/">\
			</head>\
			<body>\
				<div ui-view></div>\
				<script src="bundle.js"></script>\
			</body>\
		</html>\	
		');*/
});

app.listen(PORT,function(){
	console.log('Server running on '+ PORT);
});
