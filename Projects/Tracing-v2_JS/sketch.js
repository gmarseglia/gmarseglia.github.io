let wave, count = 0, lasthit = 0, check = 0;
function setup(){
	frameRate(120);
	createCanvas(500, 500);
	background(0, 35, 102);
	strokeWeight(0);
}

function draw()
{
	//reset background
	if(millis() - lasthit > 1000 || millis() <= 1000){
		if(check == 0){
			console.log(-1, millis());
			check++;
		}
		fill(0, 35, 102);
	} else {
		check=0;
		fill(255, 36 , 0)
	}
	rect(0, 0, width, height);
	//move ellipse
	wave = width/2*(1+sin(PI*millis()/3000));
	fill(255);
	ellipse(wave,height/2, 30, 30);
}

function mousePressed()
{
	dist = Math.abs((mouseX - wave)^(2) + (mouseY - height/2)^(2))^(0.5);
	if(dist < 15)
	{
		lasthit = millis();
		console.log(++count, lasthit);
	}
}