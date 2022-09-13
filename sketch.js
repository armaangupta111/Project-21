
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, world

function preload()
{
	
}

function setup() {
	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	}
	createCanvas(800, 700);
	ball = new Ball(150,650,50,50)
	ground = Bodies.rectangle(400,700,800,30,{isStatic:true})
	wall1 = Bodies.rectangle(550,680,20,40,{isStatic:true})
	wall2 = Bodies.rectangle(630,680,20,40,{isStatic:true})

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
//   ellipse(ball.position.x, ball.position.y, 20)
  rect(ground.position.x, ground.position.y, 800, 30)
  rect(wall1.position.x, wall1.position.y,20,40)
  rect(wall2.position.x, wall2.position.y,20,40)

  drawSprites();
 
}

function keyPressed(){
if(keyCode == DOWN_ARROW) {
ball.display()
}
}

function keyReleased() {
	if (keyCode === DOWN_ARROW) {
	  ball.shoot();
	}
  }

