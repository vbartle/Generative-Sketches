// // globals
// var x;
// var offset = 10;

// function setup(){
//     createCanvas(windowWidth,windowHeight);
//     x = width/2;
// }

// function draw(){
//     background(255);
//     if (mouseX > x) {
//         x += 10;
//         offset = -10;
//     }if (mouseX<x){
//         x -= 10;
//         offset = 10;
//     }
//     line(x,0,x,height);
//     line(mouseX,mouseY,mouseX+offset,mouseY-10);
//     line(mouseX,mouseY,mouseX+offset,mouseY+10);
//     line(mouseX,mouseY,mouseX+offset*3,mouseY);

// }

// globals
var lineX = 0;
var rol = 0;

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(255);

    //line
    if (lineX < mouseX){
        lineX += 10;
        rol = 10;
    }
    if (lineX>mouseX){
        lineX -= 10;
        rol = -10;
    }
    line(lineX,0,lineX,height);
    
    //arrow
    line(mouseX,mouseY,mouseX+rol,mouseY+10);
    line(mouseX,mouseY,mouseX+rol,mouseY-10);


}