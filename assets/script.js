function setup() {
  var canvas = createCanvas(windowHeight, windowWidth);
}

function draw() {
  // No need to draw anything in this example
}

function mouseClicked() {
  fill(0, 255, 0); // green color
  ellipse(mouseX, mouseY, 20, 20); // circle centered at mouse position
}

