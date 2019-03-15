var cols, rows;
var scl = 11;
var w = 2000;
var h = 1800;

var flying = 0;

var terrain = [];

function setup() {
    
    frameRate(30)
  createCanvas(windowWidth, windowHeight, WEBGL);
  cols = w / scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {
    
  flying -= 0.09;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -50, 50);
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  stroke(0,100)
  background(237, 255, 253);
  translate(0, 50);
  rotateX(PI/3);
  fill(0,100,255,100);
  translate(-w/2, -h/1.1);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols-1; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}