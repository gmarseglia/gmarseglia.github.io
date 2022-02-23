class node{
  
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 5;
  }

  show(){
    fill(200);
    ellipse(this.x,this.y,this.r,this.r);
  }
  
  glow(){
  	if(this.getMouseDistance() < this.r){
    	nodeListGlowed.push(this);
   	}
  }
  
  showMore(){
   	fill(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
  
  getMouseDistance(){
  	return Math.sqrt( Math.pow(mouseX - this.x,2) + Math.pow(mouseY - this.y, 2)); 
  }

}