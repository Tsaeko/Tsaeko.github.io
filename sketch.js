let p;

function setup() {
  createCanvas(400, 400);
  p = new Player();
  pManager= new ProjManager();
}

function draw() {
  background(220);
  p.show();
  pManager.show();
  if(p.shooting){
  p.shoot(mouseX, mouseY);
  }
}

function mousePressed() {
  p1.shooting=true;
  
}
function mouseReleased(){
  p1.shooting=false;
}
