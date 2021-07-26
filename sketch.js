
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper1;	
var world;
var paperImg, ball, radius = 70;

function preload() {
	paperImg = loadImage("paper.png");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var options ={
		'isStatic' : false,
		'restitution': 0.3,
		'friction': 0,
		'density': 1.2,
	}


	


	ball = Bodies.circle(310, 100, radius/2.6, options);
	World.add(world, ball);

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
	imageMode(CENTER);
	image(paperImg, ball.position.x, ball.position.y, radius, radius);

  groundObject.display();
  dustbinObj.display();													

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x : 130, y : -145}) 
	}
}

