class arc{

	constructor(node1, node2){
		this.nodea = node1;
		this.nodeb = node2;
		console.log(node1, node2, this);
	}

	show(){
		stroke(255);
		strokeWeight(2);
		line(this.nodea.x, this.nodea.y, this.nodeb.x, this.nodeb.y);
	}
}