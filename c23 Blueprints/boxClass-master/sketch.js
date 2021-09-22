const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    Ground1 = new Ground(200,390,400,20);
    box2 = new Box(220, 100, 50, 100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    Ground1.display();
    box2.display();
}