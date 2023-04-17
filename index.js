var speed = 1;
var canvas;

var angle = 0;
var nums = [];


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    console.log("Coded by me!")
}

function draw(){
    background(0);

    ambientLight(255, mouseX - 100, mouseY - 100, 0);
  
    push();
    translate(-55, 55, 0);
    
    for(i = 0; i < 55; i++){
    rotate(angle * 0.08);
    rotateZ(angle * 0.010);
    fill(255, 155);
    stroke(50);
    circle(i + 295, 195, i);
    }
    
    angle += 0.009;
    pop();
    
    push();
    translate(55, -55, 0);
}

// function planets(){
//     ambientLight(255, mouseX - 100, mouseY - 100, 0);
  
//     push();
//     translate(-55, 55, 0);
    
//     for(i = 0; i < 55; i++){
//     rotate(angle * 0.08);
//     rotateZ(angle * 0.10);
//     fill(255, 155);
//     stroke(50);
//     circle(i + 85, 85, i);
//     }
    
//     angle += 0.01;
//     pop();
    
//     push();
//     translate(55, -55, 0);
// }