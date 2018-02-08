
var path = require('path');
var express = require('express');

var route = express();

route.get('/', function(req, res){
	res.sendFile(path.resolve('./index.html'));
})


route.get('/js/classes/Tileset.js', function(req, res){
	res.sendFile(path.resolve('./js/classes/Tileset.js'));
})

route.get('/js/classes/map.js', function(req, res){
	res.sendFile(path.resolve('./js/classes/map.js'));
})

route.get('/js/classes/personnage.js', function(req, res){
	res.sendFile(path.resolve('./js/classes/personnage.js'));
})

route.get('/js/rpg.js', function(req, res){
	res.sendFile(path.resolve('./js/rpg.js'));
})

route.get('/css/style.css', function(req, res){
	res.sendFile(path.resolve('./css/style.css'));
})

//images :
route.get('/js/endive.png', function(req, res){
	res.sendFile(path.resolve('./js/endive.png'));
})

route.get('/js/patate.png', function(req, res){
	res.sendFile(path.resolve('./js/patate.png'));
})

route.get('/tilesets/basique.png', function(req, res){
	res.sendFile(path.resolve('./tilesets/basique.png'));
})


module.exports = route;