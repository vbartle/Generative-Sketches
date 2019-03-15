var spot = {
    x:100,
    y:50
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255);
}

function draw(){
    var col = {
        r:random(255),
        g:random(255),
        b:random(255)
    }
    var size = random(20,50);
    noStroke();
    fill(col.r,col.g,col.b,100);
    // fill(map(col.r,0,col.r,0,width),map(col.g,0,col.g,0,width),map(col.b,0,col.b,0,width));
    spot.x=random(0,width);
    spot.y=random(0,height);
    ellipse(spot.x,spot.y,size,size);

    // map(col.b,0,width,0,col.b);
}