// globals

function setup(){
    createCanvas(windowWidth,windowHeight)
    // noStroke();
    strokeWeight(10);
    strokeJoin(BEVEL);
    // strokeCap(ROUND);
    fill(0,200,100, 100);
}

function draw(){
    if (mouseIsPressed){
        strokeWeight(4);
        ellipse(mouseX,mouseY,10,10);
    }
    line(100,100,300,100);
    triangle(100,100,200,200,100,200);
    quad(300,100,300,150,400,100,400,75);
    rect(0,0,50,50);
    ellipse(50,50,75,75);
    arc(750,200,50,50,270,30);

    beginShape();
    vertex(50,50);
    vertex(1100,50);
    vertex(900,150);
    vertex(1100,200);
    vertex(50,200);
    vertex(250,150);
    vertex(50,50);
    endShape();
}

// globals
// var x = 100;
// var y = 100;
// var diameter = 100;
// var change = 150

// function setup(){
//     createCanvas(1220,440)
// }

// function draw(){
//     ellipse(x,y,diameter,diameter);
//     ellipse(x+change,y,diameter,diameter);
//     ellipse(x+change*2,y,diameter,diameter);
// }