 class ProjManager {
    constructor() {
      this.projs = [];
    }
    add(source, targetX, targetY) {
      this.projs.push(new Projectile(source, createVector(targetX, targetY)));
    }
    show() {
      let discardList=[];
      for (let proj of this.projs) {

        proj.show();
        proj.move();
        if(proj.pos.x < 0 || proj.pos.x>width|| proj.pos.y<0 || proj.pos.y>height){
          discardList.push(proj);
        }
      }
      this.projs = this.projs.filter( function (el){
        return !discardList.includes(el);
      });

    }
  }
