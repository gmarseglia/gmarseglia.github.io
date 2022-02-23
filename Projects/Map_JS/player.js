class player{

	constructor(map, x, y){
		
		//definizione dell'id
		this.pID = map.getpID();

		//mappa di riferimento
		this.iMap = map;

		//posizione rispetto alla mappa
		this.x = x;
		this.y = y;

		//opzioni di movimento come dizionario
		this.moveOption = {
			87 : createVector(0, -1), //w
			83 : createVector(0, 1),  //s
			65 : createVector(-1, 0), //a
			68 : createVector(1, 0)   //d
		};

		this.iColor = color(Math.floor(Math.random()*2)*255 ,  Math.floor(Math.random()*2)*255,  Math.floor(Math.random()*2)*255);

	}

	//ritorna la polarità della tile con gli offset rispetto al player
	tilePolarityPlayer(xoff, yoff){
		return this.iMap.tilePolarity(this.x + xoff, this.y + yoff);
	}

	//ritorna il colore della tile con gli offset rispetto al player
	tileColorPlayer(xoff, yoff){
		return this.iMap.tileColor(this.x + xoff, this.y + yoff);
	}

	onTilePlayer(xoff, yoff){
		return this.iMap.onTile(this.x + xoff, this.y + yoff);
	}

	//muovi il player, cambiando la posizione nella mappa, tramite la this.moveOption
	move(key){
		this.x += this.moveOption[key].x;
		this.y += this.moveOption[key].y;
	}

	//muovi solo se la tile è della stessa polarità del player
	walk(){
		for(let key in this.moveOption){
			let option = this.moveOption[key];
			if(keyIsDown(key) && this.tilePolarityPlayer(option.x, option.y) ){
				this.move(key);
			}
		}
	}


}