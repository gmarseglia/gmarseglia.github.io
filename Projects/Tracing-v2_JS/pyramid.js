let xx, yy, hor, ver, ratio = 1.3;
function setup(){
	frameRate(120);
	createCanvas(500, 500);
	background(255);
	fill(255);
	ellipse(width/2, height/2, 5, 5);
}

function draw()
{
	if(mouseX <= width + 50 && mouseY <= height + 50)
	{
		//reset background
		strokeWeight(0);
		fill(255);
		rect(0, 0, 500, 500);
		xx = max(0,min(mouseX, width));
		yy = max(0,min(mouseY, height));
		stroke(255);
		right = width - (width - xx)/ratio;
		bottom = height - (height - yy)/ratio;
		left = xx/ratio;
		up = yy/ratio;
		fill(0);
		quad(0,0, left,up, left,bottom, 0,height);
		fill(63);
		quad(0,0, width,0, right,up, left,up);
		fill(129);
		quad(0,height, width,height, right,bottom, left,bottom);
		fill(192);
		quad(width,0, width,height, right,bottom, right,up);
	}
}