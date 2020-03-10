 class Projectile {
   constructor(source, target) {
     this.source = source;
     this.pos = createVector(source.pos.x, source.pos.y);
     this.speed=source.projSpeed;
     this.dir = target.sub(this.pos);
   }
   show() {
     stroke(0,15);
     fill(0,15);
     circle(this.pos.x, this.pos.y, 10);
   }
   move() {
     this.dir.normalize();
     this.dir.mult(this.speed,this.speed);
     this.pos.add(this.dir);
   }
 }