function setup() {
    createCanvas(640, 360); 
}

function draw() {
    background(255);

    
    fill(0);
    rectMode(CENTER);
    rect(320 - 20, 180 - 80, 5, 65);
    rect(320 + 20, 180 - 80, 5, 65);

    fill(0,255,0);
    circle(320 - 30, 180 - 120, 20);
    circle(320 + 30, 180 - 120, 20);

      
    fill(229,194,152);
    circle(320, 180, 150);

    
    fill(255);
    circle(320 + 30, 180 - 25, 40);
    circle(320 - 30, 180 - 25, 40);

    fill(0,0,0);
    circle(320 + 30 - 10, 180 - 25, 20);
    circle(320 - 30 - 10, 180 - 25, 20);

    
    noFill();
    arc(320, 180+10, 35, 15, 0, PI);
}

