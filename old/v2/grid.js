class grid{

	constructor(numberOfTiles, size){
		//array bi-dimensionale contente le tiles
		this.grid = [];

		//size delle tile
		this.size = size;

		//numero delle tile per lato
		this.numberOfTiles = numberOfTiles;

		//lista delle tile selezionate
		this.selectedTiles = [];

		//popolare l'array bi-dimensionale
		for(let y = 0; y < numberOfTiles; y++){
			var row = [];
			for(let x = 0; x < numberOfTiles; x++){
				row.push(new tile(x, y, this));
			}
			this.grid.push(row);
		}
	}

	//mostra la grid, mostrando le sue tiles
	show(){

		for(let y = 0; y < this.grid.length; y++){
			for(let x = 0; x < this.grid[y].length; x++){
				this.grid[y][x].show();
			}
		}		
	}

	//ritorna la posizione rispetto a se stessa della tile centrale, per il player
	getPos(){
		return createVector(Math.floor(this.numberOfTiles/2), Math.floor(this.numberOfTiles/2) );
	}

}