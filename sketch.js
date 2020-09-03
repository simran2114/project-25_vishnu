const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var dropzone1,dropzone2,dropzone3;
var dustbinimage;

function preload()
{
	
	dustbinimage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	paperball= new Paper(200,450,70);
	//paperball.shapeColor=color=("white");

	

	groundObject=new Ground(width/2,670,width,20);

	dropzone1 = createSprite(715,685,10,100/2);
	dropzone2 = createSprite(810,685,10,100/2);
	dropzone3=createSprite(767,625,100,10);
	dropzone3.addImage(dustbinimage);
	dropzone3.scale=0.5;

	
	

}


function draw() {
  rectMode(CENTER);
  background(0);

paperball.display();
groundObject.display();


  keypressed();
  drawSprites();
 
}

function keypressed()
	{
	   if(keyCode===UP_ARROW)
	   {
		   Matter.Body.applyForce(paperball.body,paperball.body.position,{x:50,y:-50})
	   }
	}


