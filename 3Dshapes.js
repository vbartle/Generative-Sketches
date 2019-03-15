function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(255);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

  stroke(150,150)
  fill(255,10,255,50)
  text('hey',mouseX,80)
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(80);
  pop();

  specularMaterial(250);
  push();
  translate(-width / 4, -height / 4, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(80, 20, 64, 64);
  pop();

  ambientMaterial(250);
  push();
  translate(width / 4, -height / 4, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cone(80, 80);
  pop();

  normalMaterial(250);
  push();
  translate(-width / 4, height / 4, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cylinder(80, 80);
  pop();

  specularMaterial(250);
  push();
  translate(width / 4, height / 4, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(80);
  pop();
}

// function setup(){
//   createCanvas(windowWidth,windowHeight);
//   background(200)
// }

// function draw(){

// }