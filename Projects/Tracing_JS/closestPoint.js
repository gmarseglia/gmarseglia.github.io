back = 0, fore = 255, cl = 0;
ps = new Array();

function setup(){
    createCanvas(400,400);
    noStroke();
}

function draw(){
    background(back);
    fill(fore);
    ps.forEach(points);
    if(cl != 0){
        liner2(ps, width/4);
    }
    polygon(ps);
}

function liner(ps){
    function findClosest(p){
        distance = Math.abs(((p[0]-mouseX)**(2) + (p[1]-mouseY)**(2))**(0.5));
        if(distance < dist){
            dist = distance;
            closest = p;
        }
    }
    dist = Infinity;
    closest = [];
    ps.forEach(findClosest)
    stroke(fore);
    line(closest[0], closest[1], mouseX, mouseY);
}

function liner2(ps, dist){

    function findInRange(p){
        distance = Math.abs(((p[0]-mouseX)**(2) + (p[1]-mouseY)**(2))**(0.5));
        if(distance < dist){
            closest.push(p);
        }
    }

    function linee(p){
        stroke(255/2);
        line(p[0], p[1], mouseX, mouseY);
    }

    closest = [];
    stroke(255/2);
    noFill();
    ps.forEach(findInRange);
    closest.forEach(linee);
    ellipse(mouseX, mouseY, dist*2, dist*2);
}

function mouseLine(p){
    stroke(fore);
    line(mouseX, mouseY, p[0], p[1]);
}

function polygon(ps){
    for(i=0; i<(ps.length-1); i++){
        stroke(fore);
        line(ps[i][0], ps[i][1], ps[i+1][0], ps[i+1][1]);
    }
    if(ps.length > 2 && cl){
        line(ps[ps.length - 1][0], ps[ps.length - 1][1], ps[0][0], ps[0][1]);
    }
    noStroke();
}

function changeBack(){
    t = back;
    back = fore;
    fore = t;
}

function points(p){
    fill(fore);
    ellipse(p[0], p[1], 5, 5);
}

function mousePressed(){
    if(mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <=height){
        ps.push([mouseX, mouseY]);
    }
}

function closeLoop(){
    if(cl == 0){
        closer = document.getElementById("closer").innerHTML = "Open";
    } else {
        closer = document.getElementById("closer").innerHTML = "Close";
    }
    cl = (cl == 0 ? 1 : 0);
}
