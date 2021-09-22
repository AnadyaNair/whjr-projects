var monkey, monkey_running;
var bg, bgimage;
var banana,yellow_banana;
var stone,villain_stone;

var score = 0;

function preload(){
monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bgimage = loadImage("jungle.jpg");
  
  yellow_banana = loadImage("banana.png");
  villain_stone = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  bg = createSprite(0,0,400, 400);
  bg.addImage(bgimage);
  bg.velocityX = -10;
  monkey = createSprite(50,300,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.2;
  
   bananaGrp = new Group();
   stoneGrp = new Group();
}

function draw() {
  background(220);
  if (bg.x <0) {
    bg.x = bg.width/2;
  }
  spawnBananas();
  spawnStones();
  
  
  if (keyDown ("Space") && monkey.y>300) {
    monkey.velocityY = -20;
  }
  
  if (monkey.isTouching(bananaGrp)) {
    bananaGrp.destroyEach();
    score = score + 2;
  }
  
  if (monkey.isTouching(stoneGrp)) {
    score = score - 1;
  }
  
  monkey.velocityY = monkey.velocityY + 1;
  drawSprites();
  fill ("white");
  textSize(15);
  text("Monkey's score = "+score, 250, 70);
  edges = createEdgeSprites();
  monkey.collide(edges[3])
}
function spawnBananas() {
  if (frameCount%150==0) {
    banana = createSprite(400, 200);
    banana.addImage(yellow_banana);
    banana.velocityX = -13;
    banana.scale = 0.09;
    banana.lifetime = 400/-13;
    bananaGrp.add(banana);
  }
}

function spawnStones() {
  if (frameCount%200==0) {
  stone = createSprite(400, 300);
    stone.addImage(villain_stone);
    stone.velocityX = -13;
    stone.scale = 0.2;
    stone.lifetime = 400/-13;
    stoneGrp.add(stone);
  }
}