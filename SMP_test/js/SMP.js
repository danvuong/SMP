
var mp = new map(tab_map);
var aff_menu = new map(map_menu);
var image_menu = new Image();
image_menu.src = "js/sprites/menu.png";
//var joueur = new personnage("endive.png",1,1,DIRECTION.DROITE,pseudo)
var joueur = new personnage("sprite_test.png",1,1,DIRECTION.DROITE);
mp.personnages.push(joueur)

map_mur = Array(taille_map).fill().map(() => Array(taille_map).fill(0));
map_mur[1] =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
map_mur[2]= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
map_mur[3]= [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0]
map_mur[4]= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
map_mur[5]= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
map_mur[6]= [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0]
map_mur[7]= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
map_mur[8]= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
map_mur[9]= [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0]
map_mur[10]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
map_mur[11]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
map_mur[12]=[0,0,0,0,0,0,0,0,1,1,1,0,0,0,0]
map_mur[13]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
map_mur[14]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

 for(var i = 0;i<map_mur.length;i++)
    {
      for(var j = 0;j<map_mur.length;j++)
      {
        if (map_mur[i][j]==1)
        {
          mr=new mur("mur.png",0,0);
          mr.x=j;
          mr.y=i;
          mp.murs.push(mr);
        }
      }
    }




window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');


var jeu = function(){

	setInterval(function() {
		mp.collision();
		mp.dessinermap(ctx);
		joueur.gravity(mp);
	}, 20);

	var keymap = new Array();
	var interval = null;
	var espace = false;
	

	onkeydown = function(e)
	{
    	e = e || event; // to deal with IE
    	keymap[e.keyCode] = true;

    	if(interval === null)
	    {
	    	id_set = setInterval(function(){	
	    if(keymap[32])		
		{
			if(joueur.jump==false && espace == false )
			{
			espace = true;
			joueur.jump=true;
			joueur.y_velocity += -30;
			}
			// return true;
		}
		if(keymap[113]||keymap[97]||keymap[81]||keymap[65])
		{
			if (joueur.x_velocity >-5)
			{
			joueur.x_velocity+=-0.6;
			joueur.DIRECTION=GAUCHE;
			}
			// return true;
		}
		if(keymap[100]||keymap[68])
		{
			if (joueur.x_velocity < 5)
			{
			joueur.x_velocity += 0.6;
			joueur.DIRECTION=DROITE;
			}
			// return true;
		}
		
		else
		{	// 		//alert(key);
			// Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
			return true;
		}

	    	},1000/50);
	    }

	}

	onkeyup = function(e)
{
	e = e || event; // to deal with IE
    keymap[e.keyCode] = false;
		if(!keymap[32])
		{ 
			espace = false;
			// return true;
		}	
		if(!keymap[113]||!keymap[97]||!keymap[81]||!keymap[65])
		{
			joueur.x_velocity=0;
			// return true;
		}
		if(!keymap[100]||!keymap[68])
		{
			joueur.x_velocity = 0;
			// return true;
		}
    if(id_set != null)
    {
    clearInterval(id_set);
	}
    interval=null;
}
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


menu();



}
