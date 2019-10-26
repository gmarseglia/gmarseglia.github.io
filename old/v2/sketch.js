function setup(){
	backgroundColor = 0;

	/*
		size: risoluzione
		numberOfTiles: numero di quadrati, deve essere dispari
		bigness: zoom della mappa
	*/
	size = 10;
	numberOfTiles = 40 + 1;
	bigness = 12;
	speed = 30;

	//offest di partenza
	xoff = 1000;
	yoff = 1000;

	//calcolo di altezza e larghezza per rispettare specifiche
	width = size * numberOfTiles;
	height = width;

	//creazione della canvas
	createCanvas(width, height);

	//creazione della grid e del player sulla grid
	myGrid = new grid(numberOfTiles, size);
	myPlayer = new player(myGrid);

	//decido i colori
	grass = color(0,100,0);
	sea = color(0,0,139);
	selectedTileColor = color(255,255,0);

	//setto i colori
	setColor();
}

function draw(){
	background(backgroundColor);

	//controllo e movimento solo su positiveTiles
	if(keyIsDown(87) && (myPlayer.isNearPositive(-1,0) || myPlayer.isNearSelected(-1,0) ) ){
		yoff--;
	}
	if(keyIsDown(83) && (myPlayer.isNearPositive(1,0) || myPlayer.isNearSelected(1,0) ) ){
		yoff++;
	}
	if(keyIsDown(65) && (myPlayer.isNearPositive(0,-1) || myPlayer.isNearSelected(0,-1) ) ){
		xoff--;
	}
	if(keyIsDown(68) && (myPlayer.isNearPositive(0,1) || myPlayer.isNearSelected(0,1) ) ){
		xoff++;
	}

	//mostrare grid e player
	myGrid.show();
	myPlayer.show();
}

/*
	aggiungere funziona con la pressione delle lettere
*/
function keyPressed(){

	//"r" restarta la partita
	if(keyCode == 82){
		xoff += Math.random() * 2000;
		yoff += Math.random() * 2000;
		myGrid = new grid(numberOfTiles, size);
		myPlayer = new player(myGrid);
		setColor();
	}

	//"e" costruisce ponti accanto intorno a lui
	if(keyCode == 69){
		myPlayer.buildBridge();
	}
}


/*
	setta i colori correttamente
*/
function setColor(){
	//assicurare che il quadrato centrale spawni sul positive color
	//erba
	positiveColor = grass;
	//mare
	negativeColor = sea;

	//swap dei colori in caso di necessita
	if(!myPlayer.isPositive()){
		c = positiveColor;
		positiveColor = negativeColor;
		negativeColor = c;
	}
}