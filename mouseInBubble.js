// // globals
// var circleX = 610;
// var circleY = 220;
// var circleRadius = 50;

// function setup(){
//     createCanvas(windowWidth,windowHeight);
// }

// function draw(){
//     var distanceFromCircle = dist(mouseX,mouseY,circleX,circleY);
//     if (distanceFromCircle < circleRadius) {
//         circleRadius+=1;
//         fill(0,255,0);
//     }
//     if (distanceFromCircle > circleRadius){
//         // circleRadius-=1;
//         fill(255,0,0);
//     }
//     ellipse(width/2,height/2,circleRadius, circleRadius);
    
// }



function setup(){
    createCanvas(windowWidth,windowHeight);
}

var x = 1220/2;
var y = 440/2;
var radius = 20;

function draw(){
    background(255);
    ellipse(x,y,radius,radius);
    if (radius < 0){
        radius = 50;
    }
    if (dist(x,y,mouseX,mouseY) < radius){
        radius++;
    }else{
        radius--;
    }
}