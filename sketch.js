var path,pathImg;
var runner;
var invisible,invisible1;



function preload(){
  pathImg = loadImage("path.png");
  
}

function setup(){
  createCanvas(400,400);

  path = createSprite(200,200);
  path.addImage("path",pathImg);

  runner = createSprite(200,150);
  runner.addAnimation("Runner-1.png","Runner-2.png","Runner-1.png","Runner-2.png");
  runner.scale = 0.1;

  invisible = createSprite(10,200,20,400);
  invisible.visible = false;

  invisible1 = createSprite(390,200,20,400);
  invisible1.visible = false;



}

function draw() {
  background("white");
  path.velocityY=4;
  path.scale=1.2;
  if(path.y > 400 ){
    path.y = height/2;
  }

  if(keyDown("left")){
    runner.x=runner.x-3;

  }

  if(keyDown("right")){
    runner.x=runner.x+3;
    
  }


  runner.collide(invisible);

  runner.collide(invisible1);

  drawSprites();
}
