class camera{

	constructor(map, player){

		//mappa riferita
		this.iMap = map;

		//player riferito
		this.iPlayer = player;		
	}

	//mostra la mappa ed il player
	show(sizeSquares, halfNumberSquares){
		var numberSquares = 2 * halfNumberSquares + 1, row, col;

		strokeWeight(0.25);
		stroke(0);

		//disegna ogni tile, con row e col rispetto alla canvas
		for(row = 0; row < numberSquares; row++){
			for(col = 0; col < numberSquares; col++){
				//richiedi al player il colore con offset rispetto al player
				fill(this.iPlayer.tileColorPlayer(-halfNumberSquares + row, -halfNumberSquares + col));
				rect(row * sizeSquares, col * sizeSquares, sizeSquares, sizeSquares);
			}
		}
	}
}