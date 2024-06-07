function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function preload(){
  img=loadImage("gym.jpg")
}

function setup() {
  createCanvas(700, 700);
  background(190,220,250);
  
 
  img.resize(200,200);
  let cnv7 = createGraphics(200,200);  
  cnv7.circle(100,100,190);
  cnv7.canvas.getContext("2d").clip();  
  cnv7.image(img,0,0); 
  image(cnv7,350,225); 
  
  
  img.resize(200,200); 
  let cnv5 = createGraphics(100,100); 
  cnv5.circle(100,100,190); 
  cnv5.square(10,10,60,250,250,10); 
  img.mask(cnv5);
  image(img,300,25); 
  
  
  f = createGraphics(width, height); 
  b = f.canvas.getContext("2d"); 
  f.strokeWeight(10); 
  f.rect(25, 0, 100, 100); 
 b.clip(); 
  f.fill(190, 50, 0); 
  f.circle(100, 100, 100); 
  image(f, 50, 50); 
  
  
  cnv4 = createGraphics(width, height);
  ctx2 = cnv4.canvas.getContext("2d");
  cnv4.rect(100, 200, 200, 200); 
  ctx2.clip(); 
  cnv4.fill(0, 200, 0); 
  cnv4.circle(200, 230, 100); 
  image(cnv4, 0, 0); 

  
  
  cnv3 = createGraphics(width, height);
  cnv3.fill(200,0,0);  
  cnv3.rect(100,200, 200, 200); 
  cnv3.erase();
  cnv3.textSize(50);
  cnv3.text('hello', 130, 350); 
  image(cnv3, 0, 0); 
}


