const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var leftWall;
var rightWall;
var top_wall;

var left;
var right;
var up;

var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  rightWall = new Ground(390,200,20,400);
  leftWall = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {
  "restitutuion" : 2,
   "frictionAir" : 0.8,
   "density" : 0.6
  }
 
  ball = Bodies.circle(200, 200 , 20, ball_options);
  World.add(world, ball);

  right = createImg("right.png");
  right.position(100, 20);
  right.size(50, 50);
  right.mouseClicked(HForce);

  left = createImg("push.png");
  left.position(300, 20);
  left.size(50, 50);
  left.mouseClicked(LForce);


  up = createImg("up.png");
  up.position(200, 20);
  up.size(50, 50);
  up.mouseClicked(UForce);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  leftWall.show();
  rightWall.show();
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20, 20);

}

function HForce() {
  Matter.Body.applyForce(ball,{x : 0, y : 0}, {x :10.5, y : 5});

}

function LForce() {
  Matter.Body.applyForce(ball,{x : 0, y : 0}, {x : -10.5, y : 5});
}

function UForce() {
  Matter.Body.applyForce(ball,{x : 0, y : 0}, {x : 5, y : -10.5});
}
