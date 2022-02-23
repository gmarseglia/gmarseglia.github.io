class Point {

    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.p = [x,y];
        this.r = r;
        this.dragged = 0;
    }

    show(){
        if(mode == 1){
            this.edit();
        }
        stroke(back);
        strokeWeight(1);
        if( this.on() ){
            fill(fore);
            ellipse(this.x, this.y, this.r * 2, this.r * 2);
        } else {
            fill(255 * 1/2);
            ellipse(this.x, this.y, this.r  , this.r );
        }
    }

    on(){
        return (distance(mouse(), this.p) < this.r);
    }

    edit(){
        if(this.on() && mouseIsPressed || this.dragged && mouseIsPressed){
            this.dragged = 1;
            this.x = mouseX;
            this.y = mouseY;
            this.p = [mouseX, mouseY];
        } else {
            this.dragged = 0;
        }
    }
}