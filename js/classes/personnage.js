var personnage = function(url,x,y,direction)
{
	this.x = x;
	this.y = y;
	this.pseudo;
	this.sprite = new Image();
	this.sprite.src = "js/sprites/" + url;
}

personnage.prototype.dessinerpersonnage = function(contexte)
{
	contexte.drawImage(this.sprite,this.x*32,this.y*32,32,32);
}