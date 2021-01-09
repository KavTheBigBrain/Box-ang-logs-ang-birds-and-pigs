const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,300,50,50);
    pig1 = new Pig(150,300)
    box2 = new Box(200,300,50,50);
    log1 = new log(150,295,150,0)
    box3 = new Box(100,290,50,50)
    box4 = new Box(200,290,50,50)
    pig2 = new Pig(150,290)
    log2 = new log(150,235,150,0)
    box5 = new Box(150,200,50,50)
    log4 = new log(100,195,75,-45)
    log5 = new log(200,195,75,45)

    

    ground = new Ground(200,height,400,20)
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
    log4.display();
    log5.display();
    box5.display();
    ground.display();
}