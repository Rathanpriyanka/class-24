const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var ground;
var log;
function setup(){
      createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground();
    box2 =  new Box(150,100,50,50,true);
    log = new Log();
    box1 = new Box(50,100,50,50,false);
    box3 = new Box(50,200,50,50,false);
    box4 = new Box(150,200,50,50,true);
    box5 = new Box(100,50,50,50,false);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    log.display();
    box2.display();
    box1.display();
    box3.display();
    box4.display();
    box5.display();
}