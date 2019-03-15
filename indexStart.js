var xmag, ymag = 0;
var newXmag, newYmag = 0; 
 
function setup()  { 
  createCanvas(640, 360, WEBGL); 
  noStroke(); 
  colorMode(RGB, 1); 
} 
 
function draw()  { 
  background(0.5);
  
  push(); 
  translate(width/2, height/2, -30); 
  
  newXmag = mouseX/float(width) * TWO_PI;
  newYmag = mouseY/float(height) * TWO_PI;
  
  var diff = xmag-newXmag;
  if (abs(diff) >  0.01) { 
    xmag -= diff/4.0; 
  }
  
  diff = ymag-newYmag;
  if (abs(diff) >  0.01) { 
    ymag -= diff/4.0; 
  }
  
  rotateX(-ymag); 
  rotateY(-xmag); 
  
  scale(90);
  beginShape(TRIANGLES);

  fill(0, 1, 1); vertex(-1,  1,  1);
  fill(1, 1, 1); vertex( 1,  1,  1);
  fill(1, 0, 1); vertex( 1, -1,  1);
  fill(0, 0, 1); vertex(-1, -1,  1);

  fill(1, 1, 1); vertex( 1,  1,  1);
  fill(1, 1, 0); vertex( 1,  1, -1);
  fill(1, 0, 0); vertex( 1, -1, -1);
  fill(1, 0, 1); vertex( 1, -1,  1);

  fill(1, 1, 0); vertex( 1,  1, -1);
  fill(0, 1, 0); vertex(-1,  1, -1);
  fill(0, 0, 0); vertex(-1, -1, -1);
  fill(1, 0, 0); vertex( 1, -1, -1);

  fill(0, 1, 0); vertex(-1,  1, -1);
  fill(0, 1, 1); vertex(-1,  1,  1);
  fill(0, 0, 1); vertex(-1, -1,  1);
  fill(0, 0, 0); vertex(-1, -1, -1);

  fill(0, 1, 0); vertex(-1,  1, -1);
  fill(1, 1, 0); vertex( 1,  1, -1);
  fill(1, 1, 1); vertex( 1,  1,  1);
  fill(0, 1, 1); vertex(-1,  1,  1);

  fill(0, 0, 0); vertex(-1, -1, -1);
  fill(1, 0, 0); vertex( 1, -1, -1);
  fill(1, 0, 1); vertex( 1, -1,  1);
  fill(0, 0, 1); vertex(-1, -1,  1);

  endShape();
  
  pop(); 
} 