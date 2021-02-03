const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var block1
var block2
var block3
var block4
var block5
var block6
var block7
var block8
var block9
var block10
var block11
var block12
var block13
var block14
var block15
var block16
var block17
var block18
var block19
var block20
var block21
var block22
var block23
var block24
var block25

var poly
var rg
var rg2
var ground2

var chain


function preload()
{




}


function setup()
{
createCanvas(1300,800)
  engine = Engine.create();
  world = engine.world;


  createBlocks()

  poly = new Hexagon(80,550,20,20)
  
  rg = new Ground(390,470,240,10)

  rg2 = new Ground(725,200,170,10)

  ground3 = new Ground(40,600,2000000,10)

  chain = new Slingshot(poly.body, {x:150,y:400})
    
    
    Engine.run(engine);



}

function draw()
{
//   imageMode(CENTER)
  background("white")


   
  //  block1.display()
  //   block2.display()
  //   block3.display()
  //   block4.display()
  //   block5.display()
  //   block6.display()
  //   block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()
    block19.display()
    block20.display()
    block21.display()
    block22.display()
    block23.display()
    block24.display()
    block25.display()
  
  chain.display()


  poly.display()
  rg.display()
  rg2.display()
  ground3.display()
  


  drawSprites()
}
 function createBlocks()
    {
//       // bottom layers

// block1 = new Block(285,280,30,40,"blue")
//   block2 = new Block(315,280,30,40,"blue")
//   block3 = new Block(345,280,30,40,"blue")
//   block4 = new Block(375,280,30,40,"blue")
//   block5 = new Block(405,280,30,40,"blue")
//   block5 = new Block(435,280,30,40,"blue")
//   block6 = new Block(436,280,30,40,"blue")
//   block7 = new Block(466,280,30,40,"blue")

  //  second bottom layer

  block8 = new Block(330,440,30,40,"pink")
  block9 = new Block(360,440,30,40,"pink")
  block10 = new Block(390,440,30,40,"pink") 
  block11 = new Block(420,440,30,40,"pink")
  block12 = new Block(450,440,30,40,"pink")

  //  second top layer

  block13 = new Block(360,400,30,40,"cyan")
  block14 = new Block(390,400,30,40,"cyan")
  block15 = new Block(420,400,30,40,"cyan")

  // top 

  block16 = new Block(390,360,30,40,"grey")

  // end of this parameter

  // new block tower

  // thrid layer

  block17 = new Block(665,175,30,40,"blue")
  block18 = new Block(695,175,30,40,"blue")
  block19 = new Block(725,175,30,40,"blue")
  block20 = new Block(755,175,30,40,"blue")
  block21 = new Block(785,175,30,40,"blue")

  // second layer

  block22 = new Block(695,135,30,40,"cyan")
  block23 = new Block(725,135,30,40,"cyan")
  block24 = new Block(755,135,30,40,"cyan")
  // top 
  block25 = new Block(725,95,30,40,"pink")


  
   // the end of the blocks
}

function mouseDragged()
{
  console.log("mouse is dragging the poly")
  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  chain.fly()
}
function keyPressed()
{
  text("press space to launce the polygon back to place",200,200)
  if(keyCode == 32)
  { 
     
     chain.attach(poly.body)
     

  }
}