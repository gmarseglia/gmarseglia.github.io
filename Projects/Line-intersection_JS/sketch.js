let width = 600, height = 400;

function setup() {
    createCanvas(width, height);
    us = createVector(0, 0);
    ud = createVector(width, 0);
    ds = createVector(0, height);
    dd = createVector(width, height);
}

var ps = [];
var ls = [];
var inter = [];
var us, ud, ds, dd, walled = 0, waiting = false;

function draw() {

    background(0);

    for (var i = 0; i < ps.length; i++) {
        noStroke();
        fill(255);
        ellipse(ps[i].x, ps[i].y, 5);
    }

    for (var j = 0; j < ls.length; j++) {
        let l = ls[j];
        stroke(255);
        strokeWeight(2);
        multiLine("mq", l);
    }

    for (let i = 0; i < inter.length; i++) {
        noStroke();
        fill(255, 0, 0);
        ellipse(inter[i].x, inter[i].y, 6);
    }

    if (waiting) {
        noStroke();
        fill(255 / 2);
        ellipse(waiting.x, waiting.y, 5);
        ellipse(mouseX, mouseY, 5);
        strokeWeight(1);
        stroke(255 / 2);
        multiLine("ppl", waiting, mouseX, mouseY);
    }
}

function mouseClicked() {
    if (compr(mouseX, width) && compr(mouseY, height)) {
        ps.push(createVector(mouseX, mouseY));
        if (ps.length % 2 == 0 && ps.length != 0) {
            waiting = false;
            lineFromP(ps[ps.length - 1], ps[ps.length - 2]);
        } else if (ps.length % 2 == 1) {
            waiting = createVector(mouseX, mouseY);
        }
    }
}