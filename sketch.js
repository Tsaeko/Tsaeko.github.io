let p;

function setup() {
  createCanvas(400, 400);
  p = new player();
}

function draw() {
  background(220);
  p.show();
}
