let bird;
let pipes;
let distBetween;
let nextSpawn;
let isGameOver = false;

function setup() {
  createCanvas(600, 400);
  distBetween = width / 3;
  nextSpawn = random(distBetween, width - (width / 4));
  pipes = [new Pipe()];
  bird = new Bird(64, height / 2);
}

function draw() {
  background('lightblue');
  
  if (pipes.length <= 0 || width - pipes[pipes.length - 1].x >= nextSpawn) {
    pipes.push(new Pipe());
  }
  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();
    pipes[i].show();
    
    if (pipes[i].hits(bird)) {
      isGameOver = true;
      noLoop();
    }
  }
  
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

class Pipe {
  constructor() {
    this.spacing = 140;
    this.top = random(height / 6, height / 2);
    this.bottom = height - (this.top + this.spacing)
    this.x = width;
    this.width = 60;
    this.speed = 3;
    this.pastBird = false;
  }
  
  show() {
    fill('green')
    rect(this.x, 0, this.width, this.top);
    rect(this.x, height - this.bottom, this.width, this.bottom);
  }
  
  update() {
    this.x -= this.speed;
  }
  
  hits(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x +this.width) {
        return true;
      }
    }
    return false;
  }
}



