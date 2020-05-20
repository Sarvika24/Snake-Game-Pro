var object ; 
var scl = 20 ;
var food ;

function setup(){
  createCanvas(500,500);
   object  = new Snake();
   frameRate(10);
   grow();
}

function grow(){
  var columns = floor(width/scl);
  var rows  = floor(height/scl); 
  food = createVector(floor(random(columns)), floor(random(rows)));
  food.mult(scale); 
}



function draw(){
background("pink");
object.update();
object.show();

      if (object.eat(food)){
         grow();
      }

     

fill("red")
rect (food.x , food.y , scl ,scl)
}

function keyPressed()
    {

if (keyCode === UP_ARROW)
{
   object.dir(0,-1);
}

else if (keyCode=== DOWN_ARROW)
{
  object.dir(0,1);
}

 else if (keyCode === RIGHT_ARROW)
{
   object.dir(1,0);
}

else if(keyCode === LEFT_ARROW)
{
    object.dir(-1,0);
}

    }

 