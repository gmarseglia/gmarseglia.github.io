class player{

	constructor(grid){
		//grid in cui esiste
		this.grid = grid;

		//posizione di riferimento rispetto alla grid
		this.xPos = grid.getPos().x;
		this.yPos = grid.getPos().y;

		//tile su cui è posizionato
		this.tile = grid.grid[this.xPos][this.yPos];

		this.polarity = this.tile.isPositive();
	}

	//mostra il player settando la tile su cui si trova
	show(){
		this.tile.playerHere = true;
	}

	//ritorna se la tile è positiva
	isPositive(){
		return this.tile.isPositive();
	}

	//ritorna se la tile con gli offset passati è positiva
	isNearPositive(xoffset, yoffset){
		return this.grid.grid[this.xPos + xoffset][this.yPos + yoffset].isPositive() == this.polarity;
	}

	isNearSelected(xoffset, yoffset){
		return this.grid.grid[this.xPos + xoffset][this.yPos + yoffset].selected();
	}

	buildBridge(){
		for(let i = -1; i < 2; i++){
			for(let j = -1; j < 2; j++){
				var xoffset = i;
				var yoffset = j;
				if(!this.isNearPositive(xoffset, yoffset)){
					this.grid.selectedTiles.push(this.grid.grid[this.xPos + xoffset][this.yPos + yoffset].getID());
				}
			}
		}
	}

	addSelection(){
		this.grid.selectedTiles.push( this.tile.getID() );
	}
}