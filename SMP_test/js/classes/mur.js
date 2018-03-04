function mur(url,x,y)
{
	this.x=x;
	this.y=y;
	this.sprite = new Image();
	this.sprite.src="js/sprites/"+url;
}

mur.prototype.dessinermur = function(contexte)
{
	contexte.drawImage(this.sprite,this.x*32,this.y*32,32,32);

}