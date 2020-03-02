let p;

function setup() {
  createCanvas(400, 400);
  p = new player();
  pManager= new ProjManager();
}

function draw() {
  background(220);
  p1.show();
  pManager.show();
  if(p1.shooting){
  p1.shoot(mouseX, mouseY);
  }
}
