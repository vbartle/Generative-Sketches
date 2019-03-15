var paused = false;
var count = 0;
var detail = 50

function setup() { 
  createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
} 

function draw() { 
  background(255);
  if(!paused){
    translate(0,100,-250);
    rotateX(count);
    rotateY(count);
    for(var r=0; r<=255; r+=detail){
      for(var g=0; g<=255; g+=detail){
        for(var b=0; b<=255; b+=detail){
          push();
          translate(r,g,b);
          fill(r,g,b);
          sphere(detail,detail,detail);
          pop(); 
        }
      }
    }

    count += 0.01;
  
  }

  
}

function mouseClicked(){
	paused = !paused;
}
