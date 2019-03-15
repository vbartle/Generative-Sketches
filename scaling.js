function setup(){
    createCanvas(windowWidth,windowHeight);
    background(204);
}

function draw(){
    push();
    translate(mouseX,mouseY);
    var scalar = mouseX/60;
    scale(scalar);
    strokeWeight(1/scalar);
    rect(0,0,30,30);
    pop();

    translate(35,10);
    rect(0,0,150,150);
    
}