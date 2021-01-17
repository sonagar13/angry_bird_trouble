const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world, object1 ;
var ball , ground;
var box1, box2, box3,box4;
var box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

var platform;
var backgroundImg
function preload(){

  backgroundImg = loadImage("bg.png")
}

function setup(){

    createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;
    ground  = new Ground(width/2,height,width,20);

    platform = new Ground(200,300,150,340);
    box1 = new Box(700,320,70,70);

    
     box2 = new Box(920,320,70,70);
     pig1 = new Pig(810,350);
     log1 = new Log(810,260,300,PI/2);
     box3 = new Box(700,240,70,70);
     
     box4 = new Box(920,240,70,70);
     pig2 = new Pig(810,220);


     log2 = new Log(810,180,300,PI/2);
     box5 = new Box(810,160,70,70);
     log3 = new Log(760,120,150,PI/7);
     log4 = new Log(870,120,150,-PI/7);
     bird = new Bird(100,100);

    
    //console.log(object2.body.angle);
    


    //ball = Bodies.circle(50,50,20,{restitution : 1});
    //World.add(world,ball);
    //ball = new Ball();

    //Engine.run(engine);

  
  

    

     
}

function draw() {
  background(backgroundImg);
  
  Engine.update(engine);
  ground.display();
  box1.display();
  
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();
  bird.display();
  platform.display();
  /*
  box2.display();
  
  
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
*/
  

}