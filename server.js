var express = require('express');
var session = require('express-session');
var body = require('body-parser');
var ejs = require('ejs');
var port = 8080;

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


/*
app.use(session());
app.use(body());
app.use(express.static('public'));
*/


var clients = new Array();


var route = require('./ressources/routes');

app.use('/', route);


io.on('connection', function(socket){
	console.log('client connecte');

	var pseudo = '';

	socket.on('login_required', function(data){
		pseudo = data;
		console.log('logged : ' + pseudo);
		socket.emit('logged');
	});

	socket.on('disconnect', function(){
		console.log('client : ' + pseudo + ' disconnected');
	});
	
	socket.on('print', function(msg){
		console.log('mss : ' + msg);
	});

});




server.listen(port, function(){
  console.log('listening port ' + port + '...');
});