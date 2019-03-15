// globals
var diam = 10;

function setup(){
    createCanvas(windowWidth,windowHeight)
}

function draw(){
    var col = {
        r:map(mouseX,0,width,0,255),
        g:map(mouseX,0,width,0,255),
        b:map(mouseX,0,width,0,255),
    }
    background(0);
    for(var x = 0; x < width; x+=40){
        for(var y = 0; y < height; y+=40){
            stroke(col.r,col.g,col.b);
            fill(col.r,col.g,col.b);
            ellipse(x,y,diam,diam);
            line(x,y,mouseX,mouseY);
            // red+=3;
            // green+=2;
            // blue+=1;
        }
    }
}