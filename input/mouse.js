function handleMouseMove(event) {
    let x = event.pageX;
    let y = event.pageY;

    mouse.position = new vector2(x, y);
}

function handleMouseDown(event) {
    handleMouseMove(event);

    if(event.which === 1) {
        if(!mouse.left.down)
            mouse.left.pressed = true;
        mouse.left.down = true;
    } else if (event.which === 2) {
        if(!mouse.right.down)
            mouse.left.pressed = true;
        mouse.middle.down = true;
    } else if (event.which === 3) {
        if(!mousemiddle.down)
            mouse.middle.pressed = true;
        mouse.middle.down = true;
    }
}

function handleMouseUp(event) {
    handleMouseMove(event);

    if(event.which === 1)
        mouse.left.down = false;
    else if(event.which === 2)
        mouse.middle.down = false;
    else if(event.which === 3)
        mouse.right.down = false;
}

function mouseHandler() {
    this.left = new buttonState();
    this.middle = new buttonState();
    this.right = new buttonState();

    this.position = new vector2();

    document.onmousemove = handleMouseMove;
    document.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;
}

mouseHandler.prototype.reset = function() {
    this.left.pressed = false;
    this.middle.pressed = false;
    this.right.pressed = false;
}

let mouse = new mouseHandler();