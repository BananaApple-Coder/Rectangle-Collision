var sr, mr
var a, b

function setup() {
  createCanvas(1200,800);
  sr = createSprite(200, 200, 50, 80);
  mr = createSprite(400, 200, 80, 30);
  sr.shapeColor = "red"
  mr.shapeColor = "red"
  sr.debug = true
  mr.debug = true
}

function draw() {
  background(0,0,0); 
  mr.x = World.mouseX
  mr.y = World.mouseY 
  sr.width = sin(frameCount) * 50 + 60
  sr.height = cos(frameCount) * 80 + 90
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