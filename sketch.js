let p;
let pManager;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = new Player();
  pManager = new ProjManager();
}

function draw() {
  background(91);
  p.show();
  pManager.show();
  if (p.shooting) {
    p.shoot(mouseX, mouseY);
  }
  stroke(0);
  text(Math.floor(frameRate()*100)/100+" FPS",width-100,10);
  drawSprayArea();

}

function drawSprayArea() {

  stroke(255, 0, 0);
  line(p.pos.x, p.pos.y, mouseX, mouseY);

  // spray edge 1
  let newDir = createVector(mouseX, mouseY).sub(p.pos.x, p.pos.y);
  let edgeOne = newDir.rotate(radians(p.angle));
  stroke(0, 255, 0);
  line(p.pos.x, p.pos.y,p.pos.x+edgeOne.x, p.pos.y+edgeOne.y);
  // spray edge 2
  let edgeTwo = newDir.rotate(radians(-2*p.angle));
  stroke(0, 0, 255);
  line(p.pos.x, p.pos.y ,p.pos.x+edgeTwo.x, p.pos.y+edgeTwo.y);
}

function mousePressed() {
  p.shooting = true;

}

function mouseReleased() {
  p.shooting = false;
}