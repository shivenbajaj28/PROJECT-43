const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Global variables
var army, army_Img, army_leftImg, army_rightImg;
var terrorist, terrorist_Img, terroristWhenDie_Img;
var background_Img;
var distance = 0;

function preload(){
    army_leftImg = loadImage("Images/Army_left.png");
    army_rightImg = loadImage("Images/Army_right.png");
	terrorist_Img = loadImage("Images/Terrorist.png");
	terroristWhenDie_Img = loadImage("Images/Terrorist_whendie.png");
    background_Img = loadImage("Images/Background.png");
    bulletImg = loadImage("Images/Bullet.png");
}

function setup(){
	createCanvas(displayWidth, displayHeight - 115);
	engine = Engine.create();
	world = engine.world;

    bullet = Bodies.circle(displayWidth/2-200, displayHeight/2+200, 20);
    bullet.addImage(bulletImg);
    army = new Army(displayWidth/2-300, displayHeight/2+100);

	Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background(background_Img);
  drawSprites();
  Armyfire();
  spawnTerrorist();
  
  //displaying the objects
  army.display();
  ellipseMode(RADIUS);
  ellipse(bullet.position.x, bullet.position.y, 20, 20);

	if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
        army.addImage(army_leftImg);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
        army.addImage(army_rightImg);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    army.x = army.x + x;
    army.y = army.y + y;
}

function Armyfire(){
    if(keyCode === 32){
        bullet.velocityX = 5;
    }
}

function spawnTerrorist(){
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        terrorist = new Terrorist(random(displayWidth/2+300, displayWidth/2+800), displayHeight/2+100, 10, 10);
        switch(rand){
            case 1: terrorist.display();
            break;
            case 2: terrorist.display();
            break; 
            case 3: terrorist.display();
            break;
            case 4: terrorist.display();
            break;
            default: break;
        }
    }
}