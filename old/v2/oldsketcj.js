function setup(){
	backgroundColor = 0;

	/*
		size: risoluzione
		numberOfTiles: numero di quadrati, deve essere dispari
		bigness: zoom della mappa
	*/
	size = 10;
	numberOfTiles = 40 + 1;
	bigness = 10;
	speed = 30;

	//offest di partenza
	xoff = 1000;
	yoff = 1000;

	//calcolo di altezza e larghezza per rispettare specifiche
	width = size * numberOfTiles;
	height = width;

	//	half: valore del quadrato centrale
	half = Math.floor(numberOfTiles/2)*size;

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
	if(keyIsDown(87) && myPlayer.isPositive() == myPlayer.isNearPositive(-1,0) ){
		yoff--;
	}if(keyIsDown(83) && myPlayer.isPositive() == myPlayer.isNearPositive(1,0) ){
		yoff++;
	}if(keyIsDown(65) && myPlayer.isPositive() == myPlayer.isNearPositive(0,-1) ){
		xoff--;
	}if(keyIsDown(68) && myPlayer.isPositive() == myPlayer.isNearPositive(0,1) ){
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

	//"m" aggiunge una tile selected
	if(keyCode == 77){
		myPlayer.addSelection();
	}

	//"r" restarta la partita
	if(keyCode == 82){
		xoff += Math.random() * 2000;
		yoff += Math.random() * 2000;
		myGrid = new grid(numberOfTiles, size);
		myPlayer = new player(myGrid);
		setColor();
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