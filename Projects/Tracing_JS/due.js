let oldX, oldY, ctrl = 0;

function setup(){
	frameRate(60);
	createCanvas(500, 400);
	background(237, 201, 175);
	stroke(0);
	strokeWeight(4);
	line(400,0,400,400);
	fill(0);
	rect(400,0,100,400);
	oldX = mouseX;
	oldY = mouseY;
}

function draw()
{
	if(mouseIsPressed)
	{
		stroke(ctrl);
		strokeWeight(4);
		line(oldX, oldY, mouseX, mouseY);
	}
	oldX = mouseX;
	oldY = mouseY;
	fill(ctrl);
	stroke(ctrl);
	rect(400,0,100,400);
}

function mouseClicked()
{
	ctrl = ctrl == 0 ? 255 : 0;
}