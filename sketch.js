var wall,thickness;
var  bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
 
 speed=random(223,331);
 weight=random(30,52);
 thickness=random(22,83);

 bullet = createSprite(50, 200, 50, 5);
 bullet.shapeColor="white";
wall = createSprite(1200,200,thickness, height/2);
wall.shapeColor=80,80,80;

bullet.velocityX=speed;
}

function draw() {
  background("black")
  
 if(hasCollided(bullet,wall))
 {
   bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
 
      
  if(damage>10)
 {
    wall.shapeColor="red"
 }
 
 if(damage<10)
 {
   wall.shapeColor="green"
 }

 }
 
 
  drawSprites();
}
function hasCollided(Lbullet,Lwall)
 {
 bulletRightEdge=bullet.x +bullet.width;
 wallLeftEdge=wall.x+wall.width;

if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
  return false;
} 
  
  
  
  
  
  
  
  
  
  
  
  