let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
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
  p.shooting=true;
  
}
function mouseReleased(){
  p.shooting=false;
}
