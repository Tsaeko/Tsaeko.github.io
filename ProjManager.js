 class ProjManager {
   constructor() {
     this.projs = [];
   }
   add(source, targetX, targetY) {
     this.projs.push(new Projectile(source, createVector(targetX, targetY)));
   }
   show() {
     let discardList = [];
     for (let proj of this.projs) {

       proj.show();
       proj.move();
       if (proj.pos.x < 0 || proj.pos.x > width || proj.pos.y < 0 || proj.pos.y > height) {
         discardList.push(proj);
       }
     }
     this.projs = this.projs.filter(function (el) {
       return !discardList.includes(el);
     });
     stroke(0);
     text("Projectiles in play: " + this.projs.length, 200, 10);
   }
   checkCollision() {
    let collideList=[];
     for (let proj of this.projs) {
       if (proj.source instanceof Player) {

        for(let en of enemies){
          let dx = proj.pos.x - en.pos.x;
          let dy = proj.pos.y - en.pos.y;
          dx= dx*dx;
          dy= dy*dy;
          if(dx+dy< en.size){
            en.hp-=1;
            collideList.push(proj);
           fill(0,0,255,50);
          circle(en.pos.x,en.pos.y,en.size*2);
          }
        }

       } else if (proj.source instanceof Enemy) {
        let dx = proj.pos.x - p.pos.x;
        let dy = proj.pos.y - p.pos.y;
        dx= dx*dx;
        dy= dy*dy;
        if(dx+dy< p.size){
          p.hp-=1;
          collideList.push(proj);
          fill(255,0,0,50);
          circle(p.pos.x,p.pos.y,p.size*2);
        }
       }
     }
     this.projs = this.projs.filter(function (el) {
      return !collideList.includes(el);
    });
   }
 }