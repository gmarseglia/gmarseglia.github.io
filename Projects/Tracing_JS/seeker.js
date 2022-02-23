class Seeker{

    constructor(){
        
    }

    show(ps, walls){
        if(walls.length > 0 && mode == 2){
            fill(fore)
            ellipse(mouseX, mouseY, 8,8);
            var x1 = mouseX;
            var y1 = mouseY;
            var t,u, check;

            for(var i = 0; i < ps.length; i++){
                check = 0;
                var x2 = ps[i].x;
                var y2 = ps[i].y;
                for(var j = 0; j < walls.length; j++){
                    var x3 = walls[j].a.x;
                    var y3 = walls[j].a.y;
                    var x4 = walls[j].b.x;
                    var y4 = walls[j].b.y;
                    if(walls[j].a != ps[i] && walls[j].b != ps[i]){
                        t = ( ((y3-y4)*(x1-x3)) + ((x4-x3)*(y1-y3)) ) / ( ((x4-x3)*(y1-y2)) - ((x1-x2)*(y4-y3)) );
                        u = ( ((y1-y2)*(x1-x3)) + ((x2-x1)*(y1-y3)) ) / ( ((x4-x3)*(y1-y2)) - ((x1-x2)*(y4-y3)) );
                        if(u>=0 && u<= 1 && t >= 0 && t<=1){
                            check = 1;
                        }
                    }
                }
                if(check == 0){
                    stroke(0,255,0);
                    line(x1,y1,x2,y2);
                }
            }
        }
    }

}