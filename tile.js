class tile{

	constructor(xPos, yPos, grid){
		//posizione della tile rispetto alla grid
		this.xPos = xPos;
		this.yPos = yPos;

		//size della tile in pixel
		this.size = grid.size;

		//flag per colorare se il player è su questa tile, di default tile fissa
		this.playerHere = false;

		//grid su cui si trova la tile
		this.grid = grid;
	}

	//ritorna se la tile fa parte di quelle selected della grid
	selected(){
		return includes(this.grid.selectedTiles, this.getID())	
	}

	//mostra la tile
	show(){
		var fillColor;
		if(this.playerHere){
			fillColor = this.grid.playerColor;
		} else {
			if( this.selected() ){
				fillColor = selectedTileColor;
			} else {
				fillColor = this.isPositive() ? positiveColor : negativeColor;
			}
		}

		fill(fillColor);
		strokeWeight(0.25);
		stroke(0);
		rect(this.xPos*this.size, this.yPos*this.size, this.size, this.size);
	}

	//ritorna se la tile è positiva
	isPositive(){
		return noise( (this.xPos + xoff) / bigness, (this.yPos + yoff) / bigness) >= 0.5;
	}

	//ritorna l'ID della tile: (posizione rispetto alla grid + offset)
	getID(){
		return [this.xPos + xoff, this.yPos + yoff];
	}


}