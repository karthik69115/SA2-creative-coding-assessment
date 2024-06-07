let trail=[];
function setup() {
createCanvas (700, 500);
noStroke();
}
function draw() {
background(0,0,0);
fill('#008000');
trail.push(createVector(mouseX,mouseY));
if (trail.length >85) {
trail.shift();
}
for (let i = 0; i < trail.length; i++) {
const curr=trail [i];
circle (curr.x, curr.y, i / 2);
}
}