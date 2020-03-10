let p;
let pManager;
let angleSlider;
let enemies =[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = new Player();
  pManager = new ProjManager();
  angleSlider=createSlider(0,180,40,1);

  for(let i=0;i<10;i++){
    enemies.push(new Enemy());
  }
}

function draw() {
  background(91);
  p.angle=angleSlider.value();
  p.show();
  let deadEnemies=[];
  for(let enemy of enemies){
    enemy.show();
    if(enemy.shooting){
      enemy.shoot(p.pos.x,p.pos.y);
    }
    enemy.move();
    if(enemy.hp<=0){
      deadEnemies.push(enemy);
    }
  }
  enemies = enemies.filter(function (el) {
    return !deadEnemies.includes(el);
  });

  pManager.show();
  if (p.shooting) {
    p.shoot(mouseX, mouseY);
  }
  pManager.checkCollision();
  stroke(0);
  text(Math.floor(frameRate()*100)/100+" FPS",width-100,10);
  let tx=10;
  let i=1;
  for(let en of enemies){
    text(i+": "+en.hp,800,tx);
    tx+=10;
    i++;
  }
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