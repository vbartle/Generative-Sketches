// function setup(){
//     createCanvas(windowWidth,windowHeight);
//     strokeWeight(5)
// }

// function draw(){
//     background(84, 44, 44);
//     line(width/2,0,width/2,height);
//     line(0,height/2,windowWidth,height/2 );
//     line(0,0,mouseX,mouseY);
//     line(0,height,mouseX,mouseY);
//     line(width,height,mouseX,mouseY);
//     line(width,0,mouseX,mouseY);
//     // line
// }

// globals

function setup(){
    createCanvas(windowWidth,windowHeight)
}

function draw(){
    stroke(random(255),100,200);
    // stroke(random(255),random(255),random(255));
    line(mouseX,height,mouseX,height/height) //vertical line
    // stroke(50,50,50);
    line(width/width,mouseY,width,mouseY) //horizontal line
    // stroke(255,0,0);
    line(0,0,mouseX,mouseY);
    // stroke(0);
    line(0,height, mouseX,mouseY);
    // stroke(0,255,0);
    line(width,0,mouseX,mouseY);
    // stroke(0,0,255);
    line(width,height,mouseX,mouseY);
    noStroke();
    fill(255,100);
    ellipse(mouseX,mouseY,25,25);
    if (mouseIsPressed){
        background(255,0);
        strokeWeight(1);
    }
    else{
        background(255,100);
        strokeWeight(10);
    }

}