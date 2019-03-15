var angle = 0.0;
var angleDirection = 1;
var speed = .005;

function setup(){
    createCanvas(windowWidth,windowHeight);
    
}

function draw(){
    background(202);
    // stroke(random(255))
    scale(mouseX/60);
    translate(20,25);
    rotate(angle);
    strokeWeight(10);
    line(0,0,80,0);

    translate(80,0);
    rotate(angle*3);
    strokeWeight(6);
    line(0,0,60,0);

    translate(60,0);
    rotate(angle*4);
    strokeWeight(2);
    line(0,0,30,0);

    angle += speed*angleDirection;
    if ((angle>QUARTER_PI) || (angle < 0)){
        angleDirection *= -1;
    }
}