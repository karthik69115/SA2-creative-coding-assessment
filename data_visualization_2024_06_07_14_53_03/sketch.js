let animals = [
  { name: "Dodo", year: 1681, cause: "Hunting" },
  { name: "Great Auk", year: 1914, cause: "Hunting" },
  { name: "Tasmanian Tiger", year: 1936, cause: "Hunting" },
  { name: "Stellers Sea Cow", year: 1852, cause: "Deforastation" },
  { name: "Mammoth", year: 2000, cause: "Unknown" }
];

function setup() {
  createCanvas(800, 600);
  textSize(16);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  let startX = 150;
  let barWidth = 118;
  let maxBarHeight = 400;
  let minYear = Math.min(...animals.map(a => a.year));
  let maxYear = Math.max(...animals.map(a => a.year));
  let yearRange = maxYear - minYear;

  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    let x = startX + i * (barWidth + 20);
    let barHeight = map(animal.year, minYear, maxYear, 50, maxBarHeight);
    drawBar(animal.name, animal.year, x, height - 50, barWidth, barHeight);
  }
}

function drawBar(name, year, x, y, w, h) {
  fill(255, 100, 20);
  rect(x, y - h, w, h);
  fill(255,165,0);
  text(name, x + w / 2, y + 20);
  textSize(14);
  text(year, x + w / 2, y - h - 10);
  textSize(14);
}