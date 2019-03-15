
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0)
}
// redX = 0
// redY = 100
// redValue = 255;
// greenValue = 0;
// rgX = 0;
// rgY = 50;
x = 40
y = 40
vcolor = 255
function draw(){


    if (vcolor>0){
        vcolor-=1
    }


    point(x,y)

    if(x<300){
    x+=1;
    }
    for (i=0;i<255;i+=1){
        point(x,y+)
        stroke(0,i,vcolor)
    }

    // RED TO BLACK GRADIENT
    // for (i=255;i>0;i-=1){
    //     stroke(i,0,0)
    //     point(redX,redY)
    //     if (redX<windowWidth){
    //         redX+=1
    //         }
    // }

    //RED TO GREEN GRADIENT
    // if (redValue>0){
    //     redValue-=1;
    //     if (greenValue<255){
    //         greenValue+=1;
    //     }
    // }
    // stroke(redValue,greenValue,0);
    // point(rgX,rgY)
    // if (rgX<255){
    //     rgX+=1;
    // }

}

// function setup(){
//   createCanvas(windowWidth,windowHeight);
//   background(200)
// }

// function draw(){

// }