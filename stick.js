function stick(){
    this.position = {x:0,y:400};
}

stick.prototype.update = function(){

    //Testing.
    this.position.x++;

}

stick.prototype.draw = function(){
    Canvas.drawImage(sprites.stick, this.position);
}