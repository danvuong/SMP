var personnage = function(url,x,y,direction)
{
	this.x = x;
	this.y = y;
	this.sprite = new Image();
	this.sprite.src = "js/" + url;
}

personnage.prototype.dessinerpersonnage = function(contexte)
{
	contexte.drawImage(this.sprite,x*32,y*32,32,32);
}