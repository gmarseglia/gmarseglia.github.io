class newLine {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.m = (p1.fakey - p2.fakey) / (p1.x - p2.x);
        this.q = p1.fakey - this.m * p1.x;
        this.long = false;
    }

    show() {
        stroke(255);
        strokeWeight(3);
        if (mouseIsPressed) {
            line(0, this.q, width, this.m * width + this.q);
        } else {
            line(this.p1.x, this.p1.fakey, this.p2.x, this.p2.fakey);
        }
    }
}