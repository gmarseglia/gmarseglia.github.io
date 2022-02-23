back = 0, fore = 255, mode = 0;
lastP = null;
//mode: 0 (create), 1 (edit), 2 (tracing)
var ps = [];
var walls = [];

function setup(){
    createCanvas(800,400);
    r = 5;
    //t = new Tracer(500,1000);
    t = new Seeker();
}

function draw(){
    background(back);
    fill(fore);
    for(i=0; i<ps.length; i++){
        ps[i].show();
    }
    for(i=0; i<walls.length; i++){
        walls[i].show();
    }
    t.show(ps, walls);
}

function changeBack(){
    tmp = back;
    back = fore;
    fore = tmp;
}

function points(p){
    //console.log( distance(mouse(), p) );
    if(distance(mouse(), p) < 4){
        fill(fore);
        ellipse(p[0], p[1], 8, 8)
    } else {
        fill(255/2);
        ellipse(p[0], p[1], 5, 5);
    }
}

function mousePressed(){
    if(mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <=height){
        if(mode == 0){
            p = new Point(mouseX, mouseY, r);
            if(lastP != null){
                wall = new Wall(p, lastP);
                walls.push(wall);
            }
            lastP = p;
            ps.push(p);
        }     
    }
}

function changeMode(){
    modes = ["Create" , "Edit", "Tracing"];
    mode++;
    if(mode >= modes.length){
        mode = 0;
    }
    document.getElementById("mode").innerHTML = modes[mode];
}

function distance(a, b){
    a = Math.abs(( ((a[0]- b[0])**(2)) + ((a[1] - b[1])**(2)) )**(0.5));
    return a;
}

function mouse(){
    return [mouseX, mouseY];
}

function clearAll(){
    /*while(ps.length>0){
        ps.pop()
    }
    while(walls.length>0){
        walls.pop()
    }*/
    ps.length = 0;
    walls.length = 0;
    lastP = null;
}
