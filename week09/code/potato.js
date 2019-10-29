console.log("yay!");
let theBody = document.querySelector("body");
// console.log(theBody.style);
// let's make the button do something!
const theButton = document.querySelector("#button1");
// console.log(theButton);
theButton.addEventListener('click', clickButton);
//
//
const theOtherButton = document.querySelector("#button2");
// when theOtherButton is clicked, trigger the changeColor function
theOtherButton.addEventListener('click', changeColor);

function changeColor() {
  console.log("change color");
  theBody.style.color = "red";
  theBody.style.backgroundColor = "orange";
}

function clickButton() {
  console.log("clicked!");
}
