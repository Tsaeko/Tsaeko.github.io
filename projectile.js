 class Projectile {
   constructor(source, target) {
     this.source = source;
     this.pos = createVector(source.pos.x, source.pos.y);
     this.speed=source.projSpeed;
     this.dir = target.sub(this.pos);
     this.size=5;
   }
   show() {
     if(this.source instanceof Player){
     // stroke(255,0,0,55);
      fill(0,25,255,55);
     }
     if(this.source instanceof Enemy){
     // stroke(255,0,0,55);
      fill(255,0,0,55);
     }

     circle(this.pos.x, this.pos.y, this.size);
   }
   move() {
     this.dir.normalize();
     this.dir.mult(this.speed,this.speed);
     this.pos.add(this.dir);
   }
 }