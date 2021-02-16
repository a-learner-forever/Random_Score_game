let jScore = 0, aScore = 0, bScore = 0, jaScore = 0;
let rand,r;
let count=0;
let gameState = 0;

function setup()
{
  createCanvas(400,400);
}

function draw()
{
  background("white");
  textSize(25);
  textAlign(CENTER);
  
  if(keyWentDown(UP_ARROW))
    {
     r = increase();
     count++;
    }
  
  text(r,200,180);
  if(gameState === 0)
    
    {
     switch(r)
        {
          
          case 0: jScore+=1;
                  break;
            
          case 1: aScore+=1;
                  break;
            
          case 2: bScore+=1;
                  break;
            
          case 3: jaScore+=1;
                  break;
            
          default: break;
          
        }
    }
      
  if(count<20)
    { 
      textSize(50);
      textAlign(CENTER);
      textSize(25);
      
      stroke("red");
      text("John (0)",width/2-10,height-380);
      
      stroke("green");
      text(jScore,width/2-10,height-350);
      
      stroke("red");
      text("Amie (1)",width-350,height-200);
      
      stroke("green");
      text(aScore,width-370,height-170);
      
      stroke("red");
      text("Bob (2)",width/2-10,height-35);
      
      stroke("green");
      text(bScore,width/2-10,height-5);
      
      stroke("red");
      text("Jamie (3)",width-55,height-200);
      
      stroke("green");
      text(jaScore,width-35,height-170);
    }
  
  else
    
  {     
   
    textSize(25);
    textAlign(CENTER);
    
    stroke("orange");
    strokeWeight(3);
    
    text("Game-Over",width/2,height/2);
      gameState = 1; 
     stroke("red");
      text("John",width/2-10,height-380);
      
      stroke("green");
      text(jScore,width/2-10,height-350);
      
      stroke("red");
      text("Amie",width-370,height-200);
      
      stroke("green");
      text(aScore,width-370,height-170);
      
      stroke("red");
      text("Bob",width/2-10,height-35);
      
      stroke("green");
      text(bScore,width/2-10,height-5);
      
      stroke("red");
      text("Jamie",width-35,height-200);
      
      stroke("green");
      text(jaScore,width-35,height-170);
  
  }
  
   
}

function increase()
{
 
    rand = Math.round(random(0,3));
    return(rand);
  
 
}
