// globals
var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = .7;

function setup(){
    createCanvas(windowWidth,windowHeight);
    // frameRate(30);
    // frameRate(100);
    frameRate(60);
    
}

function draw(){
    let from = color(218,165,32)
    let to = color(72,61,139)
    let interA = lerpColor(from, to, .33);
    let interB = lerpColor(from, to, .66);

    // background(220)
    if (mouseIsPressed){
        stroke(0);
        easing = 1;
    }
    else{
        stroke(0,100);
        easing = .01;
    }

    x += (mouseX - x)*easing;
    y += (mouseY - y)*easing;

    var weight = dist(x,y,px,py);
    strokeWeight(weight);
    line(x,y,px,py);
    py=y;
    px=x;
}