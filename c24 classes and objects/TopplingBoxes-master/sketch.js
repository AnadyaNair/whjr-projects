const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,50);
    box2 = new Box(920,320,50,50);
    ground = new Ground(200,350,1800,10);
    pig1 = new pig(810,320,50,50);
    log1 = new log(810,260,300, PI/2);

    box3 = new Box(700,240,50,50);
    box4 = new Box(920,240,50,50);
    pig2 = new pig(810,240,50,50);

    log2 = new log(810, 180, 300, PI/2);
    log3 = new log(760, 120, 150, PI/7);
    log4 = new log(870, 120, 150, -PI/7);

    box5 = new Box(810, 160, 70, 70);
    bird = new bird(100, 100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    ground.display();
    bird.display();
}