

var snake;
var points = 20;
var apple;
var w;
var h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / points);
  h = floor(height / points);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  var x = floor(random(w));
  var y = floor(random(h));
  apple = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(points);
  background("green");
  if (snake.eat(apple)) {
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    print("GAME OVER");
    background("blue");
    noLoop();
  }

  noStroke();
  fill("YELLOW");
  rect(apple.x, apple.y, 1, 1);
}