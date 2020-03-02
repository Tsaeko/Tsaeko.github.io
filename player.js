
class player {

  constructor() {

    this.hp = 100;
    this.pos = createVector(width / 2, height / 2);
    this.size = 20;
  }

  show() {
    circle(this.pos.x, this.pos.y, this.size);
    text("HP:" + this.hp, 40, 10);
  }




}
