function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}

let smoke = [];
function mousePressed() {
  smoke.push(new Smoke(mouseX, mouseY));
}

function setup() {
  createCanvas(innerWidth, innerHeight);

  smoke.push(new Smoke(width / 2, height));
}

function draw() {
  background(10);

  smoke.forEach((s) => s.update());
}
