class Player {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.projCount = 5;
    this.angle = 40;
    this.shooting = false;
    this.hp = 100;
    this.size = 20;
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
    text("HP:" + this.hp, 40, 10);
  }
}