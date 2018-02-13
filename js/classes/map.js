var taille_map = 15;

var tab_map = new Array();
for(var i = 0;i<taille_map;i++){
  var temp = new Array();
  for(var j =0;j<taille_map;j++){
    temp.push(2);
  }
  tab_map.push(temp);
}
;

var map_menu = new Array();
for(var i=0; i<taille_map;i++){
  var temp = new Array();
  for(var j=0; j<taille_map;j++){
    temp.push(1);

  }
  map_menu.push(temp);
}


function map(choix){
  this.choix=choix;
  this.height = choix.length;
  this.largeur = choix[0].length;
  this.tileset=new Tileset("basique.png");

  this.personnages = new Array();
  this.collision = new Array();


}

  map.prototype.dessinermap = function(contexte){

    for( var i =0, l=this.height;i<l; i++){
      for(var j=0, k = this.largeur;j<l;j++){
        this.tileset.dessinerTile(this.choix[i][j],contexte,j*32,i*32);
      }
    }

  }
