function setup() {
	createCanvas(400, 400);
	arcList = [];
	nodeList = [];
	nodeListGlowed = [];
	showingMore = false;
	creatingArc = false;
	backColor = 0;
}

function draw() {

	//reset status
	background(backColor);
	nodeListGlowed = [];
	showingMore = false;


	//show nodes and select hovered
	for(let i = 0; i < nodeList.length; i++){
    	nodeList[i].show();
	    nodeList[i].glow();
	}

	//show arcs
	for(let i = 0; i < arcList.length; i++){
		arcList[i].show();
	}

	//showMore the nearest hovered node
	dist = Infinity;
	nearestNode = null;
	for(let i = 0; i < nodeListGlowed.length; i++){
    	if(nodeListGlowed[i].getMouseDistance() < dist){
    		dist =  nodeListGlowed[i].getMouseDistance();
    		nearestNode = nodeListGlowed[i];
    	}
  	}
	if(nearestNode != null){
    	nearestNode.showMore();
    	showingMore = true;
  	}



}

function mouseClicked(){
	if(showingMore){
		if(!creatingArc){
			creatingArc = true;
			first = nearestNode;
			backColor = 255/2;
		} else {
			if(nearestNode != first) {
				arcList.push(new arc(first, nearestNode));
				first = null;
				creatingArc = false;
				backColor = 0;
			}
		}

    
	} else {
    	nodeList.push(new node(mouseX, mouseY));
	}
}