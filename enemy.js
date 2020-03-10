class Enemy {
    constructor() {

        this.pos;

        let area = floor(random(3));

        if (area == 0) {
            this.pos = createVector(10 + random(width - 10), random(10, height * 0.2));
        }
        if (area == 1) {
            if (random(1) >= 0.5) {
                this.pos = createVector(random(10, 0.2 * width - 10), random(10 + height * 0.2, height * 0.8 - 10));
            } else {
                this.pos = createVector(random(0.8 * width - 10, width - 10), random(10 + height * 0.2, height * 0.8 - 10));
            }

        }
        if (area == 2) {
            this.pos = createVector(random(10, width - 10), random(10 + height * 0.8, height - 10));
        }

        this.projCount = 1;
        this.projSpeed = 2.4;
        this.angle = 10;
        this.shooting = false;
        this.hp = 100;
        this.size = 20;

        this.speed = random(0.1, 0.6);



        this.orbitDistance = random(50,0.49*Math.min(width,height));



        this.angle = random(0, 360);
    }

    show() {
        circle(this.pos.x, this.pos.y, this.size);

        if (frameCount % 30 == 0) {
            this.shooting = true;
        } else {
            this.shooting = false;
        }

    }
    shoot() {

        for (let pCounter = 0; pCounter < this.projCount; pCounter++) {

            let newDir = createVector(p.pos.x, p.pos.y).sub(this.pos.x, this.pos.y);
            newDir = newDir.rotate(radians(random(-this.angle, this.angle)));

            pManager.add(this, this.pos.x + newDir.x, this.pos.y + newDir.y);

        }
    }

    move() {
        this.angle = (this.angle + radians(this.speed)) % TWO_PI;
        this.pos.x = width / 2 + cos(this.angle) * this.orbitDistance;
        this.pos.y = height / 2 + sin(this.angle) * this.orbitDistance;
    }

}