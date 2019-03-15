var startX = 50;
var startY = 50;
var stopX = 200;
var stopY = 200;
var lipX = startX;
var lipY = startY;
var step = 1;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  // background(0);
  print(startX)
  if ((startX < stopX) && (startY<stopY)){
    startX+=step;
    startY+=step;
    lipX=startX;
    lipY=startY;
  }
  
  ellipse(lipX,lipY,20,20)
}

// function draw(){
//   // background(0);
//   if (pct < 1){
//     lipX = startX + ((stopX-startX)*pct);
//     lipY = startY + ((stopY-startY)*pct);
//     pct += step;
//     print(lipX,stopX)
//   }
//   if ((lipX == stopX) && (lipY == stopY)){
//     print('test')
//   }
//   ellipse(lipX,lipY,20,20);
// }