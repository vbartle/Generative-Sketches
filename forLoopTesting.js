// globals

function setup(){
    createCanvas(1220,440)
}

function draw(){
    for(x = 0; x < width; x+=20){
        for(y = 0;y<height; y+=20){
            line(x,y,x+20,y+30);
        }
    }
}

// globals

// function setup(){
//     createCanvas(1220,440)
// }

// function draw(){
//     for(var x = 0; x < width; x+=20){
//         // for(y = 0;y<height; y+=20){
//         line(x,0,x+x/2,height/2);
//         line(x+x/2,height/2,x*.2,height);

//         // }
//     }
// }