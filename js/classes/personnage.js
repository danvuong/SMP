var DIRECTION = {
	"BAS"    : 0,
	"GAUCHE" : 1,
	"DROITE" : 2,
	"HAUT"   : 3
}

var DUREE_ANIMATION = 4;
var DUREE_DEPLACEMENT = 10;

var personnage = function(url,x,y,direction, pseudo)
{
	this.x = x;
	this.y = y;
	this.pseudo = pseudo;
	this.etat_animation = -1;
	this.sprite = new Image();
	this.sprite.src = "js/sprites/" + url;
}

personnage.prototype.next_coord = function(direction)
{
	var coord = {'x' : this.x, 'y' : this.y};
	switch(direction)
	{
		case DIRECTION.BAS :
			coord.y++
			break;
		case DIRECTION.HAUT :
			coord.y--;
			break;
		case DIRECTION.GAUCHE :
			coord.x--;
			break;
		case DIRECTION.DROITE : 
			coord.x++;
			break;
	}
	return coord;
}

personnage.prototype.deplacer = function(direction,map)
{
	if(this.etat_animation >=0){
		return false;
	}
	this.direction = direction;
	var prochaine_case = this.next_coord(direction);
	// if(prochaine_case.x<0 || prochaine_case.y<0||prochaine_case.x>map.largeur-1||prochaine_case.y>map.height-1||map.collision[prochaine_case.y][prochaine_case.x]==1){
	// 	return false;
	// };

	this.etat_animation = 1;
	this.x = prochaine_case.x;
	this.y = prochaine_case.y;
	socket.emit('deplacement',{x: this.x, y: this.y, pseudo: this.pseudo, direction: direction});
}

personnage.prototype.dessinerpersonnage = function(contexte)
{
	var decalageX = 0;
	var decalageY = 0;

	 if(this.etat_animation >= DUREE_DEPLACEMENT) {
		this.etat_animation = -1;
  }
	if(this.etat_animation >=0){
    var pixelsAParcourir = 32 - (32 * (this.etat_animation / DUREE_DEPLACEMENT));

    if(this.direction == DIRECTION.HAUT) {
			decalageY = pixelsAParcourir;
		} else if(this.direction == DIRECTION.BAS) {
			decalageY = -pixelsAParcourir;
		} else if(this.direction == DIRECTION.GAUCHE) {
			decalageX = pixelsAParcourir;
		} else if(this.direction == DIRECTION.DROITE) {
			decalageX = -pixelsAParcourir;
		}
		this.etat_animation++;
	}

	contexte.drawImage(this.sprite,this.x*32+decalageX,this.y*32+decalageY,32,32);
}
