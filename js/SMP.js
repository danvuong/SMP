
var mp = new map(tab_map);
var aff_menu = new map(map_menu);
var image_menu = new Image();
image_menu.src = "sprites/menu.png";
var joueur = new personnage("endive.png",1,1,0)
mp.personnages.push(joueur)



socket.on('new_personnage', function(data){
	var joueur = new personnage("patate.png",data.x,data.y,0);
	joueur.pseudo = data.pseudo;
	mp.personnages.push(joueur);
});

socket.on('delete_joueur', function(data){
	for(var i = 0;i<mp.personnages.length;i++){
		if(mp.personnages[i].pseudo == data.pseudo){
			mp.personnages.splice(i,1);
		};
	};
});

window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');


var jeu = function(){

	setInterval(function() {
		mp.dessinermap(ctx);
	}, 20);
}



var menu = function(){
	aff_menu.dessinermap(ctx);
	ctx.drawImage(image_menu,0,0,aff_menu.largeur*32,aff_menu.height*32);

window.onkeydown = function(event) {
var e = event || window.event;
var key = e.which || e.keyCode;
switch(key){
	case 13:
	jeu();
	break;
}
}


};

socket.on('logged', function(){
  	    $("#login").fadeOut();
        menu();
  })





}
