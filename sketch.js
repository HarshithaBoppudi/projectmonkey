var bananaImage,obstacleImage,obstaclegroup,monkey_running;
var backGround,score,monkey,Ground, Ground_running,bananaGroup,backGround_image;


function preload(){
  backGround=loadImage("jungle.jpg");
  monkey_running=loadAnimation("Monkey_03.png","Monkey_02.png",
 "Monkey_01.png","Monkey_10.png","Monkey_08.png",            "Monkey_09.png","Monkey_07.png","Monkey_05.png",       "Monkey_06.png","Monkey_04.png" );
   bananaImage=loadImage("Banana.png");
  obstacleImage=loadImage("stone.png");
  Ground_running=loadImage("ground.jpg")
 
}


function setup() {
  createCanvas(600,300);
   monkey = createSprite(50,250,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  Ground = createSprite(60,250,400,20);
  Ground.addImage("groundS",Ground_running); 
  Ground.velovityX=3;
  Ground.x = Ground.width /2;
 bananaGroup=new Group();
    
  
}


function draw(){
 background(backGround); 
   backGround.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
   if(keyDown("space")) {
    monkey.velocityY = -10;
    
   }
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  monkey.collide(Ground);
   spawnbanana(); 
  drawSprites();
}
function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    banana=createSprite(100,140,10,10)
  banana.addImage("food", bananaImage)
  banana.scale=0.050;
    
    banana.y = Math.round(random(50,250));
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
   
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}