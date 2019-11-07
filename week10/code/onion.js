console.log("new code");
//
var theNames = {
  'steve': 36,
  "mary": 49,
  peter: 7,
  lou: 120
}
console.log(theNames["mary"]);
console.log(theNames.mary)
console.log(theNames["lou"]);
console.log(theNames.steve);
//
//
var theH1 = $(document).get("h1");
$.getJSON("theData.json", function(theData) {
  // console.log(theData.Dreams);
  let myData = [];
  myData.push(theData.Dreams);
  console.log(typeof myData);
  for (var i = 0; i < myData.length; i++) {
    console.log(myData[0][i].dream)
  }
})
