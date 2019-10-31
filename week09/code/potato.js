console.log("yay!");
//
// string data
let myFirst = 'rebecca';
let myLast = 'leopold';
console.log(myFirst + " " + myLast);
// numeric data
let theQuanity = 19;
let thePrice = .50;
// let theTotal = theQuanity * thePrice;
function theCalculator(theQuantity, thePrice) {
  return theQuanity * thePrice;
}
//
// arrays!
let theEmpty = [];
var theYear = ["January", "Feb", "March", "April", "May", "June"];
console.log(theYear.length);
for (var i = 0; i < theYear.length; i++) {
  console.log(theYear[i])
}
// splice removes items + push adds
// theYear.splice(0, theYear.length);
theYear.push("July");
console.log(theYear)
//
// put the html element into a variable
const myButton = document.querySelector("#button1")
// add an eventListener, a js event + yr call back
myButton.addEventListener('click', clickButton)
// this is callback function
function clickButton() {
  console.log("clicked!");
}
//
// put the html body into a variable
const myBody = document.querySelector('body');
// check out the style properties of that element!
console.log(myBody.style)
const myOtherButton = document.querySelector("#button2")
myOtherButton.addEventListener('click', changeColors)
// call backfunction to respond when users clicks
function changeColors() {
  console.log("colors changed");
  // change the font color
  myBody.style.color = "yellow";
  // change the background color
  myBody.style.backgroundColor = "rebeccapurple"
}
//
//
var theText = document.querySelector('h3');
// this is ES6 arrow notation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
document.addEventListener('keydown', theEvent => {
  if (theEvent.keyCode === 32) {
    console.log("key 32!");
    theText.textContent = "you pressed space!"
  } else {
    if (theEvent.keyCode === 82) {
      console.log("key 82!");
      theText.textContent = "you pressed r!"
    }
  }
})
//
///
