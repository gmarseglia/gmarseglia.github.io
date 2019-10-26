class player{

	constructor(grid){
		//grid in cui esiste
		this.grid = grid;

		//posizione di riferimento rispetto alla grid
		this.xPos = grid.getPos().x;
		this.yPos = grid.getPos().y;

		//tile su cui è posizionato
		this.tile = grid.grid[this.xPos][this.yPos];

		//utilizzata per far spawnare il player sempre sull'erba
		this.polarity = this.tile.isPositive();

		//vera se in costruzione
		this.building = false;
	}

	//mostra il player settando la tile su cui si trova
	show(){
		this.tile.playerHere = true;
		this.grid.playerColor = color(255);
		if(this.building){
			this.grid.playerColor = color(170);
			this.buildBridge();
		}
	}

	//ritorna se la tile è positiva
	isPositive(){
		return this.tile.isPositive();
	}

	//ritorna se la tile con gli offset passati è positiva
	isNearPositive(xoffset, yoffset){
		return this.grid.grid[this.xPos + xoffset][this.yPos + yoffset].isPositive() == this.polarity;
	}

	//ritorna se la tile con gli offset passati è selected
	isNearSelected(xoffset, yoffset){
		return this.grid.grid[this.xPos + xoffset][this.yPos + yoffset].selected();
	}

	//aggiugne le tile adiacenti (anche in obliquo), appendendo l'ID [int, int] alla grid.selectedTiles
	buildBridge(){
		for(let i = -1; i < 2; i++){
			for(let j = -1; j < 2; j++){

				var xoffset = i;
				var yoffset = j;

				var tile = this.grid.grid[this.xPos + xoffset][this.yPos + yoffset];

				if(!this.isNearPositive(xoffset, yoffset) && !includes(this.grid.selectedTiles,tile.getID() ) ){
					this.grid.selectedTiles.push(tile.getID());
				}
			}
		}
	}


}