var box;



function setup() {
  createCanvas(600,600);
  box=createSprite(350,350,50,50);
}

function draw() 
{
  background("darkblue");
  if(keyDown("RIGHT_ARROW")){
      box.position.x=box.position.x+5;
  }

  if(keyDown("LEFT_ARROW")){
    box.position.x=box.position.x-5;
}
if(keyDown("UP_ARROW")){
  box.position.y=box.position.y-5;
}
if(keyDown("DOWN_ARROW")){
  box.position.y=box.position.y+5;
}








  drawSprites();
}




