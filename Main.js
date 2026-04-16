let bird;

function setup() {
  createCanvas(600, 400);
  bird = new Bird(64, height / 2);
}

function draw() {
  background('lightblue');
  bird.update();
  bird.show();
}

function keyPressed() {
  if (key == " ") {
    bird.flap();
  }
}

class Bird {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = 0;
    this.gravity = 0.8;
    this.lift = -15;
  }
  
  show() {
    fill('yellow');
    ellipse(this.x, this.y, 32);
  }
  
  update(){
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;
    
    if (this.y < 0){
      this.y = 0;
      this.velocity = 0;
    }
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
  }
  
  flap() {
    this.velocity += this.lift;
  }
}
