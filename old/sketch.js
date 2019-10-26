function setup(){
	backgroundColor = 0;

	/*
		granularity: risoluzione
		numberOfSquares: numero di quadrati, deve essere dispari
		bigness: zoom della mappa
	*/
	granularity = 8;
	numberOfSquare = 50 + 1;
	bigness = 170 ;
	speed = 30;

	//offest di partenza
	xoff = 1000;
	yoff = 1000;

	//calcolo di altezza e larghezza per rispettare specifiche
	width = granularity * numberOfSquare;
	height = width;

	//	half: valore del quadrato centrale
	half = Math.floor(numberOfSquare/2)*granularity;


	//assicurare che il quadrato centrale spawni sul positive color
	//erba
	positiveColor = color(0,100,0);
	//mare
	negativeColor = color(0,0,139);

/*
	//swap
	if(!noiseValueStd()){
		c = positiveColor;
		positiveColor = negativeColor;
		negativeColor = c;
	}
*/

	//creazione della canvas
	createCanvas(width, height);

	grid = new grid(numberOfSquare, granularity);
	player = new player(grid);

	if(!player.isPositive()){
		c = positiveColor;
		positiveColor = negativeColor;
		negativeColor = c;
	}
}

function draw(){
	background(backgroundColor);

/*
	//modificare xoff e yoff per permettere il movimento
	if(keyIsDown(87) && noiseValueStd() == noiseValue(half,half,xoff, yoff - 1)){
		yoff--;
	}if(keyIsDown(83) && noiseValueStd() == noiseValue(half,half,xoff, yoff + 1) ){
		yoff++;
	}if(keyIsDown(65) && noiseValueStd() == noiseValue(half,half,xoff - 1, yoff) ){
		xoff--;
	}if(keyIsDown(68) && noiseValueStd() == noiseValue(half,half,xoff + 1, yoff) ){
		xoff++;
	}
*/

/*
	//colorare i quadrati
	for(i = 0; i < width; i += granularity){
		for(j = 0; j < height; j += granularity){
			fillColor = noiseValue(i,j,xoff,yoff) ? positiveColor : negativeColor;
			fill(fillColor);
			rect(i, j, granularity,granularity);
		}
	}

	//colorare il quadrato centrale di navigazione
	fill(255);
	strokeWeight(0.25);
	stroke(0);
	half = Math.floor(numberOfSquare/2)*granularity;
	rect(half,half,granularity,granularity);
*/

	if(keyIsDown(87) && player.isPositive() == player.isNearPositive(-1,0) ){
		yoff--;
	}if(keyIsDown(83) && player.isPositive() == player.isNearPositive(1,0) ){
		yoff++;
	}if(keyIsDown(65) && player.isPositive() == player.isNearPositive(0,-1) ){
		xoff--;
	}if(keyIsDown(68) && player.isPositive() == player.isNearPositive(0,1) ){
		xoff++;
	}

	grid.show();
	player.show();
}


/*
	calcolo se positiveColor o negativeColor
*/
function noiseValue(x, y, xoff, yoff){
	return noise( (x + granularity * xoff) / bigness , (y + granularity * yoff) /bigness ) >= 0.5;
}


/*
	come noiseValue ma per la posizione (half, half) e xoff e yoff, quadrato centrale
*/
function noiseValueStd(){
	return noiseValue(half, half, xoff, yoff);
}