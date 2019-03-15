function setup(){
    createCanvas(windowWidth,windowHeight);
    // line(15,25,70,90)
}

function draw(){
    // background(255,255,255);
    ellipse(mouseX,mouseY,80,80);
    if (mouseIsPressed){
        fill(0,255,0);
        stroke(0,255,0);
    }
    else{
        fill(0,0,255);
        stroke(0,0,255);
    }


}

// var x=5;
// var y = 5;
// var change = 10
// function setup(){
//     createCanvas(600,400);
//     // line(15,25,70,90)
//     noStroke();
// }

// function draw(){
//     // background(255,255,255);
//     ellipse(mouseX+change, mouseY, x,y);
//     ellipse(mouseX-change, mouseY,x,y);
//     ellipse(mouseX, mouseY+change,x,y);
//     ellipse(mouseX, mouseY-change,x,y);
//     if (mouseIsPressed){
//         fill(255,0,0);
//     }
//     else{
//         fill(0,0,255);
//     }


// }