function setup() {
createCanvas(windowWidth, windowHeight)
angleMode (DEGREES)
rectMode (CENTER)
}
function draw() {
background (10, 255, 30)
noFill()
translate(width / 2, height / 2)
for (var i = 0; i < 190; i++) {
push()
rotate(sin(frameCount + i) * 100)
var r = map(sin(frameCount), 1, 1, 50, 255)
var g = map(cos (frameCount / 2), 1, 1, 50, 255)
var b= map(sin(frameCount / 4), 1, 1, 50, 255)
stroke(r, g, b)
rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i)
pop()
}
  function mousePressed() {
	fill(255);
	strokeWeight(5);
	textFont(archivo);
  textSize(80);
  textAlign(CENTER, CENTER);
	stroke(0);
	text('Hi technology', 2, 3, windowWidth, windowHeight);
	fill(0, 240, 255);
	text('Hi technology', 0, 0, windowWidth, windowHeight);

}
}