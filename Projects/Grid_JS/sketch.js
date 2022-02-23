function setup() {
    frameRate(60);
    gridIndex = 8;
    gridSize = 50;
    createCanvas(gridIndex * gridSize, gridIndex * gridSize);
    horizontalPoints = [];
    verticalPoints = [];
    for (let i = 0; i <= gridIndex; i++) {
        value = i * gridSize;
        horizontalPoints.push(value);
        verticalPoints.push(value);
    }
    colorName = 255;
    selected = false;
    selectedSquare = createVector();
    pathToSquare = [];
}

function draw() {
    background(200);

    fill(0);
    for (x = 0; x < gridIndex; x++) {
        for (y = 0; y < gridIndex / 2; y++) {
            rect(horizontalPoints[x], verticalPoints[2 * y + x % 2], gridSize, gridSize);
        }
    }

    fill(colorName, 255 - colorName, 0);
    indexMouseX = Math.floor(mouseX / gridSize);
    indexMouseY = Math.floor(mouseY / gridSize);

    if (!selected) {
        if (indexMouseX >= 0 && indexMouseX < gridIndex && indexMouseY >= 0 && indexMouseY < gridIndex) {
            rect(horizontalPoints[indexMouseX], verticalPoints[indexMouseY], gridSize, gridSize);
            selectable = true;
        } else {
            selectable = false;
        }
    } else {
        rect(horizontalPoints[selectedSquare.x], verticalPoints[selectedSquare.y], gridSize, gridSize);
    }
}

function mouseClicked() {
    if (selectable) {
        if (colorName == 255) {
            colorName = 0;
            selectedSquare.x = indexMouseX;
            selectedSquare.y = indexMouseY;
            
            for (t = 0; t < Math.log(gridIndex) / Math.log(2); t++) {
                xAdder = gridIndex / Math.pow(2, t+1), yAdder = xAdder;
                for (j = 0; j < t; j++) {
                    if(pathToSquare[j].x == true){
                        xAdder += gridIndex / Math.pow(2, j+1);
                    }
                    if(pathToSquare[j].y == true){
                        yAdder += gridIndex / Math.pow(2, j+1);
                    }
                }
                pathToSquare.push(createVector(selectedSquare.x >= xAdder, selectedSquare.y >= yAdder));
            }
            
            console.log(pathToSquare);
            selected = true;
        } else {
            colorName = 255;
            selected = false;
            pathToSquare = [];
        }
    }
}