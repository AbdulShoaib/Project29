function setup() {
  createCanvas(800,400);
  createSprite(400, 340, 300,15);
  ground= new Grounds(200,200,30,30)
}

function draw() {
  background(0,0,0);  
  drawSprites();
  ground.display();
}