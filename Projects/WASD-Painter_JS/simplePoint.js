class simplePoint {

    constructor(width, height) {
        this.x = width / 2;
        this.y = height / 2;
        this.vx = 0;
        this.vy = 0;
        this.r = 5;
        this.rate = 6;
    }

    update() {
        this.vx = 0;
        this.vy = 0;
        if (keyIsDown(87)) {
            this.vy = -1;
        } if (keyIsDown(65)) {
            this.vx = -1;
        } if (keyIsDown(83)) {
            this.vy = +1;
        } if (keyIsDown(68)) {
            this.vx = +1;
        } if (keyIsDown(16)) {
            this.vx *= 3;
            this.vy *= 3;
        }
        this.x += this.vx;
        this.y += this.vy;
    }

    show() {
        let color = 255;
        if (!spacePressed) {
            color /= 3;
        }
        noStroke();
        fill(color);
        ellipse(this.x, this.y, this.r * 2);
    }

    getPosition() {
        return createVector(this.x, this.y);
    }

    getRefreshRate() {
        if (keyIsDown(16)) {
            return this.rate / 3;
        }
        return this.rate;
    }
}