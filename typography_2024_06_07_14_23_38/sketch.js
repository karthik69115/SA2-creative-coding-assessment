function setup() {
  createCanvas(400, 400);
}
  var word ="Hardwork Pays off!";
var font1,  font2, font3;

function preload(){
  font1 = loadFont ("BlackOpsOne-Regular.ttf");
  font2 = loadFont ("Comfortaa-Light.ttf");
  font3 = loadFont ("ShadowsIntoLight-1.ttf");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  fill(255,0,0); 
  textFont (font1, 35); 
  textAlign (CENTER);
  text(word, width/2,height/2); 
}