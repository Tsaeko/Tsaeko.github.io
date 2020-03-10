class Player {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.projCount = 5;
    this.projSpeed = 1.2;
    this.angle = 40;
    this.shooting = false;
    this.hp = 100;
    this.size = 20;
    this.info = new PlayerInfo(this);
  }
  shoot() {
    // while mousePressed, shoot projCount projectiles every frame with angle deviation (spray)


    for (let pCounter = 0; pCounter < this.projCount; pCounter++) {



      let newDir = createVector(mouseX, mouseY).sub(p.pos.x, p.pos.y);
      newDir = newDir.rotate(radians(random(-this.angle,this.angle)));

      pManager.add(this, this.pos.x + newDir.x, this.pos.y + newDir.y);

    }
  }
  show() {
    stroke(0);
    circle(this.pos.x, this.pos.y, this.size);
    this.info.show();
  }

}

class PlayerInfo {

  constructor(player) {
    this.player = player;
    this.pos = createVector(40, 10);
    this.textDelta = 10;
  }

  show() {
    let x = this.pos.x;
    let y = this.pos.y;
    let pl = this.player;
    let textDelta = this.textDelta;
    text("HP: " + pl.hp, x, y + textDelta);
    text("Projectiles: " + pl.projCount, x, y + textDelta * 2);
    text("ProjectileSpeed: " + pl.projCount, x, y + textDelta * 2);
    text("Accuracy: " + (100 - pl.angle) + "%", x, y + textDelta * 3);
    text("Position: (" + x + "," + y + ")", x, y + textDelta * 4);
  }

}