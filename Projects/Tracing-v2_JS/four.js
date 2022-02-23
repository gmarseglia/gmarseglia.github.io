let xx, yy, hor, ver, ratio = 1.3;
function setup(){
	frameRate(120);
	createCanvas(500, 500);
	background(0, 35, 102);
	fill(255);
	ellipse(width/2, height/2, 5, 5);
}

function draw()
{
	if(mouseX <= width + 50 && mouseY <= height + 50)
	{
		//reset background
		stroke(0);
		fill(0, 35, 102);
		rect(0, 0, 500, 500);
		fill(255);
		//ellipse(width/2, height/2, 5, 5);
		//ellipse
		xx = min(mouseX, width);
		yy = min(mouseY, height);
		//ellipse(xx, yy, 8, 8);
		//lines
		stroke(255);
		hor = width - (width - xx)/ratio;
		ver = height - (height - yy)/ratio;
		line(0, 0, xx/ratio, yy/ratio);
		line(0, height, xx/ratio, height - (height - yy)/ratio);
		line(width, 0, width - (width - xx)/ratio, yy/ratio);
		line(width,  height, width - (width - xx)/ratio, height - (height - yy)/ratio);
		line(xx/ratio, yy/ratio, hor, yy/ratio);
		line(xx/ratio, ver, xx/ratio, yy/ratio);
		line(xx/ratio, ver, hor, ver);
		line(hor, ver, hor, yy/ratio);
	}
}