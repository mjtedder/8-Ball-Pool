function gameWorld(){
    this.stick = new stick();
}

gameWorld.prototype.update = function(){
    this.stick.update();
}

gameWorld.prototype.draw = function(){

    Canvas.drawImage(sprites.background, {x:0, y:0});

    this.stick.draw();
}