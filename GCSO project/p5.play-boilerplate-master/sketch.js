var car,wall;
var speed,weight;

function setup() {
  createCanvas(2000,2000);
  car= createSprite(400, 200, 50, 50);
  car.shapeColor = "green";
  wall= createSprite(1500,300,60, 500);
  wall.shapeColor = "brown";
}

function draw() {
  background(255,255,255);  
  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;

if(wall.x - car.x <= wall.width/2 + car.width/2) {
  car.velocityX = 0;
  deformation = (0.5 *weight *speed *speed)/22500;
   
  if (deformation < 100) {
    car.shapeColor = "green";
  } else if (deformation >100 && deformation <180) {
    car.shapeColor = "yellow";
  } else {
    car.shapeColor = "red";
  }
}

  drawSprites();
}