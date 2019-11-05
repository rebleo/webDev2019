// native js can be anywhere!
console.log("js!");
var theRainbow = ["red", "orange", "yellow", "green", "blue"];
// p5.js code needs to be in or called from the
// setup or drawloop
// setup runs 1 time
function setup() {
  // windowWidth / windowHegith makes the page
  // responsive-ish
  createCanvas(windowWidth, windowHeight);
  let theRandom = random(5, 10);
  // rect(100, 200, 500, 400);
}
//
// draw loop defaults to 60 fps
function draw() {
  background(100, 0, 200);
  for (var i = 0; i < 5; i++) {
    ellipse(50 * i, 50, 100, 80);
  }
  for (let i = 0; i < theRainbow.length; i++) {
    // push + pop to keep styling to what's inbetween
    push();
    fill(theRainbow[i])
    text(theRainbow[i], 100 * i, 300);
    pop();
  }
}
