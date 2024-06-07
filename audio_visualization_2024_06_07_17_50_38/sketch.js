var mic, fft;

function setup()
{
	background('black');
	createCanvas(windowWidth,300);
	mic = new p5.AudioIn();
	mic.start();
	fft = new p5.FFT();
	fft.setInput(mic);
	noStroke();
}

function draw()
{
	poz = []
	centerX = width/2, centerY = height/1
	translate(centerX,centerY)
	fill('black')
	rect(-centerX,-centerY,centerX*2,centerY*2)
	var spectrum = fft.analyze();
	for (it = 0; it < spectrum.length; it++)
	{
		freq = spectrum[it]
		fill(255,0,0)
		x = cos(it*it*it+freq/200*cos(it)+frameCount*sin(it)/700)*centerX
		y = sin(it*it+frameCount*cos(it)/800+freq/220*sin(it*2))*centerY
		triangle(x,
			y,
			x + 1 + freq/1,
			y + 1 + freq/1, 
			x + 1 + freq/1, 
			y)
		poz.push([x,y,freq])
	}
	for (lineId = 0; lineId<0; lineId++)
	{
		src = random(poz);
		dest = random(poz);
		stroke(0,0,56+cos(lineId+frameCount/99)*70)
		strokeWeight(8)
		if(src[2]>30 && dest[2]>30)
			line(src[0],src[1],dest[0],dest[1])
		noStroke();
	}
}