var rectX = 610;
var rectY = 220;


function setup(){
    createCanvas(windowWidth,windowHeight);
    textSize(20);
    textAlign(CENTER,CENTER);
    strokeWeight(6);
    strokeJoin(ROUND);
    // fill(random(255),random(255),random(255));

}

function draw(){
    // background(255);
    var speed = random(25);
    textAlign(CENTER);
    stroke(random(255),random(255),random(255));
    fill(255,100);
    ellipse(rectX, rectY,30,30);

    // let directions = []
    // directions = [LEFT_ARROW,RIGHT_ARROW,DOWN_ARROW,UP_ARROW];
    // index = int(random(directions.length));
    // keyCode = directions[index]; 
    
    
    // print(keyCode);

    // static
    if (keyIsDown(LEFT_ARROW)){
        rectX-=speed;
    }
    if (keyIsDown(RIGHT_ARROW)){
        rectX+=speed;
    }
    if (keyIsDown(DOWN_ARROW)){
        rectY+=speed;
    }
    if (keyIsDown(UP_ARROW)){
        rectY-=speed;
    }

    // //continuous
    // if (keyCode == LEFT_ARROW){
    //     rectX-=speed;
    // }
    // if (keyCode == RIGHT_ARROW){
    //     rectX+=speed;
    // }
    // if (keyCode == DOWN_ARROW){
    //     rectY+=speed;
    // }
    // if (keyCode == UP_ARROW){
    //     rectY-=speed;
    // }

    //flow
    if (rectX < 0){
        rectX = width
    } 
    if (rectY < 0){
        rectY = height;
    }
    if (rectX > width){
        rectX = 0;
    }    
    if (rectY > height){
        rectY = 0;
    }

    // //bounce
    // if (rectX < 0){
    //     keyCode = RIGHT_ARROW
    // } 
    // if (rectY < 0){
    //     keyCode = DOWN_ARROW;
    // }
    // if (rectX > width){
    //     keyCode = LEFT_ARROW;
    // }    
    // if (rectY > height){
    //     keyCode = UP_ARROW;
    // }

}