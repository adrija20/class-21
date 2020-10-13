var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(300,300,50,60);
  gameObject1.shapeColor="blue";
  gameObject1.debug=true;
  gameObject2=createSprite(500,100,70,70);
  gameObject2.shapeColor="white";
  gameObject2.debug=true;
  gameObject3=createSprite(200,150,50,50);
  gameObject3.shapeColor="pink";
  gameObject3.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,gameObject3)){
  movingRect.shapeColor = "yellow";
  gameObject3.shapeColor = "yellow";
}
else{
  movingRect.shapeColor = "green";
  gameObject3.shapeColor = "green";
}
  drawSprites();
}
