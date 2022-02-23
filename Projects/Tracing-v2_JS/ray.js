class Ray{

    constructor(angle, r){
        this.angle = angle;
        this.r = r;
        this.x2 = this.r * Math.cos(angle);
        this.y2 = this.r * Math.sin(angle);
        //console.log(this.angle, this.x2, this.y2);
    }

    show(walls){
        let x1 = mouseX;
        let y1 = mouseY;
        let truep = null;
        let truedist = Infinity;
        //console.log(walls);  
        stroke(fore);
        //line(x1,y1,x1+this.x2,y1+this.y2);
        let x2 = x1 + this.x2;
        let y2 = y1 + this.y2;
        for(let i = 0; i < walls.length; i++){
            let x3 = walls[i].a.x;
            let y3 = walls[i].a.y;
            let x4 = walls[i].b.x;
            let y4 = walls[i].b.y;
            let t, u;
            t = ((x1 - x3)*(y3 -y4) - (y1-y3)*(x3-x4))/( (x1-x2)*(y3-y4) - (y1-y2)*(x3-x4) );
            u = ((x1 - x2)*(y1 -y3) - (y1-y2)*(x1-x3))/( (x1-x2)*(y3-y4) - (y1-y2)*(x3-x4) );
            let newX = x1 + t*(x2-x1);
            let newY = y1 + t*(y2-y1);
            if(u > -1 && u < 0 && t > 0 && t < 1){
                p = [newX, newY];
                if(truep == null || distance(p, [x1,y1])<truedist){
                    truep = p;
                    truedist = distance(p, [x1,y1]);
                }
            }
        }
        //console.log(ps);
        if(truep != null){
            line(x1, y1, truep[0], truep[1]);
        } else {
            line(x1, y1, x2, y2);
        }
        
        
    }
}