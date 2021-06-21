
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,minig1,minig2,world;
var block1, block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,
block16;

var block17,block18,block19,block20,block21,block22,block23,block24,block25;

var hexa,hexa_img,chain;
var bg,backgroundImage;
var score = 0;
function preload(){
  hexa_img= loadImage("hexa.png");
  getBackgroundImage();

}

function setup() {
createCanvas(800, 600);

  engine = Engine.create()
	world = engine.world

  ground=new Ground(400,580,1000,20);
  minig1= new Ground(640,250,220,20);
  minig2= new Ground(330,450,250,20);

  block1= new Block(240,425,30,30);
  block2= new Block2(270,425,30,30);
  block3= new Block(300,425,30,30);
  block4= new Block2(330,425,30,30);
  block5= new Block(360,425,30,30);
  block6= new Block2(390,425,30,30);
  block7= new Block(420,425,30,30);

  block8= new Block(270,395,30,30);
  block9= new Block2(300,395,30,30);
  block10= new Block(330,395,30,30);
  block11= new Block2(360,395,30,30);
  block12= new Block(390,395,30,30);

  block13= new Block(300,365,30,30);
  block14= new Block2(330,365,30,30);
  block15= new Block(360,365,30,30);

  block16= new Block(330,335,30,30);

  block17= new Block2(580,225,30,30);
  block18= new Block(610,225,30,30);
  block19= new Block2(640,225,30,30);
  block20= new Block(670,225,30,30);
  block21= new Block2(700,225,30,30);

  block22= new Block2(610,195,30,30);
  block23= new Block(640,195,30,30);
  block24= new Block2(670,195,30,30);

  block25= new Block2(640,165,30,30);

hexa=Bodies.circle(50,200,20);
World.add(world,hexa);

chain= new Chain(hexa,{x:150,y:200})

  Engine.run(engine);
  }
function draw() {
  rectMode(CENTER);
  if(backgroundImage)
  background(backgroundImage);
  noStroke();
  Engine.update(engine);
  strokeWeight(2);
  textSize(35);
  fill("red");
  text("Score :"+ score, width-300,50);  
  strokeWeight(2);
  stroke(15);
 ground.display();
 minig1.display();
 minig2.display();
 stroke(15);
 fill("black")
 block1.display();
 block1.score(); 
 block2.display();
 block2.score();
 block3.display()
 block3.score();
 block4.display();
 block4.score();
 block5.display();
 block5.score();
 block6.display();
 block6.score();
 block7.display();
 block7.score();
 block8.display();
 block8.score();
 block9.display();
 block9.score();
 block10.display();
 block10.score();
 block11.display();
 block11.score();
 block12.display();
 block12.score();
 block13.display();
 block13.score();
 block14.display();
 block14.score();
 block15.display();
 block15.score();
 block16.display();
 block16.score();
 block17.display();
 block17.score();
 block18.display();
 block18.score();
 block19.display();
 block19.score();
 block20.display();
 block20.score();
 block21.display();
 block21.score();
 block22.display();
 block22.score();
 block23.display();
 block23.score();
 block24.display();
 block24.score();
 block25.display();
 block25.score();
 chain.display();
 //fill("gold")
 imageMode(CENTER)
 image(hexa_img,hexa.position.x,hexa.position.y,40,40)
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(hexa,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    chain.attach(this.hexa);
  }
}
 async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON);
  var datetime= responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour)
 if(hour>=06 && hour<=18){
   bg= "images/morning.png";
  }
  else{
    bg = "images/night.webp";
  }
  backgroundImage = loadImage(bg);
}