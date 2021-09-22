var rect1, rect2;

function setup() {
  createCanvas(800,400);
rect1 = createSprite(200, 100, 50, 50);
rect1.velocityY = 3;
rect2 = createSprite(200, 300, 50, 50);
rect2.velocityY = -3;
}

function draw() {
  background("orange");  
  bounceOff(rect1,rect2);
 /* rect2.x = mouseX;
  rect2.y = mouseY;

  var result = isTouching(rect1,rect2);
  if (result == true)
{ 
  rect1.shapeColor = "red";
  rect2.shapeColor = "red";
}
else {
 rect1.shapeColor = "green";
 rect2.shapeColor = "green";
}*/
  drawSprites();
} 

