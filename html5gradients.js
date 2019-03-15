var canvas;
var ctx;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  ctx = canvas.drawingContext;
  translate(width / 2, height / 2);
  noStroke();
}

function draw() {
  translate(windowWidth/2,windowHeight/2)
  background(0);
  var gradX = mouseX - width / 2;
  var gradY = mouseY - height / 2;
  var gradient = ctx.createRadialGradient(0, 0, 50, gradX, gradY, 0);
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "blue");
  ctx.fillStyle = gradient;
  ellipse(0, 0, 100, 100);
}

// function setup(){
//   createCanvas(windowWidth,windowHeight);
//   background(200)
// }

// function draw(){

// }