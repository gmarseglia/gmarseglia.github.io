
function setup(){

	halfNumberSquares = 15;
	sizeSquares = 10;
	zoom = 15;

	createCanvas((halfNumberSquares * 2 + 1) * sizeSquares, (halfNumberSquares * 2 + 1) * sizeSquares);
	setFrameRate(50);

	sMap = new map(zoom);
	sPlayer = sMap.addPlayer();
	sCamera = new camera(sMap, sPlayer);	
}

function draw(){
	background(0);
	sPlayer.walk();
	sCamera.show(sizeSquares, halfNumberSquares);
}