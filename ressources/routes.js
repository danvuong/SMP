
var path = require('path');
var express = require('express');

var route = express();

route.get('/', function(req, res){
	res.sendFile(path.resolve('./index.html'));
})


route.get('/js/classes/tileset.js', function(req, res){
	res.sendFile(path.resolve('./js/classes/tileset.js'));
})

route.get('/js/classes/map.js', function(req, res){
	res.sendFile(path.resolve('./js/classes/map.js'));
})

route.get('/js/classes/personnage.js', function(req, res){
	res.sendFile(path.resolve('./js/classes/personnage.js'));
})

route.get('/js/SMP.js', function(req, res){
	res.sendFile(path.resolve('./js/SMP.js'));
})

route.get('/css/style.css', function(req, res){
	res.sendFile(path.resolve('./css/style.css'));
})

//images :
route.get('/js/sprites/endive.png', function(req, res){
	res.sendFile(path.resolve('./js/sprites/endive.png'));
})

route.get('/js/sprites/menu.png', function(req, res){
	res.sendFile(path.resolve('./js/sprites/menu.png'));
})

route.get('/sprites/menu.png', function(req, res){
	res.sendFile(path.resolve('./js/sprites/menu.png'));
})

route.get('/js/sprites/patate.png', function(req, res){
	res.sendFile(path.resolve('./js/sprites/patate.png'));
})

route.get('/js/sprites/tilesets/basique.png', function(req, res){
	res.sendFile(path.resolve('./js/sprites/tilesets/basique.png'));
})




module.exports = route;