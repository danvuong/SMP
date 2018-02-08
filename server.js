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
		var tamere = 1;
		for(i in clients){
			if(clients[i].pseudo == pseudo){
				socket.emit('mauvaisnombatard');
				tamere = 0;
			};
		};
		if(tamere == 1){socket.emit('logged');};
	});

	socket.on('deplacement', function(joueur){
		if(joueur){
			console.log(joueur.pseudo + 's est deplace');
			io.emit('action', joueur);
		}
	})

	socket.on('new_player', function(new_joueur){  /////////////
		clients[new_joueur.pseudo] = new_joueur;
		for(var i in clients){
			console.log(clients[i].pseudo + ' send')
			socket.emit('add_joueur', clients[i]);
		};
		socket.emit('go');
		socket.broadcast.emit('add_joueur', new_joueur);
	})

	socket.on('disconnect', function(){
		var k = clients.indexOf(pseudo);
		clients.splice(k,1);
		console.log('client : ' + pseudo + ' disconnected');
		//console.log(clients[pseudo].pseudo);
	});
	
	socket.on('print', function(msg){
		console.log('mss : ' + msg);
	});

});




server.listen(port, function(){
  console.log('listening port ' + port + '...');
});