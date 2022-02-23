class Point {

    constructor(arg1, arg2 = 0, arg3 = 0, arg4 = 0) {
        if (typeof (arg1) == "number" && typeof (arg2) == "number") {
            this.x = arg1;
            this.y = arg2;
            if (typeof (arg3) == "number" && typeof (arg4) == "number") {
                this.vx = arg3;
                this.vy = arg4;
            } else if (typeof (arg3) == "object") {
                this.vx = arg3.x;
                this.vt = arg3.y;
            }
        } else if (typeof (arg1) == "object") {
            this.x = arg1.x;
            this.y = arg1.y;
            if (typeof (arg2) == "number" && typeof (arg3) == "number") {
                this.vx = arg2;
                this.vy = arg3;
            } else if (typeof (arg2) == "object") {
                this.vx = arg2.x;
                this.vt = arg2.y;
            }
        }
        this.r = 4;
        this.px = this.x;
        this.py = this.y;
    }

    update() {
        this.px = this.x;
        this.py = this.y;
        this.x += this.vx;
        this.y += this.vy;
    }

    show() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.r * 2);
    }

    lines() {
        strokeWeight(0.5);
        stroke(255/2);
        multiLine("ppll", this.x, this.y, this.x + 1, this.y + 1);
        multiLine("ppll", this.x, this.y, this.x + 1, this.y - 1);
    }
}