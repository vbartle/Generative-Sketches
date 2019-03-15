offset = 0;
easing = 0.05;
word = "lila"

function preload(){
    lunar = loadImage("../media/lunar.jpg");
    capsule = loadImage("../media/legendary-the-ice-king-outfit-cbipnql.png")
    clouds = loadImage("../media/clouds.png")
    cloudsgif = loadImage("../media/clouds.gif")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(204);
    // lunar = loadImage("../media/lunar.jpg", drawImage);
    // capsule = loadImage("../media/capsule.jpg", drawImage)
    // clouds = loadImage("../media/clouds.png", drawImage)
    // cloudsgif = loadImage("../media/clouds.gif", drawImage)

    textFont("Trebuchet");
    textSize(64);
    // textColor(255);
    // stroke(255)
    noStroke();

}

function draw(){
    // background(200);
    fill(255,100);
    ellipse(mouseX,mouseY,random(50),random(50));
    fill(155,random(255),random(255));
    image(lunar,-25,25);
    // image(capsule,0,0,mouseX*2,mouseY*2)
    // image(clouds,0,0)
    // tint(255,127)
    // image(cloudsgif,0,500)

    // image(capsule, 0, height/2); // Display at full opacity
    dx = mouseY - capsule.height / 2 - offset;
    offset += dx// * easing;
    tint(255, 150); // Display at half opacity
    image(capsule, 0, offset);
    
    text('"' + word + '"',500,50);
}

// function drawImage(){
    
// }