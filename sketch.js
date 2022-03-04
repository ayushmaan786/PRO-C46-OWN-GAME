var plane 
var ground, invisibleGround, groundImage, shipImage,obstacleImage, bulletImage;
var obstaclesGroup, bulletsGroup;
var edges, obstacle, bullet;
var fc;
var ft = true
function preload()
{
  
  groundImage = loadImage("bgImage.jpg");
  shipImage = loadImage("gameSpaceship.png");
  obstacle1 = loadImage("obsImage.png")
  obstacle2 = loadImage("obsImage2.png")
  bulletImage = loadImage("bulletImage.png")
} 
function setup() {
  createCanvas(1400,500);
  ground = createSprite(width/2,height/2,2*width,height);
  ground.scale = 1.5
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -3
  obstaclesGroup = new Group()
  bulletsGroup = new Group()
  edges = createEdgeSprites(); 
  
  plane = createSprite(60, 250, 50, 50);
  plane.addImage("plane",shipImage)

}

function draw() {
  background("yellow"); 
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  plane.y = mouseY
  console.log(frameCount)
  if(keyDown("space")&& (ft||fc == frameCount-60)){

    fc = frameCount
    console.log(fc)
    ft = false
    spawnBullets()
  }
 spawnObstacles()
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(1250,random(50,height-50) ,10,40);
    obstacle.velocityX = -3;
    obstacle.velocityY = random(-0.5,0.5)
  
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
     /* case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;*/
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.3;
    obstacle.lifetime = 500;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
    obstaclesGroup.bounceOff(edges[2])
    obstaclesGroup.bounceOff(edges[3])
    }}

  
function spawnBullets() {
   
      var bullet = createSprite(plane.x+50,plane.y,10,40);
      bullet.velocityX = 3;    
      //generate random obstacles
    
               
        bullet.addImage(bulletImage);
                
      
      //assign scale and lifetime to the obstacle           
      bullet.scale = 0.3;
      bullet.lifetime = 500;
      //add each obstacle to the group
      bulletsGroup.add(bullet);
    }
