function setup() {
    createCanvas(600,600);      
    background("red");   
}

function draw() {     
  strokeWeight(4);          
  fill("blue");         
  if (mouseIsPressed) {    
    rect(mouseX,mouseY, 20,30); 
  }
}