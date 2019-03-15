var radius = 100;
var x = -radius;
var speed = 10;
var easing = .2;
var change = .01; //.52

function setup(){
    createCanvas(windowWidth, windowHeight);
    // frameRate(30);
    // frameRate(12);
    ellipseMode(RADIUS)
    noStroke();
}

function draw(){
    background(100);
    var fRate=frameRate();
    print(fRate);
    fill(200,200,50);
    arc(x,200,radius,radius,.52-change,5.76+change)
    x+=speed;
    change += easing

    if (x>width+radius){
        x = -radius;
    }
}