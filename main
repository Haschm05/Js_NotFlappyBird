let bird;

function setup() {
  createCanvas(600, 400);
  bird = new Bird(64, height / 2);
}

function draw() {
  background('lightblue');
  bird.show();
}

class Bird {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  show() {
    fill('yellow');
    ellipse(this.x, this.y, 32);
  }
}
