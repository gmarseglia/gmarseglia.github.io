class newPoint{
    constructor(x,y){
        this.x = x;
        this.realy = y;
        this.fakey = height - y;
        this.big = 3;
    }

    show(){
        noStroke();
        fill(255);
        ellipse(this.x, this.fakey, this.big);
    }
}