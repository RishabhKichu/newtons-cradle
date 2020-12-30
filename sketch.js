const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, top_part, b1, b2, b3, b4;
var r1, r2, r3, r4;
function preload() {}

function setup() {
  createCanvas(1250, 600);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.'

  ground = new Ground(625, 580, 10000, 40);
  top_part = createSprite(625, 100, 700, 30);
  top_part.shapeColor = "white";
  b1 = new Paper(500, 350, 30);

  r1 = new Rope(b1.body, top_part.body, 500, 110);
  b2 = new Paper(560, 350, 30);

  r2 = new Rope(b2.body, top_part.body, 560, 110);
  b3 = new Paper(620, 350, 30);

  r3 = new Rope(b3.body, top_part.body, 620, 110);
  b4 = new Paper(680, 350, 30);

  r4 = new Rope(b4.body, top_part.body, 680, 110);
  b5 = new Paper(740, 350, 30);

  r5 = new Rope(b5.body, top_part.body, 740, 110);
  Engine.run(engine);
}

function draw() {
  background(51);
  rectMode(CENTER);
  ground.display();
  b1.display();
  r1.display();
  b2.display();
  r2.display();
  b3.display();
  r3.display();
  b4.display();
  r4.display();
  b5.display();
  r5.display();
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(b1.body, b1.body.position, {
      y: 100,
      x: -170,
    });
  }
}
