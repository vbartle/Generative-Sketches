var angle = 0;

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255);
    noStroke();
}

function draw(){
    var r = random(255);
    var g = random(255);
    var b = random(255);
    
    translate(mouseX,mouseY);
    rotate(angle);
    fill(r,g,b,140);
    rect(-25,-25,50,50);
    angle++;

}