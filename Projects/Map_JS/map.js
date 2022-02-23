class map{

	constructor(zoom){

		//lista dei giocatori
		this.players = [];
		this.pID = 0;

		//lista degli eventi
		this.events = [];
		this.eID = 0;

		//zoom della mappa
		this.zoom = zoom;

		//settare i colori
		this.grassColor = color(0,100,0);
		this.seaColor = color(0,0,139);
		this.eventColor = color(139,69,19);
	}

	//aggiunge un giocatore e lo ritorna
	addPlayer(){
		let x,y;

		//assegno polarità positiva ad un player, provando posizioni causali finchè non ho polarità positiva
		do{
			x = Math.floor(1000*Math.random()+1000);
			y = Math.floor(1000*Math.random()+1000);
		} while (!this.tilePolarity(x,y));

		//pusha il player nella lista this.players[]
		this.players.push(new player(this, x, y));
		return this.players[this.players.length - 1];
	}

	//ritorna l'ID da assegnare al player
	getpID(){
		this.pID++;
		return this.pID;
	}

	//ritorna l'ID da assegnare all'evento
	geteID(){
		this.eID++;
		return this.eID;
	}

	//ritorna la polarità della tile con posizione rispetto alla mappa
	tilePolarity(x, y){
		return noise(x / this.zoom, y / this.zoom) >= 0.5;
	}

	//ritorna il colore della tile con posizione rispetto alla mappa, compresi i players e gli eventi
	tileColor(x, y){
		let element = this.onTile(x, y);
		if(element != null){
			return element.iColor; 
		} else {
			return this.tilePolarity(x, y) ? this.grassColor : this.seaColor;
		}
	}

	//ritorna l'oggetto sulla tile con posizione rispetto alla mappa, o null se vuota
	onTile(x, y){
		for(let player of this.players){
			if(player.x == x && player.y == y){
				return player;
			}
		}
		for(let event of this.events){
			if(event.x == x && event.y == y){
				return event;
			}
		}
		return null;
	}

}