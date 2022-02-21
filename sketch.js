
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,200,40,40,3,3);

}

function draw() 
{
  background(220);
box1.show();
box1.moveUp ();
box1.move();
}

