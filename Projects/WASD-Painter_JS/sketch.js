function setup() {
    width = 600;
    height = 400;
    createCanvas(width, height);
    p = new simplePoint(width, height);
    lastPoints = [-1];
    spacePressed = false;
}

function draw() {

    background(0);
    p.update();
    p.show();

    if (spacePressed) {
        if (frameCount % p.getRefreshRate() == 0 && !equal(lastPoints[lastPoints.length - 1], p.getPosition())) {
            lastPoints.push(p.getPosition());
            document.getElementById("number").innerHTML = lastPoints.length;
        }
    } else {
        if (lastPoints[lastPoints.length - 1] != -1) {
            lastPoints.push(-1);
        }
    }

    while(lastPoints.length > 1000) {
        lastPoints.shift();
    }


    for (let i = 0; i < lastPoints.length - 1; i++) {
        if (lastPoints[i] == -1 || lastPoints[i + 1] == -1) {
            continue;
        }
        strokeWeight(3);
        stroke(255);
        line(lastPoints[i].x, lastPoints[i].y, lastPoints[i + 1].x, lastPoints[i + 1].y);
    }

}

function keyPressed() {
    if (keyCode == 77) {
        spacePressed = !spacePressed;
    }
}

function equal(v1, v2) {
    if (typeof (v1) == "object" && typeof (v2) == "object") {
        return v1.x == v2.x && v1.y == v2.y;
    } else {
        return false;
    }

}

function clearLines() {
    console.log("clear intent");
    while (lastPoints.length > 1) {
        lastPoints.pop();
    }
    spacePressed = false;
    document.getElementById("number").innerHTML = lastPoints.length;
}