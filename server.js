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

var carac_personnage = function(id, pseudo, x, y){
	this.id = id;
	this.pseudo = pseudo;
	this.x = x;
	this.y = y;
}

var id = 0;

var route = require('./ressources/routes');

app.use('/', route);


io.on('connection', function(socket){
	console.log('client connecte');

	var pseudo = '';

	socket.on('login_required', function(data){
		pseudo = data;
		socket.emit('logged');
		clients.push(new carac_personnage(id, pseudo, 0, 0));
		console.log('logged : ' + pseudo + ' id : ' + id);
		id++;
	});

	socket.on('init_required', function(){
		for (var i = 0;i<clients.length;i++){
			if(clients[i].pseudo != pseudo){
				socket.emit('new_personnage',{id : clients[i].id, pseudo: clients[i].pseudo, x: clients[i].x, y: clients[i].y});
				console.log('client send : ' + clients[i].pseudo);
			}else{
				socket.broadcast.emit('new_personnage',{id : clients[i].id, pseudo: clients[i].pseudo, x: clients[i].x, y: clients[i].y});
				console.log('client send to older: ' + clients[i].pseudo);
			}
		};
	})

	socket.on('disconnect', function(){
		var bye;
		for (var i = 0;i<clients.length;i++){
			if (clients[i].pseudo == pseudo){
				socket.broadcast.emit('delete_joueur',{id : clients[i].id, pseudo: clients[i].pseudo, x: clients[i].x, y: clients[i].y});
				clients.splice(i,1);
			};
		};
		console.log('client : ' + pseudo + ' disconnected');
	});

	
	socket.on('print', function(msg){
		console.log('mss : ' + msg);
	});

});



server.listen(port, function(){
  console.log('listening port ' + port + '...');
});