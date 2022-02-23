let oldX, oldY, ctrl = 0, prova = 0, oldprova = 1;

function setup(){
	createCanvas(500, 400);
	background(0);
	fill(237, 201, 175);
	stroke(237, 201, 175);
	strokeWeight(4);
	rect(0,0,400,400);
	oldX = mouseX;
	oldY = mouseY;
}

function draw()
{
	if(ctrl)
	{
		stroke(0);
		//strokeWeight(4);
		line(oldX, oldY, mouseX, mouseY);
	}
	oldX = mouseX;
	oldY = mouseY;

	if(mouseIsPressed && mouseX >= 400 && mouseX <= 500 && mouseY <= 400)
	{
		fill(237, 201, 175);
		stroke(237, 201, 175);
		rect(0,0,400,400);
	}

	if(oldprova != prova)
	{
		console.log(prova);
		oldprova.prova = prova;
	}
}

function mouseClicked()
{
		ctrl = ctrl == 0 ? (mouseX <= 400 && mouseY <= 400 ? 1 : 0) : 0;	
}