
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball;
var ground1;
var side1;
var side2;
var bottom;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   //paperball= new Paper(200,200,50,50);
   paperball = new Paper(200,200,50,50);
   ground1 = new Ground(100,700,1600,20);
   side1 = new Trash(550,645,15,65);
   side2 = new Trash(650,645,15,65);
   bottom = new Trash(600,670,85,15);
   
   //trash1 = new Trash(400,400,250,250);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("white");
  textSize(20);
  fill("orange");
  text("Press up arrow key to throw ball",200,200);
  paperball.display();
  ground1.display();
  side1.display();
  side2.display();
  bottom.display();
 // trash1.display();
  drawSprites();
 
}

function keyPressed() {
   if (keyCode === UP_ARROW) {

   } Matter.Body.applyForce(paperball.body,paperball.body.position,{x:80,y:-85});
  
   }

