function setup() {
  createCanvas(400, 400);
}
function setup() { 

createCanvas(600, 400);

 background(255); 

stroke(0); 

noFill(); 

strokeWeight(3); 



translate(0, height/2); //change position

beginShape(); 

var noiseCount= 0;//

 for(var i= 0; i< width; i+= 1) { 

var ranY= noise(noiseCount); 

vertex(i, ranY* 100);

 noiseCount+= 0.02; 

} 

endShape();

}












