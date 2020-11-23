
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree= new Tree(700,320,70,70);
mango1=new Mango(700,300,20,20)
mango2=new Mango(710,310,20,20)
mango3=new Mango(720,320,20,20)
mango4=new Mango(730,330,20,20)

mango5=new Mango(740,340,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  drawSprites();
 

  detectcollision(stoneObj,mango1)
  detectcollision(stoneObj,mango2)
  detectcollision(stoneObj,mango3)
  detectcollision(stoneObj,mango4)
  detectcollision(stoneObj,mango5)
}
function mouseDragged(){


	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	chain.fly();
	}


function detectcollision(sr=TouchEvent,mango){
	mangoBodyPosition=mango.body.setPosition
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosiiton.x,mangoBodyPosition.y)
	if(distance<-mango.r+sone){
		Matter.Body.setStatic(mango.body,false);
	}
}
function keyPressed(){
	if (keyCode  === 32){
		Matter.Body.setPosition(stonrObj1.body,{x:2545,y:420})
launcherObject.attach(stoneObj.body)
	}
}