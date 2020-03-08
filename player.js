class Player {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.projCount = 5;
    this.angle = 40;
    this.shooting = false;
    this.hp = 100;
    this.size = 20;
    this.info = new PlayerInfo(this);
  }
  shoot() {
    let minSpray = 1 - (this.angle / 100);
    let maxSpray = 1 + (this.angle / 100);

    for (let pCounter = 0; pCounter < this.projCount; pCounter++) {
      let spray = random(minSpray, maxSpray);
      let dir = createVector(mouseX, mouseY);
      dir.mult(spray, spray);

      pManager.add(this, dir.x, dir.y);

    }
  }
  show() {
    circle(this.pos.x, this.pos.y, this.size);
    this.info.show();
  }

}

class PlayerInfo {

  constructor(player){
    this.player=player;
    this.pos =createVector(40,10);
  }

  show(){
    let x= this.pos.x;
    let y= this.pos.y;
    let pl =this.player;
    text("HP: "+pl.hp,x,y+10);
    text("Projectiles: ",x,y+20);
}

}