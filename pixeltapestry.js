t = 0;
function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    t +=.01;
    p = 4;
    w = width
    gap=4;
    var x = floor(noise(t)*20)+floor(random(-gap,gap));
    var y = frameCount;

    for (var i = 0; i < int(noise(t)*w/2);i++){
        drawCross(x+gap*i,y);
    }
}


function drawCross(x,y){
    push();
    translate(x,y);
    rect(0,p,p,p);
    rect(p,0,p,p);
    rect(0,-p,p,p);
    rect(-p,0,p,p);
    pop();
}

// function setup(){
//   createCanvas(windowWidth,windowHeight);
//   background(200)
// }

// function draw(){

// }