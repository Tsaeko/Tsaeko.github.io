 class ProjManager {
    constructor() {
      this.projs = [];
    }
    add(source, targetX, targetY) {
      this.projs.push(new Projectile(source, createVector(targetX, targetY)));
    }
    show() {
      for (let proj of this.projs) {
        stroke(0,50);
        proj.show();
        proj.move();
      }
    }
  }
