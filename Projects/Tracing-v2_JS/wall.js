class Wall{

    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    show(){
        stroke(fore);
        strokeWeight(r/4);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }

}