//namespacing
const E = Matter.Engine
const W = Matter.World
const B = Matter.Bodies

var en, wo 
var ground

function setup(){
  createCanvas(400,400);

//create the engine
  en = E.create()

 //calling the world from the engine
  wo = en.world

  var option = {isStatic : true}
  ground = B.rectangle(200,360,400,10, option)
  W.add(wo, ground)
  
}
function draw(){
  background(0);
 E.update(en)
  rectMode(CENTER)
  rect(200,200,50,50);

  rect(ground.position.x, ground.position.y, 400,10)
  
}

//rectangle => rect()
//circle => ellipse()