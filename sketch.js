var sr, mr
var a, b

function setup() {
  createCanvas(windowWidth,windowHeight);
  sr = createSprite(width/2, height/2, width/24, height/10);
  mr = createSprite(width, height, width/15, height/27);
  sr.shapeColor = "red"
  mr.shapeColor = "red"
}

function draw() {
  background(0,0,0); 
  mr.x = World.mouseX
  mr.y = World.mouseY 
  sr.width = sin(frameCount) * width/24 + width/24 + width/120
  sr.height = cos(frameCount) * height/10 + height/10 + height/80
  a = mr.width/2 + sr.width/2
  b = mr.height/2 + sr.height/2
  if (abs(mr.x - sr.x) < a && abs(mr.y - sr.y) < b) {
    mr.shapeColor = "green"
    sr.shapeColor = "green"
  } else {
    sr.shapeColor = "red"
    mr.shapeColor = "red"
  } 
  drawSprites();
}