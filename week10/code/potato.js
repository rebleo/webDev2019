console.log("javascript has arrived!");
//
//
//
function theLoad() {
  console.log("window loaded!");
}
window.onload = theLoad;
//
//
const theCanvas = document.getElementById("myCanvas");
const theContxt = theCanvas.getContext("2d");
theContxt.fillStyle = "yellow";
theContxt.fillRect(10, 30, theCanvas.width, 100);
theContxt.beginPath();
for (var i = 0; i < 3; i++) {
  theContxt.arc(100 * i, 75, 50, 0, 2 * Math.PI);
}
theContxt.stroke();
